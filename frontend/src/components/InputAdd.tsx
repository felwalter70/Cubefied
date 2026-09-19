import { useState } from 'react';

interface IInputAddProps {
    onAdd(value: string): void;
}

export function InputAdd(props: IInputAddProps) {
    const [value, setValue] = useState('');

    function handleAdd() {
        props.onAdd(value);
        setValue('');
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                }}
            />

            <button onClick={handleAdd}>
                Adicionar
            </button>
        </div>
    );
}
