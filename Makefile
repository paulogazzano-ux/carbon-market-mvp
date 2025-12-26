.PHONY: dev-web dev-api dev-ai lint build

dev-web:
	pnpm --filter @carbon/web dev

dev-api:
	pnpm --filter @carbon/api start:dev

dev-ai:
	cd apps/ai && uvicorn main:app --reload --port 8001

lint:
	pnpm -r lint

build:
	pnpm -r build
