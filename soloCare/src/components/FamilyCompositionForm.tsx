import InputWrapper from "./InputWrapper";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { AlertCircleOutline } from "react-ionicons";
import { familyCompItem } from "../types/types";
import { useForm } from "react-hook-form";
import { differenceInYears } from "date-fns";
interface FamilyCompositionFormProps {
  setCurrent?: any;
  setFamComps?: any;
  famComps: familyCompItem[];
  currentlyEditing: number | null;
  setCurrentlyEditing?: any;
}

const FamilyCompositionForm: FunctionComponent<FamilyCompositionFormProps> = ({
  setCurrent,
  setFamComps,
  famComps,
  currentlyEditing = null,
  setCurrentlyEditing,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<familyCompItem>();

  const ageRef = useRef<number | string>("Age");

  const onSubmit = (data: familyCompItem) => {
    if (currentlyEditing == null) {
      setFamComps((prev: familyCompItem[]) => {
        const prevValue = prev.map((prev) => prev);
        const newFam: familyCompItem = {
          givenName: data.givenName,
          middleName: data.middleName,
          surname: data.surname,
          suffix: data.suffix,
          relationship: data.relationship,
          dateOfBirth: data.dateOfBirth,
          age: differenceInYears(new Date(), data.dateOfBirth),
          status: data.status,
          educationalAttainment: data.educationalAttainment,
          nameOfSchool: data.nameOfSchool,
        };
        prevValue.push(newFam);
        return prevValue;
      });
    } else {
      const newArr = famComps.map((fam) => fam);
      newArr[currentlyEditing];

      setFamComps(newArr);
      setCurrentlyEditing(null);
    }

    setCurrent(0);
  };


  useEffect(() => {
    if (currentlyEditing != null) {
      const item = famComps[currentlyEditing];

      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          const value = item[key as keyof familyCompItem]; // Using 'as keyof FamilyCompItem' to typecast key
          if (key == "dateOfBirth" && value instanceof Date) {
            setValue(key, new Date(value.toLocaleDateString()));
          } else {
            setValue(key as keyof familyCompItem, value);
          }
        }
      }
    }
  }, []);
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
      <p className="font-bold underline mb-5 mt-10">Family Composition</p>
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
              lowercase) and dashes (-).
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
          </InputWrapper>
          <InputWrapper label="Suffix" required={false}>
            <input
              {...register("suffix", { pattern: /^[a-zA-Z.\s-]+$/ })}
              className="w-[70px]"
              type="text"
              placeholder="Suffix"
            />
          </InputWrapper>
        </div>

        <div>
          <InputWrapper label="Middle Name" required={false}>
            <input
              {...register("middleName", { pattern: /^[a-zA-Z.\s-]+$/ })}
              type="text"
              placeholder="Middle Name"
            />
          </InputWrapper>
        </div>
        <InputWrapper label="Relationship" required={true}>
          <select
            {...register("relationship", { required: true })}
            name="relationship"
            value={" "}
          >
            <option value="Daughter">Daughter</option>
            <option value="Son">Son</option>
          </select>
        </InputWrapper>
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
        <InputWrapper label="Status" required={true}>
          <select
            {...register("status", { required: true })}
            name="status"
            defaultValue={"Single"}
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Separated">Separated</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </InputWrapper>
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
            <option value="College Undergraduate">College Undergraduate</option>
            <option value="College Graduate">College Graduate</option>
          </select>
        </InputWrapper>
        <InputWrapper label="School" required={true}>
          <input
            {...register("nameOfSchool", { required: true })}
            type="text"
            placeholder="School"
          />
        </InputWrapper>
      </div>
      <div>
        {currentlyEditing === null ? (
          <button className="btn-primary mt-10" type="submit">
            Next
          </button>
        ) : (
          <button className="btn-primary mt-10" type="submit">
            Save
          </button>
        )}
        <button
          onClick={() => {
            setCurrentlyEditing(null);
            setCurrent(0);
          }}
          className="btn-secondary mt-5"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FamilyCompositionForm;
