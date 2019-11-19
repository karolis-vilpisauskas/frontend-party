# Tesonet FrontEnd developer task

## Choices

 - The components are structured into single folders for a couple of reasons: 
- - This allows me to have a more usable component based `SASS` files instead of having a large single file that in the end would become hard to manage.
-   - It allows for easy to manage tests since they are right there next to the component file.
-  The components are named based on their function and usability. This allows me to reuse them later without any hassle.
- The base folder has been set to `src` to avoid `../../../` imports
- The `redux` state is set in the `sessionStorage`, this allows the user to go back to the page logged in even if the tab was closed.
- Input validation is simply set to avoid `whitespace` using regex for now and can be simply changed to anything else.
- Input fields have an icon next to them to tell the user if the value they entered is valid. This allows the user to easily see what they need to do without having their screen cluttered with messages.
- Color are set in the `variables.scss` file as well as the font is set there. This allows to easily change the colors without having to look through each `SASS` file.
- Router views use component containers instead of regular HTML ones. This allows me to easily edit and reuse `SASS` styled containers.
- `BrowserRouter` is separate from `Switch` to make sure that the page transitions don't clutter up the main `<App />` component.

## Todo's
For further development of the application I believe there are still a few things required that I can see:
- Make the application more TDD based, since right now the only tests that are available are render tests for component.
-  Merge the `<Success />` and `<Error />` components into `<Message />` and display it globally instead of between views.
- Create a separate reducer for errors and success messages, so that all pages can use that globally
- Remove unneeded dependencies
- Setup more SEO friendly dynamic title, content and icons
- Switch from `SASS` to `styled-components`

## Commands

Install all required dependencies:

    npm install

Run application in development mode:

    npm start

Run tests:

    npm run test
   
  Deploy to Github pages ( Not working due to api route being set to HTTP ) :

    npm run deploy

*By Karolis Vilpišauskas*