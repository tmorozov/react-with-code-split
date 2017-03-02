module.exports = {
    path: '*',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../pages/no-match').default);
        });
    }
};
