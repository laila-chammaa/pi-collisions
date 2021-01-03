Demo: https://laila-chammaa.github.io/pi-collisions/

compute the digits of Pi using the "collisions" method, thanks to 3Blue1Brown for the idea! [deployed]

based off of this video (thanks to 3Blue1Brown for the idea!): https://www.youtube.com/watch?v=HEfHFsfGXjs


There are two balls, A and B. Ball A has a larger mass and is initially moving. It collides with ball B such that ball B speeds up and ball A slows down just a little bit (this is a perfectly elastic collision). After this, ball B starts moving toward the wall and eventually bounces off it back toward ball A for another collision. This continues until ball A is moving away from the wall instead of toward it, and there are no longer any collisions.

Now for the pi part. If you know that the mass of ball A is 100 times greater than that of ball B, there will be 31 collisions. If the ratio of masses is 10,000 to 1, there will be 314 collisions. Yes, that is the first 3 digits of pi. If you had a mass ratio of 1 million to 1, you would get 3,141 collisions. (Remember the first few digits of pi are 3.1415 …) In general, if you want "d" digits of pi, then you need mass A divided by mass B to be 100 raised to the d-1 power.

