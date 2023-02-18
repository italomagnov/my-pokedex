import { Outlet } from 'react-router-dom';

export function DefaultPage() {
    return (
        <main className="bg-app-bg bg-cover bg-center bg-no-repeat">
            <div className="w-full max-w-lg mx-auto px-8">
                <Outlet />
            </div>
        </main>
    );
}
