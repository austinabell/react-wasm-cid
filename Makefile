build-wasm:
	wasm-pack build

start-react:
	cd frontend-cid && yarn upgrade cid-gen && yarn start

start-next: build-wasm
	cd next-cid && yarn upgrade cid-gen && yarn dev

start: build-wasm start-react
