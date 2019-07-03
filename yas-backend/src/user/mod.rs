use rocket_contrib::json::Json;

#[derive(Serialize, Deserialize)]
pub struct User {
    name: String,
    balance: u32,
    language: String,
}

#[get("/user/current")]
pub fn user_current() -> Json<User> {
    Json(User {
        name: String::from("Anonymous"),
        balance: 1200,
        language: String::from("en"),
    })
}