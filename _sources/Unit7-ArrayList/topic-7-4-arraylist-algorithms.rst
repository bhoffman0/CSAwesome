.. include:: ../common.rst

.. qnum::
   :prefix: 7-4-
   :start: 1

|Time90|

ArrayList Algorithms
=====================

There are standard ArrayList algorithms that utilize traversals to:

  - Insert elements
  - Delete elements
  - Determine the minimum or maximum value
  - Compute a sum, average, or mode of elements
  - Search for a particular element in the array
  - Determine if at least one element has a particular property
  - Determine if all elements have a particular property
  - Access all consecutive pairs of elements
  - Determine the presence or absence of duplicate elements
  - Determine the number of elements meeting specific criteria
  - Shift or rotate elements left or right
  - Reverse the order of the elements

Here are two common ArrayList traversal loops that can be used for these algorithms:

.. code-block:: java


  for (Type obj : list)
  {
      if (obj ....)
          ...
  }

  for(int i=0; i < list.size(); i++)
  {
     if (list.get(i) ....)
         ...
  }


Add/Remove Elements
--------------------

You should be able to trace through code that uses all the basic ArrayList methods like the following.

|Exercise| **Check Your Understanding**

.. mchoice:: qListRem3
   :answer_a: [1, 2, 3, 4, 5]
   :answer_b: [1, 2, 4, 5, 6]
   :answer_c: [1, 2, 5, 4, 6]
   :answer_d: [1, 5, 2, 4, 6]
   :correct: d
   :feedback_a: The <code>set</code> will replace the 3 at index 2 so this isn't correct.
   :feedback_b: The <code>add</code> with an index of 1 and a value of 5 adds the 5 at index 1 not 3. Remember that the first index is 0.
   :feedback_c: The <code>set</code> will change the item at index 2 to 4.  The <code>add</code> of 5 at index 1 will move everything else to the right and insert 5.  The last <code>add</code> will be at the end of the list.
   :feedback_d: <code>add</code> without an index adds at the end, <code>set</code> will replace the item at that index, <code>add</code> with an index will move all current values at that index or beyond to the right.

   What will print when the following code executes?

   .. code-block:: java

      List<Integer> numList = new ArrayList<Integer>();
      numList.add(new Integer(1));
      numList.add(new Integer(2));
      numList.add(new Integer(3));
      numList.set(2,new Integer(4));
      numList.add(1, new Integer(5));
      numList.add(new Integer(6));
      System.out.println(numList);

You can step through the code above by clicking on the following `Example1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.set(2,+new+Integer(4))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(1,+new+Integer(5))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(6))%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. mchoice:: qListRem4
   :answer_a: [2, 3]
   :answer_b: [1, 2, 3]
   :answer_c: [1, 2]
   :answer_d: [1, 3]
   :correct: d
   :feedback_a: The <code>remove</code> will remove the item at the given index.
   :feedback_b: The item at index 1 will be removed and all the other values shifted left.
   :feedback_c: The 3 is at index 2.  The item at index 1 will be removed.
   :feedback_d: The item at index 1 is removed and the 3 is moved left.

   What will print when the following code executes?

   .. code-block:: java

      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(new Integer(1));
      list1.add(new Integer(2));
      list1.add(new Integer(3));
      list1.remove(1);
      System.out.println(list1);

You can step through the code above by clicking on the following `Example2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.remove(1)%3B%0A++++++System.out.println(list1)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

.. activecode:: arrayListRemoveInLoop
   :language: java
   :autograde: unittest

   The following code is supposed to initialize the ArrayList arr to [0,1,2,3,4] and then remove every other element to get [1,3]. However, when you remove an element the size of the array changes and elements move up an index! See if you can figure out why you get the unexpected result. Try the CodeLens button to trace through the code.
   ~~~~
   import java.util.*;

   public class ArrayListLoop
   {
       public static void main(String[] args)
       {
           ArrayList<Integer> arr = new ArrayList<Integer>();
           for (int i = 0; i < 5; i++)
           {
               arr.add(i);
           }
           for (int i = 0; i < arr.size(); i++)
           {
               if (i % 2 == 0)
               {
                   System.out.println("Removing element " + i + " : " + arr.get(i));
                   arr.remove(i);
               }
           }
           System.out.println(arr);
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "Removing element 0: 0\nRemoving element 2: 3\n[1, 2, 4]";
           boolean passed = getResults(expect, output, "Expected output from main", true);
           assertTrue(passed);
       }
   }

.. note::

    If you use add or remove inside a loop that traverses an ArrayList, you may get unexpected results because the size of the ArrayList has changed!

Min, Max, Sum, Average
------------------------

You should be able to write code that finds the minimum, maximum, sum, and average of the elements in an ``ArrayList``.

.. parsonsprob:: arraylistAvgParsons
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following method should calculate the average from an ArrayList of Integers (the parameter).  But, the blocks have been mixed up and include one extra block that is not needed in a correct solution.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  Click the Check button to check your solution.
   -----
   public static double average(ArrayList<Integer> nums)
   {
   =====
      double sum = 0;
   =====
      for (int i = 0; i < nums.size(); i++)
      {
   =====
      for (int i = 0; i < nums.length; i++)
      { #paired
   =====
          sum += nums.get(i);
   =====
      } //end for loop
   =====
      return (sum / nums.size());
   =====
   } //end average method


.. parsonsprob:: arraylistMinParsons
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should return the minimum int given an ArrayList of Integers (the parameter).  But, the blocks have been mixed up and include one extra block that is not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static int findMin(ArrayList<Integer> nums) 
   {
   =====
       int min = nums.get(0);
   =====
       int min = nums[0]; #paired
   =====
       for (int i = 0; i < nums.size(); i++) 
       {
   =====
           if (nums.get(i) < min) 
           {
   =====
               min = nums.get(i);
   =====
           } // end if statement
   =====
       } //end for loop
   =====
       return min;
   =====
   } //end findMin method

.. activecode:: arraylistMax
        :language: java
        :practice: T
        :autograde: unittest

        Create a ``findMax`` method that finds and returns the largest value in an ArrayList of Integers. 
        ~~~~
        import java.util.ArrayList;

        public class ListMax
        {
            public static int findMax(ArrayList<Integer> nums)
            {
                // YOUR CODE HERE //

                return 0;
            } 

            public static void main(String[] args)
            {
                ArrayList<Integer> list = new ArrayList<Integer>();
                list.add(1);
                list.add(3);
                list.add(12);
                list.add(0);
                list.add(9);

                System.out.println("Max: " + findMax(list));
            } 
        } 
        ====
        import static org.junit.Assert.*;

        import org.junit.*;

        import java.io.*;

        import java.util.ArrayList;

        public class RunestoneTests extends CodeTestHelper
        {
            public RunestoneTests()
            {
                super("ListMax");
            }

            @Test
            public void test1()
            {
                String output = getMethodOutput("main");
                String expect = "Max: 12";

                boolean passed = getResults(expect, output, "Main outpu");
                assertTrue(passed);
            }
            @Test
            public void test2()
            {
                ArrayList<Integer> list = new ArrayList<Integer>();
                list.add(2);
                list.add(4);
                list.add(0);
                String expect = "4";
                String output = "" + ListMax.findMax(list);

                boolean passed = getResults(expect, output, "findMax with list 2,4,0");
                assertTrue(passed);
            }
        }

Finding a property
---------------------

You should be able to write code that determines if at least one element has a particular property, if all elements have a particular property, or the number of elements having a particular property. This means that you will need to use an ``if`` statement to check for the property inside a loop. In the AP exam, the property is often given as boolean method for you to use inside the loop, for example ``isEven(num)`` returns true if the number is even. 

.. parsonsprob:: arraylistEvenParsons
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should return true if at least one element in an ArrayList of Integers (the parameter) is even.  But, the blocks have been mixed up and include extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static boolean hasEven(ArrayList<Integer> nums)
   {
   =====
       for (int i = 0; i < nums.size(); i++)
       {
   =====
       for (int i = 0; i < nums.length; i++)
       { #paired
   =====
           if (nums.get(i) % 2 == 0)
           {
   =====
               return true;
   =====
           } // end if statement
   =====
           else
           {
               return false;        
           } #distractor
   =====
       } //end for loop
   =====
       return false;
   =====
   } //end hasEven method


The following method counts the number of odd numbers in an ``ArrayList`` of Integers. 

.. activecode:: countOddArrayList
    :language: java
    :autograde: unittest
    :practice: T

    Write a method ``countOdd`` that returns the number of odd numbers in an ArrayList of Integers.  
    ~~~~
    import java.util.*;
    
    public class TestCountOdd
    {
         public static int countOdd(ArrayList<Integer> nums)
         {
              // Add code here
              return 0;
         }
    
         public static void main(String[] args)
         {
              // instantiate ArrayList and fill with Integers
              ArrayList<Integer> values = new ArrayList<Integer>();
              int[] nums = {1, 5, 7, 9, -2, 3, 2};
              for (int i = 0; i < nums.length; i++)
              {
                values.add(nums[i]);
              }
              int result = countOdd(values);
              System.out.println("Expected Result:\t 5");
              System.out.println("Your Result:\t\t " + result);
         }
    }
    
    ====
    import static org.junit.Assert.*;
    
    import org.junit.*;
    
    import java.io.*;
    import java.util.*;
    
    public class RunestoneTests extends CodeTestHelper
    {
         public RunestoneTests()
         {
              super("TestCountOdd");
         }
         @Test
         public void testMain() throws IOException
         {
              String output = getMethodOutput("main");
              String expect = "Expected Result: 5\nYour Result:     5\n";
              boolean passed = getResults(expect, output, "Expected output from main");
              assertTrue(passed);
         }
    
         @Test
         public void testCall()
         {
                ArrayList<Integer> list = new ArrayList<Integer>();
                list.add(2);
                list.add(-2);
                list.add(1);
                list.add(11);
                String expect = "2";
                String output = "" + TestCountOdd.countOdd(list);
                boolean passed = getResults(expect, output, "countOdd with list 2,-2,1,11");
                assertTrue(passed);
         }
    }

Pairs and Duplicates
---------------------

In the last lesson, the coding challenge involved finding pairs. You should be able to write code that accesses all consecutive pairs of elements in an ``ArrayList`` and determines the presence or absence of duplicate elements. These problems often require nested loops.

.. parsonsprob:: arraylistDuplicatesParsons
    :numbered: left
    :practice: T
    :adaptive:
    :noindent:
    
    The following program segment is a method that should return true if there are any duplicate elements in an ArrayList of Integers (the parameter).  But, the blocks have been mixed up and include extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
    -----
    public static boolean hasDups(ArrayList<Integer>
                                               a)
    {
    =====
      for(int i=0; i< a.size(); i++)
      {
    =====
        for(int j=i+1; j< a.size(); j++)
        {
    =====
        for(int j=i; j< a.size()-1; j++)
        { #paired
    =====
         if(a.get(i).equals(a.get(j)))
         {
    =====
         if(a.get(i) == a.get(j))
         { #paired
    =====
         if (a[i] == a[j])
         {    #paired
    =====
              return true;
    =====
          } // end if
    =====
        } //end inner for loop
    =====
      } //end outer for loop
    =====
      return false;
    =====
    } //end hasDuplicates method

.. activecode:: arraylistDuplicates
    :language: java
    :autograde: unittest
    :practice: T

    Write a method ``hasDuplicates`` that returns true if there are any duplicate elements in an ArrayList of Integers.
    ~~~~
    import java.util.*;

    public class TestDuplicates
    {
        public static boolean hasDuplicates(ArrayList<Integer> nums)
        {
            // Add code here
            return false;
        }

        public static void main(String[] args)
        {
            // instantiate ArrayList and fill with Integers
            ArrayList<Integer> values1 = new ArrayList<Integer>();
            ArrayList<Integer> values2 = new ArrayList<Integer>();

            for (int i = 0; i < 5; i++)
            {
                values1.add(i);
                values2.add(i);
                values2.add(i); // add duplicates to values2
            }
            boolean result1 = hasDuplicates(values1);
            boolean result2 = hasDuplicates(values2);
            System.out.println("Expected Result: false, true");
            System.out.println("Your Result: " + result1 + ", " + result2);
        }
    }
    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;
    import java.util.*;

    public class RunestoneTests extends CodeTestHelper
    {
        public RunestoneTests()
        {
            super("TestDuplicates");
        }
        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "Expected Result: false, true\nYour Result: false, true\n";
            boolean passed = getResults(expect, output, "Expected output from main");
            assertTrue(passed);
        }

        @Test
            public void testFor()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "for");
                boolean passed = count >= 2;
                getResults("2 loop(s)", count + " loop(s)", "Counting number of for loops", passed);
                assertTrue(passed);
            }
        @Test
            public void test2()
            {
                ArrayList<Integer> list = new ArrayList<Integer>();
                list.add(2);
                list.add(4);
                list.add(0);
                String expect = "false";
                String output = "" + TestDuplicates.hasDuplicates(list);
                boolean passed = getResults(expect, output, "hasDuplicates with list 2,4,0");
                assertTrue(passed);
            }
            @Test
            public void test3()
            {
                ArrayList<Integer> list = new ArrayList<Integer>();
                list.add(2);
                list.add(4);
                list.add(0);
                list.add(4);
                String expect = "true";
                String output = "" + TestDuplicates.hasDuplicates(list);
                boolean passed = getResults(expect, output, "hasDuplicates with list 2,4,0,4");
                assertTrue(passed);
            }
    }

Shift/Rotate an ``ArrayList``
------------------------------

We can write code that shifts or rotates elements left or right in an ``ArrayList``. The following code rotates the elements in an ``ArrayList`` to the right by one position.

.. parsonsprob:: rotateArrayListParsons
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should rotate the elements in an ArrayList of Integers (the parameter) to the right by one position.  But, the blocks have been mixed up and include extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static void rotateRight(ArrayList<Integer> nums)
   {
   =====
       int last = nums.get(nums.size()-1);
   =====
       int last = nums[nums.length-1]; #paired
   =====
       for (int i = nums.size()-1; i > 0; i--)
       {
   =====
       for (int i = nums.size()-1; i >= 0; i--)
       { #paired
   =====
           nums.set(i, nums.get(i-1));
   =====
           nums[i] = nums[i-1]; #paired
   =====
       } //end for loop
   =====
       nums.set(0, last);
   =====
       nums[0] = last; #paired
   =====
   } //end rotateRight method 


.. activecode:: rotateNewList
    :language: java
    :autograde: unittest
    :practice: T

    Write a method ``rotateLeft`` that rotates the elements in an ``ArrayList`` of Integers to the left by one position.
    ~~~~
    import java.util.*;

    public class TestRotate
    {
        public static void rotateLeft(ArrayList<Integer> nums)
        {
            // Add code here
        }

        public static void main(String[] args)
        {
            // instantiate ArrayList and fill with Integers
            ArrayList<Integer> values = new ArrayList<Integer>();
            int[] nums = {1, 5, 7};
            for (int i = 0; i < nums.length; i++)
            {
                values.add(nums[i]);
            }
            rotateLeft(values);
            System.out.println("Expected Result: [5, 7, 1]");
            System.out.println("Your Result: " + values);
        }
    }
    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;
    import java.util.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public RunestoneTests()
        {
            super("TestRotate");
        }
        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "Expected Result: [5, 7, 1]\nYour Result: [5, 7, 1]\n";
            boolean passed = getResults(expect, output, "Expected output from main");
            assertTrue(passed);
        }
        @Test
        public void testSet()
        {
            String target = "set";
            boolean passed =
                    checkCodeContains(
                            "set method",
                            target);
            assertTrue(passed);
        }
        @Test
            public void test2()
            {
                ArrayList<Integer> list = new ArrayList<Integer>();
                list.add(2);
                list.add(4);
                list.add(0);
                list.add(-2);
                String expect = "[4, 0, -2, 2]";
                String output = "" + TestRotate.rotateLeft(list);
                boolean passed = getResults(expect, output, "rotateLeft with list 2,4,0,-2");
                assertTrue(passed);
            }
    }

Reversing an ``ArrayList``
-----------------------------

The following examples reverse the order of the elements in an ``ArrayList`` by adding each element to the beginning of a new ``String`` or ``ArrayList``. 

.. parsonsprob:: reverseArrayListParsons
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should be a method that traverses through an ArrayList of Strings (the parameter) and print out the elements in reverse order -- so  {"cat", "dog", "mouse"} should print "mouse, dog, cat, " as output.  Assume the ArrayList "myList" has been instantiated and filled with Strings.  But, the blocks have been mixed up and include two extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the Check button to check your solution.
   -----
   public static void printBackwards(ArrayList<String>
                                               myList)
   {
   =====
     for(int i=myList.size()-1; i >= 0; i--)
     {
   =====
     for(int i=myList.size()-1; i > 0; i--)
     { #paired
   =====
        System.out.print(myList.get(i)+", ");
   =====
        System.out.print(myList[i]+", "); #paired
   =====
     } //end for loop
   } //end printBackwards method


.. activecode::  reverseNewList
              :language: java
              :autograde: unittest
              :practice: T

              Complete the method ``reverse`` below to return an   ``ArrayList`` containing Integers in the reversed order of the ArrayList parameter ``list``. Hint: use a for loop with one line inside it to add to the new list.
              ~~~~
              import java.util.*;

              public class TestReverse
              {
                  public static ArrayList<Integer> reverse(ArrayList<Integer> list)
                  {
                      ArrayList<Integer> reversed = new ArrayList<Integer>();
                      // Use an enhanced for loop here

                      return reversed;
                  }

                  public static void main(String[] args)
                  {
                      // instantiate ArrayList and fill with Integers
                      ArrayList<Integer> values = new ArrayList<Integer>();
                      for (int i = 0; i < 4; i++)
                      {
                          values.add(i);
                      }
                      ArrayList<Integer> result = reverse(values);
                      System.out.println("Expected Result:\t [3, 2, 1, 0]");
                      System.out.println("Your Result:\t\t " + result);
                  }
              }
              ====
              import static org.junit.Assert.*;

              import org.junit.*;

              import java.io.*;
              import java.util.*;

              public class RunestoneTests extends CodeTestHelper
              {
                  @Test
                  public void testMain() throws IOException
                  {
                      String output = getMethodOutput("main");
                      String expect =
                              "Expected Result: [3, 2, 1, 0]\n"
                                      + "Your Result:     [3, 2, 1, 0]\n";

                      boolean passed = getResults(expect, output, "Expected output from main");
                      assertTrue(passed);
                  }

                  @Test
                  public void testAdd()
                  {
                      String target = "reversed.add(0";
                      boolean passed =
                              checkCodeContains(
                                      "add method called to add to the beginning of reversed",
                                      target);
                      assertTrue(passed);
                  }
                  @Test
                  public void test2()
                  {
                        ArrayList<Integer> list = new ArrayList<Integer>();
                        list.add(2);
                        list.add(4);
                        list.add(6);
                        String expect = "[6, 4, 2]";
                        String output = "" + TestReverse.reverse(list);
                        boolean passed = getResults(expect, output, "reverse with list 2,4,6");
                        assertTrue(passed);
                    }
                  }



Multiple or Parallel Data Structures
-------------------------------------

Some algorithms require multiple ``String``, array, or ``ArrayList`` objects to be traversed simultaneously. For example, the following code traverses two parallel ``ArrayList``\s that hold the grades for different tests.

.. activecode:: parallelArrayLists
   :language: java
   :autograde: unittest
   :practice: T

   Complete the code below to add the items in parallel ArrayLists to total.
   ~~~~
   import java.util.*;

   public class ParallelTests
   {
       public static void main(String[] args)
       {
           ArrayList<Integer> test1Grades = new ArrayList<Integer>();
           ArrayList<Integer> test2Grades = new ArrayList<Integer>();
           test1Grades.add(100);
           test2Grades.add(100);
           test1Grades.add(80);
           test2Grades.add(70);
           test1Grades.add(70);
           test2Grades.add(90);
           double total = 0;
           // Write 1 indexed for loop that adds 
           // test1Grades and test2Grades at index i to total
           


           int numberOfGrades = test1Grades.size() * 2;
           System.out.println("Average over two tests: " + total / numberOfGrades);
       }
   }
   ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void testMain() throws IOException
        {
            String output = getMethodOutput("main");
            String expect = "Average over two tests: 85.0";
            boolean passed = getResults(expect, output, "Expected output from main");
            assertTrue(passed);
        }
          @Test
            public void test2()
            {
                String code = getCodeWithoutComments();
                int count = countOccurences(code, "for");
                boolean passed = count == 1;
                passed = getResults("1 loop", count + " loop", "use only 1 for loop");
                assertTrue(passed);
            }
    }


FRQ Practice
------------

We encourage you to work in pairs or groups to tackle the following challenging FRQ problems and take them one step at a time. These will get easier with practice!

.. toctree::
   :maxdepth: 3

   stringScrambleB.rst
   climbClubA.rst
   climbClubB.rst
   climbClubC.rst
   cookieOrderA.rst
   cookieOrderB.rst
   2016freeresponseQ4A.rst
   2016freeresponseQ4B.rst
   2019delimitersQ3a.rst
   2019delimitersQ3b.rst
   2013gridworldQ3A.rst
