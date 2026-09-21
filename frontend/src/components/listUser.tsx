interface ITodoItemProps {
    id: string;
    name: string;
    email: string;
    onDelete(): Promise<void>;
}

export function ListUser({ id, name, email, onDelete }: ITodoItemProps) {
    async function handleRemove() {
        await onDelete();
    }

    return (
        <li>
            <p style={{ display: 'inline-block'}}>Id: {id}, Nome: {name}, Email: {email}</p>

            <button style={{ display: 'inline-block', marginLeft: '5px' }} onClick={handleRemove}>
                Remover user
            </button>
        </li>
    );
}
