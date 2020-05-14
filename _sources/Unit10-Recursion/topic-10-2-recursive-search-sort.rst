.. qnum::
   :prefix: 10-2-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4

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

Recursive Searching and Sorting
-------------------------------

In Unit 7, we learned about searching and sorting algorithms using iteration (loops) to search or sort arrays and ArrayLists. In this lesson, we will take a look at a **recursive binary search** algorithm and a **recursive merge-sort** algorithm.

Recursive Binary Search
=========================

In Unit 7, we learned about two search algorithms, linear search and binary search. Linear search searches for an element in an array or ArrayList by checking each element in order. Binary search is more efficient (faster) because it starts at the middle of a sorted array or ArrayList and eliminates half of the array or ArrayList each pass through the algorithm. Binary search only works on sorted data. It can be written with iteration (using a loop) like below or recursively.

.. activecode:: BinarySearchLoop
  :language: java

  public class IterativeBinarySearch
  {
     public static int binarySearch(int[] elements, int target) {
        int left = 0;
        int right = elements.length - 1;
        while (left <= right)
        {
           int middle = (left + right) / 2;
           if (target < elements[middle])
           {
              right = middle - 1;
           }
           else if (target > elements[middle])
           {
              left = middle + 1;
           }
           else {
              return middle;
           }
         }
         return -1;
     }

     public static void main(String[] args)
     {
        int[] arr1 = {-20, 3, 15, 81, 432};

        int index = binarySearch(arr1,81);
        System.out.println(index);
     }
  }

.. |Java visualizer| raw:: html

   <a href="http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++public+class+SearchTest%0A++%7B%0A+++++%0A+++++/**+%0A++++++*+Find+the+index+of+a+value+in+an+array+of+integers+sorted+in+ascending+order.%0A++++++*+%40param+elements+an+array+containing+the+items+to+be+searched.+Precondition%3A+items+in+elements+are+sorted+in+ascending+order.%0A++++++*+%40param+target+the+item+to+be+found+in+elements.%0A++++++*+%40return+an+index+of+target+in+elements+if+target+found%3B%0A++++++*+-1+other+wise.%0A++++++*/%0A+++++public+static+int+binarySearch(int%5B%5D+elements,+int+target)+%7B%0A++++++++int+left+%3D+0%3B%0A++++++++int+right+%3D+elements.length+-+1%3B%0A++++++++while+(left+%3C%3D+right)+%0A++++++++%7B%0A+++++++++++int+middle+%3D+(left+%2B+right)+/+2%3B+%0A+++++++++++if+(target+%3C+elements%5Bmiddle%5D)%0A+++++++++++%7B%0A++++++++++++++right+%3D+middle+-+1%3B%0A+++++++++++%7D%0A+++++++++++else+if+(target+%3E+elements%5Bmiddle%5D)+%0A+++++++++++%7B%0A++++++++++++++left+%3D+middle+%2B+1%3B+%0A+++++++++++%7D%0A+++++++++++else+%7B%0A++++++++++++++return+middle%3B+%0A+++++++++++%7D%0A+++++++++%7D%0A+++++++++return+-1%3B%0A++++++%7D%0A++++++%0A++++++public+static+void+main(String%5B%5D+args)%0A++++++%7B%0A+++++++++int%5B%5D+arr1+%3D+%7B-20,+3,+15,+81,+432%7D%3B%0A++++++++%0A+++++++++//+test+when+the+target+is+in+the+array%0A+++++++++int+index+%3D+binarySearch(arr1,-20)%3B%0A+++++++++System.out.println(index)%3B%0A++++++++%0A+++++++++//+test+when+the+target+is+not+in+the+array%0A+++++++++index+%3D+binarySearch(arr1,53)%3B%0A+++++++++System.out.println(index)%3B%0A+++++++%7D%0A++%7D%0A&mode=display&curInstr=0" target="_blank" style="text-decoration:underline">Java visualizer</a>

Watch the iterative binary search code running in the |Java Visualizer|.

Let's write a recursive version of Binary Search. Note that you can write solutions to many problems using recursion or iteration. Iteration is usually preferred and more efficient, but recursive solutions can be elegant and require less code. 

|Exercise| **Check Your Understanding**

.. shortanswer:: baseCaseQ

    What's the base case for a recursive version of Binary Search (where we want the recursion to stop)? Remember that in binary search, we always check the middle element first when looking for a target element from a startIndex to an endIndex.
    
.. shortanswer:: recursiveCallQ

    Given a recursive binary search method with the method signature "boolean binarySearch(int[] array, int target, int startIndex, int endIndex)", what recursive method call would search the array from index 0 to the middle index? 

Here is the Java code for a recursive binary search:

|CodingEx| **Coding Exercise**



.. activecode:: recursiveBinarySearch
  :language: java
  
  Run the code below. Try searching for the element 3 and then the element 2 which is not in the array. What would happen if we removed the second base case checking if end < start? Try it and see.
  ~~~~
  public class RecursiveBinarySearch
  {
    public static int recursiveBinarySearch(int[] array, int target, int start, int end)
    {
        int middle = (start + end)/2;
        // base case: check middle element
        if (target == array[middle]) {
            return middle;
        }	
        // base case: check if we've run out of elements
        if(end < start){
            return -1; // not found
        } 
        // recursive call: search start to middle
        if (target < array[middle]){
            return recursiveBinarySearch(array, target, start, middle - 1);
        }
        // recursive call: search middle to end
        if (target > array[middle]){
            return recursiveBinarySearch(array, target, middle + 1, end);
        }
        return -1;
    }

   public static void main(String[] args)
   {
      int[] array = { 3, 7, 12, 19, 22, 25, 29, 30 };
      int foundIndex = recursiveBinarySearch(array,25,0,array.length);
      System.out.println("25 was found at index " + foundIndex);
   }
  }

.. |Java visualizer link| raw:: html

   <a href="https://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++public+class+RecursiveBinarySearch%0A++%7B%0A+++++public+static+int+recursiveBinarySearch(int%5B%5D+array,+int+target,+int+start,+int+end)%0A+++++%7B%0A+++++++int+middle+%3D+(start+%2B+end)/2%3B%0A%09+++%0A+++++++if+(target+%3D%3D+array%5Bmiddle%5D)+%7B%0A%09%09%09return+middle%3B%0A%09+++%7D%09%0A%09+++if(end+%3C+start)%7B%0A%09%09%09+return+-1%3B+//+not+found%0A%09++++%7D+%0A%09%09%0A%09++++if+(target+%3C+array%5Bmiddle%5D)%7B%0A%09%09%09return+recursiveBinarySearch(array,+target,+start,+middle+-+1)%3B%0A%09%09%7D%0A%09%09%0A%09%09if+(target+%3E+array%5Bmiddle%5D)%7B%0A%09%09%09return+recursiveBinarySearch(array,+target,+middle+%2B+1,+end)%3B%0A%09%09%7D%0A%0A%09%09return+-1%3B%0A+++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++int%5B%5D+array+%3D+%7B+3,+7,+12,+19,+22,+25,+29,+30+%7D%3B%0A++++++int+foundIndex+%3D+recursiveBinarySearch(array,25,0,array.length)%3B%0A++++++System.out.println(%2225+was+found+at+index+%22+%2B+foundIndex)%3B%0A+++%7D%0A++%7D&mode=display&curInstr=28" target="_blank" style="text-decoration:underline">Java visualizer link</a>

Try the recursive binary search code in this |Java visualizer link|.

Merge Sort
==========================

..	index::
	single: merge sort
	pair: sort; merge

In Unit 7, we looked at two sorting algorithms, Selection Sort and Insertion Sort. In this lesson, we will look at a third sorting algorithm, Merge Sort, which uses recursion. Merge Sort is actually more efficient (faster) than Selection Sort and Insertion Sort because it divides the problem in half each time like binary search. This is called a **divide and conquer** algorithm.

A merge sort recursively breaks the values to be sorted in half until there is only one value to be sorted and then it merges the two sorted lists into one sorted list.  The code shown below uses a second array the same size as the original array for merging the values in order.  Then it copies all of the sorted values back into the original array.

Here is a folk dance video that shows the merge sort process.

.. youtube:: XaqR3G_NVoo
    :align: center

And here is a short video that describes how merge sort works.

.. youtube:: 4VqmGXwpLqc
    :align: center
    

The code for ``mergeSort`` below is from the AP CS A course description.

To identify a merge sort look for the following:

* 3 methods, mergeSort, mergeSortHelper, and merge
* mergeSortHelper is recursive

.. activecode:: mergeSort
  :language: java

  import java.util.Arrays;

  public class SortTest
  {
     public static void mergeSort(int[] elements)
     {
        int n = elements.length;
        int[] temp = new int[n];
        mergeSortHelper(elements, 0, n - 1, temp);
     }

     private static void mergeSortHelper(int[] elements,
                                         int from, int to, int[] temp)
     {
         if (from < to)
         {
            int middle = (from + to) / 2;
            mergeSortHelper(elements, from, middle, temp);
            mergeSortHelper(elements, middle + 1, to, temp);
            merge(elements, from, middle, to, temp);
         }
     }

     private static void merge(int[] elements, int from,
                               int mid, int to, int[] temp)
     {
        int i = from;
        int j = mid + 1;
        int k = from;

        while (i <= mid && j <= to)
        {
           if (elements[i] < elements[j])
           {
              temp[k] = elements[i];
              i++;
           }
           else
           {
              temp[k] = elements[j];
              j++;
           }
           k++;
        }

        while (i <= mid)
        {
           temp[k] = elements[i];
           i++;
           k++;
        }

        while (j <= to)
        {
           temp[k] = elements[j];
           j++;
           k++;
        }

        for (k = from; k <= to; k++)
        {
           elements[k] = temp[k];
        }
     }

     public static void main(String[] args)
     {
        int[] arr1 = {86, 3, 43, 5};
        System.out.println(Arrays.toString(arr1));
        mergeSort(arr1);
        System.out.println(Arrays.toString(arr1));
     }
  }

You can see this executing using the |Java visualizer for merge sort|. 

.. |Java visualizer for merge sort| raw:: html

   <a href="http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++import+java.util.Arrays%3B%0A++%0A++public+class+SortTest%0A++%7B%0A+++++public+static+void+mergeSort(int%5B%5D+elements)+%0A+++++%7B%0A++++++++int+n+%3D+elements.length%3B%0A++++++++int%5B%5D+temp+%3D+new+int%5Bn%5D%3B+%0A++++++++mergeSortHelper(elements,+0,+n+-+1,+temp)%3B%0A+++++%7D%0A+++++%0A+++++private+static+void+mergeSortHelper(int%5B%5D+elements,+int+from,+int+to,+int%5B%5D+temp)%0A+++++%7B%0A+++++++++if+(from+%3C+to)%0A+++++++++%7B%0A++++++++++++int+middle+%3D+(from+%2B+to)+/+2%3B+%0A++++++++++++mergeSortHelper(elements,+from,+middle,+temp)%3B+%0A++++++++++++mergeSortHelper(elements,+middle+%2B+1,+to,+temp)%3B+%0A++++++++++++merge(elements,+from,+middle,+to,+temp)%3B%0A+++++++++%7D%0A+++++%7D%0A+++++%0A+++++private+static+void+merge(int%5B%5D+elements,+int+from,+int+mid,+int+to,+int%5B%5D+temp)%0A+++++%7B%0A++++++++int+i+%3D+from%3B+%0A++++++++int+j+%3D+mid+%2B+1%3B+%0A++++++++int+k+%3D+from%3B%0A++++++++%0A++++++++while+(i+%3C%3D+mid+%26%26+j+%3C%3D+to)+%0A++++++++%7B%0A+++++++++++if+(elements%5Bi%5D+%3C+elements%5Bj%5D)+%0A+++++++++++%7B%0A++++++++++++++temp%5Bk%5D+%3D+elements%5Bi%5D%3B%0A++++++++++++++i%2B%2B%3B+%0A+++++++++++%7D%0A+++++++++++else+%0A+++++++++++%7B%0A++++++++++++++temp%5Bk%5D+%3D+elements%5Bj%5D%3B%0A++++++++++++++j%2B%2B%3B+%0A+++++++++++%7D%0A+++++++++++k%2B%2B%3B+%0A++++++++%7D%0A%0A++++++++while+(i+%3C%3D+mid)+%0A++++++++%7B%0A+++++++++++temp%5Bk%5D+%3D+elements%5Bi%5D%3B+%0A+++++++++++i%2B%2B%3B%0A+++++++++++k%2B%2B%3B%0A++++++++%7D%0A++++++++%0A++++++++while+(j+%3C%3D+to)+%0A++++++++%7B%0A+++++++++++temp%5Bk%5D+%3D+elements%5Bj%5D%3B+%0A+++++++++++j%2B%2B%3B%0A+++++++++++k%2B%2B%3B%0A++++++++%7D%0A++++++++%0A++++++++for+(k+%3D+from%3B+k+%3C%3D+to%3B+k%2B%2B)+%0A++++++++%7B%0A+++++++++++elements%5Bk%5D+%3D+temp%5Bk%5D%3B+%0A++++++++%7D%0A+++++%7D%0A++++++++%0A++++++%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++int%5B%5D+arr1+%3D+%7B86,+3,+43%7D%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A++++++++mergeSort(arr1)%3B%0A++++++++System.out.println(Arrays.toString(arr1))%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0" target="_blank" style="text-decoration:underline">Java visualizer for merge sort</a>

You can trace through a merge sort algorithm given an array by using parentheses or curly brackets to show how the array is divided into subarrays and then merged. For example, here is how you could write down the trace of ``mergeSort(arr1)`` where arr1 = {86, 3, 43, 5} like in the example above.

1. Split 1: { {86, 3} , {43, 5} }
2. Split 2: { { {86},{3}} , { {43},{5}} }
3. Merge 1: { {3, 86} , {5,43} }
4. Merge 2: { 3, 5, 43, 86 }

|Exercise| **Check Your Understanding**

.. mchoice:: qms_1
   :practice: T
   :answer_a: If the data is already sorted in ascending order
   :answer_b: If the data is already sorted in descending order
   :answer_c: It will always take the same amount of time to execute
   :correct: c
   :feedback_a: This won't really affect the execution time for merge sort.
   :feedback_b: This won't really affect the execution time for merge sort.
   :feedback_c: It will take about the same time regardless of the data.

   Under what condition will a merge sort execute faster?

.. mchoice:: qms_2
   :practice: T
   :answer_a: selection sort
   :answer_b: insertion sort
   :answer_c: merge sort
   :correct: c
   :feedback_a: Merge sort is always faster than selection sort.
   :feedback_b: Merge sort is usually faster than insertion sort.
   :feedback_c: Merge sort is always faster than selection sort and usually faster than insertion sort.

   Which sort should be the fastest most of the time?

|Groupwork| Tracing Challenge : Recursive Search and Sort
==========================================================


Working in pairs, practice the recursive binary search and merge sort algorithms with a deck of cards or pieces of paper with numbers or names on them.  Here's a video that shows merge sort with cards. 

.. youtube:: AMJjtTo1LLE
    :align: center
    
Work in pairs to do the following tracing problems. 

.. shortanswer:: challenge-10-2-mergesort

    Trace through mergeSort(array) where array = {5, 2, 20, 22, 17, 15, 8, 10} writing down each split and merge.  

.. shortanswer:: challenge-10-2-binary-search

    Trace through recursiveBinarySearch(sortedArray, 22, 0, 8) looking for the target number 22 where sortedArray = {2, 5, 8, 10, 11, 15, 17, 20, 22}. Write down each middle element that is checked and the start and end index for each recursive call. How many elements did the binary search have to check before finding 22?  How would this compare to a linear search?

Summary
============

- The binary search algorithm can be written either iteratively or recursively.

- Data must be in sorted order to use the binary search algorithm.

- The binary search algorithm starts at the middle of a sorted array or ArrayList and eliminates half of the array or ArrayList in until the desired value is found or all elements have been eliminated.

- Binary search can be more efficient than sequential/linear search.

- Merge sort is a recursive sorting algorithm that can be used to sort elements in an array or ArrayList.
