.. qnum::
   :prefix: 7-1-
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
    
Intro to ArrayLists
=======================

..	index::
	single: arraylist
	pair: arraylist; definition


.. figure:: Figures/lists.jpg
    :width: 300px
    :align: left
    :figclass: align-center

    Figure 1: A couple of lists
    
In the last unit, we learned about arrays to hold collections of related data. But arrays have limitations. The size of an array is established at the time of creation and cannot be changed. What if you don't know how big the collection of data will be? What if you want to add and remove items from the collection and change the size of the collection while the program is running? For example, if you wanted to represent a shopping list, you might add to the list throughout the week and remove things from the list while you are shopping. You probably would not know how many items will be on the list at the beginning of the week.

    
Luckily, Java has a class  called **ArrayList** which is a re-sizable array. An ArrayList has an underlying array that grows or shrinks as needed. You can use ArrayList instead of arrays whenever you don't know the size of the array you need or you know that you will add and remove items changing the array's size dynamically during run time. An ArrayList is **mutable**, meaning it can change during runtime by adding and removing objects from it.

An ArrayList is often called just a **list** on the CS A exam. In past AP CS A exams, the interface **List** is often used to declare an ArrayList. Interfaces are no longer on the exam, but if you see List being used, just assume it's an ArrayList.

.. mchoice:: qloopList
   :answer_a: A list will always use less memory than an array.
   :answer_b: A list can store objects, but arrays can only store primitive types.
   :answer_c: A list has faster access to the last element than an array.
   :answer_d: A list resizes itself as necessary as items are added, but an array does not.
   :correct: d
   :feedback_a: No, an ArrayList grows as needed so it will typically be bigger than the data you put it in. If you try to add more data and the array is full, it usually doubles in size.
   :feedback_b: No, you can have an array of objects.
   :feedback_c: No, an ArrayList is implemented using an array so it has the same access time to any index as an array does.
   :feedback_d: An ArrayList is really a dynamic array (one that can grow or shrink as needed).

   Which of the following is a reason to use an ArrayList instead of an array?
   
.. Say you create an array of 5 elements.  What happens when you want to add a 6th one?  You will have to create another bigger array and copy over the items from the old array and then add the new value at the end. What length should the new array be?  If you just create an array for 6 elements you won't waste any space, but you will have to create a new array again if you want to add another item.  If you create a larger array than you need (usually about twice as big), you will also have to keep track of how many items are actually in the list, since the length of the array isn't the same thing as the number of items in the list. 

.. .. figure:: Figures/whyLists.png
    :width: 400px
    :align: center
    :figclass: align-center

    Figure 2: Original array, after creating a new array that can contain one more item, and an array that is twice as big as the original with a size to indicate how many values are valid in the array.




Import Package
------------------------

..	index::
	single: import statement
	
The ``ArrayList`` class is in the ``java.util`` package.  A **package** is a set or library of related classes. The java.lang package is the main Java language classes that you get automatically without importing it. The java.util package has a lot of utility classes that you can use if you import the package.    If you want to use any class other than those in ``java.lang`` you will need to either use the full name (packageName.ClassName) like (``java.util.ArrayList``) or use one or more import statements to import in that package. 

Import statements have to be the first code in a Java source file.  An import statement tells Java which class you mean when you use a short name (like ``ArrayList``).  It tells Java where to find the definition of that class. 

You can import just the classes you need from a package as shown below.  Just provide an ``import`` statement for each class that you want to use.    

.. code-block:: java 

  import java.util.ArrayList; // import just the ArrayList class
  
..	index::
	single: package
	pair: statement; import
  
Another option is to import everything at the same level in a package using ``import packageName.*``.
  

.. code-block:: java 

  import java.util.*; // import everything in package including ArrayList
  
.. note::

   Don't worry about adding import statements on the AP CS A exam.  Any that you need will be provided for you.
  
|Exercise| **Check your understanding**

.. mchoice:: qlib_1
   :answer_a: You can only have one import statement in a source file.
   :answer_b: You must specify the class to import.
   :answer_c: Import statements must be before other code in a Java source file.  
   :answer_d: You must import java.lang.String to use the short name of String.
   :correct: c
   :feedback_a: You can have an many import statements as you need.
   :feedback_b: You can use * to import all classes at the specified level.
   :feedback_c: Import statements have to be the first Java statements in a source file.  
   :feedback_d: You do not have to import any classes that are in the java.lang package.
   
   Which of the following is true about import statements?

Declaring and Creating ArrayLists
----------------------------------

To declare a ArrayList use ``ArrayList<Type> name``  Change the *Type* to be whatever type of objects you want to store in the ArrayList, for example ``String`` as shown in the code below.  You don't have to specify the **generic type** ``<Type>``, since it will default to ``Object``, but it is good practice to specify it to restrict what you allow in your ArrayList.  The generic type ArrayList<Type> is preferred over ArrayList because it allows the compiler to find errors that would otherwise be found at run-time. 



.. code-block:: java 

    // ArrayList<Type> name = new ArrayList<Type>();
    // An ArrayList of Strings:
    ArrayList<String> shoppingList = new ArrayList<String>();

.. note::

    ArrayLists can only hold objects like String and the wrapper classes Integer and Double. They cannot hold primitive types like int, double, etc.

|CodingEx| **Coding Exercise**


.. activecode:: ArrayListDeclare
   :language: java

   In the code below we are declaring a variable called ``nameList`` that can refer to a ArrayList of strings, but currently doesn't refer to any ArrayList yet (it's set to ``null``). Can you guess what it will print out when you run it?
   ~~~~
   import java.util.*; // import everything at this level
   public class Test
   {
       public static void main(String[] args)
       {
          ArrayList<String> nameList = null;
          System.out.println(nameList);
       }
    }
    



Declaring a ArrayList doesn't actually create a ArrayList. It only creates a variable that can refer to a ArrayList.  To actually create a ArrayList use ``new ArrayList<Type>()``. If you leave off the ``<Type>`` it will default to ``Object``.   

You can get the number of items in a ArrayList using the ``size()`` method.  Notice that an empty ArrayList has a size of 0 because the ArrayList constructor constructs an empty list.  Also notice that you can't get the size of a ArrayList that is currently set to ``null`` on line 9.  You will get a ``NullPointerException`` instead, which means that you tried to do something with an object reference that was ``null`` (doesn't exist).

.. activecode:: ArrayListCreateStr
   :language: java

   Demonstrating a NullPointerException.
   ~~~~
   import java.util.*; // import everything at this level
   public class Test
   {
       public static void main(String[] args)
       {
          ArrayList<String> nameList = new ArrayList<String>();
          System.out.println("The size of nameList is: " + nameList.size());
          ArrayList<String> list2 = null;
          System.out.println("The size of list2 is: " + list2.size());
       }
   }
   
 
  
You can also create ArrayLists of integer values.  However, you have to use ``Integer`` as the type because ArrayLists can only hold objects, not primitive values.  All primitive types must be **wrapped** in objects before they are added to an ArrayList.  For example, ``int`` values can be wrapped in ``Integer`` objects, ``double`` values can be wrapped in ``Double`` objects. You can actually put in any kind of Objects in an ArrayList, even for a class that you wrote in Unit 5 like Student or Person or Pet. 

Here's an example of a Integer ArrayList:

.. activecode:: ArrayListCreateInt
   :language: java

   import java.util.*; // import everything at this level
   public class Test
   {
       public static void main(String[] args)
       {
          ArrayList<Integer> numList = new ArrayList<Integer>();
          System.out.println(numList.size());
       }
   }

|Exercise| **Check your understanding**

.. mchoice:: qArrayListInteger
   :answer_a: ArrayList[int] numbers = new ArrayList();
   :answer_b: ArrayList&lt;String&gt; numbers = new ArrayList();
   :answer_c: ArrayList&lt;int&gt; numbers = new ArrayList&lt;int&gt;();
   :answer_d: ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;Integer&gt;();
   :correct: d
   :feedback_a: The square brackets [] are only used with arrays, not ArrayLists.
   :feedback_b: String is not the correct type since this is for an array of integers, and the type should be next to ArrayList on both sides.
   :feedback_c: ArrayLists cannot hold primitive types like int. You must use the wrapper class Integer.   
   :feedback_d: The wrapper class Integer is used to hold integers in an ArrayList.
   
   Which of the following is the correct way to create an ArrayList of integers?


  
Although it is not on the AP exam, you can convert arrays to ArrayLists using its constructor with an argument Arrays.asList(arrayname) like the following. Note that ArrayLists have a toString() method that is automatically called to print the list in a nice format.

.. activecode:: ArrayListFromArray
   :language: java

   import java.util.*; 
   public class ArrayListFromArray
   {
       public static void main(String[] args)
       {
          String[] names = {"Dakota", "Madison", "Brooklyn"}; 
          ArrayList<String> namesList = new ArrayList<String>(Arrays.asList(names));
          System.out.println(namesList);
       }
   }
  
            
|CodingEx| **Coding Exercise**

You can add values to an ArrayList by using its **add** method, described in detail in the next lesson. Try the code below. Note that the type of the ArrayList, String or Integer, also determines the type of parameters and return types for all of its methods, so add and print work for any type of ArrayList. 

.. activecode:: listAdd
   :language: java

   Can you add another item to the shopping list? 
   ~~~~
   import java.util.*;  // import all classes in this package.
   public class Shopping
   {
      public static void main(String[] args)
      {
         ArrayList<String> shoppingList = new ArrayList<String>();
         System.out.println("Size: " + shoppingList.size());
         shoppingList.add("carrots");
         System.out.println(shoppingList);
         shoppingList.add("bread");
         System.out.println(shoppingList);
         shoppingList.add("chocolate"); 
         System.out.println(shoppingList);
         System.out.println("Size: " + shoppingList.size());
         ArrayList<Integer> quantities = new ArrayList<Integer>();
         quantities.add(2);
         quantities.add(4);
         System.out.println(quantities);
     }
   }

 

|Groupwork| Programming Challenge : FRQ Digits
---------------------------------------------------


.. |FRQ 2017| raw:: html

   <a href="https://apcentral.collegeboard.org/pdf/ap-computer-science-a-frq-2017.pdf?course=ap-computer-science-a" target="_blank">2017 Free Response Question</a>

This programming challenge is based on the |FRQ 2017| part 1a on the 2017 AP CS A exam. In this question, you are asked to write a constructor for a class called Digits. This constructor takes an integer number as its argument and divides it up into its digits and puts the digits into an ArrayList. For example, new Digits(154) creates an ArrayList with the digits [1, 5, 4].

First, let's discuss how to break up a number into its digits. Try the code below. What happens if you divide an integer by 10? Remember that in integer division the result truncates (cuts off) everything to the right of the decimal point. Which digit can you get by using mod 10 which returns the remainder after dividing by 10? Try a different number and guess what it will print and then run to check.

.. activecode:: divideby10
   :language: java

   Set number to a different number and guess what number / and % will return. Which operator gives you a digit in number?
   ~~~~
   public class DivideBy10
   {
      public static void main(String[] args)
      {
         int number = 154;
         System.out.println(number / 10);
         System.out.println(number % 10);
      }
   }
   
Change the code above to use a while loop to print out each digit in reverse order starting from the right (4, 5, 1 for the number 154) while dividing it by 10. Here is the pseudocode:

    - while number is greater than 0
      
      - print out the last digit using %
      - change the number to cut off the last digit using /

Now, let's write a constructor for the Digits class that uses this loop and adds each found digit to the ArrayList instead of printing it out. You can use a special method called **Collections.reverse(digitsList);** to reverse the order of the digits in the ArrayList after the loop to get them in the right order. In the next lesson, we will also learn how to use a different add method that adds in elements at any index instead of the end.

.. activecode:: challenge-7-1-digits
   :language: java

   Complete the challenge below to put the digits of a number in an ArrayList.
   ~~~~
   import java.util.*;
   
   public class Digits
   {
      /** A list of digits */
      private ArrayList<Integer> digitList;
      
      /** Constructs a list of digits from the given number */
      public Digits(int number)
      {
         // initialize digitList to an empty ArrayList of Integers
         
         // Use a while loop to add each digit in number to digitList
         
         //Use Collections.reverse(digitList); to reverse the digits
      
      }
      
      /** returns the string representation of the digits list */
      public String toString()
      {
         return digitList.toString();
      }
      
      public static void main(String[] args)
      {
         Digits d1 = new Digits(154);
         System.out.println(d1);
      }
   }
   
Summary
-----------

- ArrayList are re-sizable arrays that allow adding and removing items to change their size during run time. 

- The ArrayList class is in the java.util package. You must import java.util.* to use it.

- An ArrayList object contains object references and is mutable, meaning it can change (by adding and removing items from it).

- The ArrayList constructor ArrayList() constructs an empty list of size 0.

- Java allows the generic type ArrayList<E>, where the generic type E specifies the type of the elements, like String or Integer. Without it, the type will be Object.  

- ArrayList<E> is preferred over ArrayList because it allows the compiler to find errors that would otherwise be found at run-time.

- When ArrayList<E> is specified, the types of the reference parameters and return type when using its methods are type E.

- ArrayLists cannot hold primitive types like int or double, so you must use the wrapper classes Integer or Double to put numerical values into an ArrayList.