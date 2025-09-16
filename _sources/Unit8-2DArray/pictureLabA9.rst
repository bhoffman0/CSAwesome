.. include:: ../common.rst

|Time90|

Picture Lab A9: Simple Edge Detection
=====================================================

Edge Detection
---------------

Detecting edges is a common image processing problem. For example, digital cameras often feature face
detection. Some robotic competitions require the robots to find a ball using a digital camera, so the robot
needs to be able to “see” a ball.
One way to look for an edge in a picture is to compare the color at the current pixel with the pixel in the
next column to the right. If the colors differ by more than some specified amount, this indicates that an
edge has been detected and the current pixel color should be set to black. Otherwise, the current pixel is
not part of an edge and its color should be set to white (Figure 1).


.. figure:: Figures/picturelabedge.png
    :width: 450px
    :align: center
    :figclass: align-center

    Figure 1: Original picture and after edge detection


How do you calculate the difference
between two colors? The formula for the difference between two points (x1,y1) and (x2,y2) is the square
root of ((x2 - x1)\ :sup:`2` + (y2 - y1)\ :sup:`2` ). The difference between two colors (red1,green1,blue1) and (red2,green2,blue2)
is the square root of ((red2 - red1)\ :sup:`2` +(green2 - green1)\ :sup:`2` +(blue2 - blue1)\ :sup:`2`
). The colorDistance
method in the Pixel class uses this calculation to return the difference between the current pixel
color and a passed color.


The following method implements this simple algorithm. Notice that the nested for loop stops earlier
than when it reaches the number of columns. That is because in the nested loop the current color is
compared to the color at the pixel in the next column. If the loop continued to the last column this
would cause an out-of-bounds error.

.. code-block:: java

 public void edgeDetection(int edgeDist)
 {
      Pixel leftPixel = null;
      Pixel rightPixel = null;
      Pixel[][] pixels = this.getPixels2D();
      Color rightColor = null;
      for (int row = 0; row < pixels.length; row++)
      {
           for (int col = 0; col < pixels[0].length-1; col++)
           {
                leftPixel = pixels[row][col];
                rightPixel = pixels[row][col+1];
                rightColor = rightPixel.getColor();
                if (leftPixel.colorDistance(rightColor) > edgeDist)
                    leftPixel.setColor(Color.BLACK);
                else
                    leftPixel.setColor(Color.WHITE);
           }
      }
 }

You can test this with the ``edgeDetection`` method below.

.. activecode:: picture-lab-A9-edgeDetection
    :language: java
    :autograde: unittest
    :datafile: pictureClasses.jar, swan.jpg, temple2.jpg

    Picture Lab A9: Run to see edgeDetection working.
    ~~~~
    import java.awt.*;
    import java.awt.font.*;
    import java.awt.geom.*;
    import java.awt.image.BufferedImage;
    import java.text.*;
    import java.util.*;

    /**
     * A class that represents a picture. This class inherits from SimplePicture and
     * allows the student to add functionality to the Picture class.
     *
     * @author Barbara Ericson ericson@cc.gatech.edu
     */
    public class Picture extends SimplePicture
    {
        ///////////////////// constructors //////////////////////////////////

        /** Constructor that takes no arguments */
        public Picture()
        {
            /* not needed but use it to show students the implicit call to super()
             * child constructors always call a parent constructor
             */
            super();
        }

        /**
         * Constructor that takes a file name and creates the picture
         *
         * @param fileName the name of the file to create the picture from
         */
        public Picture(String fileName)
        {
            // let the parent class handle this fileName
            super(fileName);
        }

        /**
         * Constructor that takes the height and width
         *
         * @param height the height of the desired picture
         * @param width the width of the desired picture
         */
        public Picture(int height, int width)
        {
            // let the parent class handle this width and height
            super(width, height);
        }

        /**
         * Constructor that takes a picture and creates a copy of that picture
         *
         * @param copyPicture the picture to copy
         */
        public Picture(Picture copyPicture)
        {
            // let the parent class do the copy
            super(copyPicture);
        }

        /**
         * Constructor that takes a buffered image
         *
         * @param image the buffered image to use
         */
        public Picture(BufferedImage image)
        {
            super(image);
        }

        ////////////////////// methods ///////////////////////////////////////

        /**
         * Method to return a string with information about this picture.
         *
         * @return a string with information about the picture such as fileName, height
         *     and width.
         */
        public String toString()
        {
            String output =
                    "Picture, filename "
                            + getFileName()
                            + " height "
                            + getHeight()
                            + " width "
                            + getWidth();
            return output;
        }

        public void edgeDetection(int edgeDist)
        {
            Pixel leftPixel = null;
            Pixel rightPixel = null;
            Pixel[][] pixels = this.getPixels2D();
            Color rightColor = null;
            for (int row = 0; row < pixels.length; row++)
            {
                for (int col = 0; col < pixels[0].length - 1; col++)
                {
                    leftPixel = pixels[row][col];
                    rightPixel = pixels[row][col + 1];
                    rightColor = rightPixel.getColor();
                    if (leftPixel.colorDistance(rightColor) > edgeDist)
                        leftPixel.setColor(Color.BLACK);
                    else leftPixel.setColor(Color.WHITE);
                }
            }
        }

        /* Main method for testing
         */
        public static void main(String[] args)
        {
            // You can also try temple2.jpg
            Picture pict = new Picture("swan.jpg");
            pict.show();
            pict.edgeDetection(12);
            pict.show();
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void test1()
        {
            String target = "public void edgeDetection(";
            boolean passed = checkCodeContains("edgeDetection( method", target);
            assertTrue(passed);
        }
    }

|CodingEx| **Coding Exercises**


1. Notice that the current edge detection method works best when there are big color changes from
left to right but not when the changes are from top to bottom. Add another nested loop that compares
the current pixel with the pixel below it and sets the current pixel color to black as well when the
color distance is greater than the specified edge distance.

.. activecode:: picture-lab-A9-edgeDetection2
    :language: java
    :autograde: unittest
    :datafile: pictureClasses.jar, swan.jpg, temple2.jpg

    Picture Lab A9: Improve the edgeDetection method by adding another nested loop that compares the current pixel with the pixel below it and sets the current pixel color to black as well, when the color distance is greater than the specified edge distance.
    ~~~~
    import java.awt.*;
    import java.awt.font.*;
    import java.awt.geom.*;
    import java.awt.image.BufferedImage;
    import java.text.*;
    import java.util.*;

    /**
     * A class that represents a picture. This class inherits from SimplePicture and
     * allows the student to add functionality to the Picture class.
     *
     * @author Barbara Ericson ericson@cc.gatech.edu
     */
    public class Picture extends SimplePicture
    {
        ///////////////////// constructors //////////////////////////////////

        /** Constructor that takes no arguments */
        public Picture()
        {
            /* not needed but use it to show students the implicit call to super()
             * child constructors always call a parent constructor
             */
            super();
        }

        /**
         * Constructor that takes a file name and creates the picture
         *
         * @param fileName the name of the file to create the picture from
         */
        public Picture(String fileName)
        {
            // let the parent class handle this fileName
            super(fileName);
        }

        /**
         * Constructor that takes the height and width
         *
         * @param height the height of the desired picture
         * @param width the width of the desired picture
         */
        public Picture(int height, int width)
        {
            // let the parent class handle this width and height
            super(width, height);
        }

        /**
         * Constructor that takes a picture and creates a copy of that picture
         *
         * @param copyPicture the picture to copy
         */
        public Picture(Picture copyPicture)
        {
            // let the parent class do the copy
            super(copyPicture);
        }

        /**
         * Constructor that takes a buffered image
         *
         * @param image the buffered image to use
         */
        public Picture(BufferedImage image)
        {
            super(image);
        }

        ////////////////////// methods ///////////////////////////////////////

        /**
         * Method to return a string with information about this picture.
         *
         * @return a string with information about the picture such as fileName, height
         *     and width.
         */
        public String toString()
        {
            String output =
                    "Picture, filename "
                            + getFileName()
                            + " height "
                            + getHeight()
                            + " width "
                            + getWidth();
            return output;
        }

        /**
         * Add another nested loop that compares the current pixel with the pixel below
         * it and sets the current pixel color to black as well when the color distance
         * is greater than the specified edge distance.
         */
        public void edgeDetection(int edgeDist)
        {
            Pixel leftPixel = null;
            Pixel rightPixel = null;
            Pixel[][] pixels = this.getPixels2D();
            Color rightColor = null;
            for (int row = 0; row < pixels.length; row++)
            {
                for (int col = 0; col < pixels[0].length - 1; col++)
                {
                    leftPixel = pixels[row][col];
                    rightPixel = pixels[row][col + 1];
                    rightColor = rightPixel.getColor();
                    if (leftPixel.colorDistance(rightColor) > edgeDist)
                        leftPixel.setColor(Color.BLACK);
                    else leftPixel.setColor(Color.WHITE);
                }
            }
        }

        /* Main method for testing
         */
        public static void main(String[] args)
        {
            // You can also try temple2.jpg
            Picture pict = new Picture("swan.jpg");
            pict.show();
            pict.edgeDetection(12);
            pict.show();
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void test1()
        {
            String target = "public void edgeDetection(";
            boolean passed = checkCodeContains("edgeDetection method", target);
            assertTrue(passed);
        }

        @Test
        public void test3()
        {
            String target = "for";
            String code = getCode();
            int index = code.indexOf("public void edgeDetection(");
            boolean passed = false;
            if (index > 0)
            {
                code = code.substring(index);
                int num = countOccurences(code, target);
                passed = num >= 4;
            }
            getResults(
                    "true",
                    "" + passed,
                    "Checking that edgeDetection contains 4 (2 nested) for loops",
                    passed);
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            String target = "colorDistance";
            String code = getCode();
            int index = code.indexOf("public void edgeDetection(");
            boolean passed = false;
            if (index > 0)
            {
                code = code.substring(index);
                int num = countOccurences(code, target);
                passed = num >= 2;
            }
            getResults(
                    "true",
                    "" + passed,
                    "Checking that edgeDetection calls colorDistance twice",
                    passed);
            assertTrue(passed);
        }
    }

2. Work in groups to come up with another algorithm for edge detection and test it below.


.. activecode:: picture-lab-A9-myEdgeDetection
    :language: java
    :autograde: unittest
    :datafile: pictureClasses.jar, swan.jpg, temple2.jpg

    Picture Lab A9: Come up with another algorithm for edgeDetection in a method called myEdgeDetection.
    ~~~~
    import java.awt.*;
    import java.awt.font.*;
    import java.awt.geom.*;
    import java.awt.image.BufferedImage;
    import java.text.*;
    import java.util.*;

    /**
     * A class that represents a picture. This class inherits from SimplePicture and
     * allows the student to add functionality to the Picture class.
     *
     * @author Barbara Ericson ericson@cc.gatech.edu
     */
    public class Picture extends SimplePicture
    {
        ///////////////////// constructors //////////////////////////////////

        /** Constructor that takes no arguments */
        public Picture()
        {
            /* not needed but use it to show students the implicit call to super()
             * child constructors always call a parent constructor
             */
            super();
        }

        /**
         * Constructor that takes a file name and creates the picture
         *
         * @param fileName the name of the file to create the picture from
         */
        public Picture(String fileName)
        {
            // let the parent class handle this fileName
            super(fileName);
        }

        /**
         * Constructor that takes the height and width
         *
         * @param height the height of the desired picture
         * @param width the width of the desired picture
         */
        public Picture(int height, int width)
        {
            // let the parent class handle this width and height
            super(width, height);
        }

        /**
         * Constructor that takes a picture and creates a copy of that picture
         *
         * @param copyPicture the picture to copy
         */
        public Picture(Picture copyPicture)
        {
            // let the parent class do the copy
            super(copyPicture);
        }

        /**
         * Constructor that takes a buffered image
         *
         * @param image the buffered image to use
         */
        public Picture(BufferedImage image)
        {
            super(image);
        }

        ////////////////////// methods ///////////////////////////////////////

        /**
         * Method to return a string with information about this picture.
         *
         * @return a string with information about the picture such as fileName, height
         *     and width.
         */
        public String toString()
        {
            String output =
                    "Picture, filename "
                            + getFileName()
                            + " height "
                            + getHeight()
                            + " width "
                            + getWidth();
            return output;
        }

        public void edgeDetection(int edgeDist)
        {
            Pixel leftPixel = null;
            Pixel rightPixel = null;
            Pixel[][] pixels = this.getPixels2D();
            Color rightColor = null;
            for (int row = 0; row < pixels.length; row++)
            {
                for (int col = 0; col < pixels[0].length - 1; col++)
                {
                    leftPixel = pixels[row][col];
                    rightPixel = pixels[row][col + 1];
                    rightColor = rightPixel.getColor();
                    if (leftPixel.colorDistance(rightColor) > edgeDist)
                        leftPixel.setColor(Color.BLACK);
                    else leftPixel.setColor(Color.WHITE);
                }
            }
        }

        /**
         * Come up with another algorithm for edgeDetection in a method called
         * myEdgeDetection
         */

        /* Main method for testing
         */
        public static void main(String[] args)
        {
            // You can also try temple2.jpg
            Picture pict = new Picture("swan.jpg");
            pict.show();
            pict.myEdgeDetection();
            pict.show();
        }
    }

    ====
    import static org.junit.Assert.*;

    import org.junit.*;

    import java.io.*;

    public class RunestoneTests extends CodeTestHelper
    {
        @Test
        public void test1()
        {
            String target = "public void myEdgeDetection(";
            boolean passed = checkCodeContains("myEdgeDetection( method", target);
            assertTrue(passed);
        }

        @Test
        public void test3()
        {
            String target = "for";
            String code = getCode();
            int index = code.indexOf("public void myEdgeDetection(");
            boolean passed = false;
            if (index > 0)
            {
                code = code.substring(index);
                int num = countOccurences(code, target);
                passed = num >= 2;
            }
            getResults(
                    "true",
                    "" + passed,
                    "Checking that myEdgeDetection contains at least 2 for loops",
                    passed);
            assertTrue(passed);
        }

        @Test
        public void test2()
        {
            String target = "colorDistance";
            String code = getCode();
            int index = code.indexOf("public void myEdgeDetection(");
            boolean passed = false;
            if (index > 0)
            {
                code = code.substring(index);
                int num = countOccurences(code, target);
                passed = num >= 1;
            }
            getResults(
                    "true",
                    "" + passed,
                    "Checking that myEdgeDetection calls colorDistance at least once",
                    passed);
            assertTrue(passed);
        }
    }

.. |replit.com project| raw:: html

   <a href= "https://replit.com/@BerylHoffman/Picture-Lab" style="text-decoration:underline" target="_blank" >replit.com Swing project</a>

.. |repl 2| raw:: html

   <a href= "https://firewalledreplit.com/@jds7184/PictureLab" style="text-decoration:underline" target="_blank" >alternative replit.com project</a>



Choose from these images in this lesson.  To use your own images, you can fork this |replit.com project| or this |repl 2| (click output.jpg to see the result) or download the project files form replit to your own IDE.

.. datafile:: swan.jpg
   :image:
   :fromfile: Figures/swan.jpg

.. datafile:: temple2.jpg
   :image:
   :fromfile: Figures/temple.jpg


How image processing is related to new scientific breakthroughs
-----------------------------------------------------------------

.. image:: Figures/CeciliaAragon.png


Many of today’s important scientific breakthroughs are being made by large, interdisciplinary
collaborations of scientists working in geographically widely distributed locations, producing, collecting,
and analyzing vast and complex datasets.

One of the computer scientists who works on a large interdisciplinary
scientific team is Dr. Cecilia Aragon. She is an associate professor in the
Department of Human Centered Design & Engineering and the eScience
Institute at the University of Washington, where she directs the Scientific
Collaboration and Creativity Lab. Previously, she was a computer scientist in
the Computational Research Division at Lawrence Berkeley National
Laboratory for six years, after earning her Ph.D. in Computer Science from
UC Berkeley in 2004. She earned her B.S. in mathematics from the California
Institute of Technology.

Her current research focuses on human-computer interaction (HCI) and computer-supported
cooperative work (CSCW) in scientific collaborations, distributed creativity, information visualization,
and the visual understanding of very large data sets. She is interested in how social media and new
methods of computer-mediated communication are changing scientific practice. She has developed
novel visual interfaces for collaborative exploration of very large scientific data sets, and has authored
or co-authored many papers in the areas of computer-supported cooperative work, human-computer
interaction, visualization, visual analytics, image processing, machine learning, cyberinfrastructure,
and astrophysics.

In 2008, she received the Presidential Early Career Award for Scientists and Engineers (PECASE) for her
work in collaborative data-intensive science. Her research has been recognized with four Best Paper
awards since 2004, and she was named one of the Top 25 Women of 2009 by Hispanic Business
Magazine. She was the architect of the Sunfall data visualization and workflow management system for
the Nearby Supernova Factory, which helped advance the study of supernovae in order to reduce the
statistical uncertainties on key cosmological parameters that categorize dark energy, one of the grand
challenges in physics today.

Cecilia Aragon is also one of the most skilled aerobatic pilots flying today.
A two-time member of the U.S. Aerobatic Team, she was a medalist at the
1993 U.S. National Championships and the 1994 World Aerobatic
Championships, and was the California State Aerobatic Champion.


Steganography Lab
------------------

.. |Steganography lab| raw:: html

   <a href= "https://drive.google.com/file/d/1pa5-KLRRE-5awoqnbPQd1yhqCaoPv_n4/view?usp=sharing" style="text-decoration:underline" target="_blank" >Steganography Lab</a>

If you enjoyed this lab and have time, continue on with the |Steganography lab| that explores hiding messages in images.
