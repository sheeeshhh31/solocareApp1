import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  IonContent,
  IonPage,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonNote,
  IonText,
  IonItem,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import "./main.css";
import { useHistory, useLocation } from "react-router";
import Back from "../components/Back";

import { instance } from "../config/axios";
const getOtp: React.FC = () => {
  const router = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const phone = queryParams.get("phone");
  const ref = queryParams.get("ref");

  const otpLength = 4;
  const [otp, setOtp] = useState<string[]>(new Array(otpLength).fill(""));
  const [timer, setTimer] = useState<number>(0);
  const inputRefs = new Array(otpLength)
    .fill(null)
    .map(() => useRef<HTMLInputElement>(null));

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (isNaN(Number(value))) {
      return; // Only allow numeric input
    }
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });
    // Move focus to the next input field
    if (value && inputRefs[index + 1]) {
      inputRefs[index + 1].current!.focus();
    }
  };

  const [err, setErr] = useState<string>("");

  const handleKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && !otp[index] && inputRefs[index - 1]) {
      if (!inputRefs[index].current?.value) {
        console.log(!inputRefs[index].current?.value);

        inputRefs[index - 1].current?.focus();
      } else {
      }
    } else if (otp[index] && inputRefs[index + 1]?.current) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleConfirm = async () => {
    try {
      const inputOtp = otp.join("");

      const res = await instance.post("/register/verifyOtp", {
        otp: inputOtp,
        number: phone,
      });

      if (res.status === 200) {
        router.push("/registrationComplete");
      }
    } catch (error: any) {
        console.log(error);
        
      setErr(error.response.data.message);
    }
  };

  const resendOTP = async () => {
    const res = await instance.post("/register/getOtp", { phoneNumber:phone, refNumber:ref });
    console.log(res);
    
    setTimer(60);
  };

  useEffect(() => {
    let timeInterval: NodeJS.Timeout;
    if (timer > 0) {
      timeInterval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [timer]);
  return (
    <IonPage>
      <IonContent>
        <div className="p-5 h-screen w-screen flex flex-col ">
          <Back
            func={() => {
              router.goBack();
            }}
          ></Back>
          <h1 className="text-4xl text-primary font-semibold">Verification</h1>
          <div className="w-full flex flex-col items-center mt-10">
            <p className="">
              Enter the 4-digit code sent to you at +63{phone}.{" "}
            </p>
            <form action="" className="mt-5">
              <div>
                <div className="flex gap-5 ">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      inputMode="numeric"
                      value={value}
                      onChange={(e) => handleInputChange(index, e)}
                      ref={inputRefs[index]}
                      type="text"
                      maxLength={1}
                      onKeyUp={(e) => {
                        handleKeyUp(e, index);
                      }}
                      className="text-center max-w-[60px] py-5"
                    />
                  ))}
                </div>
                {err && <p className="validation-error">{err}</p>}
              </div>
              <button
                type="button"
                className="btn-primary mt-10"
                onClick={handleConfirm}
                disabled={otp.includes("") ? true : false}
              >
                Confirm
              </button>
            </form>
            <div className="text-center mt-10">
              <p className="italic">Didn't receive the OTP?</p>
              <div className="flex items-baseline gap-2 ">
                {timer > 0 ? (
                  <p className="text-black/60">Resend in {timer} secs</p>
                ) : (
                  <p onClick={resendOTP} className="py-3 font-bold underline">Resend OTP</p>
                )}
                <p>or</p>
                <p onClick={()=>{router.goBack()}} className="py-3 font-bold underline">Change Number</p>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default getOtp;
