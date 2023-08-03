.. qnum::
   :prefix: 1-5-
   :start: 1

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


.. index::
    single: operators
    pair: math; operators
    pair: operators; addition
    pair: operators; subtraction
    pair: operators; multiplication
    pair: operators; division
    pair: operators; equality
    pair: operators; inequality

.. raw:: html

   <div class="unit-time">
     <svg xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi
          bi-clock"
          viewBox="0 0 16 16">
       <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
       <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
     </svg> Time estimate: 45 min.
   </div>

Compound Assignment Operators
=============================

Compound assignment operators are shortcuts that do a math operation and assignment in one step. For example, ``x += 1`` adds 1 to the current value of ``x`` and assigns the result back to ``x``. It is the same as ``x = x + 1``. This pattern is possible with any operator put in front of the ``=`` sign, as seen below.

+------------+------------+-----------+----------+----------+
|\+ shortcuts|\- shortcuts|\* shortcut|/ shortcut|% shortcut|
+============+============+===========+==========+==========+
|x = x + 1;  |x = x - 1;  |x = x * 2; |x = x / 2;|x = x % 2;|
+------------+------------+-----------+----------+----------+
|x += 1;     |x -= 1;     |x \*\= 2;  |x /= 2;   |x %= 2;   |
+------------+------------+-----------+----------+----------+
|x++;        |x\- \-;     |           |          |          |
+------------+------------+-----------+----------+----------+

The most common shortcut operator ``++``, the plus-plus or **increment** operator, is used to add 1 to the current value; ``x++`` is the same as ``x += 1`` and the same as ``x = x + 1``. It is a shortcut that is used a lot in loops. If you've heard of the programming language C++, the ++ in C++ is an inside joke that C has been incremented or improved to create C++. The ``--`` decrement operator is used to subtract 1 from the current value: ``y--`` is the same as ``y = y - 1``. These are the only two double operators; this shortcut pattern does not exist with other operators. Run the following code to see these shortcut operators in action!

.. activecode:: lcpp
   :language: java
   :autograde: unittest

   Run the code below to see what the ++ and shorcut operators do. Click on the Show Code Lens button to trace through the code and the variable values change in the visualizer. Try creating more compound assignment statements with shortcut operators and work with a partner to guess what they would print out before running the code.
   ~~~~
   public class Test2
   {
       public static void main(String[] args)
       {
           int score = 0;
           System.out.println(score);
           score++;
           System.out.println(score);
           score *= 2;
           System.out.println(score);
           int penalty = 5;
           score -= penalty / 2;
           System.out.println(score);
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "0\n1\n2\n0";

           boolean passed =
                   getResults(expect, output, "Expected output from main", true);
           assertTrue(passed);
       }
   }

.. note::

   On the exam you can use ``x++`` or ``++x`` to add one to the value of ``x``.  These two shortcuts only have different results if you assign the value of ``x`` to another variable as in ``int y = ++x;`` (where the value of x is incremented before y is set to it) or ``int y = x++;`` (where y is set to a copy of x's value before x is incremented).  The AP exam will never use a shortcut in an assignment statement, so you don't need to worry about the difference between ``++x`` or ``x++``.


|Exercise| **Check Your Understanding**


.. mchoice:: q3_4_3
   :practice: T
   :answer_a: x = -1, y = 1, z = 4
   :answer_b: x = -1, y = 2, z = 3
   :answer_c: x = -1, y = 2, z = 2
   :answer_d: x = 0, y = 1, z = 2
   :answer_e: x = -1, y = 2, z = 4
   :correct: e
   :feedback_a: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.
   :feedback_b: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.
   :feedback_c: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.
   :feedback_d: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.
   :feedback_e: This code subtracts one from x, adds one to y, and then sets z to to the value in z plus the current value of y.

   What are the values of x, y, and z after the following code executes?

   .. code-block:: java

     int x = 0;
     int y = 1;
     int z = 2;
     x--;
     y++;
     z+=y;

.. mchoice:: q3_4_4
   :practice: T
   :answer_a: x = 6, y = 2.5, z = 2
   :answer_b: x = 4, y = 2.5, z = 2
   :answer_c: x = 6, y = 2, z = 3
   :answer_d: x = 4, y = 2.5, z = 3
   :answer_e: x = 4, y = 2, z = 3
   :correct: e
   :feedback_a: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).
   :feedback_b: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).
   :feedback_c: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).
   :feedback_d: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).
   :feedback_e: This code sets x to z * 2 (4), y to y divided by 2 (5 / 2 = 2) and z = to z + 1 (2 + 1 = 3).

   What are the values of x, y, and z after the following code executes?

   .. code-block:: java

     int x = 3;
     int y = 5;
     int z = 2;
     x = z * 2;
     y = y / 2;
     z++;

|Groupwork| Code Tracing Challenge and Operators Maze
-----------------------------------------------------

Use paper and pencil or the question response area below to trace through the following program to determine the values of the variables at the end.

**Code Tracing** is a technique used to simulate a dry run through the code or pseudocode line by line by hand as if you are the computer executing the code. Tracing can be used for debugging or proving that your program runs correctly or for figuring out what the code actually does.

Trace tables can be used to track the values of variables as they change throughout a program. To trace through code, write down a variable in each column or row in a table and keep track of its value throughout the program. Some trace tables also keep track of the output and the line number you are currently tracing.

.. figure:: Figures/traceTable.png
    :width: 150px
    :align: center
    :figclass: align-center

or

.. figure:: Figures/traceInline.png
    :width: 220px
    :align: center
    :figclass: align-center

Trace through the following code:

.. code-block:: java

     int x = 0;
     int y = 5;
     int z = 1;
     x++;
     y -= 3;
     z = x + z;
     x = y * z;
     y %= 2;
     z--;

.. shortanswer:: challenge1-5

   Write your trace table for x, y, and z here showing their results after each line of code.

.. |Operators Maze game| raw:: html

   <a href="https://docs.google.com/document/d/1ZjA8oKeo8FYx2nXX4OOq5lUihopIQQ_HY-eoE5yZkk8/edit?usp=sharing" target="_blank" style="text-decoration:underline">Operators Maze game</a>



After doing this challenge, play the |Operators Maze game|. See if you and your partner can get the highest score!

Summary
-------------------

- Compound assignment operators (+=, -=, \*=, /=, %=) can be used in place of the assignment operator.
- The increment operator (``++``) and decrement operator (``--``) are used to add 1 or subtract 1 from the stored value of a variable. The new value is assigned to the variable.
- The use of increment and decrement operators in prefix form (i.e., ++x) and inside other expressions (i.e., arr[x++]) is outside the scope of this course and the AP Exam.
