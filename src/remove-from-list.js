const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(list, k) {
  // Проверяю, есть ли значения равные k в начале списка
  while (list && list.value === k) {
    list = list.next;
  }

  let currentNode = list;
  let previousNode = null;

  // Прохожу по каждому узлу списка
  while (currentNode) {
    if (currentNode.value === k) {
      // Если значение равно k, пропускаею текущий узел, связывая предыдущий узел с следующим узлом
      previousNode.next = currentNode.next;
    } else {
      // Если значение не равно k, перехожу к следующему узлу
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  return list;
}

/********************************************************** */
/********************************************************** */

// function removeKFromList(list, k) {

//   let last = null

//   while(list.value == k){
//     list = list.next;
//   }

//   let tmp = list
//   last = tmp.next

  
//   while (tmp && tmp.value !== k) {
//     last = tmp,
//     tmp = tmp.next;
//   }
//   if (last !== null && tmp.value === k) {
//     last.next = tmp.next;
//   }

//   return list;
// }
/************************************************************** */
/************************************************************** */

module.exports = {
  removeKFromList
};
