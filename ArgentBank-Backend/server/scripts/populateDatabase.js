const axios = require('axios');
const signupApi = 'http://localhost:3001/api/v1/user/signup';

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
    userName: 'Iron'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
    userName: 'Captain'
  }
];

(async () => {
  try {
    for (const user of users) {
      try {
        const res = await axios.post(signupApi, user);
        console.log(`User created: ${res.data.body.firstName} ${res.data.body.lastName}`);
      } catch (error) {
        if (error.response && error.response.data.message.includes('Email already exist')) {
          console.log(`${user.email}`);
        } else {
          console.error(`Error creating user ${user.email}:`, error.response ? error.response.data : error.message);
        }
      }
    }

    console.log('Population terminée !');
    process.exit(0);
  } catch (error) {
    console.error('Error populating users:', error.message);
    process.exit(1);
  }
})();
