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

What do Minecraft, Android phones, and Netflix have in common? They're all programmed in Java! Here is a |video of Notch|, the creator of the popular game Minecraft, programming in Java.  Many of the apps you use in an Android phone or tablet are also written in Java. If you've used App Inventor before, those apps are translated to Java before they are run on a phone or tablet. Netflix uses Java for some of its software too. Java is used worldwide to create software that we all use.

.. Java was invented in 1991 at Sun Microsystems by James Gosling and his team. They based the new language on current languages like C and C++, but improved on many of the features. For example, Java follows the "Write once, run anywhere" philosophy. Java code can be run on almost any computer with any operating system. 

Java is a **programming language**, which means that we can use Java to tell a computer what to do. Computers don't actually speak Java so we have to **compile** (translate) Java source files (they end in .java) into class files (they end in .class).  The source file is something humans can read and edit, and the class file is code that a computer can understand and can run.

.. figure:: Figures/compile.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 1: Compiling Java source (Person.java) into a class file (Person.class) 
    
In this book, the Java code is actually being sent to a server to compile and run, and the output will be shown on the same book page, so you won't actually create a source file or class file.  But if you have a Java development environment on your local computer, you can use the Java command ``javac`` to compile your Java source code at a command line.  You can use ``java ClassName`` to execute the ``main`` method in a Java class. You can also use an integrated development environment (IDE) on your local computer (see section 1.1. for different IDEs) that run Java code with the click of a button.  


.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button
    
.. |audiotour| image:: Figures/start-audio-tour.png
    :height: 20px
    :align: top
    :alt: audio tour button
    
.. |checkme| image:: Figures/checkMe.png
    :height: 20px
    :align: top
    :alt: check me button
    
First Example Class
-------------------


..	index::
	single: class
	single: keyword
	pair: class; field
	pair: class; constructor
	pair: class; method
	pair: class; main method
	
To define a class in Java use the **keywords** (words that Java already understands) ``public class`` followed by a *ClassName*.  Then the body of the class is enclosed in a starting ``{`` and ending ``}`` as shown below.

.. code-block:: java 

   public class ClassName
   {
   }
   
.. note::

   In Java every open curly brace ``{`` must have a matched close curly brace ``}``.  These are used to start and end class definitions and method definitions.   
   
The following is an example class in Java.  A class in Java can have **instance variables** (attributes), **constructors** (ways to initialize the instance variables), **methods** (behaviors), and a **main method** for testing the class. It does 
not have to have *any* of these items.  The following would compile, but what do you think would happen if you tried to have a computer execute it?
   
.. code-block:: java 

   public class FirstClass
   {
   }

The class ``FirstClass`` doesn't have anything inside of it, so the computer wouldn't know what to do if we asked it to execute the class.    

|CodingEx| **Coding Exercise**: Click on the |runbutton| button below to have the computer execute the ``main`` method (starts with ``public static void main(String[] args)``) in the following class.  When you ask the Java run-time to *run* a class (java ClassName) it will always start execution in the ``main`` method. You can also click on the |audiotour| button below to listen to a line by line description of the code.  Then, change the code  to print your name.  Be sure to keep the starting ``"`` and ending ``"``.  Click on the |runbutton| button to run the modified code.
 

.. activecode:: lcfc1
   :language: java
   :tour_1: "Line-by-line Tour"; 1: scline1; 2: scline2; 3: scline3; 4: scline4; 5: scline5; 6: scline6; 7: scline7;

   public class SecondClass
   {
      public static void main(String[] args)
      {
         System.out.println("Hi there!");
      }
   }




You can copy the Java source code shown in this book into a file and save it if you want to run it locally on your computer.  Be sure to name the file the same name as the class name with ".java" as the extension.  All code (programs) in Java must be part of a **class** (defined inside a class) in a source file and the name of the class must match the file name. 

..	index::
	single: String
	single: String literal
   


.. note::

   ``System.out.println`` is just the way that you ask Java to print out the value of something followed by a new line (ln).  In the case above we are just printing the characters between the first ``"`` and the second ``"``.  The ``"Hi there!"`` is called a **string literal** and it can have zero to many characters enclosed in starting and ending double quotes in Java. ``System.out.print`` without the ln will print out something without advancing to the next new line. The "System" in System.out.println must be capitalized. And the command line must end with a semicolon (;).
   


|Exercise| **Check Your Understanding: Mixed up programs**


.. parsonsprob:: thirdClass
   :numbered: left
   :adaptive:
   :noindent:

   The following has all the correct code to print out "Hi my friend!" when the code is run, but the code is mixed up.  Drag the blocks from left to right and put them in the correct order.  Click on the "Check Me" button to check your solution.
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
   
.. This was in compileTimeErrors.rst

Compiler Errors
---------------

  

.. |Grace Hopper| raw:: html

   <a href="https://en.wikipedia.org/wiki/Grace_Hopper" target="_blank">Grace Hopper</a>
   
**Syntax errors** are reported to you by the compiler if your Java code is not correctly written. Examples of syntax errors are a semicolon ``;`` missing or if the code has a open curly brace ``{``, but no close curly brace ``}``. Informally, it is called a **bug** and the process of removing errors is called **debugging**. An early computer science pioneer |Grace Hopper| documented a real bug, a moth that flew into a computer in 1947!

.. figure:: https://upload.wikimedia.org/wikipedia/commons/8/8a/H96566k.jpg
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 2: Grace Hopper's log showing a real bug, 1947.


Remember that the Java source file has to be translated into a class file before it can be run.  The compiler tries to make sense of your code, but if your code has **syntax errors**, you will see error messages displayed below the code. Compiler error messages will tell the line number that the compiler found the error and the type of error.  The error messages are not always easy to understand and sometimes the actual error is before the line that the compiler says is the problem.  This section has code that causes compiler errors to show you the types of error messages you might see and help you learn how debug your programs. 



|CodingEx| **Coding Exercise: Compile Time Error 1**

Click on the |runbutton| button below to try and run the following code.  Look for an error message after the code.  This is called a **compile time error** because it is an error detected by the compiler.  

What is wrong?  Can you fix it?  The error message will tell you the line number that it thinks is causing the error (``SecondClass.java:5: error: unclosed string literal``).  Check line 5 to make sure that everything looks correct.  One good thing to check is that all ``{`` have a matching ``}`` and all ``(`` have a matching ``)`` and all starting ``"`` have a ending ``"`` as well. Try putting in the missing symbol and run again. This is called **debugging**.

.. activecode:: sc2error1
   :language: java

   Fix the code below.
   ~~~~
   public class SecondClass
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
   public class SecondClass
   {
      public static void main(String[] args)
      {
         system.out.println("Hi there!")
      }
   }


Did you remember that System is capitalized in System.out.println? Did you find the missing semicolon? Think of the semicolon (;) in Java like a period (.) in English.  It is how you show the end of a sentence.  You use a semicolon (``;``) to show the end of a Java statement.  You will not be penalized on the exam if you forget the semicolon.  However, your programs won't run without it.
   
   
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

In this course, you are encouraged to work together in pairs to complete the programming challenges. Pair programming is a successful software development technique where two programmers work together at one computer. One, the driver, types in code while the other, the navigator, gives ideas and feedback. The two coders switch roles frequently.

Working in pairs, debug the following code. Can you find the all the bugs and get the code to run? 


.. activecode:: challenge1-2
   :language: java

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