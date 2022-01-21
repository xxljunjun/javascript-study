declare class Queue<T> {
    private data;
    push: (item: T) => number;
    pop: () => T | undefined;
}
declare let queue: Queue<number>;
