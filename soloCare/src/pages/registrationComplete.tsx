import { IonPage,IonContent } from "@ionic/react";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";
interface RegistrationCompleteProps {
    
}
 
const RegistrationComplete: FunctionComponent<RegistrationCompleteProps> = () => {
    const router = useHistory()
    return ( 
        <IonPage>
            <IonContent>
                <div className="p-5 h-screen w-screen">
                    <p className="font-bold text-2xl text-center py-20">congrats registered ka na beh pero pending :(</p>
                    <button className="btn-primary" onClick={()=>{router.push('/landingPage')}}>go to login</button>
                </div>
            </IonContent>
        </IonPage>
     );
}
 
export default RegistrationComplete;