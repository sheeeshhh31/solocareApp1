import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";
import { useMaskito } from "@maskito/react";
import { chevronBackOutline } from "ionicons/icons";
import "./main.css";
import Back from "../components/Back";
import { IonPage, IonContent } from "@ionic/react";
import { useHistory } from "react-router";
import { instance } from "../config/axios";
import { useForm } from "react-hook-form";
import { memberRegItem } from "../types/types";
import InputWrapper from "../components/InputWrapper";
const Verification = () => {
  const router = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const refNumber = queryParams.get("ref");

  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneMask = useMaskito({
    options: {
      mask: [
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ],
    },
  });
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    if (phoneInputRef.current) {
      phoneMask(phoneInputRef.current);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<memberRegItem>();

  const onSubmit = async (data: memberRegItem) => {
    console.log("AW");
    
    const res = await instance.post("/register/getOtp", {
      phoneNumber:data.phoneNumber,
      refNumber,
    });

    console.log(res);

    if(res.status == 200){
      router.push(`/getOtp?phone=${res.data.number}&ref=${refNumber}`);
    }
  };

  useEffect(()=>{
    if(watch("phoneNumber")){
      
    
      let formatted = watch('phoneNumber').toString().replace(/[^\d]|^0+/g, '');
     
      console.log(formatted);
      
      setValue("phoneNumber",formatted);
    }
  },[watch('phoneNumber')])
  return (
    <IonPage>
      <IonContent>
        <div className="p-5 h-screen w-screen">
          <Back
            func={() => {
              router.goBack();
            }}
          ></Back>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl text-primary font-semibold">
                Verification
              </h1>
              <div className="box-box">
                <div className="text-text">
                  <p>
                    We will send you a One Time Password (OTP) on your phone
                    number for verification.
                  </p>
                </div>
              </div>
              <InputWrapper label="Phone Number" required={true}>
                <div className="flex items-center gap-2">
                  <div className="countryCode">+63</div>
                  <input
                    {...register("phoneNumber", { required: true })}
                    className="w-full max-w-[360px]"
                   // value={phoneNumber}
                    type="tel"
                    maxLength={10}
                    //onChange={handlePhoneNumberChange}
                    //ref={phoneInputRef}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="validation-error">
                    Field is required.
                  </p>
                )}
              </InputWrapper>
              <button className="btn-primary" type="submit">
                Get OTP
              </button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Verification;
