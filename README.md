# Moody

A calming web app that uses the OpenAI API that generates a positive affirmation based on your current mood. Users can vent no regrets, take a moment to breathe, and get support if they need it.

![Moody in Mobile and Desktop](/appImage.png?raw=true "Apps in Devices")

## Project Status

Production is finished for this app! Made this app for an application challenge and was so happy with what I created by the deadline. Although there are small things I'd like to change, the overall app is finished!

## Description

With this app users can input their current mood in one word, and be given a positive task they can do based on it. Users can also vent their frustrations on Moody without a care, and go through a deep breathing exercise when need be. With numbers on the website, users can also get serious help if they need it.

### Technologies Used

- Vanilla JavaScript (DOM Manipulation, event listeners, async/await, fetch, map, join)
- HTML and CSS
- OpenAI API
- Swup.js
- GSAP
- SVG Animations

## Challenges

### OpenAI API

- What an API! This was my first time using an AI before and found out very quickly how endless the possibilities were.
- With this particular API a prompt had to be given in order to get a response, I found it tricky to word out a prompt in a good way to get consistent results.
- My solution to this was only allowing the user to input one word in order to get a response. Their input would be used in a template literal in a prompt sentence I had already created!

### Swup.js

- Why I used Swup - I wanted this web app to feel just like an app, so I eliminated any scrolling and made my pages fit to each viewport exactly. Doing this also meant I didn't want page changes to entirely refresh the screen. Enter Swup.js!
- Updating JavaScript - Since Swup simply swaps the content in a container from page to page, updating JavaScript became a little problem to solve. In order to update the js on each page I had to create page initializer functions that would run whenever the page content changed, this part was a bit nervewracking, but I'm proud I figured it out
- While making the app I wasn't able to figure out how I could update the active nav button on desktop, but now that I've talked through being able to initialize the js for each page... I think I might've figured it out!

### SVG Animations with GSAP

- When I get frustrated, deep breaths are able to really calm me down. Sometimes anyway... So I decided to add a deep breath animation to use some SVG animation skills using GSAP.
- This proved a tad bit tricky, and after I while I almost gave up... But was able to get some help from a past teacher of mine. With her help I was able to make the animation run once!
- Resetting the page - I struggled working out a way to make the entire page run again using GSAP. After even more frustration I decided to head over to the GSAP forum. I found myself there a lot trying to answer my own questions by looking at other peoples', but it was finally time to ask my own!
- [You can check out my question here if you'd like!](https://greensock.com/forums/topic/32318-dynamic-values-with-nested-timelines-and-animations-only-playing-once-on-click/#comment-161746)
- Asking for help - This part of the project really showed me how beneficial it is to ask for help. I'm used to trying and trying until I get sick of my problem, but I can cut out some extra frustration if I reach out to the people around me! Thank you internet!

### Linking Pages

- This problem, terrified me. After uploading this project to my own website, I found out that none of my links were on the right path to my projects root folder! Truly a fight or flight moment, running around VS Code trying to get everything linked together before anyone went to this projects web page.
- This also showed me how having multiple HTML files made changing nav links, script links, and stylesheet links... so... very... painful...
- Solution - Not having a separate file for everything! I think this also could be solved by learning React... I'm coming for you frameworks!

### Timing

- I'm really grateful for this project. Not sure if I mentioned it above, but this was a project made for an internship application.
- It had been a really long time since I had worked under a tight deadline, this project showed me what I can create under pressure, I'm really proud of what I was able to do.

## Live Demo

[Check it out here!](https://danacarroll.com/moody)

### Thank you.

#### If you made it this far, thank you for reading. This project really showed me what I can do, and I feel like this is only the beginning!
