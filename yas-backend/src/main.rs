#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;

mod error;
mod user;
mod version;

use crate::error::static_rocket_catch_info_for_not_found;
use crate::error::static_rocket_catch_info_for_internal_error;
use crate::user::static_rocket_route_info_for_user_current;
use crate::version::static_rocket_route_info_for_version;

fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .mount("/app/v1", routes![user_current, version])
        .register(catchers![not_found, internal_error])
}

fn main() {
    rocket().launch();
}
