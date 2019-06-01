#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;

use rocket_contrib::json::{Json, JsonValue};

#[derive(Serialize, Deserialize)]
struct User {
    id: u32,
    name: String,
    price: u32,
    category: Vec<String>,
}

#[get("/item/<id>")]
fn user_current() -> Json<User> {
    Json(Item{
        id: 1,
        name: String::from("New SSD"),
        balance: 200,
        category: vec![String::from("SSD")]
    })
}