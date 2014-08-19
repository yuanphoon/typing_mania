TYPING MANIA
===========

I like typing. I like typing a lot and it pains me to see people who do 90% of their work on a keyboard, hunt and peck with their index fingers. Imagine how much more productive they could be if they could do all their work in an eigth of the time! And yes, I have seen people with a 10 word per minute typing speed…

This is a fun little game I came up with, mostly to prove to my fellow team members that I could type faster than they. It then grew into a nice little creative project to see whether I could create a fully functioning web app that could really capture the attention of people and engage them.

Currently it is hosted on Heroku and you can play around with it here: http://typing-mania.herokuapp.com/

Deploy to heroku here:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


There is no specific aim to the game just yet. Really it's just kind've a marathon game and if you wanted to, a speed game too.

The game as it is will start once you type start into the field. It will then pick a random word from an array of 5,000 of the most commonly used words in the (US) English dictionary. Once you type out that word, it'll then pick another random word from the same array. Every word will add to the score and that allows the game to work out your WPM by averaging the score/time. The Max WPM is recorded after three words have been typed. This is to prevent gaming of the system for short first words. The Max WPM number is over written every time the WPM value is larger than it.

Big stretch goals are to include various different game modes including a "rush" mode where the time to type a word gets progressivley shorter; a "classic" mode which is to type out a fixed number of fixed length words as rapidly as possible, error free; and a multiplayer mode! Where you can challenge your friends in real time. First one to type the word, gets the point. First one to +10 points wins…or something.

I also need to put some social media stuff on it like tweets and stuff.
