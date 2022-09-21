import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import {ICredential} from "@typesCustom";
import {useState, FormEvent} from "react";
import { useAuth } from "../../hook/useAuth";
import { signInAdmin } from "../../services/server";

export function LoginPage(){

    const { signIn } = useAuth();

    const [credential, setCredential] = useState<ICredential>({
        email: '',
        password: ''
    })

    async function handleSignIn(event: FormEvent){
        event.preventDefault();

        await signInAdmin(credential)

        console.log(credential);
    }

    return (
        <div id="login-page">
            <Stack horizontal={false}>
                <form onSubmit={handleSignIn}>
                    <TextField label="Email"
                    required
                    value={credential.email}
                    onChange={event => setCredential({...credential, email:(event.target as HTMLInputElement).value})} />

                    <TextField label="senha"
                    required
                    type="password"
                    value={credential.password}
                    onChange={event => setCredential({...credential, password:(event.target as HTMLInputElement).value})}
                    />

                    <PrimaryButton
                       type="submit">
                       <span>Entrar</span>
                    </PrimaryButton>
                       
                </form>

                <h2> # </h2>
            </Stack>
        </div>
    )
}