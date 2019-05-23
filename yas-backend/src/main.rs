#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;

use rocket_contrib::json::{Json, JsonValue};

#[derive(Serialize, Deserialize)]
struct User {
    name: String,
    balance: u32,
    language: String,
}

#[get("/user/current")]
fn user_current() -> Json<User> {
    Json(User{
        name: String::from("Anonymous"),
        balance: 1200,
        language: String::from("en"),
    })
}

#[get("/version")]
fn version() -> JsonValue {
    json!({
        "value": "1.0.0",
        "major": 1,
        "minor": 0,
        "patch": 0,
    })
}

#[catch(404)]
fn not_found() -> JsonValue {
    json!({
        "status": "error",
        "reason": "Resource was not found."
    })
}

fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .mount("/app/v1", routes![user_current, version])
        .register(catchers![not_found])
}

fn main() {
    rocket().launch();
}
