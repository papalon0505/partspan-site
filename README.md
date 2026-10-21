# Revstage Website

Public product site for Revstage:
[partspan.evelyn-ai.com](https://partspan.evelyn-ai.com/).

Revstage is a local-first BOM control workspace for small hardware teams. The site offers the Mac download (0.3.1), pricing with Polar checkout links, and the Mac App Store status.

## Public content boundary

This repository contains the static marketing site and public distribution material only. It does not contain or link to the Revstage product source code; the product repository remains private.

The site describes capabilities as product direction, not as a currently released build. Prices follow the owner decision on the product repository (Pro US$100/year, Team US$300/year). The earlier PartSpan v0.1.1 release remains available as a legacy artifact.

The voluntary pilot link opens a public GitHub issue. Do not submit confidential BOMs, customer names, credentials, or proprietary part lists there.

## Site structure

- `index.html`: English product overview, features, data ownership, download, pricing, App Store status, and pilot information.
- `thanks/`: page shown after a Polar checkout.
- `styles.css`: responsive styles; no external UI framework or runtime dependency.
- `distribution.js`: optional campaign attribution for the voluntary pilot request only.
- `llms.txt`: concise, current public product facts for AI crawlers.
- `CNAME`: existing site domain.

GitHub Pages deploys this repository's `main` branch through `.github/workflows/pages.yml`.
