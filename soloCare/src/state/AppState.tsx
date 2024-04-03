import { atom } from "recoil";
import { memberRegItem } from "../types/types";
export const currentRegItem  = atom({
    key:'currentRegItem',
    default: {}
})
export const currentApplicationChecking  = atom({
    key:'currentApplicationChecking',
    default: {}
})