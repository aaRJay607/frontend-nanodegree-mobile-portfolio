## Website Performance Optimization portfolio project

### Getting started

#### Download
* Fork this repository.
* Clone it to ur PC.

#### Create local server
1. You can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
2. Open a browser and visit localhost:8080

#### Ngrok

This is needed to run the page through PageSpeed Insights. It links your local server to the internet.

Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

Copy the public URL ngrok gives you and try running it through PageSpeed Insights!

### Optimised code

* The ***build*** folder contains the optimised code.
* Grunt is used to minify and optimize code and images.
* To learn about grunt go to this [link](http://gruntjs.com/getting-started).

### My Modifications:

#### Part 1: Optimize PageSpeed Insights score for index.html

* Minified and Optimised all html, js, css and image files. This is done using grunt.
* Minified version of ```style.css``` is inlined inside ```index.html``` to prevent server request.
* Link to the google font is removed and instead a script is added that uses webfont without blocking the rendering of the page.
* GoogleAnalyticsObject script has been moved to a new file ```ganalytics.js```.
* ```async``` attribute is added to ```ganalytics.js```, ```perfmatters.js``` and ```google-analytics``` script tags.
* ```media``` attribute is added to the link tag in ```index.html```.

#### Part 2: Optimize Frames per Second in pizza.html

Changes in ```main.js```
* Optimised the changePizzaSizes function.
* Moved variables ```pizzasDiv``` and ```randomPizzas``` outside loop.
* Optimised updatePositions function.
  1. Moved DOM accessing variables outside the loop. Variable ```docscroll``` created outside the loop for this.
  2. Used ```transform``` instead of ```left``` to change positions.
  3. Instead of ```querySelectorAll```, used ```getElementsByClassName``` and moved that in a variable ```items``` outside the updatePositions function.
* requestAnimationFrame is used using the ```animateCheck``` function which in turn calls the ```updatePositions``` function.
* DOMContentLoaded event function is optimised by moving DOM access inside the variable ```movingPizzas1```. This variable is moved outside the loop. querySelector is replaced by getElementById.
* Changed the number of pizzas from 200 to 24.

Changes in ```pizza.html```
* Moved the div with id movingPizzas1 outside the row div and removed its bootstrap class col-md-6 to facilitate the transform calculation.
* Added meta viewport so that 24 pizzas can be effectively spread across screen even in mobile devices.
