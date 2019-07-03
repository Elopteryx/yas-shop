use rocket_contrib::json::Json;

#[derive(Serialize, Deserialize)]
pub struct Item {
    id: u64,
    name: String,
    price: u32,
    category: Vec<String>,
}

#[get("/item/<id>")]
pub fn item_by_id() -> Json<Item> {
    Json(Item {
        id: 1,
        name: String::from("New SSD"),
        price: 55,
        category: vec![String::from("SSD")]
    })
}