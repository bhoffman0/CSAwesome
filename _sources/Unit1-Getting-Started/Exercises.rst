Multiple Choice Exercises
=================================

.. qnum::
   :prefix: 1-9-
   :start: 1
   


.. mchoice:: qve_1
   :practice: T
   :answer_a: 2
   :answer_b: 0
   :answer_c: 3
   :answer_d: 1
   :correct: a
   :feedback_a: Whenever the first number is smaller than the second, the remainder is the first number.  Remember that % is the remainder and 3 goes into 2 0 times with a remainder of 2.  
   :feedback_b: This is the number of times that 3 goes into 2 but the % operator gives you the remainder.  
   :feedback_c: Try it.  Remember that % gives you the remainder after you divide the first number by the second one.
   :feedback_d: This would be correct if it was 3 % 2 since 2 would go into 3 one time with a remainder of 1.

   What does the following code print?
   
   .. code-block:: java 

     System.out.println(2 % 3);
     
.. mchoice:: qve_2
   :practice: T
   :answer_a: 3
   :answer_b: 0
   :answer_c: 4
   :answer_d: 1
   :correct: c
   :feedback_a: This is the number of times that 5 goes into 19, but % is the remainder.
   :feedback_b: This would only be true if the first number was evenly divisible by the second number.   
   :feedback_c: 5 goes into 19 3 times (15) with a remainder of 4 (19-15=4)
   :feedback_d: This would be correct if it was 19 % 2, but here we are dividing by 5.  

   What does the following code print?
   
   .. code-block:: java 

     System.out.println(19 % 5);
     
.. mchoice:: qve_3
   :practice: T
   :answer_a: 0.3333333333333333
   :answer_b: 0
   :answer_c: It will give a run-time error
   :answer_d: 0.3
   :answer_e: It will give a compile-time error
   :correct: b
   :feedback_a: This would be correct if it was 1.0 / 3 or 1 / 3.0.
   :feedback_b: When two integers are divided the results will also be integer and the fractional part is thrown away.
   :feedback_c: You would get a run-time error if it was 1 / 0, because you can not divide by zero.
   :feedback_d: Try it. Is this what you get?
   :feedback_e: Integer division is allowed in Java.  It gives an integer result.

   What does the following code print?
   
   .. code-block:: java 

     System.out.println(1 / 3);
     
.. mchoice:: qve_4
   :practice: T
   :answer_a: 24
   :answer_b: 14
   :answer_c: This will give a compile time error.
   :answer_d: 16
   :correct: d
   :feedback_a: This would be true if it was System.out.println(((2 + 3) * 5) - 1), but without the parentheses the multiplication is done first.
   :feedback_b: This would be true if it was System.out.println(2 + (3 * (5 - 1))), but without the parentheses the multiplication is done first and the addition and subtraction are handled from left to right.
   :feedback_c: This will compile and run.  Try it in DrJava.  Look up operator precedence in Java.  
   :feedback_d: The multiplication is done first (3 * 5 = 15) and then the addition (2 + 15 = 17) and finally the subtraction (17 - 1 = 16).

   What does the following code print?
   
   .. code-block:: java 

    System.out.println(2 + 3 * 5 - 1);
     
.. mchoice:: qve_5
   :practice: T
   :answer_a: 9.6982
   :answer_b: 12 
   :answer_c: 10
   :answer_d: 9
   :correct: d
   :feedback_a: This would be true if it was b = a.  What does the (int) do? 
   :feedback_b: This is the initial value of b, but then b is assigned to be the result of casting the value in a to an integer. Casting to an integer from a double will truncate (throw away) the digits after the decimal.
   :feedback_c: Java does not round when converting from a double to an integer.
   :feedback_d: When a double is converted into an integer in Java, it truncates (throws away) the digits after the decimal.

   Given the following code segment, what is the value of b when it finishes executing?
   
    .. code-block:: java 

      double a = 9.6982;
      int b = 12;
      b = (int) a;
      
.. mchoice:: qve_new7
   :practice: T
   :answer_a: It will print 0
   :answer_b: It will give a run-time error
   :answer_c: It will give a compile-time error (won't compile)
   :answer_d: It will print 5
   :correct: b
   :feedback_a: This would be true if it was System.out.println(0 / 5)
   :feedback_b: You can't divide by 0 so this cause a run-time error.
   :feedback_c: You might think that this would be caught at compile time, but it isn't.  
   :feedback_d: This would be true if it was System.out.println(5 / 1) 

   What does the follow code do when it is executed?
   
    .. code-block:: java 

      System.out.println(5 / 0);
      

.. mchoice:: qve_new9
   :practice: T
   :answer_a: 0
   :answer_b: .3 
   :answer_c: 0.3333333333333333
   :answer_d: 0.3 with an infinite number of 3's following the decimal point
   :correct: c
   :feedback_a: This would be true if it was (1 / 3).
   :feedback_b: It will give you more than just one digit after the decimal sign.
   :feedback_c: The computer can not represent an infinite number of 3's after the decimal point so it only keeps 14 to 15 significant digits.
   :feedback_d: The computer can not represent an infinite number of 3's after the decimal point.

   What will the following code print?
   
    .. code-block:: java 

      System.out.println(1.0 / 3);
      
.. mchoice:: qve_new10
   :practice: T
   :answer_a: x = 3, y = 3, z = 9
   :answer_b: x = 4, y = 3, z = 9
   :answer_c: x = 0, y = 3, z = 0
   :answer_d: x = 4, y = 4, z = 9
   :correct: b
   :feedback_a: This would be true if the x++ wasn't there.
   :feedback_b: Fist x is set to 3, then y is also set to 3, and next z is set to 3 * 3 = 9.  Finally x is incremented to 4.  
   :feedback_c: You might think that y = x means that y takes x's value, but y is set to a copy of x's value.
   :feedback_d: You might think that y = x means that if x is incremented that y will also be incremented, but y = x only sets y to a copy of x's value and doesn't keep them in sync.  

   What are the values of x, y, and z after the following code executes?
   
    .. code-block:: java 

      int x = 3;
      int y = x;
      int z = x * y;
      x++;
     

   



     

