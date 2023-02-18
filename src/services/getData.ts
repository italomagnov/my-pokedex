import axios from 'axios';
import { QueryClient, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export const queryClient = new QueryClient();

export function getData() {
    const params = useParams();

    const userPokemon = params['id'] as string;

    const { data, isLoading } = useQuery(
        'pokemon',
        async () => {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${userPokemon}`
            );

            return response;
        },
        {
            cacheTime: 0,
            refetchOnWindowFocus: false,
        }
    );

    return { data, isLoading };
}
