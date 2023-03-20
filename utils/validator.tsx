export class ApiRequestValidator {
    private static emailRegExp = /\S+@\S+\.\S+/;
    public validationError = "";

    invalidEmail(email:string):boolean {
        this.validationError = "";
        if(!ApiRequestValidator.emailRegExp.test(email)) {
            this.validationError = "email isnt correct";
            return true;
        }
        return false;
    }

    invalidUsername(username: string):boolean {
        this.validationError = "";
        if(username.length<1||username.length>20) {
            this.validationError = "length of username must be between 1 and 20";
            return true;
        }
        return false;
    }

    invalidPassword(password: string):boolean {
        this.validationError = "";
        if(password.length<8||password.length>128){
            this.validationError = "length of password must be between 8 and 128";
            return true;
        }
        return false;
    }

    invalidLoginRequest(email: string, username: string, password: string):boolean {
        return this.invalidEmail(email)||this.invalidUsername(username)||this.invalidPassword(password);
    }
}