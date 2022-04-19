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

/* way 2 : for props*/
const cssClasses = ["fab fa-apple", "fab fa-windows"];
const aContents = ["Sign in with Apple", "Sign in with Microsoft"];
export const Header = () => {
  return (
    <header>
      <img src="./assets/logo.png" alt="Logo" />
      {aContents.map((content, index) => (
        <InputForm
          key={index}
          className={cssClasses[index]}
          content={content}
        />
      ))}

      <p>or</p>
      <FooterInputForm />
    </header>
  );
};
