import config from "../../config.js";
import session from 'express-session';
import MongoDBStore from 'connect-mongodb-session';

const MongoDBStoreSession = MongoDBStore(session);

const store = new MongoDBStoreSession({
    uri: config.db_uri,
    collection: 'sessions', // Specify the collection name where sessions will be stored
});

store.on('error', (error) => {
    console.log(error);
});

export default store;