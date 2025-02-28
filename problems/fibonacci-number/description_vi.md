**Đề bài:** Số Fibonacci

&nbsp;

**Mô tả:**

Dãy số Fibonacci được định nghĩa như sau:
- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) với n > 1

Cho một số nguyên $n$, tìm số Fibonacci thứ $n$ F($n$). Vì kết quả có thể rất lớn, hãy in ra kết quả theo modulo $10^9 + 7$.

&nbsp;

**Đầu vào:**

- Dòng đầu tiên chứa một số nguyên $n$ ($0 < n \le 10^{18}$).

&nbsp;

**Đầu ra:**

- In ra một số nguyên duy nhất, số Fibonacci thứ $n$ F($n$) theo modulo $10^9 + 7$.

&nbsp;

**Ví dụ 1:**

Đầu vào:
```
1
```

Đầu ra:
```
1
```

&nbsp;

**Ví dụ 2:**

Đầu vào:
```
2
```

Đầu ra:
```
1
```
Giải thích: F(2) = F(1) + F(0) = 1 + 0 = 1.

&nbsp;

**Ví dụ 3:**

Đầu vào:
```
10
```

Đầu ra:
```
55
```

&nbsp;

**Ví dụ 4:**
```
1000000000000000000
```
Đầu ra:
```
209783453
```
