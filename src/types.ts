export interface PokemonInfoType {
    NationalID: string;
    Name: string;
    HP: number;
    Atk: number;
    Def: number;
    SpA: number;
    SpD: number;
    Spe: number;
    Ability1: string;
    Ability2: string;
    Type1: string;
    Type2: string;
    learnset: {
        level: number;
        move: string;
    }[];
}