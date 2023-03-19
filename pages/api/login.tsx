import {NextApiRequest, NextApiResponse} from 'next';

export default function login(req: NextApiRequest, resp: NextApiResponse) {
    console.log(req.body)
    let user = {name:'joe'}
    resp.status(200).json(user);
}