use rocket_contrib::json::Json;

#[derive(Serialize, Deserialize)]
pub struct Item {
    id: u64,
    name: String,
    price: u32,
    category: Vec<String>,
}

#[get("/store/items")]
pub fn item_all() -> Json<Vec<Item>> {
    let items: Vec<Item> = vec![];
    Json(items)
}

#[get("/store/items/<id>")]
pub fn item_by_id(id: u64) -> Json<Item> {
    Json(Item {
        id,
        name: String::from("New SSD"),
        price: 55,
        category: vec![String::from("SSD")]
    })
}