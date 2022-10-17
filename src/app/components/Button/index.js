import "./styles.css";
import GradientSpinner from "../loaders/GradientSpinner";

const Button = (props) => {
  const { children, loading, className, onClick } = props;
  const fullClassName = ["button"];

  if (className) {
    fullClassName.push(className);
  }
  if (loading) {
    fullClassName.push("loading");
  }

  return (
    <button
      {...props}
      onClick={!loading ? onClick : undefined}
      className={fullClassName.join(" ")}
    >
      {loading && <GradientSpinner size={30} />}
      {children}
    </button>
  );
};

export default Button;
