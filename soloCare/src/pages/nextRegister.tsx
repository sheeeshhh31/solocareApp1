import React, { useState, useRef, ChangeEvent } from "react";
import "./main.css";
import { ChevronBackOutline, AlertCircleOutline } from "react-ionicons";
import { useMaskito } from "@maskito/react";
import InputWrapper from "../components/InputWrapper";
const NextRegister = () => {
    return (
        <div className="w-screen h-screen p-5 overflow-y-auto">
            <div>
            <button onClick={() => {window.history.back()}}>Back</button>
            </div>
            <div className="scroll-content">
                <h1 className="text-4xl font-bold text-blue-900">Register</h1>
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
                <p className="font-bold underline mb-5">Personal Information</p>
                <div>
                    <div className="flex-col">Highest Educational Attainment <span className="text-red-500">*</span></div>
                    <select className="flex-col border-primary border-[1px] p-2 rounded-md w-full gap-2" >
                        <option value="hea-option1">N/A</option>
                        <option value="hea-option2">Elementary Undergraduate</option>
                        <option value="hea-option3">Elementary Graduate</option>
                        <option value="hea-option4">High School Undergraduate</option>
                        <option value="hea-option5">High School Graduate</option>
                        <option value="hea-option6">College Undergraduate</option>
                        <option value="hea-option7">College Graduate</option>
                    </select>
                </div>
                <div className="flex flex-col my-5">
                    <InputWrapper label="Occupation" required={true}>
                        <input type="text" placeholder="Occupation" />
                    </InputWrapper>
                </div>
                <div>
                    <div className="flex-col">Monthly Income <span className="text-red-500">*</span></div>
                    <select className="flex-col border-primary border-[1px] p-2 rounded-md w-full">
                        <option value="mi-option1">Below 10,000</option>
                        <option value="mi-option2">10,001-25,000</option>
                        <option value="mi-option3">25,001-50,000</option>
                        <option value="mi-option4">50,000 above</option>
                    </select>
                </div>
                <div className="flex flex-col my-5">
                    <InputWrapper className="grow" label="Place of Birth" required={true}>
                    <input type="text" placeholder="Place of Birth" />
                    </InputWrapper>
                </div>
                <div>
                <div className="flex-col">Status of Home Occupancy <span className="text-red-500">*</span></div>
                    <select className="flex-col border-primary border-[1px] p-2 rounded-md w-full">
                        <option value="soho-option1">Owned</option>
                        <option value="soho-option2">Rented</option>
                        <option value="soho-option3">Sharer</option>
                        <option value="soho-option4">Caretaker</option>
                    </select>
                </div>
                <div className="flex flex-col my-5">
                <InputWrapper label="4P's Beneficiary" required={true}>
                    <div className="flex  gap-5 mt-2">
                    <label className="flex items-center gap-2">
                        <input
                        type="radio"
                        name="gender"
                        value="Male"
                        className="w-fit"
                        />{" "}
                        <p className="">Yes</p>
                    </label>
                    <label htmlFor="" className="flex items-center gap-2">
                        <input
                        type="radio"
                        name="gender"
                        value="Female"
                        className="w-fit"
                        />
                        <p>No</p>
                    </label>
                    </div>
                </InputWrapper>
                </div>
                <div className="flex flex-col my-5">
                    <InputWrapper className="grow" label="PhilHealth" required={true}>
                    <input type="text" placeholder="PhilHealth" />
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
}

export default NextRegister;
