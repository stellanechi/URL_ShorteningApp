// import React from "react";
// import React, { useState, useEffect } from "react";
// import { toLocaleDateString, toLocaleTimeString } from "date-fns"; // Consider using date-fns for advanced formatting options

// function RealTimeDate() {
//   const [date, setDate] = useState(new Date());

//   const formattedDate = toLocaleDateString(date);

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setDate(new Date());
//     }, 1000); // Update every second

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(timerId);
//   }, []);

//   return <></>;
// }

// export default RealTimeDate;
