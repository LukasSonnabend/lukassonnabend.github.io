---
title:  "Breakout Android App"
teaser: "A breakout clone which was created for a university assignment"
published: '20. July 2022'
thumbnail: '/images/breakout-thumb.jpg'
technology: ['Java', 'Android Studio']
github: "https://github.com/LukasSonnabend/breakout-android-game"
swiper_slides: [ "/images/breakout-main.jpg", "/images/breakout-ingame.jpg"]
---

# Breakout Android App in Java

For this university assignment I created a breakout clone. The assignment was to write a real-time android game without utilizing a game engine. The game was created with the help of the android studio.

The game was iterativly developed, which was a valuable experience for me. Not only was is my first time working with android studio, but I also my first time really getting into java and android app development.

What started out as a relatively simple game ended up becoming more and more complex for example adding the possibility to stop the game and restart it again. The game thread had to be stopped and because this was not known to be a requirement in the planning phase made the code rather messy.

It was nice to actually use vector mathematics for the slingshot paddle and the angle of impact between the ball and the paddle.

{{carousel}}

To make it easier to create levels I also made a [Level Editor](https://lukassonnabend.github.io/nzse-lvl-gen/) with Vue.js.
