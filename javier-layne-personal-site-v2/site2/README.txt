Javier Layne — Personal Website
================================

Contents:
  index.html      Home page (bio)
  projects.html   Projects & Resume page
  contact.html    Contact Me page (form)
  assets/style.css
  assets/script.js
  assets/resume.pdf   Downloadable resume (linked from projects.html)
  images/headshot-placeholder.svg   Placeholder photo

To view the site:
  Unzip this folder, then open index.html in any web browser.
  All three pages link to each other through the navigation bar at the top.

Before submitting / publishing, swap in your own photo:
  1. Add your headshot image to the images/ folder (e.g. images/headshot.jpg).
  2. In index.html, find the <img> tag inside the "hero__photo" figure
     and change its src from "images/headshot-placeholder.svg" to your
     new file, e.g. src="images/headshot.jpg".

To update the resume:
  Replace assets/resume.pdf directly with your own PDF of the same name
  (linked from the "resume.pdf" button on the Projects & Resume page).

Design system:
  assets/style.css defines the color palette and fonts as CSS variables
  at the top of the file (--bg, --accent, --accent-warm, etc.) — change
  those to retheme the whole site at once. The nav bar, photo panel,
  buttons, and contact form were added at the bottom of the file to
  match the resume-page styles that were already there.

The contact form does not send real messages (there's no backend) — it
simulates a submission in the browser with JavaScript, per the assignment
instructions.
