# WebPack_pill
## Main Objectives
+	Understand what WebPack is and know its basics
+	To be able to deploy a web project that uses webpack to generate its assets
+	Understand what Javascript modules are and how to use them
+	Understand how a project is configured for different execution environments
+	Install and configure WebPack Plugins
+	Understand what ECMAScript 6 is and be able to use its new features thanks to WebPack
+	Optimize images automatically by applying various rules.


## Module-a.js

A file called module-a.js that contains a javascript module that makes use of the new features of ECMAScript 6 such as:
+	Make use of the arrow function
+	Make use of the new ECMAScript 6 class structure
+	Make use of the Template Strings
+	Make use of Let and Const

## Module-b.js
+	A file called module-b.js that contains a javascript module that makes use of the JQuery library (JQuery must be imported via webpack not manually)

## Main.js
+ A main.js file that will be your main Javascript file responsible for calling the modules that your application needs (at least the module-a and module-b)


## CSS
+	A sass file called colors.scss that applies the css style rules related to colors.
+	A sass file called text.scss that applies the css style rules related to text.
+	A sass file called main.scss (which will be responsible for importing the colors.scss and text.scss files)

## Images

+	Create an image file with a .png extension weighing less than 8kb
+	Create an image file with extension .svg with a weight less than 8kb
+	Create an image file with a .png extension with a weight greater than 12kb
+	Create an image file with extension .jpg with a weight greater than 1MB

## HTML
Create an index.html file that serves as an entry point to the application. It is necessary that this file automatically includes the assets generated. This means that webpack has to be responsible for injecting calls to assets.


