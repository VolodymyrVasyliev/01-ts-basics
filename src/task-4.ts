

// interface T {
//   name: string;
//   age: number;
//   email: string;
// }

function printUserInfo<T>(name: T, age: T, email?: T): void {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

printUserInfo<string | number>("Alice", 30);
printUserInfo<string | number>("Bob", 25, "bob@mail.com");
