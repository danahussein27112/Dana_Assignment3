
export class Patient {
    key:string;
    email: string;
    gender: string;
    public SSN:number=0;
     Address:String;
    public id:number;
    public country:string
    public firstName:string;
    public lastName:string;
    public age:number;
    constructor( id: number,  firstName: string,lastName: string,  age: number,SSN:number) { 
        this.SSN=SSN || 0;
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.Address=this.Address||'';
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get _SSN(): number {
        return this.SSN;
      }
    
      set _SSN(value: number) {
        this.SSN = value;
      }
    
      getCountry(){
          return this.getCountry
      }
}
