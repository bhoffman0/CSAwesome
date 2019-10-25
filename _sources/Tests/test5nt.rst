.. qnum::
   :prefix: 12-6-
   :start: 1

.. |br| raw:: html

     <br/>

Exam 5 for the AP CS A Exam (not timed)
----------------------------------------

The following problems are similar to what you might see on the AP CS A exam.  Please answer each to the best of your ability.


.. mchoice:: qtnt5_1
   :practice: T
   :answer_a: return 4 * n;
   :answer_b: return 8 * n;
   :answer_c: return 64 * n;
   :answer_d: return (int) Math.pow(n,4);
   :answer_e: return (int) Math.pow(n,8);
   :correct: e
   :feedback_a: n * n, looped three times is not equivalent to 4 * n because you do not know the value of n.
   :feedback_b: n * n is the same as squaring n. What power would you need to raise n to for the statement to be equivalent?
   :feedback_c: n * n is the same as squaring n, try raising n to a power rather than multiplying it by a constant.
   :feedback_d: Close! n * n is the same as n squared and the loop iterates 3 times.
   :feedback_e: Multiplying n by itself is the same as squaring n. Because the loop iterates 3 times, it would be the same as raising n to the 8th.

   Which of the following could replace the body of compute so it does the same thing?

   .. code-block:: java

    public static int compute(int n) {
        for(int i = 1; i < 4; i++) {
            n *= n;
        }
        return n;
    }

.. mchoice:: qtnt5_2
   :practice: T
   :answer_a: <br/> 1 3 5 7 <br/>
              2 4 6 8 <br/>
              2 4 6 8 <br/>
              1 3 5 7 <br/>
   :answer_b: <br/> 0 1 2 3 <br/>
              9 8 7 6 <br/>
              9 8 7 6 <br/>
              0 1 2 3 <br/>
   :answer_c: <br/> 1 2 9 0 <br/>
              2 4 8 1 <br/>
              9 8 7 2 <br/>
              0 1 2 3 <br/>
   :answer_d: <br/> 7 5 5 7 <br/>
              8 6 6 8 <br/>
              6 7 7 6 <br/>
              3 2 2 3 <br/>
   :answer_e: <br/> 1 3 3 1 <br/>
              2 4 4 2 <br/>
              9 8 8 9 <br/>
              0 1 1 0
   :correct: d
   :feedback_a: try again, this code does vertical reflection from right to left not a horizontal reflection from top to bottom
   :feedback_b: try again, this code does vertical reflection from right to left not a horizontal reflection from bottom to top
   :feedback_c: try again, this code does vertical reflection from right to left
   :feedback_d: correct! this code does vertical reflection from right to left
   :feedback_e: try again, this code does vertical reflection from right to left not from left to right

    Consider the following program that changes a 2D array mat of type int
    Suppose the matrix is originally:
     1 3 5 7 |br|
     2 4 6 8 |br|
     9 8 7 6 |br|
     0 1 2 3

   .. code-block:: java

    public static void changeMatrix(int [] [] mat) {
        int width = mat[0].lenght;
        int numRows = mat.length;
        for(int row = 0; row < numRows; row++)
            for (int col = 0; col < width/2; col++)
                mat[row][col] = mat [row][width - 1 - col];
    }

.. mchoice:: qtnt5_3
   :practice: T
   :answer_a: Happy New Year!
   :answer_b: Happy Happy New Year!
   :answer_c: New Year! New Year!
   :answer_d: New Year! Happy New Year!
   :answer_e: Happy New Year! Happy New Year!
   :correct: d
   :feedback_a: Try Again, the .substring(6) will reassign str1 as "New Year!" and str2 is "Happy " concatenated with "New Year!"
   :feedback_b: Try Again, the .substring(6) will reassign str1 as "New Year!" and str2 is "Happy " concatenated with "New Year!"
   :feedback_c: Try Again, the .substring(6) will reassign str1 as "New Year!" and str2 is "Happy " concatenated with "New Year!"
   :feedback_d: Correct! the .substring(6) will reassign str1 as "New Year!" and str2 is "Happy New Year!"
   :feedback_e: Try Again, the .substring(6) will reassign str1 as "New Year!" and str2 is "Happy " concatenated with "New Year!"

   What is the following output of the following code segment?

   .. code-block:: java

    String str1 = "Happy ";
    String str2 = str1;
    str2 += "New Year! ";
    str1 = str2.substring(6);
    System.out.println(str1 + str2);

.. mchoice:: qtnt5_4
   :practice: T
   :answer_a: 36
   :answer_b: 30
   :answer_c: 35
   :answer_d: 15
   :answer_e: 18
   :correct: d
   :feedback_a: Try again! the outer loop will iterate 6 times and the inner will loop 5 times every time the outer loop iterates once
   :feedback_b: Try again! the outer loop will iterate 6 times and the inner will loop 5 times every time the outer loop iterates once
   :feedback_c: Try again! the outer loop will iterate 6 times and the inner will loop 5 times every time the outer loop iterates once
   :feedback_d: Correct!
   :feedback_e: Try again! the outer loop will iterate 6 times and the inner will loop 5 times every time the outer loop iterates once

   How many times will the asterisk ("*") be printed?

   .. code-block:: java

    for(int k = 4; k < 10; k += 2) {
        for(int j = 1; j <= 5; j++) {
            System.out.print("*");
        }
      }

.. mchoice:: qtnt5_5
   :practice: T
   :answer_a: <br/> 1 <br/>
              1 4 <br/>
              1 4 9 16 <br/>
              1 4 9 16 25 <br/>
   :answer_b: <br/> 1 4 9 16 25 <br/>
              1 4 9 16 <br/>
              1 4 9 <br/>
              1 4 <br/>
              1 <br/>
   :answer_c: <br/> 25 16 9 4 1 <br/>
              25 16 9 4 <br/>
              25 16 9 <br/>
              25 16 <br/>
              25 <br/>
   :answer_d: <br/> 25 <br/>
              25 16 <br/>
              25 16 9 <br/>
              25 16 9 4 <br/>
              25 16 9 4 1 <br/>
   :answer_e: <br/> 1 4 9 16 25 <br/>
              1 4 9 16 25 <br/>
              1 4 9 16 25 <br/>
              1 4 9 16 25 <br/>
              1 4 9 16 25 <br/>
   :correct: b
   :feedback_a: Try again, the outer loop iterates 5 times with i going from 5 to 1 and the inner loop iterates i times printing j squared each time.
   :feedback_b: Correct!
   :feedback_c: Try again, the outer loop iterates 5 times with i going from 5 to 1 and the inner loop iterates i times printing j squared each time.
   :feedback_d: Try again, the outer loop iterates 5 times with i going from 5 to 1 and the inner loop iterates i times printing j squared each time.
   :feedback_e: Try again, the outer loop iterates 5 times with i going from 5 to 1 and the inner loop iterates i times printing j squared each time.

   What is the following output of the following code segment?

   .. code-block:: java

       for(int i = 5; i > 0; i--) {
          for(int j = 1; j <= i; j++) {
              System.out.print(j * j + " ");
          }
          System.out.println();
        }


.. mchoice:: qtnt5_6
   :practice: T
   :answer_a: run eat
   :answer_b: run eat sleep
   :answer_c: run eat sleep bark
   :answer_d: run eat bark sleep
   :answer_e: Nothing is printed due to infinite recursion
   :correct: d
   :feedback_a: Try again, remember, the super. call will return to the original function and perform all tasks in that function before returning to the inherited class.
   :feedback_b: Try again, remember, the super. call will return to the original function and perform all tasks in that function before returning to the inherited class.
   :feedback_c: Try again, remember, the super. call will return to the original function and perform all tasks in that function before returning to the inherited class.
   :feedback_d: Correct!
   :feedback_e: Try again, remember, the super. call will return to the original function and perform all tasks in that function before returning to the inherited class.

   What is printed?

   .. code-block:: java

        class Dog {
          public void act() {
              System.out.print("run ");
              eat();
          }
          public void eat() {
              System.out.print("eat ");
          }
        }
        public class UnderDog extends Dog {
          public void act() {
              super.act();
              System.out.print("sleep ");
          }
          public void eat() {
              super.eat();
              System.out.print("bark ");
          }

          public static void main(String [] args) {
              Dog fido = new UnderDog();
              fido.act();
          }
        }

.. mchoice:: qtnt5_7
   :practice: T
   :answer_a: -1
   :answer_b: 1
   :answer_c: 0
   :answer_d: -2
   :answer_e: 2
   :correct: a
   :feedback_a: Correct!
   :feedback_b: Try again, remember the print statement will execute after the while loop evaluates to false.
   :feedback_c: try again, since both x and y are modified by 1 the same number of times they will never be equal. Hence, they can not be subtracted to equal 0.
   :feedback_d: Try again, for this statement to be true, x would need to be 0 and y would need to be 2 but x and y always have a difference of 1.
   :feedback_e: Try again, x and y always have a difference of 1 hence, there is no way to subtract them and get two.

   What is the output of the System.out.println statement?

   .. code-block:: java

       int x = 3, y = -2;
       while(x > y) {
            x--;
            y++;
        }
      System.out.println(x - y);

.. mchoice:: qtnt5_8
   :practice: T
   :answer_a: 4
   :answer_b: 5
   :answer_c: 6
   :answer_d: 7
   :answer_e: 8
   :correct: b
   :feedback_a: Try again, the first loop iterates twice and the sum += 3 brance only executes once.
   :feedback_b: Correct!
   :feedback_c: Try again, the first loop iterates twice and the sum += 3 brance only executes once.
   :feedback_d: Try again, the first loop iterates twice and the sum += 3 brance only executes once.
   :feedback_e: Try again, the first loop iterates twice and the sum += 3 brance only executes once.

   What is the output of the System.out.println statement?

   .. code-block:: java

     int sum = 0;
     for(int i = 0; i < 3; i++) {
        if((i % 2) - 1 == 0)
          sum += 3;
        else
          sum++;
        }

.. mchoice:: qtnt5_9
   :practice: T
   :answer_a: The elements are in random order
   :answer_b: The elements are in sorted in descending order.
   :answer_c: The elements are integers
   :answer_d: Best case, average case, and worst case are all the same.
   :answer_e: The elements are already sorted in ascending order.
   :correct: e
   :feedback_a: Try again,Insertion sort works iteratively right to left swapping elements from an unsorted portion into a sorted portion. The more swaps it needs to make, the longer it takes.
   :feedback_b: Try again,Insertion sort works iteratively right to left swapping elements from an unsorted portion into a sorted portion. The more swaps it needs to make, the longer it takes.
   :feedback_c: Try again,Insertion sort works iteratively right to left swapping elements from an unsorted portion into a sorted portion. The more swaps it needs to make, the longer it takes.
   :feedback_d: Try again,Insertion sort works iteratively right to left swapping elements from an unsorted portion into a sorted portion. The more swaps it needs to make, the longer it takes.
   :feedback_e: Correct!

   Under what condition will an ascending (lowest to highest) insertion sort execute faster?

.. mchoice:: qtnt5_10
   :practice: T
   :answer_a: world           6
   :answer_b: worldpeace      6
   :answer_c: world           12
   :answer_d: worldpeace      12
   :answer_e: peace           12
   :correct: a
   :feedback_a: #FIXME
   :feedback_b: #FIXME
   :feedback_c: #FIXME
   :feedback_d: #FIXME
   :feedback_e: #FIXME

   What are the values for changerObj.str and chngerObj.n that are printed after this code executes?
   ::

          STR         N

   .. code-block:: java

      public class ChangerObject {
          private String str;
          private int n;
          public ChnagerObject(String myStr, int myN) {
              this.str = myStr;
              this.n = myN;
          }
          public void changer (String x, int y) {
              x = x + "peace";
              y = y + 2;
          }
          public static void main(String[] args) {
              String str1 = "world";
              int n1 = 6;
              ChangerObject changerObj = new ChangerObject(str1, n1);
              System.out.println("value of str: " + changeObj.str);
              System.out.println("value of n: " + changeObj.n);
          }
      }

.. mchoice:: qtnt5_11
   :practice: T
   :answer_a: [a, c, e, d, g]
   :answer_b: [c, e, d, b, g]
   :answer_c: [a, c, e, g]
   :answer_d: [a, b, e, d, g]
   :answer_e: [a, c, e, d, b, g]
   :correct: c
   :feedback_a: Try again, the set() method will overwrite whatever value is at the specified index. The add() method places the added value at the end of the arraylist.
   :feedback_b: Try again, the set() method will overwrite whatever value is at the specified index. The add() method places the added value at the end of the arraylist.
   :feedback_c: Correct!
   :feedback_d: Try again, the set() method will overwrite whatever value is at the specified index. The add() method places the added value at the end of the arraylist.
   :feedback_e: Try again, the set() method will overwrite whatever value is at the specified index. The add() method places the added value at the end of the arraylist.

   What is printed as a result of executing the code segment?

   .. code-block:: java

      List<String> list = new ArrayList<String>();
      list.add("a");
      list.add("b");
      list.set(1,"c");
      list.add(2, "d");
      list.set(2, "e");
      list.add("g");
      System.out.println(list);

.. mchoice:: qtnt5_12
    :answer_a: It is always true
    :answer_b: It is never true
    :answer_c: When a = b
    :answer_d: When a < b
    :answer_e: When a > b
    :correct: b
    :feedback_a: Try again! Consider simplifying the expression.
    :feedback_b: Good job!
    :feedback_c: Try again! This statement does not account for (a = b).
    :feedback_d: Try again! If (a < b), !(b < a) is false.
    :feedback_e: Try again! (a > b) is the same as !(b > a).

    When is the following Boolean expression true (a and b are integers)?
        (a < b) && !(b > a)

.. mchoice:: qtnt5_13
    :answer_a: I and II
    :answer_b: I and III
    :answer_c: IV
    :answer_d: V
    :answer_e: I only
    :correct: c
    :feedback_a: Try again! Subclass objects can be stored in the same array.
    :feedback_b: Try again! Subclass objects can be passed to superclass methods.
    :feedback_c: Good job!
    :feedback_d: Try again! At least one of the statements is true.
    :feedback_e: Try again! Review the properties of subclasses.

    Which of the following reasons for using an inheritance hierarchy are valid?
        I. Methods from a superclass can be used in a subclass without rewriting or copying code.
        II. Objects from subclasses can be passed as arguments to a method designed for the superclass
        III. Objects from subclasses can be stored in the same array
        IV. All of the above
        V. None of the above

.. mchoice:: qtnt5_14
    :answer_a: x = 0;
    :answer_b: if (x > 1) x = 0;
    :answer_c: if (x > 3) x = 0;
    :answer_d: if (x >= 1) x = 0;
    :answer_e: none of the above
    :correct: e
    :feedback_a: Try again! If x = 1, the original code would assign x to 3. Here, x is always 0.
    :feedback_b: Try again! If x = 1, in the original code x would be assigned to 3 and here it would stay 1.
    :feedback_c: Try again! Segments are not equal for x <= 3.
    :feedback_d: Try again! If x = 1, the original code would assign x to 3, but here x would be assigned to 0.
    :feedback_e: Good job!

    Which of the following code segments is equivalent to the code below?

    .. code-block:: java

        if (x >= 1) x = x * 3;
        if (x > 3) x = 0;

.. mchoice:: qtnt5_15
    :answer_a: A syntax error will occur
    :answer_b: String str will be the empty string
    :answer_c: String str will contain "flag"
    :answer_d: String str will contain "conf"
    :answer_e: String str will contain "con"
    :correct: e
    :feedback_a: Try again! Find the value of x.
    :feedback_b: Try again! Find the value of x.
    :feedback_c: Try again! The substring begins at index 0 of word.
    :feedback_d: Try again! Substring upper bounds are not inclusive.
    :feedback_e: Good job!

    Consider the following segment of code
    What will be the result of executing the above segment?

    .. code-block:: java

        String word = "conflagration";
        int x = word.indexOf("flag");
        String str = word.substring(0,x);


.. mchoice:: qtnt5_16
    :answer_a: {3,6,8,5,1}, {3,5,6,8,1}, {1,3,5,6,8}
    :answer_b: {1,3,8,5,6}, {1,3,8,5,6}, {1,3,5,8,6}, {1,3,5,6,8}
    :answer_c: {3,6,8,5,1}, {3,6,8,5,1}, {3,5,6,8,1}, {1,3,5,6,8}
    :answer_d: {1,3,8,5,6}, {1,3,5,8,6}, {1,3,5,6,8}
    :answer_e: {1,6,3,8,5}, {1,3,6,8,5}, {1,3,5,6,8}
    :correct: b
    :feedback_a: Try again! Selection sort begins with the smallest element being swapped with the element at index 0.
    :feedback_b: Good job!
    :feedback_c: Try again! Selection sort begins with the smallest element being swapped with the element at index 0.
    :feedback_d: Try again! This is missing one step.
    :feedback_e: Try again! The first swap would be between the first and last element.

    Which of the following correctly shows the iterations of an ascending (from left to right) selection sort on
    an array with the following elements: {6,3,8,5,1}?


.. mchoice:: qtnt6_17
    :answer_a: mput
    :answer_b: mpu
    :answer_c: mp
    :answer_d: omp
    :answer_e: Om
    :correct: c
    :feedback_a: Try again! s3 contains only 2 characters.
    :feedback_b: Try again! Upper substring bounds are non-inclusive.
    :feedback_c: Good job!
    :feedback_d: Try again! s3 begins at index 1 of s2.
    :feedback_e: Try again! No changing of capitalization occurred.

    What is the output from the following code?

    .. code-block:: java

        String s = "Computer Science is fun!";
        String s1 = s.substring(0,8);
        String s2 = s1.substring(1);
        String s3 = s2.substring(1,3);
        System.out.println(s3);

.. mchoice:: qtnt6_18
    :answer_a: I only
    :answer_b: II pnly
    :answer_c: III only
    :answer_d: I and III only
    :answer_e: I, II, and III
    :correct: e
    :feedback_a: Try again! There is at least one more correct segment.
    :feedback_b: Try again! III does the same thing as II.
    :feedback_c: Try again! II does the same thing as III.
    :feedback_d: Try again! II does the same thing as III.
    :feedback_e: Good job!

    Consider an array arr and a list list that is an ArrayList<String>. Both arr and list are initialized with string
    values. Which of the following code segments correctly appends all the strings in arr to the end of list?

    .. code-block:: java
    
        I. for(String s : arr)
            list.add(s)
        II. for(String s : arr)
            list.add(list.size(),s);
        III. for(int i = 0; i < arr.length; i++)
            list.add(arr[i]);

.. mchoice:: qtnt6_19
    :answer_a: 3
    :answer_b: 9
    :answer_c: 12
    :answer_d: 27
    :answer_e: 81
    :correct: e
    :feedback_a: Try again! The remaining iterations of mystery() must return values.
    :feedback_b: Try again! There are 4 iterations of mystery(). Try writing each out!
    :feedback_c: Try again! There are 4 iterations of mystery(). Try writing each out!
    :feedback_d: Try again! There are 4 iterations of mystery(). Try writing each out!
    :feedback_e: Good job!

    In the following method, what value does mystery(4) return?

    .. code-block:: java

        public static int mystery(int n)
        {
            if(n == 1)
                return 3;
            else
                return 3 * mystery(n-1);
        }

.. mchoice:: qtnt6_20
    :answer_a: At compile time
    :answer_b: At edit time
    :answer_c: As soon as the value of N is entered
    :answer_d: During run time
    :answer_e: When an incorrect result is output
    :correct: d
    :feedback_a: Try again! The code will compile.
    :feedback_b: Try again! No errors will be detected at edit time.
    :feedback_c: Try again! No error will be detected when N is assigned a value.
    :feedback_d: Good job!
    :feedback_e: Try again! A division by 0 will not output a result.

    An algorithm for finding the average of N numbers is
    average = sum/N
    Where sum and N are both integers. Using this algorithm, if N is equal to 0 and the programmer doesn’t have
    any built in tests to check if N is equal to zero, when will the error be detected?

.. mchoice:: qtnt6_21
    :answer_a: A
    :answer_b: B
    :answer_c: C
    :answer_d: D
    :answer_e: E
    :correct: c
    :feedback_a: Try again! One of these numbers is < 0.
    :feedback_b: Try again! One of these numbers is < 0.
    :feedback_c: Good job!
    :feedback_d: Try again! This condition is accounted for in the previous conditional. It would never be executed.
    :feedback_e: Try again! E would print only if num1 or num2 was 0.

    Consider the following method. What is the output from conditionTest(3,-2)?

    .. code-block:: java

        public static void conditionTest(int num1, int num2) {
            if ((num1>0) && (num2>0)) {
                if (num1>num2)
                    System.out.println("A");
                else
                    System.out.println("B");
            }
            else if ((num2<0) || (num1<0)) {
                System.out.println("C");
            }
            else if (num2 < 0) {
                System.out.println("D");
            }
            else {
                System.out.println("E");
            }
        }
