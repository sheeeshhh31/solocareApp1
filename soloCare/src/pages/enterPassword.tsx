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
import { AlertCircleOutline } from "react-ionicons";
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
    const res = await instance.post("/register/uploadInitialInfo", {
      ...regItem,
      ...data,
    });
    console.log(res);

    if (res.status === 200) {
      router.push(`/getRefNumber?ref=${res.data.ref}`);
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
              <div className="text-center mt-16 text-sm border-[1px] border-primary p-2 rounded-md">
                <div className="flex items-center justify-center gap-1">
                  <AlertCircleOutline width={"18px"} /> <h1>IMPORTANT</h1>
                </div>
                <p className="mt-2">
                  Before continuing, please securely store your password and
                  ensure it remains confidential to prevent unauthorized access.
                  Password will be used in checking your application status and
                  log in.
                </p>
              </div>
              <button type="submit" className="btn-primary mt-5">
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
