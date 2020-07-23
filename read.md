1. Install Jasmine to test the system
2. Get the controller, view and lib file hooked up
3. Create JS Backend bowling logic
2. Design HTML File
3. Build Controller

5. Write Readme
6. Build an HTML & CSS file

# Core Functionality
* Score input for each frame
* store the score input and return the game score
* Calculator to sum up the score

Input | Output
(1,1) -> 2
(1,9) -> 10
(0,0) -> 0
(10,0) -> 10
(10,1) -> throw error
(2,10) -> throw error

(1,1) & (1,1) -> 4
(10,0) & (1,1) -> 14
(9,1) & (1,1) -> 13



* First input
  * second input
  -> submit
    * calculate score (if previous is a strike then: double the input, if a spare: double the first input);
        * final frame ()

Class: create a game class
* class has a set of frames properties (1-10)
  * each frame has 3 properties (1st, 2nd, strike or spare)
    * if in the 10th frame has 4 properties

* functions: 
  * add function to add the scores from each score submit to the game
  * sum function to calculate the scores
  * track the performance of the game using cookies
  
