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

.. raw:: html

   <div class="unit-time">
     <svg xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi
          bi-clock"
          viewBox="0 0 16 16">
       <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
       <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
     </svg> Time estimate: 45 min.
   </div>

Why Programming? Why Java?
============================

.. index::
   single: Java
   single: javac
   single: compile
   single: programming language
   pair: programming; language
   pair: Java; source file
   pair: Java; class file




What do Android phones, Minecraft, and Netflix have in common? They're all programmed in Java! Many of the apps you use in an Android phone or tablet are written in Java. If you've used App Inventor before, those apps are translated to Java before they are run on a phone or tablet. Netflix uses Java for some of its software too. Java is a **programming language** that is used worldwide to create software that we all use.

The following `video <https://www.youtube.com/watch?v=Fc-BQzPbJmU>`_ introduces this first lesson in CSAwesome.

.. youtube:: Fc-BQzPbJmU
    :width: 700
    :height: 400
    :align: center


.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button


First Java Program
-------------------


.. index::
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
   :autograde: unittest

   Run this code to see the output below it. Then change the code to print your name, for example "Hi Pat!", and run again.
   ~~~~
   public class MyClass
   {
       public static void main(String[] args)
       {
           System.out.println("Hi there!");
       }
   }

   ====
   // should pass if/when they run code
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "Hi there!";
           boolean passed =
                   getResults(expect, output, "Expected output from main", true);
           assertTrue(passed);
       }
   }

You can copy the Java source code shown in this book into a file and save it if you want to run it locally in an integrated development environment (IDE) on your local computer (see section 1.1. for different IDEs).  You must name the file the same name as the class name with ".java" as the extension.  All code (programs) in Java must be defined inside a class in a source file, and the name of the class must match the file name.


.. hparsons:: mp-main-method-order-1
    :language: java
    :randomize:
    :blockanswer: 0 1 2 3

    Put the blocks in order to create the first line for the ``main`` method. There are extra blocks that you don't need.
    ~~~~
    --blocks--
    public static
    void main(
    String[]
    args)
    public Static

.. hparsons:: mp-main-method-order-2
    :language: java
    :randomize:
    :blockanswer: 0 1 2 3 4 5

    Put the blocks in order to create the first line for the ``main`` method. There are extra blocks that you don't need.
    ~~~~
    --blocks--
    public
    static
    void
    main(
    String[]
    args)
    Void
    Public

.. hparsons:: mp-main-method-order-3
    :language: java
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6 7 8

    Put the blocks in order to create the first line for the ``main`` method. There are extra blocks that you don't need.
    ~~~~
    --blocks--
    public
    static
    void
    main
    (
    String
    []
    args
    )
    ()


Print Methods
-------------------

.. index::
   single: String
   single: String literal

Java has two different methods to print output to the screen:

- **System.out.println(value)** : prints the value followed by a new line (ln)
- **System.out.print(value)** : prints the value without advancing to the next line


``System.out.println("Hi there!");`` prints out the characters between the first ``"`` and the second ``"`` followed by a new line.  The ``"Hi there!"`` is called a **string literal**, and it can have zero to many characters enclosed in starting and ending double quotes.

.. activecode:: printCommands
   :language: java
   :autograde: unittest

   Run this code to see the output below it. How would you change it to print the ! on the same line as Hi there keeping all 3 print statements?
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

   ====
   // should pass if/when they run code
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "Hi there!";
           boolean passed =
                   getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }

       @Test
       public void testLineCount() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "1 output line";
           String actual = "  output line";

           if (output.length() > 0)
           {
               actual = output.split("\n").length + actual;
           }
           else
           {
               actual = output.length() + actual;
           }
           boolean passed =
                   getResults(expect, actual, "Checking lines of output");
           assertTrue(passed);
       }
   }

Special words—also called **keywords**—such as ``public``, ``class``, and ``if`` must be in lowercase, but class names such as ``System`` and ``String`` are capitalized. Lines in a Java program that express a complete action such as assigning a value to a variable must end with a semicolon (``;``). Such a line is called a **statement**. You can think of the semicolon (``;``) in Java like a period (``.``) in English. The same way you use a period to end a sentence in English, you use a semicolon to end a statement in Java.  You will not be penalized on the exam if you forget a needed semicolon but the Java compiler is not so lenient; your program won't compile without it. Note also that not *every* line ends with a semicolon; if the line starts a construct like an `if` statement, there is no semicolon before the opening ``{`` nor one after the closing ``}``.


.. hparsons:: mp-print-order-1
    :language: java
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6 7 8 9 10

    Put the blocks in order to create a Java statement that will print "Hi!". There are extra blocks that you don't need.
    ~~~~
    --blocks--
    System
    .
    out
    .
    println
    (
    "
    Hi!
    "
    )
    ;
    system

.. hparsons:: mp-print-order-2
    :language: java
    :randomize:
    :blockanswer: 0 1 2 3 4 5 6 7 8 9 10

    Put the blocks in order to create a Java statement that will print "Bye!". There are extra blocks that you don't need.
    ~~~~
    --blocks--
    System
    .
    out
    .
    println
    (
    "
    Bye!
    "
    )
    ;
    Out

Syntax Errors and Debugging
-----------------------------

Computers don't actually speak Java so we have to **compile** (translate) Java source files that we write into class files which is code that a computer can understand and run. In this e-book, the Java code is actually being sent to a Java server to compile and run, and the output is sent back to show on the same page.

.. |Grace Hopper| raw:: html

   <a href="https://en.wikipedia.org/wiki/Grace_Hopper" target="_blank">Grace Hopper</a>

.. |Rubber duck debugging| raw:: html

   <a href="https://rubberduckdebugging.com/" target="_blank">Rubber duck debugging</a>


**Syntax errors** are reported to you by the compiler if your Java code is not correctly written. Examples of syntax errors are a semicolon ``;`` missing or if the code has a open curly brace ``{`` or open quote ``"``, but no close curly brace ``}`` or close quote ``"``. Informally, a syntax error is called a **bug**, and the process of removing errors is called **debugging**. An early computer science pioneer |Grace Hopper| documented a real bug, a moth that flew into a computer in 1947!

.. figure:: Figures/firstbug.jpg
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 2: Grace Hopper's log showing a real bug, 1947.


The compiler tries to run your code, but if your code has **syntax errors**, you will see error messages displayed below the code. Compiler error messages will tell the line number that the compiler found the error and the type of error.  The error messages are not always easy to understand and sometimes the actual error is before the line that the compiler says is the problem.

Watch the following video to see that all coders get bugs. Debugging is a normal part of coding. It can be frustrating at times, but you will get better at it with practice! Sometimes another pair of eyes really helps, so ask a friend if you get stuck or try explaining your code line by line to someone or even a rubber duck. |Rubber duck debugging| is a lot of fun!

.. youtube:: auv10y-dN4s
    :width: 700
    :height: 400
    :align: center

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


Reading Error Messages
----------------------

In the exercise below, you should click on the |runbutton| button to
compile and run the code. Unfortunately you will find there is a syntax error in
the code that you need to fix. Before you try to fix it, look for the error
message below the code. This is called a **compile time error** because it is an
error detected by the compiler.

It will be a lot easier to find the problem, and other problems like it, if you
understand how to read the error message. So let’s take a closer look. It will
look something like this:

.. code-block:: text

   FirstClass.java:5: error: unclosed string literal
          System.out.println("Hi there!);
                             ^
   1 error

The first line starts with the name of the file that was being compiled.
Because you submitted your code via this web page you didn't actually name
the file but it was named for you to match the name of your class. Then
there's a colon (``:``) followed by a number. That number tells you the line
number in the file where the compiler detected the error, in this case
line 5.

Error messages aren't always 100% accurate about where the error actually is;
sometimes you actually need to change something a bit earlier in the program
and sometimes a bit later. But the line number is the best place to start
looking.

After the line number and another colon, you will find the actual error message. These
can be kind of cryptic but you should still read it. As you learn more Java
vocabulary they will become more meaningful but they almost always contain
some useful clues. For instance take this error message: “unclosed string
literal”. You may not know what a string literal is (yet) but “unclosed”
suggests something was opened and then not closed. Keep that thought in mind.

Now look at the next two lines. The very next line is just the line of code
from your program. But below that is a very important line containing a
single caret (``^``) positioned to point at exactly where in the line the
Java compiler thinks the problem is. In this case it’s pointing at the
quotation mark (``”``) before “Hi”. So it’s complaining about something being
unclosed and it’s pointing us at a quotation mark. Usually quotation marks
come in pairs called the open quote and the close quote, right? And if you
look at the line of code you’ll see that there’s no closing quotation mark.
Could that be the problem? Try adding a quotation mark and see if that fixes
it!

It is worth getting in the habit of really reading error messages. The people
who wrote the Java compiler put in lot of work to try to make the error
messages useful. If you read them, you’ll soon learn to recognize
common mistakes and will get much quicker at finding your syntax errors.

|CodingEx| **Coding Exercise: Compile Time Error 1**

.. activecode:: sc2error1
   :language: java
   :autograde: unittest
   :practice: T

   Fix the code below.
   ~~~~
   public class FirstClass
   {
       public static void main(String[] args)
       {
           System.out.println("Hi there!);
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
           String expect = "Hi there!";
           boolean passed =
                   getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }
   }

|CodingEx| **Coding Exercise: Compile Time Error 2**

Click on the |runbutton| button below to try and run the following code. Look
for an error message after the code. This time the error message will probably
point even more exactly at the problem than in the previous exercise. Try to fix
the code and run it again.

.. activecode:: sc2error2
   :language: java
   :autograde: unittest
   :practice: T

   Fix the code below.
   ~~~~
   public class SecondClass
   {
       public static void main(String[] args)
       {
           System.out.println("Hi there!";
       }
   }

   ====
   // should pass if/when they run code
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "Hi there!";
           boolean passed =
                   getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }
   }

|CodingEx| **Coding Exercise: Compile Time Error 3**

Click on the |runbutton| button below to try and run the following code. What is
wrong this time? The first error message will probably point you directly at the
problem. But after you fix that you’ll probably get a `new` error! That happens
sometimes because the compiler can’t even detect the second error until the
first one is fixed.

This is another reason it’s important to read error messages. It's very tempting
when we see that there's an error to jump immediately to trying to fix it. Arg,
an error! Get rid of it! But if we don't slow down and read the message in a
case like this, we might not notice that we've actually fixed the first error.
If we don't notice that we fixed it, we might undo our change and `unfix` it!

So read the error messages—they’re there to help you. With that in mind, see if
you can fix both errors in this code. A hint for the second error:
capitalization matters.

.. activecode:: sc2error3
   :language: java
   :autograde: unittest
   :practice: T

   Fix the code below.
   ~~~~
   public class ThirdClass
   {
       public static void main(String[] args)
       {
           system.out.println("Hi there!")
       }
   }

   ====
   // should pass if/when they run code
   // This doesn't really work because it filters out the \n
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "Hi there!";
           boolean passed =
                   getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }
   }

Did you remember that System is capitalized in System.out.println? Did you find the missing semicolon?


Comments
--------

In Java and many text-based coding languages, ``//`` is used to mark the
beginning of a comment. For multi-line comments, use ``/*`` to start the comment
and ``*/`` to end the comment. The compiler will skip over comments. However, it
is a good idea to use comments to make notes to yourself and other programmers
working with you. Here are some examples of good commenting:

.. code-block:: java

    /* MyClass.java
       Programmer: My Name
       Date:
    */

    int max = 10; // this keeps track of the max score


|Groupwork| Debugging Challenge
-----------------------------------

.. image:: Figures/rubberduck.jpg
    :width: 100px
    :align: left
    :alt: Rubber Duck

In this course, you are encouraged to work together in pairs to complete the programming challenges. Pair programming is a successful software development technique where two programmers work together at one computer. One, the driver, types in code while the other, the navigator, gives ideas and feedback. The two coders switch roles frequently. Another option is buddy programming, where two or three coders work on their own computers but help each other as needed. If you're working alone, you may want to explain the code to a rubber duck or another toy using |Rubber duck debugging|.

Working in pairs, debug the following code. Can you find all the bugs and get the code to run?


.. activecode:: challenge1-2
   :language: java
   :autograde: unittest
   :practice: T

   Fix the code below.
   ~~~~
   public class Challenge1_2
   {
      public static void main(String[] args)
      {
          System.out.print("Good morning! ")
          system.out.print("Good afternoon!);
          System.Print " And good evening!";

   }

   ====
   // should pass if/when they run code
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "Good morning! Good afternoon! And good evening";
           boolean passed =
                   getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }
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

- Java statements end in ``;`` (semicolon). ``{ }`` are used to enclose blocks of code. ``//`` and ``/* */`` are used for comments.

- A **compiler** translates Java code into a class file that can be run on your computer. **Compiler or syntax errors** are reported to you by the compiler if the Java code is not correctly written. Some things to check for are ``;`` at end of lines containing complete statements and matching ``{ }``, ``()``, and ``""``.

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

      + Correct! The semicolon should go after each statement but not in the comment.
