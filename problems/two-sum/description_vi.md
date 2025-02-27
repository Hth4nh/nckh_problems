**Đề bài:** Tổng hai số

&nbsp;

**Mô tả:**

Cho một mảng các số nguyên $nums$ có kích thước $n$, tìm hai chỉ số phân biệt $i$ và $j$ sao cho $nums[i] + nums[j] = target$.

Đảm bảo rằng luôn có duy nhất một nghiệm.

&nbsp;

**Đầu vào:**

- Dòng đầu tiên chứa một số nguyên $n$ ($2 \le n \le 10^4$) và giá trị target ($target$) ($-10^9 \le target \le 10^9$).
- Dòng thứ hai chứa $n$ số nguyên $nums[i]$ ($-10^9 \le nums[i] \le 10^9$).

&nbsp;

**Đầu ra:**

- In ra hai chỉ số phân biệt $i$ và $j$ ($0 \le i, j < n$, $i \ne j$) sao cho $nums[i] + nums[j] = target$.

&nbsp;

**Ví dụ 1:**

Đầu vào:
```
4 9
2 7 11 15
```

Đầu ra:
```
0 1
```
Giải thích: Vì nums[0] + nums[1] == 9, ta trả về 0 và 1.

&nbsp;

**Ví dụ 2:**

Đầu vào:
```
3 6
3 2 4
```

Đầu ra:
```
1 2
```

&nbsp;

**Ví dụ 3:**

Đầu vào:
```
2 6
3 3
```

Đầu ra:
```
0 1
```
