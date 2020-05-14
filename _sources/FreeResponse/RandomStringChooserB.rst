.. qnum::
   :prefix:  16-2-
   :start: 1

RandomStringChooser - Part B
===============================

..	index::
	single: RandomLetterChooser
    single: free response

**Part b.**   The following partially completed ``RandomLetterChooser`` class is a subclass of the ``RandomStringChooser`` class.  You will write the constructor for the ``RandomLetterChooser`` class.

.. code-block:: java

   public class RandomLetterChooser extends RandomStringChooser
   {
       /** Constructs a random letter chooser using the given string str.
        *  Precondition: str contains only letters.
        */
       public RandomLetterChooser (String str)
       { /* to be implemented in part (b) */ }

       /** Returns an array of single-letter strings.
        *  Each of these strings consists of a single letter from str.  Element k
        *  of the returned array contains the single letter at position k of str.
        *  For example, getSingleLetters("cat") return the
        *  array {"c", "a", "t" }.
        */
       public static String[] getSingleLetters(String str)
       {    /* implementation not shown */ }


The following code segment shows an example of using ``RandomLetterChooser``.


.. code-block:: java

   RandomLetterChooser letterChooser = new RandomLetterChooser("cat");
   for (int k = 0; k < 4; k++)
   {
       System.out.print(letterChooser.getNext());
   }

The code segment will print the three letters in ``"cat"`` in one of the possible orders.  Because there are only three letters in the original string, the code segment prints ``"NONE"`` the fourth time through the loop.  One posible output is shown below.


.. code-block:: java

   actNONE

Assume that the ``RandomStringChooser`` class that you wrote in part (a) has been implemented correctly and that
``getSingleLetters`` works as specified.  You must use ``getSingleLetters`` appropriately to receive full credit.

Complete the ``RandomLetterChooser`` constructor below.  The following code block shows the construtor declaration.

.. code-block:: java

    /** Constructs a random letter chooser using the given string str.
     *  Precondition: str contains only letters.
     */
    public RandomLetterChooser(String str)

Try and Solve It
----------------

Complete the ``RandomLetterChooser`` constructor below.

The code below has a main method for testing.  Write the constructor for the ``RandomLetterChooser`` class and use the main method to test it.

.. datafile:: RandomStringChooser.java
   :hide:

   import java.util.List;
   import java.util.ArrayList;
   
   public class RandomStringChooser
   {
       /* field */
       private List<String> words;

       /* constructor */
       public RandomStringChooser(String[] wordArray)
       {
           words = new ArrayList<String>();

           for (String singleWord : wordArray)
           {
               words.add(singleWord);
           }
       }

       /* getNext method */
       public String getNext()
       {
           int pos = 0;

           if (words.size() > 0)
           {
               pos = (int) (Math.random() * words.size());

               return words.remove(pos);
           }
           return "NONE";
        }
   }

.. activecode:: RandomStrChooserB1
   :language: java
   :datafile: RandomStringChooser.java

   import java.util.List;
   import java.util.ArrayList;

   public class RandomLetterChooser extends RandomStringChooser
   {
       /** Constructs a random letter chooser using the given string str.
        *  Precondition: str contains only letters.
        */
       public RandomLetterChooser (String str)
       {
         //*** write the constructor here ***!
       }

       /** Returns an array of single-letter strings.
        *  Each of these strings consists of a single letter from str.  Element k
        *  of the returned array contains the single letter at position k of str.
        *  For example, getSingleLetters("cat") return the
        *  array {"c", "a", "t" }.
        */
       public static String[] getSingleLetters(String str)
       {
          String[] strArr = new String[str.length()];
          for (int i = 0; i < str.length(); i++)
          {
             strArr[i] = str.substring(i, i+1);
          }
          return strArr;
       }

       public static void main(String[] args)
       {
           RandomLetterChooser letterChooser = new RandomLetterChooser("cat");
           System.out.println("This should print three letters at random from cat and then NONE");
           for (int k = 0; k < 4; k++)
           {
               System.out.print(letterChooser.getNext());
           }
        }
   }
