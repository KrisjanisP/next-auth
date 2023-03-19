import {NextApiRequest, NextApiResponse} from 'next';

const emailRegExp = /\S+@\S+\.\S+/;
let validationError = "";

export default function login(req: NextApiRequest, resp: NextApiResponse) {
    console.log(req.body)
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    if(invalidEmail(email)||invalidUsername(username)||invalidPassword(password)){
        resp.status(200).json({error: validationError});
        return;
    }
    resp.status(200).json({email,username,password});
}

function invalidEmail(email:string):boolean {
    validationError = "";
    if(!emailRegExp.test(email)) {
        validationError = "email isnt correct";
        return true;
    }
    return false;
}

function invalidUsername(username: string):boolean {
    validationError = "";
    if(username.length<1||username.length>20) {
        validationError = "length of username must be between 1 and 20";
        return true;
    }
    return false;
}

function invalidPassword(password: string):boolean {
    validationError = "";
    if(password.length<8||password.length>128){
        validationError = "length of password must be between 8 and 128";
        return true;
    }
    return false;
}