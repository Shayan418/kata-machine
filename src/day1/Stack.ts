type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Stack<T> {
    public length: number;
    private head?: Node<T>

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value : item} as Node<T>
        node.next = undefined;
        this.length++
        if(!this.head){
            this.head = node;
            return
        }

        node.next = this.head
        this.head = node
        console.log( node, this.head)
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;
        console.log(head, head.value)

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}