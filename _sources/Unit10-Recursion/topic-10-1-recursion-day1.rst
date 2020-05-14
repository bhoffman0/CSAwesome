.. qnum::
   :prefix: 10-1-
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




What is Recursion? (Day 1)
===============================

..	index::
    single: recursion
    pair: recursion; defintion

**Recursion** is when a method calls itself. See the example method below.

.. code-block:: java
  :linenos:

  public static void neverEnd()
  {
    System.out.println("This is the method that never ends!");
    neverEnd();
  }

..	index::
    single: infinite recursion
    pair: recursion; infinite

This method will print out "This is the method that never ends!" and then call itself, which will print out the message again, and then call itself, and so on.  This is called **infinite recursion**, which is a recursion that never ends.  Of course, this particular method is not very useful.

|Exercise| **Check your Understanding**

.. fillintheblank:: recurb1fill

   Which line in the method neverEnd (shown above) contains the recursive call (the call to the same method)?

   -    :4$: Correct.  This line contains a call to the same method, which makes it a recursive method.
        :.*: Look for a call to the same method name


.. mchoice:: qrb_1
   :practice: T
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: Where is the call to the same method?
   :feedback_b: There is no call to the same method, so this can not be a recursive method. It uses iteration instead.

	Is the following method recursive?

    .. code-block:: java
      :linenos:

      public static int mystery()
      {
         int total = 0;
         for (int i=10; i>0; i--)
         {
            total = total + i;
         }
         return total;
      }

.. mchoice:: qrb_2
   :practice: T
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: Yes, any method that contains at least one call to the same method is recursive.
   :feedback_b: Look again.  Check if the method contains a call to itself.

   Is the following method recursive?

    .. code-block:: java
      :linenos:

      public static int mystery2(int x)
      {
         if (x == 1) return 1;
         else return x + mystery2(x-1);
      }



Why use Recursion?
==================

..	index::
    single: fractal
    pair: recursion; purpose

Recursion is most useful when it is used to solve problems where the structure of the problem repeats.  For example, what if you wanted to find out how much space a folder on your computers uses?  You could add up the sizes of all the files in that folder, but folders can also contain subfolders.  So you will have to repeat the procedure (method) for each subfolder.  Each subfolder can also contain subfolders.

Recursion can also be used to create fractals.  A simple example is Sierpinski's triangle in which you subdivide a triangle into 4 new triangles as shown below.  You can then do the some procedure with each new triangle except the center one.

.. figure:: Figures/triangleSub.png
    :width: 452px
    :align: center
    :figclass: align-center

    Figure 1: A sequence of Sierpinski's triangles

Recursion can also be used to traverse String, array, and ArrayList objects, much like a loop. In fact, any recursive solution could be written with iteration (loops) instead. 

Factorial Method
=================

.. the video is Recursion.mov

The following video is also on YouTube at https://youtu.be/V2S_8E_ubBY.  It introduces the concept of recursion and tracing recursion with the factorial method.

.. youtube:: V2S_8E_ubBY
    :width: 800
    :align: center
    
..	index::
    single: factorial

See the method `factorial` below that calculates the **factorial** of a number.  The **factorial** of a number is defined as 1 for 0 and n * factorial (n-1) for any other number.

.. code-block:: java
   :linenos:

   public static int factorial(int n)
   {
       if (n == 0)
           return 1;
       else
           return n * factorial(n-1);
   }

|Exercise| **Check your understanding**


.. fillintheblank:: recurb2fill

   Which line in the method factorial contains the recursive call (the call to the same method)?

   -    :6$: Correct.  This line contains a call to the same method, which makes it a recursive method.
        :.*: Look for a call to the same method name

|CodingEx| **Coding Exercise**



.. activecode:: FactorialTest
   :language: java

   Run the code below to test the factorial method. What's the factorial of 6? Add another test to print out the factorial of 6. What's the factorial of 1? Add another test to print out the factorial of 1.
   ~~~~
   public class FactorialTest
   {

       public static int factorial(int n)
       {
           if (n == 0)
               return 1;
           else
               return n * factorial(n-1);
       }

       public static void main(String[] args)
       {
           System.out.println("factorial of 3 is: " + factorial(3));
           System.out.println("factorial of 4 is: " +factorial(4));
           System.out.println("factorial of 5 is: " +factorial(5));
       }
   }

Base Case
==========

..	index::
    single: base case
    pair: recursion; base case

Every recursive method must have at least one **base case** which halts the recursion. This is usually an if statement that causes the recursion to stop by just giving an answer without needing a recursive method call. You could also think of it as the simplest case where you can give the answer right away. The factorial method has a way to stop the recursion (not call itself).  It stops when n is equal to 0, since it just returns 1. This is the base case.

.. note::

   The thing that stops a recursive method from calling itself is called the **base case**.  A method can have more than one **base case** (way to stop the recursion).

|Exercise| **Check your understanding**

.. clickablearea:: rec_base1
    :question: Click on the line or lines that contain the test for the base case
    :iscode:
    :feedback: When a base case test is true a value is returned and the recursion stops.


    :click-incorrect:public static int factorial(int n):endclick:
    :click-incorrect:{:endclick:
        :click-correct:if (n == 0):endclick:
            :click-incorrect:return 1;:endclick:
        :click-incorrect:else:endclick:
            :click-incorrect:return n * factorial(n-1);:endclick:
    :click-incorrect:}:endclick:
    
.. mchoice:: qrb_3
   :practice: T
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :correct: b
   :feedback_a: Look again.  What is the value of n when this method returns a value, without doing a recursive call?
   :feedback_b: This method stops calling itself when n equals 1 (line 3).
   :feedback_c: Look for a return with a number after it.  When is this code executed?

   What is the value of n when this method stops calling itself (when it reaches the base case)?

    .. code-block:: java
      :linenos:

      public static int product(int n)
      {
         if(n == 1)
            return 1;
         else
            return n * product(n - 2);
      }

.. mchoice:: qrb_4
   :practice: T
   :answer_a: 0
   :answer_b: 1
   :answer_c: Both 0 and 1
   :correct: c
   :feedback_a: This method also stops for another value of n.
   :feedback_b: This method also stops for another value of n.
   :feedback_c: This method stops calling itself when n is either 0 or 1.

   What is/are the values of the variable bunnies when this method stops calling itself (when it reaches the base case)?

    .. code-block:: java
      :linenos:

      public static int bunnyEars(int bunnies)
      {
         if (bunnies == 0) return 0;
         else if (bunnies == 1) return 2;
         else return 2 + bunnyEars(bunnies - 1);
      }


.. mchoice:: qrb_5-new
   :practice: T
   :answer_a: yes
   :answer_b: no
   :correct: b
   :feedback_a: Where is the call to the same method?
   :feedback_b: There is no call to the same method, so it is not recursive. This uses iteration instead.

   Is the following method recursive?

    .. code-block:: java
      :linenos:

      public static int bunnyEars(int bunnies)
      {
         int total = 0;
         for (int i = 0; i < bunnies; i++)
         {
            total = total + 2;
         }
         return total;
      }
      
      
Continue to the next page for Day 2 of the Recursion lesson.