export class IPlan{
    id!:number;
    insured!:number;
    premium!:number;
    coverages!:Array<{url:string,msg:string}>;
    addons!:Array<{url:string,msg:string}>;

}