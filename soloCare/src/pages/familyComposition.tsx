import { IonContent, IonPage, IonModal } from "@ionic/react";
import { AddCircleOutline, PencilOutline, TrashOutline } from "react-ionicons";
import "./main.css";
import React, { useState, useRef, MouseEventHandler } from "react";
import FamilyCompositionForm from "../components/FamilyCompositionForm";
import { familyCompItem } from "../types/types";
import { format } from "date-fns";
import { useHistory } from "react-router";
import Back from "../components/Back";
import { useRecoilState } from "recoil";
import { currentRegItem } from "../state/AppState";
const familyComposition: React.FC = () => {
  const router = useHistory();
  const [isOpen, setIsOpen] = useState(false); // state of delete modal
  const [currentlyEditing, setCurrentlyEditing] = useState<number | null>(null); //index of the fam item that is being edited by the user.
  const [currentDeleteItem,setCurrentDeleteItem] = useState<familyCompItem | null>();
  const [deleteIndex,setDeleteIndex] = useState<number|null>()
  const [regItem, setRegItem] = useRecoilState(currentRegItem);
  const [famComps, setFamComps] = useState<familyCompItem[]>([
    /* {
      givenName: "John",
      middleName: "Doe",
      surname: "Smith",
      suffix: "Jr.",
      relationship: "Brother",
      age: 25,
      dateOfBirth: new Date("1999-05-15"),
      status: "Single",
      educationalAttainment: "Bachelor's Degree",
      nameOfSchool: "University of XYZ",
    },
    {
      givenName: "Jane",
      surname: "Doe",
      relationship: "Sister",
      age: 30,
      dateOfBirth: new Date("1994-10-20"),
      status: "Married",
      educationalAttainment: "Master's Degree",
      nameOfSchool: "ABC College",
    },
    {
      givenName: "Alice",
      middleName: "Grace",
      surname: "Johnson",
      suffix: "III",
      relationship: "Father",
      age: 55,
      dateOfBirth: new Date("1969-12-01"),
      status: "Married",
      educationalAttainment: "PhD",
      nameOfSchool: "University of DEF",
    }, */
  ]);

  const [current, setCurrent] = useState(0); // decides which component to render.

  const openDeleteModal: any = (index: number) => {
    setIsOpen(true);
    setDeleteIndex(index);
    setCurrentDeleteItem(famComps[index]);
  };
  return (
    <IonPage>
      <IonContent className="scroll-content">
        <IonModal isOpen={isOpen}>
          <div className="p-5 flex flex-col justify-center h-full">
            <div>
              <p className="text-center font-semibold">
                Are you sure you want to remove family member?
              </p>
              {currentDeleteItem !=null && (
                <h1 className="capitalize text-center text-2xl my-10">
                  {currentDeleteItem.givenName}&nbsp;
                  {currentDeleteItem.middleName ?? ""}&nbsp;
                  {currentDeleteItem.surname ?? ""}&nbsp;
                  {currentDeleteItem.suffix ?? ""}
                </h1>
              )}
            </div>
            <div>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="btn-secondary"
                type="button"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setFamComps((prev) => {
                    const newArr = prev.map((prev) => prev);
                    newArr.splice(deleteIndex!, 1);
                    return newArr;
                  });
          
                  setIsOpen(false);
                }}
                className="btn-primary mt-5"
                type="button"
              >
                Confirm
              </button>
            </div>
          </div>
        </IonModal>
        <div className="p-5">
          {current == 0 ? (
            <div>
              <Back
                func={() => {
                  router.goBack();
                }}
              />
              <h1 className="text-4xl font-bold text-blue-900">Register</h1>
              <p className="font-bold underline mb-5 mt-10">
                Family Composition
              </p>
              <div className="flex flex-col gap-5">
                {famComps.length > 0 &&
                  famComps?.map((fam, index) => (
                    <div
                      key={index}
                      className="border-[1px] border-primary rounded-lg flex "
                    >
                      <div className="p-3 font-bold fam-comp-card grow">
                        <p>
                          Name:{" "}
                          <span>
                            {fam.givenName} {fam.middleName} {fam.surname}{" "}
                            {fam.suffix}
                          </span>
                        </p>
                        <p>
                          Relationship: <span>{fam.relationship}</span>
                        </p>
                        <p>
                          Age: <span className="mr-2">{fam.age}</span>Date of
                          Birth:{" "}
                          <span>
                            {format(fam.dateOfBirth, "MMMM dd, yyyy")}
                          </span>
                        </p>
                        <p>
                          Status: <span>{fam.status}</span>
                        </p>
                        <p>
                          Educational Attainment:{" "}
                          <span>{fam.educationalAttainment}</span>
                        </p>
                        <p>
                          Name of School: <span>{fam.nameOfSchool}</span>
                        </p>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div
                          onClick={() => {
                            setCurrentlyEditing(index);
                            setCurrent(1);
                          }}
                          className="p-3"
                        >
                          <PencilOutline width="30px" height={"30px"} />
                        </div>
                        <div
                          onClick={() => {
                            openDeleteModal(index);
                          }}
                          className="p-3"
                        >
                          <TrashOutline width="30px" height={"30px"} />
                        </div>
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

              <button
                onClick={() => {
                  setRegItem({
                    ...regItem,
                    family: famComps,
                  });
                  router.push("/enterPassword");
                }}
                className="btn-primary mt-10"
              >
                Submit
              </button>
            </div>
          ) : (
            <FamilyCompositionForm
              currentlyEditing={currentlyEditing}
              famComps={famComps}
              setFamComps={setFamComps}
              setCurrent={setCurrent}
              setCurrentlyEditing={setCurrentlyEditing}
            />
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default familyComposition;
