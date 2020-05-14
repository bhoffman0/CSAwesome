.. qnum::
   :prefix: 6-3-
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
    
.. arrays of objects?

Enhanced For-Loop (For-Each) for Arrays
=======================================

..	index::
	single: for-each
	pair: loop; for-each
   
There is a special kind of loop that can be used with arrays that is called an **enhanced for loop** or a **for each loop**. This loop is much easier to write because it does not involve an index variable or the use of the []. It just sets up a variable that is set to each value in the array successively. To set up a for-each loop, use **for (type variable : arrayname)** where the type is the type for elements in the array, and read it as "for each variable value in arrayname". You may have used a similar loop in AP CSP Pseudocode or App Inventor with lists like below.


.. figure:: Figures/appinvForEachComparison.png
    :width: 100%
    :align: center
    :figclass: align-center
    
    Figure 1: Comparing App Inventor, AP CSP, and Java for each
    
See the examples below in Java that loop through an int and a String array. Notice the type of the loop variable is the type of the array.

.. code-block:: java 
 
  int[] highScores = { 10, 9, 8, 8};
  String[] names = {"Jamal", "Emily", "Destiny", "Mateo"};
  // for each loop: for each value in highScores
  // for (type variable : arrayname)
  for (int value : highScores)
  {
      // Notice no index or [ ], just the variable value!
      System.out.println( value );
  }
  // for each loop with a String array to print each name
  // the type for variable name is String!
  for (String name : names)
  {
      System.out.println(name); 
  }

Use the enhanced for each loop with arrays whenever you can, because it cuts down on errors. You can use it whenever you need to loop through all the elements of an array and don't need to know their index and don't need to change their values.  It starts with the first item in the array (the one at index 0) and continues through in order to the last item in the array. This type of loop can only be used with arrays and some other collections of items like ArrayLists which we will see in the next unit.  

|CodingEx| **Coding Exercise**



.. activecode:: foreach1
   :language: java
   
   Try the following code. Notice the for each loop with an int array and a String array. Add another high score and another name to the arrays and run again.
   ~~~~
   public class ForEachDemo
   {      
      public static void main(String[] args)
      {
        int[] highScores = { 10, 9, 8, 8};
        String[] names = {"Jamal", "Emily", "Destiny", "Mateo"};
        // for each loop with an int array
        for (int value : highScores)
        {
            System.out.println( value );
        }
        // for each loop with a String array
        for (String value : names)
        {
            System.out.println(value); // this time it's a name!
        }
      }
    }
  
|CodingEx| **Coding Exercise**



.. activecode:: evenLoop
   :language: java
   
   Rewrite the following for loop which prints out the even numbers in the array as an enhanced for-each loop. Make sure it works!
   ~~~~
   public class EvenLoop
   {      
      public static void main(String[] args)
      {
        int[ ] values = {6, 2, 1, 7, 12, 5};
        // Rewrite this loop as a for each loop and run
        for (int i=0; i < values.length; i++)
        {
          if (values[i] % 2 == 0)
              System.out.println(values[i] + " is even!");
        }
      }
   }

Foreach Loop Limitations
--------------------------

.. |visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=%20%20%20public%20class%20IncrementLoop%0A%20%20%20%7B%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20int%5B%20%5D%20values%20%3D%20%7B6,%202,%201,%207,%2012,%205%7D%3B%0A%20%20%20%20%20%20%20%20//%20Can%20this%20loop%20increment%20the%20values%3F%0A%20%20%20%20%20%20%20%20for%20%28int%20val%20%3A%20values%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20val%2B%2B%3B%0A%20%20%20%20%20%20%20%20%20%20System.out.println%28%22New%20val%3A%20%22%20%2B%20val%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20//%20Print%20out%20array%20to%20see%20if%20they%20really%20changed%0A%20%20%20%20%20%20%20%20for%20%28int%20v%20%3A%20values%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20System.out.print%28v%20%2B%20%22%20%22%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%7D%0A%20%20%20&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>	
   
What if we had a loop that incremented all the elements in the array. Would that work with an enhanced for-each loop? Unfortunately not! Because only the variable in the loop changes, not the real array values. We would need an indexed loop to modify array elements. Try it in the Active Code below or in the |visualizer| and click on Forward to see why it doesn't work. 

|CodingEx| **Coding Exercise**


.. activecode:: incrementLoop
   :language: java

   Note that the for-each loop below cannot change the values in the array because only the loop variable value will change. Change the loop to an indexed for loop to make it change the array values.
   ~~~~
   public class IncrementLoop
   {      
      public static void main(String[] args)
      {
        int[ ] values = {6, 2, 1, 7, 12, 5};
        // Can this loop increment the values?
        for (int val : values)
        {
          val++;
          System.out.println("New val: " + val);
        }
        // Print out array to see if they really changed
        System.out.println("Array after the loop: ");
        for (int v : values)
        {
          System.out.print(v + " ");
        }
      }
   }
   
.. note::

   For each loops cannot be used in all situations. Only use for-each loops when you want to loop through **all** the values in an array without changing their values. 
   
   - Do not use for each loops if you need the index.
   - Do not use for each loops if  you need to change the values in the array.
   - Do not use for each loops if you want to loop through only part of an array or in a different order.
  



|Exercise| **Check Your Understanding**

.. mchoice:: qab_6A
   :practice: T
   :answer_a: Only I.
   :answer_b: I and III only.
   :answer_c: II and III only.
   :answer_d: All of the Above.
   :correct: b
   :feedback_a: This style of loop does access every element of the array, but using a for-each loop also means the user can access elements through the variable name.
   :feedback_b: Correct! For-each loops access all elements and enable users to use a variable name to refer to array elements, but do not allow users to modify elements directly.
   :feedback_c: For-each loops, as well as allowing users to refer to array elements, run through every element. For-each loops also do not allow users to modify elements directly.
   :feedback_d: For-each loops access all of an array's elements and allow users to refer to elements through a variable, but do not allow users to modify elements directly.  


   What are some of the reasons you would use an enhanced for-each loop instead of a for loop?
   
   .. code-block:: java

      I: If you wish to access every element of an array.
      II: If you wish to modify elements of the array.
      III: If you wish to refer to elements through a variable name instead of an array index. 


.. mchoice:: qfor-each
   :practice: T
   
   What is the output of the following code segment?
   
   .. code-block:: java
   
      int[ ] numbers = {44, 33, 22, 11};
      for (int num : numbers)
      {
          num *= 2;
      }
      for (int num : numbers)
      {
          System.out.print(num + " ");
      }
      
   - 44 33 22 11
    
     + The array is unchanged because the foreach loop cannot modify the array elements.
      
   - 46 35 24 13
    
     - Remember that the foreach loop cannot modify the array elements, but it also uses multiplication, not addition.
    
   - 88 66 44 22
    
     - Remember that the foreach loop cannot modify the array elements. Only the variable num will be doubled, not the original array values.
         
   - The code will not compile. 
    
     - This code will compile.
    

Foreach Loop Algorithms
--------------------------

.. You can step through this code using the Java Visualizer by clicking on the following link  `link1 <http://www.pythontutor.com/java.html#code=public+class+Test1%0A%7B%0A+++public+static+double+getAvg(int%5B%5D+values)%0A+++%7B%0A+++++double+total+%3D+0%3B%0A+++++for+(int+val+%3A+values)%0A+++++%7B%0A+++++++total++%3D+total+%2B+val%3B%0A+++++%7D%0A+++++return+total+/+values.length%3B%0A+++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B+%5D+values+%3D+%7B2,+6,+7,+12,+5%7D%3B%0A+++++System.out.println(getAvg(values))%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_. 

.. .. activecode:: lcaf1
   :language: java
   
   public class Test1
   {
      public static double getAvg(int[] values)
      {
        double total = 0;
        for (int val : values)
        {
          total  = total + val;
        }
        return total / values.length;
      }
      
      public static void main(String[] args)
      {
        int[ ] values = {2, 6, 7, 12, 5};
        System.out.println(getAvg(values));
      }
   }
  
.. ..	index::
	single: static
	single: class method
	pair: method; class
	pair: method; static

.. The **for-each** loop is shown on line 6 above.  It says to loop through the array called ``values`` and each time through the loop set the variable ``val`` to the next item in the array.  We have to specify the type of ``val`` first since this declares a variable.  The type must match the type of objects in the array.

 

.. The code above wasn't object-oriented.  You may have noticed that it was declared to be **static**.  This means that it is a **class method** not an **object method**.  It is a **class method** since it doesn't operate on any object fields - all data that it needs has been passed in to the method.  Class methods can be called using ``ClassName.methodName()``.  They can also be called on an object of the class.  Object methods can only be called on an object of the class.  
    
.. A more object-oriented way of doing this would be if the array was a field called ``values`` in the same class as the ``getAverage`` method.  Then you don't need to pass the array ``values`` to the method and the method is an object (instance) method since it operates on the fields of the object.  You will typically initialize fields in the constructor as shown below.  

.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/java.html#code=public+class+ArrayWorker%0A%7B%0A+++private+int%5B+%5D+values%3B%0A%0A+++public+ArrayWorker(int%5B%5D+theValues)%0A+++%7B%0A++++++values+%3D+theValues%3B%0A+++%7D%0A%0A+++public+double+getAverage()%0A+++%7B%0A+++++double+total+%3D+0%3B%0A+++++for+(int+val+%3A+values)%0A+++++%7B%0A+++++++total++%3D+total+%2B+val%3B%0A+++++%7D%0A+++++return+total+/+values.length%3B%0A+++%7D%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B%5D+numArray+%3D++%7B2,+6,+7,+12,+5%7D%3B%0A+++++ArrayWorker+aWorker+%3D+new+ArrayWorker(numArray)%3B%0A+++++System.out.println(aWorker.getAverage())%3B%0A+++%7D%0A%7D%0A%0A&mode=display&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>	
   

Here is an object-oriented example that has the array as a private instance variable in the class and provides a public method average that uses a for-each loop.  You can use the |Java Visualizer| to step through this code. 
     

.. activecode:: lcaf2
   :language: java
   
   Try the code below. 
   ~~~~
   public class ArrayWorker
   {
      private int[ ] values;
      
      public ArrayWorker(int[] theValues)
      {
         values = theValues;
      }
      
      public double getAverage()
      {
        double total = 0;
        for (int val : values)
        {
          total  = total + val;
        }
        return total / values.length;
      }
      
      public static void main(String[] args)
      {
        int[] numArray =  {2, 6, 7, 12, 5};
        ArrayWorker aWorker = new ArrayWorker(numArray); 
        System.out.println(aWorker.getAverage());
      }
   }
   




|Exercise| **Check Your Understanding**

.. parsonsprob:: pab_2
   :numbered: left
   :practice: T
   :adaptive:

   The following method has the correct code to return the largest value in an integer array called <i>vals</i> (an instance variable of the current object), but the code is mixed up.  Drag the blocks from the left into the correct order on the right and indent them correctly as well. You will be told if any of the blocks are in the wrong order or not indented correctly.</p>
   -----
   public int getLargest()
   {
   =====
     int largest = vals[0];
   =====
     for (int item : vals)
     {
   =====
       if (item > largest)
       {
   =====
         largest = item;
   =====
       }  // end if 
   =====
     } // end for
     return largest;
   =====
   } // end method
   

.. |Java visualizer link| raw:: html

   <a href="http://www.pythontutor.com/java.html#code=public+class+ArrayWorker%0A%7B%0A+++private+int%5B+%5D+values%3B%0A%0A+++public+ArrayWorker(int%5B%5D+theValues)%0A+++%7B%0A++++++values+%3D+theValues%3B%0A+++%7D%0A%0A+++public+double+getAverage()%0A+++%7B%0A+++++double+total+%3D+0%3B%0A+++++for+(int+val+%3A+values)%0A+++++%7B%0A+++++++total++%3D+total+%2B+val%3B%0A+++++%7D%0A+++++return+total+/+values.length%3B%0A+++%7D%0A+++%0A+++public+int+getLargest()%0A+++%7B%0A++%0A+++++int+largest+%3D+values%5B0%5D%3B%0A%0A+++++for+(int+item+%3A+values)%0A+++++%7B%0A%0A+++++++if+(item+%3E+largest)%0A+++++++%7B%0A%0A+++++++++largest+%3D+item%3B%0A%0A+++++++%7D++//+end+if+%0A%0A+++++%7D+//+end+for%0A+++++return+largest%3B%0A%0A+++%7D+//+end+method%0A%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A+++++int%5B%5D+numArray+%3D++%7B2,+6,+7,+12,+5%7D%3B%0A+++++ArrayWorker+aWorker+%3D+new+ArrayWorker(numArray)%3B%0A+++++System.out.println(aWorker.getLargest())%3B%0A+++%7D%0A%7D%0A%0A&mode=display&curInstr=0" target="_blank">Java visualizer link</a>
   
If you want to step through the correct code to see what it does in the Java Visualizer click on the following |Java visualizer link|.


.. Some examples of finding the largest value in an array start by setting the largest variable to 0.  But, what happens if the array only contains negative numbers?  What value could you set largest to and still have it work correctly even if the field ``vals`` contained only negative numbers?

|Exercise| **Check Your Understanding**

.. mchoice:: qab_3
   :practice: T
   :answer_a: Whenever the first element in <i>array</i> is equal to <i>target</i>.
   :answer_b: Whenever <i>array</i> contains any element which equals <i>target</i>.
   :answer_c: Whenever the last element in <i>array</i> is equal to <i>target</i>.
   :answer_d: Whenever only 1 element in <i>array</i> is equal to <i>target</i>.
   :correct: c
   :feedback_a: This would be true if the loop started at the end of the array and moved toward the beginning.  But, it will loop from the first element to the last.  
   :feedback_b: This would be true if temp was only set to the result of checking if the current element in the array is equal to <i>target</i> when it is <i>false</i>.  But, it is reset each time through the loop.
   :feedback_c: The variable <i>temp</i> is assigned to the result of checking if the current element in the array is equal to <i>target</i>.  The last time through the loop it will check if the last element is equal to <i>val</i>.
   :feedback_d: There is no count of the number of times the array element is equal to <i>target</i>.  


   Given that ``array`` is an array of integers and ``target`` is an integer value, which of the following best describes the conditions under which the following code segment will return true?
   
   .. code-block:: java 

     boolean temp = false;
     for (int val : array)
     { 
       temp = ( target == val ); 
     }
     return temp;
     


|Groupwork| Programming Challenge : SpellChecker 2
---------------------------------------------------

.. image:: Figures/spellcheck.png
    :width: 100
    :align: left
    :alt: Spell Checker


.. |startsWith()| raw:: html

   <a href= "https://www.w3schools.com/java/ref_string_startswith.asp" target="_blank">startsWith()</a>
   
.. |repl.it| raw:: html

   <a href= "https://repl.it/@BerylHoffman/SpellChecker1" target="_blank">repl.it</a>
   
Copy the code you used in the Spell Checker Challenge in the last lesson. Re-write the spellcheck(word) method described in the last lesson to use enhanced for-each loops instead of indexed for-loops. If you did the optional printStartsWith(firstLetters) method, re-write that one too. You may use the code in |repl.it| instead to have the full dictionary.

.. activecode:: challenge-6-3-spellchecker2
   :language: java
   
   public class SpellChecker
   {
     private String[] dictionary = {"the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","cat","dog","cats","dogs"};

      // Re-write the spellcheck(word) (and optionally the printStartsWith(firstLetters)) methods to use enhanced for-each loops.
       
      /* Write a spellcheck() method using an enhanced for-each loop 
       * that takes a word as a parameter and returns true if it is 
       * in the dictionary array. Return false if it is not found.
       */
      
      public static void main(String[] args)
      {
        SpellChecker checker = new SpellChecker();
        /* Uncomment to test your method
        String word = "catz";
        if (checker.spellcheck(word) == true)
            System.out.println(word + " is spelled correctly!");
        else
            System.out.println(word + " is misspelled!");
        */

       // Optional:
       // checker.printStartsWith("ab");
      }
   }
 

Summary
-------

- An **enhanced for loop**, also called a **for each loop**, can be used to loop through an array without using an index variable.

- An enhanced for loop header includes a variable, referred to as the enhanced for loop variable, that holds each value in the array.

- For each iteration of the enhanced for loop, the enhanced for loop variable is assigned a copy of an element without using its index.

- Assigning a new value to the enhanced for loop variable does not change the value stored in the array.

- Program code written using an enhanced for loop to traverse and access elements in an array can be rewritten using an indexed for loop or a while loop.
 
