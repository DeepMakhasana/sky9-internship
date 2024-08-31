import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth/auth-context.tsx";
import { useNavigate } from "react-router-dom";

type LoginDataType = {
  username: string;
  password: string;
};

// Define a type for validation errors
interface ValidationErrors {
  username?: string;
  password?: string;
}

const initialState: LoginDataType = { username: "", password: "" };

export const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // safety check, if you are already login then go to recipes page
    if (auth.authenticated) {
      navigate("/recipes");
    }
  }, [auth.authenticated, navigate]);

  // form data validation
  const validate = (): ValidationErrors => {
    const validationErrors: ValidationErrors = {};

    if (!formData.username) {
      validationErrors.username = "username is required";
    }
    if (formData.username != "emilys") {
      validationErrors.username = "username is invalid";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    if (formData.password != "emilyspass") {
      validationErrors.password = "Invalid password";
    }

    return validationErrors;
  };

  // when change data it runs
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // when form is submit then it runs
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validation check
    const validationErrors = validate();
    setErrors(validationErrors);
    console.log(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // login api call
      auth.login(formData.username, formData.password);

      if (auth.authenticated) {
        setFormData(initialState);
        console.log("login detail: ", auth.user);
        alert("Form submitted successfully!");
        navigate("/");
      }
    }
  };

  return (
    <section
      className="container d-flex justify-content-center flex-column"
      style={{ maxWidth: "500px", height: "calc(100vh - 88px)" }}
    >
      <h1 className="mb-2">Login</h1>
      <p className="pb-4">
        Demo username: <strong>'emilys'</strong> and password: <strong>'emilyspass'</strong>
      </p>
      <form className={`row g-3 needs-validation`} onSubmit={handleSubmit} method="post">
        <div className="col-12">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              id="username"
              placeholder="username"
              onChange={onChangeHandler}
              required
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustom03" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="password"
            placeholder="password"
            onChange={onChangeHandler}
            required
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="col-12">
          <button
            className="btn btn-secondary py-2 px-4 d-flex gap-3 justify-content-center align-items-center"
            type="submit"
          >
            {auth.loading ? (
              <>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
              </>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};
