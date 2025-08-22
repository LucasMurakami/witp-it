export interface WhosThatPokemonCardInformation {
    name: string;
    sprites: {    
        other: {
            "official-artwork": {
                front_default: string;
            }
        }
    };
}

export interface jsonPokemon {
    id: number;
    name: string;
}