# HP-themed-Single-Page-Application

### Required Functionality
Your web app MUST contain and demonstrate these features/abilities/style of writing

- Multiple "pages" for the SPA that replace most/all of the main content
  - Navigation and branding can remain between pages, your choice
  - Your app must consist of at least 3 "pages", but I expect most projects will have more pages than 3 in order to demonstrate all features
- A navigation that allows the user to move from one "page" to another in the SPA
  - A user never has to use the browser "Back" button to use your app
  - A user never has to reload/refresh the page to use your app
- At least one form with some sort of validation that conditionally appears
  - You can have forms that do not have input limitations (and thus have no validation)
  - All forms that DO have input limitations must have validation 
  - You are required to have at least 1 form that has input limitations (and thus has validations)
- A `<title>` that describes your application

### Required Visuals

- You MUST have an identifiable color palette for your site that goes well together
- Different areas of the "pages" of your SPA MUST appear visually distinct and have whitespace and boundaries that are sufficient and helpful for the user
- The app must appear to be "complete"
  - No placeholder text
  - No placeholder images
  - No links to non-existent content
    - Exception: Links to social media accounts can link to other accounts, as if those accounts were for your project
  - Content the user would expect is present

### Required Responsive/Adaptive Behavior

Your web app MUST demonstrate these responsive/adaptive behaviors
- General Responsive behavior that allows the page to be readable and clear at any viewport sizes in between adaptive breakpoints (between 360px and 1200px widths at standard font size)
- At least one Adaptive breakpoint 

### Required Accessibility

Your web app MUST demonstrate these accessibility features

- You must use Semantic HTML when there is a clearly appropriate semantic HTML element for the purpose
  - `<a>` is used for navigation (between "pages" of the Single Page Application or to urls that are not part of the Single Page Application)
  - `<button>` is used for controls of an interactive portion of the "page"
  - You can make a `<button>` look like a link or make `<a>` look like a button, but the element used must match the actual semantic purpose (`<a>` for navigation and `<button>` for controls) regardless of the visual appearance
- You must use landmark HTML elements where appropriate
  - Ex: `<header>`, `<footer>`, `<main>`, `<nav>`
  - `<article>` and `<section>` have subtle semantics and their use is not required for this project but they are recommended when you are confident you are using them properly
- Any heading elements (`<h1>`, `<h2>`, etc) must be properly used
  - They are used for titles of content that is a subsection of the previous heading
  - No levels in between are skipped
  - The current HTML never has more than one `<h1>` element at a time
- ALL foreground images must have a useful and accurate `alt` attribute
  - "useful" and "accurate" are IMPORTANT.  It is not enough to have alt text if that alt text is not helpful to someone using it.
  - For this project, that includes any "logo" images
- Any image in the background MUST NOT display any relevant information to the user
- All font sizes must be in rem units
    - No font size is below 0.75rem
- Your pages must remain readable/usable when zoomed in up to 200%
- All controls and form fields must be accessible/usable via both keyboard and mouse
  - The skiplink need only be usable by keyboard
- You must have a skiplink that works when the app is loaded
  - Each "page" should work with the skiplink
  - "work with skiplink" means that using keyboard navigation and following the skiplink means the next Tab will enter the main content of the page and skip any material before the main content
- You must pass WCAG contrast requirements for AA level
- All links on the page will have useful text for the link
  - The link text will not include "click here"
  - The link text is meaningful without context (such as when in a list of links in a screenreader)
  - You do not have multiple links with the same link text
    - You fulfill this requirement if the default link text is overridden by an aria-label value that matches the link-text requirements
- All form fields must have an appropriate `<label>` element properly associated with the data
- Any controls must have an accessible text description
  - Ex: Button text, an associated `<label>` element, or an `aria-label` attribute
  - This should NOT include error messages for the element, only the label text
- Do not use color as the only indicator for information to the user
- Nothing automatically rotates/advances
- Any animation or transition CSS MUST be in a media query that blocks the motion for users that have `prefers-reduced-motion`

## Partially Required Features

You must implement at least 5 of these features following the practices from class:

- Drop down navigation menu
  - the menu drops down on click or drops down on hover/focus, your choice of which trigger causes the dropdown
- An Adaptive "hamburger menu"
  - A menu that is visible at larger viewport size, but is replaced with a dropdown menu at smaller viewport sizes (this counts as a dropdown as well if done)
  - If you have a hamburger menu that is available on ALL page sizes, that counts as a dropdown navigation menu but NOT as an Adaptive Hamburger Menu
  - Having two navigations and only showing one at a time does NOT count as an Adaptive Hamburger Menu
- Accordions or Tabs
  - These require that content is conditionally shown based on changing the Accordion from open to closed or on selecting a "Tab"
  - These must be usable and identified to accessibility tech, relying on semantic HTML where possible and using aria-properties when needed.  
- Theme selection (switching between a light or a dark theme) that then applies to all "pages" in the SPA
  - The option to change theme can be on all pages or in some "Settings" page, your choice
- Cards or Panels that include an image and text grouped together visually
  - This option must have sufficient styling to be noteworthy
- A Carousel of images (where one image is shown at a time)
  - Reminder: I do NOT recommend carousels as a matter of UX, I include this option only because you may be asked to create such an abomination on the job
- A "gallery" that shows many items (images/cards/panels/rows/etc) that can be filtered or sorted or otherwise changes which items are shown   
  - You must have AT LEAST one of "filter" or "sort" or "otherwise change which items are shown"
  - "Filtering" meaning that the user can select options that changes which of the total number of possible items are shown
- A "complex" form interaction (Ex: Specific Fields that appear/show or use a different input type based on criteria). Examples of complex form interactions:
  - A dropdown with "other" that shows an additional field to fill in what "other" is when selected, but if you pick something from the dropdown that isn't "other", the extra field isn't shown
  - A shipping address and billing address where a checkbox says "billing address same as shipping address" and when you check it the billing address is pre-filled and the fields are given the "readonly" attribute so that they can't be edited.  Unchecking the box makes those fields editable again.
    - This is an example of "complex" form interaction.  You do not have to have exactly these form contents or labels, but this demonstrates a behavior that qualifies as "complex"
  - Two select dropdowns where the selection in the first changes the options for the second, like selecting the make and model of a car (changing the "make" selection changes what is available in the dropdown for "model"). 
- A Modal form that alters some data shown in the app.  Examples of "altering some data shown in the app" include changing your Display Name in Slack or changing if emails are shown in "Compact" mode in Gmail
  - There are multiple parts to this requirement:
    - It must be a modal dialog using the dialog element as shown in class
    - The modal dialog content must include a form
    - The form collects/changes data that is saved into state in the application
    - This state data must be visible somewhere in the app OUTSIDE of the form
      - Example: The page says "Hello USERNAME" somewhere in the content and the modal form allows the user to change the value of USERNAME
