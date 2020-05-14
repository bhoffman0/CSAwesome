.. qnum::
   :prefix: 7-6-
   :start: 1

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

Sorting Algorithms
==================

There are many sorting algorithms to put an array or ArrayList elements in alphabetic or numerical order. We will show these algorithms below for arrays. The three sorting algorithms that you need to know for the AP CS A exam are:

..	index::
	single: selection sort
	single: insertion sort
	pair: sort; selection
	pair: sort; insertion

* Selection Sort - Select the smallest item from the current location on to the end of the array and swap it with the value at the current position.  Do this from index 0 to the array length - 2.  You don't have to process the last element in the array, it will already be sorted when you compare the prior element to the last element.
* Insertion Sort - Insert the next unsorted element in the already sorted part of the array by moving larger values to the right.  Start at index 1 and loop through the entire array.
* Merge sort - Break the elements into two parts and recursively sort each part.  An array of one item is sorted (base case).  Then merge the two sorted arrays into one. MergeSort will be covered in Unit 10.


.. There are many videos on YouTube that show these sorts.  Here is a folk dance for selection sort.
.. .. youtube:: Ns4TPTC8whw
    :align: center
    
.. Here is folk dance for insertion sort.

    
.. Here is folk dance for merge sort.


.. .. youtube:: XaqR3G_NVoo
    :align: center

.. Here is another video that talks about bubble sort, insertion sort, and quick sort.  Of these only insertion sort is on the exam.

.. .. youtube:: WaNLJf8xzC4
    :align: center


Selection Sort
---------------

..	index::
	single: selection sort
	pair: sort; selection

The selection sort that you need to know for the exam starts at index 0 and looks through the entire array keeping track of the the index of the smallest value in the array and then swaps the value at the smallest index with the value at index 0.  Then it does the same thing for index 1, then 2, and so on until it reaches the length of the array minus one.  At this point the array is sorted in ascending order.

Here is a folk dance video that shows the selection sort process.

.. youtube:: Ns4TPTC8whw
    :align: center

And a short video that describes how selection sort works.

.. youtube:: g-PGLbMth_g
    :align: center
    
To identify a selection sort look for the following:

* a nested for loop with the outer loop starting at 0 and ending when the index reaches length - 1 (see line 7 below)
* the index of the smallest value should start at the outer loop index (see line 9 below)
* the inner loop should start at the outer loop index + 1 and loop through the whole array (see line 10 below)

* if the value in the array at the index of the inner loop is less than the value at the smallest index then set the smallest index to the index of the inner loop (see lines 12 - 15)
* swap the value at the outer loop index and the smallest value (the one at the smallest value index) (see lines 17-19)

The code for ``selectionSort`` below is from the AP CS A course description.

.. activecode:: selSort
  :language: java

  Demonstration of selection sort.
  ~~~~
  import java.util.Arrays;

  public class SortTest
  {
     public static void selectionSort(int[] elements)
     {
        for (int j = 0; j < elements.length - 1; j++)
        {
           int minIndex = j;
           for (int k = j + 1; k < elements.length; k++)
           {
              if (elements[k] < elements[minIndex])
              {
                 minIndex = k;
              }
           }
           int temp = elements[j];
           elements[j] = elements[minIndex];
           elements[minIndex] = temp;
         }
     }

     public static void main(String[] args)
     {
        int[] arr1 = {3, 86, -20, 14, 40};
        System.out.println(Arrays.toString(arr1));
        selectionSort(arr1);
        System.out.println(Arrays.toString(arr1));
     }
  }

To see this executing using the Java Visualizer click on the following `SelectionSort <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=+import+java.util.Arrays%3B%0A+%0A+public+class+SortTest%0A++%7B%0A+++++public+static+void+selectionSort(int%5B%5D+elements)+%0A+++++%7B%0A++++++++for+(int+j+%3D+0%3B+j+%3C+elements.length+-+1%3B+j%2B%2B)+%0A++++++++%7B%0A+++++++++++int+minIndex+%3D+j%3B%0A+++++++++++for+(int+k+%3D+j+%2B+1%3B+k+%3C+elements.length%3B+k%2B%2B)+%0A+++++++++++%7B%0A++++++++++++++if+(elements%5Bk%5D+%3C+elements%5BminIndex%5D)+%0A++++++++++++++%7B%0A+++++++++++++++++minIndex+%3D+k%3B+%0A++++++++++++++%7D%0A+++++++++++%7D%0A+++++++++++int+temp+%3D+elements%5Bj%5D%3B+%0A+++++++++++elements%5Bj%5D+%3D+elements%5BminIndex%5D%3B+%0A+++++++++++elements%5BminIndex%5D+%3D+temp%3B%0A+++++++++%7D%0A+++++%7D%0A++++++%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++int%5B%5D+arr1+%3D+%7B3,+86,+-20,+14,+40%7D%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A++++++++selectionSort(arr1)%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0>`_

|Exercise| **Check Your Understanding**


.. mchoice:: qsel_1
   :answer_a: If the data is already sorted in ascending order
   :answer_b: If the data is already sorted in descending order
   :answer_c: It will always take the same amount of time to execute
   :correct: c
   :feedback_a: How would this be faster?  Look at the code.
   :feedback_b: How would this be faster?  Look at the code.
   :feedback_c: A selection sort always does the same number of comparisons and always takes the same time to execute regardless of the order of the data.

   Under what condition will a selection sort execute faster?

.. mchoice:: qsel_2
   :answer_a: line 1
   :answer_b: line 2
   :answer_c: line 3
   :answer_d: line 4
   :answer_e: line 5
   :correct: c
   :feedback_a: The outer loop starts at 0 and ends when it reaches the length - 1.
   :feedback_b: The min index should be set to the outer loop index before the start of the inner loop.
   :feedback_c: The inner loop should start at the outer loop index + 1.
   :feedback_d: You should compare the element at the inner loop index to the element at the min index to see if it is smaller.
   :feedback_e: You should save the new min index as the inner loop index.

   This method should sort the numbers in the passed array into ascending order. But, it does not work. Which of the following lines is wrong?

   .. code-block:: java

      public static void selectionSort(int[] elements)
      {
        for (int j = 0; j < elements.length − 1; j++)      // line 1
        {
           int minIndex = j;                               // line 2
           for (int k = 0; k < elements.length; k++)       // line 3
           {
              if (elements[k] < elements[minIndex])        // line 4
              {
                 minIndex = k;                             // line 5
              }
           }
           int temp = elements[j];
           elements[j] = elements[minIndex];
           elements[minIndex] = temp;
         }
      }

You can step through the code above by clicking on the following `Ex-12-4-2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.Arrays%3B%0A%0Apublic+class+SortTest2%0A%7B%0A+++%0A+++public+static+void+selectionSort(int%5B%5D+elements)%0A+++%7B%0A++++++for+(int+j+%3D+0%3B+j+%3C+elements.length+-+1%3B+j%2B%2B)++++++//+line+1%0A++++++%7B%0A+++++++++int+minIndex+%3D+j%3B+++++++++++++++++++++++++++++++//+line+2%0A+++++++++for+(int+k+%3D+0%3B+k+%3C+elements.length%3B+k%2B%2B)+++++++//+line+3%0A+++++++++%7B%0A++++++++++++if+(elements%5Bk%5D+%3C+elements%5BminIndex%5D)++++++++//+line+4%0A++++++++++++%7B%0A+++++++++++++++minIndex+%3D+k%3B+++++++++++++++++++++++++++++//+line+5%0A++++++++++++%7D%0A+++++++++%7D%0A+++++++++int+temp+%3D+elements%5Bj%5D%3B%0A+++++++++elements%5Bj%5D+%3D+elements%5BminIndex%5D%3B%0A+++++++++elements%5BminIndex%5D+%3D+temp%3B%0A++++++%7D%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++int%5B%5D+arr1+%3D+%7B3,+86,+-20,+14,+40%7D%3B%0A++++++System.out.println(Arrays.toString(arr1))%3B%0A++++++selectionSort(arr1)%3B%0A++++++System.out.println(Arrays.toString(arr1))%3B%0A+++%7D%0A++++++%0A%7D&mode=display&curInstr=0>`_.


Insertion Sort
---------------

..	index::
	single: insertion sort
	pair: sort; insertion

The insertion sort that you need to know for the exam starts at index 1 and inserts the value at index 1 into its correct place in the already sorted part (the part to the left of the current index). It moves any value larger than the value stored in temp to the right until it either finds the appropriate place to put temp or gets to the front of the array.



Here is a folk dance video that shows the insertion sort process.

.. youtube:: ROalU379l3U
    :align: center

And a short video that describes how insertion sort works.

.. youtube:: JU767SDMDvA
    :align: center
    


To identify an insertion sort look for the following:

* an outer for loop that starts at 1 and loops through the entire array (see line 7)
* storing the element value at the outer loop index in temp (see line 9)
* setting the possible index to the outer loop index (see line 10)
* an inner while loop that loops while the possible index is greater than 0 and the value in temp is less than the value at the possible index minus one (see line 11)
* set the value at the possible index to the one to the left of it (the one at possible index minus one) (see line 13)
* decrement the possible index (subtract one from it) (see line 14)
* when the while loop ends set the value at the possible index to temp (see line 16)

The code for ``insertionSort`` below is from the AP CS A course description.

.. activecode:: insertionSort
  :language: java

  Demonstration of insertion sort.
  ~~~~
  import java.util.Arrays;

  public class SortTest
  {
     public static void insertionSort(int[] elements)
     {
        for (int j = 1; j < elements.length; j++)
        {
           int temp = elements[j];
           int possibleIndex = j;
           while (possibleIndex > 0 && temp < elements[possibleIndex - 1])
           {
              elements[possibleIndex] = elements[possibleIndex - 1];
              possibleIndex--;
           }
           elements[possibleIndex] = temp;
        }
    }

     public static void main(String[] args)
     {
        int[] arr1 = {3, 86, -20, 14, 40};
        System.out.println(Arrays.toString(arr1));
        insertionSort(arr1);
        System.out.println(Arrays.toString(arr1));
     }
  }

To see this executing using the Java Visualizer click on the following `Insertion-Sort <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++import+java.util.Arrays%3B%0A++%0A++public+class+SortTest%0A++%7B%0A+++++public+static+void+insertionSort(int%5B%5D+elements)+%0A+++++%7B%0A++++++++for+(int+j+%3D+1%3B+j+%3C+elements.length%3B+j%2B%2B)+%0A++++++++%7B%0A+++++++++++int+temp+%3D+elements%5Bj%5D%3B%0A+++++++++++int+possibleIndex+%3D+j%3B%0A+++++++++++while+(possibleIndex+%3E+0+%26%26+temp+%3C+elements%5BpossibleIndex+-+1%5D)+%0A+++++++++++%7B%0A++++++++++++++elements%5BpossibleIndex%5D+%3D+elements%5BpossibleIndex+-+1%5D%3B%0A++++++++++++++possibleIndex--%3B+%0A+++++++++++%7D%0A+++++++++++elements%5BpossibleIndex%5D+%3D+temp%3B%0A++++++++%7D%0A++++%7D%0A++++++%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++int%5B%5D+arr1+%3D+%7B3,+86,+-20,+14,+40%7D%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A++++++++insertionSort(arr1)%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0>`_

|Exercise| **Check Your Understanding**

.. mchoice:: qins_1
   :answer_a: If the data is already sorted in ascending order
   :answer_b: If the data is already sorted in descending order
   :answer_c: It will always take the same amount of time to execute
   :correct: a
   :feedback_a: If the data is already sorted in the correct order you don't need to move any values.
   :feedback_b: This would actually result in the longest execution.
   :feedback_c: This would be true if it was a selection sort.

   Under what condition will an insertion sort execute faster?

.. mchoice:: qins_2
   :answer_a: line 1
   :answer_b: line 2
   :answer_c: line 3
   :answer_d: line 4
   :answer_e: line 5
   :correct: a
   :feedback_a: It should loop through the entire array.
   :feedback_b: The value at the outer loop index should be stored in temp.
   :feedback_c: The possible index should be set to the outer loop index before the inner loop executes.
   :feedback_d: Loop while the possible index is greater than 0 and the temp value is less than the value at the possible index minus one.
   :feedback_e: Move the value at possible index minus one to the possible index (move to the right).

   This method should sort the numbers in the passed array into ascending order. But, it does not work. Which of the following lines is wrong?

   .. code-block:: java

      public static void insertionSort(int[] elements)
      {
        for (int j = 1; j < elements.length - 1; j++)                       // line 1
        {
           int temp = elements[j];                                          // line 2
           int possibleIndex = j;                                           // line 3
           while (possibleIndex > 0 && temp < elements[possibleIndex - 1])  // line 4
           {
              elements[possibleIndex] = elements[possibleIndex - 1];        // line 5
              possibleIndex--;
           }
           elements[possibleIndex] = temp;
        }
      }

You can step through the code above by clicking on the following `Visualization <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.Arrays%3B%0A++%0A++public+class+SortTest%0A++%7B%0A+++++public+static+void+insertionSort(int%5B%5D+elements)+%0A+++++%7B%0A++++++++for+(int+j+%3D+1%3B+j+%3C+elements.length+-+1%3B+j%2B%2B)+++++++++++++++++++++++//+line+1%0A++++++++%7B%0A+++++++++++int+temp+%3D+elements%5Bj%5D%3B++++++++++++++++++++++++++++++++++++++++++//+line+2%0A+++++++++++int+possibleIndex+%3D+j%3B+++++++++++++++++++++++++++++++++++++++++++//+line+3%0A+++++++++++while+(possibleIndex+%3E+0+%26%26+temp+%3C+elements%5BpossibleIndex+-+1%5D)++//+line+4%0A+++++++++++%7B%0A++++++++++++++elements%5BpossibleIndex%5D+%3D+elements%5BpossibleIndex+-+1%5D%3B++++++++//+line+5%0A++++++++++++++possibleIndex--%3B+%0A+++++++++++%7D%0A+++++++++++elements%5BpossibleIndex%5D+%3D+temp%3B%0A++++++++%7D%0A+++++%7D%0A++++++%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++int%5B%5D+arr1+%3D+%7B3,+86,+-20,+14,+40%7D%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A++++++++insertionSort(arr1)%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0>`_.



|Groupwork| Programming Challenge : Sort Runtimes
---------------------------------------------------

Selection sort and Insertion sort have similar runtimes. They both have nested loops that run through the data of size n approximately n squared times. However, they perform differently on some data. 

In the Active code windows for Selection sort and Insertion sort above, add in a counter and increment it inside the inner loop to count the number of iterations. Add in print statements that will print the counter value after the loops. Run the code on the following data and record the runtimes in this |Google doc| (do File/Make a Copy) also seen below.

.. |Google doc| raw:: html

   <a href= "https://docs.google.com/document/d/1uGhFyrcGqokcOWQC-f8Cz-kow7I_xs6s5G-p-qXZ7wA/edit?usp=sharing" style="text-decoration:underline" target="_blank" >Google document</a>

.. raw:: html
    
    <iframe height="300px" width="100%" src="https://docs.google.com/document/d/1uGhFyrcGqokcOWQC-f8Cz-kow7I_xs6s5G-p-qXZ7wA/edit?usp=sharing&rm=minimal" style="max-width:90%; margin-left:5%" ></iframe>

.. shortanswer:: challenge7-6-sorting

   Compare the runtimes of selection and insertion sort on the same data. There should be some data where one performed better than the other. Can you explain why this is? Trace through the code to figure out why. Discuss in pairs or groups.  Using the space provided below, summarize the key discussion points and include a link to your Google document with the table of runtimes.   

Summary
---------

- Selection sort and insertion sort are iterative sorting algorithms that can be used to sort elements in an array or ArrayList.

- Informal run-time comparisons of program code segments can be made using statement execution counts.