use rocket_contrib::json::JsonValue;

#[get("/version")]
pub fn version() -> JsonValue {
    json!({
        "value": "1.0.0",
        "major": 1,
        "minor": 0,
        "patch": 0,
    })
}
