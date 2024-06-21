import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './model/mongodb.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

  const newUser = new User({
    username: 'venus',
    password: 'vini',  // This will trigger the validation error
    email: 'hassanabdelazim.max2@gmail.com',
    todos:[
      { 
        title: 'Finish report',
        description: 'Complete the annual report by end of the week',
        dueDate: new Date(),
        tags: ['work', 'urgent']
      }
    ]
  });
        
        newUser.save()
          .then(user => console.log('User saved:', user))
          .catch(err => console.error('Error saving user:', err.message));
