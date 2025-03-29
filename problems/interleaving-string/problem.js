{
  "cases": [
    {
      "isVisible": true,
      "output": {
        "name": "result",
        "type": "boolean",
        "value": "true"
      },
      "params": [
        {
          "name": "s1",
          "type": "string",
          "value": "aabcc"
        },
        {
          "name": "s2",
          "type": "string",
          "value": "dbbca"
        },
        {
          "name": "s3",
          "type": "string",
          "value": "aadbbcbcac"
        }
      ]
    },
    {
      "isVisible": true,
      "output": {
        "name": "result",
        "type": "boolean",
        "value": "false"
      },
      "params": [
        {
          "name": "s1",
          "type": "string",
          "value": "aabcc"
        },
        {
          "name": "s2",
          "type": "string",
          "value": "dbbca"
        },
        {
          "name": "s3",
          "type": "string",
          "value": "aadbbbaccc"
        }
      ]
    },
    {
      "isVisible": true,
      "output": {
        "name": "result",
        "type": "boolean",
        "value": "true"
      },
      "params": [
        {
          "name": "s1",
          "type": "string",
          "value": ""
        },
        {
          "name": "s2",
          "type": "string",
          "value": ""
        },
        {
          "name": "s3",
          "type": "string",
          "value": ""
        }
      ]
    }
  ],
  "description": {
    "en": "<p>Given strings <code>s1</code>, <code>s2</code>, and <code>s3</code>, find whether <code>s3</code> is formed by an <strong>interleaving</strong> of <code>s1</code> and <code>s2</code>.</p>\n\n<p>An <strong>interleaving</strong> of two strings <code>s</code> and <code>t</code> is a configuration where <code>s</code> and <code>t</code> are divided into <code>n</code> and <code>m</code> <span data-keyword=\"substring-nonempty\" class=\" cursor-pointer relative text-dark-blue-s text-sm\"><button type=\"button\" aria-haspopup=\"dialog\" aria-expanded=\"false\" aria-controls=\"radix-:r8g:\" data-state=\"closed\" class=\"\">substrings</button></span> respectively, such that:</p>\n\n<ul>\n\t<li><code>s = s<sub>1</sub> + s<sub>2</sub> + ... + s<sub>n</sub></code></li>\n\t<li><code>t = t<sub>1</sub> + t<sub>2</sub> + ... + t<sub>m</sub></code></li>\n\t<li><code>|n - m| <= 1</code></li>\n\t<li>The <strong>interleaving</strong> is <code>s<sub>1</sub> + t<sub>1</sub> + s<sub>2</sub> + t<sub>2</sub> + s<sub>3</sub> + t<sub>3</sub> + ...</code> or <code>t<sub>1</sub> + s<sub>1</sub> + t<sub>2</sub> + s<sub>2</sub> + t<sub>3</sub> + s<sub>3</sub> + ...</code></li>\n</ul>\n\n<p><strong>Note:</strong> <code>a + b</code> is the concatenation of strings <code>a</code> and <code>b</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" style=\"width: 561px; height: 203px;\" src=\"https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg\">\n<pre><strong>Input:</strong> s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"\n<strong>Output:</strong> true\n<strong>Explanation:</strong> One way to obtain s3 is:\nSplit s1 into s1 = \"aa\" + \"bc\" + \"c\", and s2 into s2 = \"dbbc\" + \"a\".\nInterleaving the two splits, we get \"aa\" + \"dbbc\" + \"bc\" + \"a\" + \"c\" = \"aadbbcbcac\".\nSince s3 can be obtained by interleaving s1 and s2, we return true.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre><strong>Input:</strong> s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbbaccc\"\n<strong>Output:</strong> false\n<strong>Explanation:</strong> Notice how it is impossible to interleave s2 with any other string to obtain s3.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre><strong>Input:</strong> s1 = \"\", s2 = \"\", s3 = \"\"\n<strong>Output:</strong> true\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 <= s1.length, s2.length <= 100</code></li>\n\t<li><code>0 <= s3.length <= 200</code></li>\n\t<li><code>s1</code>, <code>s2</code>, and <code>s3</code> consist of lowercase English letters.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Could you solve it using only <code>O(s2.length)</code> additional memory space?</p>",
    "vi": "<p>Cho các chuỗi <code>s1</code>, <code>s2</code> và <code>s3</code>, tìm xem <code>s3</code> có được tạo thành bằng cách <strong>xen kẽ</strong> <code>s1</code> và <code>s2</code> hay không.</p>\n\n<p>Một phép <strong>xen kẽ</strong> của hai chuỗi <code>s</code> và <code>t</code> là một cấu hình trong đó <code>s</code> và <code>t</code> được chia thành <code>n</code> và <code>m</code> <span data-keyword=\"substring-nonempty\" class=\" cursor-pointer relative text-dark-blue-s text-sm\"><button type=\"button\" aria-haspopup=\"dialog\" aria-expanded=\"false\" aria-controls=\"radix-:r8g:\" data-state=\"closed\" class=\"\">chuỗi con</button></span> tương ứng, sao cho:</p>\n\n<ul>\n\t<li><code>s = s<sub>1</sub> + s<sub>2</sub> + ... + s<sub>n</sub></code></li>\n\t<li><code>t = t<sub>1</sub> + t<sub>2</sub> + ... + t<sub>m</sub></code></li>\n\t<li><code>|n - m| <= 1</code></li>\n\t<li>Phép <strong>xen kẽ</strong> là <code>s<sub>1</sub> + t<sub>1</sub> + s<sub>2</sub> + t<sub>2</sub> + s<sub>3</sub> + t<sub>3</sub> + ...</code> hoặc <code>t<sub>1</sub> + s<sub>1</sub> + t<sub>2</sub> + s<sub>2</sub> + t<sub>3</sub> + s<sub>3</sub> + ...</code></li>\n</ul>\n\n<p><strong>Lưu ý:</strong> <code>a + b</code> là phép nối các chuỗi <code>a</code> và <code>b</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Ví dụ 1:</strong></p>\n<img alt=\"\" style=\"width: 561px; height: 203px;\" src=\"https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg\">\n<pre><strong>Đầu vào:</strong> s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"\n<strong>Đầu ra:</strong> true\n<strong>Giải thích:</strong> Một cách để có được s3 là:\nTách s1 thành s1 = \"aa\" + \"bc\" + \"c\", và s2 thành s2 = \"dbbc\" + \"a\".\nXen kẽ hai phần tách, ta được \"aa\" + \"dbbc\" + \"bc\" + \"a\" + \"c\" = \"aadbbcbcac\".\nVì s3 có thể thu được bằng cách xen kẽ s1 và s2, chúng ta trả về true.\n</pre>\n\n<p><strong class=\"example\">Ví dụ 2:</strong></p>\n\n<pre><strong>Đầu vào:</strong> s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbbaccc\"\n<strong>Đầu ra:</strong> false\n<strong>Giải thích:</strong> Lưu ý rằng không thể xen kẽ s2 với bất kỳ chuỗi nào khác để có được s3.\n</pre>\n\n<p><strong class=\"example\">Ví dụ 3:</strong></p>\n\n<pre><strong>Đầu vào:</strong> s1 = \"\", s2 = \"\", s3 = \"\"\n<strong>Đầu ra:</strong> true\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Ràng buộc:</strong></p>\n\n<ul>\n\t<li><code>0 <= s1.length, s2.length <= 100</code></li>\n\t<li><code>0 <= s3.length <= 200</code></li>\n\t<li><code>s1</code>, <code>s2</code> và <code>s3</code> bao gồm các chữ cái tiếng Anh viết thường.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Câu hỏi nâng cao:</strong> Bạn có thể giải nó chỉ bằng cách sử dụng <code>O(s2.length)</code> không gian bộ nhớ bổ sung không?</p>"
  },
  "functionName": "isInterleave"
}