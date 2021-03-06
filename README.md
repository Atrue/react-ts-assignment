# Monument Labs React Typesript Assignment

## Objective

This is an assignment to test the skills of the React/TS developer.
Assignee is required to create a limited web application based on the given designs and specifications.

## Design

The design is given [here](https://zpl.io/a7W7mva), but to keep the assignment to a limited scope,
you are only required to implement the following:

* An empty canvas of 1024x768
* Top navigation bar, with just the back arrow, forward arrow, "Photos" title and the search bar
* Everything below the navigation bar should be an empty area with white background

Zeplin makes it easy to understand the design paramaters, gives you CSS exports and asset exports.
Please use them wisely. You are expected to create the exact design with React.

You can use either inline styles, css stylesheets, or whatever css-in-js library you wish (styled-components).

## Functionality

* When the user clicks on the search area, it should show a list of suggestions just like shown in the design [here](https://zpl.io/aRMl0ZK). The design has excess whitespace in the suggestions area, do not leave that much space, just respect the paddings and margins and make it only as tall so the contents fit in
* When user starts typing, you should search in two separate databases. One is the location database that has the location names and `id`s. The other is the `Content` table that has the photo names and location ids. You should show results on the screen as shown in the design [here](https://zpl.io/a7wXxPY). The thumbnail should just be a dummy photo, location name should be displayed along with the total number of matches. "Location" text should be there fixed, since this assignment doesn't include other types of searches
* The same thing regarding the extra whitespace in the design applies for the search results as well
* Sample databases are sent via e-mail. Please dump them to IndexedDB or any other similar web database

## Other Tidbits

* When you go over the assignment please email the person who sent you this with an acknowledgment and an estimated time frame for delivery
* If you need clarifications or any other questions, please e-mail us
* You will need access to Zeplin, please sign up for it and send your username, so we can give you access
* Please fork this repository and create a PR when you're done
* Comments are your friend
* Take into the account the organization and structure of what you are building
  Good points if your code is easy to integrate into a big codebase
* Break up your components by functionality or if they get too large to manage
  Right now all is into a single main file (App.tsx) but it doesn't need to be that way
* Have fun :smile:
