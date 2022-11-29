class Pagination {
    constructor (items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = pageSize;
        this.visibleItems = [];
        this.currentIndex = 0;
    }

    getVisibleItems () {
        while (this.items.length > 0) {
            this.visibleItems.push(this.items.splice(0, this.pageSize));
        }
        return this.visibleItems[this.currentIndex];
    }

    nextPage () {
        this.currentIndex ++;
    }

    prevPage () {
        this.currentIndex --;
    }

    firstPage () {
        this.currentIndex = 0;
    }
    
    lastPage () {
        this.currentIndex = Math.ceil(this.items.length / this.pageSize - 1);
    }
    
    goToPage (x) {
        this.currentIndex = x - 1;
    }
}

const pageContent = new Pagination(['Tom', 'Clark', 'Ben', 'Bob', 'Sam', 'An', 'Al', 'Dan', 'Ken', 'May'], 3);


pageContent.lastPage();
pageContent.prevPage();

console.log(pageContent.getVisibleItems());

