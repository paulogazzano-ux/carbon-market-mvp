# Carbon Market MVP (Monorepo)

AI-driven carbon credit marketplace scaffold with a Next.js web app, NestJS API, and FastAPI AI service.

## Prerequisites

- Node.js 20+
- pnpm 9+
- Python 3.11+
- Docker + Docker Compose

## Local infrastructure

```bash
docker compose -f infra/docker-compose.yml up -d
```

## Install dependencies

```bash
pnpm install
```

Python dependencies (AI service):

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r apps/ai/requirements.txt
```

## Run services

### Web (Next.js)

```bash
pnpm --filter @carbon/web dev
```

- http://localhost:3000

### API (NestJS)

```bash
pnpm --filter @carbon/api start:dev
```

- http://localhost:3001

### AI (FastAPI)

```bash
cd apps/ai
uvicorn main:app --reload --port 8001
```

- http://localhost:8001

## Example requests

```bash
curl http://localhost:3001/health
curl http://localhost:3001/listings
```

```bash
curl http://localhost:8001/health
```

```bash
curl -X POST http://localhost:8001/rating \
  -H "Content-Type: application/json" \
  -d '{"project_type":"Reforestation","country":"Brazil","standard":"VCS","vintage":2021}'
```

```bash
curl -X POST http://localhost:8001/pricing \
  -H "Content-Type: application/json" \
  -d '{"project_type":"Reforestation","country":"Brazil","standard":"VCS","vintage":2021,"qty":1200,"ask_price":14.5}'
```

## Scripts

```bash
make dev-web
make dev-api
make dev-ai
make lint
make build
```
