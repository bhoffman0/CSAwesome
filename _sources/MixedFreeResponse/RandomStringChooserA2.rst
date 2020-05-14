.. qnum::
   :prefix:  17-2-
   :start: 1

RandomStringChooser - Part A
===============================

..	index::
	  single: RandomStringChooser
    single: free response

The following is a free response question from 2016.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 1.** This question involves the implementation and extension of a ``RandomStringChooser`` class.

**Part a.**   A ``RandomStringChooser`` object is constructed from an array of non-null ``String`` values.  When the object is first constructed,
all of the strings are considered available.  The ``RandomStringChooser`` class has a ``getNext`` method, which has the following behavior.  A call to ``getNext`` returns a randomly chosen string from the available strings
in the object.  Once a particular string has been returned from a call to ``getNext``, it is no longer available to be returned from subsequent calls to ``getNext``.  If no strings are available to be returned, ``getNext`` returns ``"NONE``.

The following code segment shows an example of the behavior of ``RandomStringChooser``.


.. code-block:: java

   String[] wordArray = {"wheels", "on", "the", "bus"};
   RandomStringChooser sChooser = new RandomStringChooser(wordArray);
   for (int k = 0; k < 6; k++)
   {
      System.out.println(sChooser.getNext() + " ");
   }

One possible output is shown below.  Because ``sChooser`` has only four strings, the string ``"NONE`` is printed twice.

.. code-block:: java

   bus the wheels on NONE NONE


Try and Solve It - Again
----------------------------

Now that you have had practice with mixed up code, write the entire ``RandomStringChooser`` class again. Your implementation must include an appropriate constructor and any necessary methods.  Any instance variables must be ``private``.  The code segment in the example above should have the indicated behavior (that is, it must compile and produce a result like the possible output shown.  Neither the constructor or any of the methods should alter the parameter passed to the constructor, but your implementation may copy the contents of the array.

The code below has comments to help you get started.  It also has a main method for testing.  Finish writing the class and use the main method to test it.

.. activecode:: RandomStrChooserA1-2
   :language: java

   import java.util.List;
   import java.util.ArrayList;

   // Declare the RandomStringChooser class

   {

       /** Declare any fields (instance variables) **/

       /** Declare any constructors */

       /** Write the getNext method */

       /** This is a main method for testing the class */
       public static void main(String[] args)
       {
           System.out.println("It should print the words in the array in a random order and then NONE twice");
           String[] wordArray = {"wheels", "on", "the", "bus"};
           RandomStringChooser sChooser = new RandomStringChooser(wordArray);
           for (int k = 0; k < 6; k++)
           {
              System.out.println(sChooser.getNext() + " ");
           }

        } // end of main

   } // end of class
