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

export interface AbilityType {
    AbilityName: string;
    Description: string;
}

export interface MoveType {
    Name: string;
    Type: string;
    "Cat.": string;
    PP: number;
    "Att.": number;
    "Acc.": number;
    secEffect: string;
    Description: string;
}