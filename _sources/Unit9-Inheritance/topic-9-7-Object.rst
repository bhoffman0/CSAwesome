.. qnum::
   :prefix: 9-7-
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
    
.. |AP CS A Reference Sheet| raw:: html

   <a href="https://apcentral.collegeboard.org/pdf/ap-computer-science-a-java-quick-reference-0.pdf?course=ap-computer-science-a" target="_blank">AP CS A Java Quick Reference Sheet</a> 
    
Object Superclass
====================

The **Object** class is the superclass of all other classes in Java and a part of the built-in java.lang package. If a parent class isn't specified using the **extends** keyword, the class will inherit from the ``Object`` class.  What does a class inherit from the ``Object`` class?  The |AP CS A Reference Sheet| lists the two main methods that are most used, toString() and equals(Object), from the Object class at the bottom, which are covered in more detail below.

- String toString()
- boolean equals(Object other)



toString() method
-----------------

One commonly overriden Object method is toString(), which is often used to print out the attributes of an object. It is a good idea to write your own toString() method in every class. In a subclass, toString() can call the superclass toString() method using super.toString() and then add on its own attributes. 

|CodingEx| **Coding Exercise**

In the following code, the Person class overrides the Object toString() method and the Student class overrides the Person toString() method. They each add on their attributes. 

.. activecode:: toStringDemo
  :language: java 
  
  After trying the code below, add another subclass called APStudent that extends Student with a new attribute called APscore and override the toString() method to call the superclass method and then add on the APscore. Create an APStudent object in the main method to test it.
  ~~~~
    public class Person
    {
       private String name;
       public Person(String name)
       {
          this.name = name;
       }
       public String toString() 
       {
          return name;
       }   
       public static void main(String[] args)
       {
          Person p = new Person("Sila");
          Student s = new Student("Tully", 1001);
          System.out.println(p); //call Person toString
          System.out.println(s);  //call Student toString
       }
    }

    class Student extends Person
    {
       private int id;
       public Student(String name, int id)
       {
          super(name);
          this.id = id;
       }
       public String toString()
       {
          return super.toString() + " " + id;
       }
    }
      

    
equals Method 
-----------------

One of the important things that gets inherited from the Object superclass is the ``equals(Object obj)`` method.  This method is used to test if the current object and the passed object called ``obj`` are equal. But what does that mean?

..	index::
    single: override
    single: equals

As seen in the code below, the ``equals`` method that is inherited from the ``Object`` class only returns true if the two objects references refer to the same object.  

|CodingEx| **Coding Exercise**



.. activecode:: ObjEquals
   :language: java

   Try to guess what this code will print out before running it.
   ~~~~
   public class Person
   {
      private String name;
      
      public Person(String theName)
      {
         this.name = theName;
      }
      
      public static void main(String[] args)
      {
         Person p1 = new Person("Kairen");
         Person p2 = new Person("Jewel");
         Person p3 = new Person("Kairen");
         Person p4 = p3;
         System.out.println(p1.equals(p2));
         System.out.println(p2.equals(p3));
         System.out.println(p1.equals(p3));
         System.out.println(p3.equals(p4));
         
      }
   }
   
The ``equals`` method inherited from the ``Object`` class only returns true when the two references point to the same object as shown in the code above and figure 1 below.

.. figure:: Figures/equalsEx.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 1: A picture from the Java Visualizer showing that only p3 and p4 refer to the same object.
    
Overriding the equals Method
-----------------------------
   
If you want to change how the inherited ``equals`` method works you can **override** it so that the new method is called instead of the inherited one.  The ``String`` class **overrides** the inherited equals method to return true when the two objects have the same characters in the same order as shown in the code below.  

|CodingEx| **Coding Exercise**


.. activecode:: StringTest1
   :language: java

   Try to guess what this code will print out before running it.
   ~~~~
   public class StringTest
   {
      public static void main(String[] args)
      {
         String s1 = "hi";
         String s2 = "Hi";
         String s3 = new String("hi");
         System.out.println(s1.equals(s2));
         System.out.println(s2.equals(s3));
         System.out.println(s1.equals(s3));
      }
   }
   

Any class can override the inherited ``equals`` method by providing a method with the same method signature (method name and parameter list) and return type.  The provided method will be called instead of the inherited one, which is why we say that the new method **overrides** the inherited method.  The ``Person`` class below **overrides** the inherited ``equals`` method.

|CodingEx| **Coding Exercise**


.. activecode:: OverrideEquals
   :language: java

   Try to guess what this code will print out before running it.
   ~~~~
   public class Person
   {
      private String name;
      
      public Person(String theName)
      {
         this.name = theName;
      }
      
      /** Overriden equals method that checks if names are equal
          in this Person object and an the other Object.
          */
      public boolean equals(Object other)
      {
         // Type cast other to a Person
         Person otherPerson = (Person) other;
         // Check if names are equal
         return this.name.equals(otherPerson.name);
      }
      
      public static void main(String[] args)
      {
         Person p1 = new Person("Gabe");
         Person p2 = new Person("Gus");
         Person p3 = new Person("Gabe");
         Person p4 = p3;
         System.out.println(p1.equals(p2));
         System.out.println(p2.equals(p3));
         System.out.println(p1.equals(p3));
         System.out.println(p3.equals(p4));         
      }
   }
   
.. figure:: Figures/overrideEquals.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 2: A picture from the Java Visualizer showing the object references and objects.
   
You can step through this code in the Java Visualizer by clicking on the following link: `OverrideEquals Ex <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Person%0A%7B%0A++++++private+String+name%3B%0A++++++%0A++++++public+Person(String+theName)%0A++++++%7B%0A+++++++++this.name+%3D+theName%3B%0A++++++%7D%0A++++++%0A++++++public+boolean+equals(Object+other)%0A++++++%7B%0A+++++++++Person+otherPerson+%3D+(Person)+other%3B%0A+++++++++return+this.name.equals(otherPerson.name)%3B%0A++++++%7D%0A++++++%0A++++++public+static+void+main(String%5B%5D+args)%0A++++++%7B%0A+++++++++Person+p1+%3D+new+Person(%22Gabe%22)%3B%0A+++++++++Person+p2+%3D+new+Person(%22Gus%22)%3B%0A+++++++++Person+p3+%3D+new+Person(%22Gabe%22)%3B%0A+++++++++Person+p4+%3D+p3%3B%0A+++++++++System.out.println(p1.equals(p2))%3B%0A+++++++++System.out.println(p2.equals(p3))%3B%0A+++++++++System.out.println(p1.equals(p3))%3B%0A+++++++++System.out.println(p3.equals(p4))%3B%0A+++++++++%0A++++++%7D%0A%7D&mode=display&curInstr=23>`_.

To write your own equals method, you must:

1. Use the ``public boolean equals(Object other)`` method signature
2. Type cast other to your Classname
3. Return whether this object's attribute(s) equals the other object's attribute(s) with == for primitive types like int and double, or equals for reference types like String or another class.

.. code-block:: java 
    
    public boolean equals(Object other)
    {
       // Type cast other to your Classname
       Classname otherObj = (Classname) other;
       // Check if attributes are equal
       return (this.attribute == otherObj.attribute); 
       // or this.attribute.equals(otherObj.attribute) if attribute a String
    }

If you need to check multiple attributes, for example a name and an address for Person objects, you can use && to combine tests.

.. code-block:: java 

    return (this.attribute1 == otherObj.attribute1) &&
           this.attribute2.equals(otherObj.attribute2)

If you are writing an equals method for a subclass, you can call the superclass equals using the **super** keyword to check the attributes in the superclass and then check the attributes in the subclass.

.. code-block:: java 

    return super.equals(otherObj) && 
           (this.attribute == otherObj.attribute)
           

|Groupwork| Programming Challenge : Savings Account
---------------------------------------------------

In the following code, a bank account class contains the account holder's name and the money balance in the account. 

Work in pairs to write the following code and test each part before moving on to the next step:

1. Write a toString() method for Account that returns the name and balance with a comma in between.

2. Write an equals method for Account that checks that the name and balance are equal.

3. Write a subclass called SavingsAccount that extends Account and  adds an interest rate variable. 

4. Write a toString() method for SavingsAccount that returns a call to the super toString() method and the interest rate.

5. Write an equals method for SavingsAccount that calls the superclass equals method and checks that the interest rates are equal.


.. activecode:: challenge-9-7-savingsaccount
   :language: java
   
   Complete the subclass SavingsAccount below which inherits from Account and adds an interest rate variable. Write a toSTring and an equals method for it.
   ~~~~
   public class Account 
   {
       private String name;
       private double balance;
   
       public Account(String name, double balance)
       {
          this.name = name;
          this.balance = balance;
       }
       public static void main(String[] args)
       {
           
       }
   }
   
   class SavingsAccount
   {
   
   }
   
   
Summary
---------

- The Object class is the superclass of all other classes in Java and a part of the built-in java.lang package.

- The following Object class methods and constructors, including what they do and when they are used, are part of the Java Quick Reference:

  - String toString()
  - boolean equals(Object other)


- Subclasses of Object often override the equals and toString methods with class-specific implementations.
   
     
