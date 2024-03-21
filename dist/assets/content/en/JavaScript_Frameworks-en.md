# JavaScript Frameworks

## Introduction

Frameworks have been in existence for decades. They are essentially sets of pre-written code designed to streamline the development of specific functions or projects.

For instance, imagine implementing a feature where users can drag elements on the screen while holding down the mouse click, and the element remains in the position where the click was released. This function is commonly known as "drag and drop". While achievable with pure **JavaScript**, using a library can save time by not having to start from scratch.

There are more extensive and comprehensive libraries or frameworks that facilitate the creation of much more complex projects. Contemporary frameworks and libraries enable the optimization of web application development from start to finish, focusing on building **SPA** (_Single Page Application_) pages. These pages consist of a single web page that doesn't require visiting other **HTML** files or reloading the page, as all the content is located on one page and it's completely reactive.

Before the arrival of modern **JavaScript** libraries and frameworks for constructing **SPA** websites, such as **React**, **Vue**, and others, the predominant tool of that era was **jQuery**. This library facilitated interaction with **HTML** elements, allowing for style adjustments, cross-browser compatibility checks, and error reduction in **JavaScript** functions. During its time, **jQuery** was the go-to tool.

In contemporary projects, there's generally no need for **jQuery**, as all its functionalities are now covered by native **JavaScript**. However, many projects still use **jQuery**, often due to the substantial effort and cost it would take to transition to a newer framework or library, particularly in large projects. For independent developers or freelancers, learning **jQuery** may not be imperative at this point. However, in many companies, knowledge of **jQuery** is a prerequisite for certain positions, thereby expanding job opportunities. Mastering **jQuery** is relatively straightforward if you already have a grasp of **JavaScript**'s **DOM**.

We will cover **jQuery** here, but remember that it's entirely optional and not comparable to the other frameworks. It's more of an external library that could increase your chances of finding a job.

It's crucial to be mindful of excessive reliance on libraries and frameworks, as it can potentially slow down the application's performance due to the additional processing the browser has to handle. Moreover, having multiple libraries in your project can lead to compatibility issues that are challenging to resolve. In this section, our main focus will be on one particular framework, namely **React**, but we'll also touch on key aspects and resources of other frameworks.

## Tutorial

The list of frameworks and libraries is extensive and continues to expand each year. I'll mention three main frameworks: **React**, **Vue**, and **Angular**. We will focus mainly on **React**, and also mention **jQuery**. Although there are other frameworks, they are less commonly used and offer fewer job opportunities. However, if you want to use some of those, you are free to do so, as each has its advantages and disadvantages. If you are looking for a job I recommend to see which technologies are the most requested in your area and if your aim is to program for yourself you can choose whatever you want. Before delving into frameworks, I recommend watching this video that compares the differences between them, which will help you understand which one will be better for your needs: **[Angular vs React vs Vue: Which Framework to Learn in 2022](https://www.youtube.com/watch?v=T2uKprwHHXU)**

### jQuery

**jQuery** is an older library that doesn't offer anything new, but it is still widely used. Here are some guides if you want to learn it:

-   **[Learn jQuery for Beginners - Full Course](www.youtube.com/watch?v=ScoURsEM_yU)**

-   **[Official jQuery Documentation](https://api.jquery.com)**

### React

**React** is one of the most popular **JavaScript** libraries for web and mobile application development. Created by Facebook, **React** has a collection of reusable **JavaScript** code fragments used to create user interfaces, called components.

It's important to clarify that **React** is not a **JavaScript** framework. This is because it is only responsible for rendering components in the visual layer of an application. **React** is an alternative to frameworks like **Angular** or **Vue**, which allow the creation of complex functions. Here are the resources to learn it:

-   **[The Complete React.Js Course 2024](https://www.youtube.com/playlist?list=PLOmL3sL-afbRRLzwP7B5-U075y0m3pNQ3)**

-   **[Official React Documentation](https://react.dev/learn)**

While I won't rule out the possibility of adding more content on other libraries or frameworks in the future, for now, we'll concentrate solely on **React**. However, if you prefer to explore other options, feel free to seek out online resources and use them, as they are all equally valid.

## Resources

-   Here I provide some supplementary videos to watch after the tutorial and you've practiced with some exercices provided below about **React**:

    -   **[10 React Antipatterns to Avoid - Code This, Not That!](https://www.youtube.com/watch?v=b0IZo2Aho9Y)**

    -   **[The Right Way to Animate SVG in React](https://www.youtube.com/watch?v=SrmTDrN1lkU)**

    -   **[Folder structure in React - Complete Guide](youtube.com/watch?v=ANrYhHN8Dl4)**

    -   **[UseEffect Mistakes Every Beginner Should Avoid](https://www.youtube.com/watch?v=iftKirX0kD8)**

    -   **[All 12 useState & useEffect Mistakes Junior React Developers Still Make in 2024](https://www.youtube.com/watch?v=-yIsQPp31L0)**

    -   **[Next.js isn't React](https://www.youtube.com/watch?v=r8nXMA_pf0w)**

    -   **[Client-Side VS Server-Side Rendering - Data Fetching with Next.js](https://www.youtube.com/watch?v=f1rF9YKm1Ms)**

    -   **[Do you REALLY need SSR?](https://www.youtube.com/watch?v=kUs-fH1k-aM)**

    -   **[Beginner React.js Coding Interview (ft. Clément Mihailescu)](https://www.youtube.com/watch?v=gnkrDse9QKc)**

-   **Framer Motion** is a library that allows you to animate **React** components in an easier and faster way. Also allows to animate **SVG's** in **React**. Here is the tutorial: **[The Framer Motion Crash Course || React Animation Library 2023](https://www.youtube.com/watch?v=znbCa4Rr054)**. Also here is the **Framer Motion** official documentation: **[Framer Motion Documentation](https://www.framer.com/motion/)**.

-   This is a library for creating floating components (_elements that are floating in a certain place of the screen_) which are responsive: **[Floating UI](https://floating-ui.com/docs/getting-started)**.

-   On **[React SVGR](https://react-svgr.com/playground/)** you can convert **SVG** code into **JSX** to utilize it as a dynamic **React** component.

## Tips, Tricks, and Best Practices

-   You can use the `HashRouter` component, especially if you have cases where URLs on your page encounter issues when accessed from another location. This is a common occurrence with shared hosting. Nevertheless, it's generally better to use `BrowserRouter`.

-   All the `useState` and `useEffect` logic try to divide it into custom hooks, that way the code will be cleaner and more organized and you would have the hooks to reuse them on future projects easier and faster.

-   This image illustrates an advisable way to organize the folders in your **React** projects:
    ![React Project Structure](./assets/react-project-structure.jpg)

-   If you were thinking to use **Create React App** to initialize a project with **React**, I suggest you not doing it. It's a deprecated technology and it has a lot of disadvantages, here is a video that explains it in-depth: **[STOP Using Create React App](https://www.youtube.com/watch?v=7m14f0ZzMyY)**

-   If you wish to preview your website in your phone using **React** you have to follow the same steps as mentioned before in the tips of **HTML**. But the difference is that you have to go to your `package.json` file and add the `--host` flag to the command which initializes the developing server. Here is how it would be with **Vite**:

    ```json
    "scripts": {
        "dev": "vite --host",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },
    ```

## Exercises and Projects

-   The **[JavaScript Mastery](https://www.youtube.com/@javascriptmastery)** YouTube channel offers a range of videos for daily project practice using the latest technologies.

-   **[FreeCodeCamp](https://www.freecodecamp.org/learn/2022/responsive-web-design/)** provides a course with practical exercises and offers a widely recognized certification.

## Conclusion

After becoming proficient with a framework or library and gaining ample practice, you'll not only be able to create a website with a complex and organized structure, but also possess the necessary knowledge to embark on a job search. There will be a section to guide you through the job search process in case you are not yet prepared. We'll also cover topics more oriented towards design, such as **CSS** frameworks. However, in comparison to **JavaScript** frameworks and libraries, they are relatively straightforward.
