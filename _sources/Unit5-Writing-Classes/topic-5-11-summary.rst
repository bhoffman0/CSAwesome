.. qnum::
   :prefix: 5-11-
   :start: 1
   
Unit 5 Summary
================



..	index::
    single: class
    single: compiler
	single: compile time error
	single: field
	single: Java
	single: main method
	single: method
	single: object
	single: syntax error
	single: private
	single: public

Concept Summary
---------------

- **Class** - A class defines a type and is used to define what all objects of that class know and can do.
- **Compiler** - Software that translates the Java source code (ends in .java) into the Java class file (ends in .class). 
- **Compile time error** - An error that is found during the compilation.  These are also called syntax errors.  
- **Constructor** - Used to initialize fields in a newly created object.  
- **Field** - A field holds data or a property - what an object knows or keeps track of.
- **Java** - A programming language that you can use to tell a computer what to do.  
- **Main Method** - Where execution starts in a Java program.
- **Method** - Defines behavior - what an object can do.
- **Object** - Objects do the actual work in an object-oriented program.
- **Syntax Error** - A syntax error is an error in the specification of the program.

Java Keyword Summary
--------------------------

- **class** - used to define a new class
- **public** - a visibility keyword which is used to control the classes that have access.  The keyword public means the code in any class has direct access.
- **private** - a visibility keyword which is used to control the classes that have access.  The keyword private means that only the code in the current class has direct access.  



Vocabulary Practice
---------------------------

.. dragndrop:: ch2_vocab1
    :feedback: Review the summaries above.
    :match_1: does the actual work in an object-oriented program.|||object 
    :match_2: defines a type|||class
    :match_3: A programming language that you can use to tell a computer what to do.|||Java
    :match_4: Translates a Java source file (ends in .java) into a Java class file (ends in .class)|||compiler
    
    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct
    
.. dragndrop:: ch2_vocab2
    :feedback: Review the summaries above.
    :match_1: initializes the fields of an object after it has been created|||constructor
    :match_2: defines behavior|||method
    :match_3: holds data or a property|||field
    :match_4: where execution starts|||main method
    
    Drag the definition from the left and drop it on the correct concept on the right.  Click the "Check Me" button to see if you are correct.
    
.. |Quizlet| raw:: html

   <a href="https://quizlet.com/434080544/cs-awesome-unit-5-vocabulary-flash-cards/" target="_blank" style="text-decoration:underline">Quizlet</a>


For more practice, see this |Quizlet|.
Common Mistakes
----------------

- Forgetting to declare an object to call its methods.
- Forgetting to write get/set methods for private instance variables.
- Forgetting to write a constructor.
- Mismatch in name, number, type, order of arguments and return type between the  method definition and the method call.
- Forgetting data types for every argument in the method definition.
- Forgetting to use what the method returns.
