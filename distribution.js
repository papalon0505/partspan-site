(() => {
  const allowedKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'ref']

  function clean(value) {
    if (typeof value !== 'string') return ''
    return value
      .trim()
      .replace(/[^a-zA-Z0-9._ -]/g, '')
      .slice(0, 80)
  }

  function readAttribution() {
    const params = new URLSearchParams(window.location.search)
    const current = {}
    for (const key of allowedKeys) {
      const value = clean(params.get(key) || '')
      if (value) current[key] = value
    }

    if (Object.keys(current).length > 0) {
      try {
        window.sessionStorage.setItem('partspan-attribution', JSON.stringify(current))
      } catch {
        // Attribution is optional; never block the page.
      }
      return current
    }

    try {
      const stored = JSON.parse(window.sessionStorage.getItem('partspan-attribution') || '{}')
      return Object.fromEntries(
        Object.entries(stored)
          .filter(([key, value]) => allowedKeys.includes(key) && clean(value))
          .map(([key, value]) => [key, clean(value)]),
      )
    } catch {
      return {}
    }
  }

  function buildPilotUrl(attribution) {
    const lines = [
      'I would like to evaluate PartSpan with a real, non-confidential electronics BOM workflow.',
      '',
      'Please do not include confidential BOMs, customer names, credentials, proprietary part lists, or other sensitive company information in this public issue.',
      '',
      '### About the workflow',
      '- Team / role:',
      '- Current BOM process (for example Excel, Google Sheets, InvenTree, BOMIST, PLM):',
      '- Approximate number of active products / BOMs:',
      '- Main problem you want to test with PartSpan:',
      '',
      '### Voluntary acquisition attribution',
    ]

    const entries = Object.entries(attribution)
    if (entries.length === 0) {
      lines.push('- Source: direct / unknown')
    } else {
      for (const [key, value] of entries) lines.push(`- ${key}: ${value}`)
    }

    lines.push('', 'I understand this is a public GitHub issue and I will not post confidential company data.')

    const url = new URL('https://github.com/papalon0505/partspan-site/issues/new')
    url.searchParams.set('title', 'PartSpan pilot interest')
    url.searchParams.set('body', lines.join('\n'))
    return url.toString()
  }

  const attribution = readAttribution()
  const pilotUrl = buildPilotUrl(attribution)

  for (const id of ['pilot-link', 'pilot-link-hero']) {
    const link = document.getElementById(id)
    if (link) {
      link.href = pilotUrl
      link.target = '_blank'
      link.rel = 'noopener'
    }
  }

  for (const link of document.querySelectorAll('a[href*="/releases/download/"]')) {
    link.dataset.partspanAttribution = JSON.stringify(attribution)
  }
})()
