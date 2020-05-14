.. qnum::
   :prefix: 4-6-5-
   :start: 1
   
Coding Practice with Loops
------------------------------------

.. tabbed:: ch6ex1

        .. tab:: Question
           
           .. activecode::  ch6ex1q
              :language: java
   
              Rewrite the following code so that it uses a ``for`` loop instead of a ``while`` loop to print out all the integers from 5 to 1 (inclusive).  
              ~~~~
              public class Test
              {
                  public static void main(String[] args)
                  {
                      int x = 5;
                      while (x > 0)
                      {
                          System.out.println(x);
                          x = x - 1;
                      }
                  }
              }


        .. tab:: Answer
        
           .. activecode::  ch6ex1a
              :language: java
   
              In a ``for`` loop you declare and initialize the variable(s), specify the condition, and specify how the loop variable(s) change in the header of the ``for`` loop as shown below.
              ~~~~
              public class Test
              {
                  public static void main(String[] args)
                  {
                      for (int x = 5; x > 0; x = x - 1)
                          System.out.println(x);
                  }
              }

              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex1d
                
.. tabbed:: ch6ex2

        .. tab:: Question
           
           .. activecode::  ch6ex2q
              :language: java
   
              Rewrite the following code to use a ``while`` loop instead of a ``for`` loop to print out the numbers from 1 to 10 (inclusive).
              ~~~~
              public class Test
              {
                  public static void main(String[] args)
                  {
                      for (int x = 1; x <= 10; x++)
                          System.out.println(x);
                  }
              }


        .. tab:: Answer
        
           You need to specify the declarations and initializations of the loop variables(s) before the Boolean condition.  You need to do the change(s) at the end of the body of the loop.  
           
           .. activecode::  ch6ex2a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 1;
                      while (x <= 10)
                      {
                          System.out.println(x);
                          x++;
                      }
                  }  
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex2d
                
.. tabbed:: ch6ex3

        .. tab:: Question  
           
           .. activecode::  ch6ex3q
              :language: java
   
                         
              Rewrite the following code so that it uses a ``for`` loop instead of a ``while`` loop to print out all the integers from 5 to 15 (inclusive).  
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 5;
                      while (x <= 15)
                      {
                          System.out.println(x);
                          x = x + 1;
                      }
                  }
              }


        .. tab:: Answer
        
           In a ``for`` loop you declare and initialize the variable(s), specify the condition, and specify how the loop variable(s) change in the header of the ``for`` loop as shown below.
           
           .. activecode::  ch6ex3a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 5; x <= 15; x++)
                      {
                          System.out.println(x);
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex3d
                
.. tabbed:: ch6ex4

        .. tab:: Question
           
           .. activecode::  ch6ex4q
              :language: java
   
                         
              Rewrite the following code to use a ``while`` loop instead of a ``for`` loop to print out the numbers from 10 to 100 by 10's (inclusive).
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x <= 100; x=x+10)
                          System.out.println(x);
                  }
              }


        .. tab:: Answer
        
           You need to specify the declarations and initializations of the loop variables(s) before the Boolean condition.  You need to do the change(s) at the end of the body of the loop.  		
           
           .. activecode::  ch6ex4a
              :language: java
   
               public class Test1
               {
                  public static void main(String[] args)
                  {
                      int x = 10;
                      while (x <= 100)
                      {
                          System.out.println(x);
                          x = x + 10;
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex4d
                
                
.. tabbed:: ch6ex5

        .. tab:: Question
           
           .. activecode::  ch6ex5q
              :language: java
              
              The following code should print the values from 1 to 10 (inclusive) but has errors.  Fix the errors so that the code works as intended. If the code is in an infinite loop you can refresh the page in the browser to stop the loop and then click on Load History and move the bar above it to see your last changes.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 1;
                      while (x < 10)
                      {
                          System.out.println(x);
                      } 
                  }    
              }


        .. tab:: Answer
        
           On line 6 it should be ``while (x <= 10)``.  Add line 9 at the end of the loop body to increment ``x`` so that the loop ends (isn't an infinite loop).    
        
           .. activecode::  ch6ex5a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 1;
                      while (x <= 10)
                      {
                          System.out.println(x);
                          x++;
                      } 
                  }    
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex5d
                
.. tabbed:: ch6ex6

        .. tab:: Question
           
           .. activecode::  ch6ex6q
              :language: java
   
              The following code should print the values from 10 to 5, but it has errors.  Fix the errors so that the code works as intended.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x >= 5; x--)
                      {
                         System.out.println(x);
                         x--;
                      }
                      
                  }
              }


        .. tab:: Answer
        
           Remove the ``x--;`` at the end of the body of the loop.  The change area in the for loop decrements ``x`` by 1, so this line isn't needed. 
        
           .. activecode::  ch6ex6a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x >= 5; x--)
                      {
                         System.out.println(x);
                      }
                      
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex6d
                
.. tabbed:: ch6ex7n

        .. tab:: Question
           
           .. activecode::  ch6ex7nq
              :language: java
   
              The following code should print the values from 10 to 1, but it has errors.  Fix the errors so that the code works as intended.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 10;
                      while (x >= 0)
                      {
                         x--;
                         System.out.println(x);
                      } 
                  }
              }


        .. tab:: Answer
        
           Move the ``x--;`` to the end of the loop body (after the ``System.out.println``.  Change the ``while`` to ``x > 0``.
           
           .. activecode::  ch6ex7na
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int x = 10;
                      while (x > 0)
                      {
                         System.out.println(x);
                         x--;
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex7nd
                
.. tabbed:: ch6ex8n

        .. tab:: Question
           
           .. activecode::  ch6ex8nq
              :language: java
   
              Finish the code below to print a countdown from 100 to 0 by 10's.
              ~~~~           
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                      
                  }
              }


        .. tab:: Answer
        
           Use a ``for`` loop as shown below. Start ``x`` at 100, loop while it is greater or equal to 0, and subtract 10 each time after the body of the loop executes.
           
           .. activecode::  ch6ex8na
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 100; x >= 0; x = x - 10)
                          System.out.println(x);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex8nd
                
.. tabbed:: ch6ex9n

        .. tab:: Question
           
           .. activecode::  ch6ex9nq
              :language: java
  
              Finish the following code so that it prints a string minus the last character each time through the loop until there are no more characters in the string.       
              ~~~~       
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  }
              }


        .. tab:: Answer
        
           Add a ``while`` loop and loop while there is still at least one character in the string. At the end of the body of the loop reset the message to all characters except the last one.   
          
           .. activecode::  ch6ex9na
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "help";
                      while (message.length() > 0)
                      {
                          System.out.println(message);
                          message = message.substring(0,message.length() - 1);
                      }
                  }
              }

              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex9nd
                
.. tabbed:: ch6ex10n

        .. tab:: Question  
           
           .. activecode::  ch6ex10nq
              :language: java
   
  
              Finish the code to print the value of ``x`` and ``" is even"`` if ``x`` is even and ``" is odd"`` if it is odd for all values from 10 to 1. 
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                  }
              }


        .. tab:: Answer
        
           Use a ``for`` loop to loop from 10 to 1.  Use a conditional to test if x is even (x % 2 == 0).  
           
           .. activecode::  ch6ex10na
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 10; x >= 1; x--)
                      {
                          if (x % 2 == 0)
                              System.out.println(x + " is even");
                          else
                              System.out.println(x + " is odd");
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex10nd
                
.. tabbed:: ch6ex11n

        .. tab:: Question  
           
           .. activecode::  ch6ex11nq
              :language: java
     
              Finish the code below to print the values for ``10 * x`` where ``x`` changes from 0 to 10.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                  }
              }


        .. tab:: Answer
           
           .. activecode::  ch6ex11na
              :language: java
   
              This is the answer to the question above. Use a ``for`` loop with ``x`` changing from 0 to 10 and print the value of ``x`` and ``10 * x``.  Use parentheses around ``x * 10`` to make sure it is evaluated before it is turned into a string.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 0; x <= 10; x++)
                         System.out.println(x + " times 10 is " + (x * 10));                      
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex11nd
                
.. tabbed:: ch6ex12n

        .. tab:: Question  
           
           .. activecode::  ch6ex12nq
              :language: java
   
              Finish the code to loop printing the message each time through the loop and remove an ``x`` from the message until all the ``x``'s are gone. 
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "Ix lovex youxxx";
                      
                  }
              }


        .. tab:: Answer
        
           Use a ``while`` loop.  Loop while ``x`` has been found in the message (using ``indexOf``).  Remove the ``x`` (using substring). Use indexOf again to get the position of the next ``x`` or -1 if there are none left in the message. 
           
           .. activecode::  ch6ex12na
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "Ix lovex youxxx";
                      int pos = message.indexOf("x");
                      while (pos >= 0)
                      {
                         System.out.println(message);
                         message = message.substring(0,pos) + message.substring(pos+1);
                         pos = message.indexOf("x");
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex12nd
                

.. tabbed:: ch6ex16n

        .. tab:: Question
           
           .. activecode::  ch6ex16nq
              :language: java
  
              Write the code below to print the number of ``x``'s in the string message.  Use the ``indexOf`` and ``substring`` methods.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      String message = "xyxxzax";
                  }
              }


        .. tab:: Answer
        
           Use indexOf to find the next ``x``.  Loop while pos is greater than or equal to 0.  Use substring to reset message beyond the next ``x``.   
           
           .. activecode::  ch6ex16na
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                      String message = "xyxxzax";
                      int pos = message.indexOf("x");
                      int count = 0;
                      while (pos >= 0)
                      {
                          count++;
                          message = message.substring(pos+1);
                          pos = message.indexOf("x");
                      }
                      System.out.println("There were " + count + " x's");
                  }
              }
              
        .. tab:: Discussion 
        
           .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex16nd
                


.. tabbed:: ch6ex14n

        .. tab:: Question 
           
           .. activecode::  ch6ex14nq
              :language: java
   
              Write the code below to print a rectangle of stars (``*``) with 5 rows of stars and 3 stars per row.
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  }
              }


        .. tab:: Answer
        
           Use nested ``for`` loops.  Use the outer loop to control the number of rows and the inner loop to control the number of stars per row. 
           
           .. activecode::  ch6ex14na
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int row = 0; row < 5; row++)
                      {
                         for (int col = 0; col < 3; col++)
                         {
                             System.out.print("*");
                         }
                         System.out.println();
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex14nd
                
                
.. tabbed:: ch6ex15n

        .. tab:: Question
           
           .. activecode::  ch6ex15nq
              :language: java
   
              Write the code below to print a rectangle of stars (``*``) with 3 rows of stars and 5 stars per row. 
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  }
              }


        .. tab:: Answer
        
           Use nested ``for`` loops.  Use the outer loop to control the number of rows and the inner loop to control the number of stars per row. 
           
           .. activecode::  ch6ex15na
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int row = 0; row < 3; row++)
                      {
                         for (int col = 0; col < 5; col++)
                         {
                             System.out.print("*");
                         }
                         System.out.println();
                      }
                  }
              }
              
        .. tab:: Discussion 
        
           .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex15nd
                

.. tabbed:: ch6ex13n

        .. tab:: Question 
           
           .. activecode::  ch6ex13nq
              :language: java
   
              Write the code below to print 55555, 4444, 333, 22, 1 with each on a different line. 
              ~~~~
              public class Test1
              {
                  public static void main(String[] args)
                  {
                  }
              }


        .. tab:: Answer
        
           Use nested ``for`` loops. The outer loop controls what is printed on each row and the number of rows.  The inner loop controls the number of values printer per row. 
           
           .. activecode::  ch6ex13na
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      for (int x = 5; x >= 1; x--)
                      {
                         for (int y = x; y > 0; y--)
                         {
                             System.out.print(x);
                         }
                         System.out.println();
                      }
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch6ex13nd