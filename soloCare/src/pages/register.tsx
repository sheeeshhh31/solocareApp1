import React, { useState, useRef, ChangeEvent } from "react";
import "./main.css";
import { ChevronBackOutline, AlertCircleOutline } from "react-ionicons";
import { useMaskito } from "@maskito/react";
import InputWrapper from "../components/InputWrapper";
const Register = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showPopover, setShowPopover] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);

  const phoneMask = useMaskito({
    options: {
      mask: [
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ],
    },
  });

  const datepickerRef = useRef<HTMLIonPopoverElement>(null);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    setSelectedDate(selectedDate);
    calculateAge(selectedDate);
  };

  const calculateAge = (birthdate: Date) => {
    const currentDate = new Date();
    const ageDiff = currentDate.getFullYear() - birthdate.getFullYear();
    setAge(ageDiff);
  };

  const openPopover = () => {
    setShowPopover(true);
  };

  const closePopover = () => {
    setShowPopover(false);
  };

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="w-screen h-screen p-5 overflow-y-auto">
      <div>
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </button>
      </div>
      <div className="scroll-content">
        <h1 className="text-4xl font-bold text-blue-900" >Register</h1>
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
            <input type="text" placeholder="Surname" />
          </InputWrapper>
          <div className="flex gap-5">
            <InputWrapper className="grow" label="Given Name" required={true}>
              <input type="text" placeholder="Given name" />
            </InputWrapper>
            <InputWrapper label="Suffix" required={true}>
              <input className="w-[70px]" type="text" placeholder="Suffix" />
            </InputWrapper>
          </div>

          <div>
            <InputWrapper label="Middle Name" required={true}>
              <input type="text" placeholder="Middle Name" />
            </InputWrapper>
            <div className="flex items-center gap-2">
              <input className="w-fit" type="checkbox" />{" "}
              <p>I have no middle name.</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <InputWrapper label="Age" required={false}>
              <input type="text" placeholder="Age" disabled />
            </InputWrapper>
            <InputWrapper label="Birthdate" required={true}>
              <input type="date" placeholder="Birthdate" />
            </InputWrapper>
          </div>
          <InputWrapper label="Place of Birth" required={true}>
            <input type="text" placeholder="Place of birth" />
          </InputWrapper>
          <InputWrapper label="Sex" required={true}>
            <div className="flex  gap-5 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="w-fit"
                />{" "}
                <p className="">Male</p>
              </label>
              <label htmlFor="" className="flex items-center gap-2">
                <input
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
          <button
            className="btn-primary mt-10"
            onClick={() => {
              window.location.href = "/nextRegister";
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
