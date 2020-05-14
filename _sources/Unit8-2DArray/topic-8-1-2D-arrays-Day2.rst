.. qnum::
   :prefix: 8-1-
   :start: 8
   
.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork



  
Set Value(s) in a 2D Array (Day 2)
----------------------------------------

..	index::
	pair: 2D Array; initialization
	pair: 2D Array; set value

When arrays are created their contents are automatically initialized to 0 for numeric types, null for object references, and false for type boolean.  To explicitly put a value in an array, you can use assignment statements with the name of the array followed by the row index in brackets followed by the column index in brackets and then an ``=`` followed by a value.  

.. code-block:: java 

  int[][] ticketInfo = new int[2][3];
  ticketInfo[0][0] = 15;
  
  
.. |Java visualizer| raw:: html

   <a href= "http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test+%0A++%7B%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++//+declare+arrays%0A++++++++int%5B%5D%5B%5D+ticketInfo%3B%0A++++++++String%5B%5D%5B%5D+seatingChart%3B%0A++++++++%0A++++++++//+create+arrays%0A++++++++ticketInfo+%3D+new+int+%5B2%5D%5B3%5D%3B%0A++++++++seatingChart+%3D++new+String+%5B3%5D%5B2%5D%3B%0A++++++++%0A++++++++//+initialize+the+array+elements%0A++++++++ticketInfo%5B0%5D%5B0%5D+%3D+15%3B%0A++++++++ticketInfo%5B0%5D%5B1%5D+%3D+10%3B%0A++++++++ticketInfo%5B0%5D%5B2%5D+%3D+15%3B%0A++++++++ticketInfo%5B1%5D%5B0%5D+%3D+25%3B%0A++++++++ticketInfo%5B1%5D%5B1%5D+%3D+20%3B%0A++++++++ticketInfo%5B1%5D%5B2%5D+%3D+25%3B%0A++++++++seatingChart%5B0%5D%5B0%5D+%3D+%22Jamal%22%3B%0A++++++++seatingChart%5B0%5D%5B1%5D+%3D+%22Maria%22%3B%0A++++++++seatingChart%5B1%5D%5B0%5D+%3D+%22Jacob%22%3B%0A++++++++seatingChart%5B1%5D%5B1%5D+%3D+%22Suzy%22%3B%0A++++++++seatingChart%5B2%5D%5B0%5D+%3D+%22Emma%22%3B%0A++++++++seatingChart%5B2%5D%5B1%5D+%3D+%22Luke%22%3B%0A++++++++%0A++++++++//+print+the+contents%0A++++++++System.out.println(ticketInfo)%3B%0A++++++++System.out.println(seatingChart)%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0" style="text-decoration:underline" target="_blank" >Java Visualizer</a>

|CodingEx| **Coding Exercise**

Try the code below. Did it print what you expected?  When you print a two dimensional array you just get the reference to the object. In the next lesson, we'll learn how to use nested loops to print out the whole 2D Array. Right now, use this |Java visualizer| to see what the values are after this code runs. Edit the code in the visualizer to add in an extra row to the seatingChart and add your name and a friend's name in the columns of this extra row using assignment statements.

.. activecode:: 2DArraySet
  :language: java
  
  Add another row of data to the arrays.
  ~~~~
  public class Test 
  {
     public static void main(String[] args)
     {
        // declare arrays
        int[][] ticketInfo;
        String[][] seatingChart;
        
        // create arrays
        ticketInfo = new int [2][3];
        seatingChart =  new String [3][2];
        
        // initialize the array elements
        ticketInfo[0][0] = 15;
        ticketInfo[0][1] = 10;
        ticketInfo[0][2] = 15;
        ticketInfo[1][0] = 25;
        ticketInfo[1][1] = 20;
        ticketInfo[1][2] = 25;
        seatingChart[0][0] = "Jamal";
        seatingChart[0][1] = "Maria";
        seatingChart[1][0] = "Jacob";
        seatingChart[1][1] = "Suzy";
        seatingChart[2][0] = "Emma";
        seatingChart[2][1] = "Luke";
        
        // print the contents
        System.out.println(ticketInfo);
        System.out.println(seatingChart);
     }
  }
  


  
|Exercise| **Check your understanding**

.. mchoice:: qa2dab_1
   :practice: T
   :answer_a: nums[3][2] = 5;
   :answer_b: nums[1][2] = 5;
   :answer_c: nums[2][1] = 5;
   :answer_d: nums[2][3] = 5;
   :correct: c
   :feedback_a: Remember that the indices start at 0.
   :feedback_b: Remember that the row is first then the column.
   :feedback_c: This will set the value  of the 3rd row and 2nd column.
   :feedback_d: Remember that the row is first and then the column and that the indicies start at 0.

   Which of the following sets the value for the 3rd row and 2nd column of a 2D array called ``nums``?

Initializer Lists for 2D Arrays
-------------------------------

You can also initialize (set) the values for the array when you create it.  In this case you don't need to specify the size of the array, it will be determined from the values you give.  The code below creates an array called ``ticketInfo`` with 2 rows and 3 columns.  It also creates an array called ``seatingInfo`` with 3 rows and 2 columns.

.. code-block:: java 

  int[][] ticketInfo = { {25,20,25}, {25,20,25} };
  String[][] seatingInfo = { {"Jamal", "Maria"}, {"Jake", "Suzy"}, {"Emma", "Luke"} };

|Exercise| **Check your understanding**

.. fillintheblank:: 2daGetElfill

   What is the value at ``seatingInfo[2][1]`` after the code above executes?

   -    :Luke$: Correct.  The string at row index 2 and column index 1 is Luke.
        :.*: Indicies start at 0 and the row is first then the column

        
  
Get a Value from a 2D Array
------------------------------

..	index::
	pair: 2D Array; access value

To get the value in a 2D array give the name of the array followed by the row and column indicies in square brackets. The code below will get the value at row index 1 and column index 0 from ``ticketInfo``.  It will also get the value at row index 0 and column index 1 from ``seatingChart``. 

.. code-block:: java 

  int[][] ticketInfo = { {25,20,25}, {25,20,25} };
  String[][] seatingInfo = { {"Jamal", "Maria"}, {"Jake", "Suzy"}, {"Emma", "Luke"} };
  int value = ticketInfo[1][0];
  String name = seatingInfo[0][1]; 
  
|Exercise| **Check your understanding**

.. mchoice:: qa2dab_2
   :practice: T
   :answer_a: Jamal
   :answer_b: Maria
   :answer_c: Jake
   :answer_d: Suzy
   :answer_e: Emma
   :correct: b
   :feedback_a: This would be true for if <code>name</code> was set to <code>seatingInfo[0][0];</code> instead.
   :feedback_b: Maria is the value of <code>seatingInfo[0][1];</code>.
   :feedback_c: This would be true for if <code>name</code> was set to <code>seatingInfo[1][0];</code> instead.
   :feedback_d: This would be true for if <code>name</code> was set to <code>seatingInfo[1][1];</code> instead.
   :feedback_e: This would be true for if <code>name</code> was set to <code>seatingInfo[2][1];</code> instead.

   What is the value of ``name`` after the code above executes?  

|CodingEx| **Coding Exercise**



.. activecode:: 2DArrayInitGet
  :language: java
  
  Add another row to seatingInfo initialized to your name and a friend's name. Get these names out of the array using the correct indices and then print them out.
  ~~~~
  public class Test 
  {
     public static void main(String[] args)
     {
        String[][] seatingInfo = { {"Jamal", "Maria"}, {"Jake", "Suzy"}, {"Emma", "Luke"} };
        String name = seatingInfo[0][0];
        System.out.println(name + " is at [0,0]");
  
     }
  }
     
|Groupwork| Programming Challenge : ASCII Art
---------------------------------------------------

.. |ASCII art| raw:: html

   <a href= "https://www.asciiart.eu/" style="text-decoration:underline" target="_blank" >ASCII art</a>

ASCII is a commonly used character encoding standard where each key you press on the keyboard is translated to an ASCII number to be stored in the computer. ASCII has been mostly replaced by UNICODE which includes characters in other languages like Chinese. In the days before good graphics, some people made ASCII art just using the keyboard characters. Take a look at this |ASCII art| collection!

We can represent ASCII art in a 2D array of rows and columns. What do you think the following code will print out? Try to guess before you run it. The loops to print out the 2D array will be explained in the next lesson.

.. activecode:: challenge-8-1-ascii-art
  :language: java
  
  public class Test 
  {
     public static void main(String[] args)
     {
    
        String[][] asciiArt = {  
              {" ", " ", "_", "_", "_", " ", " "},
              {" ", "(", "o", " ", "o", ")", " "},
              {"(", " ", " ", "V", " ", " ", ")"},
              {" ", "-", "m", "-", "m", "-", " "},
         };
        
        //Part 1: Add 2 assignment statements to change "o" to "@"

     
        // print the asciiArt for Part 1
        for(String[] row : asciiArt) {
          for(String column : row)
            System.out.print(column);
          System.out.println();    
        }
        
        //Part 2: Create your own ASCII art array and print it out!
         
         
     }
  }
  

1. Change the code above to use 2 assignment statements with the 2D array asciiArt to change the "o" characters to "@" characters. You should figure out what the row and column indices should be for the "o" characters and use them with the array name to set that character to "@". After testing this code, comment it out so that your teacher can still see it. 

2. Change the asciiArt array to a different |ASCII art| from the collection or of your own design. Be careful with the special characters like ``"`` and ``\``. You will need to put another backslash in front of these to print them out like ``\"`` and ``\\``. 

Summary
-------

- 2D arrays are stored as arrays of arrays. Therefore, the way 2D arrays are created and indexed is similar to 1D array objects.

- 2D arrays are declared and created with the following syntax: datatype[][] variableName = new datatype[numberRows][numberCols];

- 2D array objects that are not rectangular (that are ragged arrays) are outside the scope of the course and AP Exam.

- For the purposes of the exam, when accessing the element at arr[first][second], the first index is used for rows, the second index is used for columns.

- The initializer list used to create and initialize a 2D array consists of initializer lists that represent 1D arrays. For example, int[][] ticketInfo = { {25,20,25}, {25,20,25} };

- The square brackets [row][col] are used to access and modify an element in a 2D array.

- "Row-major order" refers to an ordering of 2D array elements where traversal occurs across each row, while "column-major order" traversal occurs down each column.
