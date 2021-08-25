export class Doctor {
    key:string;
    email: string;
    notes: string;
    public salary:number=0;
    public phoneNum:number;
    public id:number;
    public firstName:string;
    public lastName:string;
    public spi:string;
    public Address:string;
    constructor( id: number, firstName: string,lastName: string, notes: string,salary:number,spi:string,phoneNum:number,Address:string) { 
        this.salary=salary || 0;
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.spi=spi;
        this.notes=notes||'';
        this.phoneNum=phoneNum;
        this.Address=Address;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
