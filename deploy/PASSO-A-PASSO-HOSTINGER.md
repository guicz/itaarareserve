# Deploy na Hostinger - Itaara Reserve

Este pacote foi preparado para substituir o site atual por uma landing page estática. Não precisa de Node, banco de dados ou build na Hostinger.

## 1. Antes de trocar: fazer backup

Sim, faça backup do site antigo antes de qualquer alteração.

No hPanel da Hostinger:

1. Acesse **Sites**.
2. Entre no site **itaarareserve.com.br**.
3. Abra **Arquivos > Gerenciador de Arquivos**.
4. Entre na pasta `public_html`.
5. Selecione todos os arquivos e pastas atuais.
6. Compacte em um arquivo, por exemplo: `backup-site-antigo-itaarareserve-2026-06-17.zip`.
7. Baixe esse ZIP para o computador.

Se o site antigo for WordPress, faça também backup do banco:

1. No hPanel, acesse **Banco de dados > phpMyAdmin** ou **Backups**.
2. Exporte o banco usado pelo WordPress.
3. Guarde o arquivo `.sql` junto com o backup dos arquivos.

## 2. Preservar o site antigo no servidor

Depois de baixar o backup, uma forma segura é renomear a pasta atual:

1. Dentro do Gerenciador de Arquivos, na raiz do domínio, renomeie `public_html` para `public_html_antigo`.
2. Crie uma nova pasta chamada `public_html`.
3. O novo site será enviado para essa nova `public_html`.

Se a Hostinger não permitir renomear `public_html`, crie uma pasta `backup-site-antigo` e mova os arquivos antigos para ela, depois suba o novo site na `public_html`.

## 3. Subir o novo site

1. Abra a nova pasta `public_html`.
2. Faça upload do arquivo `itaarareserve-hostinger.zip`.
3. Extraia o ZIP dentro de `public_html`.
4. Confira se os arquivos ficaram diretamente em `public_html`, assim:
   - `public_html/index.html`
   - `public_html/styles.css`
   - `public_html/script.js`
   - `public_html/.htaccess`
   - `public_html/robots.txt`
   - `public_html/sitemap.xml`
   - `public_html/assets/...`
   - `public_html/termos-e-condicoes/index.html`
   - `public_html/politica-de-privacidade/index.html`
   - `public_html/politica-de-cookies-br/index.html`

Não deixe o site dentro de uma subpasta como `public_html/itaarareserve-hostinger/index.html`, pois isso quebraria a página inicial.

## 4. Testar após o upload

Acesse:

- `https://itaarareserve.com.br/`
- `https://itaarareserve.com.br/termos-e-condicoes/`
- `https://itaarareserve.com.br/politica-de-privacidade/`
- `https://itaarareserve.com.br/politica-de-cookies-br/`
- `https://itaarareserve.com.br/sitemap.xml`
- `https://itaarareserve.com.br/robots.txt`

Também teste:

- botões de WhatsApp;
- formulário;
- banner de cookies;
- vídeo do hero;
- menu mobile;
- mapa.

## 5. SSL e cache

No hPanel, confira se o SSL do domínio está ativo. O arquivo `.htaccess` já força HTTPS e remove o `www`, direcionando para:

`https://itaarareserve.com.br/`

Se após subir o site continuar aparecendo o antigo, limpe o cache da Hostinger, CDN ou navegador.

## 6. Depois de publicar

No Google Search Console:

1. Verifique a propriedade `https://itaarareserve.com.br/`.
2. Envie o sitemap: `https://itaarareserve.com.br/sitemap.xml`.
3. Solicite inspeção da página inicial.

## Observação legal

As páginas de Termos, Privacidade e Cookies foram criadas como minutas. Recomenda-se revisão jurídica antes da publicação definitiva.
