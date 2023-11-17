// 1 - Create an empty object called dog
// let object = {dog};
// 2 - Print the the dog object on the console
// console.log(object);
// let dog ={name:"togo" , legs: "4" , color: "brown", age:"3.7" , };{

// }
// console.log(dog);
// 3 - Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return 'woof woof'.

// let dog={
//     name:"togo" ,
//     legs: "4" ,
//     color: "brown",
//     age:"3.7"
// }
// bark = function() {
//     return 'woof woof';
// };
// console.log(dog);
// console.log("Dog barks:", bark());

// 4 - Get name, legs, color, age and bark value from the dog object
// Object.keys(dog).forEach(key => {
//     console.log(`Dog ${key}:`, dog[key]);
// });
// 5 - Set new properties the dog object: breed, getDogInfo


// let getDogInfo={
//     name:"togo" ,
//     legs: "4" ,
//     color: "brown",
//     age:"3.7",
//     breed:"pit bull" 

// }
// console.log(getDogInfo);

   





//  const users = {
//    Alex: {
//      email: "alex@alex.com",
//      skills: ["HTML", "CSS", "JavaScript"],
//      age: 20,
//      isLoggedIn: false,
//      points: 30
//    },
//    Asab: {
//      email: "asab@asab.com",
//      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
//      age: 25,
//      isLoggedIn: false,
//      points: 50
//    },
//    Brook: {
//      email: "daniel@daniel.com",
//      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//      age: 30,
//      isLoggedIn: true,
//      points: 50
//    },
//    Daniel: {
//      email: "daniel@alex.com",
//      skills: ["HTML", "CSS", "JavaScript", "Python"],
//      age: 20,
//      isLoggedIn: false,
//      points: 40
//    },
//    John: {
//      email: "john@john.com",
//      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//      age: 20,
//      isLoggedIn: true,
//      points: 50
//    },
//    Thomas: {
//      email: "thomas@thomas.com",
//      skills: ["HTML", "CSS", "JavaScript", "React"],
//      age: 20,
//      isLoggedIn: false,
//      points: 40
//    },
//    Paul: {
//      email: "paul@paul.com",
//      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
//      age: 20,
//      isLoggedIn: false,
//      points: 40
//    }
//  }

// 6 - Find the person who has many skills in the users object.
// let maxSkills = 0;
// let skillfulPerson = null;

// for (const user in users) {
//     if (users.hasOwnProperty(user)) {
//         const userSkillsCount = users[user].skills.length;
//         if (userSkillsCount > maxSkills) {
//             maxSkills = userSkillsCount;
//             skillfulPerson = user;
//         }
//     }
// }

// console.log(`The person with the most skills is ${skillfulPerson} with ${maxSkills} skills.`);

// 7 - Count logged in users, count users having greater than equal to 50 points from the following object.
// let loggedInUsersCount = 0;
// let highPointsUsersCount = 0;

// Object.values(users).forEach(user => {
//   if (user.isLoggedIn) {
//     loggedInUsersCount++;
//   }

//   if (user.points >= 50) {
//     highPointsUsersCount++;
//   }
// });

// console.log(`Number of logged-in users: ${loggedInUsersCount}`);
// console.log(`Number of users with 50 or more points: ${highPointsUsersCount}`);

// 8 - Get all keys or properties of users object


// const allKeys = Object.keys(users);
// console.log(allKeys);





// 9 - Get all the values of users object

// const allValues = Object.values(users);
// console.log(allValues);











    // const users = [
    // {
    //     _id: 'ab12ex',
    //     username: 'Alex',
    //     email: 'alex@alex.com',
    //     password: '123123',
    //     createdAt:'08/01/2020 9:00 AM',
    //     isLoggedIn: false
    // },
    // {
    //     _id: 'fg12cy',
    //     username: 'Asab',
    //     email: 'asab@asab.com',
    //     password: '123456',
    //     createdAt:'08/01/2020 9:30 AM',
    //     isLoggedIn: true
    // },
    // {
    //     _id: 'zwf8md',
    //     username: 'Brook',
    //     email: 'brook@brook.com',
    //     password: '123111',
    //     createdAt:'08/01/2020 9:45 AM',
    //     isLoggedIn: true
    // },
    // {
    //     _id: 'eefamr',
    //     username: 'Martha',
    //     email: 'martha@martha.com',
    //     password: '123222',
    //     createdAt:'08/01/2020 9:50 AM',
    //     isLoggedIn: false
    // },
    // {
    //     _id: 'ghderc',
    //     username: 'Thomas',
    //     email: 'thomas@thomas.com',
    //     password: '123333',
    //     createdAt:'08/01/2020 10:00 AM',
    //     isLoggedIn: false
    // }
    // ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
 
// 10 - Imagine you are getting the above users collection from a MongoDB database. 
    // a. Create a function called signUp which allows user to add to the collection. 



    // function signUp(newUser) {
                 
    //     let existingUser = users.find(
    //         user => user.username === newUser.username || user.email === newUser.email
    //     );
    
                
    //     if (existingUser) {
    //         console.log("User already exists. Please log in.");
    //         return;
    //     }
    
                
    //     users.push(newUser);
    //     console.log("User signed up successfully!");
    // }
    // signUp("aq axal users mails parols da egetebs vwert ra an dzvelebs da vamowmebt mushaobs tu ara ");


// //     b. Create a function called signIn which allows user to sign in to the application
// function signIn(usernameOrEmail, password)
                 
//     let userToSignIn = users.find(
//         user => user.username === usernameOrEmail || user.email === usernameOrEmail
//     );

               
//     if (userToSignIn && userToSignIn.password === password) {
//         userToSignIn.isLoggedIn = true;
//         console.log(`User ${userToSignIn.username} signed in successfully!`);
//     } else {
//         console.log("Invalid username or password. Please try again.");
//     }
// }






// 11 - The products array has three elements and each of them has six properties. 
//     a. Create a function called rateProduct which rates the product 

// function rateProduct(productId, userId, rating) {
//     const productToRate = products.find(product => product._id === productId);
  

//     if (productToRate) {
//       let existingRating = productToRate.ratings.find(r => r.userId === userId);
  
//       if (existingRating) {
//         console.log(`User ${userId} has already rated this product.`);
//       } else {
//         productToRate.ratings.push({ userId, rate: rating });
//         console.log(`User ${userId} has successfully rated the product.`);
//       }
//     } else {
//       console.log("Product not found.");
//     }
//   }
//   rateProduct("aq vwert roduqts ra da vamowmebt :D");

  

//     b. Create a function called averageRating which calculate the average rating of a product



//   function averageRating(productId) {
//     let product = products.find(p => p._id === productId);
  
//     if (!product) {
//       console.log("Product not found.");
//       return null;
//     }
//     if (!product.ratings || product.ratings.length === 0) {
//       console.log("This product has no ratings yet.");
//       return null;
//     }
//     const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
//     const average = totalRating / product.ratings.length;
  
//     console.log(`The average rating for ${product.name} is: ${average.toFixed(2)}`);
//     return average;
//   }
//   averageRating("aq ID ebs vamowmebt");



// 12 - Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.



function likeProduct(productId, userId) {

    let product = products.find(p => p._id === productId);
    if (!product) {
      console.log("Product not found.");
      return false; 
    }
    let likedIndex = product.likes.indexOf(userId);
  
    if (likedIndex !== -1) {
      product.likes.splice(likedIndex, 1);
      console.log(`User ${userId} removed the like from ${product.name}.`);
    } else {
      product.likes.push(userId);
      console.log(`User ${userId} liked ${product.name}.`);
    }
  
    return true;
  }
  

  likeProduct(" aq jer ID da mere likebi unda "); 
  likeProduct(" shemeeeshviiiit ver gitaaant :DDDD"); 