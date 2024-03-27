import { Redirect, Route, Router } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./index.css";
import "./theme/custom.css";
import "./theme/tailwind.css";
import splashScreen from "./pages/splashScreen";
import landingPage from "./pages/landingPage";
import login from "./pages/login";
import ForgotPasswordPage from "./pages/forgotPassword";
import verification from "./pages/verification";
import getOtp from "./pages/getOtp";
import register from "./pages/register";
import nextRegister from "./pages/nextRegister";
import familyComposition from "./pages/familyComposition";
import familyCompositionList from "./pages/familyCompositionList";
import classification from "./pages/classification";
import applicationSubmit from "./pages/applicationSubmit";
import applicationStatuspending from "./pages/applicationStatuspending";
import applicationStatusrejected from "./pages/applicationStatusrejected";
import applicationStatusapproved from "./pages/applicationStatusapproved";
import uploadCoa from "./pages/uploadCoa";
import coaSubmit from "./pages/coaSubmit";
import uploadRequirements from "./pages/uploadRequirements";
import uploadRequirementspagetwo from "./pages/uploadRequirementspagetwo";
import uploadRequirementspagethree from "./pages/uploadRequirementspagethree";
import requirementSubmit from "./pages/requirementSubmit";
import requirementStatuspending from "./pages/requirementStatuspending";
import requirementStatusresubmit from "./pages/requirementStatusresubmit";
import requirementStatusapproved from "./pages/requirementStatusapproved";
import { RecoilRoot } from "recoil";
import EnterPassword from "./pages/enterPassword";
import GetRefNumber from "./pages/getRefNumber";
import RegistrationComplete from "./pages/registrationComplete";
setupIonicReact();

const App: React.FC = () => (
  <RecoilRoot>
    <IonApp className="">
      <IonReactRouter>
        <IonRouterOutlet animated={true}>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/splashScreen" component={splashScreen}></Route>
          <Route exact path="/landingPage" component={landingPage}></Route>
          <Route exact path="/login" component={login}></Route>
          <Route
            exact
            path="/forgotPassword"
            component={ForgotPasswordPage}
          ></Route>
          <Route exact path="/verification" component={verification}></Route>
          <Route exact path="/getOtp" component={getOtp}></Route>
          <Route exact path="/register" component={register}></Route>
          <Route exact path="/nextRegister" component={nextRegister}></Route>
          <Route
            exact
            path="/familyComposition"
            component={familyComposition}
          ></Route>
          <Route
            exact
            path="/familyCompositionList"
            component={familyCompositionList}
          ></Route>
          <Route
            exact
            path="/enterPassword"
            component={EnterPassword}
          ></Route>
          <Route
            exact
            path="/getRefNumber"
            component={GetRefNumber}
          ></Route>
          <Route
            exact
            path="/registrationComplete"
            component={RegistrationComplete}
          ></Route>
          <Route
            exact
            path="/classification"
            component={classification}
          ></Route>
          <Route
            exact
            path="/applicationSubmit"
            component={applicationSubmit}
          ></Route>
          <Route
            exact
            path="/applicationStatuspending"
            component={applicationStatuspending}
          ></Route>
          <Route
            exact
            path="/applicationStatusrejected"
            component={applicationStatusrejected}
          ></Route>
          <Route
            exact
            path="/applicationStatusapproved"
            component={applicationStatusapproved}
          ></Route>
          <Route exact path="/uploadCoa" component={uploadCoa}></Route>
          <Route exact path="/coaSubmit" component={coaSubmit}></Route>
          <Route
            exact
            path="/uploadRequirements"
            component={uploadRequirements}
          ></Route>
          <Route
            exact
            path="/uploadRequirementspagetwo"
            component={uploadRequirementspagetwo}
          ></Route>
          <Route
            exact
            path="/uploadRequirementspagethree"
            component={uploadRequirementspagethree}
          ></Route>
          <Route
            exact
            path="/requirementSubmit"
            component={requirementSubmit}
          ></Route>
          <Route
            exact
            path="/requirementStatuspending"
            component={requirementStatuspending}
          ></Route>
          <Route
            exact
            path="/requirementStatusresubmit"
            component={requirementStatusresubmit}
          ></Route>
          <Route
            exact
            path="/requirementStatusapproved"
            component={requirementStatusapproved}
          ></Route>
          <Route exact path="/">
            <Redirect to="/splashScreen" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </RecoilRoot>
);

export default App;
