const e=`# CSS\r
\r
## Introduction\r
\r
**CSS**, short for _Cascading Style Sheets_, is a language used to design and style websites, controlling how they look to users. It complements **HTML**, which manages the core content of the pages.\r
\r
The term "cascading" is used because all the statements are processed from top to bottom, creating a cascading effect.\r
\r
With **CSS**, you can establish rules that instruct your website on how to present content, such as typography, colors, and sizes. The current version of **CSS** is **CSS3**.\r
\r
## Tutorial\r
\r
-   **[HTML & CSS Full Course - Beginner to Pro](https://www.youtube.com/watch?v=G3e-cpL7ofc)**\r
\r
## Resources\r
\r
-   Explore **[bennettfeely.com](https://bennettfeely.com)** for a range of handy **CSS** tools and guides. These are some noteworthy sections:\r
    -   **[CSS gradients patterns](https://bennettfeely.com/gradients/)**\r
    -   **[3D text generator](https://bennettfeely.com/ztext/)**\r
    -   **[Flexbox manipulator](https://bennettfeely.com/flexplorer/)**\r
    -   **[CSS pie chart generator](https://bennettfeely.com/csspiechart/)**\r
    -   **[Image clipper](https://bennettfeely.com/clippy/)**\r
    -   **[CSS image filters](https://bennettfeely.com/image-effects/)**\r
-   Discover a page offering predefined **CSS** icons: **https://css.gg/app**.\r
-   Si alguna vez tienes dudas acerca de la compatibilidad de una funcionalidad de **HTML** o **CSS** en distintos navegadores, puedes verificarlo en el sitio **[Can I use](https://caniuse.com/)**.\r
-   Visualize fonts of different styles and sizes and export them as **CSS** code at **https://typescale.com**.\r
-   Gain a deeper understanding of responsive design and its application in your projects through **https://utopia.fyi/blog**.\r
-   Find various **CSS** designs and patterns to implement at **https://www.magicpattern.design/tools**.\r
-   Utilize **https://autoprefixer.github.io** to generate the required prefixes for each **CSS** property.\r
-   Minify any **CSS** code to reduce its size at **https://www.tutorialsteacher.com/tools/css-minifier**.\r
-   Use this converter to change pixels to ems, enabling you to establish a base font: **http://pxtoem.com**.\r
-   Discover a wide range of colors, palettes, and create gradients at **https://hue.tools/info** and **https://cssgradient.io**.\r
-   Access **Google Fonts** to choose from a variety of fonts for your website. Remember, don't overuse too many fonts as it could negatively affect performance: **[Google Fonts](https://fonts.google.com)**.\r
-   Explore practical examples of media queries and responsive design on **https://mediaqueri.es**.\r
-   Dive into the content of this Front-End developer who offers valuable tips and useful tools, including a **CSS** shadow generator and more: **https://www.joshwcomeau.com**.\r
-   Find advice and best practices for **HTML** and **CSS** at:\r
    -   **https://codeguide.co**\r
    -   **https://webdesign.tutsplus.com/30-html-best-practices-for-beginners--net-4957t**\r
    -   **https://github.com/airbnb/css**\r
    -   **https://github.com/necolas/idiomatic-css**\r
    -   **https://cssguidelin.es/#anatomy-of-a-ruleset**\r
\r
## Tips, Tricks, and Best Practices\r
\r
-   For real-world printing of web pages, consider using a media query to customize styles and **HTML** content specifically for printing. You can learn how to do this here: **https://www.youtube.com/watch?v=CAgLAeykOyU**.\r
\r
-   Common breakpoints for device resolutions are as follows:\r
\r
    | Screen Sizes | Scope                                                                                                 |\r
    | ------------ | ----------------------------------------------------------------------------------------------------- |\r
    | 320px        | Devices with small screens, like phones, in vertical mode.                                            |\r
    | 480px        | Devices with small screens, like phones, in horizontal mode.                                          |\r
    | 600px        | Small tablets, like the Amazon Kindle (600x800) and Barnes & Noble Nook (600x1024), in vertical mode. |\r
    | 768px        | 10-inch tablets like the iPad (768x1024), in vertical mode.                                           |\r
    | 1024px       | Tablets like the iPad (1024x768), in horizontal mode, and some laptop, netbook, and desktop screens.  |\r
    | 1200px       | Panoramic screens, mostly laptops and PCs.                                                            |\r
\r
-   When using media queries, it's recommended to use the \`min-width\` and \`max-height\` properties with \`ems\` rather than pixels. Pixels are considered absolute units, but in reality, they are relative to the screen's resolution. If a device has a higher density, the proportion of the pixels changes. That's why it's important to express the breakpoints of media queries in \`ems\`, which are relative and proportional units. For example, \`320px / 16px = 20em\`.\r
\r
    | PX     | EM     |\r
    | ------ | ------ |\r
    | 320px  | 20em   |\r
    | 480px  | 30em   |\r
    | 600px  | 37.5em |\r
    | 768px  | 48em   |\r
    | 1024px | 64em   |\r
    | 1200px | 75em   |\r
\r
-   Resetting the \`box-sizing\` property to \`border-box\` in **CSS** ensures that an element's total size includes padding and border, simplifying design and avoiding unexpected overflows. It also integrates well with **CSS** frameworks and libraries:\r
\r
    \`\`\`css\r
    *,\r
    *:before,\r
    *:after {\r
        box-sizing: border-box;\r
    }\r
    \`\`\`\r
\r
-   In web development, it's advisable to apply styles to classes rather than IDs. This allows for style reuse, simplifies maintenance by centralizing changes, avoids specificity conflicts, maintains a clear separation between structure and design, aligns with community standards, and offers greater flexibility in collaboration and scalability for large projects:\r
\r
    \`\`\`css\r
    /* BAD */\r
    #element {\r
        padding: 2rem;\r
    }\r
\r
    /* GOOD */\r
    .element {\r
        padding: 2rem;\r
    }\r
    \`\`\`\r
\r
-   The correct order of link pseudo-classes is:\r
\r
    1. **:link**\r
    2. **:hover**\r
    3. **:active**\r
    4. **:visited**\r
\r
-   Restrict the use of one color system in the current project to maintain a more organized color structure.\r
\r
-   To extract color codes from images or programs on your computer, you can use this application: **[HTML Color Picker](https://download.cnet.com/quick-html-color-picker/3001-2192_4-10400979.html)**.\r
\r
-   In **Visual Studio Code**, you can change the color system of a color by hovering the cursor on the color chart and clicking the value at the top of the chart. This value will change with each click.\r
\r
-   **Chrome DevTools** has a function called _CSS Overview_ that allows you to visualize all the styles of a website, including colors, fonts, and media queries. You can find a detailed guide about how to use it here: **https://developer.chrome.com/docs/devtools/css-overview/**.\r
\r
-   Sometimes, when scrolling or navigating to a certain section of your page, the header at the top can hide some elements at the beginning of the section. To fix this, you can assign a margin to that section when the user is there. Use the \`scroll-margin-top\` property and set the value of the margin you'd like to apply. Here is an example: **https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top**.\r
\r
-   Use logical properties like \`inline\` and \`block\`. Since not all languages follow the left-to-right direction of English, it's crucial to have an adaptable writing experience. Logical properties provide better support for languages written in horizontal (like Arabic, Hebrew, and Urdu) or vertical direction (like Chinese, Japanese, and Korean). They are also shorter and simpler to write:\r
\r
    \`\`\`css\r
    /* BAD */\r
    .element {\r
        margin-left: 2rem;\r
        margin-right: 2rem;\r
    }\r
\r
    /* GOOD */\r
    .element {\r
        margin-inline: 2rem;\r
    }\r
    \`\`\`\r
\r
-   Remember that if a child element has the \`width\` property in percentages, the parent will automatically occupy 100% of the available space. It's important to control this effect.\r
\r
-   Avoid using abbreviated declarations unless you need to set all available values (like \`background\`, \`font\`, etc.). The overuse of abbreviated properties can lead to disorganized code with unnecessary overrides and unintended side effects:\r
\r
    \`\`\`css\r
    /* BAD */\r
    .element {\r
        background: red;\r
    }\r
\r
    /* GOOD */\r
    .element {\r
        background-color: red;\r
    }\r
    \`\`\`\r
\r
-   Avoid \`@import\` since it can slow down loading, add additional requests, and generate unexpected issues. It's better to import stylesheets using \`<link>\` in **HTML** or using preprocessors.\r
\r
-   To improve readability, follow an ordered structure when declaring **CSS** properties. You can find the suggested order here: **https://markdotto.com/2011/11/29/css-property-order/**.\r
\r
-   To make all multimedia on your page flexible and adaptive to screen size, use this **CSS** declaration (though there are other ways to do it):\r
\r
    \`\`\`css\r
    img,\r
    audio,\r
    video,\r
    iframe,\r
    canvas,\r
    svg,\r
    picture {\r
        max-width: 100%;\r
        height: auto;\r
    }\r
    \`\`\`\r
\r
-   Avoid using the viewport measure to establish a width of \`100vw\` in elements, since this will cause horizontal overflows, problems in small devices and unexpected results on designing. It's better opt using relative measures as percentages, \`em's\` or \`rem's\`.\r
\r
-   **Desktop First** and **Mobile First** are the 2 main strategies on responsive design to adapt the content to the screen size. **Mobile First** it's centralized in small screens, while **Desktop First** it's focused in bigger screens. In responsive design it's better to use **Mobile First**, cause it prioritize the experience in small devices, enhancing the loading speed and the usage in small screens. Then, you can expand progressively the design for bigger screens, in a result of a effective and efficient adaptability.\r
\r
## Exercises and Projects\r
\r
-   **[Responsive Web Design - FreeCodeCamp](https://www.freecodecamp.org/learn/2022/responsive-web-design/)** provides a course with practical exercises and offers a widely recognized certification.\r
-   **[HTML & CSS PROJECT YouTube Playlist](https://www.youtube.com/playlist?list=PLImJ3umGjxdD3ov2lwg0SM5rxz5v9FjOf)**\r
-   **[Build a responsive website with HTML & CSS](https://www.youtube.com/playlist?list=PL4-IK0AVhVjNDRHoXGort7sDWcna8cGPA)**\r
    <!-- My copy of Super Mario Bros Wonder -->\r
\r
## Conclusion\r
\r
That covers the basics of **CSS**. The next section to learn is **JavaScript**. Get ready to master it in the following section.\r
`;export{e as default};
