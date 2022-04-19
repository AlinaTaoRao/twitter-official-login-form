import "./styles.css";

/* way 1 */
export const InputForm = () => {
  return (
    <div className="input-form">
      <a href="#">
        <i className="fab fa-apple"></i>Sign in with Apple
      </a>
      <a href="">
        <i className="fab fa-windows"></i>Sign in with Microsoft
      </a>
    </div>
  );
};
