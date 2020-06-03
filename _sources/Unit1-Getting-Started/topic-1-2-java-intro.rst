.. qnum::
   :prefix: 1-2-
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
    
    
Why Programming? Why Java?
============================

..	index::
	single: Java
	single: javac
	single: compile
	single: programming language
	pair: programming; language
	pair: Java; source file
	pair: Java; class file

    
    
.. |video of Notch| raw:: html

   <a href="https://www.youtube.com/watch?v=BES9EKK4Aw4" target="_blank">video of Notch</a>

.. Notch video .. youtube:: BES9EKK4Aw4
    :width: 500
    :align: center

What do Minecraft, Android phones, and Netflix have in common? They're all programmed in Java! Here is a |video of Notch|, the creator of the popular game Minecraft, programming in Java.  Many of the apps you use in an Android phone or tablet are also written in Java. If you've used App Inventor before, those apps are translated to Java before they are run on a phone or tablet. Netflix uses Java for some of its software too. Java is a **programming language** that is used worldwide to create software that we all use.

The following `video <https://www.youtube.com/watch?v=Fc-BQzPbJmU>`_ introduces this first lesson in CSAwesome.

.. youtube:: Fc-BQzPbJmU
    :width: 800
    :align: center


.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button
    
    
First Java Program
-------------------


..	index::
	single: class
	single: keyword
	pair: class; field
	pair: class; constructor
	pair: class; method
	pair: class; main method
	
Every program in Java is written as a **class**. Java is an **object-oriented language** and we'll learn more about classes and objects in Unit 2. Inside the class, there can be a **main method** that starts the program. When you ask the Java run-time to *run* a class, it will always start execution in the main method. Here is the template for a simple Java program with a main method:

.. code-block:: java 

   public class MyClass
   {
      public static void main(String[] args)
      {
         // Put your code here!
      }
   }
   
.. note::

   In Java every open curly brace ``{`` must have a matched close curly brace ``}``.  These are used to start and end class definitions and method definitions.       

|CodingEx| **Coding Exercise**: Click on the |runbutton| button below to have the computer execute the ``main`` method in the following class. Then, change the code  to print your name.  Be sure to keep the starting ``"`` and ending ``"``.  Click on the |runbutton| button to run the modified code. If you revisit this page later and login, click on Load History and move the bar above it to see your previous code changes.
 
.. activecode:: lcfc1
   :language: java

   Run this code to see the output below it. Then change the code to print your name, for example "Hi Pat!", and run again. 
   ~~~~    
   public class MyClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!");
      }
   }




You can copy the Java source code shown in this book into a file and save it if you want to run it locally in an integrated development environment (IDE) on your local computer (see section 1.1. for different IDEs).  You must name the file the same name as the class name with ".java" as the extension.  All code (programs) in Java must be defined inside a class in a source file, and the name of the class must match the file name. 


   
Print Commands
-------------------

..	index::
	single: String
	single: String literal

Java has two different print commands to print output to the screen:

- **System.out.println(value)** : prints the value followed by a new line (ln) 
- **System.out.print(value)** : prints the value without advancing to the next line


``System.out.println("Hi there!");`` prints out the characters between the first ``"`` and the second ``"`` followed by a new line.  The ``"Hi there!"`` is called a **string literal**, and it can have zero to many characters enclosed in starting and ending double quotes. 

.. activecode:: printCommands
   :language: java

   Run this code to see the output below it. How would you change it to print the ! on the same line as Hi there?
   ~~~~    
   public class MyClass
   {
      public static void main(String[] args)
      {
         System.out.print("Hi ");
         System.out.println("there");
         System.out.print("!");
      }
   }
   
Most command keywords in Java must be in lowercase, but class names such as System and String are capitalized. Commands in Java must end with a semicolon (;). Think of the semicolon (;) in Java like a period (.) in English. You use a semicolon (``;``) to show the end of a Java **statement**, just the way you use a period (.) to show the end of an English sentence.  You will not be penalized on the exam if you forget the semicolon.  However, your programs won't run without it.

Syntax Errors
---------------

Computers don't actually speak Java so we have to **compile** (translate) Java source files that we write into class files which is code that a computer can understand and run. In this e-book, the Java code is actually being sent to a Java server to compile and run, and the output is sent back to show on the same page. 

.. |Grace Hopper| raw:: html

   <a href="https://en.wikipedia.org/wiki/Grace_Hopper" target="_blank">Grace Hopper</a>
   
.. |Rubber duck debugging| raw:: html

   <a href="https://rubberduckdebugging.com/" target="_blank">Rubber duck debugging</a>
   
   
**Syntax errors** are reported to you by the compiler if your Java code is not correctly written. Examples of syntax errors are a semicolon ``;`` missing or if the code has a open curly brace ``{`` or open quote ``"``, but no close curly brace ``}`` or close quote ``"``. Informally, a syntax error is called a **bug**, and the process of removing errors is called **debugging**. An early computer science pioneer |Grace Hopper| documented a real bug, a moth that flew into a computer in 1947!

.. figure:: https://upload.wikimedia.org/wikipedia/commons/8/8a/H96566k.jpg
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 2: Grace Hopper's log showing a real bug, 1947.


The compiler tries to make sense of your code, but if your code has **syntax errors**, you will see error messages displayed below the code. Compiler error messages will tell the line number that the compiler found the error and the type of error.  The error messages are not always easy to understand and sometimes the actual error is before the line that the compiler says is the problem. Debugging can be frustrating but you will get better at it with practice! Sometimes another pair of eyes really helps, so ask a friend if you get stuck or try explaining your code line by line to someone or even a rubber duck. |Rubber duck debugging| is a lot of fun!

Let's practice debugging some code! 

   

|Exercise| **Check Your Understanding: Mixed up programs**


.. parsonsprob:: thirdClass
   :numbered: left
   :adaptive:
   :noindent:

   The following has all the correct code to print out "Hi my friend!" when the code is run, but the code is mixed up.  Drag the blocks from left to right and put them in the correct order.  Click on the "Check Me" button to check your solution. You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks. After three incorrect attempts you will be able to use the Help Me button to make the problem easier.
   -----
   public class ThirdClass
   {
   =====
      public static void main(String[] args)
      {
      =====
         System.out.println("Hi my friend!");
         =====
      }
      =====
   }
   
.. parsonsprob:: fourthClass
   :numbered: left
   :adaptive:
   :noindent:

   The following has all the correct code to print out "Hi there!" when the code is run, but the code is mixed up and contains some extra blocks with errors.  Drag the needed blocks from left to right and put them in the correct order.  Click on the "Check Me" button to check your solution.
   -----
   public class FourthClass
   {
   =====
   public Class FourthClass
   {                         #paired
   =====
      public static void main(String[] args)
      {
      =====
      public static void main()
      {                         #paired
      =====
         System.out.println("Hi there!");
         =====
         System.out.println("Hi there!") #paired
         =====
      }
      =====
   }
    

|CodingEx| **Coding Exercise: Compile Time Error 1**

Click on the |runbutton| button below to try and run the following code.  Look for an error message after the code.  This is called a **compile time error** because it is an error detected by the compiler.  

What is wrong?  Can you fix it?  The error message will tell you the line number that it thinks is causing the error (``FirstClass.java:5: error: unclosed string literal``).  Check line 5 to make sure that everything looks correct.  One good thing to check is that all ``{`` have a matching ``}`` and all ``(`` have a matching ``)`` and all starting ``"`` have a ending ``"`` as well. Try putting in the missing symbol and run again. This is called **debugging**.

.. activecode:: sc2error1
   :language: java

   Fix the code below.
   ~~~~
   public class FirstClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!);
      }
   }


    
|CodingEx| **Coding Exercise: Compile Time Error 2**


Click on the |runbutton| button below to try and run the following code.  Look for an error message after the code. What is wrong this time?  Can you fix it?  One good thing to check is that all ``{`` have a matching ``}`` and all ``(`` have a matching ``)`` and all starting ``"`` have a ending ``"`` as well.

.. activecode:: sc2error2
   :language: java

   Fix the code below.
   ~~~~
   public class SecondClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!";
      }
   }
   

    
    
|CodingEx| **Coding Exercise: Compile Time Error 3**

Click on the |runbutton| button below to try and run the following code.  What is wrong this time?  Can you fix it?  After you fix the first error, you may encounter a 2nd error! Fix that one too! Hints: How do you end a command in Java? Also, check for capitalization. 

.. activecode:: sc2error3
   :language: java

   Fix the code below.
   ~~~~    
   public class ThirdClass
   {
      public static void main(String[] args)
      {
         system.out.println("Hi there!")
      }
   }


Did you remember that System is capitalized in System.out.println? Did you find the missing semicolon? 
   
   
Comments
--------

In Java and many text-based coding languages, // is used to mark the beginning of a comment. For multi-line comments, use ``/*`` to start the comment and ``*/`` to end the comment. The compiler will skip over comments. However, it is a good idea to use comments to make notes to yourself and other programmers working with you. Here are some examples of good commenting:

.. code-block:: java 

    /* MyClass.java
       Programmer: My Name
       Date: 
    */   
    
    int max = 10; // this keeps track of the max score
    

|Groupwork| Debugging Challenge
-----------------------------------

.. image:: Figures/rubberduck.jpg
    :width: 150
    :align: left
    :alt: Rubber Duck
    
In this course, you are encouraged to work together in pairs to complete the programming challenges. Pair programming is a successful software development technique where two programmers work together at one computer. One, the driver, types in code while the other, the navigator, gives ideas and feedback. The two coders switch roles frequently.

Working in pairs, debug the following code. Can you find the all the bugs and get the code to run? 


.. activecode:: challenge1-2
   :language: java

   Fix the code below.
   ~~~~
   public class Challenge1_2
   {
      public static void main(String[] args)
      {
         System.out.print("Good morning! ")
         system.out.print("Good afternoon!);
         System.Print "And good evening!";
      
   }



Summary
-------------------

- A basic Java program looks like the following:

.. code-block:: java 

   public class MyClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!");
      }
   }
   
   
- A Java program starts with **public class NameOfClass { }**. If you are using your own files for your code, each class should be in a separate file that matches the class name inside it, for example NameOfClass.java.

- Most Java classes have a main method that will be run automatically. It looks like this: **public static void main(String[] args) { }**.

- The **System.out.print()** and **System.out.println()** methods display information given inside the parentheses on the computer monitor. 

- System.out.println moves the cursor to a new line after the information has been displayed, while System.out.print does not.

- A **string literal** is enclosed in double quotes ('' '').

- Java command lines end in ; (semicolon). { } are used to enclose blocks of code. // and ``/* */`` are used for comments.

- A **compiler** translates Java code into a class file that can be run on your computer. **Compiler or syntax errors** are reported to you by the compiler if the Java code is not correctly written. Some things to check for are ; at end of command lines, matching { }, (), and "". 

AP Practice
------------

.. mchoice:: AP1-2-1
    :practice: T
    
    Consider the following code segment.

    .. code-block:: java

       System.out.print("Java is ");
       System.out.println("fun ");
       System.out.print("and cool!");

    What is printed as a result of executing the code segment?       
    
    - .. raw:: html
    
         <pre>Java is fun and cool!</pre>

      - Notice the println in line 2.

    - .. raw:: html
    
         <pre>
         Java isfun 
         and cool!
         </pre>

      - Notice the space after is in the first line. 
      
    - .. raw:: html
      
         <pre>Java is
         fun 
         and cool!  </pre>

      - Notice that the first line is a print, not println.
      
    - .. raw:: html
      
         <pre>Java is fun
         and cool!  </pre>
      
      + Correct! Pay attention to which lines are print or println.
      
 
.. mchoice:: AP1-2-2
    :practice: T
    
    Consider the following code segment.

    .. code-block:: java
    
       System.out.println("Roses are red, ")      // Line 1;
       System.out.println("Violets are blue, ")  // Line 2;
       System.out.print("Unexpected '}' ")        // Line 3;
       System.out.print("on line 32. ")           // Line 4;

    The code segment is intended to produce the following output but may not work as intended.

    .. raw:: html
      
       <pre>Roses are red,
       Violets are blue,
       Unexpected '}' on line 32.</pre>

    Which change, if any, can be made so that the code segment produces the intended output?
    
    - Replacing print with println on lines 3 and 4.
    
      - These should print on the same line without a newline in between.
      
    - Replacing println with print on lines 1 and 2.
    
      - These should print out with a newline in between.
      
    - Removing the single quotes in line 3.
    
      - The single quotes are fine in this line.
    
    - Putting the semicolon after the ) on each line.
    
      + Correct! The semicolon should go after each command but not in the comment.