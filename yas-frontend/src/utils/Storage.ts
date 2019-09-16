import {Version} from "../VersionContext";

type StoredItem = {
    version: string;
    value: object;
};

const Storage = {
    retrieve(key: string, version: Version) {
        const item = sessionStorage.getItem(key);
        if (!item) {
            return {};
        }
        const parsedItem: StoredItem = JSON.parse(item);
        return parsedItem.version === version.value ? parsedItem.value : {};
    },
    preserve(key: string, version: Version, value: object) {
        sessionStorage.setItem(key, JSON.stringify({version: version.value, value}));
    },
};

export default Storage;