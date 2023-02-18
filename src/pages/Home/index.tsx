import { useAtom } from 'jotai';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { inputValuePokemon } from '../../context/atom';

export function Home() {
    const [pokemon, setPokemon] = useAtom(inputValuePokemon);

    return (
        <form className="h-screen flex flex-col items-center justify-center gap-4">
            <Input
                value={pokemon}
                onchange={(e) => setPokemon(e.target.value)}
            />
            <Button pathTo={`/pokemon/${pokemon}`} />
        </form>
    );
}
