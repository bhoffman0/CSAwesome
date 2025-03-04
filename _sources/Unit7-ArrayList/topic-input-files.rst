.. include:: ../common.rst

.. qnum::
   :prefix: 7-9-
   :start: 1

|Time90|

Input Files (Optional)
=======================================

.. index::
   single: file
   single: input

Files are used to store data in software that we use every day. For example, when you play a game on your computer, your game progress is saved in a file. The next time you play that game, your game progress is loaded in from that file, so you can continue where you left off. In this lesson, you will learn how to read in data from a file in Java.

A **file** is storage for data that *persists* when the program is not running. The data in a file can be retrieved during program execution. For example in Unit 6, you created a ``SpellChecker`` class that reads in a dictionary file into an array of words, and a ``spellcheck`` method that uses this array to verify if a word is spelled correctly. Input files like the dictionary enable us to handle large amounts of data efficiently. Instead of manually entering data into our program every time it runs, we can store the data in a file and read it as needed. Another benefit of using files is the ability to separate the data from the code, allowing for more modular and flexible software design. 

Java ``File``, ``Scanner``, and ``IOException`` Classes
--------------------------------------------------------

One way to connect a file to a Java program is to use the ``File`` class from the ``java.io`` package. (The `io` stands for **input/output**). This was used in Java before version 7 and is used by the College Board. A newer library ``nio`` will be presented in the next sections.  (The ``nio`` stands for, wait for it, "`new` input/output".)

A file can be opened by creating a ``File`` object, using the name of the file or the complete path to the file, as the argument of the constructor, ``File(String str)``.

.. code-block:: java

   import java.io.*;
   ...
   File myFile = new File("data.txt");

After opening a file, the  ``Scanner`` class can be used to read in the data from the file line by line. The ``Scanner`` class is part of the ``java.util`` package and has a constructor that takes a ``File`` object as an argument to create an input stream from the file.

But what if you misspell the file name or the file does not exist? The ``Scanner`` constructor will throw a ``FileNotFoundException`` if it cannot find the file. This is a type of ``IOException``, which is a general error that is also thrown when the input does not match expectations.  We've seen other exceptions before, like ``ArrayIndexOutOfBoundsException`` and ``NullPointerException``. Exceptions are a way for Java to handle runtime errors that occur during program execution. When an exception is thrown, the program stops executing and the exception is *thrown* back to the calling method. If the exception is not handled, the program will terminate. Java uses ``try/catch`` blocks to handle exceptions, but you can use the ``throws`` keyword in the method header to indicate that the method may throw an exception instead of handling it there. The **throws IOException** statement is added to the end of the method header. Here is an example that sets up an input file in the main method and throws an exception. 

.. code-block:: java

   import java.io.*;
   import java.util.*;

   public class FileIO 
   {
                                             // Notice throws IOException here
      public static void main(String[] args) throws IOException
      {
         File myFile = new File("data.txt");
         Scanner scan = new Scanner(myFile);
         ...

         scan.close();
      }
   }

Try the following exercise to practice reading in a file. Notice the compiler error "unreported exception FileNotFoundException; must be caught or declared to be thrown". Add **throws IOException** to the end of the main method header to fix the error.


|CodingEx| **Coding Exercise**

.. activecode:: throws-exception-exercise
   :language: java
   :autograde: unittest
   :datafile: dictionary.txt

   Run the code below to see the error message. Add **throws** and the correct exception to the end of the main method header to fix the error.  
   ~~~~
   import java.io.*;
   import java.util.*;

   public class FileIO
   {
       public static void main(String[] args)
       {
           File myFile = new File("dictionary.txt");
           Scanner scan = new Scanner(myFile);
           System.out.println(
                   "The first word in the dictionary file is: " + scan.nextLine());
           scan.close();
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("FileIO");
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String expect = "The first word in the dictionary file is: a";
           boolean passed = getResults(expect, output, "Expected output from main");
           assertTrue(passed);
       }

       @Test
       public void fixedCode()
       {
           boolean passed = checkCodeContains("throws IOException", "throws IOException");
           assertTrue(passed);
       }
   }

Reading in Data with Scanner
-----------------------------

Once the file is opened, the data can be read using ``Scanner`` methods. For example, the method, ``nextLine`` will read the next line of input and returns it as a ``String``. Here are the methods used in the Scanner file to read all types of input: 

- ``Scanner(File f)`` the Scanner constructor that accepts a File for reading.
- ``boolean hasNext()`` returns true if there is a next item to read in the file or input source; false otherwise.
- ``String nextLine()`` returns the next line of text up until the end of the line as a String read from the file or input source; returns null if there is no next line.
- ``String next()`` returns the next String up until a white space read from the file or input source. 
- ``int nextInt()`` returns the next int read from the file or input source. If the next int does not exist, it will result in an ``InputMismatchException``. Note that this method does not read the end of the line, so the next call to ``nextLine()`` will return the rest of the line which will be empty.
- ``double nextDouble()`` returns the next double read from the file or input source.
- ``boolean nextBoolean()`` returns the next Boolean read from the file or input source.
- ``void close()`` closes the input stream.

After opening a file and connecting it to a ``Scanner`` object, a loop is usually used to read in each line of the file. A ``while`` loop can use the method ``hasNextLine`` as the loop condition to detect if the file still contains elements to
read. A loop with this condition will terminate when there are no more lines to read in the file. After the loop is finished reading the data, the ``close`` method from Scanner should be called to close the file.

.. code-block:: java

   while (scan.hasNextLine())
   {
      String line = scan.nextLine();
      ...
   }
   scan.close();

We can save a file into an array. In the ``SpellChecker`` class, we read the data file of words into a dictionary array with the following code. However, we had to know the number lines or words in the file to declare an array of the right size. 

.. code-block:: java

   String[] dictionary = new String[10000];
   int i = 0;
   while(scan.hasNextLine())
   {
        String line = scan.nextLine();
        dictionary[i] = line;
        i++;
    }

The following exercise reads in a data file about Pokemon and prints out the first 10 lines in the file. This file has the extension *csv* which stands for **Comma Separated Values**. All spreadsheets can be saved as CSV text files, and spreadsheet software can easily open CSV files as spreadsheets.

.. datafile:: pokemon.csv
   :fromfile: ../../_static/datasets/pokemon.csv

|CodingEx| **Coding Exercise**

.. activecode:: read-pokemon-file
   :language: java
   :autograde: unittest
   :datafile: pokemon.csv

   Complete the code in the main method below to read in the first 10 lines of the pokemon file using the Scanner class, save each line into the pokemonLines array, and print it out.  
   ~~~~
   import java.io.*;
   import java.util.*;

   public class ReadData 
   {
       public static void main(String[] args) throws IOException
       {
           File myFile = new File("pokemon.csv");
           Scanner scan = new Scanner(myFile);
           String[] pokemonLines = new String[10];

           int i = 0;
           // 1. Add in the loop condition that checks if scan has another line of input
           //    and that i is less than 10.
           while (         )
           {
               // 2. Read in the next line of the file

               // 3. Assign the line to the ith element of the pokemonLines array

               // 4. Print out the line

               i++; // line count
            }
            scan.close();           
      }
   }
   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("ReadData");
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String[] lines = output.split("\\s+");
           boolean passed = lines.length >= 10;

           passed =
                   getResults(
                           "10+ lines of output",
                           lines.length + " lines of output",
                           "Expected output",
                           passed);
           assertTrue(passed);
       }

       @Test
       public void arrayCode()
       {
           boolean passed = checkCodeContains("assignment to pokemonLines[i]", "pokemonLines[i]");
           assertTrue(passed);
       }
   }

Reading in Files with ``java.nio.file``
----------------------------------------  

The ``java.nio.file`` package, added in Java version 7, provides a better and easier way to read in files. The ``Files`` class in this package has a method called ``readAllLines`` that reads all of the lines in a file and returns them as a ``List`` of ``String`` objects. The ``readAllLines`` method throws an ``IOException`` if the file cannot be read. (``List`` is an **interface**. Interfaces are not on the AP CSA exam but are quite common in actual Java programming. For now all you need to know is that all the methods we've talked about using with ``ArrayList`` you can use on any ``List`` such as the one returned by ``readAllLines``.)

.. code-block:: java

   import java.nio.file.*;
   ...

   // This connects and reads in the file in 1 line of code!
   // It needs to be in a method that throws or handles IOException
   List<String> lines = Files.readAllLines(Paths.get("data.txt"));

Under the covers ``readAllLines`` is almost certainly using an ``ArrayList`` which is a kind of ``List``. The advantage of storing the lines in a dynamic data structure like an ``ArrayList``, instead of an array, is that you do not need to know how many lines you are going to store when you create the ``ArrayList`` the way you do when you create an array.  The ``ArrayList`` can then grow in size as needed. (If you absolutely need an array, you can convert the ``List`` to an array declared to be the correct size with  ``myArray = lines.toArray(myArray);``)

|CodingEx| **Coding Exercise**

.. activecode:: read-pokemon-file-nio
   :language: java
   :autograde: unittest
   :datafile: pokemon.csv

   Complete the code in the main method below to reads all lines of the file using ``Files.readAllLines`` into a ``List<String>`` named ``lines``. Add a loop that prints out the first 10 pokemon.  
   ~~~~
   import java.io.*;
   import java.nio.file.*;
   import java.util.*;

   public class ReadData
   {
       public static void main(String[] args) throws IOException
       {
           List<String> lines = Files.readAllLines(Paths.get("pokemon.csv"));
           // Add a loop that prints out the first 10 elements of the List lines
           // You can use the get method with Lists just like ArrayLists

       }
   }

   ====
   import static org.junit.Assert.*;
   import org.junit.*;
   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests() 
       {
           super("ReadData");
       }
   
       @Test
       public void testMain() throws IOException
       {
            String output = getMethodOutput("main");
            String[] lines = output.split("\\s+");
            boolean passed = lines.length >= 10;

            passed = getResults("10+ lines of output", lines.length + " lines of output", "Expected output", passed);
            assertTrue(passed);
       }
       @Test
       public void getMethodTest()
       {
          boolean passed = checkCodeContains("call to get method with lines", "lines.get");
          assertTrue(passed);
       }
    }



Object-Oriented Design with CSV Files
---------------------------------------------

.. image:: https://play.pokemonshowdown.com/sprites/bw/pikachu.png
   :width: 100px
   :align: left
   :alt: Pikachu

If you take a look at the Pokemon CSV file, you'll notice that each line contains multiple data attributes separated by commas. These attributes include each Pokemon's name, type, speed, etc. on each row. Typically, the first line of a CSV file serves as the header, indicating the names of these attributes. 

.. code=block:: text

   // The first line of the Pokemon CSV file
   Number, Pokemon, Type 1, Type 2, HP, Attack, Defense, Speed, PNG, Description


To better organize and work with this data, we can create a ``Pokemon`` class that corresponds to these attributes using object-oriented design. A CSV data file can be saved into an ``ArrayList`` of ``Pokemon`` objects by splitting each line (except the header) into the attributes for one ``Pokemon`` object.

The Java ``String`` class provides a useful method called ``split(String delimeter)`` that allows us to split a string into an array of substrings based on a specified **delimiter** which is a character like a comma that separates the units of data. This method returns a String array where each element in the array represents a field of data from the line.  Here is an example of how to use the split method to split a line of data from the Pokemon file into identifiable chunks of data. The first line of headers in the file indicates that the 0th element of the data array is the Pokemon's number, element 1 is the name, etc. We only need to save the data that we want to use. In this case, we want to save the name, type1, speed, and imageFile. If we want to do math with the speed, we can convert it to an int using the ``Integer.parseInt`` method.

.. code-block:: java

   // Split the line of data into an array of Strings
   String[] data = line.split(",");
   // Identify the data 
   // data: Number,Name,Type1,Type2,HP,Attack,Defense,Speed,PNG,Description 
   String name = data[1];
   String type1 = data[2];
   // Numerical data can be saved as numbers to do math     
   int speed = Integer.parseInt(data[7]);
   String imageFile = data[8];

Try the exercise below to display Pokemon images using the ``split`` method to extract names and urls saved in the file.

|CodingEx| **Coding Exercise**

.. activecode:: pokeImages
   :language: java
   :autograde: unittest
   :datafile: pokemon.csv

   **PokeImages:** This program reads in some of the data from the pokemon file into a List of lines. Complete the main method to print out a random pokemon name and its image using the split method.  
   ~~~~
   import java.io.*;
   import java.nio.file.*;
   import java.util.*;

   public class PokeImages
   {
       public static void main(String[] args) throws IOException
       {
           List<String> lines = Files.readAllLines(Paths.get("pokemon.csv"));
           // 1. pick a random number from 1 to the size of the List
           //    (don't use the 0th row which is the headers)

           // 2. get the line of data at that random index from the List lines

           // 3. Use the split method to split the line into a String array

           // 4. Print out the name. What is the index for the name in the split
           // array?

           // 5. Call the PokeImages.printHTMLimage method below
           //    with an element of the array to print out the image.
           //    What is the index for the image url in the array?

       }

       // This method will just work on Runestone to print out images
       public static void printHTMLimage(String url)
       {
           System.out.print("<img src=" + url + " width=300px />");
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("PokeImages");
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String[] lines = output.split("\\s+");
           boolean passed = lines.length >= 1;

           passed =
                   getResults(
                           "1+ lines of output",
                           lines.length + " lines of output",
                           "Expected output",
                           passed);
           assertTrue(passed);
       }

       @Test
       public void getMethodTest()
       {
           boolean passed = checkCodeContains("call to get method with lines", "lines.get");
           assertTrue(passed);
       }

       @Test
       public void splitCode()
       {
           boolean passed = checkCodeContains("call to split method", ".split");
           assertTrue(passed);
       }

       @Test
       public void imageCode()
       {
           boolean passed =
                   checkCodeContains("call to PokeImages.printHTMLimage", "PokeImages.printHTMLimage");
           assertTrue(passed);
       }

       @Test
       public void nameIndexCode()
       {
           boolean passed = checkCodeContains("the correct index for the name (1)", "[1]");
           assertTrue(passed);
       }

       @Test
       public void imageIndexCode()
       {
           boolean passed = checkCodeContains("the correct index for the image url (8)", "[8]");
           assertTrue(passed);
       }
   }

Once we have extracted the individual pieces of data from each line of the CSV file, the next step is to save this data into a ``Pokemon`` object. We must first create a ``Pokemon`` class with instance variables that correspond to the data attributes, and a constructor that initializes these variables. Assuming that we have already written the ``Pokemon`` class and constructor, the following code creates a Pokemon object from the data using its constructor and saves it into an ``ArrayList`` of ``Pokemon`` objects.

.. code-block:: java

    // Create an ArrayList of Pokemon objects
    ArrayList<Pokemon> pokemonList = new ArrayList<Pokemon>();

    // read in the file
    List<String> lines = Files.readAllLines(Paths.get("pokemon.csv"));

    // loop through each row (except the 0th header row) 
    for(int i = 1; i < lines.size(); i++)
    {
        // Get each line
        String line = lines.get(i);
        // Split each line into its attributes name, type1, etc.
        // ... split not shown....

        // Create a Pokemon object from the split data 
        Pokemon p = new Pokemon(name, type1, speed, imageFile);
        // Add the object to the ArrayList
        pokemonList.add(p);
    }


Let's try this code in the exercise below.

|CodingEx| **Coding Exercise**

.. activecode:: challenge-pokemon-file
   :language: java
   :datafile: pokemon.csv

   **Pokemon ArrayList:** Design the class Pokemon that has at least 3 attributes that can be found in the Pokemon file, including its name, type1, and imagefile, and any other attributes from the file that you would like. Write a constructor and getters for these attributes. Then, read in the data from the pokemon file, split each line, and save the data in an ``ArrayList`` of Pokemon objects. Write a ``findType`` method that loops through the ArrayList to find the Pokemon of a type given as the argument and prints out their names and images.  
   ~~~~
   import java.io.*;
   import java.nio.file.*;
   import java.util.*;

   class Pokemon
   {
       // Add at least 3 attributes of a Pokemon including name, type1, and imagefile

       // Add a constructor that initializes the attributes of a Pokemon
       //  to the values given as arguments

       // Add getters for the attributes
   }

   public class PokemonArrayList
   {
       private ArrayList<Pokemon> pokemonList = new ArrayList<Pokemon>();

       // Write a method to read in the data (it may throw an exception).
       // Loop through each row to split it into attributes.
       //     Create a new Pokemon object from the attributes.
       //     and save it into the pokemonList

       // Write a findType method that print out all the
       // Pokemon of a certain type given as an argument.
       // This method can call printHTMLimage(url) defined below.

       // This method will just work on Runestone to print out images
       public static void printHTMLimage(String url)
       {
           System.out.print("<img src=" + url + " width=300px />");
       }

       public static void main(String[] args) throws IOException
       {
           PokemonArrayList obj = new PokemonArrayList();
           // Call your method to read in the data

           // Call your method to find all the Pokemon of a certain type
           // obj.findType("Grass");
       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       public RunestoneTests()
       {
           super("PokemonArrayList");
       }

       @Test
       public void testPrivateVariables()
       {
           String code = getCode();
           int count = countOccurences(code, "private");
           boolean passed = count >= 3;
           getResults("3", count + "", "Number of private instance variables", passed);
           assertTrue(passed);
       }

       @Test
       public void testConstructor()
       {
           boolean passed = checkCodeContains("Pokemon constructor", "public Pokemon(");
           assertTrue(passed);
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String[] lines = output.split("\\s+");
           boolean passed = lines.length >= 2;

           passed =
                   getResults(
                           "2+ lines of output",
                           lines.length + " lines of output",
                           "Expected output",
                           passed);
           assertTrue(passed);
       }

       @Test
       public void splitCode()
       {
           boolean passed = checkCodeContains("call to split method", ".split");
           assertTrue(passed);
       }

       @Test
       public void addCode()
       {
           boolean passed = checkCodeContains("call to pokemonList.add", ".add");
           assertTrue(passed);
       }

       @Test
       public void countForLoops()
       {
           String code = removeSpaces(getCode());
           int count = countOccurences(code, "for");
           boolean passed = count >= 2;
           getResults("2", count + "", "For loops used in 2 methods", passed);
           assertTrue(passed);
       }

       @Test
       public void testFindTypeHeader()
       {
           boolean passed =
                   checkCodeContains(
                           "public void findType method with a String argument",
                           "public void findType(String");
           assertTrue(passed);
       }
   }

|Groupwork| Programming Challenge: ArrayList of Objects from Input File
------------------------------------------------------------------------

Let's end with a challenge that combines all the skills you have learned so far. You could work in pairs for this challenge. Choose a dataset from the files below to read into an ``ArrayList`` of objects. Look at the columns of the dataset you have chosen to decide on the name and at least 3 attributes for your class. Each row in the data file will be an object of your class that you will add to the ``ArrayList``. If you find another data CSV file online that you would like to use, you can read from a URL instead of a file in Java using the ``java.net`` package following the directions here https://docs.oracle.com/javase/tutorial/networking/urls/readingURL.html.

.. datafile:: WorldIndicators2000.csv
   :fromfile: ../../_static/datasets/WorldIndicators2000.csv

.. datafile:: StateData2020-CDC-Census.csv
   :fromfile: ../../_static/datasets/StateData2020-CDC-Census.csv

After you have chosen an input file, use the Pokemon exercise in the section above as a guide to:

1. Design a class for the input file that you have chosen. Choose at least 3 attributes that can be found in the file for your class. Write a constructor that takes in these attributes as parameters and saves them into instance variables. You may need to add some getters and a ``toString`` method as well.

2. Declare an ``ArrayList`` of your class type.

3. Read in the data from the file. You can use ``Files.readAllLines`` or the ``Scanner`` class. 

4. Inside a loop, split each line into its attributes and create an object for your class using its constructor. Add the object to the ``ArrayList``. 

5. Do something interesting with the data using a loop, for example you could find the maximum or minimum value of an attribute or print out all the objects that have the same attribute value. 

.. activecode:: challenge-file
   :language: java
   :datafile: pokemon.csv, WorldIndicators2000.csv, StateData2020-CDC-Census.csv

   **Input File Challenge:** Design the class for your input file that has at least 3 attributes that can be found in the file. Then, read in the data from the file, split each line, and save the data in an ``ArrayList`` of objects. Finally, do something interesting with the data using a loop, for example you could find the object with the max or min attribute value or print out all the objects of a certain attribute value.
   ~~~~
   import java.io.*;
   import java.nio.file.*;
   import java.util.*;

   /* Change this class name to a meaningful name for one record from the dataset. */
   class OneItem
   {
       // Add at least 3 attributes found in the data file

       // Add a constructor that initializes the attributes

       // Add any getters and toString methods that you need

   }

   /* Change this class name to a meaningful name for the whole dataset. */
   public class Data
   {
       // Declare an ArrayList of your class type

       // Write a method to read in the data (it may throw an exception).
       // Loop through each row to split it into attributes.
       //     Create a new  object from the attributes.
       //     and save it into the ArrayList.

       // Write a method that does something with the data
       // for example find the object with a min or max attribute value
       // or print out all the objects of a certain attribute value.

       public static void main(String[] args) throws IOException
       {
           Data obj = new Data(); // change to your class name
           // Call your method to read in the data

           // Call your method to do something with the data

       }
   }

   ====
   import static org.junit.Assert.*;

   import org.junit.*;

   import java.io.*;

   public class RunestoneTests extends CodeTestHelper
   {
       @Test
       public void testPrivateVariables()
       {
           String code = getCode();
           int count = countOccurences(code, "private");
           boolean passed = count >= 3;
           getResults("3", count + "", "Number of private instance variables", passed);
           assertTrue(passed);
       }

       @Test
       public void testMain() throws IOException
       {
           String output = getMethodOutput("main");
           String[] lines = output.split("\\s+");
           boolean passed = lines.length >= 2;

           passed =
                   getResults(
                           "2+ lines of output",
                           lines.length + " lines of output",
                           "Expected output",
                           passed);
           assertTrue(passed);
       }

       @Test
       public void splitCode()
       {
           boolean passed = checkCodeContains("call to split method", ".split");
           assertTrue(passed);
       }

       @Test
       public void addCode()
       {
           boolean passed = checkCodeContains("call to add to ArrayList", ".add");
           assertTrue(passed);
       }

       @Test
       public void countForLoops()
       {
           String code = removeSpaces(getCode());
           int count = countOccurences(code, "for(");
           boolean passed = count >= 2;
           getResults("2", count + "", "For loops used in 2 methods", passed);
           assertTrue(passed);
       }
   }

