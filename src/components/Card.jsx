// // import React from "react";
// import PropTypes from "prop-types";

// function Card({ card, index }) {
//   return (
//     <div className="flex gap-6">
//       <div
//         key={index}
//         className="max-w-md rounded overflow-hidden shadow-lg bg-white flex p-8 gap-6"
//       >
//         <div>
//           <img
//             className="w-30 h-20 rounded-xl"
//             src={card.image}
//             alt="Card Image"
//           />
//         </div>

//         <div>
//           <div className="font-bold text-xl">{card.title}</div>
//           <p className="text-gray-700">{card.text}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// Card.propTypes = {
//   card: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//   }).isRequired,
//   index: PropTypes.number.isRequired,
// };

// export default Card;
