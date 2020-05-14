.. qnum::
   :prefix: 1-4-
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
    
    
Expressions and Assignment Statements
=====================================

In this lesson, you will learn about assignment statements and expressions that contain math operators and variables. 

Assignment Statements
---------------------

Remember that a variable holds a value and that value can change or vary.  **Assignment statements** initialize or change the value stored in a variable using the assignment operator =.  The value of the expression on the right of the = sign is stored in the variable on the left. These values can be complex **expressions** that contain math operators and other variables like in the example below. 

.. code-block:: java 

    // Assignment statement: 
    // variable = expression;
    score = (10 * points) + 5;

If you use a variable to keep score you would probably increment it (add one to the current value) whenever score should go up.  You can do this by setting the variable to the current value of the variable plus one (score = score + 1) as shown below. The formula looks a little crazy in math class, but it makes sense in coding because the variable on the left is set to the value of the arithmetic expression on the right. So, the score variable is set to the previous value of score + 1.

.. activecode:: lccv1
   :language: java
   
   Try the code below to see how score is incremented by 1.
   ~~~~
   public class Test1
   {
      public static void main(String[] args)
      {
        int score = 0;
        System.out.println(score);
        score = score + 1;
        System.out.println(score);
      }
   }
   
You can set one variable's value to a *copy* of the value of another variable.  This won't change the value of the variable that you are copying from.  



.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public+class+Test2%0A%7B%0A+++public+static+void+main(String%5B%5D+args%29%0A+++%7B%0A+++++int+x+%3D+3%3B%0A+++++int+y+%3D+2%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++x+%3D+y%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++y+%3D+5%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++%7D%0A%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>

Click on this cool |Java visualizer| to step through the code. Click on the Forward button at the bottom of the code to see how the values of the variables change.

 
.. codelens:: asgn-viz1
    :language: java 
 
    public class Test2
    {
      public static void main(String[] args)
      {
        int x = 3;
        int y = 2;
        System.out.println(x);
        System.out.println(y);
        x = y;
        System.out.println(x);
        System.out.println(y);
        y = 5;
        System.out.println(x);
        System.out.println(y);
      }
    }


.. only works with https

.. raw:: html

   <div>
   <iframe width="800" height="600" frameborder="0" src="https://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test2%0A%7B%0A+++public+static+void+main(String%5B%5D+args%29%0A+++%7B%0A+++++int+x+%3D+3%3B%0A+++++int+y+%3D+2%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++x+%3D+y%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++y+%3D+5%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++%7D%0A%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=0&codeDivWidth=350&codeDivHeight=400"> </iframe>
   </div>
   
|Exercise| **Check your understanding**

.. |Java visualizer2| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public+class+Test2%0A%7B%0A+++public+static+void+main(String%5B%5D+args%29%0A+++%7B%0A+++++int+x+%3D+0%3B%0A+++++int+y+%3D+1%3B%0A+++++int+z+%3D+2%3B%0A+++++x+%3D+y%3B%0A+++++y+%3D+y+*+2%3B%0A+++++z+%3D+3%3B%0A+++++System.out.println(x%29%3B%0A+++++System.out.println(y%29%3B%0A+++++System.out.println(z%29%3B%0A+++%7D%0A%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>
   
.. mchoice:: q2_1
   :practice: T
   :answer_a: x = 0, y = 1, z = 2
   :answer_b: x = 1, y = 2, z = 3
   :answer_c: x = 2, y = 2, z = 3
   :answer_d: x = 0, y = 0, z = 3
   :correct: b
   :feedback_a: These are the initial values in the variable, but the values are changed.
   :feedback_b: x changes to y's initial value, y's value is doubled, and z is set to 3
   :feedback_c: Remember that the equal sign doesn't mean that the two sides are equal.  It sets the value for the variable on the left to the value from evaluating the right side.
   :feedback_d: Remember that the equal sign doesn't mean that the two sides are equal.  It sets the value for the variable on the left to the value from evaluating the right side.

   What are the values of x, y, and z after the following code executes?  You can step through this code by clicking on this |Java visualizer2| link.

   .. code-block:: java 

       int x = 0;
       int y = 1;
       int z = 2;
       x = y;
       y = y * 2;
       z = 3;

      
|Exercise| **Mixed up programs**

In the mixed up programs below, drag the blocks to the right to put them in the right order.

.. parsonsprob:: 2_swap
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following has the correct code to 'swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block</b> which is not needed in a correct solution.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.  After three incorrect attempts you will be able to use the <i>Help Me</i> button to make the problem easier.  
   -----
   int x = 3;
   int y = 5;
   int temp = 0;
   =====
   temp = x;
   =====
   x = y;
   =====
   y = temp;
   =====
   y = x; #distractor
   
Input with Variables
--------------------

.. |repl JavaIOExample| raw:: html

   <a href="https://repl.it/@BerylHoffman/JavaIOExample" target="_blank">repl JavaIOExample</a>




Variables are a powerful abstraction in programming because the same algorithm can be used with different input values saved in variables.  The code below (|repl JavaIOExample|) will say hello to anyone who types in their name for different name values. Click on run and then type in your name. Then, try run again and type in a friend's name. The code works for any name: behold, the power of variables!

.. raw:: html

    <iframe height="500px" width="100%" style="max-width:90%; margin-left:5%"  src="https://repl.it/@BerylHoffman/JavaIOExample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    
Although you will not be tested in the AP CS A exam on using the Java System.in and Scanner classes, learning how to do input in Java is still very useful. More information on using the Scanner class can be found here https://www.w3schools.com/java/java_user_input.asp 



Operators
---------


..	index::
	single: operators
	pair: math; operators
	pair: operators; addition
	pair: operators; subtraction
	pair: operators; multiplication
    pair: operators; division
    pair: operators; equality
    pair: operators; inequality

Java uses the standard mathematical operators for addition (``+``), subtraction (``-``), multiplication (``*``), and division (``/``). Arithmetic expressions can be of type int or double. An arithmetic operation that uses two int values will evaluate to an int value. An arithmetic operation that uses at least one double value will evaluate to a double value.  (You may have noticed that + was also used to put text together in the input program above -- more on this when we talk about strings.)

Java uses the operator ``==`` to test if the value on the left is equal to the value on the right and ``!=`` to test if two items are not equal.   Don't get one equal sign ``=`` confused with two equal signs ``==``! They mean different things in Java. One equal sign is used to assign a value to a variable. Two equal signs are used to test a variable to see if it is a certain value and that returns true or false as you'll see below.  Use == and != only with int values and not doubles because double values are an approximation and 3.3333 will not equal 3.3334 even though they are very close.

|CodingEx| **Coding Exercise:** 



.. activecode:: lcop1
   :language: java
   
   Run the code below to see all the operators in action. Do all of those operators do what you expected?  What about ``2 / 3``? Isn't surprising that it prints ``0``?  See the note below.
   ~~~~
   public class Test1
   {
      public static void main(String[] args)
      {
        System.out.println(2 + 3);
        System.out.println(2 - 3);
        System.out.println(2 * 3);
        System.out.println(2 / 3);
        System.out.println(2 == 3);
        System.out.println(2 != 3);
      }
   }
   


.. note::

   When Java sees you doing integer division (or any operation with integers) it assumes you want an integer result so it throws away anything after the decimal point in the answer, essentially rounding down the answer to a whole number. If you need a double answer, you should make at least one of the values in the expression a double like 2.0.

   
With division, another thing to watch out for is dividing by 0. An attempt to divide an integer by zero will result in an **ArithmeticException** error message. Try it in one of the active code windows above.

Operators can be used to create compound expressions with more than one operator. You can either use a literal value which is a fixed value like 2, or variables in them.  When compound expressions are evaluated, **operator precedence** rules are used, so that \*, /, and % are done before + and -. However, anything in parentheses is done first. It doesn't hurt to put in extra parentheses if you are unsure as to what will be done first.  

|CodingEx| **Coding Exercise:** 



.. activecode:: compound1
   :language: java
   
   In the example below, try to guess what it will print out and then run it to see if you are right. Remember to consider **operator precedence**.
   ~~~~
   public class TestCompound
   {
      public static void main(String[] args)
      {
        System.out.println(2 + 3 * 2);
        System.out.println((2 + 3) * 2);
        System.out.println(2 + (3 * 2));
      }
   }
   
|Exercise| **AP CSA Sample Question**

The following is a 2019 AP CSA sample question.

.. mchoice:: apcsa_sample1
   :practice: T
   :answer_a: 0.666666666666667
   :answer_b: 9.0
   :answer_c: 10.0
   :answer_d: 11.5
   :answer_e: 14.0
   :correct: c
   :feedback_a: Don't forget that division and multiplication will be done first due to operator precedence. 
   :feedback_b: Don't forget that division and multiplication will be done first due to operator precedence.
   :feedback_c: Yes, this is equivalent to (5 + ((a/b)*c) - 1).   
   :feedback_d: Don't forget that division and multiplication will be done first due to operator precedence, and that an int/int gives an int result where it is rounded down to the nearest int.
   :feedback_e: Don't forget that division and multiplication will be done first due to operator precedence.
   
   Consider the following code segment.
   
   .. code-block:: java 
   
       int a = 5;
       int b = 2;
       double c = 3.0;
       System.out.println(5 + a / b * c - 1);
   
   What is printed when the code segment is executed?
   
   
The Modulo Operator
--------------------

The percent sign operator (``%``) is the **mod (modulo)** or **remainder** operator.  The mod operator (``x % y``) returns the remainder after you divide ``x`` (first number) by ``y`` (second number) so ``5 % 2`` will return 1 since 2 goes into 5 two times with a remainder of 1.  Remember long division when you had to specify how many times one number went into another evenly and the remainder?  That remainder is what is returned by the modulo operator.

.. figure:: Figures/mod-py.png
    :width: 150px
    :align: center
    :figclass: align-center
    
    Figure 1: Long division showing the whole number result and the remainder
    

|CodingEx| **Coding Exercise:** 

.. activecode:: lcop2
   :language: java
   
   In the example below, try to guess what it will print out and then run it to see if you are right.
   ~~~~
   public class Test1
   {
      public static void main(String[] args)
      {
        System.out.println(11 % 10);
        System.out.println(3 % 4);
        System.out.println(8 % 2);
        System.out.println(9 % 2);
      }
   }
    

.. note::
   The result of ``x % y`` when ``x`` is smaller than ``y`` is always ``x``.  The value ``y`` can't go into ``x`` at all (goes in 0 times), since ``x`` is smaller than ``y``, so the result is just ``x``.  So if you see ``2 % 3`` the result is ``2``.  
  
..	index::
	single: modulo
	single: remainder
	pair: operators; modulo
	
|Exercise| **Check Your Understanding**
	
.. mchoice:: q3_4_1
   :practice: T
   :answer_a: 15
   :answer_b: 16
   :answer_c: 8
   :correct: c
   :feedback_a: This would be the result of 158 divided by 10.  modulo gives you the remainder.
   :feedback_b: modulo gives you the remainder after the division.
   :feedback_c: When you divide 158 by 10 you get a remainder of 8.  

   What is the result of 158 % 10?
   
.. mchoice:: q3_4_2
   :practice: T
   :answer_a: 3
   :answer_b: 2
   :answer_c: 8
   :correct: a
   :feedback_a: 8 goes into 3 no times so the remainder is 3.  The remainder of a smaller number divided by a larger number is always the smaller number!
   :feedback_b: This would be the remainder if the question was 8 % 3 but here we are asking for the reminder after we divide 3 by 8.
   :feedback_c: What is the remainder after you divide 3 by 8?  

   What is the result of 3 % 8?
	



   

|Groupwork| Programming Challenge : Dog Years
------------------------------------------------

.. |dog| image:: Figures/dog-free.png
    :width: 100
    :align: middle
    :alt: dog
    
|dog| In this programming challenge, you will calculate your age, your pet's age, and your pet's age in dog years.   In the code below, type in the current year, the year you were born, the year your dog or cat was born (if you don't have one, make one up!) in the variables below. Then write formulas in assignment statements to calculate how old you are, how old your dog or cat is, and how old they are in dog years which is 7 times a human year.  Finally, print it all out. If you are pair programming, switch drivers (who has control of the keyboard in pair programming) after every line of code. 

.. |repl| raw:: html

   <a href="https://repl.it" target="_blank">repl.it</a>
   

.. |Scanner| raw:: html

   <a href="https://www.w3schools.com/java/java_user_input.asp" target="_blank">Scanner class</a>
   
Your teacher may suggest that you use a Java IDE like |repl| for this challenge so that you can use input to get these values using the |Scanner|.



.. activecode:: challenge1-4
   :language: java

   Calculate your age, your pet's age, and your pet's age in dog years.
   ~~~~
   public class Challenge1_4
   {
      public static void main(String[] args)
      {
         // Fill in values for these variables
         int currentYear = 
         int birthYear = 
         int dogBirthYear = 
         
         // Write a formula to calculate your age 
         // from the currentYear and your birthYear variables 
         int age = 
         
         // Write a formula to calculate your dog's age 
         // from the currentYear and dogBirthYear variables 
         int dogAge = 
         
         // Calculate the age of your dog in dogYears (7 times a human year)
         int dogYearsAge =
         
         // Print out your age, your dog's age, and your dog's age in dog years. Make sure you print out text too so that the user knows what is being printed out.
        
      
      
      }
   }
   

Summary
-------------------

- Arithmetic expressions include expressions of type int and double.

- The arithmetic operators consist of +, -, \* , /, and % (modulo for the remainder in division).

- An arithmetic operation that uses two int values will evaluate to an int value. With integer division, any decimal part in the result will be thrown away, essentially rounding down the answer to a whole number.

- An arithmetic operation that uses at least one double value will evaluate to a double value.

- Operators can be used to construct compound expressions.

- During evaluation, operands are associated with operators according to **operator precedence** to determine how they are grouped. (\*, /, % have precedence over + and -, unless parentheses are used to group those.)

- An attempt to divide an integer by zero will result in an ArithmeticException to occur. 

- The assignment operator (=) allows a program to initialize or change the value stored in a variable.  The value of the expression on the right is stored in the variable on the left.

- During execution, expressions are evaluated to produce a single value.

- The value of an expression has a type based on the evaluation of the expression.
