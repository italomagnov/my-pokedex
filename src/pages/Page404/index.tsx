import { Button } from '../../components/Button';

export function Page404() {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4">
            <h1>Essa página não existe :(</h1>
            <Button pathTo="/" />
        </div>
    );
}
