.. qnum::
   :prefix: 9-3-
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
    
   
Overriding Methods
======================

A subclass inherits all public methods from its superclass, and these methods remain public in the subclass. But, we also usually add more methods or instance variables to the subclass. Sometimes, we want to modify existing inherited methods. This is called **overriding**  methods. 


**Overriding** an inherited method means providing a public method in a subclass with the same **method signature** (method name, parameter type list and return type) as a public method in the superclass.  The method in the subclass will be called *instead of* the method in the superclass. One common method that is overriden is the toString() method. The example below shows a similar method called greet().  

|CodingEx| **Coding Exercise**

In the following example the ``MeanGreeter`` inherits the ``greet()`` method from ``Greeter``, but then overrides it. Run the program to see. Add another subclass called SpanishGreeter (or another language that you know) that extends Greeter and override the greet() method to return "Hola!" (or hi in another language) instead of "Hi!". Create an object to test it out.

.. activecode:: GreeterEx
   :language: java

   public class Greeter
   {
      public String greet()
      {
         return "Hi";
      }
      
      public static void main(String[] args)
      {
         Greeter g1 = new Greeter();
         System.out.println(g1.greet());
         Greeter g2 = new MeanGreeter();
         System.out.println(g2.greet());
      }
   }
   
   class MeanGreeter extends Greeter
   {
      public String greet()
      {
         return "Go Away";
      }
   }
   
.. note::

    To override an inherited method, the method in the child class must have the same name, parameter list, and return type (or a subclass of the return type) as the parent method. Any method that is called must be defined within its own class or its superclass.

You may see the @Override annotation above a method. This is optional but it provides an extra compiler check that you have matched the method signature exactly.

.. code-block:: java

    @Override
    public String greet()
    {
         return "Go Away";
    }


Overloading Methods
-------------------
Don't get **overriding** a method confused with **overloading** a method!
**Overloading** a method is when several methods have the same name but the parameter types, order, or number are different. So with overriding, the method signatures look identical but they are in different classes, but in overloading, only the method names are identical and they have different parameters.

.. code-block:: java

    // overriding methods
    g2.greet(); // This could be calling an overriden greet method in g2's class
    g1.greet("Sam"); // This calls an overloaded greet method 
    
|CodingEx| **Coding Exercise**

In the example below the ``greet(String who)`` method overloads the ``greet()`` method of ``Greeter``.  Notice that ``MeanGreeter`` inherits this method and it isn't overriden. After running the code, try overriding the greet(String) method in the MeanGreeter class to return "Go away" + the who String. 
   
.. activecode:: GreeterOverride
   :language: java

   public class Greeter
   {
      public String greet()
      {
         return "Hi";
      }
      
      public String greet(String who)
      {
         return "Hello " + who;
      }
      
      public static void main(String[] args)
      {
         Greeter g1 = new Greeter();
         System.out.println(g1.greet("Sam"));
         Greeter g2 = new MeanGreeter();
         System.out.println(g2.greet("Nimish"));
      }
   }
   
   class MeanGreeter extends Greeter
   {
      public String greet()
      {
         return "Go Away";
      }
   }
   
.. note::
   
   To overload a method the method must have the same name, but the parameter list must be different in some way.  It can have a different number of parameters, different types of parameters, and/or a different order for the parameter types.  The return type can also be different.
  
|Exercise| **Check your understanding**

.. mchoice:: qoo_5
   :practice: T
   :answer_a: public void getFood()
   :answer_b: public String getFood(int quantity)
   :answer_c: public String getFood()
   :correct: c
   :feedback_a: The return type must match the parent method return type.
   :feedback_b: The parameter lists must match (must have the same types in the same order).  
   :feedback_c: The return type and parameter lists must match.   
    
    Which of the following declarations in ``Student`` would correctly *override* the ``getFood`` method in ``Person``?
    
    .. code-block:: java 
   
      public class Person 
      {
         private String name = null;
         
         public Person(String theName)
         {
            name = theName;
         }
         
         public String getFood() 
         {
            return "Hamburger";
         }
      }
        
      public class Student extends Person
      {
         private int id;
         private static int nextId = 0;
         
         public Student(String theName)
         {
           super(theName);
           id = nextId;
           nextId++;
         }
         
         public int getId() {return id;}
         
         public void setId (int theId) 
         {
            this.id = theId;
         }
      }
      
You can step through an example of this in the Java Visualizer by clicking on the following link `Override Example <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Person+%0A%7B%0A+++private+String+name+%3D+null%3B%0A+++++++++%0A+++public+Person(String+theName)%0A+++%7B%0A++++++name+%3D+theName%3B%0A+++%7D%0A+++++++++%0A+++public+String+getFood()+%0A+++%7B%0A++++++return+%22Hamburger%22%3B%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++%0A++++++Person+p+%3D+new+Student(%22Jamal%22)%3B%0A++++++System.out.println(p.getFood())%3B%0A+++%7D%0A%7D%0A++++++++%0Aclass+Student+extends+Person%0A%7B%0A+++private+int+id%3B%0A+++private+static+int+nextId+%3D+0%3B%0A+++++++++%0A+++public+Student(String+theName)%0A+++%7B%0A++++++super(theName)%3B%0A++++++id+%3D+nextId%3B%0A++++++nextId%2B%2B%3B%0A+++%7D%0A+++++++++%0A+++public+int+getId()+%7Breturn+id%3B%7D%0A+++++++++%0A+++public+void+setId+(int+theId)+%0A+++%7B%0A++++++this.id+%3D+theId%3B%0A+++%7D%0A+++%0A+++public+String+getFood()+%0A+++%7B%0A++++++return+%22Pizza%22%3B%0A+++%7D%0A%7D&mode=display&curInstr=19>`_.

|Exercise| **Check your understanding**

.. mchoice:: qoo_6
   :practice: T
   :answer_a: public void getFood()
   :answer_b: public String getFood(int quantity)
   :answer_c: public String getFood()
   :correct: b
   :feedback_a: You can not just change the return type to overload a method.  
   :feedback_b: For overloading you must change the parameter list (number, type, or order of parameters).  
   :feedback_c: How is this different from the current declaration for <code>getFood</code>?
    
    Which of the following declarations in ``Person`` would correctly *overload* the ``getFood`` method in ``Person``?
    
    .. code-block:: java 
   
      public class Person 
      {
         private String name = null;
         
         public Person(String theName)
         {
            name = theName;
         }
         
         public String getFood() 
         {
            return "Hamburger";
         }
      }
        
      public class Student extends Person
      {
         private int id;
         private static int nextId = 0;
         
         public Student(String theName)
         {
           super(theName);
           id = nextId;
           nextId++;
         }
         
         public int getId() {return id;}
         public void setId (int theId) 
         {
            this.id = theId;
         }
      }  
      
You can step through an example of this using the Java Visualizer by clicking on the following link `Overload Example <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Person+%0A%7B%0A+++private+String+name+%3D+null%3B%0A+++++++++%0A+++public+Person(String+theName)%0A+++%7B%0A++++++name+%3D+theName%3B%0A+++%7D%0A+++++++++%0A+++public+String+getFood()+%0A+++%7B%0A++++++return+%22Hamburger%22%3B%0A+++%7D%0A+++%0A+++public+String+getFood(boolean+veggieOnly)%0A+++%7B%0A++++++if+(veggieOnly)%0A++++++%7B%0A+++++++++return+%22Grilled+Cheese%22%3B%0A++++++%7D%0A++++++return+getFood()%3B%0A++++++%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++%0A++++++Person+p+%3D+new+Person(%22Jamal%22)%3B%0A++++++System.out.println(p.getFood(true))%3B%0A+++%7D%0A%7D%0A++++++++%0Aclass+Student+extends+Person%0A%7B%0A+++private+int+id%3B%0A+++private+static+int+nextId+%3D+0%3B%0A+++++++++%0A+++public+Student(String+theName)%0A+++%7B%0A++++++super(theName)%3B%0A++++++id+%3D+nextId%3B%0A++++++nextId%2B%2B%3B%0A+++%7D%0A+++++++++%0A+++public+int+getId()+%7Breturn+id%3B%7D%0A+++++++++%0A+++public+void+setId+(int+theId)+%0A+++%7B%0A++++++this.id+%3D+theId%3B%0A+++%7D%0A+++%0A+++public+String+getFood()+%0A+++%7B%0A++++++return+%22Pizza%22%3B%0A+++%7D%0A%7D&mode=display&curInstr=9>`_.

|CodingEx| **Coding Exercise**

What happens if you change the main method in the Java Visualizer to create a new ``Student`` object instead of a ``Person`` object?  Does it still print the same thing?


Inherited Get/Set Methods
---------------------------

..	index::
    pair: inheritance; access to private fields

Inheritance means that an object of the child class automatically includes the object instance variables and methods defined in the parent class.  But, if the inherited instance variables are private, which they should be, the child class can not directly access the them using dot notation.  The child class can use public **accessors** (also called getters or get methods) which are methods that get instance variable values and public **mutators**  (also called modifier methods or setters or set methods) which set their values.  

For example, if a parent has a private instance variables, ``name``, then the parent typically provides a public ``getName`` method and a public ``setName`` method as shown below.  In the ``setName`` method below, the code checks if the passed string is null before it sets it and returns true if the set was successful or false otherwise.  The ``Employee`` class inherits the ``name`` field but must use the public method ``getName`` and ``setName`` to access it.


.. activecode:: InheritedGetSet
  :language: java

  class Person 
  {
     private String name; 
     
     public String getName()
     {	
        return name;
     }
  	
     public boolean setName(String theNewName) 
     {
        if (theNewName != null)
        {
           this.name = theNewName;
           return true;
        }
        return false;
     }
  }
  
  public class Employee extends Person
  {
    
     private static int nextId = 1;
     private int id; 
  	
     public Employee()
     {
        id = nextId;
        nextId++;
     }
    
     public int getId() 
     {
        return id;
     }
     
     public static void main(String[] args)
     {
        Employee emp = new Employee();
        emp.setName("Dina");
        System.out.println(emp.getName());
        System.out.println(emp.getId());
     }
  }
  
|Exercise| **Check your understanding**
  
.. mchoice:: qoo_7
   :practice: T
   :answer_a: currItem.setX(3);
   :answer_b: currItem.setY(2);
   :answer_c: currItem.x = 3;
   :answer_d: currItem.y = 2;
   :correct: c
   :feedback_a: The object currItem is an EnhancedItem object and it will inherit the public setX method from Item.
   :feedback_b: The object currItem is an EnhancedItem object and that class has a public setY method.
   :feedback_c: Even though an EnhancedItem object will have a x field the subclass does not have direct access to a private field.  Use the public setX method instead.
   :feedback_d: All code in the same class has direct access to all object fields.  
    
   Given the following class definitions which of the following would not compile if it was used in place of the missing code in the main method?
      
   .. code-block:: java 
   
      class Item
      {
         private int x;

         public void setX(int theX)
         {
            x = theX;
         }
         // ... other methods not shown
      }
      
      public class EnhancedItem extends Item
      {
         private int y;

         public void setY(int theY)
         {
            y = theY;
         }

         // ... other methods not shown
   
         public static void main(String[] args)
         {
            EnhancedItem currItem = new EnhancedItem();
            // missing code
         }
      }
       
You can step through this code in the Java Visualizer by clicking on the following link `Private Fields Example <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=class+Item%0A%7B%0A+++private+int+x%3B%0A%0A+++public+void+setX(int+theX)%0A+++%7B%0A++++++x+%3D+theX%3B%0A+++%7D%0A+++//+...+other+methods+not+shown%0A%7D%0A%0Apublic+class+EnhancedItem+extends+Item%0A%7B%0A+++private+int+y%3B%0A%0A+++public+void+setY(int+theY)%0A+++%7B%0A++++++y+%3D+theY%3B%0A+++%7D%0A%0A+++//+...+other+methods+not+shown%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++EnhancedItem+currItem+%3D+new+EnhancedItem()%3B%0A++++++currItem.setX(3)%3B%0A++++++//+currItem.setY(2)%3B%0A++++++//+currItem.x+%3D+3%3B%0A++++++//+currItem.y+%3D+2%3B%0A+++%7D%0A+%7D&mode=display&curInstr=10>`_.
       


|Groupwork| Programming Challenge : Pet Sounds 
----------------------------------------------------------
      
.. image:: Figures/animalclinic.png
    :width: 150
    :align: left
    :alt: Pets
    
The following Pet class keeps track of a pet's name and type and has a constructor, get method, and a method called speak() that prints an animal noise.

1. Write a subclass called Dog that inherits from Pet. 
2. Write a Dog constructor that has one argument, the name, and calls the super constructor passing it the name and the animal type "dog". 
3. Override the method speak() in the Dog class to print out a barking sound like "Woof!". (Do not override the get method. This superclass method should work for all subclasses).
4. Uncomment the Dog object in the main method to test it out.
5. Write a similar Cat class that inherits from Pet and has a similar constructor and overrides the method speak() with a "Meow!". Test it out.

.. activecode:: challenge-9-3-Pet-Sounds
   :language: java
   
    public class Pet
    {
       private String name;
       private String type;

       public Pet(String n, String t)
       {
          name = n;
          type = t;
       }
       public String getType(){
         return type;
       }
       public String getName(){
         return name;
       }

       public void speak()
       {
         System.out.println("grr!");
       }
       public static void main(String[] args)
       {
           Pet p = new Pet("Sammy","hamster");
           System.out.println(p.getType());
           p.speak();

          /* Dog d = new Dog("Fido");
           System.out.println(d.getType());
           d.speak();
           Cat c = new Cat("Fluffy");
           System.out.println(c.getType());
           c.speak();
           */
       }
    }
    
    // Complete the Dog class 
    class Dog 
    {
    
    
    }

    // Add a Cat class

  

Summary
---------

- Method **overriding** occurs when a public method in a subclass has the same method signature as a public method in the superclass.

- Any method that is called must be defined within its own class or its superclass.

- A subclass is usually designed to have modified (overridden) or additional methods or instance variables.

- A subclass will inherit all public methods from the superclass (for example all the set and get methods); these methods remain public in the subclass. 

- **Overloading** a method is when several methods have the same name but the parameter types, order, or number are different.