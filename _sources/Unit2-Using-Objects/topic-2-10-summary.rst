.. qnum::
   :prefix: 2-10-
   :start: 1
   
Unit 2 Summary
===============

In this unit, you learned to use objects (variables of a class type)  that have been written for you in Java. You learned to use constructors and methods with and without parameters of objects, and built-in Java classes like String, Integer, Double, and Math.




Concept Summary
---------------

- **class** - defines a new data type. It is the formal implementation, or blueprint, of the *attributes* and *behaviors* of the objects of that class.

- **object** - a specific instance of a class with defined attributes. Objects are declared as variables of a class type.

- **constructors** - code that is used to create new objects and initialize the object's attributes.

- **new** -  keyword used to create objects with a call to one of the class’s constructors.

- **instance variables** - define the attributes for objects.

- **methods** - define the behaviors or functions for objects. 

- **dot (.) operator** - used to acces an object's methods.  

- **parameters (arguments)** - the values or data passed to an object's method inside the parentheses in the method call to help the method do its job.

- **return values** - values returned by methods to the calling method.


- **immutable** - String methods do not change the String object. Any method that seems to change a string actually creates a new string. 

- **wrapper classes** - classes that create objects from primitive types, for example the Integer class and Double class.


Java Keyword Summary
-----------------------

- **new** is used to create a new object.
- **null** is used to indicate that an object reference doesn't refer to any object yet.
- The following String methods and constructors, including what they do and when they are used, are part of the Java Quick Reference in the AP exam:

  - **String(String str)** : Constructs a new String object that represents the same sequence of characters as str.
  
  - **int length()** : returns the number of characters in a String object. 

  - **String substring(int from, int to)** : returns the substring beginning at index from  and ending at index (to – 1).

  - **String substring(int from)** : returns substring(from, length()). A string identical to the single element substring at position index can be created by calling substring(index, index + 1
  
  - **int indexOf(String str)** : returns the index of the first occurrence of str; returns -1 if not found.
  
  - **boolean equals(String other)** : returns true if this (the calling object) is equal to other; returns false otherwise.
  
  - **int compareTo(String other)** : returns a value < 0 if this is less than other; returns zero if this is equal to other; returns a value > 0 if this is greater than other.

- The following Integer methods and constructors, including what they do and when they are used, are part of the Java Quick Reference.

  - Integer(value): Constructs a new Integer object that represents the specified int value.
  - Integer.MIN_VALUE : The minimum value represented by an int or Integer.
  - Integer.MAX_VALUE : The maximum value represented by an int or Integer.
  - int intValue() : Returns the value of this Integer as an int.

- The following Double methods and constructors, including what they do and when they are used, are part of the Java Quick Reference Guide given during the exam:

  - Double(double value) : Constructs a new Double object that represents the specified double value.
  - double doubleValue() : Returns the value of this Double as a double.




- The following static Math methods are part of the Java Quick Reference:

  - **int abs(int)** : Returns the absolute value of an int value (which means no negatives).
  - **double abs(double)** : Returns the absolute value of a double value.
  - **double pow(double, double)** : Returns the value of the first parameter raised to the power of the second parameter. 
  - **double sqrt(double)** :  Returns the positive square root of a double value.
  - **double random()** :  Returns a double value greater than or equal to 0.0 and less than 1.0 (not including 1.0)!
  


- **(int)(Math.random()*range) + min** moves the random number into a range starting from a minimum number. The range is the **(max number - min number + 1)**. For example, to get a number in the range of 5 to 10, use the range 10-5+1 = 6 and the min number 5: (int)(Math.random()*6) + 5).


Vocabulary Practice
-----------------------

.. dragndrop:: unit2_vocab
    :feedback: Review the summaries above.
    :match_1: a specific instance of a class with defined attributes|||object
    :match_2: defines a new data type with instance variables and methods|||class
    :match_3: define the behaviors or functions for objects|||methods
    :match_4: code that is used to create new objects and initialize the object's attributes|||constructors
    :match_5: the values or data passed to an object's method|||parameters
    
    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct.


.. |Quizlet| raw:: html

   <a href="https://quizlet.com/434063730/cs-awesome-unit-2-vocabulary-flash-cards/" target="_blank" style="text-decoration:underline">Quizlet</a>


For more practice, see this |Quizlet|.
    
Common Mistakes 
----------------------------

  - Forgetting to declare an object to call a method from main or from outside of the class, for example object.method();
  
  - Forgetting () after method names when calling methods, for example object.method();
  
  - Forgetting to give the right parameters in the right order to a method that requires them.
  
  - Forgetting to save, print, or use the return value from a method that returns a value, for example int result = Math.pow(2,3);

  -  Using ``==`` to test if two strings or objects are equal.  This is actually a test to see if they refer to the same object.  Usually you only want to know if they have the same characters in the same order.  In that case you should use ``equals`` or ``compareTo`` instead.    
  
  -  Treating upper and lower case characters the same in Java.  If ``s1 = "Hi"`` and ``s2 = "hi"`` then ``s1.equals(s2)`` is false.  
  
  -  Thinking that substrings include the character at the last index when they don't. 
  
  -  Thinking that strings can change when they can't.  They are immutable.  
  
  -  Trying to invoke a method like ``indexOf`` on a string reference that is null.  You will get a null pointer exception.