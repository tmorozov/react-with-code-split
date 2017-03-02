export default (location, callback) => {
    require.ensure([], function (require) {
        callback(null, require('./no-match.js').default);
    });
};
