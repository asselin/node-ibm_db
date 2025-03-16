export class SimpleQueue {
  fifo: any[];
  executing: boolean;
  push(fn: (foo: any, bar: any) => void): void {}
  maybeNext(): void {}
  next(): void {}
}
