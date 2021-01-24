import { PatternNote } from '../types/config.js';

export const patternData: { [key: string]: PatternNote[] } = {
    adventure: [
        { active: true, velocity: 0, length: 8 },
        { active: true, velocity: -15, length: 4 },
        { active: false },
        { active: true, velocity: -10, length: 8 },
    ],
    softHalves: [
        { active: true, velocity: 0, length: 8 },
        { active: true, velocity: -15, length: 8 },
    ],
    softQuarters: [
        { active: true, velocity: 0, length: 16 },
        { active: true, velocity: -15, length: 16 },
        { active: true, velocity: -10, length: 16 },
        { active: true, velocity: -20, length: 16 },
    ],
    heroic: [
        { active: true, velocity: 0, length: 8 },
        { active: false },
        { active: true, velocity: -15, length: 16 },
        { active: true, velocity: -10, length: 16 },
    ],
};
