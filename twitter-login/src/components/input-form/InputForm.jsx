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

// export const InputForm = (props) => {
//   return (
//     <div className="input-form">
//       <a href="#">
//         <i className={props.class}></i>{props.content}
//       </a>

//     </div>
//   );
// };

/* way 3: {}, works*/
export const InputForm = () => {
  const iClasses = ["fab fa-apple", "fab fa-windows"];
  const aContents = ["Sign in with Apple", "Sign in with Microsoft"];
  return (
    <div className="input-form">
     { aContents.map((aContent, index) => (
        <a href="#"><i className={iClasses[index]}></i>{aContent}</a>

      ))}
    </div>
  );
};
