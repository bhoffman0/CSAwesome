.. qnum::
   :prefix:  8-21-
   :start: 1

Free Response - StringFormatter B
-----------------------------------

..	index::
	single: trio
    single: free response
    
The following is a free response question from 2016. It was question 4 part B on the exam. You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year. 

This question involves the process of taking a list of words, called ``wordList``, and producing a formatted string of a specified length. 
The list ``wordList`` contains at least two words, consisting of letters only.  
When the formatted string is constructed, spaces are placed in the gaps between words so that as many spaces as possible are evenly distributed to each gap. 
The equal number of spaces inserted into each gap is referred to as the basic gap width. 
Any leftover spaces are inserted one at a time into the gaps from left to right until there are no more leftover spaces. 

The following three examples illustrate these concepts. In each example, the list of words is to be placed into a formatted string of length 20. 
 
.. figure:: Figures/2016FRQ4A1.png
    :width: 700px
    :align: center
    :figclass: align-center

Part B
=======

(b) Write the ``StringFormatter`` method ``basicGapWidth``, which returns the basic gap width as defined above.

.. figure:: Figures/2016FRQ4B1.png
    :width: 700px
    :align: center
    :figclass: align-center

Assume that ``totalLetters`` works as specified regardless of what you wrote in part (a). 
You must use ``totalLetters`` appropriately to receive full credit.
  
Complete method ``basicGapWidth`` below.

.. code-block:: java 

   /** Returns the basic gap width when wordList is used to produce  
   *  a formatted string of formattedLen characters. 
   *  Precondition: wordList contains at least two words, consisting of letters only. 
   *            formattedLen is large enough for all the words and gaps. 
   */ 
   public static int basicGapWidth(List<String> wordList,                                  
                                    int formattedLen)
   
How to Solve Part B
=====================
   
To calculate ``basicGapWidth`` we need to find the number of spaces left after the characters fill the ``formattedLen`` and divide that 
by the number of gaps between words.  We can use ``totalLetters`` (written in part A) to get the total number of characters for all the strings in ``wordList``. 
The number of gaps between words is the number of words in ``wordList`` minus 1.  The ``basicGapWidth`` is the number of spaces left divided by the number of gaps between words.  Remember that if we do an integer division any fractional part will be thrown away, which is what we want to happen in this case.

For example, if ``formattedLen`` is 20 and ``wordList`` is ["AP", "COMP", "SCI", "ROCKS"] then the number of spaces left is 20 - 14 = 6 and the number of gaps is 4 - 1 = 3.  The result is 6 / 3 = 2. 

If ``formattedLen`` is 20 and ``wordList`` is ["GREEN", "EGGS", "AND", "HAM"] then the number of spaces left is 20 - 15 = 5 and the number of gaps is 4 - 1 = 3 so 5 / 3 = 1.  There will be two extra spaces left over.   

If ``formattedLen`` is 20 and ``wordList`` is ["BEACH", "BALL"] then the number of spaces left is 20 - 9 = 11 and the number of gaps is 2 - 1 = 1 so 11 / 1 = 11.  

Put the Code in Order 
======================

.. parsonsprob:: 2016Q4B
   :numbered: left
   :adaptive: 

   The following has the correct code to solve this problem, but also contains extra code that isn't needed in a correct solution.  Drag the needed blocks from the left into the correct order on the right and indent them as well. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong or are in the wrong order.  You will also be told if the indention is wrong.
   -----
   public static int basicGapWidth(List<String> wordList, 
                                   int formattedLen) 
   =====
   {
   =====
       int numSpaces = formattedLen - totalLetters(wordList);
       int numGaps = wordList.size() - 1;
   =====
       int numSpaces = formattedLen + totalLetters(wordList); #paired
       int numGaps = wordList.length - 1; 
   =====
       return numSpaces / numGaps;
   =====
   }
             
   
Write the Code
==================

Finish writing the ``basicGapWidth`` method below so that it returns the size that the gap should be.  The ``main`` method below will test your code to check that you solved it correctly.
   
.. activecode:: lcfrsbasicGapWidth
   :language: java 
   
   import java.util.*;
   public class StringFormatter
   {
       /** Returns the basic gap width when wordList is used to produce  
       *  a formatted string of formattedLen characters. 
       *  Precondition: wordList contains at least two words, consisting of letters only. 
       *            formattedLen is large enough for all the words and gaps. 
       */ 
       public static int basicGapWidth(List<String> wordList,                                  
                                       int formattedLen) 
       {
       }
       
       public static int totalLetters(List<String> wordList)
       {
           int numLetters = 0; 
           for (String s : wordList)
           {
               numLetters = numLetters + s.length();
           }
           return numLetters;
       }
   
       public static void main(String[] args)
       {
           List<String> wordList = new ArrayList<String>();
           wordList.add("AP");
           wordList.add("COMP");
           wordList.add("SCI");
           wordList.add("ROCKS");
           System.out.println("Should print 2 and prints: " + basicGapWidth(wordList,20));
            
           List<String>words2 = new ArrayList<String>();
           words2.add("GREEN");
           words2.add("EGGS");
           words2.add("AND");
           words2.add("HAM");
           System.out.println("Should print 1 and prints: " + basicGapWidth(words2,20));
           
           List<String>words3 = new ArrayList<String>();
           words3.add("BEACH");
           words3.add("BALL");
           System.out.println("Should print 11 and prints: " + basicGapWidth(words3,20));
       }
   }