WEB_DIR := apps/handyman-web

.PHONY: build dev

build:
	cd $(WEB_DIR) && npm run build

dev:
	cd $(WEB_DIR) && npm run dev
