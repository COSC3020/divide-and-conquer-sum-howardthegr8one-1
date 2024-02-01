# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


# My recurrence relation

$T(n) = $

$$
\begin{cases} 
1, n \leq 2 \\
3T(n/3) + 3,    n > 2
\end{cases}
$$

The 3 comes from the constant operations of initializing the sum and subsize variables as well
as the conditional statements, 2 variables plus at least one conditional statement regardless of input size comes to 3.

Subbing this equation into itself when not considering the base case gives us:

$T(n) = 3T(n/3) + 3$

$= 3(3T([n/3]/3)+3)+3$

$= 9T(n/9)+6$

$= 3(9T(n/9/3)+6)+3$

$= 27T(n/27)+9$

This can be rewritten in the form:

$3^iT(n/3^i)+3i$

Where $i=log_3(n)$ this is because we can only cut an array into thirds so many times before there won't be three elements
left to cut. Therefore our new relation is:

$$3<sup>log_3(n)</sup>T(n/3<sup>log_3(n)</sup>)+3 log_3(n)$$

$= nT(1) + 3 log_3(n)$

T(1) is our base case so that value is equal to 1, ignoring constants gives us:

$= n + log_3(n)$

Since we can ignore lower order terms then our final runtime complexity is $\Theta(n)$
