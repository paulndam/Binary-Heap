class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  insert(element) {
    this.value.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let lastIndex = this.value.length - 1;
    const element = this.value[lastIndex];
    while (lastIndex > 0) {
      let parentIndex = Math.floor((lastIndex - 1) / 2);
      let parent = this.value[parentIndex];

      if (element <= parent) {
        break;
      }
      this.value[parentIndex] = element;
      this.value[lastIndex] = parent;
      lastIndex = parentIndex;
    }
  }

  extractMax() {
    // get first element
    const max = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;

      // sink down
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.value.length;
    const element = this.value[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      // values to store varaibles at the left and right indexes
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(150);
console.log(heap);
console.log("=====================");
console.log("========== Extract Max Number  ===========");
console.log(heap.extractMax());
console.log("========== Values  ===========");
console.log(heap.value);
console.log("========== Extract Max Number  ===========");
console.log(heap.extractMax());
console.log("========== Values  ===========");
console.log(heap.value);
