import { IonContent, IonPage } from "@ionic/react";
import { AddCircleOutline } from "react-ionicons";
import "./main.css";
import React, { useState, useRef } from "react";
import FamilyCompositionForm from "../components/FamilyCompositionForm";
import { familyCompItem } from "../types/types";
import { format } from "date-fns";
const familyComposition: React.FC = () => {
  const [famComps, setFamComps] = useState<familyCompItem[]>([
    {
      name: "John Doe",
      relationship: "Father",
      age: 45,
      dateOfBirth: new Date("1979-05-15"),
      status: "Married",
      educationalAttainment: "Bachelor's Degree",
      nameOfSchool: "University of XYZ"
    },
    {
      name: "Jane Doe",
      relationship: "Mother",
      age: 42,
      dateOfBirth: new Date("1982-09-20"),
      status: "Married",
      educationalAttainment: "Master's Degree",
      nameOfSchool: "University of ABC"
    },
    {
      name: "Alice Doe",
      relationship: "Daughter",
      age: 18,
      dateOfBirth: new Date("2006-03-10"),
      status: "Single",
      educationalAttainment: "High School Graduate",
      nameOfSchool: "High School XYZ"
    }
  ]);

  const [current, setCurrent] = useState(0); // decides which component to render.
  return (
    <IonPage>
      <IonContent className="scroll-content">
        <div className="p-5">
          <h1 className="text-4xl font-bold text-blue-900">Register</h1>
          {current == 0 ? (
            <div>
              <p className="font-bold underline mb-5 mt-10">
                Family Composition
              </p>
              <div className="flex flex-col gap-5">
              {famComps?.map((fam) => (
                <div className="border-[1px] border-primary rounded-lg">
                  <div className="p-3 font-bold fam-comp-card">
                    <p>
                      Name: <span>{fam.name}</span>
                    </p>
                    <p>
                      Relationship: <span>{fam.relationship}</span>
                    </p>
                    <p>
                      Age: <span className="mr-2">{fam.age}</span>Date of Birth: <span>{format(fam.dateOfBirth, 'MMMM dd, yyyy')}</span>
                    </p>
                    <p>
                      Status: <span>{fam.status}</span>
                    </p>
                    <p>
                      Educational Attainment: <span>{fam.educationalAttainment}</span>
                    </p>
                    <p>
                      Name of School: <span>{fam.nameOfSchool}</span>
                    </p>
                  </div>
                </div>
              ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setCurrent(1);
                }}
                className="btn-tertiary flex gap-2 items-center w-fit mx-auto"
              >
                <AddCircleOutline height="30px" width="30px" />
                <p>Add Family Member</p>
              </button>

              <button className="btn-primary mt-10">Submit</button>
            </div>
          ) : (
            <FamilyCompositionForm setFamComps={setFamComps} setCurrent={setCurrent}/>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default familyComposition;
