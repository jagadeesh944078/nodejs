const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://vemulajagadeesh1:pL9ECfVAySq59irh@namastenode.t951a.mongodb.net/";

/* we are creating client from instance of MongoClient */
const client = new MongoClient(url);

/* Give Your Database Name */
const dbName = "HelloWorld";

async function main() {
  //connect method to connect with server
  await client.connect();
  console.log("connected to the database successfully");
  const db = client.db(dbName);
  /* Give your collection Name */
  const collection = db.collection("User");

  /* insert the document */
  //   const data = {
  //     firstName: "Deepika",
  //     lastName: "padukone",
  //     city: "hyderabad",
  //   };
  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted Document =>", insertResult);

  /* find the result */
  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found Documents =>", findResult);

  /* count the documents */
  //   const countDocument = await collection.countDocuments({});
  //   console.log("countDocument =>", countDocument);

  /* find all documents with the filter of firstname:deepika */
  /* Always right .toArray() after find otherwise it will return the FindCursor */
  const result = await collection.find({ firstName: "Deepika" }).count();
  console.log("result =>", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

//Notes
//go to mongodb website
//Create a free MB cluster
//Create a user
//Get the Connection String
//Install the Mongodb Compass
//Install the Mongodb using npm i mongodb
