build-wasm:
	wasm-pack build

start-react:
	cd frontend-cid && yarn start

start-next: build-wasm
	cd next-cid && yarn dev

start: build-wasm start-react
