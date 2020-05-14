.. qnum::
   :prefix: 3-3-
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
    
Two-way Selection: if-else Statements
======================================

What if you want to pick between two possibilities?  If you are trying to decide between a couple of things to do, you might flip a coin and do one thing if it lands as heads and another if it is tails.  In programming, you can use the **if** keyword followed by a statement or block of statements and then the **else** keyword also followed by a statement or block of statements.  

   
.. code-block:: java

    // A block if/else statement    
    if (boolean expression)  
    {
       statement1;
       statement2;
    }
    else 
    {
       do other statement;
       and another one;
    }

.. code-block:: java

    // A single if/else statement
    if (boolean expression)
        Do statement;
    else
        Do other statement;

The following flowchart demonstrates that if the condition (the boolean expression) is true, one block of statements is executed, but if the condition is false, a different block of statements inside the else clause is executed.  

.. figure:: Figures/Condition-two.png
    :width: 350px
    :align: center
    :figclass: align-center

    Figure 1: The order that statements execute in a conditional with 2 options: if and else

.. note::

   The else will only execute if the condition is false.   




.. activecode:: lccb2
   :language: java
   
   Try the following code. If ``isHeads`` is true it will print ``Let's go to the game`` and then ``after conditional``.  
   ~~~~
   public class Test2
   {
      public static void main(String[] args)
      {
        boolean isHeads = true;
        if (isHeads) 
        {
            System.out.println("Let's go to the game");
        }
        else 
        {
            System.out.println("Let's watch a movie");
        }
        System.out.println("after conditional");
      }
   } 
   


|Exercise| **Check your understanding**

.. fillintheblank:: 3_3_1_falseElse

   Try changing the code above to ``boolean isHeads = false;``.  What line will be printed before the ``after conditional``?

   -    :^Let's watch a movie$: Correct.  If the boolean value is false, the statement following the else will execute
        :.*: Try it and see
        




If/else statements can also be used with relational operators and numbers like below. If your code has an if/else statement, you need to test it with 2 test-cases to make sure that both parts of the code work.

|CodingEx| **Coding Exercise**

.. activecode:: licenseifelse
   :language: java
   
   Run the following code to see what it prints out when the variable age is set to the value 16. Change the variable age's value to 15 and then run it again to see the result of the print statement in the else part. 
   Can you change the if-statement to indicate that you can get a license at age 15 instead of 16? Use 2 test cases for the value of age to test your code to see the results of both print statements. Then, change the boolean expression to match the laws of your state.
   ~~~~
   public class DriversLicenseTest
   {
      public static void main(String[] args)
      {
        int age = 16;
        if (age >= 16) 
        {
            System.out.println("You can get a driver's license in most states!");
        }
        else 
        {
            System.out.println("Sorry, you need to be older to get a driver's license.");
        }
      }
   } 


.. parsonsprob:: ifelseevenOdd
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:
   
   The following program should print out "x is even" if the remainder of x divided by 2 is 0 and "x is odd" otherwise, but the code is mixed up.   Drag the blocks from the left and place them in the correct order on the right.  Click on <i>Check Me</i> to see if you are right. 
   -----
   public class EvenOrOdd
   {
   =====
      public static void main(String[] args)
      {
      =====
        int x = 92;
        =====
        if (x % 2 == 0) 
        =====
        {
            System.out.println("x is even");
        }
            =====    
        else
        =====
        {
            System.out.println("x is odd");
        }
            =====
       }
       =====
    }


|CodingEx| **Coding Exercise**



.. activecode:: scoreifelse
   :language: java
   
   Try the following code. Add an else statement to the if statement that prints out "Good job!" if the score is greater than 9. Change the value of score to test it. Can you change the boolean test to only print out "Good job" if the score is greater than 20?
   ~~~~
   public class ScoreTest
   {
      public static void main(String[] args)
      {
        int score = 8;
        if (score <= 9) 
        {
            System.out.println("Try for a higher score!");
        }
      }
   } 



Nested Ifs and Dangling Else
----------------------------

If statements can be nested inside other if statements. Sometimes with nested ifs we find a **dangling else** that could potentially belong to either if statement. The rule is that the else clause will always be a part of the closest if statement in the same block of code, regardless of indentation. 

.. code-block:: java

    // Nested if with dangling else
    if (boolean expression)
       if (boolean expression)
          Do statement;
       else  // belongs to closest if
          Do other statement;
        
        
|CodingEx| **Coding Exercise**



.. activecode:: danglingelse
   :language: java
   
   Try the following code with a dangling else. Notice that the indentation does not matter. How could you get the else to belong to the first if statement?
   ~~~~
   public class DanglingElseTest
   {
      public static void main(String[] args)
      {
         boolean sunny = true;
         boolean hot = false;
         if (sunny)
            if (hot)
                System.out.println("Head for the beach!");
          else // Which if is else attached to?? 
           System.out.println("Bring your umbrella!");
      }
   } 

You can use curly brackets { } to enclose a nested if and have the else clause belong to the the top level if clause like below:

.. code-block:: java

    // Nested if with dangling else
    if (boolean expression) 
    {
       if (boolean expression)
          do this;
    }
    else  // belongs to first if
      do that statement;


.. Here's a more complex program that uses nested ifs to guess a number between 1 and 4. This program uses the **divide and conquer** technique called **binary search**, and we will come up with a better way to code this once we learn about loops in the next unit. 

.. .. raw:: html

    <iframe height="500px" width="100%"  style="max-width:90%; margin-left:5%" src="https://repl.it/@BerylHoffman/GuessingWithIfs?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


.. .. fillintheblank:: 3_3_2_test_cases

   How many test cases do you need to test all the different branching possibilities in the program above?  
   
   -    :5: That's right. Count all the possible answers. There are 5 different possibilities.
        :.*: Try it and see

|Groupwork| Programming Challenge : 20 Questions
------------------------------------------------

.. image:: Figures/questionmark.jpg
    :width: 100
    :align: left
    
    
.. |Akinator| raw:: html

   <a href="https://en.akinator.com/" style="text-decoration:underline" target="_blank">Akinator</a>

We encourage you to work in pairs for this challenge which is on repl.it (you will need an account there if you want to save your version).

Have you ever played 20 Questions? 20 Questions is a game where one person thinks of an object and the other players ask up to 20 questions to guess what it is.

There is great online version called |Akinator| that guesses whether you are thinking of a real or fictional character by asking you questions. Akinator is a simple Artificial Intelligence algorithm that uses a decision tree of yes or no questions to pinpoint the answer. 
Although Akinator needs a very large decision tree, we can create a  guessing game for animals using a much smaller number of if-statements.

The |Animal Guessing program| below uses the following decision tree:

.. figure:: Figures/decision-tree.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 2: Animal Guessing Game Decision Tree
    
.. |Animal Guessing program| raw:: html

    <a href="https://repl.it/@BerylHoffman/GuessAnimal" target="_blank" style="text-decoration:underline">Animal Guessing program</a>

1. Try the |Animal Guessing program| below and run it a couple times thinking of an animal and answering the questions with y or n for yes or no. Did it guess your animal? Probably not! It's not very good. It can only guess 3 animals. Let's try to expand it!

2. In the very last else clause, the program knows that it is not a mammal and it guesses a bird. Let's add to that part. (You may want to click on Open in Repl.it on the top right of the window and then click on Sign up or Log in to save your work). Instead of saying "I guess a bird! Click on run to play again.", change it to ask a question that distinguishes between birds and reptiles (for example does it fly?). Then, get their response and use an if statement to guess "bird" or "turtle" (or another reptile). For example, here's how we decided to choose between a dog or an elephant. We asked the question "Is it a pet?", got the response, and then with an if statement on the y/n answer we determined dog or elephant. You would use similar code to distinguish between a bird and a turtle. Run your code and test both possibilities!

.. code-block:: java

      System.out.println("Is it a pet (y/n)?");
      answer = scan.nextLine();
      if (answer.equals("y")) {
           System.out.println("I guess a dog! Click on run to play again.");
       }
       else {
           System.out.println("I guess an elephant! Click on run to play again.");
       }

3. Did you notice that when it asked "Is it a pet?" and you said "y", it immediately guessed "dog"? What if you were thinking of a cat? Try to come up with a question that distinguishes dogs from cats and put in code in the correct place (in place of I guess a dog) to ask the question, get the answer, and use an if/else to guess cat or dog. Run your code and test both possibilities!

4. How many animals can your game now guess? How many test-cases are needed to test all branches of your code?

5. If your class has time, your teacher may ask you to expand this game or to create a similar game to guess something else like singers or athletes. Spend some time planning your questions on paper and drawing out the decision tree before coding it. 

.. raw:: html

    <iframe height="650px" width="100%" style="max-width:90%; margin-left:5%" src="https://repl.it/@BerylHoffman/GuessAnimal?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

.. shortanswer:: challenge3-3-IfElse-20Questions

   After you complete your code on repl, paste in a link to it (click on share) here.
   
   
Summary
-------

- If statements can be followed by an associated **else** part to form a 2-way branch:

.. code-block:: java

    if (boolean expression) {
        Do statement;
    }
    else {
        Do other statement;
    }

- A two way selection (if/else) is written when there are two sets of statements: one to be executed when the Boolean condition is true, and another set for when the Boolean condition is false. 

- The body of the "if" statement is executed when the Boolean condition is true, and the body of the "else" is executed when the Boolean condition is false.

- Use 2 test-cases to find errors or validate results to try both branches of an if/else statement.

- The else statement attaches to the closest if statement. 