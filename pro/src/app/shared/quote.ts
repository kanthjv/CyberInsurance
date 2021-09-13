export class IQuote{
    id!:string;
    incidents_history!:string;
    policy_start_date!:Date;
    policy_end_date!:Date
    person!:IPerson;
    total_premium!:number

}

export class IPerson{
    id!:string;
    salutation!:string;
    name!:string;
    dob!:Date;
    email!:string;
    phonenumber!:string;
    ssn_number!:string;
    income_source!:string
}

export class ILogin{
    zipcode!: number;
    firstName!:string;
    lastName!:string
}


