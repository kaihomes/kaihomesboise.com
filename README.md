# KAI LLC

The website for [Kai Homes Boise](https://kaihomesboise.com/)

---

To add to the portfolio, follow these steps:

1. Create a new folder in the `/portfolio` folder. Be sure to name it something URL-friendly, because the folder's name will become the "slug"/path to link to that portfolio piece. (For example, a folder named `"boise-bench-new-build"` will become `"www.kaihomesboise.com/portfolio/boise-bench-new-build/"`.)
1. Copy an `index.html` file from another folder from inside the `/portfolio` folder (such as the `/portfolio/north-end-new-build/index.html` file), and paste it into your new folder.
1. Add up to 10 new photos of your portfolio piece to your new folder, and number them in the order you want them, with file names: `1.jpg`, `2.jpg`, `3.jpg`, etc. Make sure they are all the same aspect ratio (such as 1:1, 3:4, 2:3, 16:9, 4:5, etc).
1. Edit the `/portfolio/index.html` file to add your new portfolio piece as a new link at the top of the list. Go to: `<article>` --> `<div class="portfolio-links">`. Add a new link at the top: `<a href="./<your-folder-name>/" class="img-link"> <img src="./<your-folder-name>/1.jpg" alt="<Title of your portfolio piece>" loading="lazy" /></a>`.
1. Edit the HTML to fit your new portfolio piece's information. Change the following:
   1. `<title>__NEW_TITLE__ • Kai Homes Boise</title>`
   1. `<link rel="canonical" href="https://kaihomesboise.com/portfolio/__FOLDER_NAME__/" />`
   1. `<meta property="og:title" content="__NEW_TITLE__ • Kai Homes Boise" />`
   1. `<meta property="og:url" content="https://kaihomesboise.com/portfolio/__FOLDER_NAME__/" />`
   1. `<meta name="twitter:title" content="__NEW_TITLE__ • Kai Homes Boise" />`
   1. `<div class="hero"><h1>__NEW_TITLE__</h1></div>`
   1. `<section class="intro"><p>__DESCRIPTION__</p></section>`
   1. `<img id="feature" src="./1.jpg" alt="__NEW_TITLE__" />`

And that's it! Push the changes to GitHub. And then your new portfolio page should be live in just a few seconds after you push your changes.
