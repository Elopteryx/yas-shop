let state = {
    user: {
        name: 'Anonymous'
    },
    version: '1.0.0',
};

const Global = {
    user() {
        return state.user;
    },
    version() {
        return state.version;
    },
};

export default Global;