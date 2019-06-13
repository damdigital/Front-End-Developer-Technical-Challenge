# Dam Digital Front End Developer Technical Challenge
The purpose of this technical challenge is to get a feel for the current skill level of candidates applying for a front end developer job with Dam Digital.

-------

## Task
We would like you to demonstrate your development skills by delivering a solution to a short set of requirements listed below.

- We don't expect you to spend any longer than 2/3 hours on this task.
- Once you have finished, please send us a link to your zipped code or _even better_ a link to your solution in a hosted Git repository (GitHub / BitBucket etc.).
- You may also wish to include some handover notes along with your code.

As part of the recruitment process, we would like you to discuss your solution, the approach you've taken and any challenges you faced.

If you have any questions, please get in touch.

------

## Background 

![Company 42 Logo](designs/logo-company-42-for-read-me.png)

Company 42 have contacted Dam Digital to help them finish a prototype for their website. They would like Dam Digital to help fix a number of bugs and to create 2 new blocks.

The website must support the following browsers and be fully responsive on mobile devices:

- Chrome (latest version)
- Firefox (latest version)
- Internet Explorer (IE 11+)

------

## Designs
All designs are in the 'designs' folder.

-------

## Bugs to fix

Some of these bugs are browser specific. In the event, you do not have access to the necessary browser (e.g. if you are working on an Apple device you won't have access to Internet Explorer) 
please give us potential solutions to these bugs.

You can find screenshots of the bugs at the following path 'design\bugs'

### Bug 1 - The page is not scaling correctly on mobile or tablet devices
The whole website is not rendering correctly on mobile and tablet - everything is really small.
When resizing the window on desktop everything renders correctly.
The website should look as per the mobile and tablet designs.

### Bug 2 - Logo does not appear in the header
The designs show that we are supposed to have a logo in the header, we can see that the logo is in the markup but this one isn't displayed.
The logo should be shown.

### Bug 3 - Heart icon should change color on click
When clicking on the heart icon in any of the cards the colour should change from black to red to indicate to the user that this product has been added to their favorite products.

### Bug 4 - User should be able to delete cards
When clicking on the cross icon in the card a modal should appear, and the user should be able to click on 'Delete' to remove this card. No need to respect the design on this bug, we just want to see the interaction and js, you can use [a11y-dialog](https://github.com/edenspiekermann/a11y-dialog) or something else.

### Bug 5 - Display cards in a grid
Display the cards in a grid. We would like the cards to take the height of the largest one in each row. Not all rows need to be the same height. Bellow the `sm` breakpoint we want 1 col, between `sm` and `md` 2 cols and from `md` 3 cols.

### Bug 6 The side navigation shouldn't be displayed for screens under 480px
The side navigation should only be displayed on screens equal to or above this breakpoint.

### Bug 7 - Links in the side navigation do not work
When clicking on the side navigation links the user should be taken to the correct section.

### Bug 8 - Website is broken on IE11
When viewing the site in IE11 it isn't displaying correctly.

--------

## Blocks Creation

The page is missing two blocks, you will need to create these ones.

- Staff block
  - See design

- Register to newsletter in footer
  - See design
  - This block should follow basic HTML validation from the browser (see validation design)
