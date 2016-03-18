Here's our debugging code. For this trivial program, there's almost more debugging code than actual code, but in larger programs the proportions will be better.

static String indent = "";

static String name(BinaryTree node) {
    if (node == null) return null;
    else return node.name;
}

static void enter(BinaryTree node) {
    System.out.println(indent + "Entering solvable(" + name(node) + ")");
    indent = indent + "|  ";
}

static boolean yes(BinaryTree node) {
    indent = indent.substring(3);
    System.out.println(indent + "solvable(" + name(node) + ") returns true");
    return true;
}

static boolean no(BinaryTree node) {
    indent = indent.substring(3);
    System.out.println(indent + "solvable(" + name(node) + ") returns false");
    return false;
}
To use this code, we modify solvable as follows:

static boolean solvable(BinaryTree node) {
    enter(node);
    if (node == null) return no(node);
    if (node.isGoalNode) return yes(node);
    if (solvable(node.leftChild)) return yes(node);
    if (solvable(node.rightChild)) return yes(node);
    return no(node);
}
And we get these results:

Entering solvable(Root)
|  Entering solvable(A)
|  |  Entering solvable(C)
|  |  |  Entering solvable(null)
|  |  |  solvable(null) returns false
|  |  |  Entering solvable(null)
|  |  |  solvable(null) returns false
|  |  solvable(C) returns false
|  |  Entering solvable(D)
|  |  |  Entering solvable(null)
|  |  |  solvable(null) returns false
|  |  |  Entering solvable(null)
|  |  |  solvable(null) returns false
|  |  solvable(D) returns false
|  solvable(A) returns false
|  Entering solvable(B)
|  |  Entering solvable(E)
|  |  solvable(E) returns true
|  solvable(B) returns true
solvable(Root) returns true
true
