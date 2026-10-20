# Research and assistant AI catalog update (October 2026)

Research baseline: `660de61a9e737009a19ced43587973eb05ae8b2c` from Gemini Task batch 2, independently checked against available vendor documentation.

## Editorial decisions

- Refreshed the six original research and assistant listings; removed the hosted HuggingFace Chat entry due to October 2026 removal of recurring free inference credits ([staff confirmation](https://discuss.huggingface.co/t/did-huggingface-remove-the-credits-given-to-free-users/189971)). The open-source `chat-ui` remains a different, potentially qualifying project.
- Removed the old [DeepSeek API](https://api-docs.deepseek.com/quick_start/pricing/) listing from Infrastructure & APIs because normal API usage is pay-per-token, without a documented recurring free API allocation.
- Added 14 selectively researched tools, distinguishing consumer chat, hosted research services, self-hosted UIs and open scholarly infrastructure.
- Free ChatGPT and Gemini capabilities are intentionally described without hardcoded model names because vendors update entitlements and limits.
- OpenAlex: correct free **$1/day API usage budget with a free key**, not 100,000 free requests per day.

## Deferred proposals

Connected Papers was deferred as it adds limited distinct value over ResearchRabbit at present; Microsoft Copilot was deferred because Gemini's corrected audit rated the evidence LOW. Other tool categories remain subject to future audits.

## Evidence caveats

- A first-party pricing page is evidence of published offers, **not** a hands-on service test.
- Paperpal retaining manuscript copyright does not itself establish universal commercial-use permission for every product feature.
- GDPR suitability depends on configuration, organizational context, subprocessors and data-transfer terms; no tool is guaranteed GDPR-compliant by this list.
- The Hugging Face inference pricing page still has older free-credit language; the more recent staff announcement indicates credits were removed. Revisit if the policy changes.
- All modifications remain reviewable in the accompanying pull request.
