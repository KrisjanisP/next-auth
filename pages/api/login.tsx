import {NextApiRequest, NextApiResponse} from 'next';
import {ApiRequestValidator} from '../../utils/validator';

export default function login(req: NextApiRequest, resp: NextApiResponse) {
    console.log(req.body)
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const validator = new ApiRequestValidator();
    if(validator.invalidLoginRequest(email,username,password)){
        resp.status(200).json({error: validator.validationError});
        return;
    }
    resp.status(200).json({email,username,password});
}