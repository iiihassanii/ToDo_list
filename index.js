import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './model/mongodb.js';
import { login , signin } from './login.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

login ("venus", "vini")
console.log("***************")
signin("hassanabdelazim.max@gmail.com","venus", "vini")