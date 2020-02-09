# React Wasm Cid

Built using [wasm-pack](https://github.com/rustwasm/wasm-pack) and [Typescript create-react-app](https://create-react-app.dev/docs/adding-typescript/) templates with [react-app-rewired](https://github.com/timarney/react-app-rewired) to load WASM from compiled package from wasm-pack. 

Uses [Forest cid](https://github.com/ChainSafe/forest/tree/b25b40669f7b333e00e6aa41762a514d9e8b11c3/ipld/cid) crate to generate Cid bytes from any hex encoded bytes input on frontend.

### Quickstart

```
# This will require at least rust, wasm-pack, and Yarn to run
make start
```
