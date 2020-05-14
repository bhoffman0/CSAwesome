.. qnum::
   :prefix: 5-3-
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
    
    
Comments and Conditions
=======================

Comments
---------

Adding comments to your code helps to make it more readable and maintainable. In the commercial world, software development is usually a team effort where many programmers will use your code and maintain it for years. Commenting is essential in this kind of environment and a good habit to develop. Comments will also help you to remember what you were doing when you look back to your code a month or a year from now.

There are 3 types of comments in Java:

1. ``//`` Single line comment
2. ``/*`` Multiline comment ``*/``
3. ``/**`` Documentation comment ``*/``

.. |Java JDK| raw:: html

   <a href="https://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank">Java JDK</a>

.. |javadoc| raw:: html

   <a href="https://www.tutorialspoint.com/java/java_documentation.htm" target="_blank">javadoc</a>

.. |String class| raw:: html

   <a href="http://docs.oracle.com/javase/7/docs/api/java/lang/String.html" target="_blank">String class</a>
   
The special characters ``//`` are used to mark the rest of the line as a comment in many programming languages.  If the comment is going to be multiple lines, we use ``/*`` to start the comment and ``*/`` to end the comment. 

There is also a special version of the multi-line comment, ``/**``  ``*/``, called the documentation comment. Java has a cool tool called |javadoc| that comes with the |Java JDK| that will pull out all of these comments to make documentation of a class as a web page.  This tool generates the official Java documentation too, for example for the |String class|. Although you do not have to use this in the AP exam, it's a good idea to use the documentation comment in front of classes, methods, and instance variables in case you want ot use this tool. 

|Exercise| **Check your understanding**

.. dragndrop:: comments
    :feedback: Review the section above.
    :match_1: single-line comment|||//
    :match_2: multi-line comment|||/* */
    :match_3: Java documentation comment|||/** */
    
    Drag the definition from the left and drop it on the correct symbols on the right.  Click the "Check Me" button to see if you are correct.
    

The compiler will skip over comments, and they don't affect how your program runs. They are for you, your teacher, and other programmers working with you.  Here are some examples of good commenting:

.. code-block:: java 

    /**
    * MyClass.java
    * @author My Name
    * @since Date 
    * This class keeps track of the max score.
    */   
    public class MyClass() 
    {
       private int max = 10; // this keeps track of the max score
       /* The print() method prints out the max */
       public print() {  System.out.println(max); }

Note that most IDEs will tend to show comments formatted in italics -- to make them easier to spot.

Notice that there are some special tags that you can use in Java documentation. These are not required but many programmers use them. Here are some common tags:

- @author  Author of the program
- @since   Date released
- @version Version of program 
- @param   Parameter of a method
- @return  Return value for a method
 
Preconditions and  Postconditions
---------------------------------

As you write methods in a class, it is a good idea to keep in mind the **preconditions** and the **postconditions** for the method and write them in the comments. A precondition is a condition that must be true for your method code to work, for example the assumption that the parameters have values and are not null. The methods could check for these preconditions, but they do not have to. The precondition is what the method expects in order to do its job properly.

A postcondition is a condition that is true after running the method. It is what the method promises to do. Postconditions describe the outcome of running the method, for example what is being returned or the changes to the instance variables. These assumptions are very useful to other programmers who want to use your class and get the correct results. 


Here is an example of preconditions, postconditions, and @param in the Turtle code that we have used in the past for our drawing turtles.

.. code-block:: java 

       /**
         * Constructor that takes the x and y position for the
         * turtle
         * Preconditions: parameters x and y are coordinates from 0 to 
         *    the width and height of the world.
         * Postconditions: the turtle is placed in (x,y) coordinates 
         * @param x the x position to place the turtle
         * @param y the y position to place the turtle
         */
        public Turtle(int x, int y)
        {
          xPos = x;
          yPos = y;
        }
        
|CodingEx| **Coding Exercise**

Try to break the preconditions of the Turtle constructor below. Does the Turtle constructor behave properly if you break the preconditions that x and y are between 0 and 300. Try giving the Turtle constructor  x and y values out of these ranges. What happens? Does the method give good results? Does it give any warnings? What about the t.forward() method? Does it have any preconditions that you can break?

.. |github| raw:: html

   <a href="https://github.com/bhoffman0/APCSA-2019/tree/master/_sources/Unit2-Using-Objects/TurtleJavaSwingCode.zip" target="_blank" style="text-decoration:underline">here</a>
   
.. |repl link| raw:: html

   <a href="https://repl.it/@BerylHoffman/Java-Swing-Turtle" target="_blank" style="text-decoration:underline">repl.it link</a>
   
(If the code below does not work for you, you can copy the code into  this |repl link| (refresh page after forking and if it gets stuck) or download the files |github| to use in your own IDE.)

.. activecode:: turtle-preconditions
    :language: java
    :datafile: turtleClassesPreconditions

    import java.util.*;
    import java.awt.*;

    public class TurtlePreconditions
    {
      public static void main(String[] args)
      {
          World world = new World(300,300);
          // Change 0,0 to other values outside of 0-300 to break the preconditions and see what happens
          Turtle t = new Turtle(0,0,world);
          t.turnRight();
          world.show(true); 
      }
    }
    
The Turtle constructor's precondition is that x and y should be between 0 and the width and height of the world. If it receives values out of this range, it sets x and y to the closest legal values that it can so that the turtle appears just at the edge of the world. Similarly, the forward() method will not allow the turtle to leave the world.  

|Exercise| **Check your understanding**

.. mchoice:: AP5-3-1
    :practice: T
    :answer_a: /* Precondition: s <= 0 */
    :answer_b: /* Precondition: score >= 0 */
    :answer_c: /* Precondition: s and ec >= 0 */
    :answer_d: /* Precondition: n is not the empty String */
    :answer_e: /* Precondition: studentName is not the empty String */
    :correct: c, d
    :feedback_a: It is not reasonable the s which sets the score should be negative.
    :feedback_b: The precondition should be about the parameters of the constructor. score is not the parameter variable.
    :feedback_c: Correct. It is reasonable that the score and extraCredit should be set to positive values using the parameters s and ec.
    :feedback_d: Correct. It is reasonable that the parameter n which sets the name should be not empty. 
    :feedback_e: The precondition should be about the parameters of the constructor. score is not the parameter variable.
   
    Consider the following class definition.

    .. code-block:: java

        public class TestScore
        {
            private String studentName;
            private double score;
            private double extraCredit;

            public TestScore (String n, double s, double ec)
            {
                studentName = n;
                score = s;
                extraCredit = ec;
            }
            /* Other methods not shown */
        }

     Which of the following preconditions are reasonable for the TestScore constructor?
            

Let's consider the substring method in Java. This method has a strong precondition that its arguments refer to indices within the given string. 

|CodingEx| **Coding Exercise**

.. activecode:: substring-preconditions
    :language: java

    The following code breaks the preconditions of the substring method and throws an IndexOutOfBoundsException. Can you fix the code by changing the arguments for the substring method to print out "lo"? What are the preconditions for the substring method?
    ~~~~
    public class SubstringPreconditions
    {
      public static void main(String[] args)
      {
          String str = "hello";
          System.out.println( str.substring(-1,10) );
      }
    }

.. note::
 
    The method str.substring(beginIndex, endIndex) has the precondition that 0 <= beginIndex <= endIndex <= str.length.
    
|Exercise| **Check your understanding**

.. mchoice:: AP5-3-2
   :practice: T
   :answer_a: /* Precondition: i >= 0 */
   :answer_b: /* Precondition: i <= str.length() */
   :answer_c: /* Precondition: 0 < i < str.length() */
   :answer_d: /* Precondition: 0 <= i < str.length() */
   :correct: d
   :feedback_a: This is true but it could still throw an exception if i is a large value.
   :feedback_b: This is true but it could still throw an exception if i is a negative value.   
   :feedback_c: This is true but a little too restrictive.
   :feedback_d: Correct. i can refer to character 0 up to str.length().
      
   The following method is intended to return the substring starting at index i until the end of the string. For example, getiToEnd("012",1) should return "12". Which of the following is the most appropriate precondition for the method so that it does not throw an exception?

   .. code-block:: java

        /* missing precondition */
        public String getiToEnd(String str, int i)
        {
            return str.substring(i, str.length());
        }
    




Software Validity and Use-Case Diagrams
----------------------------------------

Preconditions and postconditions are covered on the AP CS A exam. Software validity, testing, and use-case diagrams which are discussed in this subsection are not covered on the AP CS A exam, but they are described here because they use preconditions and postconditions and are used by professional programmers.

Determining the preconditions and postconditions help us to test our code and determine the **validity** of our software.  Software validity tests whether the software does what it is supposed to do before it is released. This is sometimes very important. For example, if the code is part of a satellite going to outerspace or is going to be used in an emergency condition, we want to test it thoroughly and make sure it works and is valid before it is put into use. 

Good software testers actually try to break the code! They try all kinds of input to see what the software will do because you never know what users will try or what conditions there will be. So, always think what the preconditions of your code are and see what happens when you break them, and then see if you can protect or warn against that.

Preconditions and postconditions can also help us to design better software systems. Software designers often first draw a high-level **Use-Case Diagram** of a system that shows the different ways that a user might interact with a system before they build it. Here is a simple Use-Case Diagram of a restaurant system. It shows 2 actors in the system: the customer and the staff at the restaurant, and 3 use-cases in circles. A **Use-case** is a particular user interaction or situation in the system or software, and they often become methods in the program.

.. figure:: Figures/use-case-restaurant.png
    :width: 500px
    :align: center
    :alt: Use Case Diagram
    :figclass: align-center

    Figure 1: Use-Case Diagram of a Restaurant System
    
After drawing a Use-Case Diagram, designers write down the preconditions and the postconditions for each Use-Case. Often the successful post-condition for one use-case becomes the preconditions for the next use-case. For example, for the "Order Food" and "Eat Food" Use Cases:

- Preconditions for "Order Food": Customer enters restaurant. Staff is ready to take the order.
- Postconditions for "Order Food": Customer orders the food. Staff takes the order.
- Preconditions for "Eat Food": Customer has already ordered food. Staff has delivered food.
- Postcondition for "Eat Food": Customer eats the food.

|Exercise| **Check your understanding**

.. shortanswer:: payconditions

   What are the preconditions and postconditions of the use-case "Pay for food"? Remember that these are often related to the other use-case conditions "order food" and "eat food". 

Agile Software Development
----------------------------

There are many different models for software development. The **waterfall model**, developed in the 1970s, is a step by step model where each phase is finished before the next phase begins. This model has recently been criticized because it is not very adaptable. The more recent **Agile** development model involves iterative, incremental development where  teams works in short 2-3 week **sprints** to completely develop, test, and release a component of the project to the customer for feedback. It is very adaptable as project requirements change because of early testing, immediate customer feedback and collaboration.


.. figure:: Figures/waterfallVsAgile.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 2: Waterfall vs Agile Models 

One very popular type of agile development is called **Scrum**. The following short |video| describes software development  with Scrum.

.. |video| raw:: html

   <a href="https://www.youtube.com/watch?v=TRcReyRYIMg" target="_blank">video</a>


.. youtube:: TRcReyRYIMg
    :height: 315
    :width: 560
    :align: left

|Groupwork| Group Exercise

.. |pogil game| raw:: html

   <a href="https://www.agilesparks.com/blog/wake-up-in-the-morning-game/" target="_blank">Wake Up In the Morning Game</a>

Try the |pogil game| in groups to practice the iterative and incremental agile development process.


|Groupwork| Programming Challenge : Comments and Conditions
-----------------------------------------------------------

.. |Creately.com| raw:: html

   <a href="https://creately.com" target="_blank">Creately.com</a> 

Working in pairs or groups, come up with 4 steps that a user must do to purchase a product, for example a book on Java, in an online store, and list the preconditions and postconditions for each step. You could pretend to buy something online to come up with the steps. (You could use an online drawing tool like |Creately.com| (choose Use-Case Diagrams) to draw a Use-Case diagram for the Online Store System, but it is not required). Don't forget to list  the preconditions and postconditions for each step.  You can type in your answer below.

.. shortanswer:: challenge-5-3-use-case-preconditions

     Write down 4 steps that a user must do to purchase a product, for example a book on Java, in an online store, and list the preconditions and postconditions for each step.
    
    
Here is a simple class called User that could be used in an online store. Add good commenting to this code before the class, the instance variables, and the methods.

.. activecode:: challenge-5-3-comments
    :language: java

    // comments?
    public class User
    {
    
      private String username;
      private String password;
      
      public User()
      {
         username = "guest";
         password = "guest" + (int)(Math.random()*1000);
      }
      
      public User(String nameInit, String pwordInit)
      {
          username = nameInit;
          password = pwordInit;
      }
      
      public void welcome()
      {
         System.out.println("Welcome " + username + "!");
      }
      
      public static void main(String[] args)
      {
          User u1 = new User(); // guest login
          // new user 
          User u2 = new User("cooldude@gmail.com", "Coolness*10"); 
          u1.welcome();
          u2.welcome();
      }
    }


Summary
-------

- Comments are ignored by the compiler and are not executed when the program is run.

- Three types of comments in Java include ``/* */``, which generates a block of comments, ``//``, which generates a comment on one line, and ``/** */``, which are Javadoc comments and are used to create API documentation.


- A precondition is a condition that must be true just prior to the execution of a section of program code in order for the method to behave as expected. There is no expectation that the method will check to ensure preconditions are satisfied.

- A postcondition is a condition that must always be true after the execution of a section of program code. Postconditions describe the outcome of the execution in terms of what is being returned or the state of an object.

- Programmers write method code to satisfy the postconditions when preconditions are met.





   
.. raw:: html

      <pre id="turtleClassesPreconditions" class="javaFiles" style="display:none;">
      import java.awt.Image;
      import java.awt.image.BufferedImage;

      /**
       * Interface to describe a digital picture.  A digital picture can have an
       * associated file name.  It can have a title.  It has pixels
       * associated with it and you can get and set the pixels.  You
       * can get an Image from a picture or a BufferedImage.  You can load
       * it from a file name or image.  You can show a picture.  You can
       * explore a picture.  You can create a new image for it.
       *
       * @author Barb Ericson ericson@cc.gatech.edu
       */
      public interface DigitalPicture
      {
        public String getFileName(); // get the file name that the picture came from
        public String getTitle(); // get the title of the picture
        public void setTitle(String title); // set the title of the picture
        public int getWidth(); // get the width of the picture in pixels
        public int getHeight(); // get the height of the picture in pixels
        public Image getImage(); // get the image from the picture
        public BufferedImage getBufferedImage(); // get the buffered image
        public int getBasicPixel(int x, int y); // get the pixel information as an int
        public void setBasicPixel(int x, int y, int rgb); // set the pixel information
        public Pixel getPixel(int x, int y); // get the pixel information as an object
        public Pixel[] getPixels(); // get all pixels in row-major order
        public Pixel[][] getPixels2D(); // get 2-D array of pixels in row-major order
        public void load(Image image); // load the image into the picture
        public boolean load(String fileName); // load the picture from a file
        public void show(); // show the picture
        public boolean write(String fileName); // write out a file
      }
      import java.awt.Graphics;

      /**
       * Interface to used to communicate between a model
       * and its display
       *
       * Copyright Georgia Institute of Technology 2004
       * @author Barb Ericson ericson@cc.gatech.edu
       */
      public interface ModelDisplay
      {
        /** method to notify the thing that displays that
         * the model has changed */
        public void modelChanged();

        /** method to add the model to the world
         * @param model the model object to add */
        public void addModel(Object model);

        /**
         * Method to remove the model from the world
         * @param model the model object to remove */
        public void remove(Object model);

        /**
         * Method that returns the graphics context
         * for this model display
         * @return the graphics context
         */
        public Graphics getGraphics();

        /**
         * Method to clear the background
         */
        public void clearBackground();

        /** Method to get the width of the display
         * @return the width in pixels of the display
         */
        public int getWidth();

        /** Method to get the height of the display
         * @return the height in pixels of the display
         */
        public int getHeight();
      }
      import java.awt.*;
      import java.awt.geom.*;

      /**
       * This class represents a displayable path segment
       * it has a color, width, and a Line2D object
       * Copyright Georgia Institute of Technology 2005
       * @author Barb Ericson ericson@cc.gatech.edu
       */
      @SuppressWarnings("unchecked")
      public class PathSegment
      {
        //////////////// fields /////////////////////
        private Color color;
        private int width;
        private Line2D.Float line;

        //////////////// constructors ///////////////

        /**
         * Constructor that takes the color, width,
         * and line
         */
        public PathSegment (Color theColor, int theWidth,
                            Line2D.Float theLine)
        {
          this.color = theColor;
          this.width = theWidth;
          this.line = theLine;
        }

        //////////////// methods ////////////////////

        /**
         * Method to paint this path segment
         * @param g the graphics context
         */
        public void paintComponent(Graphics g)
        {
          Graphics2D g2 = (Graphics2D) g;
          BasicStroke penStroke = new BasicStroke(this.width);
          g2.setStroke(penStroke);
          g2.setColor(this.color);
          g2.draw(this.line);
        }

      } // end of class
      import java.awt.*;
      import java.awt.geom.*;
      import javax.swing.*;
      import java.util.List;
      import java.util.ArrayList;
      import java.util.Iterator;

      /**
       * Class to represent a pen which has a color, width,
       * and a list of path segments that it should draw.
       * A pen also knows if it is up or down
       *
       * Copyright Georgia Institute of Technology 2004
       * @author Barb Ericson ericson@cc.gatech.edu
       */
      @SuppressWarnings("unchecked")
      public class Pen
      {
        ////////////////// fields //////////////////////

        /** track if up or down */
        private boolean penDown = true;

        /** color of ink */
        private Color color = Color.green;

        /** width of stroke */
        private int width = 1;

        /** list of path segment objects to draw */
        private List<PathSegment> pathSegmentList =
          new ArrayList<PathSegment>();

        //////////////// constructors ///////////////////

        /**
         * Constructor that takes no arguments
         */
        public Pen() { }

        /**
         * Constructor that takes all the ink color, and width
         * @param color the ink color
         * @param width the width in pixels
         */
        public Pen(Color color, int width)
        {
          this.color = color;
          this.width = width;
        }

        /**
         * Constructor that takes the ink color, width, and penDown flag
         * @param color the ink color
         * @param width the width in pixels
         * @param penDown the flag if the pen is down
         */
        public Pen(Color color, int width, boolean penDown)
        {
          // use the other constructor to set these
          this(color,width);

          // set the pen down flag
          this.penDown = penDown;
        }

        ////////////////// methods ///////////////////////

        /**
         * Method to get pen down status
         * @return true if the pen is down else false
         */
        public boolean isPenDown() { return penDown; }

        /**
         * Method to set the pen down value
         * @param value the new value to use
         */
        public void setPenDown(boolean value) { penDown = value; }

        /**
         * Method to get the pen (ink) color
         * @return the ink color
         */
        public Color getColor() { return color; }

        /**
         * Method to set the pen (ink) color
         * @param color the color to use
         */
        public void setColor(Color color) { this.color = color;}

        /**
         * Method to get the width of the pen
         * @return the width in pixels
         */
        public int getWidth() { return width; }

        /**
         * Method to set the width of the pen
         * @param width the width to use in pixels
         */
        public void setWidth(int width) { this.width = width; }

        /**
         * Method to add a path segment if the pen is down
         * @param x1 the first x
         * @param y1 the first y
         * @param x2 the second x
         * @param y2 the second y
         */
        public synchronized void addMove(int x1, int y1, int x2, int y2)
        {
          if (penDown)
          {
            PathSegment pathSeg =
              new PathSegment(this.color,this.width,
                              new Line2D.Float(x1,y1,x2,y2));
            pathSegmentList.add(pathSeg);
          }
        }

        /**
         * Method to clear the path stored for this pen
         */
        public void clearPath()
        {
          pathSegmentList.clear();
        }

        /**
         * Metod to paint the pen path
         * @param g the graphics context
         */
        public synchronized void paintComponent(Graphics g)
        {

          Color oldcolor = g.getColor();

          // loop through path segment list and
          Iterator iterator = pathSegmentList.iterator();
          PathSegment pathSeg = null;

          // loop through path segments
          while (iterator.hasNext())
          {
            pathSeg = (PathSegment) iterator.next();
            pathSeg.paintComponent(g);
          }

          g.setColor(oldcolor);
        }

      } // end of class
      import java.awt.*;
      import java.awt.font.*;
      import java.awt.geom.*;
      import java.awt.image.BufferedImage;
      import java.text.*;
      import java.util.*;
      import java.util.List; // resolves problem with java.awt.List and java.util.List

      /**
       * A class that represents a picture.  This class inherits from
       * SimplePicture and allows the student to add functionality to
       * the Picture class.
       *
       * @author Barbara Ericson ericson@cc.gatech.edu
       */
      @SuppressWarnings("unchecked")
      public class Picture extends SimplePicture
      {
        ///////////////////// constructors //////////////////////////////////

        /**
         * Constructor that takes no arguments
         */
        public Picture ()
        {
          /* not needed but use it to show students the implicit call to super()
           * child constructors always call a parent constructor
           */
          super();
        }

        /**
         * Constructor that takes a file name and creates the picture
         * @param fileName the name of the file to create the picture from
         */
        public Picture(String fileName)
        {
          // let the parent class handle this fileName
          super(fileName);
        }

        /**
         * Constructor that takes the height and width
         * @param height the height of the desired picture
         * @param width the width of the desired picture
         */
        public Picture(int height, int width)
        {
          // let the parent class handle this width and height
          super(width,height);
        }

        /**
         * Constructor that takes a picture and creates a
         * copy of that picture
         * @param copyPicture the picture to copy
         */
        public Picture(Picture copyPicture)
        {
          // let the parent class do the copy
          super(copyPicture);
        }

        /**
         * Constructor that takes a buffered image
         * @param image the buffered image to use
         */
        public Picture(BufferedImage image)
        {
          super(image);
        }

        ////////////////////// methods ///////////////////////////////////////

        /**
         * Method to return a string with information about this picture.
         * @return a string with information about the picture such as fileName,
         * height and width.
         */
        public String toString()
        {
          String output = "Picture, filename " + getFileName() +
            " height " + getHeight()
            + " width " + getWidth();
          return output;

        }

      } // this } is the end of class Picture, put all new methods before this

      import java.awt.Color;

      /**
       * Class that references a pixel in a picture. Pixel
       * stands for picture element where picture is
       * abbreviated pix.  A pixel has a column (x) and
       * row (y) location in a picture.  A pixel knows how
       * to get and set the red, green, blue, and alpha
       * values in the picture.  A pixel also knows how to get
       * and set the color using a Color object.
       *
       * @author Barb Ericson ericson@cc.gatech.edu
       */
      @SuppressWarnings("unchecked")
      public class Pixel
      {

        ////////////////////////// fields ///////////////////////////////////

        /** the digital picture this pixel belongs to */
        private DigitalPicture picture;

        /** the x (column) location of this pixel in the picture; (0,0) is top left */
        private int x;

        /** the y (row) location of this pixel in the picture; (0,0) is top left */
        private int y;

        ////////////////////// constructors /////////////////////////////////

        /**
         * A constructor that takes the x and y location for the pixel and
         * the picture the pixel is coming from
         * @param picture the picture that the pixel is in
         * @param x the x location of the pixel in the picture
         * @param y the y location of the pixel in the picture
         */
        public Pixel(DigitalPicture picture, int x, int y)
        {
          // set the picture
          this.picture = picture;

          // set the x location
          this.x = x;

          // set the y location
          this.y = y;

        }

        ///////////////////////// methods //////////////////////////////

        /**
         * Method to get the x location of this pixel.
         * @return the x location of the pixel in the picture
         */
        public int getX() { return x; }

        /**
         * Method to get the y location of this pixel.
         * @return the y location of the pixel in the picture
         */
        public int getY() { return y; }

        /**
         * Method to get the row (y value)
         * @return the row (y value) of the pixel in the picture
         */
        public int getRow() { return y; }

        /**
         * Method to get the column (x value)
         * @return the column (x value) of the pixel
         */
        public int getCol() { return x; }

        /**
         * Method to get the amount of alpha (transparency) at this pixel.
         * It will be from 0-255.
         * @return the amount of alpha (transparency)
         */
        public int getAlpha() {

          /* get the value at the location from the picture as a 32 bit int
           * with alpha, red, green, blue each taking 8 bits from left to right
           */
          int value = picture.getBasicPixel(x,y);

          // get the alpha value (starts at 25 so shift right 24)
          // then and it with all 1's for the first 8 bits to keep
          // end up with from 0 to 255
          int alpha = (value >> 24) & 0xff;

          return alpha;
        }

        /**
         * Method to get the amount of red at this pixel.  It will be
         * from 0-255 with 0 being no red and 255 being as much red as
         * you can have.
         * @return the amount of red from 0 for none to 255 for max
         */
        public int getRed() {

          /* get the value at the location from the picture as a 32 bit int
           * with alpha, red, green, blue each taking 8 bits from left to right
           */
          int value = picture.getBasicPixel(x,y);

          // get the red value (starts at 17 so shift right 16)
          // then AND it with all 1's for the first 8 bits to
          // end up with a resulting value from 0 to 255
          int red = (value >> 16) & 0xff;

          return red;
        }

        /**
         * Method to get the red value from a pixel represented as an int
         * @param value the color value as an int
         * @return the amount of red
         */
        public static int getRed(int value)
        {
          int red = (value >> 16) & 0xff;
          return red;
        }

        /**
         * Method to get the amount of green at this pixel.  It will be
         * from 0-255 with 0 being no green and 255 being as much green as
         * you can have.
         * @return the amount of green from 0 for none to 255 for max
         */
        public int getGreen() {

          /* get the value at the location from the picture as a 32 bit int
           * with alpha, red, green, blue each taking 8 bits from left to right
           */
          int value = picture.getBasicPixel(x,y);

          // get the green value (starts at 9 so shift right 8)
          int green = (value >>  8) & 0xff;

          return green;
        }

        /**
         * Method to get the green value from a pixel represented as an int
         * @param value the color value as an int
         * @return the amount of green
         */
        public static int getGreen(int value)
        {
          int green = (value >> 8) & 0xff;
          return green;
        }

        /**
         * Method to get the amount of blue at this pixel.  It will be
         * from 0-255 with 0 being no blue and 255 being as much blue as
         * you can have.
         * @return the amount of blue from 0 for none to 255 for max
         */
        public int getBlue() {

          /* get the value at the location from the picture as a 32 bit int
           * with alpha, red, green, blue each taking 8 bits from left to right
           */
          int value = picture.getBasicPixel(x,y);

          // get the blue value (starts at 0 so no shift required)
          int blue = value & 0xff;

          return blue;
        }

        /**
         * Method to get the blue value from a pixel represented as an int
         * @param value the color value as an int
         * @return the amount of blue
         */
        public static int getBlue(int value)
        {
          int blue = value & 0xff;
          return blue;
        }

        /**
         * Method to get a color object that represents the color at this pixel.
         * @return a color object that represents the pixel color
         */
        public Color getColor()
        {
           /* get the value at the location from the picture as a 32 bit int
           * with alpha, red, green, blue each taking 8 bits from left to right
           */
          int value = picture.getBasicPixel(x,y);

          // get the red value (starts at 17 so shift right 16)
          // then AND it with all 1's for the first 8 bits to
          // end up with a resulting value from 0 to 255
          int red = (value >> 16) & 0xff;

          // get the green value (starts at 9 so shift right 8)
          int green = (value >>  8) & 0xff;

          // get the blue value (starts at 0 so no shift required)
          int blue = value & 0xff;

          return new Color(red,green,blue);
        }

        /**
         * Method to set the pixel color to the passed in color object.
         * @param newColor the new color to use
         */
        public void setColor(Color newColor)
        {
          // set the red, green, and blue values
          int red = newColor.getRed();
          int green = newColor.getGreen();
          int blue = newColor.getBlue();

          // update the associated picture
          updatePicture(this.getAlpha(),red,green,blue);
        }

        /**
         * Method to update the picture based on the passed color
         * values for this pixel
         * @param alpha the alpha (transparency) at this pixel
         * @param red the red value for the color at this pixel
         * @param green the green value for the color at this pixel
         * @param blue the blue value for the color at this pixel
         */
        public void updatePicture(int alpha, int red, int green, int blue)
        {
          // create a 32 bit int with alpha, red, green blue from left to right
          int value = (alpha << 24) + (red << 16) + (green << 8) + blue;

          // update the picture with the int value
          picture.setBasicPixel(x,y,value);
        }

        /**
         * Method to correct a color value to be within 0 to 255
         * @param the value to use
         * @return a value within 0 to 255
         */
        private static int correctValue(int value)
        {
          if (value < 0)
            value = 0;
          if (value > 255)
            value = 255;
          return value;
        }

        /**
         * Method to set the red to a new red value
         * @param value the new value to use
         */
        public void setRed(int value)
        {
          // set the red value to the corrected value
          int red = correctValue(value);

          // update the pixel value in the picture
          updatePicture(getAlpha(), red, getGreen(), getBlue());
        }

        /**
         * Method to set the green to a new green value
         * @param value the value to use
         */
        public void setGreen(int value)
        {
          // set the green value to the corrected value
          int green = correctValue(value);

          // update the pixel value in the picture
          updatePicture(getAlpha(), getRed(), green, getBlue());
        }

        /**
         * Method to set the blue to a new blue value
         * @param value the new value to use
         */
        public void setBlue(int value)
        {
          // set the blue value to the corrected value
          int blue = correctValue(value);

          // update the pixel value in the picture
          updatePicture(getAlpha(), getRed(), getGreen(), blue);
        }

         /**
         * Method to set the alpha (transparency) to a new alpha value
         * @param value the new value to use
         */
        public void setAlpha(int value)
        {
          // make sure that the alpha is from 0 to 255
          int alpha = correctValue(value);

          // update the associated picture
          updatePicture(alpha, getRed(), getGreen(), getBlue());
        }

        /**
        * Method to get the distance between this pixel's color and the passed color
        * @param testColor the color to compare to
        * @return the distance between this pixel's color and the passed color
        */
       public double colorDistance(Color testColor)
       {
         double redDistance = this.getRed() - testColor.getRed();
         double greenDistance = this.getGreen() - testColor.getGreen();
         double blueDistance = this.getBlue() - testColor.getBlue();
         double distance = Math.sqrt(redDistance * redDistance +
                                     greenDistance * greenDistance +
                                     blueDistance * blueDistance);
         return distance;
       }

       /**
        * Method to compute the color distances between two color objects
        * @param color1 a color object
        * @param color2 a color object
        * @return the distance between the two colors
        */
       public static double colorDistance(Color color1,Color color2)
       {
         double redDistance = color1.getRed() - color2.getRed();
         double greenDistance = color1.getGreen() - color2.getGreen();
         double blueDistance = color1.getBlue() - color2.getBlue();
         double distance = Math.sqrt(redDistance * redDistance +
                                     greenDistance * greenDistance +
                                     blueDistance * blueDistance);
         return distance;
       }

       /**
        * Method to get the average of the colors of this pixel
        * @return the average of the red, green, and blue values
        */
       public double getAverage()
       {
         double average = (getRed() + getGreen() + getBlue()) / 3.0;
         return average;
       }

        /**
         * Method to return a string with information about this pixel
         * @return a string with information about this pixel
         */
        public String toString()
        {
          return "Pixel row=" + getRow() +
            " col=" + getCol() +
            " red=" + getRed() +
            " green=" + getGreen() +
            " blue=" + getBlue();
        }

      }
      import javax.imageio.ImageIO;
      import java.awt.image.BufferedImage;
      import javax.swing.ImageIcon;
      import java.awt.*;
      import java.io.*;
      import java.awt.geom.*;

      import java.io.ByteArrayOutputStream;
    //  import javax.xml.bind.DatatypeConverter;
      // Using java.util.Base64 instead of javax.xml.bind
	import java.util.Base64;
      import java.util.Scanner;

      /**
       * A class that represents a simple picture.  A simple picture may have
       * an associated file name and a title.  A simple picture has pixels,
       * width, and height.  A simple picture uses a BufferedImage to
       * hold the pixels. You can also explore a simple picture.
       *
       * @author Barb Ericson ericson@cc.gatech.edu
       */
      @SuppressWarnings("unchecked")
      public class SimplePicture implements DigitalPicture
      {

        /////////////////////// Fields /////////////////////////

        /**
         * the file name associated with the simple picture
         */
        private String fileName;

        /**
         * the path name for the file
         */
        private String pathName;

        /**
         * the title of the simple picture
         */
        private String title;

        /**
         * buffered image to hold pixels for the simple picture
         */
        private BufferedImage bufferedImage;

        /**
         * extension for this file (jpg or bmp)
         */
        private String extension;


       /////////////////////// Constructors /////////////////////////

       /**
        * A Constructor that takes no arguments.  It creates a picture with
        * a width of 200 and a height of 100 that is all white.
        * A no-argument constructor must be given in order for a class to
        * be able to be subclassed.  By default all subclasses will implicitly
        * call this in their parent's no-argument constructor unless a
        * different call to super() is explicitly made as the first line
        * of code in a constructor.
        */
       public SimplePicture()
       {this(200,100);}

       /**
        * A Constructor that takes a file name and uses the file to create
        * a picture
        * @param fileName the file name to use in creating the picture
        */
       public SimplePicture(String fileName)
       {

         // load the picture into the buffered image
         load(fileName);

       }

       /**
        * A constructor that takes the width and height desired for a picture and
        * creates a buffered image of that size.  This constructor doesn't
        * show the picture.  The pixels will all be white.
        * @param width the desired width
        * @param height the desired height
        */
       public  SimplePicture(int width, int height)
       {
         bufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
         title = "None";
         fileName = "None";
         extension = "jpg";
         setAllPixelsToAColor(Color.white);
       }

       /**
        * A constructor that takes the width and height desired for a picture and
        * creates a buffered image of that size.  It also takes the
        * color to use for the background of the picture.
        * @param width the desired width
        * @param height the desired height
        * @param theColor the background color for the picture
        */
       public  SimplePicture(int width, int height, Color theColor)
       {
         this(width,height);
         setAllPixelsToAColor(theColor);
       }

       /**
        * A Constructor that takes a picture to copy information from
        * @param copyPicture the picture to copy from
        */
       public SimplePicture(SimplePicture copyPicture)
       {
         if (copyPicture.fileName != null)
         {
            this.fileName = new String(copyPicture.fileName);
            this.extension = copyPicture.extension;
         }
         if (copyPicture.title != null)
            this.title = new String(copyPicture.title);
         if (copyPicture.bufferedImage != null)
         {
           this.bufferedImage = new BufferedImage(copyPicture.getWidth(),
                                                  copyPicture.getHeight(), BufferedImage.TYPE_INT_RGB);
           this.copyPicture(copyPicture);
         }
       }

       /**
        * A constructor that takes a buffered image
        * @param image the buffered image
        */
       public SimplePicture(BufferedImage image)
       {
         this.bufferedImage = image;
         title = "None";
         fileName = "None";
         extension = "jpg";
       }

       ////////////////////////// Methods //////////////////////////////////

       /**
        * Method to get the extension for this picture
        * @return the extension (jpg, bmp, giff, etc)
        */
       public String getExtension() { return extension; }

       /**
        * Method that will copy all of the passed source picture into
        * the current picture object
        * @param sourcePicture  the picture object to copy
        */
       public void copyPicture(SimplePicture sourcePicture)
       {
         Pixel sourcePixel = null;
         Pixel targetPixel = null;

         // loop through the columns
         for (int sourceX = 0, targetX = 0;
              sourceX < sourcePicture.getWidth() &&
              targetX < this.getWidth();
              sourceX++, targetX++)
         {
           // loop through the rows
           for (int sourceY = 0, targetY = 0;
                sourceY < sourcePicture.getHeight() &&
                targetY < this.getHeight();
                sourceY++, targetY++)
           {
             sourcePixel = sourcePicture.getPixel(sourceX,sourceY);
             targetPixel = this.getPixel(targetX,targetY);
             targetPixel.setColor(sourcePixel.getColor());
           }
         }

       }

       /**
        * Method to set the color in the picture to the passed color
        * @param color the color to set to
        */
       public void setAllPixelsToAColor(Color color)
       {
         // loop through all x
         for (int x = 0; x < this.getWidth(); x++)
         {
           // loop through all y
           for (int y = 0; y < this.getHeight(); y++)
           {
             getPixel(x,y).setColor(color);
           }
         }
       }

       /**
        * Method to get the buffered image
        * @return the buffered image
        */
       public BufferedImage getBufferedImage()
       {
          return bufferedImage;
       }

       /**
        * Method to get a graphics object for this picture to use to draw on
        * @return a graphics object to use for drawing
        */
       public Graphics getGraphics()
       {
         return bufferedImage.getGraphics();
       }

       /**
        * Method to get a Graphics2D object for this picture which can
        * be used to do 2D drawing on the picture
        */
       public Graphics2D createGraphics()
       {
         return bufferedImage.createGraphics();
       }

       /**
        * Method to get the file name associated with the picture
        * @return  the file name associated with the picture
        */
       public String getFileName() { return fileName; }

       /**
        * Method to set the file name
        * @param name the full pathname of the file
        */
       public void setFileName(String name)
       {
         fileName = name;
       }

       /**
        * Method to get the title of the picture
        * @return the title of the picture
        */
       public String getTitle()
       { return title; }

       /**
        * Method to set the title for the picture
        * @param title the title to use for the picture
        */
       public void setTitle(String title)
       {
         this.title = title;
       }

       /**
        * Method to get the width of the picture in pixels
        * @return the width of the picture in pixels
        */
       public int getWidth() { return bufferedImage.getWidth(); }

       /**
        * Method to get the height of the picture in pixels
        * @return  the height of the picture in pixels
        */
       public int getHeight() { return bufferedImage.getHeight(); }

       /**
        * Method to get an image from the picture
        * @return  the buffered image since it is an image
        */
       public Image getImage()
       {
         return bufferedImage;
       }

       /**
        * Method to return the pixel value as an int for the given x and y location
        * @param x the x coordinate of the pixel
        * @param y the y coordinate of the pixel
        * @return the pixel value as an integer (alpha, red, green, blue)
        */
       public int getBasicPixel(int x, int y)
       {
          return bufferedImage.getRGB(x,y);
       }

       /**
        * Method to set the value of a pixel in the picture from an int
        * @param x the x coordinate of the pixel
        * @param y the y coordinate of the pixel
        * @param rgb the new rgb value of the pixel (alpha, red, green, blue)
        */
       public void setBasicPixel(int x, int y, int rgb)
       {
         bufferedImage.setRGB(x,y,rgb);
       }

       /**
        * Method to get a pixel object for the given x and y location
        * @param x  the x location of the pixel in the picture
        * @param y  the y location of the pixel in the picture
        * @return a Pixel object for this location
        */
       public Pixel getPixel(int x, int y)
       {
         // create the pixel object for this picture and the given x and y location
         Pixel pixel = new Pixel(this,x,y);
         return pixel;
       }

       /**
        * Method to get a one-dimensional array of Pixels for this simple picture
        * @return a one-dimensional array of Pixel objects starting with y=0
        * to y=height-1 and x=0 to x=width-1.
        */
       public Pixel[] getPixels()
       {
         int width = getWidth();
         int height = getHeight();
         Pixel[] pixelArray = new Pixel[width * height];

         // loop through height rows from top to bottom
         for (int row = 0; row < height; row++)
           for (int col = 0; col < width; col++)
             pixelArray[row * width + col] = new Pixel(this,col,row);

         return pixelArray;
       }

       /**
        * Method to get a two-dimensional array of Pixels for this simple picture
        * @return a two-dimensional array of Pixel objects in row-major order.
        */
       public Pixel[][] getPixels2D()
       {
         int width = getWidth();
         int height = getHeight();
         Pixel[][] pixelArray = new Pixel[height][width];

         // loop through height rows from top to bottom
         for (int row = 0; row < height; row++)
           for (int col = 0; col < width; col++)
             pixelArray[row][col] = new Pixel(this,col,row);

         return pixelArray;
       }

       /**
        * Method to load the buffered image with the passed image
        * @param image  the image to use
        */
       public void load(Image image)
       {
         // get a graphics context to use to draw on the buffered image
         Graphics2D graphics2d = bufferedImage.createGraphics();

         // draw the image on the buffered image starting at 0,0
         graphics2d.drawImage(image,0,0,null);

         // show the new image
         show();
       }

       /**
        * Method to show the picture in a picture frame
        */
       public void show()
       {
           try {
               ByteArrayOutputStream output = new ByteArrayOutputStream();
               ImageIO.write(this.bufferedImage, "png", output);
               String result =
	       // DatatypeConverter.printBase64Binary(output.toByteArray());
               // using java.util.Base64 instead of java.xml.bind.DataTypeConverter
            	Base64.getEncoder().encodeToString(output.toByteArray()); 
	       System.out.println("&lt;img src=\'data:image/" + this.extension + ";base64," + result + "\'/>");
           } catch (IOException e) {
               System.out.println("Errors occured in image conversion");
           }
       }

       /**
        * Method to load the picture from the passed file name
        * @param fileName the file name to use to load the picture from
        * @throws IOException if the picture isn't found
        */
       public void loadOrFail(String fileName) throws IOException
       {
          // set the current picture's file name
         this.fileName = fileName;

         // set the extension
         int posDot = fileName.lastIndexOf('.');
         if (posDot >= 0)
           this.extension = fileName.substring(posDot + 1);

          //get file location
          String[] paths = fileName.split("/");
          this.pathName = "";
          if(paths.length != 1) {
              for(int i = 0; i < paths.length - 1; i++) {
                  this.pathName = this.pathName + paths[i] + "/";
              }
          }
         // if the current title is null use the file name
         if (title == null)
           title = fileName;

         File file = new File(this.fileName);

         if (!file.canRead())
         {
           throw new IOException(this.fileName +
                               " could not be opened. Check that you specified the path");
         }
         bufferedImage = ImageIO.read(file);


       }


       /**
        * Method to read the contents of the picture from a filename
        * without throwing errors
        * @param fileName the name of the file to write the picture to
        * @return true if success else false
        */
       public boolean load(String fileName)
       {
           try {
               this.loadOrFail(fileName);
               return true;

           } catch (Exception ex) {
               System.out.println("There was an error trying to open " + fileName);
               bufferedImage = new BufferedImage(600,200,
                                                 BufferedImage.TYPE_INT_RGB);
               addMessage("Couldn't load " + fileName,5,100);
               return false;
           }

       }

       /**
        * Method to load the picture from the passed file name
        * this just calls load(fileName) and is for name compatibility
        * @param fileName the file name to use to load the picture from
        * @return true if success else false
        */
       public boolean loadImage(String fileName)
       {
           return load(fileName);
       }

       /**
        * Method to draw a message as a string on the buffered image
        * @param message the message to draw on the buffered image
        * @param xPos  the x coordinate of the leftmost point of the string
        * @param yPos  the y coordinate of the bottom of the string
        */
       public void addMessage(String message, int xPos, int yPos)
       {
         // get a graphics context to use to draw on the buffered image
         Graphics2D graphics2d = bufferedImage.createGraphics();

         // set the color to white
         graphics2d.setPaint(Color.white);

         // set the font to Helvetica bold style and size 16
         graphics2d.setFont(new Font("Helvetica",Font.BOLD,16));

         // draw the message
         graphics2d.drawString(message,xPos,yPos);

       }

       /**
        * Method to draw a string at the given location on the picture
        * @param text the text to draw
        * @param xPos the left x for the text
        * @param yPos the top y for the text
        */
       public void drawString(String text, int xPos, int yPos)
       {
         addMessage(text,xPos,yPos);
       }

       /**
         * Method to create a new picture by scaling the current
         * picture by the given x and y factors
         * @param xFactor the amount to scale in x
         * @param yFactor the amount to scale in y
         * @return the resulting picture
         */
        public Picture scale(double xFactor, double yFactor)
        {
          // set up the scale transform
          AffineTransform scaleTransform = new AffineTransform();
          scaleTransform.scale(xFactor,yFactor);

          // create a new picture object that is the right size
          Picture result = new Picture((int) (getHeight() * yFactor),
                                       (int) (getWidth() * xFactor));

          // get the graphics 2d object to draw on the result
          Graphics graphics = result.getGraphics();
          Graphics2D g2 = (Graphics2D) graphics;

          // draw the current image onto the result image scaled
          g2.drawImage(this.getImage(),scaleTransform,null);

          return result;
        }

        /**
         * Method to create a new picture of the passed width.
         * The aspect ratio of the width and height will stay
         * the same.
         * @param width the desired width
         * @return the resulting picture
         */
        public Picture getPictureWithWidth(int width)
        {
          // set up the scale transform
          double xFactor = (double) width / this.getWidth();
          Picture result = scale(xFactor,xFactor);
          return result;
        }

        /**
         * Method to create a new picture of the passed height.
         * The aspect ratio of the width and height will stay
         * the same.
         * @param height the desired height
         * @return the resulting picture
         */
        public Picture getPictureWithHeight(int height)
        {
          // set up the scale transform
          double yFactor = (double) height / this.getHeight();
          Picture result = scale(yFactor,yFactor);
          return result;
        }

       /**
        * Method to load a picture from a file name and show it in a picture frame
        * @param fileName the file name to load the picture from
        * @return true if success else false
        */
       public boolean loadPictureAndShowIt(String fileName)
       {
         boolean result = true;  // the default is that it worked

         // try to load the picture into the buffered image from the file name
         result = load(fileName);

         // show the picture in a picture frame
         show();

         return result;
       }

       /**
        * Method to write the contents of the picture to a file with
        * the passed name
        * @param fileName the name of the file to write the picture to
        */
       public void writeOrFail(String fileName) throws IOException
       {
         String extension = this.extension; // the default is current

         // create the file object
         File file = new File(fileName);

         // get the extension
         int posDot = fileName.indexOf('.');
         if (posDot >= 0)
             extension = fileName.substring(posDot + 1);

         // write the contents of the buffered image to the file
         ImageIO.write(bufferedImage, extension, file);

       }

       /**
        * Method to write the contents of the picture to a file with
        * the passed name without throwing errors
        * @param fileName the name of the file to write the picture to
        * @return true if success else false
        */
       public boolean write(String fileName)
       {
           try {
               this.writeOrFail(fileName);
               return true;
           } catch (Exception ex) {
               System.out.println("There was an error trying to write " + fileName);
               ex.printStackTrace();
               return false;
           }

       }

        /**
         * Method to get the coordinates of the enclosing rectangle after this
         * transformation is applied to the current picture
         * @return the enclosing rectangle
         */
        public Rectangle2D getTransformEnclosingRect(AffineTransform trans)
        {
          int width = getWidth();
          int height = getHeight();
          double maxX = width - 1;
          double maxY = height - 1;
          double minX, minY;
          Point2D.Double p1 = new Point2D.Double(0,0);
          Point2D.Double p2 = new Point2D.Double(maxX,0);
          Point2D.Double p3 = new Point2D.Double(maxX,maxY);
          Point2D.Double p4 = new Point2D.Double(0,maxY);
          Point2D.Double result = new Point2D.Double(0,0);
          Rectangle2D.Double rect = null;

          // get the new points and min x and y and max x and y
          trans.deltaTransform(p1,result);
          minX = result.getX();
          maxX = result.getX();
          minY = result.getY();
          maxY = result.getY();
          trans.deltaTransform(p2,result);
          minX = Math.min(minX,result.getX());
          maxX = Math.max(maxX,result.getX());
          minY = Math.min(minY,result.getY());
          maxY = Math.max(maxY,result.getY());
          trans.deltaTransform(p3,result);
          minX = Math.min(minX,result.getX());
          maxX = Math.max(maxX,result.getX());
          minY = Math.min(minY,result.getY());
          maxY = Math.max(maxY,result.getY());
          trans.deltaTransform(p4,result);
          minX = Math.min(minX,result.getX());
          maxX = Math.max(maxX,result.getX());
          minY = Math.min(minY,result.getY());
          maxY = Math.max(maxY,result.getY());

          // create the bounding rectangle to return
          rect = new Rectangle2D.Double(minX,minY,maxX - minX + 1, maxY - minY + 1);
          return rect;
        }

        /**
         * Method to get the coordinates of the enclosing rectangle after this
         * transformation is applied to the current picture
         * @return the enclosing rectangle
         */
        public Rectangle2D getTranslationEnclosingRect(AffineTransform trans)
        {
          return getTransformEnclosingRect(trans);
        }

       /**
        * Method to return a string with information about this picture
        * @return a string with information about the picture
        */
       public String toString()
       {
         String output = "Simple Picture, filename " + fileName +
           " height " + getHeight() + " width " + getWidth();
         return output;
       }

      } // end of SimplePicture class
      import javax.swing.*;
      import java.awt.*;
      import java.awt.font.*;
      import java.awt.geom.*;
      import java.util.Observer;
      import java.util.Random;

      /**
       * Class that represents a Logo-style turtle.  The turtle
       * starts off facing north.
       * A turtle can have a name, has a starting x and y position,
       * has a heading, has a width, has a height, has a visible
       * flag, has a body color, can have a shell color, and has a pen.
       * The turtle will not go beyond the model display or picture
       * boundaries.
       *
       * You can display this turtle in either a picture or in
       * a class that implements ModelDisplay.
       *
       * Copyright Georgia Institute of Technology 2004
       * @author Barb Ericson ericson@cc.gatech.edu
       */
      @SuppressWarnings("unchecked")
      public class SimpleTurtle
      {
        ///////////////// fields ////////////////////////

        /** count of the number of turtles created */
        private static int numTurtles = 0;

        /** array of colors to use for the turtles */
        private static Color[] colorArray = { Color.green, Color.cyan, new Color(204,0,204), Color.gray};

        /** who to notify about changes to this turtle */
        private ModelDisplay modelDisplay = null;

        /** picture to draw this turtle on */
        private Picture picture = null;

        /** width of turtle in pixels */
        private int width = 15;

        /** height of turtle in pixels */
        private int height = 18;

        /** current location in x (center) */
        private int xPos = 0;

        /** current location in y (center) */
        private int yPos = 0;

        /** heading angle */
        private double heading = 0;  // default is facing north

        /** pen to use for this turtle */
        private Pen pen = new Pen();

        /** color to draw the body in */
        private Color bodyColor = null;

        /** color to draw the shell in */
        private Color shellColor = null;

        /** color of information string */
        private Color infoColor = Color.black;

        /** flag to say if this turtle is visible */
        private boolean visible = true;

        /** flag to say if should show turtle info */
        private boolean showInfo = false;

        /** the name of this turtle */
        private String name = "No name";

        ////////////////// constructors ///////////////////

        /**
         * Constructor that takes the x and y position for the
         * turtle
         * @param x the x pos
         * @param y the y pos
         */
        public SimpleTurtle(int x, int y)
        {
          xPos = x;
          yPos = y;
          bodyColor = colorArray[numTurtles % colorArray.length];
          setPenColor(bodyColor);
          numTurtles++;
        }

        /**
         * Constructor that takes the x and y position and the
         * model displayer
         * @param x the x pos
         * @param y the y pos
         * @param display the model display
         */
        public SimpleTurtle(int x, int y, ModelDisplay display)
        {
          this(x,y); // invoke constructor that takes x and y
          modelDisplay = display;
          display.addModel(this);
        }

        /**
         * Constructor that takes a model display and adds
         * a turtle in the middle of it
         * @param display the model display
         */
        public SimpleTurtle(ModelDisplay display)
        {
          // invoke constructor that takes x and y
          this((int) (display.getWidth() / 2),
               (int) (display.getHeight() / 2));
          modelDisplay = display;
          display.addModel(this);

        }

        /**
         * Constructor that takes the x and y position and the
         * picture to draw on
         * @param x the x pos
         * @param y the y pos
         * @param picture the picture to draw on
         */
        public SimpleTurtle(int x, int y, Picture picture)
        {
          this(x,y); // invoke constructor that takes x and y
          this.picture = picture;
          this.visible = false; // default is not to see the turtle
        }

        /**
         * Constructor that takes the
         * picture to draw on and will appear in the middle
         * @param picture the picture to draw on
         */
        public SimpleTurtle(Picture picture)
        {
          // invoke constructor that takes x and y
          this((int) (picture.getWidth() / 2),
               (int) (picture.getHeight() / 2));
          this.picture = picture;
          this.visible = false; // default is not to see the turtle
        }

        //////////////////// methods /////////////////////////

        /**
         * Get the distance from the passed x and y location
         * @param x the x location
         * @param y the y location
         */
        public double getDistance(int x, int y)
        {
          int xDiff = x - xPos;
          int yDiff = y - yPos;
          return (Math.sqrt((xDiff * xDiff) + (yDiff * yDiff)));
        }

        /**
         * Method to turn to face another simple turtle
         */
        public void turnToFace(SimpleTurtle turtle)
        {
          turnToFace(turtle.xPos,turtle.yPos);
        }

         /**
         * Method to turn towards the given x and y
         * @param x the x to turn towards
         * @param y the y to turn towards
         */
        public void turnToFace(int x, int y)
        {
          double dx = x - this.xPos;
          double dy = y - this.yPos;
          double arcTan = 0.0;
          double angle = 0.0;

          // avoid a divide by 0
          if (dx == 0)
          {
            // if below the current turtle
            if (dy > 0)
              heading = 180;

            // if above the current turtle
            else if (dy < 0)
              heading = 0;
          }
          // dx isn't 0 so can divide by it
          else
          {
            arcTan = Math.toDegrees(Math.atan(dy / dx));
            if (dx < 0)
              heading = arcTan - 90;
            else
              heading = arcTan + 90;
          }

          // notify the display that we need to repaint
          updateDisplay();
        }

        /**
         * Method to get the picture for this simple turtle
         * @return the picture for this turtle (may be null)
         */
        public Picture getPicture() { return this.picture; }

        /**
         * Method to set the picture for this simple turtle
         * @param pict the picture to use
         */
        public void setPicture(Picture pict) { this.picture = pict; }

        /**
         * Method to get the model display for this simple turtle
         * @return the model display if there is one else null
         */
        public ModelDisplay getModelDisplay() { return this.modelDisplay; }

        /**
         * Method to set the model display for this simple turtle
         * @param theModelDisplay the model display to use
         */
        public void setModelDisplay(ModelDisplay theModelDisplay)
        { this.modelDisplay = theModelDisplay; }

        /**
         * Method to get value of show info
         * @return true if should show info, else false
         */
        public boolean getShowInfo() { return this.showInfo; }

        /**
         * Method to show the turtle information string
         * @param value the value to set showInfo to
         */
        public void setShowInfo(boolean value) { this.showInfo = value; }

        /**
         * Method to get the shell color
         * @return the shell color
         */
        public Color getShellColor()
        {
          Color color = null;
          if (this.shellColor == null && this.bodyColor != null)
            color = bodyColor.darker();
          else color = this.shellColor;
          return color;
        }

        /**
         * Method to set the shell color
         * @param color the color to use
         */
        public void setShellColor(Color color) {  this.shellColor = color; }

        /**
         * Method to get the body color
         * @return the body color
         */
        public Color getBodyColor() { return this.bodyColor; }

        /**
         * Method to set the body color which
         * will also set the pen color
         * @param color the color to use
         */
        public void setBodyColor(Color color)
        {
          this.bodyColor = color;
          setPenColor(this.bodyColor);
        }

        /**
         * Method to set the color of the turtle.
         * This will set the body color
         * @param color the color to use
         */
        public void setColor(Color color) { this.setBodyColor(color); }

        /**
         * Method to get the information color
         * @return the color of the information string
         */
        public Color getInfoColor() { return this.infoColor; }

        /**
         * Method to set the information color
         * @param color the new color to use
         */
        public void setInfoColor(Color color) { this.infoColor = color; }

        /**
         * Method to return the width of this object
         * @return the width in pixels
         */
        public int getWidth() { return this.width; }

        /**
         * Method to return the height of this object
         * @return the height in pixels
         */
        public int getHeight() { return this.height; }

        /**
         * Method to set the width of this object
         * @param theWidth in width in pixels
         */
        public void setWidth(int theWidth) { this.width = theWidth; }

        /**
         * Method to set the height of this object
         * @param theHeight the height in pixels
         */
        public void setHeight(int theHeight) { this.height = theHeight; }

        /**
         * Method to get the current x position
         * @return the x position (in pixels)
         */
        public int getXPos() { return this.xPos; }

        /**
         * Method to get the current y position
         * @return the y position (in pixels)
         */
        public int getYPos() { return this.yPos; }

        /**
         * Method to get the pen
         * @return the pen
         */
        public Pen getPen() { return this.pen; }

        /**
         * Method to set the pen
         * @param thePen the new pen to use
         */
        public void setPen(Pen thePen) { this.pen = thePen; }

        /**
         * Method to check if the pen is down
         * @return true if down else false
         */
        public boolean isPenDown() { return this.pen.isPenDown(); }

        /**
         * Method to set the pen down boolean variable
         * @param value the value to set it to
         */
        public void setPenDown(boolean value) { this.pen.setPenDown(value); }

        /**
         * Method to lift the pen up
         */
        public void penUp() { this.pen.setPenDown(false);}

        /**
         * Method to set the pen down
         */
        public void penDown() { this.pen.setPenDown(true);}

        /**
         * Method to get the pen color
         * @return the pen color
         */
        public Color getPenColor() { return this.pen.getColor(); }

        /**
         * Method to set the pen color
         * @param color the color for the pen ink
         */
        public void setPenColor(Color color) { this.pen.setColor(color); }

        /**
         * Method to set the pen width
         * @param width the width to use in pixels
         */
        public void setPenWidth(int width) { this.pen.setWidth(width); }

        /**
         * Method to get the pen width
         * @return the width of the pen in pixels
         */
        public int getPenWidth() { return this.pen.getWidth(); }

        /**
         * Method to clear the path (history of
         * where the turtle has been)
         */
        public void clearPath()
        {
          this.pen.clearPath();
        }

        /**
         * Method to get the current heading
         * @return the heading in degrees
         */
        public double getHeading() { return this.heading; }

        /**
         * Method to set the heading
         * @param heading the new heading to use
         */
        public void setHeading(double heading)
        {
          this.heading = heading;
        }

        /**
         * Method to get the name of the turtle
         * @return the name of this turtle
         */
        public String getName() { return this.name; }

        /**
         * Method to set the name of the turtle
         * @param theName the new name to use
         */
        public void setName(String theName)
        {
          this.name = theName;
        }

        /**
         * Method to get the value of the visible flag
         * @return true if visible else false
         */
        public boolean isVisible() { return this.visible;}

        /**
         * Method to hide the turtle (stop showing it)
         * This doesn't affect the pen status
         */
        public void hide() { this.setVisible(false); }

        /**
         * Method to show the turtle (doesn't affect
         * the pen status
         */
        public void show() { this.setVisible(true); }

        /**
         * Method to set the visible flag
         * @param value the value to set it to
         */
        public void setVisible(boolean value)
        {
          // if the turtle wasn't visible and now is
          if (visible == false && value == true)
          {
            // update the display
            this.updateDisplay();
          }

          // set the visibile flag to the passed value
          this.visible = value;
        }

        /**
         * Method to update the display of this turtle and
         * also check that the turtle is in the bounds
         */
        public synchronized void updateDisplay()
        {
          // check that x and y are at least 0
          if (xPos < 0)
            xPos = 0;
          if (yPos < 0)
            yPos = 0;

          // if picture
          if (picture != null)
          {
            if (xPos >= picture.getWidth())
              xPos = picture.getWidth() - 1;
            if (yPos >= picture.getHeight())
              yPos = picture.getHeight() - 1;
            Graphics g = picture.getGraphics();
            paintComponent(g);
          }
          else if (modelDisplay != null)
          {
            if (xPos >= modelDisplay.getWidth())
              xPos = modelDisplay.getWidth() - 1;
            if (yPos >= modelDisplay.getHeight())
              yPos = modelDisplay.getHeight() - 1;
            modelDisplay.modelChanged();
          }
        }

        /**
         * Method to move the turtle foward 100 pixels
         */
        public void forward() { forward(100); }

        /**
         * Method to move the turtle forward the given number of pixels
         * @param pixels the number of pixels to walk forward in the heading direction
         */
        public void forward(int pixels)
        {
          int oldX = xPos;
          int oldY = yPos;

          // change the current position
          xPos = oldX + (int) (pixels * Math.sin(Math.toRadians(heading)));
          yPos = oldY + (int) (pixels * -Math.cos(Math.toRadians(heading)));

          // add a move from the old position to the new position to the pen
          pen.addMove(oldX,oldY,xPos,yPos);

          // update the display to show the new line
          updateDisplay();
        }

        /**
         * Method to go backward by 100 pixels
         */
        public void backward()
        {
          backward(100);
        }

        /**
         * Method to go backward a given number of pixels
         * @param pixels the number of pixels to walk backward
         */
        public void backward(int pixels)
        {
          forward(-pixels);
        }

        /**
         * Method to move to turtle to the given x and y location
         * @param x the x value to move to
         * @param y the y value to move to
         */
        public void moveTo(int x, int y)
        {
          this.pen.addMove(xPos,yPos,x,y);
          this.xPos = x;
          this.yPos = y;
          this.updateDisplay();
        }

        /**
         * Method to turn left
         */
        public void turnLeft()
        {
         this.turn(-90);
        }

        /**
         * Method to turn right
         */
        public void turnRight()
        {
          this.turn(90);
        }

        /**
         * Method to turn the turtle the passed degrees
         * use negative to turn left and pos to turn right
         * @param degrees the amount to turn in degrees
         */
        public void turn(double degrees)
        {
          this.heading = (heading + degrees) % 360;
          this.updateDisplay();
        }

        /**
         * Method to draw a passed picture at the current turtle
         * location and rotation in a picture or model display
         * @param dropPicture the picture to drop
         */
        public synchronized void drop(Picture dropPicture)
        {
          Graphics2D g2 = null;

          // only do this if drawing on a picture
          if (picture != null)
            g2 = (Graphics2D) picture.getGraphics();
          else if (modelDisplay != null)
            g2 = (Graphics2D) modelDisplay.getGraphics();

          // if g2 isn't null
          if (g2 != null)
          {

            // save the current tranform
            AffineTransform oldTransform = g2.getTransform();

            // rotate to turtle heading and translate to xPos and yPos
            g2.rotate(Math.toRadians(heading),xPos,yPos);

            // draw the passed picture
            g2.drawImage(dropPicture.getImage(),xPos,yPos,null);

            // reset the tranformation matrix
            g2.setTransform(oldTransform);

            //  draw the pen
            pen.paintComponent(g2);
          }
        }

        /**
         * Method to paint the turtle
         * @param g the graphics context to paint on
         */
        public synchronized void paintComponent(Graphics g)
        {
          // cast to 2d object
          Graphics2D g2 = (Graphics2D) g;

          // if the turtle is visible
          if (visible)
          {
            // save the current tranform
            AffineTransform oldTransform = g2.getTransform();

            // rotate the turtle and translate to xPos and yPos
            g2.rotate(Math.toRadians(heading),xPos,yPos);

            // determine the half width and height of the shell
            int halfWidth = (int) (width/2); // of shell
            int halfHeight = (int) (height/2); // of shell
            int quarterWidth = (int) (width/4); // of shell
            int thirdHeight = (int) (height/3); // of shell
            int thirdWidth = (int) (width/3); // of shell

            // draw the body parts (head)
            g2.setColor(bodyColor);
            g2.fillOval(xPos - quarterWidth,
                        yPos - halfHeight - (int) (height/3),
                        halfWidth, thirdHeight);
            g2.fillOval(xPos - (2 * thirdWidth),
                        yPos - thirdHeight,
                        thirdWidth,thirdHeight);
            g2.fillOval(xPos - (int) (1.6 * thirdWidth),
                        yPos + thirdHeight,
                        thirdWidth,thirdHeight);
            g2.fillOval(xPos + (int) (1.3 * thirdWidth),
                        yPos - thirdHeight,
                        thirdWidth,thirdHeight);
            g2.fillOval(xPos + (int) (0.9 * thirdWidth),
                        yPos + thirdHeight,
                        thirdWidth,thirdHeight);


            // draw the shell
            g2.setColor(getShellColor());
            g2.fillOval(xPos - halfWidth,
                        yPos - halfHeight, width, height);

            // draw the info string if the flag is true
            if (showInfo)
              drawInfoString(g2);

            // reset the tranformation matrix
            g2.setTransform(oldTransform);
          }

          //  draw the pen
          pen.paintComponent(g);
        }

        /**
         * Method to draw the information string
         * @param g the graphics context
         */
        public synchronized void drawInfoString(Graphics g)
        {
          g.setColor(infoColor);
          g.drawString(this.toString(),xPos + (int) (width/2),yPos);
        }

        /**
         * Method to return a string with informaiton
         * about this turtle
         * @return a string with information about this object
         */
        public String toString()
        {
          return this.name + " turtle at " + this.xPos + ", " +
            this.yPos + " heading " + this.heading + ".";
        }

      } // end of class
      import java.util.*;
      import java.awt.*;

      /**
       * Class that represents a turtle which is similar to a Logo turtle.
       * This class inherts from SimpleTurtle and is for students
       * to add methods to.
       *
       * Copyright Georgia Institute of Technology 2004
       * @author Barb Ericson ericson@cc.gatech.edu
       */
      @SuppressWarnings("unchecked")
      public class Turtle extends SimpleTurtle
      {
        ////////////////// constructors ///////////////////////

        /** Constructor that takes the x and y and a picture to
         * draw on
         * @param x the starting x position
         * @param y the starting y position
         * @param picture the picture to draw on
         */
        public Turtle (int x, int y, Picture picture)
        {
          // let the parent constructor handle it
          super(x,y,picture);
        }

        /** Constructor that takes the x and y and a model
         * display to draw it on
         * @param x the starting x position
         * @param y the starting y position
         * @param modelDisplayer the thing that displays the model
         */
        public Turtle (int x, int y,
                       ModelDisplay modelDisplayer)
        {
          // let the parent constructor handle it
          super(x,y,modelDisplayer);
        }

        /** Constructor that takes the model display
         * @param modelDisplay the thing that displays the model
         */
        public Turtle (ModelDisplay modelDisplay)
        {
          // let the parent constructor handle it
          super(modelDisplay);
        }

        /**
         * Constructor that takes a picture to draw on
         * @param p the picture to draw on
         */
        public Turtle (Picture p)
        {
          // let the parent constructor handle it
          super(p);
        }

        /////////////////// methods ///////////////////////


        public static void main(String[] args)
        {
          World earth = new World();
          Turtle t1 = new Turtle(earth);
          t1.forward();
        }

      } // this is the end of class Turtle, put all new methods before this
      /**
       * https://github.com/ha-shine/Giffer
       */
      import java.awt.Graphics2D;
      import java.awt.Image;
      import java.awt.image.BufferedImage;
      import java.io.File;
      import java.io.IOException;
      import java.util.Iterator;

      import javax.imageio.IIOException;
      import javax.imageio.IIOImage;
      import javax.imageio.ImageIO;
      import javax.imageio.ImageTypeSpecifier;
      import javax.imageio.ImageWriter;
      import javax.imageio.metadata.IIOInvalidTreeException;
      import javax.imageio.metadata.IIOMetadata;
      import javax.imageio.metadata.IIOMetadataNode;
      import javax.imageio.stream.ImageOutputStream;

      /*
       * Giffer is a simple java class to make my life easier in creating gif images.
       *
       * Usage :
       * There are two methods for creating gif images
       * To generate from files, just pass the array of filename Strings to this method
       * Giffer.generateFromFiles(String[] filenames, String output, int delay, boolean loop)
       *
       * Or as an alternative you can use this method which accepts an array of BufferedImage
       * Giffer.generateFromBI(BufferedImage[] images, String output, int delay, boolean loop)
       *
       * output is the name of the output file
       * delay is time between frames, accepts hundredth of a time. Yeah it's weird, blame Oracle
       * loop is the boolean for whether you want to make the image loopable.
       */

      public abstract class Giffer {

      	// Generate gif from an array of filenames
      	// Make the gif loopable if loop is true
      	// Set the delay for each frame according to the delay (ms)
      	// Use the name given in String output for output file
      	public static void generateFromFiles(String[] filenames, String output, int delay, boolean loop)
      		throws IIOException, IOException
      	{
      		int length = filenames.length;
      		BufferedImage[] img_list = new BufferedImage[length];

      		for (int i = 0; i < length; i++)
      		{
      			BufferedImage img = ImageIO.read(new File(filenames[i]));
      			img_list[i] = img;
      		}

      		generateFromBI(img_list, output, delay, loop);
      	}

      	// Generate gif from BufferedImage array
      	// Make the gif loopable if loop is true
      	// Set the delay for each frame according to the delay, 100 = 1s
      	// Use the name given in String output for output file
      	public static void generateFromBI(BufferedImage[] images, String output, int delay, boolean loop)
      			throws IIOException, IOException
      	{
      		int maxWidth = 0;
      		int maxHeight = 0;
      		ImageWriter gifWriter = getWriter();
      		ImageOutputStream ios = getImageOutputStream(output);
      		IIOMetadata metadata = getMetadata(gifWriter, delay, loop);

      		//Get bigger Width and Height
      		for (BufferedImage img: images)
      		{
      			if(img.getHeight() > maxHeight){
      				maxHeight = img.getHeight();
      			}
      			if(img.getWidth() > maxWidth){
      				maxWidth = img.getWidth();
      			}
      		}

      		gifWriter.setOutput(ios);
      		gifWriter.prepareWriteSequence(null);
      		for (BufferedImage img: images)
      		{
      			BufferedImage dimg = new BufferedImage(maxWidth, maxHeight, BufferedImage.TYPE_INT_ARGB);
      			Image tmp = img.getScaledInstance(img.getWidth(), img.getHeight(), Image.SCALE_DEFAULT);
      			Graphics2D g2d = dimg.createGraphics();
      			int centerWidth = (maxWidth / 2) - (img.getWidth()/2) ;
      			g2d.drawImage(tmp, centerWidth, 0, null);
      		    g2d.dispose();

      			IIOImage temp = new IIOImage(dimg, null, metadata);
      			gifWriter.writeToSequence(temp, null);
      		}

      		gifWriter.endWriteSequence();
      	}

      	// Retrieve gif writer
      	private static ImageWriter getWriter() throws IIOException
      	{
      		Iterator<ImageWriter> itr = ImageIO.getImageWritersByFormatName("gif");
      		if(itr.hasNext())
      			return (ImageWriter)itr.next();

      		throw new IIOException("GIF writer doesn't exist on this JVM!");
      	}

      	// Retrieve output stream from the given file name
      	private static ImageOutputStream getImageOutputStream(String output) throws IOException
      	{
      		File outfile = new File(output);
      		return ImageIO.createImageOutputStream(outfile);
      	}

      	// Prepare metadata from the user input, add the delays and make it loopable
      	// based on the method parameters
      	private static IIOMetadata getMetadata(ImageWriter writer, int delay, boolean loop)
      		throws IIOInvalidTreeException
      	{
      		// Get the whole metadata tree node, the name is javax_imageio_gif_image_1.0
      		// Not sure why I need the ImageTypeSpecifier, but it doesn't work without it
      		ImageTypeSpecifier img_type = ImageTypeSpecifier.createFromBufferedImageType(BufferedImage.TYPE_INT_ARGB);
      		IIOMetadata metadata = writer.getDefaultImageMetadata(img_type, null);
      		String native_format = metadata.getNativeMetadataFormatName();
      		IIOMetadataNode node_tree = (IIOMetadataNode)metadata.getAsTree(native_format);

      		// Set the delay time you can see the format specification on this page
      		// https://docs.oracle.com/javase/7/docs/api/javax/imageio/metadata/doc-files/gif_metadata.html
      		IIOMetadataNode graphics_node = getNode("GraphicControlExtension", node_tree);
      		graphics_node.setAttribute("delayTime", String.valueOf(delay));
      		graphics_node.setAttribute("disposalMethod", "none");
      		graphics_node.setAttribute("userInputFlag", "FALSE");

      		if(loop)
      			makeLoopy(node_tree);

      		metadata.setFromTree(native_format, node_tree);

      		return metadata;
      	}

      	// Add an extra Application Extension node if the user wants it to be loopable
      	// I am not sure about this part, got the code from StackOverflow
      	// TODO: Study about this
      	private static void makeLoopy(IIOMetadataNode root)
      	{
      		IIOMetadataNode app_extensions = getNode("ApplicationExtensions", root);
      		IIOMetadataNode app_node = getNode("ApplicationExtension", app_extensions);

      		app_node.setAttribute("applicationID", "NETSCAPE");
      		app_node.setAttribute("authenticationCode", "2.0");
      		app_node.setUserObject(new byte[]{ 0x1, (byte) (0 & 0xFF), (byte) ((0 >> 8) & 0xFF)});

      		app_extensions.appendChild(app_node);
      		root.appendChild(app_extensions);
      	}

      	// Retrieve the node with the name from the parent root node
      	// Append the node if the node with the given name doesn't exist
      	private static IIOMetadataNode getNode(String node_name, IIOMetadataNode root)
      	{
      		IIOMetadataNode node = null;

      		for (int i = 0; i < root.getLength(); i++)
      		{
      			if(root.item(i).getNodeName().compareToIgnoreCase(node_name) == 0)
      			{
      				node = (IIOMetadataNode) root.item(i);
      				return node;
      			}
      		}

      		// Append the node with the given name if it doesn't exist
      		node = new IIOMetadataNode(node_name);
      		root.appendChild(node);

      		return node;
      	}
      }
      import javax.swing.*;
      import java.util.List;
      import java.util.ArrayList;
      import java.util.Iterator;
      import java.util.Observer;
      import java.awt.*;

      import java.net.*;
      import java.io.*;
      // import javax.xml.bind.DatatypeConverter;
      // Using java.util.Base64 instead of javax.xml.bind
      import java.util.Base64;
      import javax.imageio.*;
      import java.awt.image.*;
      import javax.imageio.stream.*;


      /**
       * Class to represent a 2d world that can hold turtles and
       * display them
       *
       * Copyright Georgia Institute of Technology 2004
       * @author Barb Ericson ericson@cc.gatech.edu
       */
      @SuppressWarnings("unchecked")
      public class World implements ModelDisplay
      {
        ////////////////// fields ///////////////////////

        /** should automatically repaint when model changed */
        private boolean autoRepaint = true;

        /** the background color for the world */
        private Color background = Color.white;

        /** the width of the world */
        private int width = 640;

        /** the height of the world */
        private int height = 480;

        /** the list of turtles in the world */
        private List<Turtle> turtleList = new ArrayList<Turtle>();

        /** background picture */
        private Picture picture = null;

        /* All world changes*/
        private List<Picture> worldHistory = new ArrayList<Picture>();


        ////////////////// the constructors ///////////////

        /**
         * Constructor that takes no arguments
         */
        public World()
        {
          // set up the world and make it visible
          initWorld(true);
        }

        /**
         * Constructor that takes a boolean to
         * say if this world should be visible
         * or not
         * @param visibleFlag if true will be visible
         * else if false will not be visible
         */
        public World(boolean visibleFlag)
        {
          initWorld(visibleFlag);
        }

        /**
         * Constructor that takes a width and height for this
         * world
         * @param w the width for the world
         * @param h the height for the world
         */
        public World(int w, int h)
        {
          width = w;
          height = h;

          // set up the world and make it visible
          initWorld(true);
        }

        ///////////////// methods ///////////////////////////

        /**
         * Method to initialize the world
         * @param visibleFlag the flag to make the world
         * visible or not
         */
        private void initWorld(boolean visibleFlag)
        {
          // create the background picture
          picture = new Picture(width,height);
          this.modelChanged();
        }

        /**
         * Method to get the graphics context for drawing on
         * @return the graphics context of the background picture
         */
        public Graphics getGraphics() { return picture.getGraphics(); }

        /**
         * Method to clear the background picture
         */
        public void clearBackground() { picture = new Picture(width,height); }

        /**
         * Method to get the background picture
         * @return the background picture
         */
        public Picture getPicture() { return picture; }

        /**
         * Method to set the background picture
         * @param pict the background picture to use
         */
        public void setPicture(Picture pict) { picture = pict; }

        /**
         * Method to paint this component
         * @param g the graphics context
         */
        public synchronized void paintComponent(Graphics g)
        {
          Turtle turtle = null;

          // draw the background image
          g.drawImage(picture.getImage(),0,0,null);

          // loop drawing each turtle on the background image
          Iterator iterator = turtleList.iterator();
          while (iterator.hasNext())
          {
            turtle = (Turtle) iterator.next();
            turtle.paintComponent(g);
          }
        }

        /**
         * Metod to get the last turtle in this world
         * @return the last turtle added to this world
         */
        public Turtle getLastTurtle()
        {
          return (Turtle) turtleList.get(turtleList.size() - 1);
        }


        /**
         * Method to add a model to this model displayer
         * @param model the model object to add
         */
        public void addModel(Object model)
        {
          turtleList.add((Turtle) model);
        }

        /**
         * Method to check if this world contains the passed
         * turtle
         * @return true if there else false
         */
        public boolean containsTurtle(Turtle turtle)
        {
          return (turtleList.contains(turtle));
        }

        /**
         * Method to remove the passed object from the world
         * @param model the model object to remove
         */
        public void remove(Object model)
        {
          turtleList.remove(model);
        }

        /**
         * Method to get the width in pixels
         * @return the width in pixels
         */
        public int getWidth() { return width; }

        /**
         * Method to get the height in pixels
         * @return the height in pixels
         */
        public int getHeight() { return height; }

        /**
         * Method that allows the model to notify the display
         */
        public void modelChanged()
        {
           Picture p = new Picture(this.width, this.height);
           this.paintComponent(p.getGraphics());
           this.worldHistory.add(p);
        }

        /**
         * Method to set the automatically repaint flag
         * @param value if true will auto repaint
         */
        public void setAutoRepaint(boolean value) { autoRepaint = value; }

        /**
         * Method to show the frame
         */
        public void show()
       {
          this.show(false);
        }

        public void show(boolean showHistory) {
            this.paintComponent(this.picture.getGraphics());
            if(showHistory) {
                try {
                    BufferedImage[] images = new BufferedImage[this.worldHistory.size()];
                    for(int i = 0; i < this.worldHistory.size(); i++) {
                        images[i] = ((Picture) this.worldHistory.get(i)).getBufferedImage();
                    }
                    Giffer.generateFromBI(images, "history.gif", 100, false);

                    File history = new File("history.gif");

                    URL url = history.toURI().toURL();

                    byte[] imageBytes = downloadUrl(url);
                    String result =
		            //DatatypeConverter.printBase64Binary(imageBytes);
                    //BH: using java.util.Base64 instead of javax.xml.bind.DataTypeConverter
                    Base64.getEncoder().encodeToString(imageBytes);

		            System.gc();
                    history.delete();
                    double rand = Math.random();
                    System.out.println("&lt;img src=\'data:image/gif;base64," + result + "\'/>");

                } catch (IOException e) {
                    e.printStackTrace();
                }

            } else {
                this.picture.show();
            }
        }

        private byte[] downloadUrl(URL toDownload) {
          ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

          try {
              byte[] chunk = new byte[4096];
              int bytesRead;
              InputStream stream = toDownload.openStream();

              while ((bytesRead = stream.read(chunk)) > 0) {
                  outputStream.write(chunk, 0, bytesRead);
              }
              //toDownload.close();

          } catch (IOException e) {
              e.printStackTrace();
              return null;
          }

          return outputStream.toByteArray();
      }

        /**
         * Method to get the list of turtles in the world
         * @return a list of turtles in the world
         */
        public List getTurtleList()
        { return turtleList;}

        /**
         * Method to get an iterator on the list of turtles
         * @return an iterator for the list of turtles
         */
        public Iterator getTurtleIterator()
        { return turtleList.iterator();}

        /**
         * Method that returns information about this world
         * in the form of a string
         * @return a string of information about this world
         */
        public String toString()
        {
          return "A " + getWidth() + " by " + getHeight() +
            " world with " + turtleList.size() + " turtles in it.";
        }

      } // end of World class

      </pre>
      






