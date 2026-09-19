interface ITodoItemProps {
    id: string;
    content: string;
    complete: boolean;
    onRemove(): void;
    onComplete(): void;
}

export function TodoItem({ id, content, complete, onRemove, onComplete }: ITodoItemProps) {
    function handleRemove() {
        onRemove();
    }

    function handleComplete() {
        onComplete();
    }

    return (
        <li>
            {content}

            {complete ? ' concluída! ' : ''}

            <button onClick={handleComplete}>
                Concluir
            </button>

            <button onClick={handleRemove}>
                Remover
            </button>
        </li>
    );
}
