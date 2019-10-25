.. qnum::
   :prefix: 3-5-
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
    
.. raw:: html

    <style>    td { text-align: left; } </style>
    
Compound Boolean Expressions
============================

..	index::
	single: and
	single: or
	single: truth table
	pair: logical; and
	pair: logical; or
	pair: conditional; complex

And (&&), Or (||), and Not (!)
--------------------------------

What if you want two things to be true before the body of the conditional is executed?  Use ``&&`` as a logical **and** to join two Boolean expressions and the body of the condition will only be executed only if both are true.  

|CodingEx| **Coding Exercise**



.. activecode:: lccc1
   :language: java

   For example, what if you want to go out and your parents say you could if you clean your room and do your homework?  Run the code below and try different values for ``cleanedRoom`` and ``didHomework`` and see what they have to be for it to print ``You can go out``.
   ~~~~
   public class Test1
   {
      public static void main(String[] args)
      {
        boolean cleanedRoom = true;
        boolean didHomework = false;
        if (cleanedRoom && didHomework) 
        {
            System.out.println("You can go out");
        }
        else 
        {
            System.out.println("No, you can't go out");
        }
      }
   }

What if it is okay if only one of two things is true? Use ``||`` as a logical **or** to join two Boolean expressions and the body of the condition will be executed if one or both are true.  

|CodingEx| **Coding Exercise**


.. activecode:: lccc2
   :language: java
   
   For example, your parents might say you can go out if you can walk or they don't need the car.  Try different values for ``walking`` and ``carIsAvailable`` and see what the values have to be to print ``You can go out``.
   ~~~~
   public class Test2
   {
      public static void main(String[] args)
      {
        boolean walking = true;
        boolean carIsAvailable = false;
        if (walking || carIsAvailable) 
        {
           System.out.println("You can go out");
        }
        else 
        {
          System.out.println("No, you can't go out");
        }
      }
   }

.. note::

    In English, we often use an exclusive-or like in the sentence "do you want to be player 1 *or* player 2?" where you can't be both player 1 and player 2. In programming, the or-operator is an inclusive-or which means that the whole expression is true if either one or the other or *both* conditions are true. 
    
With numerical values, the or-operator is often used to check for error conditions on different ends of the number line, while the and-operator is often used to see if a number is in an range. 

|CodingEx| **Coding Exercise**



.. activecode:: lcccnum
   :language: java
   
   Explore how && and || are used with numbers below. Try different values for score like -10 and 110 in the code below.
   ~~~~
   public class TestNum
   {
      public static void main(String[] args)
      {
        int score = 10; // Try -10 and 110
        if (score < 0 || score > 100) 
        {
            System.out.println("Score has an illegal value.");
        }
        if (score >= 0 && score <= 100) 
        {
            System.out.println("Score is in the range 0-100");
        }
 
      }
   }



The **not** (!) operator can be used to negate a boolean value. We've seen ! before in != (not equal).  In Java, ! has precedence (is executed before) &&, and && has precedence over ||. Parentheses can be used to force the order of execution in a different way. If you mix ! with && and ||, be careful because the results are often the opposite of what you think it will be at first. We'll see examples of this in the next lesson.  

|CodingEx| **Coding Exercise**



.. activecode:: lcccnot
   :language: java
   
   The code below says if homework is not done, you can't go out. Try different values for ``homeworkDone``.
   ~~~~
   public class TestNot
   {
      public static void main(String[] args)
      {
        boolean homeworkDone = false;
        if (!homeworkDone) 
        {
            System.out.println("Sorry, you can't go out!");
        }
      }
   }

.. note::

    In Java, ! will be executed before &&, and && will be executed before ||, unless there are parentheses. Anything inside parentheses is executed first.

Truth Tables
------------

The following table (also called a **truth table**) shows the result for P && Q when P and Q are both expressions that can be true or false. An expression involving logical operators like (P && Q) evaluates to a Boolean value, true or false. As you can see below the result of P && Q is only true if both P and Q are true.  

+-------+-------+-----------+
| P     | Q     | P && Q    |
+=======+=======+===========+
|true   |true   |true       |
+-------+-------+-----------+
|false  |true   |false      |
+-------+-------+-----------+
|true   |false  |?          |
+-------+-------+-----------+
|false  |false  |false      |
+-------+-------+-----------+

|Exercise| **Check your understanding**

.. fillintheblank:: 3_5_1_trueAndFalse

   The truth table above is missing one result.  What is the result of P && Q when ``P=true`` and ``Q=false``?  

   -    :^false$: Correct.  Both values must be true for && to return true.
        :.*: Try it and see
 
The following table shows the result for P || Q when P and Q are both expressions that can be true or false.  As you can see below the result of P || Q is true if either P or Q is true.  It is also true when both of them are true.

+-------+-------+-----------+
| P     | Q     | P || Q    |
+=======+=======+===========+
|true   |true   |true       |
+-------+-------+-----------+
|false  |true   |?          |
+-------+-------+-----------+
|true   |false  |true       |
+-------+-------+-----------+
|false  |false  |false      |
+-------+-------+-----------+

|Exercise| **Check your understanding**

.. fillintheblank:: 3_5_2_falseOrTrue

   The truth table above is missing one result.  What is the result of ``P || Q`` when ``P=false`` and ``Q=true``? 

   -    :^true$: Correct.  Only one of the two has to be true with || so this will print true.
        :.*: Try it and see
 
        

|Exercise| **Check your understanding**


.. mchoice:: qcbc_7
   :practice: T
   :answer_a: first case
   :answer_b: second case
   :correct: a
   :feedback_a: first case will print if both of the conditions are true and they are.  
   :feedback_b: second case will print either of the conditions are false. 

   What is printed when the following code executes and x has been set to 3 and y has been set to 9?  
   
   .. code-block:: java 

     if (x > 0 && (y / x) == 3) 
     {
        System.out.println("first case");
     }
     else
     {
        System.out.println("second case");
     }
     
     
.. mchoice:: qcbc_8
   :practice: T
   :answer_a: first case
   :answer_b: second case
   :correct: b
   :feedback_a: first case will print if both of the conditions are true, but the second is not. 
   :feedback_b: second case will print if either of the conditions are false and the second one is (6 / 3 == 2).

   What is printed when the following code executes and x has been set to 3 and y has been set to 6?  
   
   .. code-block:: java 

     if (x > 0 && (y / x) == 3) 
     {
        System.out.println("first case");
     }
     else
     {
        System.out.println("second case");
     }
     
.. mchoice:: qcbc_or
   :practice: T
   :answer_a: first case
   :answer_b: second case
   :correct: a
   :feedback_a: first case will print if either of the two conditions are true.  The first condition is true, even though the second one isn't.
   :feedback_b: second case will print if both of the conditions are false, but the first condition is true.   

   What is printed when the following code executes and x has been set to 3 and y has been set to 6?  Notice that it is now an **or** (||) instead of and.
   
   .. code-block:: java 

     if (x > 0 || (y / x) == 3) 
     {
        System.out.println("first case");
     }
     else
     {
        System.out.println("second case");
     }
     
Short Circuit Evaluation
------------------------

..	index::
	single: short circuit evaluation
	pair: conditional; short circuit evaluation
  
Both ``&&`` and ``||`` use **short circuit evaluation**.  That means that the second condition isn't necessarily checked if the result from the first condition is enough to tell if the result is true or false.   In a complex conditional with a logical and (``&&``) both conditions must be true, so if the first is false, then the second doesn't have to be evaluated.  If the complex conditional uses a logical or (``||``) and the first condition is true, then the second condition won't be executed, since only one of the conditions needs to be true.    

.. note::

   In a complex conditional using a logical and (``&&``) the evaluation will short circuit (not execute the second condition) if the first condition is false.  In a complex conditional using a logical or (``||``) the evaluation will short circuit if the first condition is true.  
 
|Exercise| **Check your understanding**

.. mchoice:: qcbc_5
   :practice: T
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: b
   :feedback_a: first case will only print if x is greater than 0 and it is not.  
   :feedback_b: second case will print if x is less than or equal to zero or if y divided by x is not equal to 3.  
   :feedback_c: Since the first condition is false when x is equal to zero the second condition won't execute.  Execution moves to the else.    

   What is printed when the following code executes and x has been set to 0 and y to 3?  
   
   .. code-block:: java

     if (x > 0 && (y / x) == 3) 
     {
        System.out.println("first case");
     }
     else
     {
        System.out.println("second case");
     }
     
.. mchoice:: qcb_7sc
   :practice: T
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: a
   :feedback_a: Since x is equal to zero the first expression in the complex conditional will be true and the (y / x) == 3 won't be evaluated, so it won't cause a divide by zero error.  It will print "first case".
   :feedback_b: Since x is equal to zero the first part of the complex conditional is true so it will print first case.
   :feedback_c: You won't get an error because of short circuit evaluation.  The (y / x) == 3 won't be evaluated since the first expression is true and an or is used.  

   What is printed when the following code executes and x has been set to zero and y is set to 3?  
   
   .. code-block:: java 

     if (x == 0 || (y / x) == 3)
     {
        System.out.println("first case");
     }
     else
     {
        System.out.println("second case");
     }
     
.. .. mchoice:: qcb_8sc
   :practice: T
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't use a negative index with substring.   
   :correct: b
   :feedback_a: Since x is negative the complex conditional will be false and the second condition won't execute. Remember that with <code>&&</code> both parts of the condition must be true for the complex conditional to be true.  Using a negative substring index won't cause an error since that code will only be executed if x is greater than or equal to zero.
   :feedback_b: Since x is negative the second part of the complex conditional won't even execute so the else will be executed.  
   :feedback_c: This would be true if it wasn't using short circuit evaluation, but it is.  
   
   What is printed when the following code executes and x has been set to negative 1?   
   
   .. code-block:: java 

     String message = "help";
     if (x >= 0 && message.substring(x).equals("help")) System.out.println("first case");
     else System.out.println("second case");
     
.. .. mchoice:: qcb_9sc
   :practice: T
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: c
   :feedback_a: The first part of the complex conditional is executed first and will cause a divide by zero error. Complex conditionals are executed from left to right as needed.  
   :feedback_b: Since x is equal to zero the evaluation of the first part of the complex conditional will cause a divide by zero error.
   :feedback_c: Since x is equal to zero the evaluation of the first part of the complex conditional will cause a divide by zero error.  You should switch the order of the conditionals to prevent the error because then the first condition would be false and the evaluation would short circuit and not evaluate the second condition. 

   What is printed when the following code executes and x has been set to zero and y is set to 3?  
   
   .. code-block:: java 

     if ((y / x) == 3 || x = 0) System.out.println("first case");
     else System.out.println("second case");
     
     
|Groupwork| Programming Challenge : Truth Tables POGIL
------------------------------------------------------

.. |pogil| raw:: html

   <a href="https://pogil.org/about-pogil/what-is-pogil" target="_blank">POGIL</a>
   
.. |pogil role| raw:: html

   <a href="https://docs.google.com/document/d/1_NfNLWJxaG4qZ2Jd2x8UctDS05twn1h6p-o3XaAcRv0/edit?usp=sharing" target="_blank">POGIL role</a>
   
   
   
We encourage you to do this activity as a |POGIL| (Process Oriented Guided Inquiry Learning) group activity. POGIL groups are self-managed teams of up to 4 students where everyone has a |pogil role| and works together to solve the problems, making sure that everyone in the team participates and learns. 

Explore the following problems with your group:

1. On a piece of paper, draw a Venn diagram of 4 intersecting circles and put the names of the 4 people in your group one in each circle. Write down the age of each person in your group in the circles. If two or more people are the same age, put the age in the intersecting parts of their circles. Write a Boolean expression that compares the age of each person in the group using ==, <, >, and &&, for example Ada's age > Alan's age && Alan's age == Grace's age. Then, ask each person in your group their favorite movie. If two or more people have the same favorite movie, put the movie in the intersecting parts of their circles. Write a Boolean expression that compares the favorite movies in the group using ==, !=, and &&, for example Ada's movie == Alan's movie && Alan's movie != Grace's movie. Think of 1 more comparison and write it in the circles and as a Boolean expression. Share the Boolean expressions with the class. (Thank you to Jill Westerlund of Hoover High School and Art Lopez of Sweetwater High School for this activity suggestion).

2. Write the sentence "If it's sunny, OR if the temperature is greater than 80 and it's not raining, I will go to the beach." as a Java if statement using an int variable ``temperature`` and boolean variables ``sunny`` and ``raining``.  If the conditional is true, print out "Go to the beach!". So, you will go to beach on days that it is sunny in any temperature, or you will go to the beach on days when the temperature is over 80 degrees and it's not raining.

3. Complete a truth table for the if statement that you wrote in #2 with columns for sunny, temperature > 80, raining, and go to the beach.

4. Write Java code below to test your if statement and try all the values in your truth table to see if you filled it out correctly. You will need test case for each of the 8 rows in your truth table, for example when sunny is true and false, when raining is true or false, and for a value of temperature greater than 80, for example 90, and less than 80, for example 60.

.. activecode:: challenge3-5-truthtables
   :language: java
   
   public class TruthTable
   {
      public static void main(String[] args)
      {
         boolean sunny =
         int temperature =
         boolean raining = 
         // Write an if statement for "If it's sunny, 
         //   OR if the temperature is greater than 80 
         //   and it's not raining, (print) I will go to the beach."
         // Test multiple values for variables.
         
      }
   }

Summary
--------

- Logical operators !(not), &&(and), and ||(or) are used with Boolean values. 

- (A && B) is true if both A and B are true.

- (A || B) is true if either A or B (or both) are true.

- !(A) is true if A is false.

- In Java, ! has precedence (is executed before) && which has precedence over ||. Parentheses can be used to force the order of execution in a different way.

- When the result of a logical expression using && or || can be determined by evaluating only the first Boolean operand, the second is not evaluated. This is known as **short-circuit evaluation**.