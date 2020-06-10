export class Form {
    id?: number;
    emailAddress: string;
    firstName: string;
    lastName: string;
    password?: string;
    repeatPassword?: string;
    address: string;
    phoneNumber: string;

    constructor(id:number, emailAddress: string, firstName: string, lastName: string, password: string, repeatPassword: string, address: string, phoneNumber: string) {
        this.id = id;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}