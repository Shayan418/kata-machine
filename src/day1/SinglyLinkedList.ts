type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        this.length++
        const node = { value: item } as Node<T>
        if (!this.head) {
            this.head = node
            return
        }

        node.next = this.head
        this.head = node

    }
    insertAt(item: T, idx: number): void {
        console.log(this.head)
        console.log(this.length)
        const node = { value: item } as Node<T>
        this.length++
        let curr = this.head;

        if (idx === 0) {
            if (!this.head) {
                this.head = node
                return
            }
            node.next = this.head
            this.head = node

            console.log(this.head)
            console.log(this.length)
            return;
        }

        for (let i = 0; i < idx - 1; i++) {
            curr = curr?.next;
        }
        
        if(curr){
            node.next = curr?.next;
            curr.next = node
        }

        console.log(this.head)
        console.log(this.head?.next?.next)
        console.log(this.length)
        
        return

    }
    append(item: T): void {
        this.length++
        const node = { value: item } as Node<T>
        var curr = this.head;
        if (!curr) {
            this.head = node;
            return;
        }
        while (curr?.next) {
            curr = curr.next;
        }
        curr.next = node;

    }
    remove(item: T): T | undefined {
        console.log(this.head)
        let curr = this.head;
        this.length = Math.max(0, this.length - 1);
        if (curr?.value === item) {
            this.head = this.head?.next
            return (curr?.value)
        }


        while (curr?.next && curr.next.value != item) {
            curr = curr.next
        }

        if (curr?.next?.value != item) {
            return undefined
        }

        let temp = curr?.next;
        if (curr) {
            curr.next = curr?.next?.next;
        }

        console.log(this.head)

        return temp?.value;

    }
    get(idx: number): T | undefined {
        console.log(this.head)
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        return curr?.value;

    }
    removeAt(idx: number): T | undefined {
        console.log(this.head)
        console.log(this.length)
        this.length = Math.max(0, this.length - 1);

        let curr = this.head;

        if (idx === 0) {
            this.head = this.head?.next
            return (curr?.value)
        }

        for (let i = 0; i < idx - 1; i++) {
            curr = curr?.next;
        }

        let temp = curr?.next;

        if (curr) {
            curr.next = curr?.next?.next;
        }

        return temp?.value;

    }
}