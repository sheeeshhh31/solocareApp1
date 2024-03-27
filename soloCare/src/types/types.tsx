export type familyCompItem = {
    givenName:string,
    middleName?:string,
    surname:string,
    suffix?:string,
    relationship:string,
    age:number,
    dateOfBirth:Date,
    status: string,
    educationalAttainment: string,
    nameOfSchool:String
} 

export type memberRegItem = {
    givenName:string,
    middleName?:string,
    surname:string,
    suffix?:string,
    age:number,
    dateOfBirth:Date,
    placeOfBirth:string,
    sex:string,
    educationalAttainment:string,
    occupation:string,
    monthlyIncome: string,
    address:string,
    homeStatus:string,
    beneficiaryOf4Ps:string,
    philhealth?: string
    family:familyCompItem[],
    password:string,
    cPassword:string | null | undefined,
    phoneNumber:number|string,
    otp: number,
    otpExpiry: Date
}