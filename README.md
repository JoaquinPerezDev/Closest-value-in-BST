# Closest-value-in-BST

ALGO EXPERT EASY

Write a function that takes in a Binary Search Tree(BST) and a target integer value and returns the closes value contained in the BST. You can assume that there will only be one closest value. 

Each BST node has an integer *value*, a *left* child node, and a *right* child node. A node is said to be a valid BST node if and only if it satisfies the BST property: It's value is strictly greater than the values of every node to its left; it's value is less than or equal to the values of every node to it's right; and it's children nodes are either valid BST nodes themselves or *none*/*null*.

Sample input: tree = 10     target = 12 <br>
                    /   \ <br>
                   5    15 <br>
                 /  \  /  \ <br>
                2   5 13  22 <br>
               /        \ <br>
              1         14 <br>
<br>
Sample output: 13 <br>
