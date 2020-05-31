#[macro_use]
extern crate serde_derive;

mod error;
mod list;
mod user;
mod version;
mod delay;
mod store;
mod sorting;

use crate::error::render_404;
use crate::user::user_current;
use crate::version::version;
use crate::delay::delay_by;
use crate::store::{item_all, item_by_id};
use crate::sorting::{sort_with_insertion, sort_with_merge, sort_with_quick};

use actix_web::{web, guard, App, HttpServer, HttpResponse};
use actix_web::web::scope;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(
                scope("/app/v1")
                    .route("/user", web::get().to(user_current))
                    .route("/version", web::get().to(version))
                    .route("/delay/{count}", web::get().to(delay_by))
                    .route("/store/items", web::get().to(item_all))
                    .route("/store/items/{id}", web::get().to(item_by_id))
                    .route("/sort/insertion", web::get().to(sort_with_insertion))
                    .route("/sort/merge", web::get().to(sort_with_merge))
                    .route("/sort/quick", web::get().to(sort_with_quick))
            )
            .default_service(
                web::resource("")
                    .route(web::get().to(render_404))
                    .route(
                        web::route()
                            .guard(guard::Not(guard::Get()))
                            .to(HttpResponse::MethodNotAllowed),
                    ),
            )
    })
        .bind("127.0.0.1:8000")?
        .run()
        .await
}