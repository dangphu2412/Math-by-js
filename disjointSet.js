class DisjointSetQuickFindImpl {
    constructor(size) {
        this.root = new Array(size).fill(0);
        this.root.forEach((_, index) => {
            this.root[index] = index
         })
    }

    find(node) {
        return this.root[node];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            this.root.forEach((parent, index) => {
                if (parent === rootY) {
                    this.root[index] = rootX;
                }
            })
        }
    }

    isConnected(x, y) {
        return this.find(x) === this.find(y)
    }
}

class DisjointSetQuickUnionImpl {
    constructor(size) {
        this.root = new Array(size).fill(0);
        this.root.forEach((_, index) => {
            this.root[index] = index
         })
    }

    find(node) {
        while(this.root[node] !== node) {
            node = this.root[node]
        }
        return node;
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            this.root[rootY] = rootX;
        }
    }

    isConnected(x, y) {
        return this.find(x) === this.find(y)
    }
}

const unionFind = new DisjointSetQuickFindImpl(10);
 // 1-2-5-6-7 3-8-9 4
unionFind.union(1, 2);
unionFind.union(2, 5);
unionFind.union(5, 6);
unionFind.union(6, 7);
unionFind.union(3, 8);
unionFind.union(8, 9);

console.log(unionFind.isConnected(1, 5))
console.log(unionFind.isConnected(4, 9))

unionFind.union(4, 9);

console.log(unionFind.isConnected(4, 9))