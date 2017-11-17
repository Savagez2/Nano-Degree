## Website Performance Optimization portfolio project

This website is an online portfolio created by _Cameron Pittman_.
He developed this site to showcase a few **_Udacity_** courses that
he took as well as some teaching work.

The challenge was to optimize this online portfolio for speed!  In particular,
optimize the critical rendering path and make this page render as quickly as possible.

### Usage

This is a simple website that is accessed by clicking [HERE](https://jeffmicha3ls.github.io/frontend-nanodegree-mobile-portfolio/index.html)
to access the main page.  There are 4 links on this main webpage to navigate through at your convenience.

#### Tools

**_Grunt_** was used for some of the page optimization efforts in this project.  The Gruntfile.js
and package.json files are included in the repo, but the node_modules directory was removed
as requested.

Grunt was executed on the Git Bash command line within the project folder, but the actual Gruntfile.js file was modified via the
**_Atom_** text editor after each fix attempt to the index, css or js file(s).

### Known Bugs

The following issues were discovered on the original website and fixed in this version:

#### Part 1: Optimized PageSpeed Insights score for index.html with fixes below:

1.  The images in both img and views/images were rather large.  I reduced these images with two
    different tools, **_Paintshop Pro_** and the **_ImageMagick_** convert command on the Git Bash command line.
2.  There were 2 media queries in index.html that weren't required for page load, so I moved those
    to 2 separate files and inlined the call to the file name at the bottom of the index.html file.
3.  The index.html file and all files within the js and css directories were minified using Grunt.  In addition,
    these files were compressed using gzip.
4.  Instead of calling the whole style.css file at the beginning of index.html, I moved the footer references
    to footer.css and called the file at the end of the body.  In addition, I inlined the remaining
    minified css in the style tag of **<head>**.

#### Part 2: Optimized FPS in pizza.html by modifying views/js/main.js with fixes below:

1.  Replaced all querySelector with getElementById.
2.  Replaced both querySelectorAll with getElementsByClassName.
3.  Moved document.documentElement.scrollTop outside the _for_ loop.
4.  Added variable numberOfItems = items.length within updatePositions function
    so items length doesn't need to be queried each iteration.
5.  Assigned the elem variable during DOMContentLoaded loop initialization instead of each iteration.
6.  Changed the number of iterations thru the DOMContentLoaded loop from unnecessary value of 200 to 55.
7.  Updated changePizzaSizes function to prevent FSL due to DOM call inside _for_ loop.
8.  The .mover class was modified to use the 3D parameter, translateZ, to offload the
    updatePositions function to the GPU.
9.  Added variable movingPizzas = document.getElementById('movingPizzas1') within DOM load function
    to replace the repeated call within the _for_ loop.

### Contributions

A big _Thank You_ to Udacity for the Javascript training and for providing the majority of the code for this project.
