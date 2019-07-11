use futures::executor::block_on;

async fn wait_for_it() {
    println!("This is an async task!");
}

fn main() {
    let future = wait_for_it();
    block_on(future);
}