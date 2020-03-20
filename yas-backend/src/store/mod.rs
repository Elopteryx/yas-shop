use actix_web::web::Json;
use actix_web::Responder;
use actix_web::web::Path;

#[derive(Serialize, Deserialize)]
pub struct Item {
    id: u64,
    name: String,
    price: u32,
    category: Vec<String>,
}

pub async fn item_all() -> impl Responder {
    let items: Vec<Item> = vec![];
    Json(items)
}

#[derive(Deserialize)]
pub struct Info {
    id: u64,
}

pub async fn item_by_id(info: Path<Info>) -> impl Responder {
    Json(Item {
        id: info.id,
        name: String::from("New SSD"),
        price: 55,
        category: vec![String::from("SSD")]
    })
}