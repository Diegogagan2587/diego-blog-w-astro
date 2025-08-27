## When you should use n8n?
- fast prototyping / POCs(in spanish, don know waht he hell it means): connecting a webhook
from an api --> transforming --> pasting in another service without bilding a microservice.
- internal automations low critiques: moving csv, notications, light ETLs, simle crons.
- Ready to use Conectors: if it will save you days firhignt with OAuth/Rate limits from a Saas.

## When not to use n8n (and better use code)?
- Central busines logic(important stuff, high performant).
- when required higher or granular control
- Escaling/latency sencibles or SLAs with customers.

## Express desiction
- it is temporary, not critical or with a ready to use conector? -> n8n
- do you deend tests, versioning, observability, clear owners ship? -> code
- will this touch sensible data or requires granular control over security? -> code
- customers wants it for yesterday and later we will migrate... -> n8n now, code later.

## What to learn form n8n now (1 weekend max, without being an expert, just somthing enoguht)
- triggers (webhoo/cron) and credentias
- Function/Code node (Short JS to transform payloads).
- Expressions {{$json.foo}}
- Retry & error hooks (for not losing events)
- Export JSON from the flow to version it in GIT. (this is cool).

## Good Practices
- Cleray boundary: n8n = orquestation, your logics lives within the APIs.
- observavility: basic metris, (trys, failures, latencies)
