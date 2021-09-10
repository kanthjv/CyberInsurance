export class Quote{
    id!:string;
    incidents_history!:string;
    policy_start_date!:Date;
    policy_end_date!:Date
    person!:Person;
    total_premium!:number

}

export class Person{
    id!:string;
    firstname!:string;
    lastname!:string;
    dob!:Date;
    email!:string;
    phonenumber!:string;
    ssn_number!:string;
    income_source!:string
}
