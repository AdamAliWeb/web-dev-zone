# CSS Frameworks

## Introduction

Similar to **JavaScript** frameworks and libraries, there are **CSS** frameworks. These are primarily based on sets of **CSS** classes designed to apply styles more effectively to your code. For instance, a class named `btn` enhances the appearance and feedback of a button.

Some frameworks offer complete components, comprising **HTML**, **CSS**, and occasionally **JavaScript** code, to implement specific functionalities. For example, a modal component can create a button that opens a modal window. Other frameworks provide utility classes solely for applying certain styles, such as a `flex` class that applies `display: flex;`.

In this section, we'll focus on two widely-used frameworks that offer general utilities: **Bootstrap** and **Tailwind**. While these are popular, there's a range of other frameworks specializing in more specific functionalities. My preference leans towards **Tailwind** for its customization, lightweight nature, and ease of implementation. In my experience, I've encountered challenges modifying styles with **Bootstrap**. Like **JavaScript** frameworks/libraries, it's important not to overuse **CSS** frameworks to avoid performance and compatibility issues.

## Tutorial

### Tailwind

-   **[Tailwind CSS Full Course for Beginners | Complete All-in-One Tutorial | 3 Hours](https://www.youtube.com/watch?v=lCxcTsOHrjo)**

-   **[Official Tailwind Documentation](https://tailwindcss.com/docs/installation)**

### Bootstrap

-   **[Bootstrap 5 Crash Course](https://www.youtube.com/watch?v=Jyvffr3aCp0)**

-   **[Official Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)**

## Resources

### Tailwind

-   **Tailwind** component library: **[Tailwind UI](https://tailwindui.com/)**

-   **Tailwind** installation guide for various technologies/tools: **[Installation Guide with Frameworks](https://tailwindcss.com/docs/installation/framework-guides)**

### Bootstrap

-   **Bootstrap** offers free icons that can be used with or without it. Make sure to import them separately via **npm** or **CDN**: **[Bootstrap Icons](https://icons.getbootstrap.com)**

-   You can integrate **Bootstrap** into your **React** projects using **React Bootstrap** or **ReactStrap**. Tutorials and documentation for both:

    -   **[React Bootstrap Tutorial](https://www.youtube.com/watch?v=8pKjULHzs0s)**

    -   **[React Bootstrap Documentation](https://react-bootstrap.netlify.app/)**

    -   **[Create React.js App With Bootstrap Using Reactstrap Component in VS Code](https://www.youtube.com/watch?v=eumuHX8Oipc)**

    -   **[ReactStrap Documentation](https://reactstrap.github.io/)**

-   Comprehensive list of styles applied by **Bootstrap** classes: **[Complete List of Bootstrap CSS Classes](https://bootstrapshuffle.com/classes)**

## Tips, Tricks, and Best Practices

### Tailwind

-   Customizing **Tailwind** classes is straightforward. Just navigate to `tailwind.config.js` and add your custom classes in the `theme` object. Here's the official documentation: **[Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles)**

-   Sorting **Tailwind** classes for readability can be challenging. Collaborating with **Prettier**, the **Tailwind** team developed a solution. Learn how to implement it: **[Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)**

-   Utilize the `@apply` rule in your **CSS** to apply **Tailwind** classes, reducing verbosity and enhancing readability.

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer components {
        .btn-primary {
            @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
        }
    }
    ```

### Bootstrap

-   When using **Bootstrap** via **CDN**, ensure you import the associated **JavaScript** file along with the stylesheet to enable component functionalities.

-   Familiarity with **SASS** can simplify modifying **Bootstrap** variables like colors or sizes.

-   If your **CSS** knowledge is limited, it's advisable to strengthen your fundamentals before diving into a framework.

-   **Bootstrap** class naming convention follows a pattern: `property-size-value`, such as `mt-md-3` or `justify-content-lg-center`.

## Exercises and Projects

### Tailwind

-   **[Tailwind Crash Course | Project From Scratch](https://www.youtube.com/watch?v=dFgzHOX84xQ)**

-   **[Portfolio Website with Tailwind CSS | Tailwind Tutorial for Beginners](https://www.youtube.com/watch?v=4zHNGNCIezY)**

-   **[How To Make A Website With Tailwind CSS Step By Step Tutorial For Beginners](https://www.youtube.com/watch?v=8eQwgc9nc64)**

### Bootstrap

-   **[Bootstrap 5 Crash Course | Website Build & Deploy](https://www.youtube.com/watch?v=4sosXZsdy-s)**

-   **[Build A Landing Page using Bootstrap 5 - Full Tutorial](https://www.youtube.com/watch?v=DvfezgoBRzY)**

-   **[How To Create E-commerce Website Using HTML, CSS & Bootstrap 5 | Step By Step](https://www.youtube.com/watch?v=Eg060ApBhT4)**

## Conclusion

With this knowledge, you're equipped to embark on your journey as a front-end developer. Remember, practice makes perfect! In the next section, we'll delve into **CSS** preprocessors and postprocessors.
