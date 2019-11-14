.. qnum::
   :prefix: 3-11-
   :start: 1

   
Multiple Choice Exercises
=================================

Easier Multiple Choice Questions
----------------------------------

These problems are easier than most of those that you will usually see on the AP CS A exam. 

.. mchoice:: qce_1
   :practice: T
   :answer_a: x is negative
   :answer_b: x is zero
   :answer_c: x is positive
   :correct: c
   :feedback_a: This will only print if x has been set to a number less than zero. Has it? 
   :feedback_b: This will only print if x has been set to 0.  Has it?
   :feedback_c: The first condition is false and x is not equal to zero so the else will execute.  

   What does the following code print when x has been set to 187?
   
   .. code-block:: java 

     if (x < 0)
     {
        System.out.println("x is negative");
     }
     else if (x == 0) 
     {
         System.out.println("x is zero"); 
     }
     else 
     {
         System.out.println("x is positive");
     }
      
.. mchoice:: qce_2
   :practice: T
   :answer_a: first case
   :answer_b: second case 
   :correct: b
   :feedback_a: This will print if x is greater than or equal 3 and y is less than or equal 2.  In this case x is greater than 3 so the first condition is true, but the second condition is false.
   :feedback_b: This will print if x is less than 3 or y is greater than 2.  

   What is printed when the following code executes and x equals 4 and y equals 3?   
   
   .. code-block:: java 

     if (!(x < 3 || y > 2)) 
        System.out.println("first case");
     else 
        System.out.println("second case");

.. mchoice:: qce_3
   :practice: T
   :answer_a: A
   :answer_b: B
   :answer_c: C
   :answer_d: D
   :answer_e: E
   :correct: d
   :feedback_a: Notice that each of the first 4 statements start with an if.  What will actually be printed?  Try it.  
   :feedback_b: Each of the first 4 if statements will execute.
   :feedback_c: Check this in DrJava.
   :feedback_d: Each of the if statements will be executed. So grade will be set to B then C and finally D.  
   :feedback_e: This will only be true when score is less than 60.   

   What is the value of grade when the following code executes and score is 80?  
   
   .. code-block:: java 

     if (score >= 90) grade = "A";
     if (score >= 80) grade = "B";
     if (score >= 70) grade = "C";
     if (score >= 60) grade = "D";
     else grade = "E";

.. mchoice:: qce_4
   :practice: T
   :answer_a: first case
   :answer_b: second case
   :answer_c: You will get a error because you can't divide by zero.  
   :correct: c
   :feedback_a: This will print if either of the two conditions are true.  The first isn't true but the second will cause an error.
   :feedback_b: This will print if both of the conditions are false.  But, an error will occur when testing the second condition.   
   :feedback_c: The first condition will be false so the second one will be executed and lead to an error since you can't divide by zero.

   What is printed when the following code executes and x has been set to zero and y is set to 3?  
   
   .. code-block:: java 

     if (x > 0 || (y / x) == 3) 
        System.out.println("first case");
     else 
        System.out.println("second case");



Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CS A exam.

.. mchoice:: qcm_1
   :practice: T
   :answer_a: (!c) && (!d)
   :answer_b: (c || d)
   :answer_c: (c && d)
   :answer_d: !(c && d)
   :answer_e: (!c) || (!d)
   :correct: a
   :feedback_a: NOTing (negating) an OR expression is the same as the AND of the individual values NOTed (negated). See DeMorgans laws.
   :feedback_b: NOTing an OR expression does not result in the same values ORed.  
   :feedback_c: You do negate the OR to AND, but you also need to negate the values of c and d. 
   :feedback_d: This would be equivalent to (!c || !d)
   :feedback_e: This would be equivalent to !(c && d)

   Which of the following expressions is equivalent to !(c || d) ?  
   
.. mchoice:: qcm_2
   :practice: T
   :answer_a: x = 0;
   :answer_b: if (x > 2) x *= 2;
   :answer_c: if (x > 2) x = 0;
   :answer_d: if (x > 2) x = 0; else x *= 2;
   :correct: c
   :feedback_a: If x was set to 1 then it would still equal 1.
   :feedback_b: What happens in the original when x is greater than 2?  
   :feedback_c: If x is greater than 2 it will be set to 0.  
   :feedback_d: In the original what happens if x is less than 2?  Does this give the same result?

   Which of the following is equivalent to the code segment below?  
   
   .. code-block:: java

     if (x > 2) 
        x = x * 2;
     if (x > 4) 
        x = 0;

.. mchoice:: qcm_3
   :practice: T
   :answer_a: x = 0;
   :answer_b: if (x > 0) x = 0;
   :answer_c: if (x < 0) x = 0;
   :answer_d: if (x > 0) x = -x; else x = 0;
   :answer_e: if (x < 0) x = 0; else x = -1;
   :correct: a
   :feedback_a: No matter what x is set to originally, the code will reset it to 0.
   :feedback_b: Even if x is < 0, the above code will set it to 0.
   :feedback_c: Even if x is > than 0 originally, it will be set to 0 after the code executes.
   :feedback_d: The first if statement will always cause the second to be executed unless x already equals 0, such that x will never equal -x.
   :feedback_e: The first if statement will always cause the second to be executed unless x already equals 0, such that x will never equal -x.

   Which of the following is equivalent to the code segment below?  
   
   .. code-block:: java

     if (x > 0) 
        x = -x;
     if (x < 0) 
        x = 0;

.. mchoice:: qcm_4
   :practice: T
   :answer_a: I and III only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: I, II, and III
   :correct: a
   :feedback_a: Choice I uses multiple if's with logical ands in the conditions to check that the numbers are in range. Choice II won't work since if you had a score of 94, it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". Choice III uses ifs with else if to make sure that only one conditional is executed.
   :feedback_b: Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". This could have been fixed by using else if instead of just if. 
   :feedback_c: III is one of the correct answers. However, choice I is also correct. Choice I uses multiple if's with logical ands in the conditions to check that the numbers are in range. Choice III uses ifs with else if to make sure that the only one conditional is executed.  
   :feedback_d: Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". This could have been fixed by using else if instead of just if.
   :feedback_e: Choice II won't work since if you had a score of 94 it would first assign the grade to an "A" but then it would execute the next if and change the grade to a "B" and so on until the grade was set to a "C". This could have been fixed by using else if instead of just if.

   At a certain high school students receive letter grades based on the following scale: 93 or above is an A, 84 to 92 is a B, 75 to 83 is a C, and below 75 is an F. Which of the following code segments will assign the correct string to grade for a given integer score?
   
   .. code-block:: java

     I.   if (score >= 93)
             grade = "A";
          if (score >= 84 && score <=92)
             grade = "B";
          if (score >=75 && score <= 83)
             grade = "C";
          if (score < 75)
             grade = "F";

     II.  if (score >= 93)
             grade = "A";
          if (score >= 84)
             grade = "B";
          if (score >=75)
             grade = "C";
          if (score < 75)
             grade = "F";

     III. if (score >= 93)
             grade = "A";
          else if (score >= 84)
             grade = "B";
          else if (score >=75)
             grade = "C";
          else
             grade = "F";

   
Hard Multiple Choice Questions
----------------------------------

These problems are harder than most of those that you will usually see on the AP CS A exam.


    
.. mchoice:: qch_2
   :practice: T
   :answer_a: s == (m - 5) && (2 * s + 3) == (m + 3)
   :answer_b: (s == m - 5) && (s - 3 == 2 * (m - 3))
   :answer_c: (s == (m + 5)) && ((s + 3) == (2 * m + 3))
   :answer_d: s == m + 5 && s + 3 == 2 * m + 6
   :answer_e: None of the above is correct.
   :correct: d
   :feedback_a: This can't be right because Susan is 5 years older than Matt, so the first part is wrong. It has Susan equal to Matt's age minus 5, which would have Matt older than Susan.
   :feedback_b: This would be true if Susan was 5 years younger than Matt and three years ago she was twice his age. But, how could she be younger than him now and twice his age three years ago?
   :feedback_c: This is almost right. It has Susan as 5 years older than Matt now. But the second part is wrong. Multiplication will be done before addition so (2 * m + 3) won't be correct, for in 3 years Susan will be twice as old as Matt. It should be (2 * (m + 3)) or (2 * m + 6)
   :feedback_d: Susan is 5 years older than Matt so s == m + 5 should be true and in 3 years she will be twice as old, so s + 3 = 2 * (m + 3) = 2 * m + 6
   :feedback_e: s == m + 5 && s + 3 == 2 * m + 6 is correct

   Susan is 5 years older than Matt. Three years from now Susan's age will be twice Matt's age. What should be in place of the following condition to solve this problem?
   
   .. code-block:: java

     for (int s = 1; s <=100; s++) {
        for (int m = 1; m <= 100; m++) {
           if (condition)
              System.out.println("Susan is " + s + " and Matt is " + m);
        }
     }

.. mchoice:: qch_3
   :practice: T
   :answer_a: (x > 15 && x < 18) && (x > 10)
   :answer_b: (y < 20) || (x > 15 && x < 18)
   :answer_c: ((x > 10) || (x > 15 && x < 18)) || (y < 20)
   :answer_d: (x < 10 && y > 20) && (x < 15 || x > 18) 
   :correct: c
   :feedback_a: This can't be right as it's only checking the x variable, however the original statement can solely depend on the y variable in some cases.
   :feedback_b: There's a third condition on x that can affect the output of the statement which is not considered in this solution.
   :feedback_c: The commutative property allows the terms to be switched around, while maintaining the value. In this case, the || symbol is used with the commutative property and the statement included the && must stay together to follow the laws of logic.
   :feedback_d: This is the negation of the original statement, thus returning incorrect values.

   Assuming that x and y have been declared as valid integer values, which of the following is equivalent to this statement?
   
   .. code-block:: java

     (x > 15 && x < 18) || (x > 10 || y < 20)
     
.. mchoice:: qch_4
   :practice: T
   :answer_a: first
   :answer_b: first second
   :answer_c: first second third
   :answer_d: first third 
   :answer_e: third
   :correct: d
   :feedback_a: This will print, but so will something else.
   :feedback_b: Are you sure about the "second"?  This only prints if y is less than 3, and while it was originally, it changes.
   :feedback_c: Are you sure about the "second"?  This only prints if y is less than 3, and while it was originally, it changes.
   :feedback_d: The first will print since x will be greater than 2 and the second won't print since y is equal to 3 and not less than it.  The third will always print.
   :feedback_e: This will print, but so will something else.
   
   What would the following print?  
   
   .. code-block:: java
   
      int x = 3;
      int y = 2;
      if (x > 2) 
         x++;
      if (y > 1) 
         y++;
      if (x > 2) 
         System.out.print("first ");
      if (y < 3) 
         System.out.print("second ");
      System.out.print("third");
   
.. mchoice:: qch_5
   :practice: T
   :answer_a: first 
   :answer_b: second
   :answer_c: first second 
   :answer_d: Nothing will be printed
   :correct: b
   :feedback_a: When you do integer division you get an integer result so y / x == 0 and is not greater than 0.   
   :feedback_b: The first will not print because integer division will mean that y / x is 0.  The second will print since it is not in the body of the if (it would be if there were curly braces around it).  
   :feedback_c: Do you see any curly braces?  Indention does not matter in Java. 
   :feedback_d: This would be true if there were curly braces around the two indented statements.  Indention does not matter in Java.  If you don't have curly braces then only the first statement following an if is executed if the condition is true.
   
   What would the following print?  
   
   .. code-block:: java
   
      int x = 3;
      int y = 2;
      if (y / x > 0) 
         System.out.print("first ");
         System.out.print("second ");
   
   
   




