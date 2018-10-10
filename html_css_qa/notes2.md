# CSS
````
<style>

  a, p {
    color:red;
    font-family:fantasy;
  }

</style>
````
when making a site with multiple pages, use a CSS file rather than copying style tags. Link the CSS file to the html pages:
```
<link rel="stylesheet" href="style.css">
```
CSS is a collection of blocks of code, each that apply a set of characteristics to elements.

use class "." to apply to many elements. use id "#" for singular uses (but browsers can usually treat id's like they are classes).
