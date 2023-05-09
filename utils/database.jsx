import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongodb is Already Connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "SharePrompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB Connected 🎉");
  } catch (error) {
    console.log(error);
  }
};
