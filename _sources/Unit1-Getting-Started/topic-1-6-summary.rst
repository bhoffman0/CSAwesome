.. qnum::
   :prefix: 1-7-
   :start: 1

Unit 1 Summary
===============

In this unit you learned about the three primitive data types on the exam: ``int``, ``double``, and ``boolean``.  You also learned how to declare (name) and change the value of variables.  You learned about operators, casting, and integer constants for the min and max integer values.

.. index::
    single: static
    single: variable
    single: int
    single: double
    single: boolean
    single: camel case
    single: declaring
    single: initializing
    single: shortcut operator
    single: modulo operator
    single: casting
    single: integer
    single: modulo
    single: true
    single: false

Concept Summary
---------------
- **Compiler** - Software that translates the Java source code into the Java class file which can be run on the computer.
- **Compiler or syntax error** - An error that is found during the compilation.
- **Main method** - Where execution starts in a Java program.
- **Variable** -  A name associated with a memory location in the computer.
- **Declare a Variable** - Specifying the type and name for a variable.  This sets aside memory for a variable of that type and associates the name with that memory location.
- **Initializing a Variable** - The first time you set the value of a variable.
- **data type** -  determines the size of memory reserved for a variable, for example int, double, boolean, String.
- **integer** - a whole number like 2 or -3
- **boolean** - An expression that is either ``true`` or ``false``.
- **Camel case** - One way to create a variable name by appending several words together and uppercasing the first letter of each word after the first word (``myScore``).
- **Casting a Variable** - Changing the type of a variable using *(type) name*.
- **Operator** - Common mathematical symbols such as ``+`` for addition and ``*`` for multiplication.
- **Compound assignment or shortcut operators** - Operators like ``x++`` which means ``x = x + 1`` or ``x *=y`` which means ``x = x * y``.
- **modulo** - The ``%`` operator which returns the remainder from one number divide by another.
- **arithmetic expression** - a sequence of operands and operators that describe a calculation to be performed, for example ``3*(2 + x)``
- **operator precedence** - some operators are done before others, for example ``*``, ``/``, ``%`` have precedence over ``+`` and ``-``, unless parentheses are used.


Java Keyword Summary
-----------------------

- **boolean** - used to declare a variable that can only have the value ``true`` or ``false``.
- **double** - used to declare a variable of type double (a decimal number like 3.25).
- **int** - used to declare a variable of type integer (a whole number like -3 or 235).
- **String** - used to declare a variable of type String which is a sequence of characters or text.
- **System.out.print()** - used to print output to the user
- **System.out.println()** - used to print output followed by a newline to the user
- **=** - used for assignment to a variable
- **+, -, *, /, %** - arithmetic operators





Vocabulary Practice
-----------------------

.. dragndrop:: ch3_var1
    :feedback: Review the summaries above.
    :match_1: Specifying the type and name for a variable|||declaring a variable
    :match_2: A whole number|||integer
    :match_3: A name associated with a memory location.|||variable
    :match_4: An expression that is either true or false|||Boolean

    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct

.. dragndrop:: ch3_var2
    :feedback: Review the summaries above.
    :match_1: Setting the value of a variable the first time|||initialize
    :match_2: An operator that returns the remainder|||mod
    :match_3: a type used to represent decimal values|||double
    :match_4: changing the type of a variable|||casting

    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct.

.. |Quizlet| raw:: html

   <a href="https://quizlet.com/433933862/cs-awesome-unit-1-vocabulary-flash-cards/" target="_blank" style="text-decoration:underline">Quizlet</a>


For more practice, see this |Quizlet| embedded below.

.. raw:: html

    <iframe style="max-width:90%; margin-left:5%"  src="https://quizlet.com/433933862/flashcards/embed?i=2cxqxx&x=1jj1" height="500" width="100%" style="border:0"></iframe>

Common Mistakes
---------------

  -  forgetting that Java is case sensitive - ``myScore`` is not the same as ``myscore``.

  -  forgetting to specify the type when declaring a variable (using ``name = value;`` instead of ``type name = value;``)

  -  using a variable name, but never declaring the variable.

  -  using the wrong name for the variable.  For example calling it ``studentTotal`` when you declare it, but later calling it ``total``.

  -  using the wrong type for a variable.  Don't forget that using integer types in calculations will give an integer result.  So either cast one integer value to double or use a double variable if you want the fractional part (the part after the decimal point).

  -  using ``==`` to compare double values. Remember that double values are often an approximation. You might want to test if the absolute value of the difference between the two values is less than some amount instead.

  -  assuming that some value like 0 will be smaller than other ``int`` values.  Remember that ``int`` values can be negative as well.  If you want to set a value to the smallest possible ``int`` values use ``Integer.MIN_VALUE``.
