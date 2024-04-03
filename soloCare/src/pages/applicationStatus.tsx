import { IonPage, IonContent } from "@ionic/react";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { currentApplicationChecking } from "../state/AppState";
import { format } from "date-fns";
interface ApplicationStatusProps {}

const ApplicationStatus: FunctionComponent<ApplicationStatusProps> = () => {
  const router = useHistory();

  const [applicant, setCurrentApplicant] = useRecoilState<any>(
    currentApplicationChecking
  );

  return (
    <IonPage>
      <IonContent>
        <div className="main-container">
          <h1 className="text-4xl font-bold text-primary">Status</h1>
          <div className="mt-20">
            <div className="flex justify-between  mb-2 text-lg">
              <p>Application Status:</p>
              <p className="font-bold uppercase">
                {applicant.applicationStatus}
              </p>
            </div>
            <div className="bg-primary rounded-xl text-white">
              <div className="border-b-white border-b-2 p-5">
                <p className="font-bold text-center">
                  Reference No. {applicant.ref}
                </p>
              </div>
              <div className="p-5">
                <div className="flex gap-2 items-center">
                    <img src="public/solocare.png" alt="" width={40}  />
                  <div className="">
                    <p className="font-semibold">{`${applicant.givenName} ${applicant.middleName} ${applicant.surname}`}</p>
                    <p className="font-thin italic text-sm">
                      {applicant.address}
                    </p>
                  </div>
                </div>
                <div className="w-full flex text-center my-5 mt-10">
                  <div className="grow">
                    <p className="font-semibold uppercase">
                      {applicant.pickupDate
                        ? format(applicant.pickupDate.toDate(), "MMM dd, yyyy")
                        : "N/A"}
                    </p>
                    <p className="text-sm italic">Pick-up Date</p>
                  </div>
                  <div className="grow ">
                    <p className="font-semibold">
                      {applicant.pickupDate
                        ? format(applicant.pickupDate.toDate(), "h:mm a")
                        : "N/A"}
                    </p>
                    <p className="text-sm italic">Pick-up Time</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setCurrentApplicant({});
                router.push("/landingPage");
              }}
              className="btn-secondary mt-10"
            >
              Close
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ApplicationStatus;
