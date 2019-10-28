.. qnum::
   :prefix: 14-2-
   :start: 1

Exam 1 for the AP CS A Exam (not timed)
----------------------------------------

The following problems are similar to what you might see on the AP CS A exam.  Please answer each to the best of your ability.

.. mchoice:: qtnt1_1
   :answer_a: (a >= b) && (b >= 0)
   :answer_b: !(a > b) || !(b >= 0)
   :answer_c: (a >= b) || (b > 0)
   :answer_d: (a > b) || (b >= 0)
   :answer_e: (a > b) && (b >= 0)
   :correct: d
   :feedback_a: The "!" would negate everything inside the parentheses. There are a few mistakes here. The opposite of <= is not >= and the opposite of AND is OR.
   :feedback_b: Both of the expressions inside the parentheses were altered. If we wanted to distribute the negation symbol "!" then we would leave the expressions inside the parentheses alone.
   :feedback_c: Negating less than or equals (<=) results in greater than (>). In addition, less than (<) in the second argument should have been changed to greater than or equals (>=).
   :feedback_d: Using DeMorgan's Law we negate everything.  This includes our AND statement (which becomes an OR) and everything inside both parentheses.
   :feedback_e: Here we forgot to negate our AND (&&) into an OR (||).

   Which of the following is equivalent to the statement below? Recall DeMorgan's Law.

   .. code-block:: java

     !((a <= b) && (b < 0))


.. mchoice:: qtnt1_2
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


.. mchoice:: qtnt1_3
   :answer_a: II only
   :answer_b: I only
   :answer_c: I and II only
   :answer_d: II and III only
   :answer_e: III only
   :correct: a
   :feedback_a: If an array is already sorted from smallest to largest then we do not need to move anything in the array and we would only need to go through each element at most once, so this is fastest run time for insertion sort.
   :feedback_b: An array in reverse order is actually the worst run time for insertion sort because we would need to move everything to make it in order from smallest to largest.
   :feedback_c: II is correct, but number I will actually be the worst run time for insertion sort since all values will have to be moved each time through the loop.
   :feedback_d: While II is the correct anwser, an array in random order will have average run time.
   :feedback_e: When the array is not sorted the run time will be average.

   In which of these cases will an ascending order (from smallest to largest) insertion sort have the fastest run time?

   .. code-block:: java

      I.   An array that is in reverse order (from largest to smallest).
      II.  An array that is in sorted order already (from smallest to largest).
      III. An array that is in random order (not already sorted).

.. mchoice:: qtnt1_4
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

.. mchoice:: qtnt1_5
   :answer_a: First: 15 Last: 29
   :answer_b: First: 15 Last: 30
   :answer_c: First: 16 Last: 29
   :answer_d: First: 16 Last: 30
   :answer_e: First: 16 Last: 28
   :correct: d
   :feedback_a: We add 1 to value before actually printing it, so the first value printed will be 16. The last time through the loop the value will be 29 (less than 30) but then the code will add one so it will print 30.
   :feedback_b: We add 1 to value before actually printing it, so the first value printed will be 16.
   :feedback_c: The last time through the loop the value will be 29 (less than 30) but then the code will add one so it will print 30.
   :feedback_d: The code adds one to value before the value is printed so 16 will be the first value printed.   The last time through the loop the value will be 29 (less than 30) but then the code will add one so it will print 30.
   :feedback_e: The last time through the loop the value will be 29 (less than 30) but then the code will add one so it will print 30.

   Consider the following block of code. What are the first and last numbers printed after running the code?

   .. code-block:: java

      int value = 15;
      while (value < 30)
      {
          value++;
          System.out.println(value);
      }

.. mchoice:: qtnt1_6
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

.. mchoice:: qtnt1_7
   :answer_a: I and II are exactly equivalent for all input values n.
   :answer_b: I and II are only equivalent when n is an even number.
   :answer_c: I and II are only equivalent when n = 0
   :answer_d: I and II are equivalent for all values except when n = 0
   :answer_e: I and II are never going to have the exact same outputs.
   :correct: e
   :feedback_a: I and II will never be equivalent because because count is incremented after it is printed in Code block I and before it is printed in Code block II.
   :feedback_b: I and II are not equivalent when n is even.
   :feedback_c: When n = 0, Code block I will print out 0, while Code block 2 will print out 1.
   :feedback_d: The code blocks never output the same value.
   :feedback_e: I and II will never be equivalent because count is incremented after it is printed in Code block I and before it is printed in Code block II.

   Given that both ``count`` and ``n`` are integer values, which of the following statements is true about both code blocks?

   .. code-block:: java

      // Code block I
      for (count = 0; count <= n; count++)
      {
          System.out.println(count);
      }

      //Code block II
      count = 0;
      while (count <= n)
      {
          count = count + 1;
          System.out.println(count);
      }

.. mchoice:: qtnt1_8
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II
   :answer_e: II and III
   :correct: c
   :feedback_a: A subclass needs to specify its own constructors.
   :feedback_b: A subclass has the ability to add new methods and variables that are unique to it (meaning its parent class dosen't contain them)
   :feedback_c: Subclasses can overide public methods from their parent classes to specialize behavior.
   :feedback_d: Neither of these statements are true.
   :feedback_e: Statement III is correct, but not statement II.

   Consider the following class declarations. Which statements are true?

   .. code-block:: java

      public class Animal
      {
       /* Some code */
      }

      public class Cat extends Animal
      {
         /* Some code */
      }

     I. Cat inherits the constructors of Animal
     II. Cat cannot add new methods and private instance variables that Animal does not have.
     III. Cat can override existing public methods of Animal

.. mchoice:: qtnt1_9
   :answer_a: k
   :answer_b: k + 1
   :answer_c: k - 1
   :answer_d: 1
   :answer_e: 0
   :correct: b
   :feedback_a: This would be the case if i had the initial value 1 and arr[i] < someValue would be true for all i values.
   :feedback_b: If arr[i] < someValue for all i from 0 to k, HELLO will be printed on each iteration of the for loop. The number of times a loop executes is the biggest value in the loop - the smallest value in the loop + 1 (k - 0 + 1 is k + 1).
   :feedback_c: This would be the case if i had the initial value 2 and arr[i] < someValue would be true for all i values.
   :feedback_d: This would be the case if only one element in the array would fulfill the condition that arr[i] < someValue.
   :feedback_e: This is the minimum number of times that HELLO could be executed.

   Consider the following code. What is the maximum amount of times that ``HELLO`` could possibly be printed?

   .. code-block:: java

      for (int i = 0; i <= k; i++)
      {
         if (arr[i] < someValue)
         {
           System.out.print("HELLO")
         }
      }

.. mchoice:: qtnt1_10
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

.. mchoice:: qtnt1_11
   :answer_a: I only
   :answer_b: II only
   :answer_c: II and III only
   :answer_d: III only
   :answer_e: I, II and III
   :correct: c
   :feedback_a: This method call compiles because class C inherits all the public methods in class B. This will not produce an error.
   :feedback_b: Method II will produce a compile time error because class B (the superclass) does not inherit the methods of class C due to the fact that class C is its subclass. But, it is not the only call that will result in a compile time error.
   :feedback_c: Method II will produce a compile time error because class B (the superclass) does not inherit the methods of class C due to the fact that class C is its subclass. Method III will produce an error because of the parameter it takes in. objectB is not a class C type object which is what the method definition for method III required.
   :feedback_d: This method produces a compile time error, but method II will also produce a compile time error.
   :feedback_e: Methods II and III will both produce compile time errors, but method I works because class C inherits all the public methods of class B.

   Consider the following class definitions. Which of I, II and III below would cause an error when used in place of the missing code in the main method?

   .. code-block:: java

      public class A
      {
        public void method1() { };
      }

      public class B extends A
      {
          // Instance variables and other methods not shown

          public void method1()
          {
            /* implementation not shown */
          }
      }

      public class C extends B
      {
        //Instance variables and other methods not shown

        public void method2(C o)
        {
           /* implementation not shown */
        }

        public static void main(String[] args)
        {
          C objectC = new C();
          B objectB = new B();
          // Missing code
        }
      }

      I objectC.method1();
      II objectB.method2(objectC);
      III objectC.method2(objectB);


.. mchoice:: qtnt1_12
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: II and III
   :answer_e: I and II
   :correct: c
   :feedback_a: Because List is an abstract class you can not create a new object of the type List.
   :feedback_b: The type parameter in a generic ArrayList must be a class type, not a primitive type. int is a primitive type.
   :feedback_c: Since an ArrayList is a List (implements the List interface), we can declare an ArrayList object as a List object.  This is called upcasting since we are casting it to the parent type.
   :feedback_d: III is correct, but II will cause a compile time error since we cannot use a primitive (int) as the type parameter in a generic ArrayList.
   :feedback_e: Both of these solutions will cause an error.

   Which of these declarations will *not* cause an error?

   .. code-block:: java

      I ArrayList<String> stringList = new List<String>();
      II List<int> intList = new ArrayList<int>();
      III List<String> stringList = new ArrayList<String>();

.. mchoice:: qtnt1_14
   :answer_a: I
   :answer_b: II
   :answer_c: III
   :answer_d: IV
   :answer_e: An ArrayIndexOutOfBoundsException will be thrown.
   :correct: c
   :feedback_a: Since the inside for loop starts with t = 0  and continues while t < i (and i begins at 0) it will not be print out every single element of the 4x4 matrix.
   :feedback_b: This anwser is not correct because our inside for loop will start with t = 0 and loop while t < i and, as such, the entire first row of our matrix will be ignored, since both t and i = 0 and t is not less than i.
   :feedback_c: When i = 0, the inner for loop does not get executed and the entire first row of the matrix is ignored. When i = 1 t goes from 0 to 0 and the element matrix[1][0] will be printed out. Similarly, when i = 2 we will print out elements matrix[2][0] and matrix[2][1]. Finally, when i = 3, we will print out matrix[3][0], matrix[3][1] and matrix[3][2].
   :feedback_d: This would be the correct anwser if we kept incrementing i by one (the outer for loop) but the inner for variable t would always be 0. We would get the first element of each row.
   :feedback_e: We will not get an index out of bounds exception since we made sure to increment i only until the max length of the array and the other variable we use to index, t, will only increase while it is still less than i.

   Suppose that the following method takes in a two dimensional array called ``matrix``. After the method call ``printMatrix(matrix)`` what will the output be? Possible options are listed below the method definition.

   .. code-block:: java

      /* assume that matrix has the following values */
      7654
      3210
      4567
      0123

      public static void printMatrix(int[][] matrix)
      {
        for (int i = 0; i < matrix.length; i++)
        {

          for (t = 0; t < i; t++)
          {
            System.out.println(matrix[i][t]);
          }
          System.out.println();
        }
      }

      Possible output:

      I.
      7654
      3210
      4567
      0123

      II.
      7
      32
      456
      0123

      III.
      3
      45
      012

      IV.
      7
      3
      4
      0



.. mchoice:: qtnt1_15
   :answer_a: [0, 1, 2, 3, 5, 7]
   :answer_b: [0, 1, 4, 3, 5, 7]
   :answer_c: [0, 8, 3, 4, 5, 7]
   :answer_d: [0, 8, 4, 3, 5, 7]
   :answer_e: [5, 7, 0, 8, 4, 3]
   :correct: d
   :feedback_a: This is what the ArrayList will look like after the first two operations in the code.
   :feedback_b: This is what the ArrayList will look like before we set the element at index 1 to be 8.
   :feedback_c: This is what would have happened if we thought randomNum was actually 3 and we added the number 4 at the incorrect index.
   :feedback_d: After we add 5 and 7 to the end of the array we remove the element at index 2 (which was 2). Then we use the index we had previously obtained (also 2) to add a new element 4. This pushes the element already at that index (and the ones after it) one space to the right. Fianlly, we set the element at index 1 to be 8. This sets the value at index 1 to 8.
   :feedback_e: This is what we would have happened if we thought the add method would add elements to the beggining of the ArrayList and not the end.


   If randomList is an ``ArrayList`` of ``Integer`` objects and is initially set to {0, 1, 2, 3}, what will randomList look like after the following code is executed?

   .. code-block:: java

     randomList.add(5);
     randomList.add(7);
     int randomNum = randomList.get(2);
     randomList.remove(2);
     randomList.add(randomNum, 4);
     randomList.set(1, 8);


.. mchoice:: qtnt1_16
   :answer_a: edcba
   :answer_b: edcb
   :answer_c: Nothing is printed because an IndexOutOfBoundsException is thrown.
   :answer_d: feeddccbba
   :answer_e: fededcdcbcba
   :correct: a
   :feedback_a: The substring method takes two arguments, a start index (which is inclusive) and an end index (which is exclusive). The first substring is from index 1 (counter + 1) to index 2 (counter + 2). However the second index is not included so its just index 1 which is e. We then simply keep getting every indidual element from the string one by one until the end of the string.
   :feedback_b: This substring is mostly correct but it ends early and is missing the a character at the end.
   :feedback_c: Even though the end of the substring is specified as index counter + 2, which will be past the end of the string the last time through the loop, substring doesn't include the value at the end index, so the code will execute.
   :feedback_d: The first substring element has a start value of index 1 and so f will not be printed out. Also because each substring is a single character, no character will be repeated in the substring.
   :feedback_e: This is what we would have happened if the substring had started at index counter (and not index counter + 1).


   Consider the following code segment. What will be printed as a result of executing the code below?

   .. code-block:: java

      String str = "fedcba";
      int counter = 0;
      while(counter < str.length() - 1)
      {
        System.out.print(str.substring(counter + 1, counter + 2));
        counter++;
      }

.. mchoice:: qtnt1_17
   :answer_a: C c1 = new C();
   :answer_b: B b1 = new B();
   :answer_c: B c2 = new C();
   :answer_d: B b3 = new B(10);
   :answer_e: C c3 = new C(24);
   :correct: e
   :feedback_a: Here we are simply creating a new instance of class C by calling the appropiate constructor. Nothing is wrong here.
   :feedback_b: Here we are simply creating a new instance of class B by calling the appropiate constructor. Nothing is wrong here.
   :feedback_c: Since class C is a subclass of class B, you can upcast an object of type C to be of type B.
   :feedback_d: This statement is creating a new object using the second constructor of the B class. This is also a valid way to create a B object.
   :feedback_e: Even though class C has a super class with a constructor that takes in a single int argument, class C does not have a constructor that takes an int value.

   Consider the following class declarations. Which of the following statements will not compile?

   .. code-block:: java

      public class B
      {

         public int myValue;

         public B()
         {
            myValue = 0;
         }

         public B(int x)
         {
            myValue = x;
         }
      }

      public class C extends B
      {

         public C()
         {
            super(0);
         }
      }

.. mchoice:: qtnt1_18
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

.. mchoice:: qtnt1_19
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and III
   :answer_e: II and III
   :correct: e
   :feedback_a: Merge sort often uses a temporary array when merging arrays, which means it actually uses more storage space than insertion sort.
   :feedback_b: Insertion sort is more efficient for a small array because merge sort has extra overhead from the recursive function calls that cause it to take longer.
   :feedback_c: Merge sort uses the "divide and conquer" approach to sort an array. This will end up being more efficient than insertion sort in the case where we have a long unordered array.
   :feedback_d: Statement III is true but statement I is false since mergesort often utilizes a temporary array and will actually require more storage space than insertion sort.
   :feedback_e: Merge sort uses the "divide and conquer" approach to sort an array. This will end up being more efficient than insertion sort in the case where we have long unordered array. However if we have a very small almost sorted array, then insertion sort will outperform merge sort.


   Which of the following is/are true about using insertion sort versus using merge sort?

   .. code-block:: java

      I. Insertion sort requires more storage space than mergesort.
      II. Insertion sort is only more efficient than mergesort in the case that we have a very small and nearly sorted array.
      III. Insertion sort is almost always less efficient than mergesort.

.. mchoice:: qtnt1_20
   :answer_a: I
   :answer_b: II
   :answer_c: III
   :answer_d: IV
   :answer_e: V
   :correct: e
   :feedback_a: The method alter shifts the values in the columns starting at column c + 1 and shifting back to entry to the left of c + 1. This matrix is what would result if c was three and we were shifitng the number there to the two spots before it.
   :feedback_b: Although some numbers are overwriten in the matrix, the matrix will still be 3x4 matrix.
   :feedback_c: Although some numbers are overwriten in the matrix, the matrix will still be 3x4 matrix.
   :feedback_d: This is what would happen if we were shifting rows instead of columns in the alter method.
   :feedback_e: Method alter shifts the values in the columns, starting at column c + 1, one column to the left. It also overwrites column c. Here are the replacements made for the method call alter(1): matrix[0][1] = matrix[0][2], matrix[0][2] = matrix[0][3], matrix[1][1] = matrix[1][2], matrix[1][2] = matrix[1][3], matrix[2][1] = matrix[2][2], matrix[2][2] = matrix[2][3]


   What would the contents of ``matrix``, a 2-D array of integers, be after a call to ``alter(1)``? The method alter is defined below.


   .. code-block:: java

      private int[][] matrix;

      /* matrix looks like this initially
      1 3 5 7
      2 4 6 8
      3 5 7 9
      */

      public void alter(int c)
      {
        for (int i = 0; i < matrix.length; i++)
        {
          for (int j = c + 1; j < matrix[0].length; j++)
          {
            matrix[i][j - 1] = matrix[i][j];
          }
        }
      }


    I. 1 7 7 7
       2 8 8 8
       3 9 9 9

    II. 1 5 7
        2 6 8
        3 7 9

    III. 1 3 5 7
         3 5 7 9

    IV. 1 3 5 7
        3 5 7 9
        3 5 7 9

    V. 1 5 7 7
       2 6 8 8
       3 7 9 9
