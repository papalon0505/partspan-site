# PartSpan Public Site

Static Cloudflare Pages site for the public PartSpan Free Edition launch.

This site is intentionally separate from the private product source. It contains positioning, free edition instructions, and sample BOM material only.

## Deploy

After Cloudflare authentication:

```bash
npx wrangler pages deploy . --project-name partspan
```

Then attach the chosen custom domain in Cloudflare Pages.
