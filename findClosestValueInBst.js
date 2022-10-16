//Write a function that takes in a Binary Search Tree(BST) and a target integer value and returns the closes value contained in the BST. You can assume that there will only be one closest value. 

//Each BST node has an integer *value*, a *left* child node, and a *right* child node. A node is said to be a valid BST node if and only if it satisfies the BST property: It's value is strictly greater than the values of every node to its left; it's value is less than or equal to the values of every node to it's right; and it's children nodes are either valid BST nodes themselves or *none*/*null*.

//Sample input: tree = 10     target = 12
//                    /   \
//                   5    15
//                 /  \  /  \
//                2   5 13  22
//               /        \
//              1         14

//Sample output: 13


//Brute force approach: The first one that comes to mind is traversing through the tree and checking for the absolute difference between the value of the current node and the target value. We then store that difference in a hashmap as the key with a value of the current node. We can then use the key of storedDifference compare to currentDifference value. if storedDifference is greater than current difference, we update storedDifference with currentDifference[this.value] as key/value pair. At the end of the traverse, we return value of storedDifference[this.value]. 

//Part of the advantage of the input being a BST is its properties. We can optimize the runtime by comparing the target to the value of the current node and traversing left if the value of target is less than the value of the current node, or traverse right if the value of the target is greater than the value of the current node. Given the above inputs, we can assume by this logic that we would check 12 against 10, the first node. We would then traverse to 15, given that 12 is greater than 10. We check that 12 is less than 15, so we traverse to 13. We check 12 against 13 and since 12 is less than 13, we traverse to the left. Since the node 13 has no left child, we return 13 as the current closest node to 12. To put it simply, every time we traverse a branch, we eliminate the other side of the tree; Effectively eliminating half of the possibilities. This would allow for O(log(n)) time complexity.

function dfs (tree, target, diff) {
  if(!tree) return;

  const currentDiff = Math.abs(target - tree.value);
  if (currentDiff < diff.value) {
    diff.closest = tree.value;
    diff.value = currentDiff;
  }

  if (target < tree.value) dfs(tree.left, target, diff);
  else if (target > tree.value) dfs(tree.right, target, diff); 
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
const diff = {value: Infinity, closest: null }
dfs(tree, target, diff);
return diff.closest;
}

//A second variation of this algorithm can be implemented as detailed below: 

// function findClosestValueInBst(tree, target) {
//   // Write your code here.
//   let difference = Math.abs(target - tree.value);
//   let closest = tree.value;

//   traverse(tree);

//   function traverse(tree) {
//     if(tree != null) {
//      const newDifference = Math.abs(target - tree.value);
//       if(newDifference < difference) {
//         closest = tree.value;
//         difference = newDifference;
//       }
//       traverse(tree.left);
//       traverse(tree.right);
//     }
//   }
//   return closest;
// }


// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}