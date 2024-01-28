const e=`# JavaScript\r
\r
## Introduction\r
\r
**JavaScript** is a versatile programming language that empowers the creation of dynamic functions within web pages. When a website goes beyond displaying static information and starts offering timely updates, interactive maps, 2D/3D animations, video playback with motion, and more, it's highly likely that **JavaScript** is behind this interactivity. This language constitutes the third layer in a standard set of web technologies, complementing the previous two (**HTML** and **CSS**), which we explored in their respective sections.\r
\r
While **HTML** defines a website's structure and **CSS** arranges and styles that structure, neither of these languages is geared towards traditional programming. Conventional programming languages, on the other hand, enable the use of variables, functions, loops, and conditional structures, just like **JavaScript**.\r
\r
**JavaScript** boasts a wide range of applications and tools, making it one of the most popular and beloved languages within the development community. However, it does attract some criticism due to certain distinctive aspects. These differences become more noticeable as you gain experience in other programming languages. I suggest that after mastering **JavaScript**, you consider learning other languages like **Python**, **C#**, **Java**, among others. This will broaden your understanding of the programming world and allow you to discern the similarities and differences between various languages.\r
\r
In my personal experience, expanding my knowledge to other languages, such as **Python** and **C#**, after having programmed with **JavaScript**, provided a fresh perspective and enriched my understanding of programming. However, it's important to note that trying to master too many languages can lead to confusion and a lack of proficiency, hindering your progress. Therefore, it's advisable to focus on one or two languages that you deeply master, and have a basic knowledge of others. This will enable you to concentrate on the languages that truly matter for your projects and goals.\r
\r
Additionally, it's worth mentioning that **JavaScript** isn't limited to front-end development. It's also used in back-end development through **Node.js**, which allows you to execute **JavaScript** code on the server side. **Node.js** compiles **JavaScript** code so that machines can read it. While primarily associated with back-end development, certain specifications, such as the package manager **npm**, are also applied in front-end development.\r
\r
You now have the opportunity to delve into learning this language and its applications through the resources provided below. These resources will guide you in understanding how to use **JavaScript** effectively.\r
\r
## Tutorial\r
\r
-   **[Modern JavaScript From The Beginning | First 12 Hours](https://www.youtube.com/watch?v=BI1o2H9z9fo)**\r
-   **[Full HTTP Networking Course – Fetch and REST APIs in JavaScript](https://www.youtube.com/watch?v=2JYT5f2isg4)**\r
\r
## Resources\r
\r
-   Websites offering tips and best practices for **JavaScript**:\r
    -   **https://code.tutsplus.com/es/24-javascript-best-practices-for-beginners--net-5399t**\r
    -   **https://github.com/airbnb/javascript**\r
\r
## Tips, Tricks, and Best Practices\r
\r
-   Prefer using \`===\` over \`==\` because \`===\` checks both the value and data type, whereas \`==\` only checks the value. Here's an example:\r
\r
    \`\`\`javascript\r
    let a = 3;\r
\r
    console.log(a == 3); // Returns true\r
    console.log(a === 3); // Returns true\r
\r
    console.log(a == "3"); // Returns true\r
    console.log(a === "3"); // Returns false\r
    \`\`\`\r
\r
-   Avoid using \`eval()\` in your code as it can reduce performance and pose a security risk by granting excessive privileges to evaluated text.\r
\r
-   Always use the \`let\` keyword instead of \`var\` when declaring variables. For a concise explanation, you can watch this video on YouTube: **[JavaScript Let vs Var vs Constant | Mosh](https://www.youtube.com/watch?v=XgSjoHgy3Rk)**.\r
\r
-   Commenting code may seem unnecessary at first, but it's crucial. Imagine returning to your project after months and struggling to remember the purpose of each code fragment. Moreover, consider that another programmer may need to review your work; without comments, they could get lost. So, comments are very valuable.\r
\r
-   While it's technically possible to omit semicolons in your code, it's not recommended. This can lead to issues and difficulties in the future. Therefore, continue using semicolons at the end of each line to ensure code clarity and correct interpretation.\r
\r
-   While libraries and frameworks can ease application development, avoid excessive dependence on them. This can negatively impact performance and limit your programming ability. Use them judiciously, ensuring that you can accomplish what the library or framework offers on your own and that the impact is more positive than negative in your case.\r
\r
-   It's better to use new array methods like \`array.toSorted()\` and \`array.toReversed()\` for array manipulation instead of \`array.reverse()\` or \`array.sort()\`. This is because new methods create a copy of the array, while the old ones modify the original array, potentially disrupting the original order.\r
\r
-   To make copies of an array, the simplest method is to use the _Spread Operator_:\r
\r
    \`\`\`js\r
    let arr = [1, 2, 3];\r
    let arrCopy = [...arr];\r
\r
    arrCopy.push(4);\r
\r
    // arr = [1, 2, 3]\r
    // arrCopy = [1, 2, 3, 4]\r
    \`\`\`\r
\r
    However, this won't work for multidimensional arrays (arrays containing other arrays):\r
\r
    \`\`\`js\r
    let arr = [[1, 2], [3]];\r
    let arrCopy = [...arr];\r
\r
    arrCopy[1].push(4);\r
\r
    // arr = [[1, 2], [3, 4]]\r
    // arrCopy = [[1, 2], [3, 4]]\r
    \`\`\`\r
\r
    There are two simple ways to copy multidimensional arrays:\r
\r
    1. Using the \`slice()\` method with \`map()\`:\r
\r
        \`\`\`js\r
        let arr = [[1, 2], [3]];\r
        let arrCopy = arr.map((item) => item.slice());\r
\r
        arrCopy[1].push(4);\r
\r
        // arr = [[1, 2], [3]]\r
        // arrCopy = [[1, 2], [3, 4]]\r
        \`\`\`\r
\r
    2. Converting to JSON and back to JavaScript:\r
\r
        \`\`\`js\r
        let arr = [[1, 2], [3]];\r
        let arrCopy = JSON.parse(JSON.stringify(arr));\r
\r
        arrCopy[1].push(4);\r
\r
        // arr = [[1, 2], [3]]\r
        // arrCopy = [[1, 2], [3, 4]]\r
        \`\`\`\r
\r
    For more information about this behavior, check out this article: **[Deep Copying JavaScript Arrays](https://medium.com/@ziyoshams/deep-copying-javascript-arrays-4d5fc45a6e3e)**\r
\r
-   You can swap the values of two variables using destructuring:\r
\r
    \`\`\`js\r
    let a = 8;\r
    let b = 6;\r
\r
    [a, b] = [b, a];\r
\r
    // a = 6\r
    // b = 8\r
    \`\`\`\r
\r
-   You can create loops using recursion, which is a more complex and efficient way to iterate. To apply recursion, you must create a function that calls itself within and that has a condition that stops the recursive calling at the beginning of the function. Since it's a complicated topic, here are some resources to learn more about it: **[What Is Recursion - In Depth](https://www.youtube.com/watch?v=6oDQaB2one8)**.\r
\r
-   Regular expressions are fundamental for finding words or terms in any text. However, using them can be tedious, and it's easy to forget them if you don't use them often. That's why I'm providing you with a reference syntax sheet of regular expressions and exercises from FreeCodeCamp for practice purposes:\r
\r
    -   **[Regular Expressions Syntax Reference Sheet](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet)**\r
    -   **[Exercises with Regular Expressions - FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#regular-expressions)**\r
\r
## Exercises and Projects\r
\r
-   **[Exercism](https://exercism.org)** is an excellent platform for developing and honing your programming efficiency and logic in various languages. They offer over 140 programming exercises in the **JavaScript** section.\r
\r
-   **[JavaScript Algorithms and Data Structures - FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)** provides a course with practical exercises and offers a widely recognized certification.\r
\r
## Conclusion\r
\r
And here we conclude our exploration of **JavaScript**. With the acquisition of these three fundamental pillars of web programming, you're now equipped to build a website using just these three languages. The next step will be to delve into technologies, libraries, and tools that will significantly enhance your development capabilities and expand your job prospects, provided you have the necessary knowledge and experience in this field.\r
\r
However, entering the job market without knowledge of these technologies is nearly impossible. If your goal is to secure a job, learning and mastering these will be an essential requirement. On the other hand, if it's for personal development, they remain more optional.\r
`;export{e as default};
