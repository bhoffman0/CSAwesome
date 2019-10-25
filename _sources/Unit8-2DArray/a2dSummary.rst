.. qnum::
   :prefix: 8-3-
   :start: 1
   
2D Arrays Summary
======================

In this chapter you learned about **two dimensional arrays**.  A **two dimensional array** stores objects in a 2d table.  You can think of it as storing objects in rows and columns, but it actually uses an array of arrays to store the objects as shown below.  In this chapter you learned how to declare 2d arrays, create them, and access array elements.  Array elements are accessed using a row and column index.  The first element in a 2d array is at row 0 and column 0.

.. figure:: Figures/ArrayRowsAndCols.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 1: Java arrays of arrays

..	index::
    pair: 2d-array; index
    pair: 2d-array; declaration
    pair: 2d-array; creation
    pair: 2d-array; element reference
    pair: 2d-array; initialization
    pair: 2d-array; num rows
    pair: 2d-array; num columns

Concept Summary
---------------

- **2d Array** - An array that holds items in a two dimensional grid.  You can think of it as storing items in rows and columns (like a bingo card or battleship game).  You can access an item (element) at a given row and column index.  
- **2d Array Declaration** - To declare an array, specify the type of elements that will be stored in the array, then (``[][]``) to show that it is a 2d array of that type, then at least one space, and then a name for the array. Examples:  ``int[][] seats;``  ``String[][] seatingChart;``
- **2d Array Creation** - To create a 2d array, type the name and an equals sign then use the *new* keyword, followed by a space, then the type, and then [numRows][numCols]. Example:   ``seatingChart = new String[5][4];``.  This will have 5 rows and 4 columns.
- **2d Array Index** - You can access and set values in a 2d array using the row and column index.  The first element in an array called ``arr`` is at row 0 and column 0 ``arr[0][0]``.  
- **2d Array Initialization** - You can also initialize (set) the values in the array when you first create it. In this case you don’t need to specify the size of the array, it will be determined from the number of values that you specify. Example: ``String[][] seatingInfo = { {"Jamal", "Maria"}, {"Jake", "Suzy"}, {"Emma", "Luke"}};``  This will create a 2d array with 3 rows and 2 columns.
- **2d Array Number of Rows** - The number of rows (or height) is the length of the outer array.  For an array ``arr`` use ``arr.length`` to get the number of rows in the array.
- **2d Array Number of Columns** - The number of columns (or width) is the length of the inner array.  For an array ``arr`` use ``arr[0].length`` to get the number of columns.
- **nested for loop** - A for loop inside of another for loop.  These are used to loop through all the elements in a 2d array.  One loop can work through the rows and the other the columns.
- **out of bounds error** - This happens when a loop goes beyond the last valid index in an array.  Remember that the last valid row index is ``arr.length - 1``.  The last valid column index is ``arr[0].length - 1``.

Vocabulary Practice
----------------------

.. dragndrop:: ch2darr_match_1
    :feedback: Review the summaries above.
    :match_1: The index of the last row|||arr.length - 1
    :match_2: The number of elements in the array|||arr.length * arr[0].length
    :match_3: The index of the item in the first row and first column|||arr[0][0]
    :match_4: The index of the item in the first row and second column|||arr[0][1]
    
    Drag the item from the left and drop it on its corresponding answer on the right.  Click the "Check Me" button to see if you are correct.
    
.. dragndrop:: ch2darr_match_2
    :feedback: Review the summaries above.
    :match_1: Declare an 2d integer array named nums|||int[][] nums;
    :match_2: Declare and create a String 2d array named list1 that has 3 rows and 2 columns|||String[][] list1 = new String[3][2];
    :match_3: Initialize a 2d array of integers named nums so that it has 1,2,3 in the first row and 4,5,6 in the second row.|||int[][] nums = { {1,2,3},{4,5,6}};
    :match_4: Initialize a 2d String array named list1 so that it has a,b,c in the first row and d,e,f in the second row.|||String[][] list1 = { {"a","b","c"},{"d","e","f"}};
    
    Drag the description from the left and drop it on the correct code on the right.  Click the "Check Me" button to see if you are correct.
    
.. |Quizlet| raw:: html

   <a href="https://quizlet.com/434082842/cs-awesome-unit-8-vocabulary-flash-cards/" target="_blank" style="text-decoration:underline">Quizlet</a>


For more practice, see this |Quizlet|.

Common Mistakes
---------------

  -  forgetting to create the array - only declaring it (``int[][] nums;``).
  -  using 1 as the first index not 0 for rows and/or columns.
  -  using ``array.length`` as the last valid row index, not ``array.length - 1``.
  -  using ``array[0].length`` as the last valid column index, not ``array[0].length - 1``.
  -  using ``array.length()`` instead of ``array.length`` (not penalized on the free response)
  -  going out of bounds when looping through an array  (using ``index <= array.length``).  You will get an ``ArrayIndexOutOfBoundsException``.  
  -  jumping out an loop by using one or more return statements before every value has been processed.  
  -  using the wrong starting and ending indicies on loops.
  -  using ``array.length`` for both the number of rows and columns.  Use ``array[0].length`` for the number of columns.