**Title:** Magical Kingdom Journey

&nbsp;

**Description:**

Quang and Loi have stumbled upon a magical kingdom consisting of $n$ enchanted cities. Each city $i$ is known for its unique magical energy level $a_i$, which can be any positive integer up to $10^9$. However, the kingdom has a strange rule: you can only travel from city $i$ to city $j$ ($i < j$) if the magical energy level of city $j$ is greater than the magical energy level of city $i$ by at most $k$.

Quang and Loi start their journey at city 1 and want to reach city $n$. Their objective is to maximize the total magical energy they collect along their path, including the starting and ending cities.

Given the value $k$ and the magical energy levels $a_1, a_2, \dots, a_n$ of the $n$ cities, find the maximum total magical energy Quang and Loi can collect while traveling from city 1 to city $n$. Output the result modulo $10^9 + 7$. If it is not possible to travel from city 1 to city $n$, output 0.

&nbsp;

**Input:**

- The first line contains two integers $n$ ($1 \le n \le 10^5$) and $k$ ($0 \le k \le 10^9$).
- The second line contains $n$ integers $a_1, a_2, \dots, a_n$ ($1 \le a_i \le 10^9$).

&nbsp;

**Output:**

- Print a single integer: the maximum total magical energy Quang and Loi can collect (modulo $10^9 + 7$) while traveling from city 1 to city $n$, or 0 if it's impossible.

&nbsp;

**Example 1:**

Input:
```
5 1
1 2 3 4 5
```

Output:
```
15
```

Explanation: Quang and Loi can travel from city 1 to 2, 2 to 3, 3 to 4, and 4 to 5. The total magical energy is 1 + 2 + 3 + 4 + 5 = 15.

&nbsp;

**Example 2:**

Input:
```
5 0
1 3 5 7 9
```

Output:
```
0
```

Explanation: It is not possible to travel from city 1 to any other city because the difference must be at most 0. Thus, it's impossible to reach city n. The result is 0.

&nbsp;

**Example 3:**

Input:
```
5 2
1 3 2 5 4
```

Output:
```
9
```

Explanation: One possible path is 1 -> 3 -> 5. The total magical energy is 1 + 2 + 4 = 7. Another possible path is 1 -> 2 -> 4. The total magical energy is 1 + 3 + 5 = 9.  Therefore, the maximum total magical energy is 9.
