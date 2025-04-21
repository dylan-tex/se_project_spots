# Project 4: Spots

### Overview

<!-- >
I need to go through
-->

- Intro
- Figma
- Images
- `Edit Profile` Button impelemented
- `New Post` Button started

[Link to my project on Pages](https://dylan-tex.github.io/se_project_spots/)

<!-- >
I need to do a new video walkthrough
-->

[Link to my video walk-through](https://youtu.be/JNd820fExMw)

## Project features

This project made heavy use of javascript and the DOM. It also utilized transitions when opening and closing the modals. Modals are a class we defined that is referenced in the DOM often and the purpose of the modal is to edit page the user sees. It gathers user input and either edits the page or logs text to the console.

**What is the DOM?**
The DOM is the Document Object Model where by objects are instances of classes and javascript can manipulate these objects to change the result to the user. This allows much greater flexibility with handling using input and allows for much more efficient code.

**Figma**

This was the Figma file used to model the project.

- [Link to the project on Figma](https://www.figma.com/design/rGnA0eBcxYVOpA4bxmqlyu/Sprint-4-Project-Spots---March-2025?node-id=0-1&p=f)

**From Project 3 Notes**

- It was a massive hurdle learning Figma. The main things that are important in Figma are:

* how to export images
* Using the `option` key to find distances between parts of the layout
* Identifying fonts and font sizes

This project also made use of responsive design for mobile devices, deploying code such as the following:

```
@media screen and (max-width: 672px) {
  .profile {
    display: flex;
    flex-direction: column;
    max-width: 288px;
    align-items: center;
    text-align: center;
    padding-top: 20px;
  }

  .profile__avatar {
    height: 80px;
    width: 80px;
    margin-bottom: 12px;
    margin-right: 0;
  }
  ...
}
```

## Instructions on Deployment

Continuing in line with project 3 guidance-- I would highly suggest a thorough review of Figma. Specifically the use ot the `options` key (on macs) to determine spacing between elements.

There are many tutorials on Figma. Here is one such example:

[Figma YouTube Tutorial](https://www.youtube.com/watch?v=To_ADCVSg5g)

## Plans on Improving the Project

The `New Post` button has not been fully implemented yet. It currently logs to the console but does nothing by way of creating a new post yet.
