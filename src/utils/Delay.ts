const Delay = {
    by<T extends object | undefined>(time: number, value: T) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, time);
        });
    }
};

export default Delay;