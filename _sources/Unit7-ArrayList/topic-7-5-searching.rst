.. qnum::
   :prefix: 7-5-
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
    
.. raw:: html

    <style>    td { text-align: left; } </style>

Searching Algorithms
======================

..	index::
	single: sequential search
	single: binary search
	single: recursion
	pair: search; sequential
	pair: search; binary

Computers store vast amounts of data. One of the strengths of computers is their ability to find things quickly.  This ability is called **searching**.  For the AP CS A exam you will need to know both **linear (sequential) search** and **binary search** algorithms.

.. the video is Searching.mov

The following video is also on YouTube at https://youtu.be/DHLCXXX1OtE.  It introduces the concept of searching including sequential search and binary search.

.. youtube:: DHLCXXX1OtE
    :width: 800
    :align: center


* **Sequential or Linear search** typically starts at the first element in an array or ArrayList and looks through all the items one by one until it either finds the desired value and then it returns the index it found the value at or if it searches the entire array or list without finding the value it returns -1.
* **Binary search** can only be used on data that has been **sorted** or stored in order.  It checks the middle of the data to see if that middle value is less than, equal, or greater than the desired value and then based on the results of that it narrows the search. It cuts the search space in half each time.



If binary search requires the values in an array or list to be sorted, how can you do that?  There are many sorting algorithms which are covered in the next lesson. 


Sequential Search
------------------

..	index::
	single: sequential search
	single: linear search
	pair: search; sequential
	pair: search; linear

Sequential or linear search is the only method that can be used to find a value in unsorted data. It usually starts at the first element and walks through the array or list until it finds the value it is looking for and returns the index it found it at, or it loops until the end of the array or list and then it returns a -1 to show that it didn't find the value in the array or list.



.. activecode:: seqSearch
  :language: java

  The code for ``sequentialSearch`` for arrays below is from a previous AP CS A course description.
  ~~~~
  public class ArraySearcher
  {

     /** Finds the index of a value in an array of integers.
       * @param elements an array containing the items to be searched.
       * @param target the item to be found in elements.
       * @return an index of target in elements if found; -1 otherwise.
       */
     public static int sequentialSearch(int[] elements, int target)
     {
       for (int j = 0; j < elements.length; j++)
       {
         if (elements[j] == target)
         {
           return j;
         }
       }
       return -1;
     }

     public static void main(String[] args)
     {
       int[] numArray = {3, -2, 9, 38, -23};
       System.out.println("Tests of sequentialSearch");
       System.out.println(sequentialSearch(numArray,3));
       System.out.println(sequentialSearch(numArray,9));
       System.out.println(sequentialSearch(numArray,-23));
       System.out.println(sequentialSearch(numArray,99));
     }

  }

To see this executing using the Java Visualizer click on the following link `SequentialSearch <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+ArraySearcher%0A%7B%0A++%0A++/**+Finds+the+index+of+a+value+in+an+array+of+integers.%0A++++*+%40param+elements+an+array+containing+the+items+to+be+searched.+%0A++++*+%40param+target+the+item+to+be+found+in+elements.+%0A++++*+%40return+an+index+of+target+in+elements+if+found%3B+-1+otherwise.+%0A++++*/%0A++public+static+int+sequentialSearch(int%5B%5D+elements,+int+target)+%0A++%7B+%0A++++for+(int+j+%3D+0%3B+j+%3C+elements.length%3B+j%2B%2B)+%0A++++%7B+%0A++++++if+(elements%5Bj%5D+%3D%3D+target)+%0A++++++%7B+%0A++++++++return+j%3B+%0A++++++%7D+%0A++++%7D+%0A++++return+-1%3B+%0A++%7D%0A++%0A++public+static+void+main(String%5B%5D+args)%0A++%7B%0A++++int%5B%5D+numArray+%3D+%7B3,+-2,+9,+38,+-23%7D%3B%0A++++System.out.println(%22Tests+of+sequentialSearch%22)%3B%0A++++System.out.println(sequentialSearch(numArray,3))%3B%0A++++System.out.println(sequentialSearch(numArray,9))%3B%0A++++System.out.println(sequentialSearch(numArray,-23))%3B%0A++++System.out.println(sequentialSearch(numArray,99))%3B%0A++%7D%0A++%0A%7D&mode=display&curInstr=3>`_

Here is the same search with an ArrayList. The same algorithms can be used with arrays or ArrayLists, but notice that size() and get(i) is used with ArrayLists instead of length and [i] which are used in arrays. Many of our examples will use arrays for simplicity since with arrays, we know how many items we have and the size won't change during runtime. There are methods such as contains that can be used in ArrayLists instead of writing your own algorithms. However, they are not in the AP CSA Java subset.

.. activecode:: seqSearchList
    :language: java

    Here is a linear search using ArrayLists. Notice that size() and get(i) is used with ArrayLists instead of length and [i] which are used in arrays.
    ~~~~
    import java.util.*;

    public class ArrayListSearcher
    {

      /** Finds the index of a value in an ArrayList of integers.
        * @param elements an array containing the items to be searched. 
        * @param target the item to be found in elements. 
        * @return an index of target in elements if found; -1 otherwise. 
        */
      public static int sequentialSearch(ArrayList<Integer> elements, int target) 
      { 
        for (int j = 0; j < elements.size(); j++) 
        { 
          if (elements.get(j) == target) 
          { 
            return j; 
          } 
        } 
        return -1; 
      }

      public static void main(String[] args)
      {
        ArrayList<Integer> numList = new ArrayList<Integer>();
        numList.add(3);
        numList.add(-2);
        numList.add(9);
        numList.add(38);
        numList.add(-23);
        System.out.println("Tests of sequentialSearch");
        System.out.println(sequentialSearch(numList,3));
        System.out.println(sequentialSearch(numList,9));
        System.out.println(sequentialSearch(numList,-23));
        System.out.println(sequentialSearch(numList,99));
      }

    }


|Exercise| **Check Your Understanding**

.. mchoice:: qss_1
   :answer_a: The value is the first one in the array
   :answer_b: The value is in the middle of the array
   :answer_c: The value is the last one in the array
   :answer_d: The value isn't in the array
   :correct: d
   :feedback_a: This would be true for the shortest execution. This would only take one execution of the loop.
   :feedback_b: Why would this be the longest execution?
   :feedback_c: There is one case that will take longer.
   :feedback_d: A sequential search loops through the elements of an array or list starting with the first and ending with the last and returns from the loop as soon as it finds the passed value. It has to check every value in the array when the value it is looking for is not in the array.

   Which will cause the *longest* execution of a sequential search looking for a value in an array of integers?

.. mchoice:: qss_2
   :answer_a: The value is the first one in the array
   :answer_b: The value is in the middle of the array
   :answer_c: The value is the last one in the array
   :answer_d: The value isn't in the array
   :correct: a
   :feedback_a: This would only take one execution of the loop.
   :feedback_b: Are you thinking of binary search?
   :feedback_c: This would be true if you were starting at the last element, but the algorithm in the course description starts with the first element.
   :feedback_d: This is true for the longest execution time, but we are looking for the shortest.

   Which will cause the *shortest* execution of a sequential search looking for a value in an array of integers?

Of course you can also look for a string in an array or list.  But, when you look for a string be sure to use ``equals`` rather than ``==``.  Remember that ``==`` is only true when the two references refer to the same object, while ``equals`` returns true if the characters in the two objects are the same.

.. activecode:: seqSearchStr
  :language: java

  Demonstration of a linear search for a String.
  ~~~~
  public class SearchTest
  {

     public static int sequentialSearch(String[] elements, String target)
     {
        for (int j = 0; j < elements.length; j++)
        {
           if (elements[j].equals(target))
           {
              return j;
           }
       }
       return -1;
     }

     public static void main(String[] args)
     {
        String[] arr1 = {"blue", "red", "purple", "green"};

        // test when the target is in the array
        int index = sequentialSearch(arr1,"red");
        System.out.println(index);

        // test when the target is not in the array
        index = sequentialSearch(arr1,"pink");
        System.out.println(index);
     }
  }

To see this executing using the Java Visualizer click on this `String-SeqSearch <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++public+class+SearchTest%0A++%7B%0A%0A+++++public+static+int+sequentialSearch(String%5B%5D+elements,+String+target)%0A+++++%7B%0A++++++++for+(int+j+%3D+0%3B+j+%3C+elements.length%3B+j%2B%2B)%0A++++++++%7B%0A+++++++++++if+(elements%5Bj%5D.equals(target))%0A+++++++++++%7B%0A++++++++++++++return+j%3B%0A+++++++++++%7D+%0A+++++++%7D%0A+++++++return+-1%3B%0A+++++%7D%0A+++++%0A+++++public+static+void+main(String%5B%5D+args)%0A+++++%7B%0A++++++++String%5B%5D+arr1+%3D+%7B%22blue%22,+%22red%22,+%22purple%22,+%22green%22%7D%3B%0A++++++++%0A++++++++//+test+when+the+target+is+in+the+array%0A++++++++int+index+%3D+sequentialSearch(arr1,%22red%22)%3B%0A++++++++System.out.println(index)%3B%0A++++++++%0A++++++++//+test+when+the+target+is+not+in+the+array%0A++++++++index+%3D+sequentialSearch(arr1,%22pink%22)%3B%0A++++++++System.out.println(index)%3B%0A+++++%7D%0A++%7D&mode=display&curInstr=0>`_

Binary Search
--------------

..	index::
	single: binary search
	pair: search; binary

A binary search can only be used if the data is sorted.

It compares a target value to the value in the middle of a range of indices.  If the value isn't found it looks again in either the left or right half of the current range. Each time through the loop it eliminates half the values in the search area until either the value is found or there is no more data to look at.  Click on this `Binary Search Animation <http://cs.armstrong.edu/liang/animation/web/BinarySearch.html>`_ to see how it works.

Binary search calculates the middle index as ``left + right / 2`` where left starts out at 0 and right starts out at the array length - 1 (the index of the last element).   Remember that integer division gives an integer result so 2.5 becomes 2.  It compares the value at the middle index with the target value (the value you are searching for).  If the target value is less than the value at the middle it sets right to middle minus one.  If the target value is greater than the value at the middle it sets left to middle plus one. Otherwise the values match and it returns the middle index.    It also stops when left is greater than right which indicates that the value wasn't found and it returns -1.

The code for ``binarySearch`` below is from the AP CS A course description. A recursive version of this algorithm will be covered in Unit 10.

.. activecode:: binSearch
  :language: java

  Demonstration of iterative binary search.
  ~~~~
  public class SearchTest
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

        // test when the target is in the middle
        int index = binarySearch(arr1,15);
        System.out.println(index);

        // test when the target is the first item in the array
        index = binarySearch(arr1,-20);
        System.out.println(index);

        // test when the target is in the array - last
        index = binarySearch(arr1,432);
        System.out.println(index);

        // test when the target is not in the array
        index = binarySearch(arr1,53);
        System.out.println(index);
     }
  }

To see this executing using the Java Visualizer click on the following link: `BinarySearch Ex <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=++public+class+SearchTest%0A++%7B%0A+++++%0A+++++/**+%0A++++++*+Find+the+index+of+a+value+in+an+array+of+integers+sorted+in+ascending+order.%0A++++++*+%40param+elements+an+array+containing+the+items+to+be+searched.+Precondition%3A+items+in+elements+are+sorted+in+ascending+order.%0A++++++*+%40param+target+the+item+to+be+found+in+elements.%0A++++++*+%40return+an+index+of+target+in+elements+if+target+found%3B%0A++++++*+-1+other+wise.%0A++++++*/%0A+++++public+static+int+binarySearch(int%5B%5D+elements,+int+target)+%7B%0A++++++++int+left+%3D+0%3B%0A++++++++int+right+%3D+elements.length+-+1%3B%0A++++++++while+(left+%3C%3D+right)+%0A++++++++%7B%0A+++++++++++int+middle+%3D+(left+%2B+right)+/+2%3B+%0A+++++++++++if+(target+%3C+elements%5Bmiddle%5D)%0A+++++++++++%7B%0A++++++++++++++right+%3D+middle+-+1%3B%0A+++++++++++%7D%0A+++++++++++else+if+(target+%3E+elements%5Bmiddle%5D)+%0A+++++++++++%7B%0A++++++++++++++left+%3D+middle+%2B+1%3B+%0A+++++++++++%7D%0A+++++++++++else+%7B%0A++++++++++++++return+middle%3B+%0A+++++++++++%7D%0A+++++++++%7D%0A+++++++++return+-1%3B%0A++++++%7D%0A++++++%0A++++++public+static+void+main(String%5B%5D+args)%0A++++++%7B%0A+++++++++int%5B%5D+arr1+%3D+%7B-20,+3,+15,+81,+432%7D%3B%0A++++++++%0A+++++++++//+test+when+the+target+is+in+the+array%0A+++++++++int+index+%3D+binarySearch(arr1,-20)%3B%0A+++++++++System.out.println(index)%3B%0A++++++++%0A+++++++++//+test+when+the+target+is+not+in+the+array%0A+++++++++index+%3D+binarySearch(arr1,53)%3B%0A+++++++++System.out.println(index)%3B%0A+++++++%7D%0A++%7D%0A&mode=display&curInstr=0>`_

You can also use binary search with a string array.  But, when you look for a string be sure to use ``compareTo()`` method rather than ``<`` or ``>`` which can only be used with primitive types.  Remember how the String method compareTo() works:

   -  **int compareTo(String other)** returns a negative value if the current string is less than the ``other`` string, 0 if they have the same characters in the same order, and a positive value if the current string is greater than the ``other`` string.

.. activecode:: binSearchStrings
  :language: java
  
  Demonstration of binary search with strings using compareTo.
  ~~~~
  public class BinSearchStrings
  {
     public static int binarySearch(String[] elements, String target) {
        int left = 0;
        int right = elements.length - 1;
        while (left <= right)
        {
           int middle = (left + right) / 2;
           if (target.compareTo(elements[middle]) < 0)
           {
              right = middle - 1;
           }
           else if (target.compareTo(elements[middle]) > 0)
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
        String[] arr1 = {"apple","banana","cherry","kiwi","melon"};

        // test when the target is in the middle
        int index = binarySearch(arr1,"cherry");
        System.out.println(index);

        // test when the target is the first item in the array
        index = binarySearch(arr1,"apple");
        System.out.println(index);

        // test when the target is in the array - last
        index = binarySearch(arr1,"melon");
        System.out.println(index);

        // test when the target is not in the array
        index = binarySearch(arr1,"pear");
        System.out.println(index);
     }
  }
  
Runtimes
--------

How do we choose between two algorithms that solve the same problem? They usually have different characteristics and **runtimes** which measures how fast they run. For the searching problem, it depends on your data. 

Binary search is much faster than linear search, especially on large data sets, but it can only be used on sorted data. Often with runtimes, computer scientist think about the **worst case behavior**. With searching, the worst case is usually if you cannot find the item. With linear search, you would have to go through the whole array before realizing that it is not there, but binary search is much faster even in this case because it eliminates half the data set in each step. We can measure an informal runtime by just counting the number of steps.

Here is a table that compares the worst case runtime of each search algorithm given an array of n elements. The runtime here is measured as the number of times the loop runs in each algorithm or the number of elements we need to check in the worst case when we don't find the item we are looking for. Notice that with linear search, the worst case runtime is the size of the array n, because it has to look through the whole array. For the binary search runtime, we can calculate the number of times you can divide n in half until you get to 1. So, for example 8 elements can be divided in half to narrow down to 4 elements, which can be further divided in half to narrow down to 2 elements, which can be further divided in half to get down to 1 element, and then if that is wrong, to 0 elements, so that is 4 divisions or guesses to get the answer (8->4->2->1->0). In the table below, every time we double the size of N, we need at most one more guess or comparison with binary search. It's much faster than linear search!

==== ============== ==============
N    Linear Search  Binary Search
==== ============== ==============
2    2 comparisons  2 comparisons
---- -------------- --------------
4    4              3
---- -------------- --------------
8    8              4
---- -------------- --------------
16   16             5
---- -------------- --------------
100  100            7
==== ============== ==============

Runtimes can be described with mathematical functions. For an array of size n, linear search runtime is a linear function, and binary search runtime is a function of log base 2 of n (or log n + 1 comparisons). This is called the big-O runtime function in computer science, for example O(log n) vs. O(n). You can compare the growth of functions like n and log\ :sub:`2`\ n as n, the data size, grows and see that binary search runs much faster for any n.  You don't need to know the log n runtime growth function for the AP exam, but you should be able to calculate how many steps binary search takes for a given n by counting how many times you can divide it in half. Or you can start at 1 and keep a count of how many times you can double it with the powers of two (1, 2, 4, 8, 16, 32, 64, 128, 512, 1024, etc.) until you reach a number that is slightly above n. 


|Exercise| **Check Your Understanding**

.. mchoice:: qbs_1
   :answer_a: The value is the first one in the array
   :answer_b: The value is in the middle of the array
   :answer_c: The value is the last one in the array
   :answer_d: The value isn't in the array
   :correct: b
   :feedback_a: This would be true for sequential search, not binary.
   :feedback_b: If the value is in the middle of the array the binary search will return after one iteration of the loop.
   :feedback_c: How would that be the shortest in a binary search?
   :feedback_d: This is true for the longest execution time, but we are looking for the shortest.

   Which will cause the *shortest* execution of a binary search looking for a value in an array of integers?

.. mchoice:: qbs_2
   :answer_a: I only
   :answer_b: I and II
   :answer_c: II only
   :answer_d: II and III
   :correct: c
   :feedback_a: You can use a binary search on any type of data that can be compared, but the data must be in order.
   :feedback_b: You can use a binary search on any type of data that can be compared.
   :feedback_c: The only requirement for using a Binary Search is that the values must be ordered.
   :feedback_d: The array can contain duplicate values.

   Which of the following conditions must be true in order to search for a value using binary search?

   .. code-block:: java

      I. The values in the array must be integers.
      II. The values in the array must be in sorted order.
      III. The array must not contain duplicate values.

.. mchoice:: qbs_3
   :answer_a: 2
   :answer_b: 1
   :answer_c: 3
   :correct: a
   :feedback_a: It will first compare with the value at index 2 and then index 4 and then return 4.
   :feedback_b: This would be true if we were looking for 23.
   :feedback_c: This would be true if we were looking for 31.

   How many times would the loop in the binary search run for an array  int[] arr = {2, 10, 23, 31, 55, 86} with binarySearch(arr,55)?

.. mchoice:: qbs_4
   :answer_a: approximately 15 times
   :answer_b: approximately 9 times
   :answer_c: 500 times
   :answer_d: 2 times
   :correct: b
   :feedback_a: How many times can you divide 500 in half?
   :feedback_b: You can divide 500 in half, 9 times, or you can observe that 2^9 = 512 which is slightly bigger than 500. 
   :feedback_c: How many times can you divide 500 in half?
   :feedback_d: How many times can you divide 500 in half?

   If you had an ordered array of size 500, what is the maximum number of iterations required to find an element with binary search?

|Groupwork| Programming Challenge : Search Runtimes
---------------------------------------------------



.. |repl.it| raw:: html

   <a href= "https://repl.it/@BerylHoffman/SpellCheckerArrayListSearches" style="text-decoration:underline" target="_blank">repl.it</a>

.. |Google doc| raw:: html

   <a href= "https://docs.google.com/document/d/1VrQf7wFIEIu7qfOg7FYUTeNWrdrRsPw4eJSdehhz4dM/edit?usp=sharing" style="text-decoration:underline" target="_blank" >Google document</a>
   
Let's go back to the spell checker that we programmed in Unit 6. Remember that it used linear search to find a word in the dictionary. The dictionary file was actually in alphabetical order though, so we could have used a much faster binary search. 

Here is a version of the spellchecker on |repl.it| that uses an ArrayList for the dictionary and a linear search method. Notice that get(i) is used instead of [] to get an element in the ArrayList dictionary at index i. The search also prints out the index where it found the word. This is an informal runtime that tells us how many words it had to check.  Run the code in the window below or on |repl.it| with the following test cases and record the runtime for each word in this |Google doc| (do File/Make a Copy) also seen below to record your answers. 

.. raw:: html

    <iframe height="400px" width="100%" src="https://docs.google.com/document/d/1VrQf7wFIEIu7qfOg7FYUTeNWrdrRsPw4eJSdehhz4dM/edit?usp=sharing&rm=minimal" style="max-width:90%; margin-left:5%" ></iframe>

   
.. raw:: html

    <iframe height="600px" width="100%" src="https://repl.it/@BerylHoffman/SpellCheckerArrayListSearches?lite=true" scrolling="no" style="max-width:90%; margin-left:5%"  frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Now, login to repl and start changing the code to save the |repl.it|  as your own project. The SpellChecker.java file also has a binarySpellCheck(word) method defined, but it does not print out the number of words checked. Looking at the linearSpellCheck(word) method as a guide, add in a counter variable, and increment it in the binary search loop after finding the middle of the list, and print it out before returning true or false. Change the Main.java code to call the binarySpellCheck method instead of the linearSpellCheck method, and try all the same test case words again. Record the runtimes for binary search and compare with the linear search times. What do you notice? Which one was faster in general? Were there some cases where each was faster? How fast were they with misspelled words? Record your answers in the window below.



.. shortanswer:: challenge7-5-binary-search

   After you complete your code on repl, paste in a link (click on share) here. Also, write in your comparison of the linear vs. binary search runtimes based on your test cases. Were there any cases where one was faster than the other? How did each perform in the worst case when a word is misspelled?
   

Summary
---------

- There are standard algorithms for searching.

- Sequential/linear search algorithms check each element in order until the desired value is found or all elements in the array or ArrayList have been checked.

- The binary search algorithm starts at the middle of a sorted array or ArrayList and eliminates half of the array or ArrayList in each iteration until the desired value is found or all elements have been eliminated.

- Data must be in sorted order to use the binary search algorithm. This algorithm will be covered more in Unit 10.

- Informal run-time comparisons of program code segments can be made using statement execution counts.


