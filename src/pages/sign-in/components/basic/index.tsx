import React from 'react';

function Basic() {
  return <div>Basic</div>;
}

// *-> Assigning a value to the same thing conditionally using ternary operators.
// let foo;
// a > b ? foo = 'apple' : foo = 'ball';

// ✔️
// foo = a > b ? 'apple' : 'ball';

// *-> Assigning the same value to a specific object property conditionally.
// let obj = {}
// c > d ? obj.foo = 'apple' : obj.bar = 'apple';

// ✔️
// obj = { [c > d ? 'foo' : 'bar']: 'apple' };

// *-> Exporting multiple variables
// export const foo;
// export const bar;
// export const kip;

// ✔️
// export const foo, bar, kip;

// *-> Declaring and assigning variables from object properties.
// const a = foo.x, b = foo.y;

// ✔️
// const { ['x']: a, ['y']: b } = foo;

// *-> Declaring and assigning variables from array indexes.
// let a = foo[0], b = foo[1];

// ✔️
// let [a, b] = foo;

// *-> Passing parameters conditionally.
// if(!foo){
//   foo = 'apple';
// }
// bar(foo, kip);

// ✔️
// bar(foo || 'apple', kip);

// *-> Dealing with lots of 0`s.
// const SALARY = 150000000,
// TAX = 15000000;

// ✔️
// const SALARY = 15e7,
// TAX = 15e6;

// *-> Assigning the same thing to multiple variables.
// a = d;
// b = d;
// c = d;

// ✔️
// a = b = c = d;

// *1 Separate function from the JSX if it takes more than 1 line'
// bad
{
  /* <button
  onClick={() => {
    setState(!state);
    resetForm();
    reloadData();
  }}
/> */
}

// good
{
  /* <button onClick={() => setState(!state)} /> */
}

// good
// const handleButtonClick = () => {
//   setState(!state);
//   resetForm();
//   reloadData();
// }

{
  /* <button onClick={handleButtonClick} /> */
}

// *2  Group the state whenever possible

// const [username, setUsername] = useState('')
// const [password, setPassword] = useState('')

// const [user, setUser] = useState({})

// *3 Use constants or enums for string values

// if (role === 'admin') {
//     return <AdminUser />;
//   }

//  good
//   enum Roles {
//     admin = 'admin',
//     basic = 'basic',
//   }

//   if (role === Roles.admin) {
//     return <AdminUser />;
//   }

// *4 Avoid long list of function arguments
// //
// function createPerson(firstName, lastName, height, weight, gender) {
//     // ...
//   }

//   //
//   function createPerson({ firstName, lastName, height, weight, gender }) {
//     // ...
//   }

//   //
//   function createPerson(person) {
//     const { firstName, lastName, height, weight, gender } = person;
//     // ...
//   }

export default Basic;
