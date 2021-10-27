import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect("mongodb+srv://freeuser:freepass@coiner.19dn8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState;
    console.log(`Successfully accessed database: ${connection.isConnected}`)
}

export default dbConnect;