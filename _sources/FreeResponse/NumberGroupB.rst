.. qnum::
   :prefix:  16-12-
   :start: 1

NumberGroup - Part B
===============================

..	index::
	single: NumberGroup
    single: free response

**Part b.**  A range represents a number group that contains all (and only) the integers between a minimum value and
a maximum value, inclusive.
Write the ``Range`` class, which is a ``NumberGroup``. The ``Range`` class represents the group of ``int`` values that range from a given minimum value up through a given maximum value, inclusive. For example, the declaration ``NumberGroup range1 = new Range(-3, 2);`` represents the group of integer values -3, -2, -1, 0, 1, 2.

Write the complete ``Range`` class. Include all necessary instance variables and methods as well as a constructor that takes two ``int`` parameters. The first parameter represents the minimum value, and the second parameter represents the maximum value of the range. You may assume that the minimum is less than or equal to the maximum. Write the contains method which returns true or false if a given int argument is within the range set up by the constructor.

Try and Solve It
----------------

Complete the class ``Range`` below with instance variables, a constructor, and a contains method.

The code below has a main method for testing the ``NumberGroup`` method.

.. activecode:: NumberGroupB
   :language: java

   class NumberGroup 
   { 
      /* Implementation not shown */
   }
   
   public class Range extends NumberGroup
   {
       //Write the instance variables for the Range class here
       
       // Write the Range constructor with 2 parameters
       // for the minimum and maximum values in the range


       // Write the contains method which tests whether a 
       // given number is in the range.
    
       //Main method to test the class
       public static void main(String[] args)
       {
           System.out.println("This is testing the constructor");
           Range test = new Range(5, 8);
           // Test the contains method
           System.out.println("Does the range contain 4 (should be false): " + test.contains(4));
           System.out.println("Does the range contain 5 (should be true): " + test.contains(5));
		       
       } // end of main

   } // end of class
