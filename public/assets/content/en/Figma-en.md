# Figma

## Introduction

**Figma** is a web-based design software similar to **Photoshop** or **Framer** that allows you to design any layout or anything you want. **Figma** is focused on interface design, whether it's web or any other interface. Unlike others, **Figma** has some options that allow for some interaction with your design, which I'll show you later. Primarily, **Figma** is geared towards **UI/UX** (_User Interface / User Experience_) designers, but it's also used in the Front-End field, especially if you work alone or your job is more about design than programming.

I've used **Figma**, and it really facilitates the production of an application and ensures a more refined and attractive design. There are other applications you can use for this purpose, such as **Sketch**, **Adobe XD**, **Framer**. But I've decided to provide you with **Figma** for these reasons:

-   It's one of the leading design editors in web development.

-   Its free plan is among the most comprehensive and almost limitless.

-   It's quite easy and intuitive to learn.

-   It has a community section that allows you to use various templates, resources, and plugins from others or publish your own content.

-   It has a version history in each project that allows you to revert or view an old part of your project (in the free plan, the history is up to 30 days).

-   It offers prototyping of your application, meaning you can replicate it like PowerPoint and add certain interactions.

These are the functions that I consider positive about **Figma**. But if you're interested in seeing what other options offer, I encourage you to do so if you're more interested in the web design or **UI/UX** part.

## Tutorial

-   **[Free Figma UX Design UI Essentials Course](https://www.youtube.com/watch?v=kbZejnPXyLM)**

-   **[Figma Advanced Tutorial: A 2-hour Masterclass](https://www.youtube.com/watch?v=31wzhvz0vsw)**

## Resources

-   I'll leave you a link where you can download **Figma** tools: **[Figma Downloads](https://www.figma.com/downloads/)**. The **Font installers** is the font installer; this is almost mandatory because without it, you won't be able to visualize most of the **Figma** fonts. **Figma Mirror** is the application used to visualize your designs in the app from your mobile. And the desktop application is the same, only you can use it as a desktop application if you find it more convenient.

-   In **Figma**, there are plugins that other people make to execute functions that normally couldn't be done or would be very tedious. Be careful not to download too many as they can slow down the editor's performance. Here you can see the available plugins: **[Figma Plugins](https://www.figma.com/community/plugins)**

-   **[How to start jamming in FigJam](https://www.youtube.com/watch?v=UL57gqG67bw)**

## Tips, Tricks, and Best Practices

-   To have more than 3 pages in your **Figma** project without having to switch to a paid plan, move the file to the drafts section, add the pages you need from there, and then return it to your projects.

-   **Figma**'s coordinates are like a Cartesian plane, only with the Y-axis inverted, meaning the higher the Y value, the further down it will be.

-   In the Frames section, you can see different sizes. There are options for phones, computers, presentations, documents, social media posts, and even watches. It's a very useful option if you want to design the interface for a specific device or size.

-   If you pay attention, you'll notice that the **Figma** canvas is infinite, and distances are determined from the left and top margins of the element you're on; if you're all the way zoomed out, the coordinates will be based on the infinite canvas.

-   There are several ways to copy in **Figma**:

    -   Ctrl + C and Ctrl + V.

    -   Alt + selecting the element you want to copy and then paste it directly where you want it.

    -   Ctrl + D allows you to copy and paste it at once. If it's in an auto layout, it's inserted contiguously.

-   In **Figma**, there are several ways to delete an object:

    -   Selection + Backspace deletes the selected object by pressing the key that deletes text.
    -   Selection + Delete deletes the selected object by pressing the Delete key (_this key is not available for 60% keyboards_).
    -   Selection + Ctrl + X not only deletes the object but also copies it, so you can paste it wherever you want.

-   In **Figma**, there are several ways to rescale an element (_when I say rescale, I mean modifying the size of a selected object by selecting its edge_):

    -   Selection: simply rescale the container of that object freely

    -   Shift + Selection: rescale the container of that object proportionally

    -   Alt + Selection: rescale the container of that object from the center (_you can combine it with Shift so it's done proportionally_)

    -   K -> Selection: this is a method that you can activate and deactivate and allows you not only to rescale the parent container but also its children; this is very useful when you want the text to increase in size as well (_you can combine it with Alt so it rescales from the center_). Don't forget to deactivate it by going to the selection method instead of rescaling or by pressing V.

-   Images in **Figma** act like the background of a container. To understand it better, it works the same way as `background-image` in **CSS**. You can make almost the same adjustments in the **Figma** interface as you would with **CSS**.

-   Remember that in texts, the auto-width property causes the text to adapt the size of the text box by width, making it take up all the space as necessary width-wise, while the auto-height property adapts it by height, meaning that the less width it has, the height increases to accommodate the text.

-   Rules and guides show the dimensions in the focused element; if you zoom out enough, it shows the dimensions of the **Figma** plane. To activate them if you don't have them set in the top left corner, select View and activate rules (rulers), or you can activate them only with Shift + R, and by dragging outwards from a rule, you can pull out a guide, to remove it, right-click and choose remove guide or drag it back to the rule. If you zoom in on an element with Shift + 2, the rules will apply to that element, so the 0 point will be in that element. To remove all guides from one orientation, right-click on the rule in the opposite direction and choose remove all guides.

-   Sections are used to group frames in the same container, to take out a section, use Shift + S, select the place, and adjust the size of the section in question.

-   Special alignment allows you to align multiple selected elements by measuring the distance from the first to the last. You can align them vertically, horizontally, or both. To align multiple elements in one direction, you need to select them beforehand.

-   Constraints allow you to modify the positioning and scaling of certain elements so that when their containers are modified, the child elements are positioned according to the constraint value of that element.

-   You can implement a grid to an element to orient yourself between the dimensions of that element. To implement it, activate the Layout Grid property. You can assign a grid, columns, or rows. To make them visible or not, press Shift + G.

-   You can apply the auto layout property to a frame or a selection of elements, which will modify the dimensions of the parent container to adjust the content fluidly. To give you an idea, it's like applying `display: flex;` to that specific element.

-   Components are used to have multiple instances of the same element. You can create variants of a single component; the variants are applied in the properties inspector. If you make a change to any property of the instance, this change will not affect the original component, whereas if you apply a change to the original component, this change will be reflected in the other instances unless that property of any instance has had changes previously, then that instance will not apply the change from the parent component. You have certain options like going to the parent component from any instance, removing the relationship with the parent component, resetting all changes applied to the instance, or inserting changes from the instance to the original component. As a reminder, you cannot insert elements into an instance of a component; what you have to do is insert the element into the main component and then hide it in the instance itself.

-   When exporting an element, you can select the format between _svg_, _png_, _jpg_, _pdf_; you can see a preview of the image and select the scaling.

-   The slice tool is used to take an internal capture of a section of your project and export it; to use it, press s.

-   To use the mask tool, the image that will be the background must be above the element to which we want to apply the mask in the order of the elements. Then select both and apply the mask option.

-   The union tool allows you to unify two elements in different ways. Flatten selection will unify the figure in question immutably and independently.

## Conclusion

With this, you will have learned how to layout and design your websites in a much more professional way and you will have mastered a large part of web design, however, there are still some sections that you must see in order to master the entire web programming process.
