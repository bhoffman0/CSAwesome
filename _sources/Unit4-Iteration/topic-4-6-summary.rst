.. qnum::
   :prefix: 4-6-
   :start: 1
   
Unit 4 Summary
==============

In this chapter you learned about **loops**.  **Loops** are used to repeat a statement or block of statements inside a pair of curly braces.

..	index::
    single: loop
    single: body of a loop
    single: while loop
    single: nested loop
    single: for loop
    single: trace code
    single: out of bounds error



Concept Summary
---------------


- **Body of a Loop** - The single statement or a block of statements that *can* be repeated (a loop may not execute at all if the condition is false to start with). In Java the body of the loop is either the first statement following a ``while`` or ``for`` loop is the body of the loop or a block of statements enclosed in ``{`` and ``}``.  
- **For Loop** - A loop that has a header with 3 optional parts: initialization, condition, and change.  It does the initialization one time before the body of the loop executes, executes the body of the loop if the condition is true, and executes the change after the body of the loop executes before checking the condition again.
- **Infinite Loop** - A loop that never ends. 
- **Loop** - A way to repeat one or more statements in a program.
- **Nested Loop** - One loop inside of another.  
- **Out of Bounds error** - A run-time error that occurs when you try to access past the end of a string or list in a loop.  
- **Trace Code** - Writing down the values of the variables and how they change each time the body of the loop executes.
- **While Loop** - A loop that repeats while a Boolean expression is true.

Java Keyword Summary
--------------------

- **while** - used to start a while loop
- **for** - used to start a for loop or a for each loop
- **System.out.println(variable)** - used to print the value of the variable.  This is useful in tracing the execution of code and when debugging.

Vocabulary Practice
-------------------

.. dragndrop:: ch6_loops1
    :feedback: Review the summaries above.
    :match_1: a loop that repeats while a Boolean condition is true|||while loop
    :match_2: a loop that has three parts: initialization, condition, and change|||for loop
    :match_3: one loop inside of another|||nested loop
    
    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct
    
.. dragndrop:: ch6_loops2
    :feedback: Review the summaries above.
    :match_1: the statement or block of statements following a loop header that is repeated|||body of a loop
    :match_2: a loop that never ends|||infinite loop
    :match_3: writing down the values of variables for each execution of the loop body|||trace code
    
    Drag the definition from the left and drop it on the correct method on the right.  Click the "Check Me" button to see if you are correct.
    

.. |Quizlet| raw:: html

   <a href="https://quizlet.com/434072046/cs-awesome-unit-4-vocabulary-flash-cards/" target="_blank" style="text-decoration:underline">Quizlet</a>


For more practice, see this |Quizlet|.

Common Mistakes
-----------------

  -  Forgetting to change the thing you are testing in a ``while`` loop and ending up with an infinite loop.  
  
  -  Getting the start and end conditions wrong on the ``for`` loop. This will often result in you getting an **out of bounds error**.  An **out of bounds** error occurs when you try to access past the end of a string.  
  
  -  Jumping out of a loop too early by using one or more return statements inside of the loop.    
 
 
Here is an example of a while loop that doesn't ever change the value in the loop so it never ends.  If you run it refresh the page to stop it.  Fix it.
 
 .. activecode:: while_loop_mistake1
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
          int x = 3;
          while (x > 0)
          {
             System.out.println(x);
          }
      }
   }
   
Here is an example of going past the bounds of a string.  This code should double all but the first and last letter in message.  Fix the code so that it doesn't cause an out of bounds an error.

 .. activecode:: while_loop_oob
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
          String result = "";
          String message = "watch out";
          int pos = 0;
          while (pos < message.length())
          {
             result = result + message.substring(pos,pos+2);   
             pos = pos + 1;       
          }
          System.out.println(result);
      }
   }
   
Here is an example of jumping out of a loop too early.  The code below is intended to test if all of the letters in a string are in ascending order from left to right. But, it doesn't work correctly.  Can you fix it?

 .. activecode:: while_loop_early_leave
   :language: java
   
   public class Test
   {
   
      public static boolean isInOrder(String check)
      {
          int pos = 0;
          while (pos < check.length() - 1)
          {
             if (check.substring(pos, pos+1).compareTo(check.substring(pos+1, pos+2)) < 0)
                return true;
             pos++;
          }
          return false;
      }
      
      public static void main(String[] args)
      {
         System.out.println(isInOrder("abca"));
         System.out.println(isInOrder("abc"));
          
      }
   }
   

   

   
