import type React from 'react';

interface IListProps {
    children: React.ReactNode;
}

export function List({ children }: IListProps) {
    return (
        <ul>
            {children}
        </ul>
    );
}
