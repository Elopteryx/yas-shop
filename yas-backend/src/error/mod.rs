use actix_web::{http, Result, HttpResponse};

pub async fn render_404() -> Result<HttpResponse> {
    Ok(HttpResponse::build(http::StatusCode::NOT_FOUND)
        .content_type("application/json; charset=utf-8")
        .body("{\"error\":\"Resource not found.\"}"))
}
