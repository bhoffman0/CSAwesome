.. qnum::
   :prefix: 3-8-
   :start: 1
   
Unit 3 - Summary
=========================

In this chapter you learned about **conditionals**.  **Conditionals** are used to execute code when a Boolean expression is true or false.  A Boolean expression is one that is either true or false like ``x > 0``.  

..	index::
    single: conditional 
    single: boolean expression
    single: boolean variable
    single: complex conditional
    single: DeMorgan's Laws
    single: logical and
    single: logical or
    single: short circuit evaluation


Concept Summary
---------------

- **Block of statements** - One or more statements enclosed in an open curly brace '{' and a closing curly brace '}'.
- **Boolean expression** - A mathematical or logical expression that is either true or false.  
- **complex conditional** - A Boolean expression with two or more conditions joined by a logical and '&&' or a logical or '||'.
- **conditional** - Used to execute code only if a Boolean expression is true.
- **DeMorgan's Laws** - Rules about how to distribute a negation on a complex conditional.  
- **logical and** - Used to only execute the following statement or block of statements if both conditions are true
- **logical or** - Used to execute the following statement or block of statements if one of the conditions are true
- **negation** - turns a true statement false and a false statement true
- **short circuit evaluation** - The type of evaluation used for logical and '&&' and logical or '||' expressions.  If the first condition is false in a complex conditional with a logical and the second condition won't be evaluated.  If the first condition is true is a complex conditional with a logical or the second condition won't be evaluated.

Java Keyword Summary
--------------------

- **if (Boolean expression)** - used to start a conditional statement.  This is followed by a statement or a block of statements that will be executed if the Boolean expression is true.
- **else** - used to execute a statement or block of statements if the Boolean expression on the if part was false.  
- **else if (Boolean expression)** - used to have 3 or more possible outcomes such as if x is equal, x is greater than, or x is less than some value.  It will only execute if the condition in the 'if' was false and the condition in the else if is true.

Vocabulary Practice
--------------------

.. dragndrop:: ch5_cond1
    :feedback: Review the summaries above.
    :match_1: joints two conditions and it will only be true if both of the conditions are true|||logical and
    :match_2: used to execute code only when a Boolean condition is true|||conditional
    :match_3: an expression that is either true or false|||Boolean expression
    :match_4: a conditional with two or more conditions joined together with logical ands or ors|||complex conditional
    
    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct
    
.. dragndrop:: ch5_cond2
    :feedback: Review the summaries above.
    :match_1: used to execute code when one of two conditions is true|||logical or
    :match_2: one or more statements enclosed in a open curly brace and a close curly brace|||blocks of statements
    :match_3: used to start a conditional and execute code if a condition is true|||if
    :match_4: used to distribute a negation on a complex conditional|||DeMorgan's Laws
    
    Drag the definition from the left and drop it on the correct method on the right.  Click the "Check Me" button to see if you are correct.

.. |Quizlet| raw:: html

   <a href="https://quizlet.com/434070386/cs-awesome-unit-3-vocabulary-flash-cards/" target="_blank" style="text-decoration:underline">Quizlet</a>


For more practice, see this |Quizlet|.

Common Mistakes
---------------

  -  Using = instead of == in ``if``'s. Remember that = is used to assign values and == is used to test. Ifs always use ==. 
  
  - Putting a ; at the end of ``if (test);``. Remember that the if statement ends after ``if (test) statement;`` or use curly brackets ``if (test) { statements; }``.
  
  -  Using two ``if``'s one after the other instead of an ``if`` and ``else``.    
  
  -  Trouble with complex conditionals which are two or more Boolean expressions joined by ``&&`` or ``||``.  
  
  - Not understanding that `||` is an inclusive-or where one or *both* conditions must be true.

  -  Trouble with understanding or applying negation (``!``).  See the section on DeMorgan's Laws.   
  
  -  Not understanding short circuit evaluation which is that if evaluation of the first Boolean expression is enough to determine the truth of a complex conditional the second expression will not be evaluated.  