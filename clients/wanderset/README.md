Wanderset Design
======

This repository contains all design / UI files for Wanderset. The directory structure is as follows:

* **src/assets/images** - image files, videos, media files which will be served to the browser
* **dist/assets/stylesheets** - CSS files, compiled from SASS
* **src/assets/fonts** - web font files used anywhere in site designs
* **src/template** - HTML files, each reusable view component will have its own HTML file
* **src/assets/javascript** - frontend JS files. Each view will have its own JS file accompanying it
* **dist/assets/stylesheets** - SASS files to be compiled into CSS
* **psd** - PSD files with design source. Finalized design files should include .FINAL in the name.
* **resources** - notes and other files accompanying any designs
  * **guides** - images and notes describing designs and functionality
* **script** - Node.js script files include a server for previewing views and compiling LESS into CSS

## PSDs

As PSD designs are finished, please add .FINAL to the file name. Each screen should include a desktop PSD (include .DESKTOP in the filename) and a mobile version (include .MOBILE) in the filename. PSDs will be converted to responsive CSS / HTML

## INSTALL

1. Install NPM dependencies - `npm install`
2. Install Bower dependencies - `bower install`
3. Run Gulp - `gulp`
