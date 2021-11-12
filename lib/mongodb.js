import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

// Check the Mongo DB URI
if(!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}
// Check Mongo DB
if(!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable')
}

let cachedClient = null;
let cachedDb = null;


export async function connectToDatabase() {
    // Check the cached
    if(cachedClient && cachedDb) {
        //Load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        }
    }
    
    //! Set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };


    // Connect to the cluster
    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB)


    // set cacje
    cachedClient = client;
    cachedDb = db; 
    return {
        client: cachedClient,
        db: cachedDb,
    }
}