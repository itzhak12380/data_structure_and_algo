class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class linkdList {
    constructor() {
        this.head = null
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value)
            return
        }
        let curr = this.head
        while (curr.next !== null) {
            curr = curr.next
        }
        curr.next = new Node(value)
    }

    print() {
        if (this.head === null) return
        let current = this.head
        let str = ""
        while (current !== null) {
            str += `${current.val}-->`
            current = current.next
        }
        console.log(str);
    }

    containes(value) {
        let current = this.head
        while (current !== null) {
            if (current.val === value) return true
            current = current.next
        }
        return false
    }
}

let list = new linkdList()

list.append('a')
list.append('b')
list.append('c')
list.append('d')
list.append('g')
console.log(list.containes("b"))  // true
console.log(list.containes("d"))  // true
console.log(list.containes("a"))  // true
console.log(list.containes("j"))  // false
console.log(list.containes("y"))  // false