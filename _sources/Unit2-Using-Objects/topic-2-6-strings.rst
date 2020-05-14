.. qnum::
   :prefix: 2-6-
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
    
.. highlight:: java
   :linenothreshold: 4

   
..	index::
	single: String
	single: object reference
	single: reference
	pair: String; definition
    

Strings
========

**Strings** in Java are objects of the ``String`` class that hold sequences of characters (a, b, c, $, etc). Remember that a class (or classification) in Java defines the data that all objects of the class have (the fields) and the behaviors, the things that objects know how to do (the methods). 


You can declare a variable to be of type ``String``. 

.. note::

   Class names in Java, like ``String``, begin with a capital letter.  All primitive types: ``int``, ``double``, and ``boolean``, begin with a lowercase letter.  This is one easy way to tell the difference between primitive types and class types. 
   
Run the following code.  What does it print?

.. activecode:: lcsb1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        String greeting = null;
        System.out.println(greeting);
      }
   }

The code above declares an object variable named ``greeting`` and sets the value of greeting to the Java keyword ``null`` to show that it doesn't refer to any object yet.  So ``System.out.println(greeting);`` will print ``null``.  Object variables **refer** to objects in memory.  A reference is a way to find the actual object, like adding a contact to your phone lets you reach someone without knowing exactly where they are.  The value of greeting is null since the string object has not been created yet. 

.. figure:: Figures/greeting.png
    :width: 50px
    :align: center
    :figclass: align-center

    Figure 1: Initial value for an object reference
    
..	index::
	pair: String; creation

In Java there are two ways to create an object of the ``String`` class.  You can use the ``new`` keyword followed by a space and then the class constructor and then in parentheses you can include values used to initialize the fields of the object.  This is the standard way to create a new object of a class in Java.

.. code-block:: java

  greeting = new String("Hello");
  
..	index::
    single: String literal
	pair: String; literal
	
  
In Java you can also use just a **string literal**, which is a set of characters enclosed in double quotes (``"``), to create a ``String`` object. 

.. code-block:: java 

  greeting = "Hello";

In both cases an object of the ``String`` class will be created in memory and the value of the variable greeting will be set to an object reference, a way to find that object.  

|CodingEx| **Coding Exercise:**

Here is an active code sample that creates two greeting strings: one using a string literal and the other using new and the String constructor. Change the code to add 2 new strings firstname and lastname using the two methods and print them out with the greetings.

.. activecode:: lcsbnew
   :language: java
   
   public class StringTest
   {
      public static void main(String[] args)
      {
        String greeting1 = "Hello!";
        String greeting2 = new String("Welcome!");
        System.out.println(greeting1);
        System.out.println(greeting2);
       }
    }


Now that greeting refers to an actual object we can ask the object what class created it. Try the following.  What does it print? 

.. activecode:: lcsb2
   :language: java
   
   public class Test2
   {
      public static void main(String[] args)
      {
        String greeting = "Hello";
        Class currClass = greeting.getClass();
        System.out.println(currClass);
        Class parentClass = currClass.getSuperclass();
        System.out.println(parentClass);
      }
   }
   
..	index::
	single: parent class
	single: superclass
	single: inheritance
	single: package
	single: java.lang
	pair: package; java.lang

The code above will first print ``class java.lang.String`` since ``greeting`` was created by the ``String`` class.  The full name for the ``String`` class is ``java.lang.String``.  The ``java.lang`` part is the **package** name.  Every class in the Java language is in a package and the standard classes like ``String`` are in the ``java.lang`` package.  Every object in Java knows the class that created it.  Also, every class knows its **parent** class.  Yes, a class can have a parent class, just as people have parents.  But, in Java a class can only have one parent.  A class can ``inherit`` object fields and methods from a parent class, just like you might inherit musical ability from a parent.  The fourth line will print ``class java.lang.Object`` because the parent class (**superclass**) of the String class is the Object class.  All classes in Java inherit from the Object class at some point in their ancestry.  

.. figure:: Figures/stringObject.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 2: Object variable of type String with a reference to a String object which has a reference to the String class which has a reference to the Object class.
    

    



String Operators - Concatenation
--------------------------------

..	index::
	pair: String; append
	
Strings can be **appended** to each other to create a new string using the ``+`` or ``+=`` operator . This is also called **concatenation**. 

.. activecode:: lcso1
   :language: java
   
   Try the following code. Can you use += or + to have it add on another name Andrea and 2 more exlamation points (!) to the happy birthday greeting? 
   ~~~~
   public class Test1
   {
      public static void main(String[] args)
      {
        String start = "Happy Birthday"; 
        String name = "Jose";
        String result = start + " " + name;  // add together strings
        result += "!"; // add on to the same string
        System.out.println(result);
      }
   }
  
.. note::
   Note that spaces are not added between strings automatically.  If you want a space between two strings then add one using + " " +. If you forget to add spaces, you will get smushed output like "HiJose" instead of "Hi Jose".  And remember that variables are never put inside the quotes ("") since this would print the variable name out letter by letter instead of its value.

|Exercise| **Check Your Understanding**

.. mchoice:: qse_1
   :practice: T
   :answer_a: xyz
   :answer_b: xyxyz
   :answer_c: xy xy z
   :answer_d: xy z
   :answer_e: z
   :correct: b
   :feedback_a: s1 will equal "xy" plus another "xy" then z at the end.
   :feedback_b: s1 contains the original value, plus itself, plus "z"
   :feedback_c: No spaces are added during concatenation.
   :feedback_d: No spaces are added during concatenation, and an additional "xy" should be included at the beginning.
   :feedback_e: s1 was set to "xy" initially, so the final answer will be "xyxyz"

   Given the following code segment, what is in the string referenced by s1?

   .. code-block:: java

     String s1 = "xy";
     String s2 = s1;
     s1 = s1 + s2 + "z";
     

..	index::
	single: toString
	pair: Object; toString

You can even add other items to a string using the ``+`` operator.  The other item will be converted to a string using the ``toString`` operator if it is an object and then appended to the current string.  All objects inherit a ``toString`` method that returns a string representation of the object.  
   
|CodingEx| **Coding Exercise:**


.. activecode:: lcso2
   :language: java
   
   What do you think the following will print? Guess before you hit run. If you want the addition to take place before the numbers are turned into a string what should you do? Try to modify the code  so that it adds 4 + 3 before appending the value to the string. Hint: you used this to do addition before multiplication in arithmetic expressions.
   ~~~~
   public class Test2
   {
      public static void main(String[] args)
      {
        String message = "12" + 4 + 3; 
        System.out.println(message);
      }
   }
   
.. note::
   If you are appending a number to a string it will be converted to a string first before being appended.  
  
Since the same operators are processed from left to right this will print ``1243``.  First 4 will be turned into a string and appended to 12 and then 3 will be turned into a string and appended to 124.  

What if you wanted to print out a double quote " character? Since the double quote " is a special character with meaning in Java, we put in a backslash in front of the quote to signal that we want just the character. This is called a **backslash escape sequence**. And if you wanted to print out a backslash, you would have to backslash it too in order to escape its special meaning. Another useful backslashed character is backslash \\n which will put in a newline. 

.. activecode:: bhescape
   :language: java
   
   Here are the escape sequences that may be used in the AP course
   ~~~~
   public class TestEscape
   {
      public static void main(String[] args)
      {
        String message = "Here is a backslash quote \" " +
          " and a backslashed backslash (\\) " +
          "Backslash n \n prints out a new line."; 
        System.out.println(message);
      }
   }
   
|Groupwork| Programming Challenge : Mad Libs
--------------------------------------------

Have you ever played MAD LIBS? In this game, you first choose a bunch of words without looking at the story and then those words are filled into the story to make it sound very wacky! Fill in the variables below with Strings for each word, and then run to see the wacky story.

.. |repl| raw:: html

   <a href="https://repl.it" target="_blank">repl.it</a>
   

.. |Scanner| raw:: html

   <a href="https://www.w3schools.com/java/java_user_input.asp" target="_blank">Scanner class</a>
   

Then, working in pairs, come up with another silly story that uses at least 5 new String variables. When you're done, try another team's mad libs code. Your teacher may ask you to create this program in a Java IDE like |repl| so that you can use input to read in the words (see input examples using the |Scanner|).

.. activecode:: challenge2-6-MadLibs
   :language: java
   
   If you used repl.it for this challenge, copy the url of your repl here to turn in.
   ~~~~
   public class MadLibs1
   {
      public static void main(String[] args)
      {
        // fill these in with silly words/strings (don't read the poem yet)
        String pluralnoun1 = 
        String color1 =
        String color2 =
        String food =
        String pluralnoun2 = 
        
        
        // Run to see the silly poem!
        System.out.println("Roses are " + color1);
        System.out.println(pluralnoun1 + " are " + color2);
        System.out.println("I like " + food);
        System.out.println("Do " + pluralnoun2 + " like them too?");
        
        // Now come up with your own silly poem!
        
      }
   }





Summary
-------------------

- **Strings** in Java are objects of the ``String`` class that hold sequences of characters.

- String objects can be created by using string literals (String s = "hi";) or by calling the String class constructor (String t = new String("bye");).

- **new** is used to create a new object of a class.
- **null** is used to indicate that an object reference doesn't refer to any object yet.

- String objects can be concatenated using the + or += operator, resulting in a new String object.

- Primitive values can be concatenated with a String object. This causes implicit conversion of the values to String objects.

- Escape sequences start with a backslash \\ and have special meaning in Java. Escape sequences used in this course include \", \\, and  \\n to print out a quote, backslash, and a new line.
