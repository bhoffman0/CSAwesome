.. qnum::
   :prefix: 8-14-
   :start: 1

Free Response - String Scramble B
-----------------------------------

..	index::
	single: string scramble
    single: free response
    
The following is part b of a free response question from 2014.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.  

**Question 1.**  This question involves reasoning about strings made up of uppercase letters. You will implement two related methods that appear in the same class (not shown). The first method takes a single string parameter and returns a scrambled version of that string. The second method takes a list of strings and modifies the list by scrambling each entry in the list. Any entry that cannot be scrambled is removed from the list.

**Part b.** Write the method ``scrambleOrRemove``, which replaces each word in the parameter ``wordList`` with its scrambled version and removes any words that are unchanged after scrambling.  The relative order of the words in ``wordList`` remains the same as before the call to ``scrambleOrRemove``.

The following example shows how the contents of ``wordList`` would be modified as a result of calling ``scrambleOrRemove``.

.. figure:: Figures/stringScrambleB.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 1: Example call and result
    
Assume that the method ``scrambleWord`` works as intended and is in the same class.  It will return the scrambled word or the same word.  You will write the ``scrambleOrRemove`` method to replace each original word with the scrambled word or remove the word if it was not scrambled.   

.. code-block:: java 
   
   import java.util.List;
   import java.util.ArrayList;

   public class ScrambledStrings
   {

      /** Modifies wordList by replacing each word with its scrambled
        *  version, removing any words that are unchanged as a result of scrambling.
        *  @param wordList the list of words
        *  Precondition: wordList contains only non-null objects
        *  Postcondition:
        *   - all words unchanged by scrambling have been removed from wordList
        *   - each of the remaining words has been replaced by its scrambled version
        *   - the relative ordering of the entries in wordList is the same as it was
        *        before the method was called
        */
      public static void scrambleOrRemove(List<String> wordList)
      {
         /* to be implemented in part b */
      }
 
   }
    
How to solve this problem
===========================

In the example the first word (at index 0) ``TAN`` is scrambled and replaced.  The second word ``ABRACADABRA`` (at index 1) is scrambled and replaced.  The third word ``WHOA`` (at index 2) is removed.  The fourth word ``APPLE`` (at index 3) is scrambled and replaced.  The fifth word ``EGGS`` (at index 4) is removed since the scrambled word is the same as the original.  

What method of List allows you to replace an element in a list?  What method of list allows you to remove an element from a list?   How can you loop through a list and not always increment the current index?

.. figure:: Figures/stringScrambleB.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 2: Example call and result

The Algorithm
===========================

Loop through the list and scramble the current word.  If the scrambled word and original are equal then remove the word from the list and otherwise replace it.  We will have to be careful since the size of the list can change in the loop.  If we remove an element all the other elements will shift left.  
We will only want to increment the index if the word was replaced and not removed.

Mixed Up Code
================

.. parsonsprob:: StringScrambleB1
  :numbered: left
  :adaptive:
   
  The method test below contains the correct code for one solution to this problem, but it is mixed up.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  
  -----
  public static void test(List<String> wordList) {
  =====
    int i = 0;
    while (i < wordList.size()) {
  =====
       String current = wordList.get(i);
       String scrambled = scrambleWord(current);
  =====
       if (scrambled.equals(current)) 
  =====
          wordList.remove(i);
  =====
       else
       {
  =====
          wordList.set(i,scrambled);
  =====
          i++;
  =====
       } // end else
  =====
    } // end while
  =====
  } // end method
  
Another way to solve this problem is to start at the end of the list and loop towards the front of the list.  That way you don't have to worry about the index being off if you remove an item from the list.
  
.. parsonsprob:: StringScrambleB2
  :numbered: left
  :adaptive:
   
  The method test below contains the correct code for another solution to this problem, but it is mixed up.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  
  -----
  
  public static void test(List<String> wordList) {
  =====
     for (int i = wordList.size() - 1; i >= 0; i--) {
  =====
        String word = wordList.get(i);
  =====
        String scrambled = scrambleWord(word);
  =====
        if (!scrambled.equals(word))
  =====
          wordList.set(i, scrambled);
  =====
        else
  =====
          wordList.remove(i);
  =====
     } // end for
  =====
  } // end method


Try and Solve It
=================== 

Write the method ``scrambleOrRemove`` below. The main has code to test the result.

.. activecode:: frqScrambleOrRemove
   :language: java
   
   import java.util.List;
   import java.util.ArrayList;

   public class ScrambledStrings
   {
  
      /** Scrambles a given word.
        *  @param word the word to be scrambled
        *  @return the scrambled word (possibly equal to word)
        *  Precondition: word is either an empty string or contains only uppercase letters.
        *  Postcondition: the string returned was created from word as follows:
        *   - the word was scrambled, beginning at the first letter and continuing from left to right
        *   - two consecutive letters consisting of "A" followed by a letter that was not "A" were swapped
        *   - letters were swapped at most once
        */
      public static String scrambleWord(String word)
      {
         String scrambled = "";
         int i = 0;
    
         while (i < word.length())
         {
            String letter1 = word.substring(i, i+1);
            String letter2 = "";
            if (i < word.length() - 1)
            letter2 = word.substring(i+1, i+2);

            if (letter1.equals("A") && !letter2.equals("A") && !letter2.equals(""))
            {
               scrambled += letter2 + letter1;
               i += 2;
            }
            else
            {
               scrambled += letter1;
               i += 1;
            }
        }
        return scrambled;
      }

      /********************** Part (b) *********************/

      /** Modifies wordList by replacing each word with its scrambled
        *  version, removing any words that are unchanged as a result of scrambling.
        *  @param wordList the list of words
        *  Precondition: wordList contains only non-null objects
        *  Postcondition:
        *   - all words unchanged by scrambling have been removed from wordList
        *   - each of the remaining words has been replaced by its scrambled version
        *   - the relative ordering of the entries in wordList is the same as it was
        *        before the method was called
        */

      public static void scrambleOrRemove(List<String> wordList)
      {
    
      }

      /********************** Test *********************/
  
      public static void main(String[] args)
      {

         System.out.println("\nTesting Part (b):\n");

         String[] words2 = {"TAN", "ABRACADABRA", "WHOA", "APPLE", "EGGS"};
         ArrayList<String> wordList = new ArrayList<String>();
         for (String word : words2)
            wordList.add(word);
         System.out.print(wordList);
         scrambleOrRemove(wordList);
         System.out.println(" ==> " + wordList);
      }  
   }




   

     
  
  