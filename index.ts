import { Score } from './classes/Score.js';

const score = new Score([
    {
        name: 'heroic',
        length: 8,
        curve: 'parabolic',
        curveHardness: 2,
        noteVariation: 3,
        dynamicFactor: 1,
        min: 40,
        max: 70,
    },
]);

score.generateMidiFile();
