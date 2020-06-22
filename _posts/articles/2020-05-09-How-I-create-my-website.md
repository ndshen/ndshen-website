---
layout: post
title:  "How I create my website"
author: ndshen
categories: [tutorial]
image: assets/images/13.jpg
featured: false
tags:
  - article
---

This article is about the developing process of my personal website, and things that I learned while building it. I did not have many experiences when it comes to the front end part of web developing. Some basic knowledge about html, css (not even scss) and javascript is all I had when I first started. So if you are also a front-end newbie who is planning on builing a jekyll website, I hope this article can give you an idea of what you're about to go though (*Trust me, it's not as hard as you think*).   
<br>

## Learn Jekyll
Jekyll is a static site generator based on **Ruby**, to be more specific, Jekyll is a Ruby Gem (similar to Python's pip). Therefore, the first I did is to install the Ruby environment. There's acutally a very good quickstart tutorial on [Jekyll's official website](https://jekyllrb.com/docs/), it helped me a lot. Being new to Ruby, I also did some research about **Bundler** - *[How does Bundler work anyway?, by Andre Arko](https://youtu.be/j2V-A8vvLP0)*. To understand how Jekyll works and the structure of Jekyll, I strongly recommend the [tutorial series by Giraffe Academy](https://www.youtube.com/watch?v=T1itpPvFWHI&list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB). Since I had some experiences with building a wordpress theme, it was quite easy for me to grasp the concept of a site generator.   
<br>   
      
## Decide the theme of my website
Luckily, there are a lot of free templates and themes for Jekyll on Internet. Going through those templates really inspired me a lot, and it made me detremine what my website should look like. Though there was no tempalate that 100% satisfy me, there were two themes that I like very much - [Barber](https://github.com/samesies/barber-jekyll) and [Mediumish](https://www.wowthemes.net/mediumish-free-jekyll-template/). I love the grid layout of the Barber theme, I figured it is the perfect layout for me to display my photos. On the other hand, Mediumish has a great pagination and category system, which allows me to easily organize my blog posts. As a result, **_I decided to combine those 2 themes and merge them into my one of a kind website_**.   
<br>

## The Building Process
Using others templates is relatively simple. Most of the time you'll only have to downlaod the repository and modify the config file and you're almost ready. However, to change others templates or even integrate multiple templates, you have to get your hands dirty. I spent some time playing around with both templates, while trying to understand the code and structure of each projects. In order to take control over a Jekyll project, these are some components that one should pay attention to:   
- _layout directory, 
- CSS, SCSS, JS files
- gem package
- javascript package dependencies (if any)
- CDN links

Below I'm going to document what I've done to build the website, just in case I need to remind myself in the future.

##### 1. The Defualt Layout & Blog Posts Pagination Page
For my blog posts page, I decided to use the Mediumish theme. Though the theme is well-designed, I took out some of the features that I don't need, for example, the rating system and the subscribe feature. Also, I found out that the jekyll-paginate package is outdated, therefore I upgraded its pagination package into the latest jekyll-paginate-v2. Codewise, I seperate the header code and footer code from the original default layout, I personally think that the new strucutre is more straight-forward and is easier to maintain.


##### 2. Two types of pagination - Blogs & Photos
Besides blog posts, I also want to post some photos I took on the gallery page. To be clear, photos are just another post with image and no content. I then use the autopage module in jekyll-paginate-v2 to paginate all the posts with a 'photo' tag in the gallery page.

##### 3. The grid layout & infinite scroll for gallery
I really like the grid layout in the Barber theme. After studying its code, I learned that the layout is powered by a jQuery package called - [Salvattore](https://salvattore.js.org/). Since it is an open-source package, it is easy for me to implement the same layout on my website.

##### 4. Fading Page Transition
When it comes to user experience, I feel like the fade-in and fade-out effect while switching pages really makes a big difference, so I spent some time adding this feature to my website.

##### 5. Manage and Minify the building process with Gulp
As I started to add different features to my webstie, I had to include more and more javascripts, and to some extenet it became somehow inefficient in both performance and management aspect. At first I was trying to find some ways to minfiy the javascript, then I came across this new tool that I never heard of - Gulp. I later realized that Gulp is a popular tool in web development, it is a tool to automate some of the building tasks and make your life easier. I really like gulp and I will probably use it again in a web development project in the future.

##### 6. Image loading problem
Not until I deployed the website on the internet did I realize this serious issue: **it took too long to load the images on my website**. While developing, I always view my website at my local environment, where the loading issue won't be a big problem cause internet was not involved. The first method I tried was to crop and downsize the image. Though the loading performance slightly enhance after the first attempt, is was still not fast enough. Again, thanks to the internet, I found the potential solution in some articles about [Progressive Image Loading](https://www.sitepoint.com/how-to-build-your-own-progressive-image-loader/). I finally solved the problem by implementing the method mentioned in the article.
<br>
