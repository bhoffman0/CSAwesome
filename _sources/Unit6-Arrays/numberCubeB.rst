.. qnum::
   :prefix: 6-4-7-
   :start: 1

Free Response - Number Cube B
=============================

..      index::
      single: numbercubeb
    single: free response

The following is a free response question from 2009.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 1.**  A statistician is studying sequences of numbers obtained by repeatedly tossing a six-sided number cube. On each side of the number cube is a single number in the range of 1 to 6, inclusive, and no number is repeated on the cube. The statistician is particularly interested in runs of numbers. A run occurs when two or more consecutive tosses of the cube produce the same value. For example, in the following sequence of cube tosses, there are runs starting at positions 1, 6, 12, and 14.

.. figure:: Figures/numberLine.png
    :width: 757px
    :align: center
    :figclass: align-center

.. code-block:: java

   public class NumberCube
   {
       /** @return an integer value between 1 and 6, inclusive
        */
       public int toss()
       { /* implementation not shown */ }

       // There may be instance variables, constructors, and methods not shown.
   }

**Part b.** Write the method ``getLongestRun`` that takes as its parameter an array of integer values representing a
series of number cube tosses. The method returns the starting index in the array of a run of maximum size. A
run is defined as the repeated occurrence of the same value in two or more consecutive positions in the
array.  In the example array shown above there are two runs of length 4.  One starts at index 6 and one at index 14.  The method
may return either of those indicies.  

If there are no runs of any value, the method returns -1.

How to Solve
----------------
You are going to need to keep track of the current run length, the maximum run length, the index where the max run started (which should start at -1).  You want to compare one value to an adjacent value 
so you will need to be careful that you don't go out of bounds.  If you find two values that are adjacent that are equal then increment the current run length and set the start index.  If the two adjacent values
are not equal then reset the current run length to 0.  Return the starting index of the maximum length run.

Mixed Up Code
-------------------
.. parsonsprob:: NumberCubeB
   :numbered: left
   :adaptive:

   The method getLongestRun below contains the correct code for one solution to this problem, but it is mixed up.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
   -----
   public static int getLongestRun(int[] values)
   {
       int currentLen = 0;
       int maxLen = 0;
       int maxStart = -1;
   =====
       for (int i = 0; i < values.length-1; i++)
       {
   =====
           if (values[i] == values[i+1])
           {
   =====
               currentLen++;
               if (currentLen > maxLen)
               {
                   maxLen = currentLen;
                   maxStart = i - currentLen + 1;
               }
   =====
           } else {
               currentLen = 0;
           }
   =====
       } // end for
       return maxStart;
   =====
   } // end method


Try and Solve Part B
--------------------

Write the method ``getLongestRun`` that takes as its parameter an array of integer values representing a series of number cube tosses. The method returns the starting index in the array of a run of maximum size. A run is defined as the repeated occurrence of the same value in two or more consecutive positions in the array.

.. activecode:: FRQNumberCubeB
   :language: java

   public class NumberCube
   {

       public static int getLongestRun(int[] values)
       {
           // Complete this method
       }

       public static void main(String[] args){
           int[] values = {3, 5, 6, 6, 3, 6, 4, 4, 4, 2, 6, 4, 1, 1, 1, 1};
           int longestRunIdx = getLongestRun(values);

           if(longestRunIdx != 12){
              System.out.println("Your code does not return the correct index.");

              if(longestRunIdx == 2 || longestRunIdx == 6)
                  System.out.println("It is returning the start index of a run, but that run is not the longest.");

              System.out.println("Remember that your code must return the start index of the longest run of tosses.");
           } else {
              System.out.println("Looks like your code works well!");
           }
       }
   }
