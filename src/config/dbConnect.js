import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://stvnreis:12062022Sa@cluster0.pityzbd.mongodb.net/node-express");

let db = mongoose.connection;

export default db;