import InputField from "./InputFieldView";
import { inputs } from "../constant";
import InputFieldView from "./InputFieldView";
import { useNavigate } from "react-router-dom";


const LoginPageView = ({formik}) => {

  const navigate = useNavigate();
  return (
    <div className="login-page">
    <div className="container my-5">
<h2 className="d-flex gap-3 justify-content-center align-items-center">
<img height={60} src="/c-logo.png" alt="logo" />
<span>Coinmania</span>
</h2>

<form onSubmit={formik.handleSubmit}>
    {inputs.map((data) => (
        <InputFieldView formik={formik} data={data} />
    ))}

<button onClick={() => navigate('/home')}>Gönder</button>
</form>
    </div>
    </div>
  )
}

export default LoginPageView