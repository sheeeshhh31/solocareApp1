import { FunctionComponent } from "react";
import InputWrapper from "../components/InputWrapper";
import { useForm } from "react-hook-form";
import { IonPage, IonContent } from "@ionic/react";
import { memberRegItem } from "../types/types";
import Back from "../components/Back";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { currentRegItem } from "../state/AppState";
import { instance } from "../config/axios";

interface EnterPasswordProps {}

const EnterPassword: FunctionComponent<EnterPasswordProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<memberRegItem>();

  const router = useHistory();

  const [regItem, setRegItem] = useRecoilState(currentRegItem);

  const onSubmit = async (data: memberRegItem) => {
    setRegItem({ ...regItem, ...data });
    const res  = await instance.post('/register/uploadInitialInfo',{...regItem,...data})
    console.log(res);
    
    if(res.status===200){
      router.push(`/getRefNumber?ref=${res.data.finalData.ref}`)
    }
    
   // router.push('/getRefNumber')
  };
  return (
    <IonPage>
      <IonContent>
        <div className="p-5 h-screen w-screen">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-full w-full flex flex-col"
          >
            <Back
              func={() => {
                router.push("/familyComposition");
              }}
            ></Back>
            <div className="flex flex-col gap-5 mt-10 grow  justify-center">
              <h1 className="font-bold text-2xl text-primary">
                Set up your password
              </h1>
              <InputWrapper label="Password" required={true}>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                />
              </InputWrapper>
              <InputWrapper label="Confirm Password" required={true}>
                <input
                  {...register("cPassword", {
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                  type="password"
                  placeholder="Confirm Password"
                />
                {errors.cPassword && (
                  <p className="validation-error">Password do not match.</p>
                )}
              </InputWrapper>
              <button type="submit" className="btn-primary mt-10">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EnterPassword;
