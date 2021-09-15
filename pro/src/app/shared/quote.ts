import { IPlan } from "./plan";

export class IQuote{
    id?:string;
    policy_start_date?:Date;
    policy_end_date?:Date
    person?:IPerson;
    plan?:IPlan
    total_premium!:number

}

export class IPerson{
    id?:string;
    salutation?:string;
    name?:string;
    dob?:string;
    email?:string;
    phonenumber?:string;
    ssn_number?:string;
    income_source?:string
}

export class ILogin{
    zipcode!: number;
    firstName!:string;
    lastName!:string
}


