import { FunctionComponent } from "react";
interface InputWrapperProps {
  label: string;
  className?:string;
  children: any;
  required: boolean;
}

const InputWrapper: FunctionComponent<InputWrapperProps> = ({
  label,
  children,
  className,
  required = false,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-base">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
