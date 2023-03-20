import { useEffect, useState } from "react";
import { postJson } from "@/utils/post-json";
import { EmailInput,UsernameInput, PasswordInput } from "@/components/form-inputs";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setError(""), setSuccess(false);
  }, [email, username, password]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const data = { email, username, password };
    const response = await postJson("/api/login", JSON.stringify(data));
    if (response.ok) {
      const result = await response.json();
      if (result.error) {
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
    <form onSubmit={handleLogin} style={{ margin: "5rem" }}>
      <EmailInput value={email} onChange={setEmail} />
      <UsernameInput value={username} onChange={setUsername} />
      <PasswordInput value={password} onChange={setPassword} />
      {error && <p>{error}</p>}
      {success && <p>Login was succesful.</p>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
