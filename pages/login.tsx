import {useEffect, useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{setError(''), setSuccess(false)},[email,username,password]);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const data = {email,username,password};
        const response = await postJson('/api/login', JSON.stringify(data));
        if(response.ok){
            const result = await response.json();
            if(result.error) {
                setSuccess(false);
                setError(result.error);
                return;
            }
            setSuccess(true);
        } else {
            alert(response.text());
        }
    };

    return (
        <form onSubmit={handleLogin} style={{margin:"5rem"}}>
            <EmailInput value={email} onChange={setEmail}/>
            <UsernameInput value={username} onChange={setUsername}/>
            <PasswordInput value={password} onChange={setPassword}/>
            {error && <p>{error}</p>}
            {success && <p>Login was succesful.</p>}
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

function EmailInput({value, onChange}: {value: string, onChange: (e: any) => void}) {
    return (
        <div>
            <label htmlFor="email">Email:</label>
            <br/>
            <input id="email" type="email" value={value} onChange={(e)=>onChange(e.target.value)} required/>
        </div>
    )
}

function UsernameInput({value, onChange}: {value: string, onChange: (e: any) => void}) {
    return (
        <div>
            <label htmlFor="username">Username:</label>
            <br/>
            <input id="username" type="username" value={value} onChange={(e)=>onChange(e.target.value)} required/>
        </div>
    )
}

function PasswordInput({value, onChange}: {value: string, onChange: (e: any) => void}) {
    return (
        <div>
            <label htmlFor="password">Password:</label>
            <br/>
            <input id="password" type="password" value={value} onChange={(e)=>onChange(e.target.value)} required/>
        </div>
    )
}

async function postJson(url:string, json:string) {
    let options:RequestInit = {};
    options.method = 'POST';
    options.headers = {'Content-Type':'application/json'};
    options.body = json;
    let result = fetch("/api/login",options);
    return result;
}