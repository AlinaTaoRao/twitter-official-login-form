import "./styles.css";

export const FooterInputForm = () => {
  return (
    <div className="footer-input-form">
      <input
        className="input-1"
        placeholder="Phone,email or username"
        type="text"
      />
      <button>Next</button>
      <input className="input-2" placeholder="Forgot Password?" type="text" />
      <span href="#">
        Don't have an account <a href="#">Sign Up</a>
      </span>
    </div>
  );
};
