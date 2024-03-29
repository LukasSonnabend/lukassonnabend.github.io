---
title:  "Wordle Clone"
teaser: "Wordle implementation without daily limit"
published: '4. August 2022'
thumbnail: '/images/wordle.png'
technology: ['Next.js', 'Heroku', 'Jest', 'TailwindCSS']
github: "https://github.com/LukasSonnabend/wordle-clone-nextjs-ts"
demo: "https://endless-wordle.netlify.app/"
---

# Client/Server Wordle Clone

In the wake of the 2022 wordle craze I decided to create a clone of the original wordle app which doesn't have a daily limit. I created this version in german for my father who is a wordle enthusiast.

There were two problems I faced while creating this app:

1. Finding a list of german 5-letter words

2. ~Deploying the application to heroku~ 

Update 2023-23-06:
On November 28, 2022 Heroku announced that they will be shutting down their free tier for new applications. This means that the application is no longer available on heroku.

2. Deploying the application to netlify

After some research I found the following resource:

- [Comprehesive german word list](https://gist.github.com/MarvinJWendt/2f4f4154b8ae218600eb091a5706b5f4/revisions)

This is also the first time I used typescript together with nextjs and jest for testing. Which was a good idea because it is a good way to test how to backend was evaluating the guesses.

The original wordle keeps all code on the client making it very easy (with a bit of javascript knowledge) to find out which word is the word of the day. I decided to create a client/server version of the wordle app. The server picks a random word from the word list and sends its id to the client. To check the guessed word the client always has to send the id with the guess to the client. When the word is guessed correctly a knew word is picked from the list and the id is sent to the client. This makes technically much harder to "hack" the game.


<div class="flex" style="justify-content: space-around">
  <img class="w-3/12" height="500px" src="/images/wordle-1.png" alt="Wordle clone Screenshot">
</div>
<br/>