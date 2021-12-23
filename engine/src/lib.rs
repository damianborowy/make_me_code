use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a : u8, b : u8) -> u8 {
    return a + b * 2;
}
