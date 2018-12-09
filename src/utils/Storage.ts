import Global from "../Global";

type StoredItem = {
    version: string;
    value: object;
}

const Storage = {
    retrieve(key: string) {
        const version = Global.version();
        const item = sessionStorage.getItem(key);
        if (!item) {
            return {};
        }
        const parsedItem: StoredItem = JSON.parse(item);
        return parsedItem.version === version ? parsedItem.value : {};
    },
    preserve(key: string, value: object) {
        const version = Global.version();
        sessionStorage.setItem(key, JSON.stringify({version, value}));
    },
};

export default Storage;