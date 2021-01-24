export type PatternName = 'adventure' | 'softHalves' | 'softQuarters' | 'heroic';
export type CurveName = 'linear' | 'parabolic';

export interface PatternConfig {
    name: PatternName;
    length: number;
    curve: CurveName;
    curveHardness?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    noteVariation: number;
    dynamicFactor: number;
    min?: number;
    max?: number;
}

export interface PatternNote {
    active: boolean;
    velocity?: number;
    length?: number;
}

export type GeneratedPattern = PatternNote[][];

export enum Curves {
    LINEAR = 'linear',
    PARABOLIC = 'parabolic',
}

export interface Config {
    patterns: PatternConfig[];
    noteVariation: number;
}
