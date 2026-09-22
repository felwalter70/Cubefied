import './AppLayout.css';

export function AppLayout({ children }: React.PropsWithChildren) {
    return (
        <div>
            { children }

        <pre className='brandRegister'>Cubefied TM</pre>
        </div>
    )
}