export default function two_crystal_balls(breaks: boolean[]): number {

    var jmp = Math.floor(Math.sqrt(breaks.length));
    var step = jmp;

    for (; step < breaks.length; step += jmp) {
        if (breaks[step] == true) {
            break
        }
    }

    step -= jmp;
    for (let i = 0; i < jmp && step < breaks.length; i++, step++) {
        if (breaks[step] == true) {
            return step
        }
    }

    return -1;
}