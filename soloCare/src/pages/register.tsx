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
        <form action="">
          
        </form>
      </div>
    </div>
  );
};

export default Register;
