const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

/*
class Queue {

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
*/

class Queue {
  constructor () {
    this.head = null
    this.length = 0
  }

  // полная хрень, можно было и написать, что ListNode надо раскоментировать((

  getUnderlyingList() {
    // return this.value // работает
    return this.head
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value)
      //this.value = new ListNode(value) // работает
      this.length++
    }else{
      let queues = this.head
      //let queues = this.value // работает
      while (queues.next) {
        queues = queues.next
      }
      queues.next = new ListNode(value)
      this.length++
    }
    
    return this // для данной задачи не обязательно
  }

  dequeue() {
    let result = this.head
    this.head = result.next;

    // let result = this.value // работает
    // this.value = result.next // работает
    this.length = this.length - 1
    return result.value
  }
}


module.exports = {
  Queue
};
