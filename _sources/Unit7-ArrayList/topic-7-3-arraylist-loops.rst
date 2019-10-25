.. qnum::
   :prefix: 7-3-
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

Traversing ArrayLists with Loops
================================

While loops, for loops, and enhanced for each loops can all be used to traverse an ArrayList just like an array.

Enhanced For Each Loop
----------------------

..	index::
	pair: list; for-each loop

You can use a enhanced for-each loop to traverse through all of the items in a list, just like you do with an array as shown in the main method below.  

|CodingEx| **Coding Exercise**



.. activecode:: listForEachLoop
   :language: java

   What does the following code do? Guess before you run it. Then, add another enhanced for each loop that computes the product of all the elements in myList by multiplying them and prints it out.
   ~~~~
   import java.util.*;  // import all classes in this package.
   public class Test
   {  
       public static void main(String[] args)
       {
           ArrayList<Integer> myList = new ArrayList<Integer>();
           myList.add(50);
           myList.add(30);
           myList.add(20);
           int total = 0;
           for (Integer value: myList)
           {
               total = total + value;
           }
           System.out.println(total);
       }
   }
   
For Loop
----------------------

You can also use a 	``while`` or ``for`` loop to process list elements using the index. The ArrayList index starts at 0 just like arrays, but instead of using the square brackets [] to access elements, you  use the ``get(index)`` to get the value at the index and ``set(index,value)`` to set the element at an index to a new value. 
If you try to use an index that is outside of the range of 0 to the number of elements − 1 in an ArrayList, your code will throw an **ArrayIndexOutOfBoundsException**, just like in arrays.

|CodingEx| **Coding Exercise**



.. activecode:: listForLoop
   :language: java
   
   The following code will throw an ArrayIndexOutOfBoundsException. Can you fix it?
   ~~~~
   import java.util.*;  
   public class TestForLoop
   {  
       public static void main(String[] args)
       {
           ArrayList<Integer> myList = new ArrayList<Integer>();
           myList.add(50);
           myList.add(30);
           myList.add(20);
           int total = 0;
           for (int i=0; i <= myList.size(); i++)
           {
               total = total + myList.get(i);
           }
           System.out.println(total);
       }
   }

 
While Loop
----------------------

The example below demonstrates a while loop and an object-oriented approach where the list is a field of the current object and you use an object method rather than a class (static) method to loop through the list. 
   
|CodingEx| **Coding Exercise**



.. activecode:: listForEachLoopObj
   :language: java
   
   What does the following code do? Guess what it does before running it. Can you change the code so that it only removes the first name it finds in the list that matches? (Hint: use the found variable).
   ~~~~
   import java.util.*;  
   public class ListWorker
   {
      private ArrayList<String> nameList; 
      
      public ListWorker(ArrayList<String> theNames)
      {
          nameList = theNames;
      }
  
      public boolean removeName(String name)
      {
          boolean found = false;
          int index = 0;
          while (index < nameList.size())
          {
              if (name.equals(nameList.get(index)))
              { 
                  nameList.remove(index);
                  found = true;
              }
              else index++;
          }
          return found;
       }
       
       public static void main(String[] args)
       {
           ArrayList<String> myList = new ArrayList<String>();
           myList.add("Amun");
           myList.add("Ethan");
           myList.add("Donnie");
           myList.add("Ethan");
           ListWorker listWorker = new ListWorker(myList);
           System.out.println(listWorker.nameList);
           listWorker.removeName("Ethan");
           System.out.println("After removing Ethan: " 
                     + listWorker.nameList);
       }
   }
  

Be careful when you remove items from a list as you loop through it.  Remember that removing an item from a list will shift the remaining items to the left.   Notice that the method above only increments the current index if an item was not removed from the list.  If you increment the index in all cases you will miss checking some of the elements since the rest of the items shift left when you remove one. 
   
Do not use the enhanced for each loop if you want to add or remove elements when traversing a list because it will throw a **ConcurrentModificationException** error. Since for each loops do not use an index, you cannot do this special case of incrementing only if it is changed. So if you are going to add or remove items or you need the index, use a regular for loop or a while loop. 

|Exercise| **Check your understanding**

.. mchoice:: qloopList_1
   :answer_a: [0, 4, 2, 5, 3]
   :answer_b: [3, 5, 2, 4, 0, 0, 0, 0]
   :answer_c: [0, 0, 0, 0, 4, 2, 5, 3]
   :answer_d: [4, 2, 5, 3]
   :correct: a
   :feedback_a: Incrementing the index each time through the loop will miss when there are two zeros in a row.
   :feedback_b: This would be true if the code moved the zeros to the end, but that is not what it does.
   :feedback_c: This would be true if the code moved the zeros to the font, but that is not what it does.
   :feedback_d: This would be correct if <code>k</code> was only incremented when an item was not removed from the list.

   Assume that ``nums`` has been created as an ``ArrayList`` object and it initially contains the following ``Integer`` values [0, 0, 4, 2, 5, 0, 3, 0]. What will ``nums`` contain as a result of executing ``numQuest``?
   
   .. code-block:: java 
   
      ArrayList<Integer> list1 = new ArrayList<Integer>();
      private ArrayList<Integer> nums;

      // precondition: nums.size() > 0;
      // nums contains Integer objects
      public void numQuest()
      {
         int k = 0;
         Integer zero = new Integer(0);
         while (k < nums.size())
         {
            if (nums.get(k).equals(zero))
               nums.remove(k);
            k++;
         }
      }
      
You can step through the code above by clicking on the following `Example <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=import+java.util.*%3B%0A%0A%0Apublic+class+ListWorker+%7B%0A%0A+++private+List%3CInteger%3E+nums%3B%0A+++%0A+++public+ListWorker(List%3CInteger%3E+theNums)%0A+++%7B%0A++++++nums+%3D+theNums%3B%0A+++%7D%0A%0A+++//+precondition%3A+nums.size()+%3E+0%3B%0A+++//+nums+contains+Integer+objects%0A+++public+void+numQuest()%0A+++%7B%0A++++++int+k+%3D+0%3B%0A++++++Integer+zero+%3D+new+Integer(0)%3B%0A++++++while+(k+%3C+nums.size())%0A++++++%7B%0A+++++++++if+(nums.get(k).equals(zero))%0A++++++++++++nums.remove(k)%3B%0A+++++++++k%2B%2B%3B%0A++++++%7D%0A+++%7D%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++List%3CInteger%3E+numList+%3D+new+ArrayList%3CInteger%3E()%3B%0A++++++numList.add(0)%3B%0A++++++numList.add(0)%3B%0A++++++numList.add(4)%3B%0A++++++numList.add(2)%3B%0A++++++numList.add(5)%3B%0A++++++numList.add(0)%3B%0A++++++numList.add(3)%3B%0A++++++numList.add(0)%3B%0A++++++System.out.println(numList)%3B%0A++++++ListWorker+listW+%3D+new+ListWorker(numList)%3B%0A++++++listW.numQuest()%3B%0A++++++System.out.println(numList)%3B%0A+++++%0A+++%7D%0A%7D&mode=display&curInstr=11>`_.
      

   

.. parsonsprob:: list_1
   :numbered: left
   :adaptive: 

   The following has the correct code for the method <code>getScore</code> plus at least one extra unneeded code statement.  This method will calculate and return the score for a word game.  The code should loop through all of the elements in <code>wordList</code> and if the length of the current word is 3 it should add one to the <code>score</code>, if the length of the word is 4 it should add 2 to the <code>score</code>, and if the length is greater than 4 it should add 3 to the <code>score</code>.  The method should return the <code>score</code>.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.  There is one extra block that is not needed in a correct solution.
   -----
   public static int getScore(List<String> wordList)
   {
   =====
     int score = 0;

     for (String word : wordList) 
     {
   =====
       if (word.length() == 3) 
   =====
       {
         score++;
       }
   =====
       else if (word.length() == 4)
       {
         score = score + 2;
       }
   =====
       else if (word.length() > 4)
       {
         score = score + 3;
       }
   =====  
     } // end for
   =====
     return score;

   } // end method
   =====
   if (word.length == 3) #distractor
   
.. parsonsprob:: list_2
   :numbered: left
   :adaptive:

   The following has the correct code for a method called <code>insertInOrder</code> plus at least one extra unneeded code statement. This method should add the passed <code>name</code> in alphabetic order to a private list field called <code>nameList</code>.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.  There is one extra block that is not needed in a correct solution.
   -----
   public void insertInOrder(String name)
   {
   =====
     int index = 0;
   =====
     while (index < nameList.size() && 
            nameList.get(index).compareTo(name) < 0)
     {
   =====
       index++;
   =====
     } // end while
   =====
     nameList.add(index,name);
   =====
   } // end method
   =====
   nameList.add(name); #distractor

ArrayList of Student Objects
----------------------------

|CodingEx| **Coding Exercise**

You can put any kind of Objects into an ArrayList. Even objects for a class that you wrote. For example, here is an ArrayList of Students. Although the print statement works here, you may want a nicer printout. Add a loop that prints out each student and then a new line.

.. activecode:: StudentList
  :language: java

  import java.util.*;
  
  public class StudentList 
  {
     // main method for testing
     public static void main(String[] args)
     {
        ArrayList<Student> roster = new ArrayList<Student>();
        roster.add(new Student("Skyler", "skyler@sky.com", 123456));
        roster.add(new Student("Ayanna", "ayanna@gmail.com", 789012));
        // Replace this with a loop that prints out each student on a separate line
        System.out.println(roster);
     }
   }
  
  class Student 
  {
     private String name;
     private String email;
     private int id;
     
     public Student(String initName, String initEmail, int initId)
     {
        name = initName;
        email = initEmail;
        id = initId;
     }
     
     // toString() method
     public String toString() 
     { 
       return id + ": " + name + ", " + email;
     }
  } 
 
 
|Groupwork| Programming Challenge : FRQ Word Pairs
---------------------------------------------------

.. |2018 Free Response Question #2 WordPair| raw:: html

   <a href="https://secure-media.collegeboard.org/ap/pdf/ap18-frq-computer-science-a.pdf#page=7" target="_blank" style="text-decoration:underline">2018 Free Response Question #2 WordPair</a>



This challenge is based on the |2018 Free Response Question #2 WordPair|. We encourage you to work in pairs on this challenge.

You are given a class called WordPair that can store pairs of words.

.. code-block:: java 

    class WordPair {
        private String word1;
        private String word2;
        
        public WordPair(String w1, String w2) {
            word1 = w1;
            word2 = w2;
        }
        public String getFirst() {
            return word1;
        }
        public String getSecond() {
            return word2;
        }
        public String toString() {
            return "(" + word1 + ", " + word2 + ")";
        }
    }

First, see if you can create an ArrayList of WordPair Objects below. Look at the StudentList example above for help.

.. activecode:: ArrayListWordPair1
   :language: java
   
    import java.util.*; 

    public class Test {
        public static void main(String[] args)
        {
            // Create an ArrayList of WordPair objects called pairs
       
       
            pairs.add(new WordPair("hi","there"));
            pairs.add(new WordPair("hi","bye"));
            System.out.println(pairs);
        }
    }
    
    class WordPair {
        private String word1;
        private String word2;
        
        public WordPair(String w1, String w2) {
            word1 = w1;
            word2 = w2;
        }
        public String getFirst() {
            return word1;
        }
        public String getSecond() {
            return word2;
        }
        public String toString() {
            return "(" + word1 + ", " + word2 + ")";
        }
    }
    

.. figure:: Figures/wordpairs.png
    :width: 200px
    :align: left
    :figclass: align-center
    
In this FRQ, you are given an array of words and you will create pairs of them by taking the first word and pairing it with all the other words, then taking the second word and pairing it with all but the first one, and so on. For example, if the word array is ["Hi", "there", "Tyler", "Sam"], this figure shows how the word pairs are formed.

In the class WordPairsList below, you will write the constructor which takes the array of words and pairs them up as shown in the figure. You will need nested loops to pair each element with the rest of the elements in the list. Here is the pseudocode.

    - Initialize the allPairs list to an empty ArrayList of WordPair objects.
    - Loop through the words array for the first word in the word pair (for loop from index i = 0 to length-1)
    
      - Loop through the rest of the word array starting from index i+1 for the second word in the word pair (for loop from index j = i+1 to length)
      
        - Add the new WordPair formed from the ith word and the jth word to the allPairs ArrayList.

.. activecode:: challenge-7-3-WordPairs
   :language: java
   
    import java.util.*; 

    public class WordPairsList
    {
        private ArrayList<WordPair> allPairs;
   
        public WordPairsList(String[] words) 
        {   
           // WRITE YOUR CODE HERE
           // initialize allPairs to an empty ArrayList of WordPair objects
           
           // nested loops through the words array to add each pair to allPairs
           
        
        }
   
        public int numMatches() 
        {
          //Write the code for the second part described below
          return 0;
        }
        
        public String toString() {
            return allPairs.toString();
        }
   
   
        public static void main(String[] args)
        {
            String[] words = {"Hi", "there", "Tyler", "Sam"};
            WordPairsList list = new WordPairsList(words);
            System.out.println(list);
            // For second part below
            //System.out.println("The number of matched pairs is: " + list.numMatches());
        }
    }      
    
    class WordPair {
        private String word1;
        private String word2;
        
        public WordPair(String w1, String w2) {
            word1 = w1;
            word2 = w2;
        }
        public String getFirst() {
            return word1;
        }
        public String getSecond() {
            return word2;
        }
        public String toString() {
            return "(" + word1 + ", " + word2 + ")";
        }
    }

In the next part of the FRQ challenge, you are asked to write a method called numMatches() that counts and returns the number of pairs where the first word is the same as the second word. For example, if the word array is ["hi","bye","hi"], the pairs generated would be ["hi","bye"], ["hi","hi"], and ["bye","hi"]. In the second pair ["hi","hi"], the first word is the same as the second word, so numMatches() would return 1. 

For this method, you will need a loop that goes through the ArrayList allPairs and for each WordPair in allPairs, it checks to see if its first word (using the getFirst() method) equals the second word (using the getSecond() method). If there is a match, it increments a counter which it returns at the end of the method. To test this method, add another "there" into the words array and then uncomment the call to numMatches().

Summary
-----------

- ArrayLists can be traversed with an enhanced for each loop, or a while or for loop using an index. 


- Deleting elements during a traversal of an ArrayList requires using special techniques to avoid skipping elements, since remove moves all the elements down.

- Since the indices for an ArrayList start at 0 and end at the number of elements − 1, accessing an index value outside of this range will result in an ArrayIndexOutOfBoundsException being thrown.

- Changing the size of an ArrayList while traversing it using an enhanced for loop can result in a ConcurrentModificationException being thrown. Therefore, when using an enhanced for loop to traverse an ArrayList, you should not add or remove elements.
