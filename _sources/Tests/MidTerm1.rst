.. qnum::
   :prefix: 1-
   :start: 1

Mid Term Exam Part - 1 (not timed)
----------------------------------------

The following problems are similar to what you might see on the AP CS A exam.  Please answer each to the best of your ability.

.. mchoice:: mid_1_1
   :answer_a: I
   :answer_b: II
   :answer_c: III
   :answer_d: IV
   :answer_e: V
   :correct: a
   :feedback_a: This will loop with i changing from 1 to 5 and then for each i, j will loop from i to 0 printing the value of i and then a new line.
   :feedback_b: This will loop i from 0 to 4 and j from 0 to i, neglecting to ouput 5.
   :feedback_c: This will loop with i changing from 1 to 4 and j from i to 0.
   :feedback_d: This will loop with i changing from 1 to 5 and j from 0 to i but it will print each value on a different line.
   :feedback_e: This will loop with i changing from 0 to 4 and j from 0 to i.

   Which of the following code segments will produce the displayed output?

   .. code-block:: java

     1
     22
     333
     4444
     55555


     I.   for (int i = 1; i <= 5; i++) {
             for (int j = i; j > 0; j--) {
                System.out.print(i);
             }
             System.out.println();
          }

     II.  for (int i = 0; i < 5; i++) {
             for (int j = 0; j < i; j++) {
                System.out.print(i);
             }
             System.out.println();
          }

     III. for (int i = 1; i < 5; i++) {
             for (int j = i; j > 0; j--) {
                System.out.print(i);
             }
             System.out.println();
          }

     IV.  for (int i = 1; i < 6; i++) {
             for (int j = 0; j < i; j++) {
                System.out.println(i);
             }
          }

     V.   for (int i = 0; i < 5; i++) {
             for (int j = 0; j < i; j++) {
                System.out.print(i+1);
             }
             System.out.println();
          }

.. mchoice:: mid_1_2
      :answer_a: A
      :answer_b: B
      :answer_c: C
      :answer_d: D
      :answer_e: E
      :correct: c
      :feedback_a: This would be true if num1 and num2 were both greater than 0 and num1 was greater than num2.  However, num2 is less than 0.
      :feedback_b: This would be true if num1 and num2 were both greater than 0 and num1 was less than or equal to num2.  However, num2 is less than 0.
      :feedback_c: The first test is false since num2 is less than 0 and for a complex conditional joined with And (&&) to be true both expressions must be true.  Next, <code>else if ((num2<0) || (num1<0))</code> is executed and this will be true since num2 is less than 0 and for a complex conditional joined with Or (||) only one of the expressions must be true for it to execute.
      :feedback_d: This will not happen since if num2 is less than 0 the previous conditional would be true ((num2<0) || (num1<0)).
      :feedback_e: This will not happen since if num2 is less than 0 the previous conditional would be true ((num2<0) || (num1<0)).

      Consider the following method.  What is the output from ``conditionTest(3,-2);``?

      .. code-block:: java

         public static void conditionTest(int num1, int num2)
         {
            if ((num1 > 0) && (num2 > 0)) {
               if (num1 > num2)
                  System.out.println("A");
               else
                  System.out.println("B");
            }
            else if ((num2 < 0) || (num1 < 0)) {
                System.out.println("C");
            }
            else if (num2 < 0) {
               System.out.println("D");
            }
            else {
               System.out.println("E");
            }
         }

.. mchoice:: mid_1_3
      :answer_a: I only
      :answer_b: II only
      :answer_c: II and III only
      :answer_d: I and II only
      :answer_e: I, II, and III
      :correct: d
      :feedback_a: Loop I will produce this output, but it is not the only loop that will output these values.
      :feedback_b: Loop II will produce this output, but it is not the only loop that will output these values.
      :feedback_c: Loop II is correct, but loop III will produce the reverse output, 43210.
      :feedback_d: Both of these loops will have the correct output. They iterate (and print each value) starting from 0 until the max value which we defined earlier in our code.
      :feedback_e: While loop I and II will produce the correct output, loop III will actually produce the reverse of the correct output.

      Which of these loops will output ``01234``?

      .. code-block:: java

         int max = 5;

         //Loop I
         for (int i = 0; i < max; i++)
         {
            System.out.print(i);
         }


         //Loop II
         int j = 0;
         while (j < max)
         {
            System.out.print(j);
            j++;
         }


         //Loop III
         int k = 0;
         for (int i = max; i > 0; i--)
         {
            System.out.print(i);
         }


.. mchoice:: mid_1_4
   :answer_a: 25
   :answer_b: 15
   :answer_c: 125
   :answer_d: 64
   :answer_e: 625
   :correct: c
   :feedback_a: This would be correct if we only had one inner for loop, but there are two.
   :feedback_b: The outer loop will execute 5 times, each time the outer loop executes the middle loop will execute 5 times, and each time the middle loop executes the inner loop will execute 5 times.  So the answer is 5 * 5 * 5 = 125.
   :feedback_c: The number of times a loop executes is (largest value in loop - smallest value in loop + 1) each loop executes (5 - 1 + 1 = 5) times.  When you have nested loops you multiply the number of times each loop executes.  So the result is 5 for the outer loop * 5 for the middle loop * 5 for the innermost loop.
   :feedback_d: This would be correct if we called solution(4) or the conditions to stop each loop were just less than, and not less than or equal to.
   :feedback_e: If you got this value you probably made one extra call to the each of the loops, notice that the loops start at 1 and not 0.

   Consider the following block of code. What value is returned from ``solution(5)``?

   .. code-block:: java

      public int solution(int limit)
      {
        int s = 0;

        for (int outside = 1; outside <= limit; outside++)
        {
            for (int middle = 1; middle <= limit; middle++)
            {
                for (int inside = 1; inside <= limit; inside++)
                {
                    s++;
                }
            }
        }
        return s;
      }

.. mchoice:: mid_1_5
   :answer_a: 9
   :answer_b: 81
   :answer_c: 3
   :answer_d: 243
   :answer_e: 27
   :correct: b
   :feedback_a: This would be true if we called mystery(2).
   :feedback_b: The argument is 4 so will have 4 recursive calls and then return 3 when we get to mystery(1). Each call will multiply our result by 3, so you can think of this as 3 raised to the 4th power (or 3 * 3 * 3 * 3 = 81).
   :feedback_c: This value is returned when we call mystery(1), since 1 is the base case and doesn't result in a recursive call.
   :feedback_d: This value would be returned from mystery(5).
   :feedback_e: This value would be returned from mystery(3).

   Consider the following recursive method. What does ``mystery(4)`` return?

   .. code-block:: java

      public int mystery(int m)
      {
        if (m == 1)
        {
    	    return 3;
        } else
        {
    	    return 3 * mystery(m - 1);
        }
      }

.. mchoice:: mid_1_6
   :answer_a: [6, 2, 7, 5]
   :answer_b: [6, 4, 2, 7, 5]
   :answer_c: [4, 7, 9, 5]
   :answer_d: [6, 4, 7, 5]
   :answer_e: [4, 7, 6, 9, 5]
   :correct: d
   :feedback_a: When the add method is used with two parameters, the value is added at the specific index, not at the end of the list. In this list, 4 has been added at index 1.
   :feedback_b: This would be correct if 7 had been placed in the list using add, not set. Remember that the set method replaces the value at the index. It does not move the previous value to the right.
   :feedback_c: Remember that in ArrayLists, indexing starts at 0, not 1.
   :feedback_d: The 2 at index 1 is removed resulting in [6, 9], then a 4 is added at index 1 resulting in [6, 4, 9]. A 5 is added to the end of the list resulting in [6,4,9,5], and the value at 2 is replaced with a 7 resulting in [6,4,7,5].
   :feedback_e: Remember that in ArrayLists, indexing starts at 0, not 1. The set method replaces the value at the specified index with a new value, so the original value is deleted.

   Assume that ``list`` has been instantiated as an ArrayList of integers containing ``[6, 2, 9]`` . What are the contents of ``list`` after the code is executed?

   .. code-block:: java

      list.remove(2);
      list.add(1, 4);
      list.add(5);
      list.set(2, 7);

.. mchoice:: mid_1_7
   :answer_a: Vroom vroom! Let's go!
   :answer_b: Vroom vroom!
   :answer_c: Let's go!
   :answer_d: Let's go! Vroom vroom!
   :answer_e: This would result in a compile-time error.
   :correct: a
   :feedback_a: The method drive has been overwritten in the Minivan class. Since obj is of type Minivan, the compiler will use the overwritten method. The overwritten method uses super() to call to the method of the parent class, so "Vroom vroom! " is printed. Then, the overwritten method prints out "Let's go! ".
   :feedback_b: Although the overwritten method has a call to the method in the parent class, there is another line of code that must be printed. The drive method has been overwritten for the Minivan class.
   :feedback_c: This would be the case if the overwritten method did not make a call to the class in the parent class. Because the method has a call to the parent class before it does anything else, "Vroom vroom! " is printed.
   :feedback_d: This would be the case if the parent method had been called after "Let's go! " had been printed.
   :feedback_e: This code correctly compiles, so there are no errors present. The Minivan class can make a call to a method in the Car class using super, because the Minivan class extends the Car class.


   Consider the classes ``Car`` and ``Minivan``, shown below. If ``obj`` has been instantiated later in the class as a ``Minivan``, what is printed as a result of ``obj.drive()``?

   .. code-block:: java

      public class Car
      {
         public void drive()
         {
            System.out.print("Vroom vroom! ");
         }
      }

      public class Minivan extends Car
      {
         public void drive()
         {
            super.drive();
            System.out.print(" Let's go! ");
         }
      }

.. mchoice:: mid_1_8
   :answer_a: I only
   :answer_b: II only
   :answer_c: III and IV only
   :answer_d: I and II only
   :answer_e: II and IV only
   :correct: a
   :feedback_a: The modulo operator (%) can be used to find if numbers are even or odd. I checks that x is even correctly using x % 2 == 0.
   :feedback_b: II uses the modulo operator to count the number of odd numbers in the array. If x % 2 == 1, then the number is odd, not even.
   :feedback_c: III and IV use the division operator, not the modulo operator. This does not check if the number is even.
   :feedback_d: I is correct, but II increments the counter for odd numbers, not even numbers.
   :feedback_e: II counts the odd numbers instead of the even numbers. If x % 2 == 1, the number is odd, not even. IV does not use the modulo operator (%), which checks if numbers are even or odd.


   Consider the following method ``evens``, which finds the number of even numbers present in an array. Which of the following segments of code would correctly replace ``/* to be completed */``?

   .. code-block:: java

     public int evens(int [] arr)
     {
        int count = 0;

        for (int x : arr)
        {
           /* to be completed */
        }

        return count;
     }

     // I
     if (x % 2 == 0)
        count++;

     // II
     if (x % 2 == 1)
        count++;

     // III
     if (x / 2 == 0)
        count++;

     // IV
     if (x / 2 == 1)
        count++;


.. mchoice:: mid_1_9
   :answer_a: "My name is Piglet!"
   :answer_b: "Piglet"
   :answer_c: "My name is Animal!"
   :answer_d: "Animal"
   :answer_e: "Oink"
   :correct: a
   :feedback_a: At run-time, piglet is a Pig object. The compiler uses the overwritten getName method located in the Pig class, which prints out "My name is " before calling on the getName method in the Animal class.
   :feedback_b: This would be correct if the getName method had not been overwritten in the Pig class. Because piglet is a Pig object at run-time, the compiler uses the getName method from the Pig class.
   :feedback_c: Check the constructor method in the Pig class. The Pig class constructor uses the Animal class constructor that has one String parameter, not the default Animal constructor.
   :feedback_d: The constructor in the Pig class uses the Animal class constructor that takes in a string parameter, not the default constructor. The getName method has been overwritten in the Pig class, so "My name is " is printed before the name of the object.
   :feedback_e: Check the problem and note which method has been used. This is what is returned by the makeNoise method.

   Consider the classes ``Animal`` and ``Pig`` shown below. What is printed as a result of executing the code below?

   .. code-block:: java

      public class Animal
      {
          private String name;

          public Animal(String theName)
      	  {
      	      name = theName;
      	  }

      	  public Animal()
      	  {
      	      name = "Animal";
      	  }

          public String makeNoise() { return ""; };

      	  public String getName()
      	  {
      	      return name;
          }
      }

      public class Pig extends Animal
      {
           public Pig(String theName)
      	   {
      	       super(theName);
      	   }

      	   public String makeNoise()
      	   {
      	       return "Oink!";
      	   }

      	   public String getName()
      	   {
      	       return "My name is " + super.getName() + "!";
      	   }

           public static void main(String[] args)
           {
              Animal piglet = new Pig("Piglet");
              System.out.print(piglet.getName());
           }
      }



.. mchoice:: mid_1_10
   :answer_a: arr[i] / 2 = 2
   :answer_b: arr[i] % 2 == 1
   :answer_c: arr[i] / 2 == 1
   :answer_d: arr[i] % 2 == 0
   :answer_e: arr[i] / 2 == 0
   :correct: d
   :feedback_a: To check if a number is even, the modulo operator (%) should be used.
   :feedback_b: This method checks to see if a number is odd, not even. Because this method changes even numbers, not odd numbers, we do not need to find odd numbers.
   :feedback_c: To check if a number is even, the modulo operator (%) should be used.
   :feedback_d: If the value at arr[i] divided by two leaves a remainder of 0, then the number is even and should be reassigned.
   :feedback_e: To check if a number is even, the modulo operator (%) should be used.

   Consider the following method oddArray, which changes every even number value in the array to 0. By the end of the method, only odd numbers will be present in the array. Which line correctly completes  ``/* to be determined */`` to make the code work as intended?

   .. code-block:: java

      public void oddArray (int[] arr)
      {
          for (int i = 0; i < arr.length; i++)
      	  {
              //if the number at arr[i] is even, it becomes 0
              if( /* to be determined */ )
                  arr[i] = 0;
      	  }
      }

.. mchoice:: mid_1_11
   :answer_a: (x < 10) && (x > 5)
   :answer_b: (x > 10) && (x <=5)
   :answer_c: (x <= 10) && (x > 5)
   :answer_d: (x <= 10) || (x > 5)
   :answer_e: (x > 10) || (x <= 5)
   :correct: d
   :feedback_a: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (!A && !B). Also, (x < 10) is not correct negation for (x > 10); the correct negation is (x <= 10).
   :feedback_b: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (A && B).
   :feedback_c: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (!A && !B). The AND should be changed to an OR.
   :feedback_d: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is equivalent to (!A || !B), according to DeMorgan's principle. The negation of (x > 10) is (x <= 10), and the negation of (x <= 5) is (x > 5).
   :feedback_e: Use A and B to represent the expressions -- A becomes (x > 10), B becomes (x <= 5). ! (A && B) is NOT equivalent to (A || B). Both A and B should also be negated.

   Which of the following is equivalent to ``! ( (x > 10) && (x <= 5) )``?

.. mchoice:: mid_1_12
   :answer_a: 12
   :answer_b: 243
   :answer_c: 81
   :answer_d: 15
   :answer_e: 27
   :correct: c
   :feedback_a: This would be correct if the recursive method called 3 + mystery (num - 1). Check the recursive call and try again.
   :feedback_b: This method calculates 3 ^ num. 3 ^ 4 is not equal to 243, so check your tracing and try again.
   :feedback_c: This method calculates 3 ^ num. It goes through the recursive calls until num reaches 1, then 3 is multiplied by itself (num) times. The method has been called four times, and 3 ^ 4 is 81.
   :feedback_d: This would be correct if the recursive method called 3 + mystery (num - 1), and num was equal to 5. Check the base case and the parameter and try again.
   :feedback_e: This method calculates 3 ^ num. 3 ^ 4 is not equal to 27, so check your tracing and try again.


   Consider the method ``mystery``. What is returned as a result of ``mystery(4)``?

   .. code-block:: java

     public int mystery (int num)
     {
         if (num == 1)
             return 3;
         else
             return 3 * mystery (num - 1);
     }

.. mchoice:: mid_1_13
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: II and III only
   :correct: e
   :feedback_a: A Fish is NOT a type of Goldfish. The Fish class does not inherit from the Goldfish class, so a Fish cannot be instantiated as a Goldfish object.
   :feedback_b: II is correct, but III is correct as well. A Goldfish IS-A type of Fish, and a Fish IS-A type of Animal.
   :feedback_c: III is correct, but II is correct as well. A Goldfish IS-A type of Fish, and a Fish IS-A type of Animal.
   :feedback_d: II is correct, but a Fish is NOT a type of Goldfish. A Fish cannot be instantiated as a Goldfish object, because the Fish class does not inherit from the Goldfish class.
   :feedback_e: A Goldfish IS-A type of Fish, and a Fish IS-A type of Animal. The Goldfish class inherits from the Fish class, and the Fish class inherits from the Animal class.

   Consider the ``Animal``, ``Fish``, and ``Goldfish`` classes shown below.  Which of the following object declarations will compile without error?

   .. code-block:: java

     public class Animal
     {
         /* no constructors or other methods have been declared */
     }

     public class Fish extends Animal
     {
         /* no constructors or other methods have been declared */
     }

     public class Goldfish extends Fish
     {
         /* no constructors or other methods have been declared */
     }

     I. Goldfish glub = new Fish();

     II. Animal glub = new Fish();

     III. Fish glub = new Goldfish();

.. mchoice:: mid_1_14
   :answer_a: (int) (Math.random() + 1) * 50
   :answer_b: (int) (Math.random() * 50) + 1
   :answer_c: (int) (Math.random() + 1 * 50)
   :answer_d: (int) Math.random() * 50
   :answer_e: (int) (Math.random() * 50)
   :correct: e
   :feedback_a: This always returns 50. Math.random() + 1 calculates a value between 1 and 1.9, and when this value is cast as an int it becomes 1. 1 * 50 always returns 50.
   :feedback_b: This calculates a random number between 1 and 50, but indexes of arrays start at 0 and end at array.length - 1.
   :feedback_c: This always returns 50. 1 * 50 returns 50 since multiplication takes precedence befores addition. The value of Math.random() + 50 always falls between 50.0 and 50.9, and this value becomes 50 when it is cast as an int.
   :feedback_d: This always returns 0, since Math.random() returns a value between 0 and 0.9. When the value of Math.random() is cast an int, its value becomes 0. 0 * 50 returns 0.
   :feedback_e: This correctly calculates a random index between 0 and 49 for the array.

   You have an array ``values`` filled with 50 integers. Which of the following correctly produces a random index of ``values``?

.. mchoice:: mid_1_15
   :answer_a: hciwdnas
   :answer_b: sandwich
   :answer_c: andwichandwichndwichdwichwichichchh
   :answer_d: hchichwichdwichndwichandwich
   :answer_e: Nothing is printed because an infinite loop occurs
   :correct: a
   :feedback_a: The recursive call occurs until the length of s equals 0, then the letters of the word are printed in reverse order.
   :feedback_b: This would occur if the print statement came before the recursive call. Because the compiler works through the recursive call before moving to the other statements, the letters are printed in reverse order.
   :feedback_c: This would occur if the print statement came before the recursive call and included s.substring(1), not s.substring(0, 1). The statements are printed after the recursive call is made, so the compiler works through every recursive call before it prints out the letters, and the letters are printed in reverse order.
   :feedback_d: This would occur if the print statement included s.substring(1). Each call of the printString method prints only one letter at a time, because the substring that is printed is s.substring(0,1).
   :feedback_e: This method ends when s.length() equals zero, so the base case is reached after eight passes for the word "sandwich". An infinite loop will not occur.

   Consider the method ``printString`` shown below. What is printed as a result of printString("sandwich")?

   .. code-block:: java

      public void printString(String s)
      {
         if (s.length() > 0)
         {
            printString(s.substring(1));
            System.out.print(s.substring(0, 1));
         }
      }

.. mchoice:: mid_1_16
   :answer_a: 8
   :answer_b: 10
   :answer_c: 100
   :answer_d: 2000
   :answer_e: 11
   :correct: e
   :feedback_a: 2 ^ 8 = 256. There will not be enough passes to guarantee finding the value. Remember that binary search requires log2 (number of elements) passes to guarantee that a value will be found.
   :feedback_b: 2 ^ 10 = 1024. There will not be enough passes to guarantee finding the value. Remember that binary search requires log2 (number of elements) passes to guarantee that a value will be found.
   :feedback_c: The key will be found in 100 passes, but there is a better answer. Remember that binary search requires log2 (number of elements) passes to find a value.
   :feedback_d: With binary search, every element of the array does not have to be checked. Remember that although sequential search would require 2000 passes to guarantee the value was found, binary search requires log2 (number of elements) passes to find an object.
   :feedback_e: 2 ^ 11 = 2048. Because 2048 is larger than 2000, 11 passes will be more than enough to guarantee finding the value.

   A sorted array of integers containing 2000 elements is to be searched for ``key`` using a binary search method. Assuming ``key`` is in the array, what is the maximum number of iterations needed to find ``key``?

.. mchoice:: mid_1_17
   :answer_a: When the length of str is less than 15
   :answer_b: When the length of str is greater than or equal to 15
   :answer_c: When the length of str is equal to 0
   :answer_d: For all string inputs
   :answer_e: For no string inputs
   :correct: e
   :feedback_a: If the string length is less than 15, "s" will be printed, but the recursive call will still be made.
   :feedback_b: This would be correct if the recursive call was located in an else statement. If the string length is 15 or greater, "s" will not be printed, but the recursive call will still occur.
   :feedback_c: If the string has length 0, the if statement will occur and "s" will be printed, but the recursive call will still occur.
   :feedback_d: Check the recursive call. The method is always called recursively, regardless of the string length.
   :feedback_e: There is no base case present in this method that stops the recursive calls. This method will continue until the compiler runs out of memory. You could fix this code by placing the recursive call in an else statement or creating a base case to end the call.


   The method ``recur`` is shown below. In which case will ``recur`` terminate without error?

   .. code-block:: java

      public void recur (String str)
      {
           if (str.length() < 15)
               System.out.print("s");

           recur(str + "!");
      }

.. mchoice:: mid_1_18
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :correct: a
   :feedback_a: A SeedlessGrape IS-A fruit, so the inheritance relationship is correct. The constructor for the SeedlessGrape class has two string parameters.
   :feedback_b: The Grape class constructor has two parameters. Although a Grape IS-A fruit, the Grape constructor must have two string parameters to compile without error.
   :feedback_c: A Grape is NOT a SeedlessGrape. The inheritance relationship is incorrect, and III does not compile. Object a is a Fruit at compile-time and a SeedlessGrape at run-time. A SeedlessGrape IS-A Fruit, so the code compiles.

    Consider the ``Fruit``, ``Grape``, and ``SeedlessGrape`` classes shown below. Which of the following object declarations will compile without error?

   .. code-block:: java

      public class Fruit
      {
          private String name;
          private boolean seeds;

          public Fruit(String theName)
          {
              name = theName;
              seeds = true;
          }

          public void setSeeds()
          {
              seeds = !seeds;
          }

      }

      public class Grape extends Fruit
      {
          private String color;

          public Grape(String theName, String theColor)
          {
              super(theName);
              color = theColor;
          }
      }

      public class SeedlessGrape extends Grape
      {
          public SeedlessGrape(String theName, String theColor)
          {
              super(theName, theColor);
              setSeeds();
          }
      }

      I. Fruit a = new SeedlessGrape("grape", "red");
      II. Grape b = new Grape("grape");
      III. SeedlessGrape c = new Grape("grape", "green");

.. mchoice:: mid_1_19
   :answer_a: It will never produce a run time error.
   :answer_b: It will always produce a run time error.
   :answer_c: Only when the length of the input string is greater than or equal to 16.
   :answer_d: Only when an empty string is input.
   :answer_e: Whenever the input string length is less than 16.
   :correct: b
   :feedback_a: Since there is no terminating condition surrounding our recursive method call (because the call lies outside of the if statement), it will keep doing recursive calls until we eventually get a run time error.
   :feedback_b: Since there is no statement that terminates the recursive call to stringRecursion (the length of the string s will increase until it is greater than 16, but the recursive call will keep happening because the recursive call is outside the if statement) the computer will keep doing recurisve calls until it runs out of memory and a run time error will happen.
   :feedback_c: Since the recursive call is outside the condition and the conditional doesn't include a return then this will result in infinite recursion and eventually a run time error.
   :feedback_d: The length of the string will not matter in this case because the recursive call to stringRecursion will always happen, since the recursive call lies outside the body of the conditional. The string length will only determine if the string s is printed out to the console or not.
   :feedback_e: We will get run time errors regardless of the length of the string s. This is due to the fact that the recursive call lies outside the body of the conditional. If the length of the string s is less than 16 then we will get something printed out to the console until the length of s becomes greater than 16, and then we will continue in a infinite recursion.

   When will the method ``stringRecursion`` produce a run time error?

   .. code-block:: java

      public void stringRecursion(String s)
      {

        if (s.length() < 16)
        {
          System.out.println(s);
        }
        stringRecursion(s + "*");
      }

.. mchoice:: mid_1_20
   :answer_a: s="rainbow"; b=8;
   :answer_b: s="rain";  b=8;
   :answer_c: s="rainbow"; b=4;
   :answer_d: s="rain"; b=4;
   :answer_e: s="bow";  b=4;
   :correct: d
   :feedback_a: Strings are immutable so changing str doesn't affect the string that s refers to.  The value of b also will not change since Java passes a copy of the value.
   :feedback_b: Java copies the value of primitive types when they are passed to methods so nothing done in the method test affects the value of b.
   :feedback_c: Strings are immutable so changing str doesn't affect the string that s refers to.
   :feedback_d: Since strings are immutable any change returns a new string and doesn't affect what s refers to.  Also the value of primitive types are copied and nothing done in test affects the orignal primitive value.
   :feedback_e: The string that s refers to is not changed by the test method.  All changes to string result in a new string object.


   Consider the following method.  Assume that ``String s = "rain";`` and ``int b = 4;`` have been executed.  What are the values of ``s`` and ``b`` after ``test(s,b)`` is executed?

   .. code-block:: java

      public static void test(String str, int y)
      {
         str = str + "bow";
         y = y * 2;
      }
