import type React from "react";

interface IFormProps {
    action: string;
    method: string;
    children: React.ReactNode;
    onSubmit(): Promise<void>;
}

export function Form({action, method, children, onSubmit}: IFormProps) {
    async function handleSubmit() {
        onSubmit();
    }

    return (
        <form action={action} method={method}>
            {children}

            <button type="submit" onSubmit={() => handleSubmit()}> enviar</button>
        </form>
    )
}