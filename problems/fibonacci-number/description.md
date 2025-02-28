**Title:** Fibonacci Number

&nbsp;

**Description:**

The Fibonacci sequence is defined as follows:
- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) for n > 1

Given an integer $n$, find the $n$-th Fibonacci number F($n$). Since the result can be very large, output it modulo $10^9 + 7$.

&nbsp;

**Input:**

- The first line contains a single integer $n$ ($0 < n \le 10^{18}$).

&nbsp;

**Output:**

- Print a single integer, the $n$-th Fibonacci number F($n$) modulo $10^9 + 7$.

&nbsp;

**Example 1:**

Input:
```
1
```

Output:
```
1
```

&nbsp;

**Example 2:**

Input:
```
2
```

Output:
```
1
```
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

&nbsp;

**Example 3:**

Input:
```
10
```

Output:
```
55
```

&nbsp;

**Example 4:**
```
1000000000000000000
```
Output:
```
209783453
```
