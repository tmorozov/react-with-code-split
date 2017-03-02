export default (location, callback) => {
    require.ensure([], function (require) {
        callback(null, require('./about.js').default);
    });
};
