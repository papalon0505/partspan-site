# Revstage Website

Public pre-launch product site for Revstage:
[partspan.evelyn-ai.com](https://partspan.evelyn-ai.com/).

Revstage is a local-first BOM control workspace in development for small hardware teams. The current page describes its product direction and planned Mac and iPad App Store availability. Revstage is not yet available for download; pricing and release timing have not been announced.

## Public content boundary

This repository contains the static marketing site and public distribution material only. It does not contain or link to the Revstage product source code; the product repository remains private.

The site describes capabilities as product direction, not as a currently released build. It does not publish unverified prices, release dates, or App Store listings. The earlier PartSpan v0.1.1 release remains available as a legacy artifact.

The voluntary pilot link opens a public GitHub issue. Do not submit confidential BOMs, customer names, credentials, or proprietary part lists there.

## Site structure

- `index.html`: English product overview, features, data ownership, availability, and pilot information.
- `styles.css`: responsive styles; no external UI framework or runtime dependency.
- `distribution.js`: optional campaign attribution for the voluntary pilot request only.
- `llms.txt`: concise, current public product facts for AI crawlers.
- `CNAME`: existing site domain.

GitHub Pages deploys this repository's `main` branch through `.github/workflows/pages.yml`.
