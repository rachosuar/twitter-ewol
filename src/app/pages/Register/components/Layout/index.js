import { useContext, useState } from "react";
import Card from "../../../../components/Card";
import LoadingOverlay from "../../../../components/loaders/LoadingOverlay";
import AppContext from "../../../../context/AppContext";
import RegisterForm from "../RegisterForm";
import { registerUser } from "../../../../../api/users";
import "./styles.css";

const RegisterLayout = () => {
  const { data: appData, setData: setAppData } = useContext(AppContext);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (formData) => {
    setSubmitError(null);
    setSubmitLoading(true);

    try {
      if (!formData.photo) {
        throw new Error("No te olvides de la Imagen!!");
      } else if (!formData.name) {
        throw new Error("Tambien debes completar el nombre");
      } else {
        await registerUser(formData.name, formData.photo).then((res) => {
          setAppData({ ...formData, id: res.id });
          setSubmitLoading(false);
        });
      }
    } catch (err) {
      setSubmitLoading(false);
      setSubmitError(err.message);
    }
  };
  console.log(appData);
  return (
    <div className="register-layout-container">
      <Card className="card">
        <LoadingOverlay visible={submitLoading} />
        <span className="title">Bienvenidxs!</span>
        <span className="subtitle">Regístrate para poder twittear</span>
        {submitError && <span className="error-message">{submitError}</span>}
        <RegisterForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
};

export default RegisterLayout;
