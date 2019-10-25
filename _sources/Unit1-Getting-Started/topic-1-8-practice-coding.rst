.. qnum::
   :prefix: 1-8-
   :start: 1
   
Unit 1 Practice Coding
======================

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems may have an extra block that isn't needed in the correct solution.  Try to solve these on your phone or other mobile device!
                
.. parsonsprob:: ch3ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should figure out the cost for each shirt if they are buy 2 and get the third free and they are originally $45 each.  But, the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   double price = 45;
   =====
   double totalCost = price * 2;
   =====
   double pricePerShirt = totalCost / 3;
   =====
   System.out.println(pricePerShirt);
           
      
.. parsonsprob:: ch3ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should figure out the cost per person for a dinner including the tip. But the blocks have been mixed up and may include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   double bill = 89.23;
   =====
   double tip = bill * 0.20;
   =====
   double total = bill + tip;
   =====
   int numPeople = 3;
   double perPersonCost = total / numPeople;
   =====
   System.out.println(perPersonCost);
   =====
   System.out.println(perpersoncost); #distractor
   

  
.. parsonsprob:: ch3ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should print the number of seconds in 5 days. But, the blocks have been mixed up and may include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====    
           int sInMin = 60;
           int mInHour = 60;
           int hInDay = 24;
   ===== 
           int sInDay = sInMin * mInHour * hInDay;
   =====
           int total = sInDay * 5;
   =====
           System.out.println(total);
   =====
       } // end main method
   =====          
   } // end class
   =====
   public Class Test1
   { #distractor
   
.. parsonsprob:: ch3ex5muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should calculate the number of months it would take you to save 500 if you make 50 a week. But, the blocks have been mixed up and may include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
       {
   =====
           double weeklyRate = 50;
           double goal = 500;
   =====
           double numWeeks = goal / weeklyRate;
   =====
           double numMonths = numWeeks / 4;
   =====
           System.out.println(numMonths);
   =====
       } // end main method
   } // end class
   =====
       public void main(String[] args)
       { #distractor
       
.. parsonsprob:: ch3ex6muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should calculate the cost of a trip that is 200 miles when the price of gas is 2.20 and the miles per gallon is 42. But, the blocks have been mixed up and may include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           int miles = 200;
           double price = 2.20;
           int mpg = 42;
   =====
           double numGalls = miles / mpg;
   =====
           double totalCost = numGalls * price;
   =====
           System.out.println(totalCost); 
   =====
       }
   =====
   }
   =====
           System.println(totalCost); #distractor
           
.. parsonsprob:: ch3ex7muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should calculate how many miles you can go on half a tank of gas if the miles per gallon is 26 and your tank holds 15 gallons. But, the blocks have been mixed up and may include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           int mpg = 26;
           int tankHolds = 15;
   =====
           double numGalls = tankHolds / 2;
   =====
           double miles = numGalls * mpg;
   =====
           System.out.println(miles); 
   =====
       }
   =====
   }
   =====
       public static main(String[] args) #distractor
       
.. parsonsprob:: ch3ex8muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should calculate how many chicken wings you can buy with $3.50 if the wings are $.60 each. But, the blocks have been mixed up and may include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           double cost = 0.6;
           double money = 3.5;
   =====
           int numWings = (int) (money / cost);
   =====
           System.out.println(numWings);
   =====
       }
   =====
   }
   =====
          int cost = 0.6;
          int money = 3.5; #distractor
          
.. parsonsprob:: ch3ex9muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should calculate how much you will have to pay for an item that is 60% off the original price of $52.99. But, the blocks have been mixed up and may include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           double price = 52.99;
           double discount = 0.6;
   =====
           double savings = price * discount;
   =====
           double finalPrice = price - savings;
   =====
           System.out.println(finalPrice);
   =====
       }
   =====
   }
   =====
          int price = 52.99; 
          int discount = 0.6; #distractor
          
.. parsonsprob:: ch3ex10muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The main method in the following class should calculate how much the per item costs is for shorts that are buy 2 and get the third free.  The shorts are $39.99 each. But, the blocks have been mixed up and may include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Test1
   {
   =====
       public static void main(String[] args)
   =====
       {
   =====
           double price = 39.99;
   =====
           double priceForTwo = price * 2;
   =====
           double itemPrice = priceForTwo / 3;
   =====
           System.out.println(itemPrice);
   =====
       }
   =====
   }
   =====
          double priceForTwo = price * 2 #distractor
   


   
Code Practice with Variables
------------------------------

.. tabbed:: ch3Ex1

        .. tab:: Question

           
           The following code should calculate the cost of a trip that is 300 miles if gas is $2.50 a gallon and your car gets 36 miles per gallon.  However, the code has syntax errors, like missing semicolons, wrong case on names, or unmatched ``"`` or ``(``.  Fix the code so that it compiles and runs correctly.  
           
           .. activecode::  ch3Ex1q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int tripMiles = 300
                      Double price = 2.50;
                      int milesPerGallon = 36;
                      double numberOfGallons = tripmiles / milesPerGallon;
                      double totalCost = numberOfGallons * price;
                      System.out.println(totalCost);
                  }
              }


        .. tab:: Answer
        
           Line 5 is missing a semicolon.  Line 6 has ``Double`` instead of ``double``.  Remember that the primitive types all start with a lowercase letter.  Line 8 has ``tripmiles`` instead of ``tripMiles``.  Remember that you should uppercase the first letter of each new word to make the variable name easier to read (use camel case).
        
           .. activecode::  ch3Ex1a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int tripMiles = 300;
                      double price = 2.50;
                      int milesPerGallon = 36;
                      double numberOfGallons = tripMiles / milesPerGallon;
                      double totalCost = numberOfGallons * price;
                      System.out.println(totalCost);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex1d
                
.. tabbed:: ch3Ex2

        .. tab:: Question

           
           The following code should calculate the body mass index (BMI) for someone who is 5 feet tall and weighs 110 pounds.  However, the code has syntax errors, like missing semicolons, wrong case on names, or unmatched ``"`` or ``(``. Fix the code so that it compiles and runs correctly.  
           
           .. activecode::  ch3Ex2q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double Height = 60;    // in inches (60 inches is 5 feet)
                      double weight  110;    // in pounds
                      double heightSquared = height  height;
                      double bodyMassIndex = weight / heightSquared
                      double bodyMassIndexMetric = bodyMassIndex * 703;
                      System.out.println(bodyMassIndexMetric);
                  }
              }


        .. tab:: Answer
        
           Line 5 has ``Height`` instead of ``height``.  Remember that variable names should start with a lowercase letter.  Line 6 is missing an equal sign.  Line 7 is missing a ``*`` to square the height.  Line 8 is missing a semicolon at the end of the statement.
        
           .. activecode::  ch3Ex2a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double height = 60;    // in inches (60 inches is 5 feet)
                      double weight = 110;    // in pounds
                      double heightSquared = height * height;
                      double bodyMassIndex = weight / heightSquared;
                      double bodyMassIndexMetric = bodyMassIndex * 703;
                      System.out.println(bodyMassIndexMetric);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex2d
                
.. tabbed:: ch3Ex3

        .. tab:: Question

           
           The following code should calculate the number of miles that you can drive when you have $8.00 and the price of gas is 2.35 and the car gets 40 miles per gallon.  However, the code has errors.  Fix the code so that it compiles and runs correctly.  
           
           .. activecode::  ch3Ex3q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      gallonPrice = 2.35;
                      40 = double milesPerGallon;
                      double totalFunds = 8.0;
                      double numGallons = totalFunds gallonPrice; 
                      double numMiles = numGallons * milesPerGallon;
                      System.out.println(numMiles;
                  }
              }


        .. tab:: Answer
        
           Line 5 is missing the type ``double``.  Line 6 is backwards.  It should be ``double milesPerGallon = 40;``.  Line 8 is missing a ``/``.  Line 10 is missing a ``)``.
        
           .. activecode::  ch3Ex3a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double gallonPrice = 2.35;
                      double milesPerGallon = 40;
                      double totalFunds = 8.0;
                      double numGallons = totalFunds / gallonPrice; 
                      double distance = numGallons * milesPerGallon;
                      System.out.println(distance);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex3d
                
.. tabbed:: ch3Ex4

        .. tab:: Question

           
           The following code should calculate the cost of an item that is on clearance (70% off) when you also have a coupon for an additional 20% off the clearance price.  However, the code has errors.  Fix the code so that it compiles and runs correctly.  
           
           .. activecode::  ch3Ex4q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int originalPrice = 68.00;
                      int clearancePrice = originalPrice * 0.3;
                      int finalPrice = clearancePrice * 0.8;
                      System.out.println(finalPrice);
                  }
              }


        .. tab:: Answer
        
           Lines 5, 6, and 7 should all be ``double`` versus ``int`` so that the decimal portion of the calculation isn't thrown away.
        
           .. activecode::  ch3Ex4a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double originalPrice = 68.00;
                      double clearancePrice = originalPrice * 0.3;
                      double finalPrice = clearancePrice * 0.8;
                      System.out.println(finalPrice);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex4d
                
                
.. tabbed:: ch3Ex5

        .. tab:: Question

           
           The following code should calculate the number of whole days in 320893 seconds. However, the code has errors.  Fix the code so that it compiles and runs correctly.  
           
           .. activecode::  ch3Ex5q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int numSecs = 320893;
                      int numHours = numSecs   3600;
                      int numDays = numHours   24;
                      System.out.println numDays);
                      
              }


        .. tab:: Answer
        
           Lines 6 and 7 are both missing a ``/``.  Line 8 is missing a ``(``.  Line 9 is missing a ``}`` to close the ``main`` method.
        
           .. activecode::  ch3Ex5a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int numSecs = 320893;
                      int numHours = numSecs / 3600;
                      int numDays = numHours / 24;
                      System.out.println(numDays);
                   }   
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex5d
                
.. tabbed:: ch3Ex6

        .. tab:: Question

           
           Write the code below to calculate and print how many months it will take to save $200 if you earn $20 a week.
           
           .. activecode::  ch3Ex6q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                  }
              }


        .. tab:: Answer
        
           Calculate how many weeks it would take to make $200.  Next divide the number of weeks by 4 (roughly the number of weeks in a month).  
        
           .. activecode::  ch3Ex6a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double weeklyRate = 20;
                      double goal = 200;
                      double numWeeks = goal / weeklyRate;
                      double numMonths = numWeeks / 4;
                      System.out.println(numMonths);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex6d
                
.. tabbed:: ch3Ex7

        .. tab:: Question
  
           Write the code to calculate the number of miles you can drive if you have a 10 gallon gas tank and are down to a quarter of a tank of gas and your car gets 32 miles per gallon. 
           
           .. activecode::  ch3Ex7q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                  }
              }


        .. tab:: Answer
        
           First calculate the number of gallons you have left and then multiply that by the miles per gallon to get the number of miles you can still drive. 
        
           .. activecode::  ch3Ex7a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double numGallons = 10.0 / 4;
                      double milesPerGallon = 32;
                      double miles = numGallons * milesPerGallon;
                      System.out.println(miles);
                      
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex7d
                
.. tabbed:: ch3Ex8

        .. tab:: Question
  
           Write the code to calculate the number of seconds in 3 days.  Remember that there are 60 seconds in a minute and 60 minutes in an hour and 24 hours in a day.
           
           .. activecode::  ch3Ex8q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                  }
              }


        .. tab:: Answer
        
           First compute the number of seconds in 1 day and then multiple that by 3 days.
           
           .. activecode::  ch3Ex8a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int secondsInMinute = 60;
                      int minutesInHour = 60;
                      int hoursInDay = 24;
                      int secondsInDay = secondsInMinute * minutesInHour * hoursInDay;
                      int secondsInThreeDays = secondsInDay * 3;
                      System.out.println(secondsInThreeDays);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex8d
                

.. tabbed:: ch3Ex10

        .. tab:: Question
  
           Write the code to print the number of chicken wings you can buy if you have $4.50 and they cost $0.75 each.  Remember that you can't buy part of a wing. 
           
           .. activecode::  ch3Ex10q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      
                  }
              }


        .. tab:: Answer
        
           Divide the amount of money you have by the cost of each wing and set the result to an integer since you can't buy a part of a wing.
           
           .. activecode::  ch3Ex10a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      double money = 4.5;
                      double pricePer = 0.75;
                      int num = (int) (money / pricePer);
                      System.out.println(num);
                  }
              }
              
        .. tab:: Discussion 

            .. disqus::
                :shortname: cslearn4u
                :identifier: javareview_ch3ex10d