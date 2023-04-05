import mongoose from "npm:mongoose";

mongoose.set("strictQuery", false);
try {
  await mongoose.connect("mongodb://Koenig:24042503@ac-gwlwckz-shard-00-00.haylz8i.mongodb.net:27017,ac-gwlwckz-shard-00-01.haylz8i.mongodb.net:27017,ac-gwlwckz-shard-00-02.haylz8i.mongodb.net:27017/test?replicaSet=atlas-13fwhd-shard-0&ssl=true&authSource=admin");
  console.log("MongoDB connected");
} catch (err) {
  console.log(String(err));
}