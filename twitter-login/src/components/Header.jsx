import './styles.css';
import { InputForm } from './input-form/InputForm.jsx';
import { FooterInputForm } from './footer-input-form/FooterInputForm.jsx';



export const Header = () => {
    return (
        <header>
        <img src="./assets/logo.png" alt="Logo" />
        <InputForm />
        <p>or</p>
        <FooterInputForm />
      </header>
    );
};