// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.#insertNode(this.rootNode, newNode);
    }
  }

  /*********Используются только внутри класса => делаю приватными # *************************************** */
  #insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.#insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.#insertNode(node.right, newNode);
      }
    }
  }

  #searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.#searchNode(node.left, data);
    } else if (data > node.data) {
      return this.#searchNode(node.right, data);
    } else {
      return node;
    }
  }

  #removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.#removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.#removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        const minNode = this.#findMinNode(node.right);
        node.data = minNode.data;
        node.right = this.#removeNode(node.right, minNode.data);
        return node;
      }
    }
  }

  #findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.#findMinNode(node.left);
    }
  }

  #findMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.#findMaxNode(node.right);
    }
  }

  /************************************************** */

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.#searchNode(this.rootNode, data) !== null;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.#searchNode(this.rootNode, data);
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.rootNode = this.#removeNode(this.rootNode, data);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (this.rootNode === null) {
      return null;
    } else {
      return this.#findMinNode(this.rootNode).data;
    }
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (this.rootNode === null) {
      return null;
    } else {
      return this.#findMaxNode(this.rootNode).data;
    }
  }
}

module.exports = {
  BinarySearchTree
};