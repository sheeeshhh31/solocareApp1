import InputWrapper from "./InputWrapper";
import { useRef,useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FunctionComponent } from "react";
import { differenceInYears } from "date-fns";
import { memberRegItem } from "../types/types";
import { AlertCircleOutline } from "react-ionicons";
interface RegisterPartOneProps {}

const RegisterPartOne: FunctionComponent<RegisterPartOneProps> = () => {
  const ageRef = useRef<number | string>("Age");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<memberRegItem>();
  const onSubmit = (data: memberRegItem) => {};


  useEffect(() => {
    if (watch("dateOfBirth")) {
      ageRef.current =
        differenceInYears(new Date(), watch("dateOfBirth")) || "";
    }
  }, [watch("dateOfBirth")]);
  return (
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
        <InputWrapper label="Surname" required={true}>
          <input
            {...register("surname", {
              required: true,
              pattern: /^[a-zA-Z.\s-]+$/,
            })}
            type="text"
            placeholder="Surname"
          />
          {errors.surname && (
            <p className="validation-error">
              Please enter a valid surname containing only letters (uppercase or
              lowercase).
            </p>
          )}
        </InputWrapper>
        <div className="flex gap-5">
          <InputWrapper className="grow" label="Given Name" required={true}>
            <input
              {...register("givenName", {
                required: true,
                pattern: /^[a-zA-Z.\s-]+$/,
              })}
              type="text"
              placeholder="Given name"
            />
            {errors.givenName && (
              <p className="validation-error">
                Please enter a valid surname containing only letters (uppercase
                or lowercase).
              </p>
            )}
          </InputWrapper>
          <InputWrapper label="Suffix" required={false}>
            <input
              {...register("suffix", {
                required: false,
                pattern: /^[a-zA-Z.\s-]+$/,
              })}
              className="w-[70px]"
              type="text"
              placeholder="Suffix"
            />
            {errors.suffix && (
              <p className="validation-error">
                Please enter a valid surname containing only letters (uppercase
                or lowercase).
              </p>
            )}
          </InputWrapper>
        </div>

        <div>
          <InputWrapper label="Middle Name" required={false}>
            <input
              {...register("middleName", {
                required: false,
                pattern: /^[a-zA-Z.\s-]+$/,
              })}
              type="text"
              placeholder="Middle Name"
            />
            {errors.middleName && (
              <p className="validation-error">
                Please enter a valid surname containing only letters (uppercase
                or lowercase).
              </p>
            )}
          </InputWrapper>
        </div>
        <div className="flex gap-5">
          <InputWrapper label="Age" required={false}>
            <input
              {...register("age")}
              value={ageRef.current}
              type="text"
              className="w-[70px]"
              placeholder="Age"
              disabled
            />
          </InputWrapper>
          <InputWrapper className="grow" label="Birthdate" required={true}>
            <input
              {...register("dateOfBirth", { required: true })}
              type="date"
              placeholder="Birthdate"
            />
          </InputWrapper>
        </div>
        <InputWrapper label="Place of Birth" required={true}>
          <input
            {...register("placeOfBirth", { required: true })}
            type="text"
            placeholder="Place of birth"
          />
        </InputWrapper>
        <InputWrapper label="Sex" required={true}>
          <div className="flex  gap-5 mt-2">
            <label className="flex items-center gap-2">
              <input
                {...register("sex", { required: true })}
                type="radio"
                name="gender"
                value="Male"
                className="w-fit"
              />{" "}
              <p className="">Male</p>
            </label>
            <label htmlFor="" className="flex items-center gap-2">
              <input
                {...register("sex", { required: true })}
                type="radio"
                name="gender"
                value="Female"
                className="w-fit"
              />
              <p>Female</p>
            </label>
          </div>
        </InputWrapper>
      </div>
      <div>
        <button className="btn-primary mt-10" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};

export default RegisterPartOne;
