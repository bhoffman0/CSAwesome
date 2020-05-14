.. qnum::
   :prefix: 7-2-
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
    
ArrayList Methods 
=========================

..	index::
	pair: arraylist; size
	pair: arraylist; add
	pair: arraylist; get
	pair: arraylist; set
	pair: arraylist; remove

.. |AP CS A Reference Sheet| raw:: html

   <a href="https://apcentral.collegeboard.org/pdf/ap-computer-science-a-java-quick-reference-0.pdf?course=ap-computer-science-a" target="_blank">AP CS A Java Quick Reference Sheet</a>
   
The following are the ``ArrayList`` methods that you need to know for the AP CS A exam.  These are included on the |AP CS A Reference Sheet| that you will receive during the exam so you do not need to memorize them. We will look at how these methods work below.

    -  **int size()** returns the number of elements in the list
    
    -  **boolean add(E obj)** appends obj to the end of the list and returns true
    
    -   **E remove(int index)** removes the item at the index and shifts remaining items to the left (to a lower index)
    
    -  **void add(int index, E obj)**  moves any current objects at index or beyond to the right (to a higher index) and inserts obj at the index

    -   **E get(int index)** returns the item in the list at the index
    
    -   **E set(int index, E obj)** replaces the item at index with obj
    
 
    


Size()
-------

..	index::
	pair: arraylist; size

As we saw in the last lesson, you can get the number of items in a ArrayList using its ``size()`` method.  The ArrayList starts out empty with a size of 0.

.. code-block:: java 

    ArrayList<String> list = new ArrayList<String>();
    System.out.println( list.size() );
    
.. note:: 

   With arrays, you use the ``length`` field to get the number of items in the array.  But, with an ``ArrayList`` you use the ``size()`` method to get the number of items in the ArrayList. You will not be penalized if you mix up length and size() in the CS A exam. The number of items in an empty ArrayList is 0.  
   
Add(obj) to an ArrayList
-----------------------------

..	index::
	pair: arraylist; add

You can add values to an ArrayList by using the method ``add(obj)`` which will add the object to the end of the list, just like you would join the end of the line to board a bus.  

|CodingEx| **Coding Exercise**




.. activecode:: listAdd1
   :language: java

   Run the code below to see how the list changes as each object is added to the end.  Notice that we added the same string to the list more than once.  Lists can hold duplicate objects. Can you add your name to the list and then print out the list?
   ~~~~
   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] args)
      {
         ArrayList<String> nameList = new ArrayList<String>();
         nameList.add("Diego");
         System.out.println(nameList);
         nameList.add("Grace");
         System.out.println(nameList);
         nameList.add("Diego"); 
         System.out.println(nameList);
         System.out.println(nameList.size());
      }
   }

..	index::
	pair: list; autoboxing
	pair: list; unboxing 
    
When adding Integer objects to the list, you can use the Integer constructor like ``add(new Integer(5))`` in Java version 7 which is used on the exam (although this is deprecated and no longer used in Java version 9)  or you can just add the int value directly like ``add(5)`` in any Java version and it will be changed into an ``Integer`` object automatically.  This is called **autoboxing**. When you pull an ``int`` value out of a list of ``Integers`` that is called **unboxing**.

.. code-block:: java 

    ArrayList<Integer> list = new ArrayList<Integer>();
    list.add(new Integer(5)); // this will only work in Java 7
    list.add(5); // this will work in all Java versions
    
You can put any kind of Objects into an ArrayList. Even objects for a class that you wrote. For example, here is an ArrayList of Students.

.. activecode:: StudentArrayList
  :language: java

  An example of an ArrayList of Student objects.
  ~~~~
  import java.util.*;
  
  public class StudentList 
  {
     // main method for testing
     public static void main(String[] args)
     {
        ArrayList<Student> roster = new ArrayList<Student>();
        roster.add(new Student("Skyler", "skyler@sky.com", 123456));
        roster.add(new Student("Ayanna", "ayanna@gmail.com", 789012));

        System.out.println(roster);
     }
   }
  
  class Student 
  {
     private String name;
     private String email;
     private int id;
     
     public Student(String initName, String initEmail, int initId)
     {
        name = initName;
        email = initEmail;
        id = initId;
     }
     
     // toString() method
     public String toString() 
     { 
       return id + ": " + name + ", " + email;
     }
  } 
 
Add(index,obj) in an ArrayList
------------------------------

There are actually two different ``add`` methods in the ``ArrayList`` class.  The ``add(obj)`` method adds the passed object to the end of the list. The ``add(index,obj)`` method adds the passed object at the passed index, but first moves over any existing values to higher indicies to make room for the new object.  


|CodingEx| **Coding Exercise**



.. activecode:: listAddInt2
   :language: java

   What will the code below print out? Try figuring it out before running it. Remember that ArrayLists start at index 0 and that the add(index,obj) always has the index as the first argument.
   ~~~~    
   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] arts)
      {
         ArrayList<Integer> list1 = new ArrayList<Integer>();
         list1.add(1);
         System.out.println(list1);
         // adds the number 2 to the end of the list
         list1.add(2);
         System.out.println(list1);
         // This will add the number 3 at index 1
         list1.add(1, 3);
         System.out.println(list1);
         // This will add the number 4 at index 1
         list1.add(1, 4);
         System.out.println(list1);
         System.out.println(list1.size());
      }
   }
    
.. note::

    ArrayLists like arrays start numbering their elements from 0.
    
|Exercise| **Check your understanding**

.. mchoice:: qalAdd1
   :answer_a: [1, 2, 3, 4, 5]
   :answer_b: [1, 4, 2, 3, 5]
   :answer_c: [1, 2, 4, 3, 5]
   :answer_d: [1, 2, 4, 5]
   :correct: c
   :feedback_a: This would be true if all the <code>add</code> method calls were <code>add(value)</code>, but at least one is not.
   :feedback_b: This would be true if it was <code>add(1, 4)</code>
   :feedback_c: The <code>add(2, 4)</code> will put the 4 at index 2, but first move the 3 to index 3.
   :feedback_d: This would be true if the <code>add(2, 4)</code> replaced what was at index 2, but it actually moves the value currently at index 2 to index 3.

   What will print when the following code executes?
   
   .. code-block:: java 
   
      ArrayList<Integer> list1 = new ArrayList<Integer>();
      list1.add(1);
      list1.add(2);
      list1.add(3);
      list1.add(2, 4);
      list1.add(5);
      System.out.println(list1);

.. |Java visualizer 1| raw:: html

   <a href="http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(2)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(2,4)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(5))%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0" target="_blank">Java Visualizer</a>
   
You can step through the code above by clicking on this |Java Visualizer 1|.
      
.. mchoice:: qalAdd2
   :answer_a: ["Anaya", "Sarah", "Layla", "Sharrie"]
   :answer_b: ["Anaya", "Layla", "Sharrie", "Sarah"]
   :answer_c: ["Sarah", "Anaya", "Layla", "Sharrie"]
   :answer_d: ["Anaya", "Layla", "Sarah", "Sharrie"]
   :correct: a 
   :feedback_a: The <code>add(1, "Sarah")</code> will move any current items to the right and then put "Sarah" at index 1.
   :feedback_b: This would be true if the last one was <code>add("Sarah")</code>
   :feedback_c: This would be true if the last one was <code>add(0, "Sarah")</code>
   :feedback_d: This would be true if the last one was <code>add(2, "Sarah")</code>
   
   What will print when the following code executes?
   
   .. code-block:: java 
   
      ArrayList<String> list1 = new ArrayList<String>();
      list1.add("Anaya");
      list1.add("Layla");
      list1.add("Sharrie");
      list1.add(1, "Sarah");
      System.out.println(list1);
      
.. |Java visualizer 2| raw:: html

   <a href="http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CString%3E+list1+%3D+new+ArrayList%3CString%3E()%3B%0A++++++list1.add(%22Anaya%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Layla%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Sharrie%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(1,+%22Sarah%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0" target="_blank">Java Visualizer</a>
   
You can step through the code above by clicking on the following |Java visualizer 2|.


.. .. mchoice:: qalAdd3
   :answer_a: [5, 4, 3, 2]
   :answer_b: [5, 4, 1, 3]
   :answer_c: [2, 5, 4, 3]
   :answer_d: [5, 2, 4, 3]
   :correct: d
   :feedback_a: Remember that <code>add(obj)</code> adds the object to the end of the list.
   :feedback_b: This would be true if it was <code>add(obj, index)</code>, but it is <code>add(index, obj)</code>
   :feedback_c: This would be true if the first index was 1, but it is 0.
   :feedback_d: This adds the 2 to index 1, but first moves all other values past that index to the right.

   What will print when the following code executes?
   
   .. code-block:: java 
   
      ArrayList<Integer> list1 = new ArrayList<Integer>();
      list1.add(5);
      list1.add(4);
      list1.add(3);
      list1.add(1, 2);
      System.out.println(list1);
      
.. You can step through the code above by clicking on the following `Example-8-5-3 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(5)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(4)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(3)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(1,+2)%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
.. .. mchoice:: qalAdd4
   :answer_a: [1, 3, 2]
   :answer_b: [1, 3, 2, 1]
   :answer_c: [1, 1, 2, 3]
   :answer_d: [1, 2, 3]
   :correct: b
   :feedback_a: You can add duplicate objects to a list so this list will have two 1's.  
   :feedback_b: The add method adds each object to the end of the list and lists can hold duplicate objects.
   :feedback_c: This would be true if the list was sorted as you add to it, but this is not true.
   :feedback_d: This would be true if the list was sorted and you couldn't add duplicate objects, but lists are not sorted and you can add duplicate objects.  

   What will print when the following code executes?
   
   .. code-block:: java 
   
      ArrayList<Integer> list1 = new ArrayList<Integer>();
      list1.add(1);
      list1.add(3);
      list1.add(2);
      list1.add(1);
      System.out.println(list1);

Remove(index) from ArrayList
----------------------------------

..	index::
	pair: arraylist; removing an item

You can also remove values from an ArrayList by using **remove(index)** to remove the item at the given index from the list. This will move all the other items over in the underlying array and decrease the size of the ArrayList by 1. 

|CodingEx| **Coding Exercise**



.. activecode:: listRem
   :language: java

   What will the following code print out? Try to guess before you run it. Were you surprised? Read the note below.
   ~~~~
   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] arts)
      {
         ArrayList<Integer> list1 = new ArrayList<Integer>();
         list1.add(1);
         list1.add(2);
         list1.add(3);
         System.out.println(list1);
         list1.remove(1);
         System.out.println(list1);
      }
   }
   
.. note::

   The ``remove(int index)`` method will remove the object at the index and shift left any values to the right of the current index.  It doesn't remove the object that matches the integer value given. In the example above it doesn't remove the value 1.  It removes the value 2 at index 1.
   
.. mchoice:: qListRem
   :answer_a: [2, 3]
   :answer_b: [1, 2, 3]
   :answer_c: [1, 2]
   :answer_d: [1, 3]
   :correct: c
   :feedback_a: This would be true if it was <code>remove(0)</code>
   :feedback_b: The <code>remove</code> will remove a value from the list, so this can't be correct.
   :feedback_c: The 3 (at index 2) is removed
   :feedback_d: This would be true if it was <code>remove(1)</code>

   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(1);
      list1.add(2);
      list1.add(3);
      list1.remove(2);
      System.out.println(list1);
      
You can step through the code above by clicking on the following `RemoveExample  <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(new+Integer(1))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(2))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(new+Integer(3))%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.remove(2)%3B%0A++++++System.out.println(list1)%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
   
.. Run the code below to see how the list changes. Can you add your name to the list and print it out and then remove it and print it out?

.. .. activecode:: listremove
   :language: java

   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] args)
      {
         ArrayList<String> nameList = new ArrayList<String>();
         nameList.add("Diego");
         System.out.println(nameList);
         nameList.add("Grace");
         System.out.println(nameList);
         nameList.remove(1); 
         System.out.println(nameList);
         System.out.println(nameList.size());
      }
   }

ArrayList get/set Methods
------------------------------------

..	index::
	pair: arraylist; getting an item
    pair: arraylist; setting an item

You can get the object at an index using ``obj = listName.get(index)`` and set the object at an index using ``listName.set(index,obj)``. Set/Get are used after you add and remove elements to an ArrayList to change or retrieve them. 

Notice that ArrayLists use set/get methods instead of using the square brackets array[index] that arrays use. This is because ArrayList is a class with methods that provide access to the underlying array.

|CodingEx| **Coding Exercise**
 


.. activecode:: listGetSet
   :language: java

   Try to guess what the code below will print before running it. Can you get the last element in the nameList to print it out? Can you set the first element in the list to your name and print out the list?
   ~~~~
   import java.util.*;  // import all classes in this package.
   public class Test
   {
      public static void main(String[] args)
      {
         ArrayList<String> nameList = new ArrayList<String>();
         nameList.add("Diego");
         nameList.add("Grace");
         nameList.add("Deja"); 
         System.out.println(nameList);
         System.out.println(nameList.get(0));
         System.out.println(nameList.get(1));
         nameList.set(1, "John");
         System.out.println(nameList);         
      }
   }


|Exercise| **Check your understanding**

.. mchoice:: qListRem1
   :answer_a: [1, 2, 3, 4, 5]
   :answer_b: [1, 2, 4, 5, 6]
   :answer_c: [1, 2, 5, 4, 6]
   :answer_d: [1, 5, 2, 4, 6]
   :correct: c
   :feedback_a: The <code>set</code> will replace the item at index 2 so this can not be right.
   :feedback_b: The <code>add</code> with an index of 2 and a value of 5 adds the 5 at index 2 not 3. Remember that the first index is 0.
   :feedback_c: The <code>set</code> will change the item at index 2 to 4.  The add of 5 at index 2 will move everything else to the right and insert 5.  The last <code>add</code> will be at the end of the list.
   :feedback_d: The <code>add</code> with an index of 2 and a value of 5 adds the 5 at index 2 not 1. Remember that the first index is 0.

   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<Integer> list1 = new ArrayList<Integer>();
      list1.add(1);
      list1.add(2);
      list1.add(3);
      list1.set(2, 4);
      list1.add(2, 5);
      list1.add(6);
      System.out.println(list1);
      
You can step through the code above by clicking on the following `Example1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++ArrayList%3CInteger%3E+list1+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++list1.add(1)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(2)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(3)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.set(2,4)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(2,5)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(6)%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      
.. mchoice:: qListRem2
   :answer_a: ["Sarah", "Destini", "Layla", "Sharrie"]
   :answer_b: ["Sarah", "Destini", "Anaya", "Layla", "Sharrie"]
   :answer_c: ["Anaya", "Sarah", "Sharrie"]
   :answer_d: ["Anaya", "Sarah", "Destini", "Sharrie"]
   :correct: d
   :feedback_a: Remember that the first index is 0 not 1.
   :feedback_b: <code>set</code> changes the value and the first index is 0 not 1.
   :feedback_c: <code>add</code> at index 1 adds the new value at that index but moves right any existing values.
   :feedback_d: The list is first ["Anaya", "Layla", "Sharrie"] and then changes to ["Anaya", Destini", "Sharrie"] and then to ["Anaya", "Sarah", "Destini", "Sharrie"]
   
   What will print when the following code executes?
   
   .. code-block:: java 
   
      List<String> list1 = new ArrayList<String>();
      list1.add("Anaya");
      list1.add("Layla");
      list1.add("Sharrie");
      list1.set(1, "Destini");
      list1.add(1, "Sarah");
      System.out.println(list1);
      
You can step through the code above by clicking on the following `Example2 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0Apublic+class+ClassNameHere+%7B%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++List%3CString%3E+list1+%3D+new+ArrayList%3CString%3E()%3B%0A++++++list1.add(%22Anaya%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Layla%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(%22Sharrie%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.set(1,+%22Destini%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++list1.add(1,+%22Sarah%22)%3B%0A++++++System.out.println(list1)%3B%0A++++++%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
      


 

Comparing arrays and ArrayLists
---------------------------------

When do you use arrays and when do you use ArrayLists? Use an array when you want to store several items of the same type and you know how many items will be in the array and the items in the array won't change in order or number.  Use an ArrayList when you want to store several items of the same type and you don't know how many items you will need in the list or when you want to remove items from the list or add items to the list while the program is running.

Here is a comparison of how to create arrays and ArrayLists:

.. code-block:: java 

   // arrays must specify a size!
   int[ ] highScores = new int[5];
   String[ ] names = new String[5];
   
   // ArrayLists are empty to start with
   ArrayList<Integer> highScoreList = new ArrayList<Integer>();
   ArrayList<String> nameList = new ArrayList<String>();

Here is a comparison of how to access and change elements in arrays and ArrayLists.

=========== ========================  ========================
Operation   array                     ArrayList
=========== ========================  ========================
length/size array.length              list.size()
----------- ------------------------  ------------------------
Access      value = array[index];     value = list.get(index);
----------- ------------------------  ------------------------
Modify      array[index] = value;     list.set(index,value);
----------- ------------------------  ------------------------
=========== ========================  ========================

Note that the ArrayList methods add and remove do not have a simple equivalent in arrays because they actually change the size of the underlying array and move elements over.
   
|Groupwork| Programming Challenge : Array to ArrayList
-------------------------------------------------------



.. activecode:: challenge-7-2-array-to-arraylist
   :language: java

   Rewrite the following code that uses an array to use an ArrayList instead. In the comments write why you think an ArrayList is a better data structure to use than an array for this problem.
   ~~~~
   import java.util.*;  
   
   public class ToDoList
   {
      public static void main(String[] args)
      {
         // Rewrite this code to use an ArrayList instead of an array
         String[] toDoList = new String[3];
         toDoList[0] = "Do homework";
         toDoList[1] = "Help make dinner";
         toDoList[2] = "Call grandma";
         
         // changing element 1
         toDoList[1] = "Order pizza";
         
         System.out.println(toDoList.length + " things to do!");
         System.out.println("Here's the first thing to do: " 
              + toDoList[0] );
         
         // remove item 0 and move everything down 
         //  (this can be done in 1 command with ArrayList)
         toDoList[0] = toDoList[1];
         toDoList[1] = toDoList[2];
         toDoList[2] = "";
         
         System.out.println("Here's the next thing to do: " 
              + toDoList[0] );
              
         // Why is an ArrayList better than an array for a toDoList?
         // Answer:
      }
   }

Summary
-----------


- The following ArrayList methods, including what they do and when they are used, are part of the Java Quick Reference:

  - **int size()** : Returns the number of elements in the list
  - **boolean add(E obj)** : Appends obj to end of list; returns true
  - **void add(int index, E obj)** : Insertss obj at position index (0 <= index <= size), moving elements at position index and higher to the right (adds 1 to their indices) and adds 1 to size
  - remove(int index) — Removes element from position index, moving elements at position index + 1 and higher to the left (subtracts 1 from their indices) and subtracts 1 from size; returns the element formerly at position index
  - **E get(int index)** : Returns the element at position index in the list
  - **E set(int index, E obj)** : Replaces the element at position index with obj; returns the element formerly at position index
