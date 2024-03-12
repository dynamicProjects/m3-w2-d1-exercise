const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/nodemongo";

// Connect to MongoDB
async function connectToDB() {
    let client;

    try {
        // Connect the client to the server
        client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected successfully to server");

        // Access the "nodemongo" database
        const db = client.db("nodemongo");

        // Create a collection named "customers"
        // await db.createCollection("customers");
        // console.log("Collection 'customers' created");
    //     var custData = [{ name: 'John', address: 'Highway 71'},
    //     { name: 'Peter', address: 'Lowstreet 4'},
    //     { name: 'Amy', address: 'Apple st 652'},
    //     { name: 'Hannah', address: 'Mountain 21'},
    //     { name: 'Michael', address: 'Valley 345'},
    //     { name: 'Sandy', address: 'Ocean blvd 2'},
    //     { name: 'Betty', address: 'Green Grass 1'},
    //     { name: 'Richard', address: 'Sky st 331'},
    //     { name: 'Susan', address: 'One way 98'},
    //     { name: 'Vicky', address: 'Yellow Garden 2'},
    //     { name: 'Ben', address: 'Park Lane 38'},
    //     { name: 'William', address: 'Central st 954'},
    //     { name: 'Chuck', address: 'Main Road 989'},
    //     { name: 'Viola', address: 'Sideway 1633'}]
    //    await db.collection("customers").insertMany(custData, function(err, res){
    //         if(err) throw err;
    //         console.log("Number of document inserted: " + res.insertedCount)
    //     })
    // await db.collection("customers").findOne({}, function(err,result){
    //     if (err) throw err;
    //     console.log(result.name)
    // })
    //     var query= {address:"Park Lane 38"}
    //  await db.collection("customers").find(query).toArray(function(err,result){
    //     if (err) throw err;
    //     console.log(result.name)
    // })
//     var mysort= {name:1}
//     await db.collection("customers").find.sort(mysort).toArray(function(err,result){
//        if (err) throw err;
//        console.log(result)
//    })
        // var myquery= {address:"Mountain 21"}
        // await db.collection("customers").deleteOne(myquery, function(err,obj){
        // if (err) throw err;
        // console.log("1 document deleted")
        // })

        var myquery= {address:"Valley 345"}
        var newvalues = { $set:{name:"Mickey",address:"Canyon 123"}}
        await db.collection("customers").updateOne(myquery, newvalues, function(err,obj){
        if (err) throw err;
        console.log("1 document updated")
        })
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    } finally {
        // Ensure the client is closed when you're done with it
        if (client) {
            await client.close();
        }
    }
}

// Call the function to connect to the database
connectToDB().catch(console.error);
