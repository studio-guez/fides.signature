# filogie.signature

Email signature generator for Filogie — built with Nuxt 3.

## Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose

---

## Getting started

```bash
git clone https://github.com/studio-guez/filogie.signature.git
cd filogie.signature
```

---

## Run locally

```bash
docker compose up
```

App is available at <http://localhost:3000> with hot-reload.

To stop:

```bash
docker compose down
```

---

## Build for production (GitHub Pages)

```bash
docker compose run --rm app npm run build.github.page
```

This generates a static build into the `docs/` folder, which is what GitHub Pages serves.

---

## Update dependencies

Run npm commands through the container so the lockfile is generated for Linux:

```bash
# update all dependencies
docker compose run --rm app sh -c "npm update && npm install"

# add a new package
docker compose run --rm app npm install <package>

# audit for vulnerabilities
docker compose run --rm app npm audit

# auto-fix vulnerabilities
docker compose run --rm app npm audit fix
```

Commit the updated `package.json` and `package-lock.json`, then rebuild the image:

```bash
docker compose up --build
```
