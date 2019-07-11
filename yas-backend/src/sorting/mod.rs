mod insertion;
mod merge;
mod quick;

use insertion::sort as insertion_sort;
use merge::sort as merge_sort;
use quick::sort as quick_sort;

#[get("/sort/insertion")]
pub fn sort_with_insertion() {
    let mut nums = vec![1, 34, 5, 7, 4];
    insertion_sort(&mut nums);
}

#[get("/sort/merge")]
pub fn sort_with_merge() {
    let mut nums = vec![1, 34, 5, 7, 4];
    merge_sort(&mut nums);
}

#[get("/sort/quick")]
pub fn sort_with_quick() {
    let mut nums = vec![1, 34, 5, 7, 4];
    quick_sort(&mut nums);
}
