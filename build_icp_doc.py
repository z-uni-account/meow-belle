#!/usr/bin/env python3
"""Markdown -> Google-Docs-friendly HTML (inline CSS only). Meow Belle brand."""
import re, html, sys

BLUE, AMBER, INK, GREY = "#012BF8", "#FFC24B", "#0A0E1A", "#5A6070"
RED, GREEN = "#C0392B", "#1E7A46"

def inline(t):
    t = html.escape(t)
    t = re.sub(r'`([^`]+)`',
               r'<span style="font-family:Courier New,monospace;font-size:9.5pt;'
               r'background-color:#F0F2F7;color:#333;">\1</span>', t)
    t = re.sub(r'\[([^\]]+)\]\(([^)]+)\)',
               rf'<a href="\2" style="color:{BLUE};">\1</a>', t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t)
    t = re.sub(r'(?<!\*)\*([^*\n]+)\*(?!\*)', r'<i>\1</i>', t)
    t = re.sub(r'~~([^~]+)~~', r'<s>\1</s>', t)
    return t

def cellstyle(is_head):
    if is_head:
        return (f'border:1px solid #C9CEDC;padding:6px 9px;background-color:{BLUE};'
                'color:#FFFFFF;font-size:9.5pt;font-weight:bold;text-align:left;')
    return 'border:1px solid #C9CEDC;padding:6px 9px;font-size:10pt;vertical-align:top;'

def convert(md):
    lines = md.split('\n')
    out, i, n = [], 0, len(lines)
    while i < n:
        ln = lines[i]
        s = ln.strip()

        # fenced code
        if s.startswith('```'):
            i += 1; buf = []
            while i < n and not lines[i].strip().startswith('```'):
                buf.append(html.escape(lines[i])); i += 1
            i += 1
            out.append('<p style="font-family:Courier New,monospace;font-size:9pt;'
                       'background-color:#F4F6FA;border-left:3px solid #C9CEDC;'
                       'padding:8px 10px;white-space:pre-wrap;">' + '<br>'.join(buf) + '</p>')
            continue

        if not s:
            i += 1; continue

        # hr
        if re.fullmatch(r'-{3,}|\*{3,}|_{3,}', s):
            out.append(f'<p style="border-bottom:2px solid {AMBER};margin:20px 0 4px 0;'
                       'font-size:1pt;">&nbsp;</p>')
            i += 1; continue

        # table
        if s.startswith('|') and i + 1 < n and re.match(r'^\|[\s:|-]+\|?\s*$', lines[i+1].strip()):
            def cells(row):
                r = row.strip().strip('|')
                return [c.strip() for c in r.split('|')]
            head = cells(s); i += 2
            rows = []
            while i < n and lines[i].strip().startswith('|'):
                rows.append(cells(lines[i])); i += 1
            t = ['<table style="border-collapse:collapse;width:100%;margin:10px 0 16px 0;">']
            t.append('<tr>' + ''.join(
                f'<td style="{cellstyle(True)}">{inline(c)}</td>' for c in head) + '</tr>')
            for k, r in enumerate(rows):
                bg = '' if k % 2 == 0 else 'background-color:#F7F8FC;'
                r = r + [''] * (len(head) - len(r))
                t.append('<tr>' + ''.join(
                    f'<td style="{cellstyle(False)}{bg}">{inline(c)}</td>' for c in r[:len(head)])
                    + '</tr>')
            t.append('</table>')
            out.append(''.join(t)); continue

        # headings
        m = re.match(r'^(#{1,6})\s+(.*)$', s)
        if m:
            lvl, txt = len(m.group(1)), inline(m.group(2))
            st = {
                1: f'font-size:24pt;color:{BLUE};font-weight:bold;margin:26px 0 10px 0;'
                   f'border-bottom:3px solid {AMBER};padding-bottom:5px;',
                2: f'font-size:17pt;color:{BLUE};font-weight:bold;margin:24px 0 8px 0;',
                3: f'font-size:13pt;color:{INK};font-weight:bold;margin:18px 0 6px 0;',
            }.get(lvl, f'font-size:11.5pt;color:{INK};font-weight:bold;margin:14px 0 5px 0;')
            out.append(f'<h{min(lvl,4)} style="{st}">{txt}</h{min(lvl,4)}>')
            i += 1; continue

        # blockquote block
        if s.startswith('>'):
            buf = []
            while i < n and lines[i].strip().startswith('>'):
                buf.append(re.sub(r'^\s*>\s?', '', lines[i])); i += 1
            # rejoin soft-wrapped lines so ** spanning a newline still renders
            paras, cur = [], []
            for b in buf:
                if b.strip():
                    cur.append(b.strip())
                else:
                    if cur: paras.append(' '.join(cur)); cur = []
            if cur: paras.append(' '.join(cur))
            body = '<br><br>'.join(inline(p) for p in paras)
            out.append(f'<table style="border-collapse:collapse;width:100%;margin:10px 0;">'
                       f'<tr><td style="background-color:#EEF1FC;border-left:4px solid {BLUE};'
                       f'padding:10px 14px;font-size:10.5pt;color:#20263A;">{body}</td></tr></table>')
            continue

        # lists
        if re.match(r'^([-*+]|\d+\.)\s+', s):
            items = []
            ordered = bool(re.match(r'^\d+\.\s+', s))
            while i < n:
                cur = lines[i]
                cs = cur.strip()
                m2 = re.match(r'^([-*+]|\d+\.)\s+(.*)$', cs)
                if m2 and (len(cur) - len(cur.lstrip())) < 2:
                    items.append([m2.group(2)]); i += 1
                elif items and cs and not re.match(r'^(#{1,6}\s|\||>)', cs) \
                        and (len(cur) - len(cur.lstrip())) >= 2:
                    m3 = re.match(r'^([-*+]|\d+\.)\s+(.*)$', cs)
                    if m3:
                        items[-1].append('<SUB>' + m3.group(2))
                    else:
                        items[-1].append(cs)
                    i += 1
                else:
                    break
            tag = 'ol' if ordered else 'ul'
            li = []
            for parts in items:
                main, subs = [], []
                for p in parts:
                    (subs if p.startswith('<SUB>') else main).append(p.replace('<SUB>', ''))
                txt = inline(' '.join(main))
                if subs:
                    txt += '<ul style="margin:3px 0 3px 0;">' + ''.join(
                        f'<li style="font-size:10pt;margin:2px 0;">{inline(x)}</li>'
                        for x in subs) + '</ul>'
                li.append(f'<li style="font-size:10.5pt;margin:4px 0;line-height:1.45;">{txt}</li>')
            out.append(f'<{tag} style="margin:6px 0 12px 0;padding-left:26px;">'
                       + ''.join(li) + f'</{tag}>')
            continue

        # paragraph
        buf = []
        while i < n and lines[i].strip() and not re.match(
                r'^\s*(#{1,6}\s|>|\||```|[-*+]\s|\d+\.\s|-{3,}$)', lines[i].strip()):
            buf.append(lines[i].strip()); i += 1
        if buf:
            out.append('<p style="font-size:10.5pt;line-height:1.5;margin:6px 0;">'
                       + inline(' '.join(buf)) + '</p>')
        else:
            i += 1
    return '\n'.join(out)


if __name__ == '__main__':
    src, dst, title = sys.argv[1], sys.argv[2], sys.argv[3]
    md = open(src, encoding='utf-8').read()
    # drop the leading H1 (title comes from the doc name)
    md = re.sub(r'^#\s+.*\n', '', md, count=1)
    body = convert(md)
    doc = f"""<!DOCTYPE html><html><head><meta charset="utf-8"><title>{html.escape(title)}</title></head>
<body style="font-family:Arial,Helvetica,sans-serif;color:{INK};font-size:10.5pt;line-height:1.5;">
<h1 style="font-size:28pt;color:{BLUE};font-weight:bold;margin:0 0 2px 0;">{html.escape(title)}</h1>
<p style="font-size:11pt;color:{GREY};margin:0 0 4px 0;">Foundational research for every Meow Belle ad, headline and product page. Built 27 July 2026.</p>
<p style="border-bottom:3px solid {AMBER};margin:0 0 18px 0;font-size:1pt;">&nbsp;</p>
{body}
</body></html>"""
    open(dst, 'w', encoding='utf-8').write(doc)
    print('wrote', dst, len(doc), 'bytes')

# ---------------------------------------------------------------------------
# Rebuild the Google Doc IN PLACE (keeps the same URL, name and sharing):
#
#   /usr/bin/python3 build_icp_doc.py ICP-RESEARCH.md /tmp/icp.html \
#       "Meow Belle — Cat Owner Research (ICP & Buyer Profile)"
#   export PATH="/opt/homebrew/bin:$PATH"
#   gws drive files update \
#     --params '{"fileId":"18t8dNxN22Q2gb6opEnJg98HTwD353o1XTTKvAk5Tj94"}' \
#     --upload /tmp/icp.html
#
# DOC_ID = 18t8dNxN22Q2gb6opEnJg98HTwD353o1XTTKvAk5Tj94
# Never use files.copy to refresh it: that mints a new id and churns the URL.
# ---------------------------------------------------------------------------
