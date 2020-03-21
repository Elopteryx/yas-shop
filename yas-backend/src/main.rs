#[macro_use]
extern crate serde_derive;

mod user;
mod version;
mod store;
mod sorting;

use crate::user::user_current;
use crate::version::version;
use crate::store::{item_all, item_by_id};
use crate::sorting::{sort_with_insertion, sort_with_merge, sort_with_quick};

use actix_web::{web, App, HttpServer};

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/user", web::get().to(user_current))
            //.route("/delay", web::get().to(delay))
            .route("/version", web::get().to(version))
            .route("/store/items", web::get().to(item_all))
            .route("/store/items/{id}", web::get().to(item_by_id))
            .route("/sort/insertion", web::get().to(sort_with_insertion))
            .route("/sort/merge", web::get().to(sort_with_merge))
            .route("/sort/quick", web::get().to(sort_with_quick))
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}