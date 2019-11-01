.. qnum::
   :prefix:  16-3-
   :start: 1

StringCoder - Part A
===============================

..	index::
	single: StringPart
    single: free response

The following is a free response question from 2008.  It was question 2 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 2.** Consider a method of encoding and decoding words that is based on a *master string*. This master string
will contain all the letters of the alphabet, some possibly more than once. An example of a master string is
``"sixtyzipperswerequicklypickedfromthewovenjutebag"``. This string and its indexes are
shown below.

.. figure:: Figures/StringCoderEx.png
    :align: center
    :figclass: align-center

    Figure 1: An example string with indices
    
An encoded string is defined by a list of string parts. A string part is defined by its starting index in the
master string and its length. For example, the string ``"overeager"`` is encoded as the list of string parts
[ (37, 3), (14, 2), (46, 2), (9, 2) ] denoting the substrings ``"ove"``, ``"re"``, ``"ag"``, and ``"er"``.

String parts will be represented by the ``StringPart`` class shown below.

.. code-block:: java

   public class StringPart
   {
      /** @param start the starting position of the substring in a master string
        * @param length the length of the substring in a master string
        */
      public StringPart(int start, int length)
      { /* implementation not shown */ }
      
      /** @return the starting position of the substring in a master string
        */
      public int getStart()
      { /* implementation not shown */ }
      
      /** @return the length of the substring in a master string
       */
      public int getLength()
      { /* implementation not shown */ }

      // There may be other instance variables, constructors, and methods 
   }
   
The class ``StringCoder`` provides methods to encode and decode words using a given master string. When
encoding, there may be multiple matching string parts of the master string. The helper method ``findPart`` is
provided to choose a string part within the master string that matches the beginning of a given string.

.. code-block:: java

   public class StringCoder
   {
      private String masterString;
      
      /** @param master the master string for the StringCoder
        * Precondition: the master string contains all the letters of the alphabet
        */
      public StringCoder(String master)
      { masterString = master; }
      
      /** @param parts an ArrayList of string parts that are valid in the 
        * master string
        * Precondition: parts.size() > 0
        * @return the string obtained by concatenating the parts of the 
        *  master string
        */
      public String decodeString(ArrayList<StringPart> parts)
      { /* to be implemented in part (a) */ }
      
      /** @param str the string to encode using the master string
        * Precondition: all of the characters in str appear in the master 
        * string;
        * str.length() > 0
        * @return a string part in the master string that matches the 
        * beginning of str.
        * The returned string part has length at least 1.
        */
      private StringPart findPart(String str)
      { /* implementation not shown */ }
      
      /** @param word the string to be encoded
        * Precondition: all of the characters in word appear in the 
        * master string;
        * word.length() > 0
        * @return an ArrayList of string parts of the master string 
        * that can be combined to create word
        */
      public ArrayList<StringPart> encodeString(String word)
      { /* to be implemented in part (b) */ }
      
      // There may be other instance variables, constructors, and methods
    }
    
Try and Solve It
----------------

**Part a.**  Finish writing the ``StringCoder`` method ``decodeString``. This method retrieves the substrings in the master
string represented by each of the ``StringPart`` objects in parts, concatenates them in the order in
which they appear in parts, and returns the result.

The code below contains a main method for testing the ``decodeString`` method. 

.. activecode:: StringCoderA
   :language: java
   
   import java.util.*;
   
   class StringPart
   {
      private int start;
      private int len;
  
      public StringPart(int theStart, int theLen)
      {
         // initialise instance variables
         start = theStart;
         len=theLen;
      }
      
      public StringPart()
      {
         start = 0;
         len = 0;
      }
  
      public int getStart()
      {
         return start;
      }
  
      public int getLength()
      {
        return len;
      }
      
      public String toString()
      {
        return "(" + getStart() + ", " + getLength() + ")";
      }
   }
   
   public class StringCoder
   {
  
      private String masterString;
  
      /**
        * Constructor for objects of class StringCoder
        */
      public StringCoder()
      {
         masterString="sixtyzipperswerequicklypickedfromthewovenjutebag";
      }
      
      public StringCoder(String master)
      {
         masterString=master;
      }
  
      /** @param parts an ArrayList of string parts that are 
        * valid in the master string
        * Precondition: parts.size() > 0
        * @return the string obtained by concatenating the parts 
        * of the master string
        */
      public String decodeString(ArrayList<StringPart> parts)
      {
         //*** Finish writing this method! ***
      }
      
      private StringPart findPart(String str)
      {
         int start=0;
         int length=0;
         for (int len=1; len<=str.length(); len++)
         {
            int found=masterString.indexOf(str.substring(0,len));
            if (found!=-1)
            {
               start=found;
               length=len;
            }
          }
          return new StringPart(start, length);
      }
  
      public static void main(String[] args)
      {
         ArrayList<StringPart> overeager = new ArrayList<StringPart>();
         overeager.add(new StringPart(37,3));
         overeager.add(new StringPart(14,2));
         overeager.add(new StringPart(46,2));
         overeager.add(new StringPart(9,2));
         System.out.println("overeager is encoded as " + overeager);
         StringCoder key = new StringCoder();
         System.out.println("Decoding we get " + key.decodeString(overeager) + " and should be overeager");
      }
  
   }

   