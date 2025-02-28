**Đề bài:** Hành trình Vương quốc phép thuật

&nbsp;

**Mô tả:**

Quang và Lợi tình cờ phát hiện ra một vương quốc phép thuật bao gồm $n$ thành phố được phù phép. Mỗi thành phố $i$ được biết đến với mức năng lượng phép thuật độc đáo $a_i$, có thể là bất kỳ số nguyên dương nào lên đến $10^9$. Tuy nhiên, vương quốc có một quy tắc kỳ lạ: bạn chỉ có thể đi từ thành phố $i$ đến thành phố $j$ ($i < j$) nếu mức năng lượng phép thuật của thành phố $j$ lớn hơn mức năng lượng phép thuật của thành phố $i$ tối đa là $k$.

Quang và Lợi bắt đầu cuộc hành trình của họ tại thành phố 1 và muốn đến thành phố $n$. Mục tiêu của họ là tối đa hóa tổng năng lượng phép thuật mà họ thu thập được trên đường đi, bao gồm cả các thành phố bắt đầu và kết thúc.

Cho giá trị $k$ và mức năng lượng phép thuật $a_1, a_2, \dots, a_n$ của $n$ thành phố, tìm tổng năng lượng phép thuật tối đa mà Quang và Lợi có thể thu thập được khi đi từ thành phố 1 đến thành phố $n$. Xuất kết quả theo modulo $10^9 + 7$. Nếu không thể đi từ thành phố 1 đến thành phố $n$, hãy xuất 0.

&nbsp;

**Đầu vào:**

- Dòng đầu tiên chứa hai số nguyên $n$ ($1 \le n \le 10^5$) và $k$ ($0 \le k \le 10^9$).
- Dòng thứ hai chứa $n$ số nguyên $a_1, a_2, \dots, a_n$ ($1 \le a_i \le 10^9$).

&nbsp;

**Đầu ra:**

- In ra một số nguyên duy nhất: tổng năng lượng phép thuật tối đa mà Quang và Lợi có thể thu thập được (theo modulo $10^9 + 7$) khi đi từ thành phố 1 đến thành phố $n$, hoặc 0 nếu không thể.

&nbsp;

**Ví dụ 1:**

Đầu vào:
```
5 1
1 2 3 4 5
```

Đầu ra:
```
15
```

Giải thích: Quang và Lợi có thể đi từ thành phố 1 đến 2, 2 đến 3, 3 đến 4 và 4 đến 5. Tổng năng lượng phép thuật là 1 + 2 + 3 + 4 + 5 = 15.

&nbsp;

**Ví dụ 2:**

Đầu vào:
```
5 0
1 3 5 7 9
```

Đầu ra:
```
0
```

Giải thích: Không thể đi từ thành phố 1 đến bất kỳ thành phố nào khác vì sự khác biệt phải tối đa là 0. Do đó, không thể đến thành phố n. Kết quả là 0.

&nbsp;

**Ví dụ 3:**

Đầu vào:
```
5 2
1 3 2 5 4
```

Đầu ra:
```
9
```

Giải thích: Một đường đi khả thi là 1 -> 3 -> 5. Tổng năng lượng phép thuật là 1 + 2 + 4 = 7. Một đường đi khả thi khác là 1 -> 2 -> 4. Tổng năng lượng phép thuật là 1 + 3 + 5 = 9. Do đó, tổng năng lượng phép thuật tối đa là 9.
