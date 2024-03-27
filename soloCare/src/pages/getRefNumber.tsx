import { IonPage, IonContent } from "@ionic/react";
import { FunctionComponent } from "react";
import { CheckmarkCircleOutline, AlertCircleOutline } from "react-ionicons";
import { useHistory, useLocation } from "react-router";
interface GetRefNumberProps {}

const GetRefNumber: FunctionComponent<GetRefNumberProps> = () => {
  const router = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const refNumber = queryParams.get("ref");

  return (
    <IonPage>
      <IonContent>
        <div className="p-5 h-screen w-screen flex flex-col justify-center">
          <div className="flex flex-col w-full items-center text-primary">
            <CheckmarkCircleOutline
              color={"#073173"}
              width={"120px"}
              height={"120px"}
            />
            <h1 className="uppercase text-center mt-5">
              We've successfully received the information you provided.
            </h1>
          </div>
          <div className="text-center my-16">
            <p>Your reference number is</p>
            <h1 className="text-6xl font-bold">{refNumber || "000000"}</h1>

            <div>
              <div className="text-center mt-16 text-sm border-[1px] border-primary p-2 rounded-md">
                <div className="flex items-center justify-center gap-1">
                  <AlertCircleOutline width={"18px"} /> <h1>IMPORTANT</h1>
                </div>
                <p className="mt-2">
                  Before continuing, please securely store your reference number
                  and ensure it remains confidential to prevent unauthorized
                  access.
                </p>
              </div>
              <button
                onClick={() => {
                  router.push(`/verification?ref=${refNumber}`);
                }}
                className="btn-primary mt-5"
              >
                Next
              </button>
              <div>
                <button
                  onClick={() => {
                    router.push(`/verification?ref=${refNumber}`);
                  }}
                  className="btn-secondary mt-5"
                >
                  Continue Later
                </button>
                <p className="text-left text-sm">Please ensure you keep a note of your reference number so you can return to your application later.</p>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GetRefNumber;
