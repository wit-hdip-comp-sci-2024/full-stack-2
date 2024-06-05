interface User {
    id: number;
    name: string;
    age: number;
  }

// Define an array of objects
let users: User[] = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Doe', age: 35 },
  ];
  
  // Use the find method to find the first user whose age is greater than 30. (user: {age:number }) is a type assertion that tells TypeScript that the user object has an age property.
  let user = users.find((user: {age:number })=> user.age > 30);
  console.log(user); // Output: { id: 3, name: 'Doe', age: 35 }

  user = users.find(user=> user.name === "Jane");
  console.log(user); // Output: { id: 2, name: 'Jane', age: 30 }
  
  // Use the map method to create a new array containing the names of all users
  let names = users.map(user => user.name);
  console.log(names); // Output: ['John', 'Jane', 'Doe']
  
  // Use the filter method to create a new array containing only users who are older than 25
  let olderUsers = users.filter(user => user.age > 25);
  console.log(olderUsers); // Output: [{ id: 2, name: 'Jane', age: 30 }, { id: 3, name: 'Doe', age: 35 }]