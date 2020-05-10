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

<br>
\<-- unfinished --\>