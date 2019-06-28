import Delay from "./Delay";
import Timeout from "./Timeout";

const Fetcher = {
    GET<T>(url: string): Promise<T> {
        return Promise.race(
            [Promise.all([fetch(url, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                redirect: "follow",
                referrer: "no-referrer",
            }), Delay.by(500, undefined)]).then(([response]) => response.json()),
                Timeout.in(20000)]) as Promise<T>;
    },
    POST<T>(url: string, body: object): Promise<T> {
        return Promise.race(
            [Promise.all([fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                redirect: "follow",
                referrer: "no-referrer",
                body: JSON.stringify(body),
            }), Delay.by(500, undefined)]).then(([response]) => response.json()),
                Timeout.in(20000)]) as Promise<T>;
    }
};

export default Fetcher;