# Full SEO Audit Report - Itaara Reserve

Data: 2026-06-17  
Escopo: auditoria full-site do pacote novo preparado para `https://itaarareserve.com.br/`, usando o preview local `http://127.0.0.1:49340/` e os arquivos fonte em `outputs/itaara-reserve-lp`.

## A) Audit Summary

Overall rating: pronto para publicação, com confiança alta para SEO técnico estático.

Top 3 correções aplicadas nesta revisão:

1. Metadados principais refinados: title, description, Open Graph, Twitter Card e dimensões de imagem social.
2. Rastreabilidade ampliada: `robots.txt` com sitemap e crawlers de busca/IA explicitamente permitidos; `llms.txt` criado.
3. Performance preventiva: imagens visíveis convertidas para WebP, `width`/`height` adicionados e lazy-load aplicado abaixo da dobra.

Top 3 oportunidades pós-publicação:

1. Rodar PageSpeed Insights no domínio principal após a troca na Hostinger.
2. Conectar Google Search Console e enviar `https://itaarareserve.com.br/sitemap.xml`.
3. Validar juridicamente as páginas de Termos, Privacidade e Cookies.

## B) Findings Table

| Area | Severity | Confidence | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- | --- |
| Crawlability | Pass | Confirmed | O pacote está indexável. | `meta robots="index, follow"`, canonical `https://itaarareserve.com.br/`, `robots.txt` status 200 e sitemap declarado. | Manter `robots.txt` e `sitemap.xml` na raiz da `public_html`. |
| AI/GEO | Pass | Confirmed | `llms.txt` existe e está bem estruturado. | `llms_txt_checker.py`: status 200, 4 seções, 5 links, score 95/100. | Nenhuma ação imediata. |
| AI crawler policy | Pass | Confirmed | Crawlers relevantes estão explicitamente permitidos. | `robots_checker.py`: Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, CCBot, anthropic-ai, FacebookBot e Amazonbot com `Allow: /`. | Nenhuma ação imediata. |
| Metadata | Pass | Confirmed | Title, description, canonical e social tags estão presentes. | `parse_html.py`: title `Itaara Reserve | Condomínio pronto com terrenos em Itaara`; description comercial com Itaara, RS, terrenos, lagos e Santa Maria; canonical correto. `social_meta.py`: Open Graph 7/7, Twitter Card 4/6, faltando apenas campos opcionais. | Nenhuma ação imediata. |
| Heading structure | Pass | Confirmed | A página tem estrutura clara de headings. | `parse_html.py`: 1 H1, H2s por seção e H3s nos cards. | Nenhuma ação imediata. |
| Internal links | Pass | Confirmed | As rotas principais estão conectadas. | `internal_links.py`: 4 páginas rastreadas, 4 URLs encontradas, profundidade 1. | Após publicar, testar novamente no domínio principal. |
| Broken links | Pass | Confirmed | Nenhum link quebrado encontrado. | `broken_links.py`: 9 links testados, 9 saudáveis, 0 quebrados. | Nenhuma ação imediata. |
| Structured data | Pass | Confirmed | JSON-LD válido com WebPage, WebSite, Organization e Place. | `parse_html.py`: schema detectado como `WebPage` com `publisher`, `about`, `address` e imagem. | Nenhuma ação imediata. |
| Images | Pass | Confirmed | Todas as imagens têm alt e dimensões explícitas. | Validação local: `all_images_have_alt=True`, `all_images_have_dimensions=True`, `missing_assets=[]`. | Nenhuma ação imediata. |
| Performance | Warning | Confirmed | O mapa ainda é uma imagem grande, embora lazy-loaded e só exibida sob interação. | `mapa-itaara.webp` = 827958 bytes; `loading="lazy"`. | Opcional: criar versão menor do mapa para mobile ou abrir mapa em arquivo dedicado. |
| Core Web Vitals | Info | Hypothesis | Métricas reais ainda precisam ser medidas no domínio final. | O domínio principal ainda hospeda o site antigo; PageSpeed no domínio novo só será confiável após publicação na Hostinger. | Rodar PageSpeed Insights após a troca do DNS/arquivos. |
| Legal/LGPD | Info | Likely | Páginas legais existem, mas precisam de revisão jurídica. | Rotas criadas: `/termos-e-condicoes/`, `/politica-de-privacidade/`, `/politica-de-cookies-br/`. | Validar conteúdo com jurídico antes da publicação final. |

## C) Score Card

Score confidence: alta para SEO técnico estático; baixa para Core Web Vitals reais até o domínio principal receber o site novo.

- On-page SEO: 92/100
- Technical SEO: 94/100
- Crawlability: 96/100
- Schema: 88/100
- Images: 86/100
- GEO/AI readiness: 92/100

Justificativa: a página tem canonical, robots, title, description, Open Graph, schema, sitemap, rotas legais, `llms.txt` e links saudáveis. As perdas restantes vêm da ausência de medição PageSpeed no domínio final e do mapa ainda pesado.

## D) Unknowns and Follow-ups

1. PageSpeed/Core Web Vitals: rodar no domínio `https://itaarareserve.com.br/` depois da publicação.
2. Search Console: enviar sitemap e solicitar indexação da home após a troca.
3. Legal: validar Termos, Privacidade e Cookies com responsável jurídico.
4. Analytics: definir se haverá GA4, Meta Pixel ou Tag Manager; se houver, atualizar a política de privacidade/cookies.
