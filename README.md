# Project 3: Spots

### Overview

- Intro
- Figma
- Images

## Project features

This project made HEAVY use of the Figma platform to derive fonts, spacing, and images.

**Figma**

This was the Figma file used to model the project.

- [Link to the project on Figma](https://www.figma.com/file/BBNm2bC3lj8QQMHlnqRsga/Sprint-3-Project-%E2%80%94-Spots?type=design&node-id=2%3A60&mode=design&t=afgNFybdorZO6cQo-1)

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

In order to make best use of the code-- I would highly suggest a thorough review of Figma.

There are many tutorials on Figma. Here is one such example:

[Figma YouTube Tutorial](https://www.youtube.com/watch?v=To_ADCVSg5g)

What ultimately sped everything up for me was realizing that by double clicking on elements I can explore their properties and then, again, the importance of the `option` key (on macs) to determine spacing between elements.

## Plans on Improving the Project

The actual implementation of the `New Post` and `Edit Profile` buttons has not been completed so they are purely aesthetic in their current state.
