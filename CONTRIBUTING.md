# Contributing to Awesome Free AI

Accuracy beats list size. You can correct an outdated entry, report a broken link, or suggest an AI tool with meaningful recurring free access.

## Rules

1. Search the list, [open issues](https://github.com/FullThrottle83/awesome-free-ai/issues), and [PRs](https://github.com/FullThrottle83/awesome-free-ai/pulls) for duplicates.
2. Submit one new tool per PR, alphabetically within the relevant category. Corrections can cover multiple entries.
3. No time-limited trials, signup-only promotional credits, or unaffiliated generic utilities masquerading as free AI.
4. Link a **first-party source** documenting the free tier, open-source license, or restrictions. Include **Source checked: YYYY-MM-DD**; never guess limits.
5. Explain relevant limitations: rate limits, required payment cards, API inference, model licenses, commercial-use rights, data handling, and geographic restrictions. State uncertainty instead of asserting unverified facts.
6. Disclose whether you are the developer, employee, reseller, affiliate, or otherwise affiliated with the product.
7. Use clear, objective English; no superlatives or marketing copy.

## Entry format

```md
- 💸 [Example](https://example.com/) - A concise factual description.
  - **Free Tier Details:** Recurring quota, important restrictions, and [official source](https://example.com/pricing). **Source checked:** YYYY-MM-DD.
  - **Tags:** `ai-api`, `freemium`
```

Labels: 💿 OSI-licensed open source, 💸 freemium, 🎁 free service, ⚠️ restricted / not verified. Software being free does not mean model inference, infrastructure or commercial rights are free.

## Local check

Install Node.js 22 or later, then run `node scripts/check-catalog.mjs`. It checks basic structure and duplicates, **not** live URLs or vendor pricing. A passing check does not prove a tool is currently free.

## Checklist

- [ ] The listing is not already present or pending in another PR.
- [ ] I verified the recurring free access or open-source license with an official source.
- [ ] I provided the date checked and important restrictions.
- [ ] I disclosed my affiliation (or explicitly stated none).
- [ ] I ran the local catalog check.

Contributions are reviewed for quality and evidence. Please discuss disagreements respectfully.
