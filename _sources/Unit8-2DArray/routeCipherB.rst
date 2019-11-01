.. qnum::
   :prefix:  9-13-
   :start: 1

Free Response - Route Cipher B
==============================

..	index::
	single: routecipherb
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

**Part b.**
Write the method ``encryptMessage`` that encrypts its string parameter message. The method builds an encrypted version of message by repeatedly calling ``fillBlock`` with consecutive, non-overlapping substrings of ``message`` and concatenating the results returned by a call to ``encryptBlock`` after each call to ``fillBlock``. When all of ``message`` has been processed, the concatenated string is returned. Note that if ``message`` is the empty string, ``encryptMessage`` returns an empty string.

The following example shows the process carried out if ``letterBlock`` has 2 rows and 3 columns and ``encryptMessage("Meet at midnight")`` is executed.

.. figure:: Figures/routeCipherFig2.png
   :width: 482px
   :align: center
   :figclass: align-center

In this example, the method returns the string "Mte eati dmnitgAhA".

Assume that ``fillBlock`` and ``encryptBlock`` methods work as specified. Solutions that reimplement the functionality of one or both of these methods will not receive full credit.

How to Solve This
--------------------
1. You will need to loop through the message. What type of loop will you use?
2. Remember that you will need to call the ``encryptBlock`` method.

The Algorithm
-------------------
.. parsonsprob:: RouteCipherB
  :numbered: left
  :adaptive:

  The method encryptMessage below contains the correct code for one solution to this problem, but it is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
  -----
  public String encryptMessage(String message) {
    String encryptedMessage = "";
    int chunkSize = this.numRows * this.numCols;
  =====
    while (message.length() > 0) {
  =====
      if (chunkSize > message.length()) {
  =====
        chunkSize = message.length();
  =====
      } // end if
  =====
      fillBlock(message);
      encryptedMessage += encryptBlock();
      message = message.substring(chunkSize);
  =====
    } // end while
  =====
    return encryptedMessage;
  =====
  } // end method

Solve Part B
------------
Complete method ``encryptMessage`` below.

.. activecode:: FRQRouteCipherB
   :language: java

   public class RouteCipher
   {
     /** A two-dimensional array of single-character strings,
     instantiated in the constructor */
     private String[][] letterBlock;

     /** The number of rows of letterBlock, set by the constructor */
     private int numRows;

     /** The number of columns of letterBlock, set by the constructor */
     private int numCols;

     private int counter = 0;

     public RouteCipher(int r, int c){
      letterBlock = new String[r][c];
      this.fillBlock("Meet at midnight");
      this.numRows = r;
      this.numCols = c;
     }

     /** Places a string into letterBlock in row-major order.
     *   @param str the string to be processed
     *   Postcondition:
     *     if str.length() < numRows * numCols, "A" in each unfilled cell
     *     if str.length() > numRows * numCols, trailing characters are ignored
     */
     private void fillBlock(String str)
     {
     int pos = 0;
     for (int r = 0; r < this.numRows; r++ ) {
       for (int c = 0; c < this.numCols; c++ ) {
         if (pos < str.length()) {
           this.letterBlock[r][c] = str.substring(pos, pos+1);
           pos++;
         } else {
           this.letterBlock[r][c] = "A";
         } // end else block
       } // end inner for
     } // end outer for
     }

     /** Extracts encrypted string from letterBlock in column-major order.
     *   Precondition: letterBlock has been filled
     *   @return the encrypted string from letterBlock
     */
     private String encryptBlock()
     {
      return "Mte ea";
     }

     /** Encrypts a message.
     *   @param message the string to be encrypted
     *   @return the encrypted message;
     *           if message is the empty string, returns the empty string
     */
     public String encryptMessage(String message){
      // Complete this method
     }

     public static void main(String[] args){

      RouteCipher ciph = new RouteCipher(2, 3);
      if(ciph.encryptMessage("Meet at midnight").substring(0, 6).equals("Mte ea"))
        System.out.println("Looks like your code works well!");
      else
        System.out.println("Oops! Make a few changes to your code, please.");
     }
   }
