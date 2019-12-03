extern crate rand;

use rand::Rng;

use rocket_contrib::json::Json;

#[derive(Serialize, Deserialize)]
pub struct User {
    name: String,
    balance: u32,
    language: String,
}

#[get("/user/current")]
pub fn user_current() -> Json<User> {
    let mut rng = rand::thread_rng();
    Json(User {
        name: String::from("Anonymous"),
        balance: rng.gen_range(1000, 1500),
        language: String::from("en"),
    })
}
