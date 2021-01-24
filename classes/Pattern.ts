import { Curves, GeneratedPattern, PatternConfig, PatternName, PatternNote } from '../types/config.js';
import { patternData } from '../data/PatternData.js';

export class Pattern {
    constructor(private config: PatternConfig) {}

    private getNotesByName(name: PatternName, offset: number) {
        const notes = patternData[name];

        return notes.map((note) => {
            const variation = Math.random() * (this.config.noteVariation * 2) - this.config.noteVariation;
            let velocity = Math.round(this.config.min + note.velocity * this.config.dynamicFactor + offset + variation);

            if (velocity > 127) {
                velocity = 127;
            } else if (velocity < 1) {
                velocity = 1;
            }

            return note.active
                ? {
                      ...note,
                      velocity: velocity,
                  }
                : note;
        });
    }

    private generateOffsetFromCurve(beat: number) {
        let offset: number;
        let dynamics: number;

        switch (this.config.curve) {
            case Curves.LINEAR:
                dynamics = this.config.max - this.config.min;
                offset = (beat / this.config.length) * dynamics;

                break;
            case Curves.PARABOLIC:
                dynamics = this.config.max - this.config.min;

                // prettier-ignore
                offset =
                    ((beat - this.config.length) ** (this.config.curveHardness || 2) /
                        this.config.length ** (this.config.curveHardness || 2)) *
                        -1 *
                        dynamics +
                    dynamics;
                break;
            default:
                break;
        }

        return offset;
    }

    public generatePattern() {
        const patternNotes: GeneratedPattern = [];

        for (let a = 0; a < this.config.length; a++) {
            let offset = 0;
            if (this.config.min && this.config.max) {
                offset = this.generateOffsetFromCurve(a);
            }
            patternNotes.push(this.getNotesByName(this.config.name, offset));
        }

        return patternNotes;
    }
}
