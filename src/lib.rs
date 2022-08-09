#![deny(clippy::all)]

use napi_derive::napi;
use std::time::SystemTime;

#[napi]
pub fn now() -> i64 {
  match SystemTime::now().duration_since(SystemTime::UNIX_EPOCH) {
    Ok(n) => match i64::try_from(n.as_micros()) {
      Ok(n) => n,
      Err(_) => panic!("[microtime.now] u128 microsecond cannot convert to i64"),
    },
    Err(_) => panic!("[microtime.now] SystemTime before UNIX EPOCH!"),
  }
}
