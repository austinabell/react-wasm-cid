build-wasm:
	wasm-pack build

start-react:
	cd frontend-cid && yarn start

start: build-wasm start-react
