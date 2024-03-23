import React, { useState, useRef, ChangeEvent } from "react";
import "./main.css";
import { ChevronBackOutline, AlertCircleOutline } from "react-ionicons";
import { useMaskito } from "@maskito/react";
import InputWrapper from "../components/InputWrapper";
import { useForm } from "react-hook-form";
import { memberRegItem } from "../types/types";
import RegisterPartOne from "../components/RegisterPartOne";
const Register = () => {
  
 
  return (
    <div className="w-screen h-screen p-5 overflow-y-auto">
      <div>
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </button>
      </div>
      <div className="scroll-content">
        <h1 className="text-4xl font-bold text-blue-900">Register</h1>
        <RegisterPartOne />
      </div>
    </div>
  );
};

export default Register;
