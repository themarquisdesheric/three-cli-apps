# three-cli-apps

A lab to get accustomed to writing primary functionality with TDD and separate from the environment it is hosted in.

### The Three Functions with CLI
 
 #### power-of
 
 Returns first argument to the power of the second argument
 
 ```
 > node power-of.js 3 3
 27
 ```
 
 #### avg 
 
 Returns the average of all supplied arguments
 
 ```
 > node avg.js 3 4 6 0 3
 3.2
 ```
 
 #### day-greet
 
 Take a first argument of name and second argument of 24hr time
 
 ```
 > node day-greet.js marty 14:58
 good afternoon marty
 
 > node day-greet.js marty 8:58
 good morning marty
 
 > node day-greet.js marty 17:01
  good evening marty
  ```
  
 00:00 - 11:59 morning
 
 12:00 - 16:59 afternoon
 
 17:00 - 23:59 night
