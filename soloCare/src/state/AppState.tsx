import { atom } from "recoil";
import { memberRegItem } from "../types/types";
export const currentRegItem  = atom({
    key:'currentRegItem',
    default: {}
})