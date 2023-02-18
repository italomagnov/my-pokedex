import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { getData } from '../../services/getData';

export function Pokemon() {
    const { data, isLoading } = getData();

    return (
        <section className="h-screen flex flex-col items-center justify-center gap-4 pb-80">
            <Button pathTo={'/'} />
            {isLoading && <p>Carregando...</p>}

            {!isLoading && (
                <>
                    <Card {...data?.data} />
                </>
            )}
        </section>
    );
}
