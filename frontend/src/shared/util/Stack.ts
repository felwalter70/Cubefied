export class Stack<Type> {
    private stack: Array<Type>;

    constructor() {
        this.stack = new Array<Type>();
    }

    public push(element: Type): void {
        this.stack.push(element);
    }

    public isEmpty(): boolean {
        return !this.stack.length;
    }

    public pop(): Type | undefined {        
        return this.stack.pop();
    }
}