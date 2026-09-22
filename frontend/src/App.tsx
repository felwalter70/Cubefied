import { MainMenu } from "./pages/MainMenu/MainMenu";
import { AppLayout } from "./shared/layouts/AppLayout";
import { BrowserRouter, Routes, Route } from 'react-router';

export function App() {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path='/' element={<MainMenu />} />
                    <Route path='*' element={<>Page not found! 404</>} />
                </Routes>
            </AppLayout>
        </BrowserRouter>
    )
}
