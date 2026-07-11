# PartSpan Public Site

Static Cloudflare Pages site for the public PartSpan Free Edition launch.

This site is intentionally separate from the private product source. It contains positioning, free edition instructions, and sample BOM material only.

## Deploy

After Cloudflare authentication:

```bash
npx wrangler pages deploy . --project-name partspan
```

Then attach the chosen custom domain in Cloudflare Pages.

## Current public URL

GitHub Pages is enabled as the immediate $0 public launch URL:

https://papalon0505.github.io/partspan-site/

Public desktop 0.1.1 release candidate downloads are hosted on GitHub Releases:

https://github.com/papalon0505/partspan-site/releases/tag/v0.1.1-desktop-rc

Published installer checksums are mirrored at:

https://partspan.evelyn-ai.com/SHA256SUMS.txt

## Cloudflare DNS fallback

If Cloudflare Pages deployment is not authenticated yet, the existing Cloudflare domain can still point to GitHub Pages:

1. Add a `CNAME` DNS record for the chosen subdomain.
2. Target: `papalon0505.github.io`
3. Add the same custom domain in GitHub Pages settings for `papalon0505/partspan-site`.
4. Keep HTTPS enabled.

Do not proxy the record until GitHub Pages custom domain verification is complete.
