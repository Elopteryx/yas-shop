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