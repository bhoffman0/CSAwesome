.. qnum::
   :prefix: 9-8-
   :start: 1
   
Inheritance Summary
-------------------------

In this chapter you learned about **inheritance**.  In an object-oriented program you write classes that define what objects of each class know (instance variables) and can do (methods).  One class can inherit object instance variables and methods from another, which makes the amount of code that you have to write smaller and makes the classes easier to test and extend.   

..	index::
    single: object
    single: class
    single: inheritance
    single: polymorphism
    single: parent class
    single: child class
    single: subclass
    single: superclass
    single: declared type
    single: run-time type
    single: overrides
    single: overloads
    single: getter
    single: setter
    single: accessor
    single: mutator

Concept Summary
=================

- **object** - Objects do the action in an object-oriented program. An object can have things it knows (attributes) and things it can do (methods).  An object is created by a class and keeps a reference to the class that created it.  
- **class** - A class defines what all objects of that class know (attributes) and can do (methods).  You can also have data and behavior in the object that represents the class (class instance variables and methods).  All objects of a class have access to class instance variables and class methods, but these can also be accessed using ``className.variable`` or ``className.method()``.
- **inheritance** - One class can inherit object instance variables and methods from another.  This makes it easy to reuse another class by extending it (inheriting from it).  This is called specialization.  You can also pull out common instance variables and/or methods from several related classes and put those in a common parent class.  This is called generalization. 
- **polymorphism** - The runtime type of an object can be that type or any subclass of the declared type. All method calls are resolved starting with the class that created the object.  If the method isn't found in the class that created the object, then it will look in the parent class and keep looking up the inheritance tree until it finds the method.  The method must exist, or the code would not have complied.   
- **parent class** - One class can inherit from another and the class that it is inheriting from is called the parent class.  The parent class is specified in the class declaration using the ``extends`` keyword followed by the parent class name. 
- **child class** - The class that is doing the inheriting is called the child class.  It inherits access to the object instance variables and methods in the parent class.
- **subclass** - A child class is also called a subclass.
- **superclass** - A parent class is also called a superclass.
- **declared type** - The type that was used in the declaration.  ``List aList = new ArrayList()`` has a declared type of ``List``.  This is used at compile time to check that the object has the methods that are being used in the code.
- **run-time type** - The type of the class that created the object. ``List aList = new ArrayList()`` has a run-time type of ``ArrayList``.  This is used at run-time to find the method to execute. 
- **overrides** - A child class can have the same method signature (method name and parameter list) as a parent class. Since methods are resolved starting with the class that created the object, that method will be called instead of the inherited parent method, so the child method overrides the parent method. 
- **overload** - At least two methods with the same name but different parameter lists.  The parameter lists can differ by the number of parameters and/or the types.  
- **getter** - A method that returns the value of an instance variable in an object.
- **setter** - A method that sets the value of am instance variable in an object.
- **accessor** - Another name for a getter method - one that returns the value of a instance variable.
- **mutator** - Another name for a setter method - one that changes the value of a instance variable.
  

Java Keyword Summary
=========================

- **extends** - Used to specify the parent class to inherit from.  It is followed by the name of the parent class, like this: ``public class ChildName extends ParentName``.  If no ``extends`` keyword is used in the class declaration, then the class will automatically inherit from the ``Object`` class. 
- **static** - Keyword used to indicate that a instance variable or method is part of the class and not part of each object created by the class. 
- **super** - Keyword used to call a method in a parent class.  This is useful if a child class overrides an inherited method, but still wants to call it. 

Vocabulary Practice
=======================

.. dragndrop:: ch10oo_match_1
    :feedback: Review the summaries above.
    :match_1: A class that extends another class|||child class
    :match_2: A class that is being extended|||parent class
    :match_3: Using the run-time type of an object to determine which method to call|||polymorphism
    :match_4: Providing a method in a child class with the same declaration as a parent method|||override
    
    Drag the item from the left and drop it on its corresponding answer on the right.  Click the "Check Me" button to see if you are correct.
    
.. dragndrop:: ch10oo_match_2
    :feedback: Review the summaries above.
    :match_1: What does the actual work in an object-oriented program|||object
    :match_2: Defines what all objects of the class know and can do|||class
    :match_3: Returns the value of an instance variable|||getter
    :match_4: Sets the value of an instance variable|||setter
    
    Drag the description from the left and drop it on the correct code on the right.  Click the "Check Me" button to see if you are correct.
    
.. dragndrop:: ch10oo_match_3
    :feedback: Review the summaries above.
    :match_1: A class that inherits from the specified class|||subclass
    :match_2: Two methods with the same method name in a class, but with different parameters|||overload
    :match_3: The type the object was declared as|||declared type
    :match_4: The class that created the object|||actual type
    
    Drag the description from the left and drop it on the correct code on the right.  Click the "Check Me" button to see if you are correct.

.. |Quizlet| raw:: html

   <a href="https://quizlet.com/434083291/cs-awesome-unit-9-vocabulary-flash-cards/" target="_blank" style="text-decoration:underline">Quizlet</a>


For more practice, see this |Quizlet|.

Common Mistakes
===============
  -  Using inheritance (is a kind of) when you should use association (has a).  A school has classes, it is not a type of class.  A high school is a kind of school.
  -  Using an instance variable for a type of class instead of subclasses.  If you ever find yourself creating conditionals based on the type of object use subclasses instead.
  -  Copying code instead of creating a subclass or pulling out a common superclass.  If you ever find yourself copying object attributes or methods try creating a subclass instead or pull out a common superclass.