# PartSpan Distribution Measurement Contract

Last verified: 2026-10-03

This document defines the minimum acquisition evidence for the public PartSpan distribution surface. It does not change the private product roadmap, release gate, billing model, or product telemetry policy.

## Goal

Create a measurable path from qualified discovery to an identifiable, voluntary pilot conversation without adding silent in-product telemetry or requiring cloud storage of BOM data.

The funnel is:

`DISCOVERABILITY -> QUALIFIED LANDING VISIT -> INSTALLER REQUEST / PILOT INTEREST -> ACTIVATION FEEDBACK -> 7/30-DAY FOLLOW-UP -> PAID INTEREST`

Only the first three stages are implemented by this baseline.

## Current public baseline

Public repository: `papalon0505/partspan-site`

Current public release: `v0.1.1`

Current installer counters are aggregate GitHub release download counts. They are useful as a coarse attention signal but cannot identify unique users or acquisition source.

Do not interpret a GitHub `download_count` as:

- a unique user count;
- an installation count;
- an activated user count;
- a retained user count;
- a customer count.

## Campaign attribution

Campaign links may use only these query parameters:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `ref`

Example:

`https://partspan.evelyn-ai.com/?utm_source=reddit&utm_medium=community&utm_campaign=excel-bom`

The website keeps these values only in the current browser session so that a user who voluntarily opens a pilot-interest issue can include the acquisition source in that public issue.

The attribution values are not sent to a PartSpan server merely by visiting or downloading.

## Pilot contact path

The website exposes a voluntary **Join the pilot** action.

It opens a pre-filled GitHub issue in the public `partspan-site` repository. GitHub account identity makes the request follow-up-capable without collecting an additional email address.

The issue explicitly warns users not to post:

- BOM files;
- customer names;
- credentials;
- proprietary part lists;
- unreleased product details;
- other sensitive company information.

This is suitable only for non-confidential pilot intake.

## Privacy boundary

This baseline intentionally does **not** add:

- in-product analytics;
- background telemetry;
- cookies for marketing analytics;
- third-party tracking pixels;
- silent upload of local workspace data;
- fingerprinting;
- hidden contact collection.

Any future analytics provider or product telemetry requires a separate governed decision with a clear privacy model.

## Measurement

For the current baseline, record:

1. aggregate stable installer download counts by GitHub release asset;
2. number of voluntary pilot-interest issues;
3. pilot source/campaign values when the user voluntarily submits them;
4. number of qualified pilot requests that match the target profile.

Qualified target profiles include:

- hardware startups preparing for NPI or small-batch production;
- embedded / PCB design consultancies;
- small EMS / contract manufacturing teams;
- engineering labs with repeated BOM / inventory workflows.

## Acquisition gate

The first distribution validation envelope is satisfied by either:

- at least 20 identifiable qualified pilot contacts; or
- at least 100 externally attributable primary-installer requests from qualified campaigns once a trustworthy website-side attribution mechanism is available.

The second threshold is not considered measurable by GitHub release counters alone.

## Truthfulness rule

The public site must describe only the currently available public build.

For v0.1.1:

- Free Edition is public.
- macOS Apple Silicon and Windows x64 installers are public.
- macOS signing/notarization status may be stated only as verified for the published artifact.
- Windows unsigned/SmartScreen warning must remain visible while true.
- Paid local licensing is under development and must not be presented as a currently purchasable capability.
- Unmerged private-repository PRs must not be advertised as shipping features.

## Next evidence

After this baseline is deployed, the next distribution decision should use observed acquisition evidence rather than adding product features merely to compensate for low traffic.
