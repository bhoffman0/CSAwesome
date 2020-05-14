.. qnum::
   :prefix: 9-11-
   :start: 1

Free Response - Gray Image B
-------------------------------

..	index::
	single: gray image
    single: free response
    
The following is part b of a free response question from 2012.  It was question 4 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.  

**Question 4.**  A grayscale image is represented by a 2-dimensional rectangular array of pixels (picture elements). A pixel is an integer value that represents a shade of gray. In this question, pixel values can be in the range from 0 through 255, inclusive. A black pixel is represented by 0, and a white pixel is represented by 255. The declaration of the ``GrayImage`` class is shown below.

.. code-block:: java 

   public class GrayImage
   {
      public static final int BLACK = 0;
      public static final int WHITE = 255;

      /** The 2-dimensional representation of this image. 
       *  Guaranteed not to be null.
       *  All values in the array are within the range 
       *  [BLACK, WHITE], inclusive.
       */
      private int[][] pixelValues;

      /** Processes this image in row-major order and 
       *  decreases the value of each pixel at position (row, col) 
       *  by the value of the pixel at position (row + 2, col + 2) 
       *  if it exists.
       * Resulting values that would be less than BLACK are replaced 
       *   by BLACK.
       * Pixels for which there is no pixel at 
       *   position (row + 2, col + 2) are unchanged.
       */
      public void processImage() 
      { /* to be implemented in part (b) */ }  
   }

**Part b.**  Write the method ``processImage`` that modifies the image by changing the values in the instance variable ``pixelValues`` according to the following description. The pixels in the image are processed one at a time in row-major order. Row-major order processes the first row in the array from left to right and then processes the second row from left to right, continuing until all rows are processed from left to right. The first index of ``pixelValues`` represents the row number, and the second index represents the column number.

The pixel value at position (row, col) is decreased by the value at position (row + 2, col + 2) if such a position exists. If the result of the subtraction is less than the value ``BLACK``, the pixel is assigned the value of ``BLACK``. The values of the pixels for which there is no pixel at position (row + 2, col + 2) remain unchanged. You may assume that all the original values in the array are within the range [``BLACK``, ``WHITE``], inclusive.

The following diagram shows the contents of the instance variable ``pixelValues`` before and after a call
to ``processImage``. The values shown in boldface represent the pixels that could be modified in a
grayscale image with 4 rows and 5 columns.

.. figure:: Figures/grayImageB.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 1: Example before and after a call to processImage

.. code-block:: java 
   
   public class GrayImage
   {
      public static final int BLACK = 0;
      public static final int WHITE = 255;

      /** The 2-dimensional representation of this image. 
       *  Guaranteed not to be null.
       *  All values in the array are within the range 
       *  [BLACK, WHITE], inclusive.
       */
      private int[][] pixelValues;

      /** Processes this image in row-major order and 
       *  decreases the value of each pixel at position (row, col) 
       *  by the value of the pixel at position (row + 2, col + 2) 
       *  if it exists.
       * Resulting values that would be less than BLACK are replaced 
       *   by BLACK.
       * Pixels for which there is no pixel at 
       *   position (row + 2, col + 2) are unchanged.
       */
      public void processImage() 
      { /* to be implemented in part (b) */ }  
   }
    
How to solve this problem
===========================

Once again, this problem starts with looping through the array of pixels, using a nested for loop for the 2D array. As we loop we will need to subtract pixel values from one another.

.. mchoice:: frgib_1
   :answer_a: result = int1 - int2;
   :answer_b: int1 -= int2;
   :answer_c: int1.subtract(int2);
   :correct: b
   :feedback_a: While the syntax here is correct, there's an even simpler way to execute subtraction that doesn't create a new variable.
   :feedback_b: The "-=" syntax correct subtracts int2 from int1, without creating an additional variable, which is ideal in our solution for this problem.
   :feedback_c: Because the pixels are of primitive type "int,"  there is not subtract() method which can be executed in this case.

   Which is the simplest way to subtract one integer value from another integer value?

.. |Java visualizer| raw:: html

    <a href= "http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test%0A%7B%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B%5D%5B%5D+values+%3D+%7B%7B9,+8,+7,+6,+5%7D,%0A+++++++++++++++++++++++%7B7,+6,+5,+4,+3%7D,%0A+++++++++++++++++++++++%7B4,+3,+2,+1,+0%7D,%0A+++++++++++++++++++++++%7B4,+3,+2,+1,+0%7D%7D%3B%0A+++++for+(int+i+%3D+0%3B+i+%3C+values.length%3B+i%2B%2B)%0A+++++%7B%0A+++++++for+(int+j+%3D+0%3B+j+%3C+values%5Bi%5D.length%3B+j%2B%2B)%0A+++++++%7B%0A+++++++++System.out.print(values%5Bi%5D%5Bj%5D+-+values%5Bi%2B2%5D%5Bj%2B2%5D)%3B%0A+++++++%7D%0A+++++++System.out.println()%3B%0A+++++%7D%0A+++%7D%0A%7D&mode=display&curInstr=6" style="text-decoration:underline" target="_blank" >Java Visualizer</a>
   

When comparing our pixel values to values deeper in the array, we need to be careful to correctly set the terminating conditions on the for loops. The code below prints out the pixel value at position (row, col) after it is decreased by the value at position (row + 2, col + 2), but what if (row+2,col+2) is beyond the array bounds? Can you fix the terminating conditions of the loops so that we do not go beyond the array bounds? You can step through the code using the |Java Visualizer|.

.. activecode:: lcfrgib3
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
        int[][] values = { {9, 8, 7, 6, 5}, 
                          {7, 6, 5, 4, 3}, 
                          {4, 3, 2, 1, 0}, 
                          {4, 3, 2, 1, 0}};
        for (int i = 0; i < values.length; i++)
        {
          for (int j = i; j < values[i].length; j++)
          {
            System.out.print(values[i][j] - values[i+2][j+2]);
          }
          System.out.println();
        }
      }
   } 
   
 

Try to write the code for the method ``processImage``. When you are ready click "Run" to test your solution.   
   
.. activecode:: lcfrgib4
   :language: java
   
   public class GrayImage
   {
      public static final int BLACK = 0;
      public static final int WHITE = 255;

      /** The 2-dimensional representation of this image. 
       *  Guaranteed not to be null.
       *  All values in the array are within the range 
       *  [BLACK, WHITE], inclusive.
       */
      private int[][] pixelValues;
      
      /** constructor that takes a 2D array */
      public GrayImage(int[][] theArray)
      {
         pixelValues = theArray;
      }

      /** Processes this image in row-major order and 
       *  decreases the value of each pixel at position (row, col) 
       *  by the value of the pixel at position (row + 2, col + 2) 
       *  if it exists.
       * Resulting values that would be less than BLACK are replaced 
       *   by BLACK.
       * Pixels for which there is no pixel at 
       *   position (row + 2, col + 2) are unchanged.
       */
      public void processImage() 
      {
        
      }

      public void printValues()
      {
        for (int r = 0; r < pixelValues.length; r++)
        {
          for (int c = 0; c < pixelValues[0].length; c++)
          {
            System.out.print(pixelValues[r][c] + ", ");
          }
          System.out.println();
        }
      }

      /** main for testing */
      public static void main (String[] args)
      {
        int[][] values = { {221, 184, 178, 84, 135}, 
                          {84, 255, 255, 130, 84}, 
                          {78, 255, 0, 0, 78}, 
                          {84, 130, 255, 130, 84}};
        GrayImage image = new GrayImage(values);
        image.printValues();
        image.processImage();
        System.out.println("after process image");
        image.printValues(); 
      }
   }
    
Video - One way to code the solution
=====================================

.. the video is 2012Q4B2.mov  

The following video is also on YouTube at https://youtu.be/8j34xQkjsJI.  It walks through coding a solution.

.. youtube:: 8j34xQkjsJI
    :width: 800
    :align: center


