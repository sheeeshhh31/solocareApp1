import { ChevronBackOutline } from "react-ionicons";
import { FunctionComponent } from "react";

interface BackProps {
    func:any
}

const Back: FunctionComponent<BackProps> = ({func=()=>{}}) => {
  return (
    <div onClick={func} className="text-primary/60 flex items-center gap-2 mb-5">
      {" "}
      <ChevronBackOutline />
      <p className="font-bold ">Back</p>
    </div>
  );
};

export default Back;
