export class Node {
    id: string;
    speed: number;

    constructor(id: string, speed: number) {
        this.id = id;
        this.speed = speed;
    }

    getSpeed(): number {
        return this.speed;
    }
}