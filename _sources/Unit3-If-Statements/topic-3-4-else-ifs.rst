.. qnum::
   :prefix: 3-4-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4
   
   
.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork
    
Multi-Selection: else-if Statements
===================================

Using if/else statements, you can even pick between 3 or more possibilites. Just add **else if** for each possibility after the first **if**, and **else** before the last possibility.  

.. code-block:: java

    // 3 way choice with else if
    if (boolean expression)
    {
       statement1;
    }
    else if (boolean expression)
    {
       statement2;
    }
    else  
    {
       statement3;
    }
    
|CodingEx| **Coding Exercise**



.. activecode:: lccbElseIf
   :language: java
   
   Run the code below and try changing the value of x to get each of the three possible lines in the conditional to print.
   ~~~~
   public class TestElseIf
   {
      public static void main(String[] args)
      {
        int x = 2;
        if (x < 0) 
        {
          System.out.println("x is negative");
        }
        else if (x == 0) 
        {      
           System.out.println("x is 0");
        }
        else 
        {
          System.out.println("x is positive");
        }
        System.out.println("after conditional");
      }
   }

Here is a flowchart for a conditional with 3 options like in the code above. 

.. figure:: Figures/Condition-three.png
    :width: 450px
    :align: center
    :figclass: align-center

    Figure 1: The order that statements execute in a conditional with 3 options: if, else if, and else
    
.. note:: 

    Another way to handle 3 or more conditional cases is to use the ``switch`` and ``break`` keywords, but these will not be on the exam.  For a tutorial on using switch see https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html.


|Exercise| **Check your understanding**

.. mchoice:: qcb3_4_1
   :practice: T
   :answer_a: x is negative
   :answer_b: x is zero
   :answer_c: x is positive
   :correct: a
   :feedback_a: When x is equal to -5 the condition of x < 0 is true. 
   :feedback_b: This will only print if x has been set to 0.  Has it?
   :feedback_c: This will only print if x is greater than zero.  Is it?

   What does the following code print when x has been set to -5?
   
   .. code-block:: java 

     if (x < 0) 
     {
        System.out.println("x is negative");
     }
     else if (x == 0) 
     {
        System.out.println("x is zero"); 
     }
     else
     {
        System.out.println("x is positive"); 
     }
     
.. mchoice:: qcb3_4_2
   :practice: T
   :answer_a: x is negative
   :answer_b: x is zero
   :answer_c: x is positive
   :correct: c
   :feedback_a: This will only print if x has been set to a number less than zero. Has it? 
   :feedback_b: This will only print if x has been set to 0.  Has it?
   :feedback_c: The first condition is false and x is not equal to zero so the else will execute.  

   What does the following code print when x has been set to 2000?
   
   .. code-block:: java 

     if (x < 0) 
     {
        System.out.println("x is negative");
     }
     else if (x == 0)
     {
        System.out.println("x is zero"); 
     }
     else
     {
        System.out.println("x is positive"); 
     }
     
.. mchoice:: qcb3_4_3
   :practice: T
   :answer_a: first quartile
   :answer_b: second quartile
   :answer_c: third quartile
   :answer_d: fourth quartile
   :correct: d
   :feedback_a: This will only print if x is less than 0.25.
   :feedback_b: This will only print if x is greater than or equal to 0.25 and less than 0.5.
   :feedback_c: The first only print if x is greater than or equal to 0.5 and less than 0.75.
   :feedback_d: This will print whenever x is greater than or equal to 0.75.

   What does the following code print when x has been set to .8?
   
   .. code-block:: java 

     if (x < .25) 
     {
         System.out.println("first quartile");
     }
     else if (x < .5) 
     {
         System.out.println("second quartile"); 
     }
     else if (x < .75) 
     {
         System.out.println("third quartile");
     }
     else 
     {
         System.out.println("fourth quartile");
     }
 
|CodingEx| **Coding Exercise**



.. activecode:: lccbIfDebug
   :language: java
   
   The else-if connection is necessary if you want to hook up conditionals together. In the following code, there are 4 separate if statements instead of the if-else-if pattern. Will this code print out the correct grade? First, trace through the code to see why it prints out the incorrect grade. Then, fix the code by adding in 3 else's to connect the if statements and see if it works.
   ~~~~
   public class IfDebug
   {
      public static void main(String[] args)
      {
        int score = 93;
        String grade = "";
        
        if (score >= 90) 
        {
            grade = "A";
        }
        if (score >= 80) 
        {
            grade = "B";
        }
        if (score >= 70) 
        {
           grade = "C";
        }
        if (score >= 60) 
        {
            grade = "D";
        }
        else
        {
          grade = "F";
        }
        
        System.out.println(grade);
      }
   }


.. .. mchoice:: qcb3_4_4
   :practice: T
   :answer_a: A
   :answer_b: B
   :answer_c: C
   :answer_d: D
   :answer_e: E
   :correct: d
   :feedback_a: Notice that each of the first 4 statements start with an if so you need to check each one.  What will actually be printed?  Try it in one of the active code windows above.  
   :feedback_b: Each of the first 4 if statements will execute.
   :feedback_c: Check this in active code.
   :feedback_d: Each of the if statements will be executed. So grade will be set to A, then B then C and finally D.  
   :feedback_e: This will only be true when score is less than 60. 	

    What is the value of grade when the following code executes and score is 93?  
   
   .. code-block:: java 

     if (score >= 90) grade = "A";
     if (score >= 80) grade = "B";
     if (score >= 70) grade = "C";
     if (score >= 60) grade = "D";
     else grade = "E";
     
|Groupwork| Programming Challenge : Adventure
---------------------------------------------

.. image:: http://www.spitenet.com/cave/images/AdventureMap.jpg
    :width: 200
    :align: left
    :alt: Adventure map
    
    
.. |Colossal Cave Adventure| raw:: html

   <a href="https://en.wikipedia.org/wiki/Colossal_Cave_Adventure" target="_blank" style="text-decoration:underline">Colossal Cave Adventure</a>
   
.. |playing Adventure| raw:: html

   <a href="http://www.web-adventures.org/cgi-bin/webfrotz?s=Adventure" target="_blank" style="text-decoration:underline">playing Adventure</a>
   
.. |walkthrough| raw:: html

   <a href="http://www.sierrahelp.com/Walkthroughs/AdventureWalkthrough.html#in" target="_blank" style="text-decoration:underline">walkthrough</a>

.. |repl link| raw:: html

   <a href="https://repl.it/@BerylHoffman/Adventure" target="_blank" style="text-decoration:underline">repl link</a>


We encourage you to work in pairs for this challenge which is on repl.it (you will need an account there if you want to save your version).

One of the first games coded for early computers in the 1970s was called |Colossal Cave Adventure|. It was a text-based interactive fiction game where you had to make your way through an elaborate cave. The program only understood one word or phrase commands like north, south, enter, take, etc. You can try |playing adventure| recreated online following some of the commands in this |walkthrough|. Part of the challenge is finding the commands that the code will understand. 

In a game like Adventure, else if statements can be used to respond to commands from the user like n, s, e, w.  

1. Try the program below or with this |repl link|. This is a very simple adventure game that lets the user move in 4 different directions. Right now, it only lets the user move north.

2. Add in **else if** statements to go in the directions of "s" for south and "e" for east, and an else statement that says "You can't go in that direction". Be creative and come up with different situations in each direction. 

2. How many test-cases are needed to test all branches of your code?

3. If your class has time, your teacher may ask you to expand this game further or to come up with a different adventure location. 


.. raw:: html

    <iframe height="650px" width="100%" style="max-width:90%; margin-left:5%" src="https://repl.it/@BerylHoffman/Adventure?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

.. shortanswer:: challenge3-4-ElseIf-20Adventure

   After you complete your code on repl, paste in a link to it (click on share) here.
   
Summary
--------

- A multi-way selection is written when there are a series of conditions with different statements for each condition. 

- Multi-way selection is performed using if-else-if statements such that exactly one section of code is executed based on the first condition that evaluates to true.

.. code-block:: java

    // 3 way choice with else if
    if (boolean expression)
    {
       statement1;
    }
    else if (boolean expression)
    { 
       statement2;
    }
    else  
    {
        statement3;
    }