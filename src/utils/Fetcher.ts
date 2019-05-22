import Mock from './Mock';

const Fetcher = {
    async GET<T extends object | string>(url: string): Promise<T> {
        if (true) {
            return Mock.get(url) as Promise<T>;
        }
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            redirect: "follow",
            referrer: "no-referrer",
        });
        return response.json();
    },
    async POST<T>(url: string, body: object): Promise<T> {
        const response = await fetch(url, {
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
        });
        return response.json();
    }
}

export default Fetcher;