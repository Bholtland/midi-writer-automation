// @ts-ignore
import midi from 'midi-writer-js';
import fs from 'fs';
import { GeneratedPattern, PatternConfig } from '../types/config.js';
import { Pattern } from './Pattern.js';

export class Score {
    constructor(private configs: PatternConfig[]) {}

    generateMidiFile() {
        const outputs: GeneratedPattern[] = [];
        for (const config of this.configs) {
            const pattern = new Pattern(config);
            outputs.push(pattern.generatePattern());
        }

        const track = new midi.Track();

        for (const notes of outputs.flat()) {
            for (const note of notes) {
                if (note.active) {
                    const noteEvent = new midi.NoteEvent({
                        pitch: ['C4'],
                        duration: note.length.toString(),
                        velocity: note.velocity,
                    });
                    track.addEvent(noteEvent);
                }
            }
        }

        const write = new midi.Writer(track);

        // @ts-ignore
        fs.writeFile('midifile.mid', write.buildFile(), (err: any, result: any) => {
            if (err) throw Error(err);
        });
    }
}
