import useAuthContext from "../hooks/useAuthContext";

const Login = () => {
  const { loginUser } = useAuthContext();
  return (
    <div>
      <h1>This is Login Page</h1>
      <button
        onClick={() => (
          loginUser("admin@mahfuz.com", "1234"), console.log("Mahfuz Islam")
        )}
        className="btn btn-primary"
      >
        Click to login
      </button>
    </div>
  );
};

export default Login;
