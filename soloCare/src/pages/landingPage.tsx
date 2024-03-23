import React from "react";
import { useHistory } from "react-router-dom";
import "./main.css";

const LandingPage = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleRegisterClick = () => {
    history.push("/register.tsx");
  };

  const handleApplicationClick = () => {
    history.push("/applicationStatusapproved");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[90%] max-w-[300px] flex flex-col items-center">
        <img className="w-[180px]" src="/solocare-blacklogo.png" alt="Logo" />
        <div className="flex flex-col gap-5 w-full mt-10">
          <button className="btn-primary" onClick={handleLoginClick}>
            Log in
          </button>
          <button className="btn-secondary" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
        <p
          className="mt-20 p-3 underline"
          onClick={handleApplicationClick}
        >
          Application Status
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
