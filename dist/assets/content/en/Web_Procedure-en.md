# Web Procedure

## Introduction

This section will be dedicated to proposing ideas and methods for creating a website. I'll walk you through the entire process I follow from start to finish to succeed in project creation, whether they are small or large.

This is not a strict guide; you can follow it as is, adapt it, or find your own way of doing things. I simply provide you with a methodology to follow to avoid more mistakes and learn faster.

When initializing a project, I typically follow these guidelines:

-   Planning

-   Content

-   Design

-   Code

-   Hosting

I also recommend breaking down each part into smaller sections so you can tackle it in a less overwhelming and easier manner, and set deadlines so you focus on finishing it a little earlier. However, don't pressure yourself too much as you may burn out, which is not what we're aiming for. Remember, you'll have to endure some discomfort and sacrifice some things, but don't go to the extreme of not resting and having leisure time. Try to find a balance where you feel comfortable and achieve good productivity.

## Planning

When starting a project from scratch, you have to define its purpose, why you are doing this work. I follow the philosophy of creating projects based on whether they are useful to me or not. I think it's bad to launch a project that I won't use or find useful. For example, I created the **WebDevZone** project to compile tools and resources that I could quickly access, and if I wanted to review any content, I would have the courses and summarized material.

Another project I made is **Youtube Info Gather**, which allows you to check details of a **YouTube** playlist like the total duration and videos that are not available with just the playlist link. Additionally, you can save playlist information so that if a video is deleted or set to private in the future, I would at least know which ones they are, as **YouTube** doesn't notify you when a video becomes unavailable within your playlist.

As you can see, I made these projects not only to practice my programming skills but also to facilitate certain aspects of my daily life. You can follow this philosophy to solve problems or automate tasks that you or someone close to you have.

So before initializing the project, you should ask yourself these questions:

-   What is the main objective?

-   Will I or someone I know use it at some point?

-   How reusable is it, i.e., how many times will it be used?

Once you've answered these questions, you can think about how to create the project and what tools or technologies to use.

## Content

Once you have the main idea resolved, you can think about the content it will have. It doesn't have to be the complete content at once; you can start with a first part and complete the rest when most of it is programmed. Alternatively, instead of doing it now, you can focus on design and code first, and then the content. It all depends on the needs and goals of the specific project.

If it's a project that will have a lot of content, such as a lot of text or many sections, I recommend doing most of it now and completing it when you have the design or code done. This way, you'll have content to work with when you're in the design and programming phase. If the project is short, it's more a matter of personal preference on the order in which you decide to do it.

## Design

This part may seem irrelevant, but it can be very important if your project focuses heavily on design. First of all, you have to know if your project will have a complex design or not. If it will have many animations, if it will be very interactive, etc., as this will determine whether you need to dedicate time to designing it or not. For example, my personal website required a specific style, many animations, and drawings, so I had to design it in **Figma** to avoid future problems. I recommend doing this because the first time I made my personal website, I had an idea in mind but hadn't designed it, and the final result wasn't bad, but it was too simple for what it could have been.

If your project is small or won't have a special or complex design, you can skip the design part and do it later when you have the code ready. But if how it looks matters to you, I recommend not skipping this part. As a design editor, I recommend **Figma**; it's one of the most focused on web programming, but this will be your choice. If you want to learn more about **Figma** and how to use it, you can go to the corresponding section where I teach you its complete ecosystem.

When programming, you don't have to follow the design 100%. If you don't know or can't do something, or if you change your mind and think a certain section would look better another way, you can make changes when applying the design in programming.

## Code

This is when we really get into programming as such. The first thing is to define what technologies and tools you will use. Whether you'll use the ones you always use or implement new ones. I recommend alternating between using the ones you always use and adding some new ones to keep improving the ones you already know and expand your experience with new ones.

Then you will start programming. If your project will be large or you are not clear about the logic you will implement, I encourage you to write it on paper or jot it down in an application. Like what functionalities your application will have or what a specific function will do. This way, you'll have a clearer idea when programming.

This is usually my programming process:

-   I initialize a folder with **Vite** if I'm programming with **React**; if I'm programming with Vanilla **JavaScript**, I simply create the folder and files.

-   I create a **GitHub** repository with the title of my project; in the code editor, if my folder is empty, I create the files `README.MD`, `.gitignore`, and `LICENSE`; if my project has already been initialized with **Vite**, these files will already come by default; if you need to make changes to those files, I recommend doing it now. Then I initialize the **GitHub** repository with this code:

    ```bash
    git init
    git add .
    git tag -a "v0.1" -m "Creating the repository"
    git commit -m "Creating the repository"
    git remote add origin https://github.com/username/repository.git
    git push --tags
    git push -u origin main
    ```

-   Now, this would be the programming process, and it's the one that would take the longest since it's when you really work on the project. Divide this process into sections, and for each one finished, save and upload it to the repository. Skipping this step will make it harder to identify major errors and maintain your project.

-   When you're close to finishing the project, it's recommended to follow these steps when you see that the application's functionality is finished:

-   Ensure that you've completed the section you were working on, confirm that there are no errors, and proceed to save and upload it to the repository.

-   Try to optimize the code. Condense the parts of the code that are repeated into functions, remove unused code, make it as readable as possible, and comment it so you can maintain it in the future. After this, proceed to have the version you're going to upload ready; in **Vite**, it would be having the `dist` folder ready by running `npm run build`.

-   Make sure that performance, accessibility, and **SEO** are at acceptable levels. If you don't know how to check these areas, in the **SEO** section of this website, I'll explain step by step how to achieve it.

-   After verifying that everything works correctly, you'll need to upload it to the main hosting. There are many hosting services. If you have the resources, you can select a paid hosting and have more advantages than with a free one. But depending on your needs, you can choose any. You can also host it on **GitHub Pages** for free. There are several options, so choose the one that seems most suitable. If you plan to go with paid hosting, I recommend **Hostinger**. It's not very expensive and offers many functionalities.

## Conclusion

It may seem excessive and difficult to follow these steps, but remember that they are not mandatory, and you can adapt them to your way of working; I've only provided the foundation. With time and more practice, you'll improve and have a better work structure, and its quality will also improve. From here, all you need is to practice, and you'll become quite competent. If you're unsure how to search for a job or have already tried and didn't succeed, in the interview preparation section, I provide resources and advice for you to land that coveted programmer job.
