let state = {
    user: {
        name: 'Anonymous'
    },
    version: '1.0.0',
    language: 'en',
};

const Global = {
    user() {
        return state.user;
    },
    version() {
        return state.version;
    },
    language() {
        return state.language;
    },
};

export default Global;