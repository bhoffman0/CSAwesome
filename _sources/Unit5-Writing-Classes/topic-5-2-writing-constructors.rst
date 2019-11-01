.. qnum::
   :prefix: 5-2-
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

Writing Constructors
====================

..	index::
	pair: class; constructor
	
In Unit 2, we learned how to create objects using constructor. Objects are created in programs by declaring a variable of the class and using the keyword new followed by a call to a constructor. **Constructors**  set the initial values for the object's instance variables.    For example, here is how we create World, Turtle, and Person objects.  

.. code-block:: java 

    // To create a new object, write:
    // ClassName variableName = new ConstructorName(arguments);
    World world = new World();
    Turtle t = new Turtle(world);
    Person p = new Person("Pat","pat@gmail.com","123-456-7890");
    
 
Constructors don't actually construct the objects.  The class makes the object when you declare the object variable and then the constructor initializes the values of the instance variables.  

In a new class, constructors are usually written after the instance variables and before any methods.    They typically start with ``public`` and then the *name* of the class: ``public ClassName()``. Unlike other methods, they do not have a return type, not even void, after the access modifier public.  They can take **parameters** (specified in parentheses) for the data which is used to initialize the instance variables. 

.. code-block:: java 

   public class ClassName
   {

      /* Instance Variable Declarations -- not shown */

      /* Constructor - same name as Class, no return type */
      public ClassName()
      {
        /* Implementation not shown */
      }
   }
    
.. note::

   Constructors must have the same name as the class! Constructors have no return type!
   
Classes usually have more than one constructor. There are usually at least 2 constructors:

- a constructor that takes no parameters  
- a constructor that takes all the parameters necessary for initializing all the instance variables 

The attributes of an object and their values at a given time define that object's state. The constructors initialize the object's state by assigning initial values to the instance variables that the object has as its attributes. 

Here are two constructors that could be written for the Person class. Notice that the first one initializes name, email, and phoneNumber to empty string "" as the default values. Most programmers use "" as the default value for String variables and 0 as the default value for int and double variables.

.. code-block:: java 

     // default constructor: initialize instance vars to default empty strings
     public Person()
     {
        name = "";
        email = "";
        phoneNumber = "";
     }

     // constructor: initialize all 3 instance variables to parameters
     public Person(String initName, String initEmail, String initPhone)
     {
        name = initName;
        email = initEmail;
        phoneNumber = initPhone;
     }

If there are no constructors written for a class, Java provides a no-argument **default constructor** where the instance variables are set to their default values. For int and double variables, the default value used is **0**, and for String and other object variables, the default is **null**. However, if you do write at least one constructor, Java will not generate the default constructor for you, so you should write at least a constructor with no parameters and one with many parameters.
 
   
|Exercise| **Check Your Understanding** 

     
.. clickablearea:: name_constructor
    :question: Click on all the lines of code that are part of constructors in the following class.
    :iscode:
    :feedback: Constructors are public and have the same name as the class.  

    :click-incorrect:public class Name {:endclick:
    
        :click-incorrect:private String first;:endclick:
        :click-incorrect:private String last;:endclick:
        
        :click-correct:public Name(String theFirst, String theLast) {:endclick:
            :click-correct:first = theFirst;:endclick:
            :click-correct:last = theLast;:endclick:
         :click-correct:}:endclick:
         
         :click-incorrect:public void setFirst(String theFirst) {:endclick:
            :click-incorrect:first = theFirst;:endclick:
         :click-incorrect:}:endclick:
         
         :click-incorrect:public void setLast(String theLast) {:endclick:
            :click-incorrect:last = theLast;:endclick:
         :click-incorrect:}:endclick:
         
    :click-incorrect:}:endclick:  
    
.. mchoice:: qsse_5
   :practice: T
   :answer_a: Determines the amount of space needed for an object and creates the object
   :answer_b: Names the new object
   :answer_c: Return to free storage all the memory used by this instance of the class.
   :answer_d: Initialize the instance variables in the object
   :correct: d
   :feedback_a: The object is already created before the constructor is called but the constructor initializes the instance variables.
   :feedback_b: Constructors do not name the object.  
   :feedback_c: Constructors do not free any memory. In Java the freeing of memory is done when the object is no longer referenced.
   :feedback_d: A constructor  initializes the instance variables to their default values or in the case of a parameterized constructor, to the values passed in to the constructor.
   
   What best describes the purpose of a class's constructor?
   

|CodingEx| **Coding Exercise**

The following class defines a Fraction with the instance variables numerator and denominator. It uses 2 constructors. Note that this constructor sets the default instance variable values to 1 rather than 0 -- so we don't end up with divide by zero. Try to guess what it will print before you run it.  Hint!  Remember to start with the main method! You can also view it in the |Java visualizer|.

.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=%20%20public%20class%20Fraction%0A%20%20%7B%0A%20%20%20%20%20//%20%20instance%20variables%0A%20%20%20%20%20private%20int%20numerator%3B%0A%20%20%20%20%20private%20int%20denominator%3B%0A%20%20%20%20%20%0A%20%20%20%20%20//%20constructor%3A%20set%20instance%20variables%20to%20default%20values%0A%20%20%20%20%20public%20Fraction%28%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20numerator%20%3D%201%3B%0A%20%20%20%20%20%20%20%20denominator%20%3D%201%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20constructor%3A%20set%20instance%20variables%20to%20init%20parameters%0A%20%20%20%20%20public%20Fraction%28int%20initNumerator,%20int%20initDenominator%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20numerator%20%3D%20initNumerator%3B%0A%20%20%20%20%20%20%20%20denominator%20%3D%20initDenominator%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20Print%20fraction%0A%20%20%20%20%20public%20void%20print%28%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20System.out.println%28numerator%20%2B%20%22/%22%20%2B%20denominator%29%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20main%20method%20for%20testing%0A%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20Fraction%20f1%20%3D%20new%20Fraction%28%29%3B%0A%20%20%20%20%20%20%20%20Fraction%20f2%20%3D%20new%20Fraction%281,2%29%3B%0A%20%20%20%20%20%20%20%20//%20What%20will%20these%20print%20out%3F%0A%20%20%20%20%20%20%20%20f1.print%28%29%3B%0A%20%20%20%20%20%20%20%20f2.print%28%29%3B%0A%20%20%20%20%20%7D%0A%20%20%7D&cumulative=false&curInstr=28&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>

.. activecode:: class-Fraction
  :language: java

  public class Fraction
  {
     //  instance variables
     private int numerator;
     private int denominator;
     
     // constructor: set instance variables to default values
     public Fraction()
     {
        numerator = 1;
        denominator = 1;
     }
     
     // constructor: set instance variables to init parameters
     public Fraction(int initNumerator, int initDenominator)
     {
        numerator = initNumerator;
        denominator = initDenominator;
     }
     
     // Print fraction
     public void print()
     {
       System.out.println(numerator + "/" + denominator);
     }
     
     // main method for testing
     public static void main(String[] args)
     {
        Fraction f1 = new Fraction();
        Fraction f2 = new Fraction(1,2);
        // What will these print out?
        f1.print();
        f2.print();
     }
  }
  
|CodingEx| **Coding Exercise**

The following class defines a Car with the instance variables model and year, for example a Honda 2010 car. However, some of the code is missing. Fill in the code for the 2 constructors that are numbered 1 and 2. And fill in the code to call the constructors in the main method numbered 3. The car1 object should test the first constructor with default values and the car2 object should test the second constructor to create a Honda 2010 car. Run your program and make sure it works and prints out the information for both cars.

.. activecode:: class-Car
  :language: java

  public class Car
  {
     //  instance variables
     private String model;
     private int year;
     
     // constructor: set instance variables to default values
     public Car()
     {
        // 1. set the instance variables to default values "" and 2019
        
     
     }
     
     // constructor: set instance variables to init parameters
     public Car(String initModel, int initYear)
     {
        // 2. set the instance variables to the init parameter variables
     
     
     }
     
     // Print Car info
     public void print()
     {
       System.out.println("Car model: " + model);
       System.out.println("Car year: " + year);
     }
     
     // main method for testing
     public static void main(String[] args)
     {
        // 3. call the constructor to create 2 new Car objects using the 2 constructors. car1 will be the default values. car2 should be a Honda 2010 car.
        Car car1 = 
        Car car2 = 
        
        car1.print();
        car2.print();
     }
  }

Constructors are used to set the initial state of an object by initializing its instance variables. The examples above have instance variables that are primitive types, but you can have other objects, reference types, as instance variables. For example, a Person class could have an Address object as an instance variable, and the Address class could have String instance variables for the street, city, and state. 

(Advanced Topic Warning) When you pass object references as parameters to constructors or methods, they become aliases for the original object and can change it. If a constructor has an object instance variable, it can copy   the referenced object in the parameter using new and the constructor of the referenced object like below so that it does not change the state of the original object. You will see more examples like this in later lessons.

.. code-block:: java 

     public class Person {
       private String name;
       private Address addr; //Assumes an Address class is already defined
       
     // constructor: initialize instance variable and call Address constructor to make a copy
     public Person(String initName, Address initAddr)
     {
        name = initName;
        addr = new Address(initAddr.getStreet(), initAddr.getCity(), initAddr.getState());
     }
     

|Groupwork| Programming Challenge : Student Class
--------------------------------------------------

We encourage you to work in pairs for this challenge to create a Student class with constructors.

1. First, brainstorm in pairs to do the **Object-Oriented Design** for a Student class. What data should we store about Students? Come up with at least 4 different instance variables. What are the data types for the instance variables? 

2. Write a Student class below that has your 4 instance variables and write at least 3 different constructors: one that has no parameters and initializes the instance variables to default values, one that has 4 parameters to set the instance variables, and one that has 1 parameter for the most important instance variable and uses defaults for the others. 

3. Add a print() method that uses System.out.println to print out all the instance variables.

4. Add a main method that constructs at least 3 Student objects using the 3 different constructors and then calls their print() methods. 

.. activecode:: challenge-5-2-Student-class
  :language: java

  /** class Student 
   * with 4 instance variables,
   * 3 constructors, a print method, 
   * and a main method to test them.
   * (drag the triangle at the bottom of this window 
  */ to enlarge the window.)
  
  
Summary
--------


- **Constructors** are used to set the initial state of an object, which includes initial values for all instance variables.

- When no constructor is written, Java provides a no-argument **default constructor**, and the instance variables are set to their default values (0 for int and double, null for objects like String).

- Constructor parameters are local variables to the constructor and provide data to initialize instance variables.



AP Practice
------------



.. mchoice:: AP5-2-1
    :practice: T

    Consider the definition of the Cat class below. The class uses the instance variable isSenior to indicate whether a cat is old enough to be considered a senior cat or not.
        
    .. code-block:: java

        public class Cat
        {
            private String name;
            private int age;
            private boolean isSenior;
            public Cat(String n, int a)
            {
                name = n;
                age = a;
                if (age >= 10)
                {
                    isSenior = true;
                }
                else
                {
                    isSenior = false;
                }
            }
        }

        Which of the following statements will create a Cat object that represents a cat that is considered a senior cat?
    
    - Cat c = new Cat ("Oliver", 7);

      - The age 7 is less than 10, so this cat would not be considered a senior cat.
      
    - Cat c = new Cat ("Max", "15");

      - An integer should be passed in as the second parameter, not a string.
      
    - Cat c = new Cat ("Spots", true);

      - An integer should be passed in as the second parameter, not a boolean.
      
    - Cat c = new Cat ("Whiskers", 10);

      + Correct!
        
    - Cat c = new Cat ("Bella", isSenior);

      - An integer should be passed in as the second parameter and isSenior would be undefined outside of the class.




.. mchoice:: AP5-2-2
   :practice: T
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and III only
   :answer_e: I, II and III
   :correct: d
   :feedback_a: Option III can also create a correct Cat instance.
   :feedback_b: Option II will create a cat that is 0 years old with 5 kittens.
   :feedback_c: Option I can also create a correct Cat instance.
   :feedback_d: Good job!
   :feedback_e: Option II will create a cat that is 0 years old with 5 kittens.

   Consider the following class definition. Each object of the class Cat will store the cat’s name as name, the cat’s age as age, and the number of kittens the cat has as kittens. Which of the following code segments, found in a class other than Cat, can be used to create a cat that is 5 years old with no kittens?
   
   .. code-block:: java

    public class Cat
    {
        private String name;
        private int age;
        private int kittens;

        public Cat(String n, int a, int k)
        {
            name = n;
            age = a;
            kittens = k;
        }
        public Cat(String n, age a)
        {
            name = n;
            age = a;
            kittens = 0;
        }
        /* Other methods not shown */
    }

    I.   Cat c = new Cat("Sprinkles", 5, 0);
    II.  Cat c = new Cat("Lucy", 0, 5);
    III. Cat c = new Cat("Luna", 5);
    
.. mchoice:: AP5-2-3
    :practice: T

    Consider the following class definition.
        
    .. code-block:: java

        public class Cat
        {
            private String color;
            private boolean isHungry;
            /* missing constructor */
        }

    The following statement appears in a method in a class other than Cat. It is intended to create a new Cat object c with its attributes set to "black" and true.
    
    .. code-block:: java
  
        Cat c = new Cat("black", true);
        
        Which of the following can be used to replace /* missing constructor */ so that the object c is correctly created?
        
    - .. code-block:: java
    
        public Cat(String c, boolean h)
        {
            c = "black";
            h = true;
        }

      - The constructor should be changing the instance variables, not the local variables.

    - .. code-block:: java
    
        public Cat(String c, boolean h)
        {
            c = "black";
            h = "true";
        }

      - The constructor should be changing the instance variables, not the local variables.

    - .. code-block:: java
    
        public Cat(String c, boolean h)
        {
            c = color;
            h = isHungry;
        }

      - The constructor should be changing the instance variables, not the local variables.

    - .. code-block:: java
    
        public Cat(String c, boolean h)
        {
            color = black;
            isHungry = true;
        }

      - The constructor should be using  the local variables to set the instance variables.

    - .. code-block:: java
    
        public Cat(String c, boolean h)
        {
            color = c;
            isHungry = h;
        }

      + Correct!

