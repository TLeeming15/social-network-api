const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Thought.deleteMany({});

  // Drop existing students
  await User.deleteMany({});
  
  // Add courses to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: 'ready to game',
    username: 'tyler'
  });
  
    // Create empty array to hold the students
    const users = [];
  
    users.push({
      username:"tyler",
      email: "tyler@icehocky.ca"
    });
  
    // Add students to the collection and await the results
    await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
