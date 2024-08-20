// export const sum = (a, b) => {
//   return a + b;
// };

// post call with fetch method

// import React, { useState, useEffect } from 'react';

// export default function FetchPost(props) {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/posts',
//         {
//           method: 'POST',
//           body: JSON.stringify({
//             id: '123',
//             groupId: '456',
//           }),
//           headers: {
//             'content-type': 'application/json',
//           },
//         }
//       );
//       const newData = response.json();
//       setData(newData);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return <div className="data">sum</div>;
// }

// Log to console
