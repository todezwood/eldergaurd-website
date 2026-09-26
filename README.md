# ElderGuard website

Static marketing site for [getelderguard.org](https://getelderguard.org), served by a
Cloudflare Worker (`src/index.js`) that redirects the legacy `eldergaurd.org` hosts and
serves the static assets in this directory.

## Repo

Canonical repo: https://github.com/getelderguard/elderguard-website (branch `main`).

## Deployment

Pushes to `main` deploy automatically via GitHub Actions (`.github/workflows/deploy.yml`),
which runs `wrangler deploy` against the `elderguard-website` Worker.

Required repository secrets (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_ACCOUNT_ID` – the Cloudflare account that owns the Worker.
- `CLOUDFLARE_API_TOKEN` – an API token with the "Edit Cloudflare Workers" template permissions.

Manual deploy from a machine that has run `npx wrangler login`:

```sh
npx wrangler deploy
```

If you later connect this repo to Cloudflare Workers Builds in the dashboard, disable or
delete the GitHub Actions workflow so each push is deployed only once.
