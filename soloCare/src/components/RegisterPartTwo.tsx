import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { memberRegItem } from "../types/types";
import InputWrapper from "./InputWrapper";
import { AlertCircleOutline } from "react-ionicons";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentRegItem } from "../state/AppState";
import { useHistory } from "react-router";
interface RegisterPartTwoProps {}

const RegisterPartTwo: FunctionComponent<RegisterPartTwoProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<memberRegItem>();

  const [regItem, setRegItem] = useRecoilState(currentRegItem);
  const route = useHistory();
  const onSubmit = (data: memberRegItem) => {
    setRegItem((currentVal) => {
      return { ...currentVal, ...data };
    });
    route.push("/familyComposition");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 border-primary border-[1px] p-1 rounded-md my-5">
          <div>
            <AlertCircleOutline color="#00000" height="25px" width="25px" />
          </div>
          <div>
            <span>
              Fields with <span className="text-red-500">*</span> are required.
            </span>
          </div>
        </div>
        <p className="font-bold underline mb-5 mt-10">Personal Information</p>
        <div className="flex flex-col gap-5 ">
          <InputWrapper label="Educational Attainment" required={true}>
            <select
              {...register("educationalAttainment", { required: true })}
              defaultValue={"N/A"}
            >
              <option value="N/A">N/A</option>
              <option value="Elementary Undergraduate">
                Elementary Undergraduate
              </option>
              <option value="Elementary Graduate">Elementary Graduate</option>
              <option value="High School Undergraduate">
                High School Undergraduate
              </option>
              <option value="High School Graduate">High School Graduate</option>
              <option value="College Undergraduate">
                College Undergraduate
              </option>
              <option value="College Graduate">College Graduate</option>
            </select>
          </InputWrapper>
          <InputWrapper className="grow" label="Occupation" required={true}>
            <input
              {...register("occupation", {
                required: true,
                pattern: /^[a-zA-Z.\s-]+$/,
              })}
              type="text"
              placeholder="Occupation"
            />
            {errors.occupation && (
              <p className="validation-error">This field is required.</p>
            )}
          </InputWrapper>

          <InputWrapper className="grow" label="Monthly Income" required={true}>
            <select {...register("monthlyIncome", { required: true })}>
              <option value="below 10,000">below 10,000</option>
              <option value="10,001 - 25,000">10,001 - 25,000</option>
              <option value="25,001 - 50,000">25,001 - 50,000</option>
              <option value="50,000 above">50,000 above</option>
            </select>
          </InputWrapper>
          <InputWrapper
            className="grow"
            label="Present Address"
            required={true}
          >
            <input
              {...register("address", {
                required: true,
                pattern: /^[a-zA-Z.\s-]+$/,
              })}
              type="text"
              placeholder="Present Address"
            />
            {errors.address && (
              <p className="validation-error">This field is required.</p>
            )}
          </InputWrapper>
          <InputWrapper label="Status of Home Occupancy" required={true}>
            <select {...register("homeStatus", { required: true })}>
              <option value="owned">Owned</option>
              <option value="sharer">Sharer</option>
              <option value="rented">Rented</option>
              <option value="caretaker">Caretaker</option>
            </select>
          </InputWrapper>
          <InputWrapper label="4Ps Beneficiary" required={true}>
            <div className="flex gap-5">
              <div className="flex items-center">
                <input
                  className="w-fit mr-2"
                  {...register("beneficiaryOf4Ps", { required: true })}
                  type="radio"
                  value={"yes"}
                />
                <p>Yes</p>
              </div>
              <div className="flex items-center">
                <input
                  className="w-fit mr-2"
                  {...register("beneficiaryOf4Ps", { required: true })}
                  type="radio"
                  value={"no"}
                />
                <p>No</p>
              </div>
            </div>
            {errors.beneficiaryOf4Ps && (
              <p className="validation-error">This field is required.</p>
            )}
          </InputWrapper>
          <InputWrapper className="grow" label="Philhealth" required={false}>
            <input
              {...register("philhealth", {
                required: false,
              })}
              type="text"
              placeholder="Philhealth"
            />
          </InputWrapper>
        </div>
        <div>
          <button className="btn-primary mt-10" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPartTwo;
