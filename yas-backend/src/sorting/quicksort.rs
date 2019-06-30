mod quick {
    pub fn sort(&mut nums: Vec<i32>) {
        sort_in_range(nums, 0, nums.len());
    }

    fn sort_in_range(&mut nums: Vec<i32>, low: i32, high: i32) {
        if low < high {
            let pivot = partition(vec, low, high);
            sort_in_range(&mut nums, low, pivot - 1);
            sort_in_range(&mut nums, pivot + 1, high);
        }
    }

    fn partition(&mut nums: Vec<i32>, low: i32, high: i32) -> i32 {
        let pivot = nums[high];
        let mut index = low;
        for (pos, i) in nums.iter().enumerate() {
            if nums[i] < pivot {
                swap(nums, index, pos);
                index = index + 1;
            }
        }
        swap(nums, index, high);
        index
    }

    fn swap(&mut nums: Vec<i32>, a: i32, b: i32) {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
}

#[cfg(test)]
mod test {
    use quick::sort;

    #[test]
    fn basics() {

        let mut nums = vec![7, 2, 4, 6];

        sort(nums);

        for i in nums.iter() {
            println!("{}", i);
        }
    }
}