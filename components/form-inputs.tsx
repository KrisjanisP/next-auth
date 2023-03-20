export function EmailInput({value, onChange}: {value: string, onChange: (e: any) => void}) {
    return (
        <div>
            <label htmlFor="email">Email:</label>
            <br/>
            <input id="email" type="email" value={value} onChange={(e)=>onChange(e.target.value)} required/>
        </div>
    )
}

export function UsernameInput({value, onChange}: {value: string, onChange: (e: any) => void}) {
    return (
        <div>
            <label htmlFor="username">Username:</label>
            <br/>
            <input id="username" type="username" value={value} onChange={(e)=>onChange(e.target.value)} required/>
        </div>
    )
}

export function PasswordInput({value, onChange}: {value: string, onChange: (e: any) => void}) {
    return (
        <div>
            <label htmlFor="password">Password:</label>
            <br/>
            <input id="password" type="password" value={value} onChange={(e)=>onChange(e.target.value)} required/>
        </div>
    )
}