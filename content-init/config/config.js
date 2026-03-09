exports.appSettings = {
    db: (function() {
        return process.env.MONGODB_CONNECTION || 'mongodb://mongodb:27017/contentdb';
    })()
};