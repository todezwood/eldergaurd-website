// Redirect the misspelled legacy domain to the canonical one; otherwise serve static assets.
const CANONICAL_HOST = "getelderguard.org";
const LEGACY_HOSTS = new Set(["eldergaurd.org", "www.eldergaurd.org", "www.getelderguard.org"]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (LEGACY_HOSTS.has(url.hostname)) {
      url.hostname = CANONICAL_HOST;
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
