# _{Super Galactic Age Calculator}_

#### _{Age Calculator}, {03-17-2018}_

#### By _**{Hamza Naeem}**_

## Description

_{An app that can take a users inputted age and converts and calculates the projected age of that person on a given planet. Given a few demographic attributes the calculator will also take those attributes and will calculate the users life expectancy and years beyond life expectancy will be counted if the users age surpasses the projected life span. }_

##Specifications

* _Spec 1: Converts a persons year to days._
* _Input= 10 years Output= 3650_
* _Spec 2: Takes the difference of two dates and returns the difference in days._
* _Input= 06-30-87 & 06-30-88 Output= 365 days_
* _Spec 3: Return the age of user in Mercury Years._
* _Input= 10 years Output= 41.67_
* _Spec 4: Return the age of user in Venus Years._
* _Input= 10 Output= 16.13_
* _Spec 5: Return the age of the user in Mars Years._
* _Input= 10 Output= 5.32_
* _Spec 6= Return the age of the user in Jupiter Years._
* _Input= 10 Output= 0.84_

##Configuration/dependencies

* _JavaScript (object-oriented) and JavaScript Date object._
* _Node package manager (npm): a module bundler to combine several webpacks._
* _Webpack and webpack-cli (command line interface): bundle JavaScript files (or other files) to use in a browser. Also capable of packaging any resource or asset._
* _CleanWebpack plugin: npm dependent, cleanup dist (distribution folder)._
* _Minifying and HTML webpack plugins: npm dependent, minimize coding for faster page loading._
* _Webpack development server: npm dependent, can run a virtual server on the logic page._
* _Install eslint webpack: npm dependent, a realtime JavaScript compiler and debugger._
* _jQuery: npm dependent, add jQuery commands to the webpack._
* _Boostrap: npm dependent, add Bootstrap commands to the webpack._
* _Jasmine: npm dependent, provide business-side BBD testing._
* _Karma: npm dependent, a test runner to verify business-side BBD testing._



## Setup/Installation Requirements
* _Install npm ($ npm install)._
* _Update npm to version 5.7.1 ($ npm i npm)._
* _Initialize npm ($ npm init -y)._
* _Create a .gitignore file in the home folder (exclude unnecessary files/folders going into the repository)._
* _Install webpack packages ($ npm install webpack@4.0.1 --save-dev) ($ npm install webpack-cli@2.0.9 --save-dev)._
* _Add dist and sec folders to top level._
* _Add index.html, main.js and project.js files to bundle JavaScript webpack ($ npm run build)._
* _Install CSS packages by installing webpacks ($ npm install style-loader@0.20.2 css-loader@0.28.10 --save-dev) and edit file webpack.config.js._
* _Install HTML webpack to compress HTML code ($ npm install html-webpack-plugin@3.0.6 --save-dev) and edit webpack.config.js file._
* _Install CleanWebpack plugin to clean up the dist folder ($ npm install clean-webpack-plugin@0.1.18 --save-dev) and edit webpack.config.js file._
* _Install Minifying plugin to the bare minimum coding to read the file faster. ($ npm install uglifyjs-webpack-plugin@1.2.2 --save-dev) and edit webpack.config.js file._
* _Install webpack development server ($ npm install webpack-dev-server@3.1.0 --save-dev) and edit webpack.config.js and package.json files._
* _Install eslint, a JavaScript linter webpack ($ npm install eslint@4.18.2 --save-dev) ($ npm install eslint-loader@2.0.0 --save-dev), edit webpack.config.js and create an .eslintrc file._
* _Install jQuery dependency ($ npm install jquery --save), edit main.js file and remove scripts tap for jQuery._
* _Install bootstrap dependency ($ npm install popper.js --save) ($ npm install bootstrap --save) and edit src/main.js file._
* _Setup Jasmine buy installing Node module, helper package and initialization ($ npm install jasmine-core@2.99.0 --save-dev) ($ npm install jasmine@3.1.0 --save-dev) ($ ./node_modules/.bin/jasmine init) and update package.json file._
* _Install and setup Karma webpack ($ npm install karma@2.0.0 --save-dev). Add a package that will make Karma and Jasmine work together ($ npm install karma-jasmine@1.1.1 --save-dev). Install Chrome launcher ($ npm install karma-chrome-launcher@2.2.0 --save-dev). Install Karma from the CLI ($ npm install karma-cli@1.0.1 --save-dev). Install several packages in order for Karma can understand other packages ($ npm install karma-webpack@2.0.13 --save-dev) ($ npm install karma-jquery@0.2.2 --save-dev) ($ npm install karma-jasmine-html-reporter@0.2.2 --save-dev) ($ karma init) and edit karma.conf.js file._


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

* _Node Package Manager (organizing webpacks and dependencies)_
* _Jasmine (BDD testing)_
* _Karma (development)_

### License


Copyright (c) 2018 **_{Hamza Naeem}_**
