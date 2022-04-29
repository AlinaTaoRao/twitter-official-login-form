import "./styles.css";

/* way 1, works*/
// export const InputForm = () => {
//   return (
//     <div className="input-form">
//       <a href="#">
//         <i className="fab fa-apple"></i>Sign in with Apple
//       </a>
//       <a href="">
//         <i className="fab fa-windows"></i>Sign in with Microsoft
//       </a>
//     </div>
//   );
// };

/* way 2: props way , works, html element issue*/

export const InputForm = (props) => {
  return (
    <div className="input-form">
      <a href="#">
        <i className={props.class}></i>{props.content}
      </a>

    </div>
  );
};

/* way 3: {}, works*/
// export const InputForm = ({iClasses, aContents}) => {
//   return (
//     <div className="input-form">
//       {aContents.map((aContent, index) => (
//         <a href="#" key = {index}>
//           <i className={iClasses[index]}></i>
//           {aContent}
//         </a>
//       ))}
//     </div>
//   );
// };
