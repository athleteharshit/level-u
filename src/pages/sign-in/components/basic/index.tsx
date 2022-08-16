import React from 'react';

function Basic() {
  return <div>Basic</div>;
}

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
