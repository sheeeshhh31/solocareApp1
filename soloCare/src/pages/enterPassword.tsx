import { FunctionComponent } from "react";
import InputWrapper from "../components/InputWrapper";
import { useForm } from "react-hook-form";
import { IonPage } from "@ionic/react";
import { memberRegItem } from "../types/types";
import Back from "../components/Back";
import { useHistory } from "react-router";
interface EnterPasswordProps {}

const EnterPassword: FunctionComponent<EnterPasswordProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<memberRegItem>();

  const route = useHistory()
  const onSubmit = (data: memberRegItem) => {
    console.log(data);
  };
  return (
    <IonPage>
      <div className="p-5 h-screen w-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full w-full flex flex-col"
        >
          <Back func={()=>{route.push('/familyComposition')}}></Back>
          <div className="flex flex-col gap-5 mt-10 grow  justify-center">
            <h1 className="font-bold text-2xl text-primary">
              Enter your password
            </h1>
            <InputWrapper label="Password" required={true}>
              <input type="password" placeholder="Password" />
            </InputWrapper>
            <InputWrapper label="Confirm Password" required={true}>
              <input type="password" placeholder="Confirm Password" />
            </InputWrapper>
            <button type="submit" className="btn-primary">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </IonPage>
  );
};

export default EnterPassword;
