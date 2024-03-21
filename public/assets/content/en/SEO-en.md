# SEO

## Introduction

**SEO** stands for Search Engine Optimization. It refers to the set of optimization strategies and techniques used on a website to appear organically in Internet search engines like **Google**, **Yahoo**, or **Youtube**.

Over time, it has become essential for a page to appear first in searches. However, this has been abused, and many techniques have emerged that sacrifice the quality of the content. An example of this is when you search for a question on a topic, and you find pages filled with explanations and comments, and only at the end of the blog do you find the answer to the question you were asking. They do this to keep you on the page for as long as possible to generate more income, but in this case, they are lowering the quality of the page by adding filler instead of content they genuinely want to express and share.

That's why you have to be careful because if you focus too much on positioning your website, you can end up sacrificing the quality of that same page. Even so, I will teach you the best practices that are easy to follow and will allow you to effectively position your page.

## Tutorial

These are the methods to follow to have better positioning:

-   First, I'll leave you some videos that delve deeper into the topic of **SEO**. They explain what it is, how to implement it, and, in this case, how to use it with **React**. Since it's a library for SPAs, it can be more complicated to position:

    -   **[SEO for Developers in 100 Seconds](https://www.youtube.com/watch?v=-B58GgsehKQ)**

    -   **[How to Use Google Search Console: Complete Step-By-Step Guide (Up-to-Date 2023) + Free GSC Bundle](https://www.youtube.com/watch?v=Rq-Ioe9OPYM)**

    -   **[SEO For React Developers](https://www.youtube.com/watch?v=j8OUmE4Vj3M)**

    -   **[Make your React web apps discoverable - JavaScript SEO](https://www.youtube.com/watch?v=rKgF0rf009c)**

    -   **[React Course - Advanced - SEO](https://www.youtube.com/watch?v=wWeG8rWkMsM)**

-   Use the `background-image` property if you want to insert a background image. The algorithm doesn't detect well if an `<img/>` tag is used to put an image in the background. But it's a better practice to insert that image in the **CSS** property.

-   If you use emojis, don't combine them with texts. The algorithm won't detect the words correctly, so leave a blank space between the word and the emoji.

-   Include a canonical URL in the `<head>` tag of your web page to improve its positioning and allow **Google** to index your page accurately.

    ```html
    <link rel="canonical" href="https://example.com/preferred-url-here/" />
    ```

-   If you want to know if your page has been indexed in **Google**, you can use the `site:domainname.com` command in the search engine.

-   Avoid abusing the `<div>` tag, and instead, use semantic tags like `<main>`, `<section>`, `<article>`, among others. This will contribute to keeping the code cleaner, structured, semantic, and will help search engines better position your web page.

    ```html
    <!-- WRONG -->
    <div>
        <div>
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>

    <!-- CORRECT -->
    <article>
        <section>
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </section>
    </article>
    ```

-   Always add the `<lang>` attribute to the `<html>` tag. This helps voice synthesis tools determine the proper pronunciations and translation tools to apply the correct rules.

-   For better web page positioning, it's recommended that the `<title>` tag be between 55 and 65 characters long, while the `<meta name="description">` tag shouldn't exceed 165 characters.

A very powerful tool is **[PageSpeed Insights](https://pagespeed.web.dev)**. This allows you to analyze the performance, accessibility, and **SEO** of a web page. These data are approximate; they shouldn't be taken literally but can be seen as a guide and help a lot to know what your web page needs in most cases.

If you're interested in testing those aspects of your page without officially publishing it yet, you can upload your page to a subdomain or hosting to test web pages. An example would be to upload it to **[AwardSpace.com](https://www.awardspace.com/free-web-hosting-to-test-website/)** to check if the application works. I haven't tried that hosting, but it's an example I'm giving you to understand the point. Then take the link to your website and paste it into **Page Speed Insights**, and it will return an analysis of the web page.

## Conclusion

With this information, you'll be able to position your web pages and increase the audience that visits them if you follow these techniques and offer quality content. We're almost done, but there are a few sections left that will be useful for polishing your skills and having better opportunities.
