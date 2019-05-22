const Timeout = {
    in(time: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject();
            }, time);
        });
    }
};

export default Timeout;