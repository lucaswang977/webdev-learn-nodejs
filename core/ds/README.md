# Data Structure Learning Notes

## Arrays and Strings

### Array Traversal

Array traversal involves visiting each element of the array, usually to perform operations like searching, modifying, or analyzing elements.

- Iterating using loops (for, while, forEach)

  ```js
  const arr = [1, 2, 3, 4, 5];

  // Using a for loop
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  // Using forEach
  arr.forEach((num) => console.log(num));
  ```

- Reverse Traversal

  ```js
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
  ```

- Nested Loops (e.g., for 2D arrays)

  ```js
  const matrix = [
    [1, 2],
    [3, 4],
  ];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
  ```

### Array Manipulation

Manipulation involves modifying arrays by adding, removing, or changing elements.

- Add/Remove Elements

```js
const arr = [1, 2, 3];

// Add to the end
arr.push(4); // [1, 2, 3, 4]

// Add to the beginning
arr.unshift(0); // [0, 1, 2, 3, 4]

// Remove from the end
arr.pop(); // [0, 1, 2, 3]

// Remove from the beginning
arr.shift(); // [1, 2, 3]
```

- Modify Elements

```js
const arr = [1, 2, 3];
arr[1] = 42; // [1, 42, 3]
```

- Splicing (Insert/Delete in the middle)

```js
const arr = [1, 2, 3, 4];
arr.splice(1, 2, 99, 100); // Removes 2 elements starting from index 1 and inserts 99, 100
console.log(arr); // [1, 99, 100, 4]
```

- Slicing (Create a new subarray)

```js
const arr = [1, 2, 3, 4, 5];
const subArray = arr.slice(1, 4); // [2, 3, 4]
```

### Sliding Window

The sliding window technique is used to solve problems that involve subarrays or substrings. It’s a powerful optimization method for problems requiring a specific condition to be met while iterating over the array.

- Maximum Sum Subarray of Size k

```js
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Initial window sum
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
```

- Longest Substring with K Distinct Characters

```js
function longestSubstringWithKDistinct(s, k) {
  let charCount = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    charCount.set(char, (charCount.get(char) || 0) + 1);

    while (charCount.size > k) {
      const leftChar = s[left];
      charCount.set(leftChar, charCount.get(leftChar) - 1);
      if (charCount.get(leftChar) === 0) {
        charCount.delete(leftChar);
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubstringWithKDistinct("araaci", 2)); // Output: 4 ("araa")
```

### String Traversal and Manipulation

Strings are arrays of characters, and traversal/manipulation methods are similar to arrays.

- Reversing a String

```js
const str = "hello";
const reversed = str.split("").reverse().join("");
console.log(reversed); // "olleh"
```

- Character Frequency Count

```js
const str = "abracadabra";
const charCount = {};

for (let char of str) {
  charCount[char] = (charCount[char] || 0) + 1;
}

console.log(charCount); // { a: 5, b: 2, r: 2, c: 1, d: 1 }
```

- Checking for Palindromes

```js
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
```
