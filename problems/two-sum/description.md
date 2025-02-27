**Title:** Two Sum

&nbsp;

**Description:**

Given an array of integers $nums$ of size $n$, find two distinct indices $i$ and $j$ such that $nums[i] + nums[j] = target$.

It is guaranteed that there is exactly one solution.

&nbsp;

**Input:**

- The first line contains an integer $n$ ($2 \le n \le 10^4$) and the target value ($target$) ($-10^9 \le target \le 10^9$).
- The second line contains $n$ integers $nums[i]$ ($-10^9 \le nums[i] \le 10^9$).

&nbsp;

**Output:**

- Print two distinct indices $i$ and $j$ ($0 \le i, j < n$, $i \ne j$) such that $nums[i] + nums[j] = target$.

&nbsp;

**Example 1:**

Input:
```
4 9
2 7 11 15
```

Output:
```
0 1
```
Explanation: Because nums[0] + nums[1] == 9, we return 0 and 1.

&nbsp;

**Example 2:**

Input:
```
3 6
3 2 4
```

Output:
```
1 2
```

&nbsp;

**Example 3:**

Input:
```
2 6
3 3
```

Output:
```
0 1
```
