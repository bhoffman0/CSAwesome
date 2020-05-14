.. qnum::
   :prefix: 9-2-
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
    

Inheritance and Constructors
============================

..	index::
    pair: constructor; super

Subclasses inherit all the private instance variables in a superclass that they extend, but they cannot directly access them since they are private. And constructors are not inherited. 

How do you initialize inherited private variables if you don't have direct access to them in the subclass?  In Java you can put a call to the parent constructor using  as the first line in a subclass constructor.   In Java, the superclass constructor can be called from the first line of a subclass constructor by using the keyword super and passing appropriate parameters, for example ``super();`` or ``super(theName);`` as in the code below.
The actual parameters given to super() are used to initialize the inherited instance variables, for example the name instance variable in the Person superclass.

.. code-block:: java

    public class Employee extends Person
    {
        public Employee()
        {
            super(); // calls the Person() constructor
        }
        public Employee(String theName)
        {
            super(theName); // calls Person(theName) constructor
        }
    }
    
|CodingEx| **Coding Exercise**

The ``super(theName)`` in the ``Employee`` constructor will call the constructor that takes a ``String`` object in the ``Person`` class to set the name. 

.. activecode:: InitPrivateInherited
  :language: java

  Try creating another Employee object in the main method that passes in your name and then use the get methods to print it out. Which class constructor sets the name? Which class constructor sets the id?
  ~~~~
  class Person 
  {
     private String name; 
  	
     public Person(String theName)
     {
        this.name = theName;
     }
  	
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
  	
     public Employee(String theName)
     {
        super(theName);
        id = nextId;
        nextId++;
     }
    
     public int getId() 
     {
        return id;
     }
     
     public static void main(String[] args)
     {
        Employee emp = new Employee("Dani");
        System.out.println(emp.getName());
        System.out.println(emp.getId());
     }
  }

  
If a class has no constructor in Java, the compiler will add a no-argument constructor.  A no-argument constructor is one that doesn't have any parameters, for example ``public Person()``.   

If a subclass has no call to a superclass constructor using ``super`` as the first line in a subclass constructor then the compiler will automatically add a ``super()`` call as the first line in a constructor.  So, be sure to provide no-argument constructors in parent classes or be sure to use an explicit call to ``super()`` as the first line in the constructors of subclasses.

Regardless of whether the superclass constructor is called implicitly or explicitly, the process of calling superclass constructors continues until the Object constructor is called since every class inherits from the Object class.

|Exercise| **Check your understanding**

.. .. mchoice:: qoo_8
   :practice: T
   :answer_a: II only
   :answer_b: III only 
   :answer_c: I and II only
   :answer_d: I, II, and III
   :correct: d
   :feedback_a: I is true because Point2D does have a no-arg constructor. II is true because Point2D does have a constructor that takes x and y. III is true because Point2D does have a no-arg constructor which will be called before the first line of code is executed in this constructor. The fields x and y are public in Point2D and thus can be directly accessed by all classes.
   :feedback_b: Point2D does have a constructor that takes an x and y value so this is okay. Also the call to super is the first line of code in the child constructor as required. However, both I and III are okay as well. 
   :feedback_c: The x and y values in Point2D are public and so can be directly accessed by all classes including subclasses. Also there is a no-arg constructor in Point2D so the super no-arg constructor will be called before the first line of code in this constructor.
   :feedback_d: I is true because Point2D does have a no-arg constructor. II is true because Point2D does have a constructor that takes x and y. III is true because Point2D does have a no-arg constructor which will be called before the first line of code is executed in this constructor. The fields x and y are public in Point2D and thus can be directly accessed by all classes.
    
   Given the class definitions of Point2D and Point3D below, which of the constructors that follow (labeled I, II, and III) would be valid in the Point3D class?

   .. code-block:: java 
   
      class Point2D {
         public int x;
         public int y;

         public Point2D() {}

         public Point2D(int x,int y) {
           this.x = x;
           this.y = y;
         }
         // other methods
      }

      public class Point3D extends Point2D
      {
         public int z;
   
         // other code
      }
      
      // possible constructors for Point3D
      I.  public Point3D() {}
      II. public Point3D(int x, int y, int z) 
          {
             super(x,y);
             this.z = z;
          }
      III. public Point3D(int x, int y)
           {
              this.x = x;
              this.y = y;
              this.z = 0;
           }
           
.. You can step through this code in the Java Visualizer by clicking on the following link `Constructor Test1 <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=class+Point2D+%7B%0A+++%0A+++public+int+x%3B%0A+++public+int+y%3B%0A%0A+++public+Point2D()+%7B%7D%0A%0A+++public+Point2D(int+x,int+y)+%7B%0A++++++this.x+%3D+x%3B%0A++++++this.y+%3D+y%3B%0A+++%7D%0A+++%0A+++%0A++++++++%0A++++++++%0A+++++%0A%7D%0A%0Apublic+class+Point3D+extends+Point2D%0A%7B%0A+++public+int+z%3B%0A+++%0A+++//+I.%0A+++public+Point3D()+%7B%7D%3B%0A+++%0A+++//+II.%0A+++//public+Point3D(int+x,+int+y,+int+z)%0A+++//%7B%0A+++//++++super(x,y)%3B%0A+++//++++this.z+%3D+z%3B%0A+++//%7D%0A+++%0A+++//+III.%0A+++//public+Point3D(int+x,+int+y)%0A+++//%7B%0A+++//++++this.x+%3D+x%3B%0A+++//++++this.y+%3D+y%3B%0A+++//++++this.z+%3D+0%3B%0A+++//%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++Point3D+p3+%3D+new+Point3D()%3B%0A++++++//Point3D+p3+%3D+new+Point3D(3,+5,+8)%3B%0A++++++//Point3D+p3+%3D+new+Point3D(2,+4)%3B%0A+++%7D%0A+++%0A%7D&mode=display&curInstr=0>`_.



.. mchoice:: qoo_9
   :practice: T
   :answer_a: I only
   :answer_b: I and III
   :answer_c: II only 
   :answer_d: III only
   :correct: b
   :feedback_a: I is okay but III is also okay.
   :feedback_b: NamedPoint will inherit from MPoint all fields but the fields are private and they can not be directly accessed in NamedPoint. You can use super as the first line in a constructor to initialize inherited fields. You can also set your own fields in a constructor. If you don't use super as the first line in a constructor one will be put there by the compiler that will call the parent's no argument constructor.
   :feedback_c: II is invalid. Children inherit all of the fields from a parent but do not have direct access to private fields. You can use super in a constructor to initialize inherited fields by calling the parent's constructor with the same parameter list.
   :feedback_d: I is also okay
    
   Given the class definitions of MPoint and NamedPoint below, which of the constructors that follow (labeled I, II, and III) would be valid in the NamedPoint class?

   .. code-block:: java 
   
      
      class MPoint
      {
         private int myX; // coordinates
         private int myY;

         public MPoint( )
         {
            myX = 0;
            myY = 0;
         }

         public MPoint(int a, int b)
         {
            myX = a;
            myY = b;
         }

         // ... other methods not shown

      }
      
      public class NamedPoint extends MPoint
      {
         private String myName;
         // constructors go here
         // ... other methods not shown
      }
      
      //  Proposed constructors for this class:
      I.   public NamedPoint()
           {
              myName = "";
           }
      II.  public NamedPoint(int d1, int d2, String name)
           {
              myX = d1;
              myY = d2;
              myName = name;
           }
      III. public NamedPoint(int d1, int d2, String name)
           {
              super(d1, d2);
              myName = name;
           }

You can step through this code using the Java Visualizer by clicking the following link `Named Point <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=class+MPoint%0A%7B%0A+++private+int+myX%3B+//+coordinates%0A+++private+int+myY%3B%0A%0A+++public+MPoint(+)%0A+++%7B%0A++++++myX+%3D+0%3B%0A++++++myY+%3D+0%3B%0A+++%7D%0A%0A+++public+MPoint(int+a,+int+b)%0A+++%7B%0A++++++myX+%3D+a%3B%0A++++++myY+%3D+b%3B%0A+++%7D%0A%0A+++//+...+other+methods+not+shown%0A%0A%7D%0A++++++%0Apublic+class+NamedPoint+extends+MPoint%0A%7B%0A+++private+String+myName%3B%0A+++%0A+++//+constructors+go+here%0A+++//+I.%0A+++public+NamedPoint()%0A+++%7B%0A++++++myName+%3D+%22%22%3B%0A+++%7D%0A+++%0A+++//+II.%0A+++//+public+NamedPoint(int+d1,+int+d2,+String+name)%0A+++//+%7B%0A+++//++++myX+%3D+d1%3B%0A+++//++++myY+%3D+d2%3B%0A+++//++++myName+%3D+name%3B%0A+++//+%7D%0A+++%0A+++//+III.%0A+++//+public+NamedPoint(int+d1,+int+d2,+String+name)%0A+++//+%7B%0A+++//++++super(d1,+d2)%3B%0A+++//++++myName+%3D+name%3B%0A+++//+%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++NamedPoint+nPt+%3D+new+NamedPoint()%3B%0A++++++//+NamedPoint+nPt+%3D+new+NamedPoint(3,+2,+%22home%22)%3B%0A++++++//+NamedPoint+nPt+%3D+new+NamedPoint(5,+4,+%22work%22)%3B%0A+++%7D%0A%0A%7D&mode=display&curInstr=0>`_.
       

|Groupwork| Programming Challenge : Square is-a Rectangle 
----------------------------------------------------------

In this challenge, you are giving a class called Rectangle that has two instance variables, length and width, and two constructors that initialize them, and a method called draw() that uses nested loops to draw a length x width rectangle of stars. Try it out below.

You will write a new class called Square that inherits from Rectangle. Is a square a rectangle? Yes! A square is a rectangle where the length and width are equal. Square will inherit length, width, and the draw method. You will write square constructors that will call the Rectangle constructors. 

1. Make the class Square below inherit from Rectangle
2. Add a Square no-argument constructor that calls Rectangle's constructor using super().
3. Add a Square constructor with 1 argument for a side that calls Rectangle's constructor with 2 arguments using super.
4. Uncomment the objects in the main method to test drawing the squares.
5. Add an area() method to Rectangle that computes the area of the rectangle. Does it work for squares too? Test it.
6. Add another subclass called LongRectangle which inherits from Rectangle but has the additional condition that the length is always 2 x the width. Write constructors for it and test it out. 
       
.. activecode:: challenge-9-2-Square-Rectangle
  :language: java

  Create a Square class that inherits from Rectangle.
  ~~~~
  class Rectangle 
  {
      private int length;
      private int width;

      public Rectangle()
      {  
         length = 1;
         width = 1;
      }

      public Rectangle(int l, int w) 
      {
         length = l;
         width = w;
      }

      public void draw() 
      {
        for(int i=0; i < length; i++)
        {
           for(int j=0; j < width; j++)
               System.out.print("* ");
            System.out.println();
        }
        System.out.println();
      }

  }

  // 1. Make the class square inherit from Rectangle
  public class Square 
  {
       // 2. Add a Square no-argument constructor
       
       // 3. Add a Square constructor with 1 argument for a side

       public static void main(String[] args)
       {
          Rectangle r = new Rectangle(3,5);
          r.draw();
          // 4. Uncomment these to test
          // Square s1 = new Square();
          // s1.draw();
          // Square s = new Square(3);
          // s.draw();
       }
  }

.. |repl.it Java Swing code| raw:: html

   <a href="https://repl.it/@BerylHoffman/Shapes" style="text-decoration:underline" target="_blank">repl.it Java Swing code</a>
   
.. |files here| raw:: html

   <a href="https://www.dropbox.com/s/2lmkd1m2sfh3xqc/ShapeExample.zip" target="_blank" style="text-decoration:underline">files here</a>  
   
For a more complex example of drawing shapes, try running this |repl.it Java Swing code| (or download the |files here| by clicking on Download on the top right and use the files in your own Java IDE). When the yellow panel comes up, click on either the Rectangle or the Oval button and then click and drag somewhere on the yellow panel to draw that shape. Take a look at the Rectangle.java and Oval.java files to see how they inherit from the Shape class in Shape.java. Java Swing graphical programming is not covered on the AP CS A exam, but it is a lot of fun! 

Summary
---------

- Subclasses inherit all the private instance variables in a superclass that they extend, but they cannot directly access them since they are private.

- Constructors are not inherited.

- The superclass constructor can be called from the first line of a subclass constructor by using the keyword super and passing appropriate parameters to set the private instance variables of the superclass.

- The actual parameters passed in the call to the superclass constructor provide values that the constructor can use to initialize the object’s instance variables.

- When a subclass’s constructor does not explicitly call a superclass’s constructor using super, Java inserts a call to the superclass’s no-argument constructor.

- Regardless of whether the superclass constructor is called implicitly or explicitly, the process of calling superclass constructors continues until the Object constructor is called. At this point, all of the constructors within the hierarchy execute beginning with the Object constructor.