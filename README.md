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

$T(n) = 3 + 3*(log_3(n/3))$

The 3 comes from the constant operations of initializing the sum and subsize variables as well
as the conditional statements, 2 variables plus at least one conditional statement regardless of input size comes to 3.
The $3*(log_3(n/3))$ comes from our three recursive calls with $n/3$ of the given array passed into each call. 

Ignoring constant factors and lower order terms our big theta runtime comes to $\Theta(log_3(n))$
or more simply put, $\Theta(logn)$. The base 3 coming from the fact that we're essentially following a "tree"
of recursive calls splitting 3 at a time. 
