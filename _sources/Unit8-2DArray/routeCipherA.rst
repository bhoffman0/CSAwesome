.. qnum::
   :prefix:  9-12-
   :start: 1

Free Response - Route Cipher A
==============================

..	index::
	single: routeciphera
    single: free response

The following is a free response question from 2011.  It was question 4 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 4.**  In this question you will write two methods for a class ``RouteCipher`` that encrypts (puts into a coded form) a message by changing the order of the characters in the message. The route cipher fills a two-dimensional array with single-character substrings of the original message in row-major order, encrypting the message by retrieving the single-character substrings in column-major order.

For example, the word "Surprise" can be encrypted using a 2-row, 4-column array as follows.

.. figure:: Figures/routeCipherFig.png
    :width: 544px
    :align: center
    :figclass: align-center

An incomplete implementation of the ``RouteCipher`` class is shown below.

.. code-block:: java

   public class RouteCipher
   {
     /** A two-dimensional array of single-character strings,
      instantiated in the constructor */
     private String[][] letterBlock;

     /** The number of rows of letterBlock, set by the constructor */
     private int numRows;

     /** The number of columns of letterBlock, set by the constructor */
     private int numCols;

     /** Places a string into letterBlock in row-major order.
     *   @param str the string to be processed
     *   Postcondition:
     *     if str.length() < numRows * numCols, "A" in each unfilled cell
     *     if str.length() > numRows * numCols, trailing characters are ignored
     */
     private void fillBlock(String str)
     { /* to be implemented in part (a) */ }

     /** Extracts encrypted string from letterBlock in column-major order.
     *   Precondition: letterBlock has been filled
     *   @return the encrypted string from letterBlock
     */
     private String encryptBlock()
     { /* implementation not shown */ }

     /** Encrypts a message.
     *   @param message the string to be encrypted
     *   @return the encrypted message;
     *           if message is the empty string, returns the empty string
     */
     public String encryptMessage(String message)
     { /* to be implemented in part (b) */ }

     // There may be instance variables, constructors, and methods that are not shown
   }


**Part a.**
Write the method ``fillBlock`` that fills the two-dimensional array ``letterBlock`` with one-character strings from the string passed as parameter ``str``.

The array must be filled in row-major order—the first row is filled from left to right, then the second row is filled from left to right, and so on, until all rows are filled.

If the length of the parameter ``str`` is smaller than the number of elements of the array, the string "A" is placed in each of the unfilled cells. If the length of ``str`` is larger than the number of elements in the array, the trailing characters are ignored.

For example, if ``letterBlock`` has 3 rows and 5 columns and ``str`` is the string "Meet at noon", the resulting contents of ``letterBlock`` would be as shown in the following table.

.. figure:: Figures/routeCipherTable.png
  :width: 158px
  :align: center
  :figclass: align-center

If ``letterBlock`` has 3 rows and 5 columns and ``str`` is the string "Meet at midnight", the resulting contents of ``letterBlock`` would be as shown in the following table.

.. figure:: Figures/routeCipherTable2.png
  :width: 158px
  :align: center
  :figclass: align-center


The following expression may be used to obtain a single-character string at position ``k`` of the string ``str``.

.. code-block:: java

   str.substring(k, k + 1)

How to Solve This
--------------------
1. You will need to access each element in the ``letterBlock`` array. What type of loop will you use?
2. The ``letterBlock`` array has two dimensions. How many loops will you use?
3. Remember the String methods.

The Algorithm
-------------------
.. parsonsprob:: RouteCipherA
  :numbered: left
  :adaptive: 

  The method fillBlock below contains the correct code for one solution to this problem, but it is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
  -----
  private void fillBlock(String str) {
    int pos = 0;
  =====
    for (int r = 0; r < this.numRows; r++ ) {
  =====
        for (int c = 0; c < this.numCols; c++ ) {
  =====
            if (pos < str.length()) {
  =====
                String subStr = str.substring(pos, pos+1);
                this.letterBlock[r][c] = subStr;
                pos++;
  =====
            } else {
                this.letterBlock[r][c] = "A";
            } // end else block
  =====
        } // end inner for
  =====
    } // end outer for
  =====
  } // end method

Solve Part A
------------
Complete the method ``fillBlock`` below.

.. activecode:: FRQRouteCipherA
   :language: java

   public class RouteCipher
   {
     /** A two-dimensional array of single-character strings, instantiated in the constructor */
     public String[][] letterBlock;

     /** The number of rows of letterBlock, set by the constructor */
     private int numRows;

     /** The number of columns of letterBlock, set by the constructor */
     private int numCols;

     public RouteCipher(int r, int c){
      this.letterBlock = new String[r][c];
      this.numRows = r;
      this.numCols = c;
     }

     /** Places a string into letterBlock in row-major order.
     *   @param str the string to be processed
     *   Postcondition:
     *     if str.length() < numRows * numCols, "A" in each unfilled cell
     *     if str.length() > numRows * numCols, trailing characters are ignored
     */
     public void fillBlock(String str){
      // Complete this method
     }

     /** Extracts encrypted string from letterBlock in column-major order.
     *   Precondition: letterBlock has been filled
     *   @return the encrypted string from letterBlock
     */
     private String encryptBlock()
     { return ""; }

     /** Encrypts a message.
     *   @param message the string to be encrypted
     *   @return the encrypted message;
     *           if message is the empty string, returns the empty string
     */
     public String encryptMessage(String message)
     { return ""; }

     public static void main(String[] args){

      boolean test1 = false;
      RouteCipher ciph = new RouteCipher(3, 3);

      ciph.fillBlock("There's 1");

      if((ciph.letterBlock[0][2]).equals("e") && (ciph.letterBlock[2][1]).equals(" "))
        test1 = true;
      else
        System.out.println("Oops! Looks like your code doesn't properly insert the given String.\n");

      if(test1)
        System.out.println("Looks like your code works well!");
      else
        System.out.println("Make a few changes, please.");

     }
   }
