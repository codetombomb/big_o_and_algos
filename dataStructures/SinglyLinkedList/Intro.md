# 📝 Intro to Singly Linked Lists

## Objectives

- Define what a Singly Linked List is. 
- Compare and contrast Linked List with Arrays
- Implement insertion, removal and traversal methods in Singly Linked Lists

### <u>What is a Linked List?</u>
It is a data structure that contains a **head, tail,** and **length** property.

Linked Lists consist of nodes, and each node has a **value** and a **pointer** to another node or null

Here is a visualization of how linked list works:
 https://visualgo.net/en/list

## Comparison with Arrays

<u>**Lists**</u>
- Do not have indicies!
- Connected via nodes with a **next** pointer
- Random access is not allowed

<u>**Arrays**</u>

- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

One of the advantages of using a linked list over an array might be when you are working with a lot of data and if that data needs to change (insertion or deletion), a linked list will be computaionally less expensive than an array because it does not have indicies.</br></br> 
For example, if the first element in an array of 1 million elements was removed, the other 999,000,000 elements would have to be reindexed creating a ton of work for a simple deletion. A linked list will instead remove said value at a minimal computational cost.


#Big O of SLL

Singly Linked List excel at Insertion and Deletion compared to arrays. So use a SLL if you do not need to do something like 'arr[i]' and you just need to have some data represented in the list in an order, a SLL might be the way to go.

- <b>Insertion</b> - O(1) constant time
- <b>Removal</b> - It depends... 
    - Removing from begining O(1) constant time
    - Removing from end O(N) linear time
- <b>Searching</b> - O(N) linear time
- <b>Access</b> - O(N)



