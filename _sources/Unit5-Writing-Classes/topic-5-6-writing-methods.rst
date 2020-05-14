.. qnum::
   :prefix: 5-6-
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
    single: return
    single: parameter
    single: argument
    single: abstraction
    pair: method; parameter
    pair: method; argument
    pair: method; return 
    
Writing Methods
=================

Up until this unit, you wrote all your code in the main method, but now we are using lots of methods. Why have multiple methods instead of just one? **Procedural Abstraction** allows us to name a block of code as a method and call it whenever we need it, abstracting away the details of how it works.  This serves to organize our code by function and reduce its complexity and reduce the repetition of code. In addition, it helps with debugging and maintenance since changes to that block of code only need to happen in one place. Here are some of the main reasons to use multiple methods in your programs:

- Organization and Reducing Complexity: organize your program into small sections of code by function to reduce its complexity. Divide a problem into subproblems to solve it a piece at a time.
- Reusing Code: avoid repetition of code. Reuse code by putting it in a method and calling it whenever needed.
- Maintainability and Debugging: smaller methods are easier to debug and understand than searching through a large main method.

Let's look at an example with lots of repetition of code and create methods to reduce the repetition of code. 



|Exercise| Check Your Understanding

.. clickablearea:: repeatedcode
    :question: Click on all the lines that are completely identical and repeated.
    :iscode:
    :feedback: Look for lines that are completely identical.  

    :click-incorrect:public static void main(String args[]) {:endclick:
        :click-incorrect:System.out.println("This old man, he played one.");:endclick:
        :click-incorrect:System.out.println("He played knick knack on my thumb. ");:endclick:
        :click-correct:System.out.println("With a knick knack paddy whack, give a dog a bone.");:endclick:
        :click-correct:System.out.println("This old man came rolling home.");:endclick:
        :click-incorrect:System.out.println("This old man, he played two.");:endclick:
        :click-incorrect:System.out.println("He played knick knack on my shoe. ");:endclick:
        :click-correct:System.out.println("With a knick knack paddy whack, give a dog a bone.");:endclick:
        :click-correct:System.out.println("This old man came rolling home.");:endclick:
    :click-incorrect:}:endclick:
            
Did you find some repeated lines of the This Old Man song? You may have noticed that the chorus is repeated "With a knick knack paddy whack, give a dog a bone. This old man came rolling home." When you see repeated code, that is a signal for you to make a new method!

There are three steps to creating and calling a method:

1. **Object of the Class**: Declare an object of your class in the main method or from outside the class.

    .. code-block:: java

       // Step 1: declare an object in main or from outside the class
       Classname objectName = new Classname(); 

2. **Method Call**: whenever you want to use the method, call objectName.methodName(); 

    .. code-block:: java

       // Step 2: call the object's method
       objectName.methodName(); //Step 2

3. **Method Definition**:  write the method's **header** and **body** code like below: 

    .. code-block:: java

        // Step 3: Define the method in the class
        // method header
        public void methodName() 
        { 
              // method body for the code
        }

For example, here is a chorus() method definition that we could write for the "This Old Man Song":

.. code-block:: java
     
        public void chorus() 
        { 
              System.out.println("With a knick knack paddy whack, give a dog a bone.");
              System.out.println("This old man came rolling home.");
        }
        

.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public%20class%20Song%20%0A%20%20%7B%20%0A%20%20%20%20//%20The%20chorus%20method%0A%20%20%20%20public%20void%20chorus%28%29%20%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20System.out.println%28%22With%20a%20knick%20knack%20paddy%20whack,%20give%20a%20dog%20a%20bone.%22%29%3B%0A%20%20%20%20%20%20%20System.out.println%28%22This%20old%20man%20came%20rolling%20home.%22%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20public%20static%20void%20main%28String%20args%5B%5D%29%20%0A%20%20%20%20%7B%0A%20%20%20%20%20%20Song%20mySong%20%3D%20new%20Song%28%29%3B%0A%20%20%20%20%20%20System.out.println%28%22This%20old%20man,%20he%20played%20one.%22%29%3B%0A%20%20%20%20%20%20System.out.println%28%22He%20played%20knick%20knack%20on%20my%20thumb.%20%22%29%3B%0A%20%20%20%20%20%20mySong.chorus%28%29%3B%0A%0A%20%20%20%20%20%20System.out.println%28%22This%20old%20man,%20he%20played%20two.%22%29%3B%0A%20%20%20%20%20%20System.out.println%28%22He%20played%20knick%20knack%20on%20my%20shoe.%20%22%29%3B%0A%20%20%20%20%20%20mySong.chorus%28%29%3B%0A%20%20%20%20%7D%0A%20%20%7D&cumulative=false&curInstr=22&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>
   
|CodingEx| **Coding Exercise**


.. activecode:: Song1
  :language: java

  Run the following code to see the song This Old Man print out. Can you change the last two lines in the second verse to call the chorus() method instead? You can also see this code run in the |Java visualizer|.
  ~~~~
  public class Song 
  { 
    // The chorus method
    public void chorus() 
    {
       System.out.println("With a knick knack paddy whack, give a dog a bone.");
       System.out.println("This old man came rolling home.");
    }
    
    public static void main(String args[]) 
    {
      Song mySong = new Song();
      System.out.println("This old man, he played one.");
      System.out.println("He played knick knack on my thumb. ");
      mySong.chorus();

      System.out.println("This old man, he played two.");
      System.out.println("He played knick knack on my shoe. ");
      // Can you replace these 2 lines with a method call to chorus()?
      System.out.println("With a knick knack paddy whack, give a dog a bone.");
      System.out.println("This old man came rolling home.");
    }
  }
  
Parameters
-----------

You may have noticed more repetition in the song above. What about the lines of each verse? Notice that every word is repeated except the last ones that include a number and a rhyme such as one/thumb and two/shoe.

.. code-block:: java

    System.out.println("This old man, he played one.");
    System.out.println("He played knick knack on my thumb.");
    ...
    System.out.println("This old man, he played two.");
    System.out.println("He played knick knack on my shoe.");


We can make methods even more powerful and more abstract by giving them parameters for data that they need to do their job. We can make a method called verse that takes the number and the rhyme to print out any verse! 

.. code-block:: java

    public void verse(String number, String rhyme)
    {
       System.out.println("This old man, he played " + number);
       System.out.println("He played knick knack on my " + rhyme);
    }
    
.. |visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public%20class%20Song%20%0A%20%20%7B%20%0A%20%20%20%20%0A%20%20%20%20/**%20Verse%0A%20%20%20%20%20*%20%40param%20number%20-%20a%20String%20like%20%22one%22,%20%22two%22,%20etc.%0A%20%20%20%20%20*%20%40param%20rhyme%20-%20a%20String%20like%20%22thumb%22,%20%22shoe%22,%20etc.%0A%20%20%20%20%20*/%0A%20%20%20%20%20public%20void%20verse%28String%20number,%20String%20rhyme%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20System.out.println%28%22This%20old%20man,%20he%20played%20%22%20%2B%20number%29%3B%0A%20%20%20%20%20%20%20System.out.println%28%22He%20played%20knick%20knack%20on%20my%20%22%20%2B%20rhyme%29%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20//%20The%20chorus%20method%0A%20%20%20%20public%20void%20chorus%28%29%20%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20System.out.println%28%22With%20a%20knick%20knack%20paddy%20whack,%20give%20a%20dog%20a%20bone.%22%29%3B%0A%20%20%20%20%20%20%20System.out.println%28%22This%20old%20man%20came%20rolling%20home.%22%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20public%20static%20void%20main%28String%20args%5B%5D%29%20%0A%20%20%20%20%7B%0A%20%20%20%20%20%20Song%20mySong%20%3D%20new%20Song%28%29%3B%0A%20%20%20%20%20%20mySong.verse%28%22one%22,%20%22thumb%22%29%3B%0A%20%20%20%20%20%20mySong.chorus%28%29%3B%0A%20%20%20%20%20%20mySong.verse%28%22two%22,%20%22shoe%22%29%3B%0A%20%20%20%20%20%20mySong.chorus%28%29%3B%0A%20%20%20%20%7D%0A%20%20%7D&cumulative=false&curInstr=24&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>
   
|CodingEx| **Coding Exercise**



.. activecode:: Song2
  :language: java

  Run the following code to see the song This Old Man print out using the verse and chorus methods.  You can also see this code run in the |visualizer|. Can you add verse three with the rhyme "knee"? Can you add verse four with the rhyme "door"? How many verses do you know?
  ~~~~
  public class Song 
  { 
    
    /** Verse - prints out a verse of the song
     * @param number - a String like "one", "two", etc.
     * @param rhyme - a String like "thumb", "shoe", etc.
     */
     public void verse(String number, String rhyme)
     {
       System.out.println("This old man, he played " + number);
       System.out.println("He played knick knack on my " + rhyme);
     }
     
    // The chorus method
    public void chorus() 
    {
       System.out.println("With a knick knack paddy whack, give a dog a bone.");
       System.out.println("This old man came rolling home.");
    }
    
    public static void main(String args[]) 
    {
      Song mySong = new Song();
      mySong.verse("one", "thumb");
      mySong.chorus();
      mySong.verse("two", "shoe");
      mySong.chorus();
    }
  }
  
When you create your own method, the variables you define for it in the method header are called **formal parameters**. When you call the method to do its job, you give or pass in **arguments** or **actual parameters** to it that are then saved in these local parameter variables. When a method is called, the right method definition is found by checking the **method signature** or **header** at the top of the method definition to match the method name, the number of arguments, the data types for the arguments and the return type. Here's what that looks like with the 2 method calls above. Notice how the parameter variables get new values with every method call.

.. figure:: Figures/args2params.png
    :width: 500px
    :align: center
    :alt: Arguments to Parameters
    :figclass: align-center

    Figure 1: Matching Arguments to Parameters 


Java uses **Call by Value** when it passes arguments to methods. This means that a copy of the value in the argument is saved in the parameter variable. If the parameter variable changes its value inside the method, the original value outside the method is not changed.

If you pass in an argument that holds a reference to an object, like a String or Person or Turtle object, a copy of this reference is passed in and saved in the parameter variable. The formal parameter and the actual parameter (argument) are then **aliases**, both refering to the same object. Java was designed this way to avoid copying large objects from method to method. Remember when we discussed reference aliases with turtle objects who are set equal to one another.

.. figure:: Figures/turtleEquality.png
    :width: 500px
    :align: center
    :figclass: align-center
    
    Figure 2: Turtle Reference Equality
    
Although String objects are not mutable, the classes that you create will have mutable objects. If the reference parameter is for a mutable object, the method could change the actual object, but it is good programming practice to not modify mutable objects that are passed as parameters unless required in the specification. Methods can even access the private data and methods of a parameter that is a reference to an object if the parameter is the same type as the method’s enclosing class. Note that Strings are immutable objects, so they cannot be changed by the method; only a new changed copy of them can be made.


Methods can also return values of any type back to the calling method. The calling method should do something with this return value, like printing it out or saving it in a variable. Try the problems below to practice with a String method that takes a parameter and returns a boolean value.

|CodingEx| **Coding Exercise**



.. activecode:: StringFind
  :language: java

  Run the following program which contains a method called findLetter that takes a letter and a text as parameters and uses a loop to see if that letter is in the text. It returns a boolean true or false value.  Give letter and the text new values in the main method and run it again to try finding a different letter. Then, change the code of the method to count how many letters it finds and return the count as an int. 
  ~~~~
  public class StringFind 
  { 
    /** findLetter looks for a letter in a String
     * @param String letter to look for
     * @param String text to look in
     * @return boolean true if letter is in text
     * After running the code, change this method to return 
     * an int count of how many times letter is in the text. 
     */
     public boolean findLetter(String letter, String text)
     {
        boolean flag = false;
        for(int i=0; i < text.length(); i++) {
            if (text.substring(i, i+1).equalsIgnoreCase(letter))
	    {
                flag = true;
	    }
        }
        return flag;
     }
    public static void main(String args[]) 
    {
      StringFind test = new StringFind();
      String message = "Apples and Oranges";
      String letter = "p";
      System.out.println("Does " + message +  " contain a " + letter + "?");
      System.out.println( test.findLetter(letter, message) ); 
    }
  }
  
|Groupwork| Programming Challenge : Song with Parameters
---------------------------------------------------------

.. |The Ants Go Marching| raw:: html

   <a href="https://www.lyrics.com/lyric/5526512/The+Ants+Go+Marching" target="_blank">The Ants Go Marching</a>

Here's another song, |The Ants Go Marching|, that is very similar to the This Old Man song in its repetitive structure. 

.. raw:: html
  
   <pre>
    The ants go marching one by one, hurrah, hurrah
    The ants go marching one by one, hurrah, hurrah
    The ants go marching one by one,
    The little one stops to suck his thumb
    And they all go marching down to the ground

    The ants go marching two by two, hurrah, hurrah
    The ants go marching two by two, hurrah, hurrah
    The ants go marching two by two,
    The little one stops to tie his shoe
    And they all go marching down to the ground

    The ants go marching three by three, hurrah, hurrah
    The ants go marching three by three, hurrah, hurrah
    The ants go marching three by three,
    The little one stops to climb a tree
    And they all go marching down to the ground
    </pre>

1. Print out the |The Ants Go Marching| song and circle the repeated parts of the song.


2. In the active code window below, create a method or methods that takes parameters to print out a verse. The method(s) should be abstract enough to work for all 3 verses. Use good commenting for your methods that describe the @param.

3. In the main method, create an object of the class and call the method(s) you created in the last step to print out 3 verses of the song. Can you add more verses?

.. activecode:: challenge-5-6-song
  :language: java

  public class Song 
  { 
    // Create method(s) with parameters to print out verses 
    // of the song The Ants Go Marching.
    // https://www.lyrics.com/lyric/5526512/The+Ants+Go+Marching
    
    
    public static void main(String args[]) 
    {
      // Create a Song object and call its method to print out 
      // the verses of The Ants Go Marching
    
    }
  }



Summary
-------

- **Procedural Abstraction** (creating methods) reduces the complexity and repetition of code. We can name a block of code as a method and call it whenever we need it, abstracting away the details of how it works.  

- A programmer breaks down a large problem into smaller subproblems by creating methods to solve each individual subproblem.

- To write methods, write a **method definition** with a **method signature** like "public void chorus()" and a **method body** in {} and method calls using an object.the method name and arguments whenever you need it to do its job.

- To call an object's method, you must use the object name and the dot (.) operator followed by the method name, for example **object.method();** 


- When you call a method, you can give or pass in **arguments** or **actual parameters** to it inside the parentheses **object.method(arguments)**. The arguments are saved in local **formal parameter** variables that are declared in the method header, for example: public void method(type param1, type param2) { ... }.

- Values provided in the arguments in a method call need to correspond to the order and type of the parameters in the method signature.

- When an actual parameter is a primitive value, the formal parameter is initialized with a copy of that value. Changes to the formal parameter have no effect on the corresponding actual parameter.

- When an actual parameter is a reference to an object, the formal parameter is initialized with a copy of that reference, not a copy of the object. The formal parameter and the actual parameter are then aliases, both refering to the same object.

-  When an actual parameter is a reference to an object, the method or constructor could use this reference to alter the state of the original object. However, it is good programming practice to not modify mutable objects that are passed as parameters unless required in the specification.

AP Practice
-----------

.. mchoice:: AP5-6-1
    :practice: T

    Consider the following class, which uses the instance variable dollars to represent the money in a wallet in dollars.
        
    .. code-block:: java

        public class Wallet
        {
            private double dollars;

            public double putMoneyInWallet(int amount)
            {
                /* missing code */
            }
        }

    The putMoneyInWallet method is intended to increase the dollars in the wallet by the parameter amount and then return the updated dollars in the wallet. Which of the following code segments should replace  *missing code* so that the putMoneyInWallet method will work as intended?
    
    - .. code-block:: java

        amount += dollars;
        return dollars;

      - dollars should be incremented by amount.
        
    - .. code-block:: java

        dollars = amount;
        return amount;
        
      - dollars should be incremented by amount.
        
    - .. code-block:: java

        dollars += amount;
        return dollars;
        
      + Correct.

    - .. code-block:: java

        dollars = dollars + amount;
        return amount;
       
      - amount is returned instead of dollars.
        
    - .. code-block:: java

        amount = dollars + amount;
        return dollars;
        
      - dollars should be incremented by amount.
        


.. mchoice:: AP5-6-2
    :practice: T

    Consider the Liquid class below.
    
    .. code-block:: java

        public class Liquid
        {
            private int currentTemp;
            private int boilingPoint;

            public Liquid(int ct, int bp)
            {
                currentTemp = ct;
                boilingPoint = bp;
            }

            public boolean isBoiling(int amount)
            {
                /* missing code */
            }
        }

    The isBoiling method is intended to return true if increasing the currentTemp by the parameter amount is greater than or equal to the boilingPoint, or otherwise return false. Which of the following code segments can replace *missing code* to ensure that the isBoiling method works as intended? 
    
    .. code-block:: java

       I.   if (currentTemp + amount < boilingPoint)
            {
                return false;
            }
            else
            {
                return true;
            }
       II.  if (amount > currentTemp)
            {
                return false;
            }
            else
            {
                return currentTemp;
            }
       III. if (amount + currentTemp >= boilingPoint)
            {
                return true;
            }
            else
            {
                return false;
            }

    - I only
          
      - I would work but it is not the only code that would work.

    - II only
    
      - II does not check against the boilingPoint and does not return only boolean values.
  
    - III only
    
      - III would work but it is not the only code that would work.

    - I and III only.
  
      + Correct! 
      
    - I, II, III
    
      - II does not check against the boilingPoint and does not return only boolean values.

