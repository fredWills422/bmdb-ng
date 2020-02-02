export class Actor {
    id: number;
    firstName: string;
    LastName: string;
    gender: string;
    birthdate: Date;
    
    constructor( id: number=0, firstName: string= "",
                LastName: string="", gender: string="",
                birthdate: Date = new Date()) {
        this.id=id;
        this.firstName=firstName;
        this.LastName=LastName;
        this.gender=gender;
        this.birthdate=birthdate;
    }


}
