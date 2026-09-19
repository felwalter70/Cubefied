import { useState } from 'react';
import { InputAdd } from './components/InputAdd';
import { TodoItem } from './components/TodoItem';
import { List } from './components/List';

export function App() {
    const [list, setList] = useState([
        { id: '1', content: 'Tarefa 1', complete: false },
        { id: '2', content: 'Tarefa 2', complete: false },
        { id: '3', content: 'Tarefa 3', complete: false },
    ]);

    function handleOnAdd(value: string) {
        setList([...list, { id: (list.length + 1).toString(), content: value, complete: false }]);
    }

    function handleOnComplete(listItemId: string) {
        setList([...list.map(item => (
            { ...item, complete: item.id === listItemId ? true : item.complete }
        ))]);
    }

    function handleOnRemove(listItemId: string) {
        setList([...list.filter(item => item.id !== listItemId)]);
    }

    return (
        <div>
            <InputAdd onAdd={handleOnAdd} />

            <List>
                {list.map(listItem => (
                    <TodoItem
                        id={listItem.id}
                        complete={listItem.complete}
                        content={listItem.content}
                        onComplete={() => handleOnComplete(listItem.id)}
                        onRemove={() => handleOnRemove(listItem.id)}
                    />
                ))}
            </List>
        </div>
    );
}
