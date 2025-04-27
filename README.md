# Project 4: Spots

### Overview

<!-- >
To do:
0) mention the usefulness of branches in the project ✅
1) walkthrough video in Streamlabs ✅
2) insert a video showing the transitions and highlighting transition code (gifs did not work)
3) work on plans for improving the projects ✅
-->

- Intro
- Figma
- Images
- `Edit Profile` Button impelemented
- `New Post` Button started

[Link to my project on Pages](https://dylan-tex.github.io/se_project_spots/)

<!-- >
walkthrough video here
-->

[Link to my video walk-through](https://www.youtube.com/watch?v=CD4nkn_C6rM)

## Project features

This project made heavy use of javascript and the DOM. I also was able to use GitHub branches to work through challenging problems.

**GitHub Branches**

GitHub branches are a major game changer. Without branches-- each saved change in a project could potentially corrupt the project if there are errors and make it difficult to "go back in time." However GitHub branches you can compare the logs between branches and even differences in the code between branches.

Two useful GitHub commands are:

`git diff branch1..branch2`

and

`git log branch1..branch2`

where `branch1` and `branch2` should be replaced by the names of the branches themselves.

The first command will tell you the individual lines of code which differ between the branches and the second will tell you the differences in the commits (which is an overview of the differences).

I did find that occasionally GitHub wouldn't detect differences between files in the branches with the commands above.

To individually compare files in GitHub use this command:

`git diff branch1..branch2 -- filename.ext`

where `filename.ext` should be replaced by the actual filename.

If a file is within a directory (folder) wiuthin the project, you may have to reference the folder and the file and compare the differences:

`git diff branch1..branch2 -- folder/filename.ext`

To overwrite one branch with another branch-- navigate to the branch you would like to be overwritten with the `git switch branch` command where `branch` is the name of the branch to be overwritten.

Then use the `get merge overwritingBranch` to overwrite the branch you are on where `overwritingBranch` is the branch which will replace or overwrite your current branch.

Sometimes however this merge comnand will not detect any differences in the branches, in which case you have to overwrite files directly using the command

`git checkout branchOverwriting -- file.ext`

After doing this make sure to merge the branches so that one branch is not ahead by a commit.

**BEM Methodology**

Previously deployed but now increasingly important is BEM methodolgy. "Block Element Modifier" Metholodgy helps developers navigate through each others' code. And in this project--- with it's multiple layers of complexity-- was essential .

**What is the DOM?**

The DOM is the Document Object Model where by objects are instances of classes and javascript can manipulate these objects to change the result to the user. This allows much greater flexibility with handling using input and allows for much more efficient code.

**Modal Class**

The objects of the modals class where regulary referenced through DOM integration. It also utilized transitions when opening and closing the modals. Modals are a class we defined that is referenced in the DOM often and the purpose of the modal is to edit page the user sees. It gathers user input and either edits the page or logs text to the console.

One example of the use of transitions and a block modifier is seen here:

```
.modal_is-opened {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.5s linear;
}
```

In conjuction with the transition declaration in the modal block itself, this line of dictates how the modal transition occurs during open and close.

**Figma**

This was the Figma file used to model the project. Understanding how to interpret Figma continued to play a major role in this project.

- [Link to the project on Figma](https://www.figma.com/design/rGnA0eBcxYVOpA4bxmqlyu/Sprint-4-Project-Spots---March-2025?node-id=0-1&p=f)

- Using the `option` key to find distances between parts of the layout
- Identifying fonts and font sizes

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

<!--

Adjust this
-->

I would highly suggest a thorough review of Figma. Specifically the use ot the `options` key (on macs) to determine spacing between elements.

There are many tutorials on Figma. Here is one such example:

[Figma YouTube Tutorial](https://www.youtube.com/watch?v=To_ADCVSg5g)

## Plans on Improving the Project

The `New Post` button has not been fully implemented yet. It currently logs to the console but does nothing by way of creating a new post yet.
