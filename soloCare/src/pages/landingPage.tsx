import { IonPage,IonContent } from "@ionic/react";
import { FunctionComponent, useEffect } from "react";
import { useHistory } from "react-router";
import { App } from "@capacitor/app";
interface LandingPagProps {}

const LandingPag: FunctionComponent<LandingPagProps> = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleRegisterClick = () => {
    history.push("/register");
  };

  const handleApplicationClick = () => {
    history.push("/checkApplicationStatus");
  };

  useEffect(()=>{
   
    const getWhat = async()=>{
      console.log(await App.getInfo());
      console.log(await App.getLaunchUrl());
      
    }
    getWhat()
  },[])
  return (
    <IonPage>
      <IonContent>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-[90%] max-w-[300px] flex flex-col items-center">
            <img
              className="w-[180px]"
              src="/solocare-blacklogo.png"
              alt="Logo"
            />
            <div className="flex flex-col gap-5 w-full mt-10">
              <button className="btn-primary" onClick={handleLoginClick}>
                Log in
              </button>
              <button className="btn-secondary" onClick={handleRegisterClick}>
                Register
              </button>
            </div>
            <p className="mt-20 p-3 underline" onClick={handleApplicationClick}>
              Application Status
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPag;
