html is just a series of elements inside of other elements.
An element is made up of an opening and closing tag together.
What you put between the tags is the content of the element.
There are 5 or so tags that don't need to be closed. ``<br>``
After DOCTYPE, everything should be nested generally (not meta, br, etc..).

Attributes describe some characteristic of the element, and go in the opening tag.
Syntax for attributes is quotes and equal signs.
````html
<html lang="en" dir="ltr">
````

The head is for metadata and the body is for content.
````html
<meta name="description" content "the description for the site!">
````
Head is usually simply title and metadata, but can be beefed up with a lot of stuff. Here are some meta tags to get a favicon as ico, png, or gif, but will only animate on firefox.

````html
<!-- standard favicon tags -->
  <link rel="icon" type="image/x-icon" href="http://example.com/favicon.ico" />
  <link rel="icon" type="image/png" href="http://example.com/favicon.png" />
  <link rel="icon" type="image/gif" href="http://example.com/favicon.gif" />

  <!-- For Misc. other sizes: -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <!-- For android: -->
  <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
  <!-- Opera Speed Dial Favicon -->
  <link rel="icon" type="image/png" href="/speeddial-160px.png" />
  <!-- For iPhone 4 Retina display: -->
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png">
  <!-- For iPad: -->
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72-precomposed.png">
  <!-- For iPhone: -->
  <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">
  <!-- For Facebook, Yahoo, Digg, etc: -->
  <link rel="image_src" href="/icon.jpg" />

````

For icons when saving the website to the home screen on an iphone/smartphone:
````html
<link rel="apple-touch-icon-precomposed" href="icon.jpg" />
<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

````
moreover, to open the website without the safari border:
````html

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
````
In older eras of html, a tag with only opening would need a trailing slash before closing the opening tag. Nowadays the browser will take care of it.

Here is a JS pooploop
```JavaScript
for (var i = 0; i < 0; i++)  {
    let div = document.createElement('div')
    div.textContent = "poop"
    document.body.appendChild(div)
  }
```
This makes everything rainbow madness
```JavaScript
setInterval(()=>{
  document.querySelectorAll('*').forEach(e=>
    e.style.background='#'+Math.floor(Math.random()*16777215.toString(16)
  )
}, 250)
```
