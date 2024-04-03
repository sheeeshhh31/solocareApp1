import { FunctionComponent, useEffect, useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import { useForm } from "react-hook-form";
import { memberRegItem } from "../types/types";
import InputWrapper from "../components/InputWrapper";
import { instance } from "../config/axios";

import Back from "../components/Back";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { currentApplicationChecking } from "../state/AppState";
import { useIonLoading } from "@ionic/react";
interface CheckApplicationStatusProps {}

type appStatus = {
  reference: number;
  password: string;
};
const CheckApplicationStatus: FunctionComponent<
  CheckApplicationStatusProps
> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<appStatus>();
  const router = useHistory();
  const [currentApplication, setCurrentApplication] = useRecoilState(
    currentApplicationChecking
  );
  const [errorMsg, setErrorMsg] = useState("");

  const [present, dismiss] = useIonLoading();

  const onSubmit = async (data: appStatus) => {
    try {
      present({ message: "Processing...", spinner: "circles" });

      const res = await instance.post("/register/getApplicationStatus", {
        refNumber: data.reference,
        password: data.password.toString(),
      });
      if (res.status === 200) {
        setCurrentApplication({ ...res.data });
        router.push("/applicationStatus");
      }
    } catch (error: any) {
      setErrorMsg(error?.response?.data?.message);
    }

    dismiss();
  };

  useEffect(()=>{

    return()=>{
      reset()
    }
  },[])
  return (
    <IonPage>
      <IonContent>
        <div className="main-container">
          <Back
            func={() => {
              router.goBack();
            }}
          ></Back>
          <h1 className="text-4xl font-bold ">Check Application Status</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            {errorMsg && (
              <p className="text-red-500 italic text-center my-5">{errorMsg}</p>
            )}
            <div className="flex flex-col gap-5">
              <InputWrapper label="Reference number" required={true}>
                <input
                  {...register("reference", {
                    required: { value: true, message: "required nga ito" },
                  })}
                  type="text"
                  placeholder="Reference number"
                />
                {errors.reference && (
                  <p className="validation-error">
                    {errors.reference?.message}
                  </p>
                )}
              </InputWrapper>
              <InputWrapper label="Password" required={true}>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  type="password"
                  placeholder="Reference number"
                />
                {errors.password && (
                  <p className="validation-error">{errors.password.message}</p>
                )}
              </InputWrapper>
            </div>
            <button className="btn-primary mt-10" type="submit">
              Check status
            </button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CheckApplicationStatus;
