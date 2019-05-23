import Delay from "./Delay";

const Fetcher = {
    GET<T extends object | string>(url: string): Promise<T> {
        return Promise.all([fetch(url, {
            method: "GET",
            mode: "no-cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            redirect: "follow",
            referrer: "no-referrer",
        }), Delay.by(500, undefined)]).then(([response]) => response.json());
    },
    POST<T>(url: string, body: object): Promise<T> {
        return Promise.all([fetch(url, {
            method: "POST",
            mode: "no-cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(body),
        }), Delay.by(500, undefined)]).then(([response]) => response.json());
    }
};

export default Fetcher;