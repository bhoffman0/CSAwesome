.. qnum::
   :prefix: 2-11-
   :start: 1

Mixed Up Code Practice
===============================

The coding problems below are mostly about Strings, but more problems on other topics in this unit will be added in the future.



Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block that isn't needed in the correct solution.  

.. parsonsprob:: ch3ex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print a random number from 1 to 50. But, the blocks have been mixed up and may include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====                        
       public static void main(String[] args)
       {
   =====  
           int num = (int)(Math.random() * 50) + 1;
   =====
           System.out.println(num);
   =====
       } // end main method
              
   =====
   } // end of class
   =====
           int num = Math.random() * 50; #distractor
           

.. parsonsprob:: ch4ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should print Maria's first name on one line and her last name on the next line.  But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   String firstName = "Maria";
   String lastName = "Hernandez";
   =====
   System.out.println(firstName);
   =====
   System.out.println(lastName);
   =====
   System.out.printlln(firstname); #distractor


.. parsonsprob:: ch4ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should print the words to a famous poem. But the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   System.out.println("Roses are red");
   =====
   System.out.println("Violets are blue");
   =====
   System.out.println("Sugar is sweet");
   =====
   System.out.println("And so are you");


.. .. parsonsprob:: ch4ex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print Marcus's name on one line and his favorite color on the next line. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           String name = "Marcus";
           String color = "Blue";
   =====
           System.out.println(name);
   =====
           System.out.println(color);
   =====
       } // end main method

   =====
   } // end of class
   =====
           System.out.println(Name); #distractor


.. parsonsprob:: ch4ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print the first 2 characters of the message followed by the last 2 characters of the message. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           String message = "I hope this works";
   =====
           String part1 = message.substring(0,2);
           String part2 = message.substring(message.length() - 2);
   =====
           System.out.println(part1 + part2);
   =====
       } // end main method
   =====
   } // end class
   =====
           System.out.println(part1 * part2); #distractor


.. .. parsonsprob:: ch4ex5muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print the name on one line followed by the age on the next line. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           String name = "Layla";
           String age = "16";
   =====
           System.out.println("Your name is " + name);
   =====
           System.out.println("Your age is " + age);
   =====
       } // end main method
   =====
   } // end class
   =====
           System.out.println("Your age is " age); #distractor


.. .. parsonsprob:: ch4ex6muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print the name on one line and the favorite food on the next line. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           String name = "Julian";
           String food = "chicken wings";
   =====
           System.out.println("Your name is " + name);
   =====
           System.out.println("You favorite food is " + food);
   =====
       }
   =====
   }
   =====
           System.println("Your name is " + name); #distractor

.. parsonsprob:: ch4ex7muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print the initials in lowercase letters. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           String first = "Gerald";
           String middle = "Foster";
           String last= "Jones";

   =====
           String initials = first.substring(0,1) +
                             middle.substring(0,1) +
                             last.substring(0,1);
   =====
           String lowerInitials = initials.toLowerCase();
   =====
           System.out.println(lowerInitials);
   =====
       }
   =====
   }
   =====
           System.out.println(initials); #distractor

.. parsonsprob:: ch4ex8muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print the message in all uppercase letters. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           String message = "Don't Pokemon and drive!";
   =====
           String upperMessage = message.toUpperCase();
   =====
           System.out.println(upperMessage);
   =====
       }
   =====
   }
   =====
          System.print(upperMessage); #distractor

.. parsonsprob:: ch4ex9muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print the first 3 letters of message in uppercase letters. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           String message = "Have a nice day!";
   =====
           String part = message.substring(0,3);
   =====
           String upper = part.toUpperCase();
   =====
           System.out.println(upper);
   =====
       }
   =====
   }
   =====
           String part = message.substring(0,4); #distractor

.. parsonsprob:: ch4ex10muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print the part of the message starting with the word "nice".  But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           String message = "Have a nice day!";
   =====
           int pos = message.indexOf("nice");
   =====
           System.out.println(message.substring(pos));
   =====
       }
   =====
   }
   =====
           int pos = message.indexof("nice"); #distractor



