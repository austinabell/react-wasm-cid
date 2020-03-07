use forest_cid::{multihash::Blake2b256, Cid};
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn hex_to_cid_hex(s: &str) -> Result<String, JsValue> {
    let bz = hex::decode(s).map_err(|e| e.to_string())?;
    let c = Cid::new_from_cbor(&bz, Blake2b256).map_err(|e| e.to_string())?;
    Ok(hex::encode(c.to_bytes()))
}
