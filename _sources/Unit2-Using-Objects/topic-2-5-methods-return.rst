.. qnum::
   :prefix: 2-5-
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
    
..	index::
	single: method
    single: parameter
    single: argument
    single: return
    
.. |runbutton| image:: Figures/run-button.png
    :height: 30px
    :align: top
    :alt: run button

.. |repl link| raw:: html

   <a href="https://repl.it/@BerylHoffman/Java-Swing-Turtle" target="_blank" style="text-decoration:underline">repl.it link</a>

.. |github| raw:: html

   <a href="https://github.com/bhoffman0/APCSA-2019/tree/master/_sources/Unit2-Using-Objects/TurtleJavaSwingCode.zip" target="_blank" style="text-decoration:underline">here</a>
   
Calling Methods that Return Values
===================================

Some methods return a value back that the program can use. In the previous lesson, you may have used some set methods with parameters to set the attributes of a turtle to different values, for example yertle.setColor(Color.red); or yertle.setWidth(50); Programmers create get and set methods for each attribute represented as an instance variable in a class to access and modify the value in that variable. The get methods always return back the value of that instance variable, and the set methods modify the value. 


Here are some examples of using get methods for the turtle object yertle. When you use a get method, you need to save what it returns in a variable or use the value in some way for example by printing it out. The data type of the variable must match the data type of the return value of the method. You can find out the return type of a method in its documentation. It will be right before the method name, for example *int getWidth()*. 

If a method is a **void method** and has **void** as its return type, like most of the methods we have seen so far, that means that it does not return anything and it can be called on its own. But methods with return types need to be called in an assignment statement or a print statement or a similar expression to use what it returns.


.. code-block:: java 

    Turtle yertle = new Turtle(world);
    int width = yertle.getWidth();
    int height = yertle.getHeight();
    System.out.println("Yertle's width is: " + width);
    System.out.println("Yertle's height is: " + height);
    System.out.println("Yertle's x position is: " + yertle.getXPos() );
    System.out.println("Yertle's y position is: " + yertle.getYPos() );
    

.. note::

    A common error is forgetting to do something with the value returned from a method. When you call a method that returns a value, you should do something with that value like saving it into a variable or printing it out.  

|CodingEx| **Coding Exercise:**



.. activecode:: TurtleTestGetSet
    :language: java
    :datafile: turtleClasses.jar

    Try the code below that changes the turtle's width and height. How big or small can you make yertle?

    (If the code below does not work for you, you can also copy in the code below into the Turtle code at this |repl link| (refresh page after forking and if it gets stuck) or download the files |github| to use in your own IDE.)
    ~~~~
    import java.util.*;
    import java.awt.*;
    import java.lang.Math; 
    
    public class TurtleTestGetSet
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);           
          System.out.println("Yertle's width is: " + yertle.getWidth()); 
          yertle.setWidth(200);
          yertle.setHeight(200);
          System.out.println("Yertle's width is: " + yertle.getWidth());
          yertle.turnRight();
          world.show(true); 
      }
    }
    
|CodingEx| **Coding Exercise:**    

.. activecode:: TurtleArea
    :language: java
    :datafile: turtleClasses.jar

    Fix the errors in the code below so that it prints out the area of the space that the turtle occupies by multiplying its width and height. Remember that you have to do something with the values that get methods return.
    ~~~~
    import java.util.*;
    import java.awt.*;
    import java.lang.Math; 
    
    public class TurtleArea
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);
          
          int area;
          yertle.getWidth() * getHeight;
          System.out.println("Yertle's area is: ");
      }
    }
    

Another common method that returns a value is the toString() method which returns a String description of the turtle. This method is called automatically to try to convert an object to a String when it is needed, for example in a print statement. 

.. code-block:: java 

    Turtle yertle = new Turtle(world);
    yertle.setName("yertle"); // set name before you use toString()
    System.out.println(yertle.toString());
    // Or you can just use the object here and it will call toString() automatically!
    System.out.println(yertle);


|CodingEx| **Coding Exercise:**




.. activecode:: TurtleTestMethodsReturn2
    :language: java
    :datafile: turtleClasses.jar

    Try some of the get methods and the toString() method in the program below. Note that you have to print out what the get methods return in order to see what they do!
    ~~~~
    import java.util.*;
    import java.awt.*;
    import java.lang.Math; 
    
    public class TurtleTestMethods2
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);
           
          // Try some get methods here!
         
         
          
          world.show(true); 
      }
    }


Methods that take arguments and return values are like mathematical functions. Given some input, they return a value. For example, a square(x) method would take an argument x and return its square by multiplying it by itself.

.. figure:: Figures/function.png
    :width: 400px
    :align: center
    :alt: function
    :figclass: align-center

    Figure 1: Method that takes arguments and returns a value

You will not write your own methods until Unit 5, but you should be able to trace through method calls like below. Notice that the **return statement** in a method returns the value that is indicated in the return type back to the calling method. The calling method must save or use or print that value.

|Exercise| **Check your understanding**

.. mchoice:: traceReturnMethods
   :practice: T
   :answer_a: 5
   :answer_b: 7
   :answer_c: 4 3
   :answer_d: 2 3
   :answer_e: Does not compile.
   :correct: b
   :feedback_a: Make sure you call both methods and compute the square of 2 and then add the results.
   :feedback_b: Yes, square(2) returns 4 which is added to divide(6,2) which returns 3. The total of 4 + 3 is 7.
   :feedback_c: Make sure you add the results before printing it out.
   :feedback_d: Make sure you square(2) and add the results before printint it out.
   :feedback_e: Try the code in an active code window.
   
   What does the following code print out?
   
   .. code-block:: java
   
      public class MethodTrace 
      {
        public int square(int x)
        {
            return x*x;
        }
        public int divide(int x, int y)
        {
              return x/y;
        }
        public static void main(String[] args) {
            MethodTrace traceObj = new MethodTrace();
            System.out.println( traceObj.square(2) + traceObj.divide(6,2) );
        }
       }


.. |visualization| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public%20class%20MethodTrace%20%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20public%20int%20square%28int%20x%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20x*x%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20public%20int%20divide%28int%20x,%20int%20y%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20x/y%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20MethodTrace%20traceObj%20%3D%20new%20MethodTrace%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20System.out.println%28%20traceObj.square%282%29%20%2B%20traceObj.divide%286,2%29%20%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%7D&cumulative=false&curInstr=16&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false" target="_blank" style="text-decoration:underline">visualization</a>

Try this |visualization| to see this code in action.
      
|Groupwork| Programming Challenge : Turtle Distances
----------------------------------------------------

1. The Turtle class has a method called getDistance(x,y) which will return the turtle's distance from a point (x,y). Can you find yertle's distance from the point (0,0)? 

2. Add another turtle and make both turtles move. Then find the distance between them. You must use the getXPos() and getYPos() methods as well as the getDistance() method.

.. activecode:: challenge2-5-TurtleDistance
    :language: java
    :datafile: turtleClasses.jar

    import java.util.*;
    import java.awt.*;
    import java.lang.Math; 
    
    public class TurtleTestDistance
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          Turtle yertle = new Turtle(world);
           
          // Can you find yertle's distance from the point (0,0)? 
          
          // Can you find the distance between 2 turtles?
         
         
          
          world.show(true); 
      }
    }


Summary
-------------------

- Some methods return values.
- To use the return value when calling a method, it must be stored in a variable or used as part of an expression. The variable data type must match the return type of the method.

AP Practice
-------------

.. mchoice:: AP2-5-1
    :practice: T
    
    Consider the following method.

    .. code-block:: java

        public double calculatePizzaBoxes(int numOfPeople, double slicesPerBox)
        { /*implementation not shown */}

    Which of the following lines of code, if located in a method in the same class as calculatePizzaBoxes, will compile without an error?
    
    - int result = calculatePizzaBoxes(45, 9.0);

      - The method calculatePizzaBoxes returns a double value that cannot be saved into an int variable.
      
    - double result = calculatePizzaBoxes(45.0, 9.0);
    
      - The method calculatePizzaBoxes has an int parameter that cannot hold a double value 45.0.

    - int result = calculatePizzaBoxes(45.0, 9);
    
      - The method calculatePizzaBoxes has an int parameter that cannot hold a double value 45.0. Note that the int 9 can be passed into a double parameter.
      
    - double result = calculatePizzaBoxes(45, 9.0);
    
      + The method calculatePizzaBoxes has an int and a double parameter and returns a double result.
      
    - result = calculatePizzaBoxes(45, 9);
    
      - The variable result has not been declared (with an appropriate data type). 
      
.. mchoice:: AP2-5-2
    :practice: T

    Consider the following class definition.

    .. code-block:: java

        public class Liquid
        {
            private double boilingPoint;
            private double freezingPoint;
            private double currentTemp;

            public Liquid()
            {
                currentTemp = 50;
            }

            public void lowerTemp()
            {
                currentTemp -= 10;
            }

            public double getTemp()
            {
                return currentTemp;
            }
        }

    Assume that the following code segment appears in a class other than Liquid.
    
    .. code-block:: java

        Liquid water = new Liquid();
        water.lowerTemp();
        System.out.println(water.getTemp());

    What is printed as a result of executing the code segment?
    
    - \-10
    
      - The Liquid() constructor sets the currentTemp instance variable to 50 and the lowerTemp() method subtracts 10 from it. 
    
    - 50
    
      - The Liquid() constructor sets the currentTemp instance variable to 50 and the lowerTemp() method subtracts 10 from it. 
    
    - water.getTemp()
    
      - The System.out.println will print the value returned from water.getTemp().
        
    - The code will not compile.
    
      - This code should compile.

    - 40.0
    
      + Correct, the Liquid() constructor sets the currentTemp instance variable to 50 and the lowerTemp() method subtracts 10 from it, and getTemp() returns the currentTemp value as a double.
