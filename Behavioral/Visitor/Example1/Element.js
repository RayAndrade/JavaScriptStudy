export class Element {
    accept(visitor) {
        throw new Error('accept(visitor) must be implemented');
    }
}