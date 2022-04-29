import "./styles.css";
import { InputForm } from "./input-form/InputForm.jsx";
import { FooterInputForm } from "./footer-input-form/FooterInputForm.jsx";

/* way 1, works */
// export const Header = () => {
//     return (
//         <header>
//         <img src="./assets/logo.png" alt="Logo" />
//         <InputForm />
//         <p>or</p>
//         <FooterInputForm />
//       </header>
//     );
// };

/* way 2 : for props, html element issue*/
const iClasses = ["fab fa-apple", "fab fa-windows"];
const aContents = ["Sign in with Apple", "Sign in with Microsoft"];
export const Header = () => {
  return (
    <header>
      <img src="./assets/logo.png" alt="Logo" />
      {aContents.map((content, index) => (
        <InputForm
          key={index}
          class={iClasses[index]}
          content={content}
        />
      ))}

      <p>or</p>
      <FooterInputForm />
    </header>
  );
};

/* way 3: for {} , works*/
// export const Header = () => {
//   const iClasses = ["fab fa-apple", "fab fa-windows"];
//   const aContents = ["Sign in with Apple", "Sign in with Microsoft"];
//   return (
//     <header>
//       <img src="./assets/logo.png" alt="Logo" />
//       <InputForm aContents ={aContents} iClasses={iClasses}/>
//       <p>or</p>
//       <FooterInputForm />
//     </header>
//   );
// };
