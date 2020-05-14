.. qnum::
   :prefix: 6-6-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: ch7ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should double each element in the array then print out the new value -- so (1,2,3,4,5) should become (2,4,6,8,10).  But, the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   int[] arr = {1, 2, 3, 4, 5};
   =====
   for (int i = 0; i < arr.length; i++) {
   =====
       arr[i] = arr[i] * 2;
   =====
       System.out.println(arr[i]);
   =====
   }


.. parsonsprob:: ch7ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should fill an array with elements that count up from 0 to 50 by 5 (0, 5, 10, 15, 20...).  But the blocks have been mixed up.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   int[] arr = new int[11];
   =====
   for (int i = 0; i < 11; i++) {
   =====
       arr[i] = i * 5;
   =====
       System.out.println(arr[i]);
   =====
   }


.. parsonsprob:: ch7ex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should print each element in the array that is even using an enhanced for each loop.  But, the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   int[] arr = {14, -5, 2, 17, 29, -8, 36};
   =====
   for (int value : arr) {
   =====
       if (value % 2 == 0) {
   =====
           System.out.println(value);
   =====
       } //end conditional
   =====
   } //end for loop


.. parsonsprob:: ch7ex4muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment is a method that should return the smallest integer given an array of integers (the parameter).  But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the blocks from the left and put them in the correct order with the correct indentation on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static int findSmallest(int[] arr) {
   =====
       int smallest = arr[0];
   =====
       for (int i = 0 ; i < arr.length; i++) {
   =====
           if (arr[i] < smallest) {
   =====
           if (arr[i] > smallest) { #distractor
   =====
               smallest = arr[i];
   =====
           }
   =====
       } //end for loop
   =====
       return smallest;
   =====
   } //end findSmallest method


.. parsonsprob:: ch7ex5muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment is a method that should return the average given an array of integers (the parameter).  But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the blocks from the left and put them in the correct order with the correct indentation on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static double findAverage(int[] arr) {
   =====
       double sum = 0;
   =====
       int sum = 0; #distractor
   =====
       for (int i = 0; i < arr.length; i++) {
   =====
           sum += arr[i];
   =====
       } //end for loop
   =====
       return (sum / arr.length);
   =====
   } //end findAverage method


.. parsonsprob:: ch7ex6muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment is a method that should return the largest integer given an array of integers (the parameter).  But, the blocks have been mixed up and include <b>two extra blocks</b> that are not needed in a correct solution.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static int findLargest(int[] arr) {
   =====
      int largest = arr[0];
   =====
      int largest = arr.get(0); #distractor
   =====
      for (int i = 0; i < arr.length; i++) {
   =====
          if (largest < arr[i]) {
   =====
          if (largest > arr[i]) { #distractor
   =====
              largest = arr[i];
   =====
          } //end conditional
   =====
      } //end for loop
   =====
      return largest;
   =====
   } //end findLargest method


.. parsonsprob:: ch7ex7muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment is a method that should return an integer array that is "right shifted" by one -- so {6, 2, 5, 3} returns {3, 6, 2, 5} (the parameter). Note that the method return type is int[] which means it will return an int array. But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static int[] shiftRight(int[] arr) {
   =====
       int[] result = new int[arr.length];
   =====
       result[0] = arr[arr.length-1];
   =====
       for (int i = 0; i < arr.length - 1; i++) {
   =====
       for (int i = 0; i < arr.length; i++) { #distractor
   =====
           result[i + 1] = arr[i];
   =====
       } //end for loop
   =====
       return result;
   =====
   } //end shiftRight method


.. parsonsprob:: ch7ex8muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment is a method that should return a new array of length 2 containing the middle two elements of a given array of integers of even length (the parameter) -- so {1,2,3,4} should return {2,3}.  But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static int[] makeMiddle(int[] arr) {
   =====
       int[] result = new int[2];
   =====
       int middleIndex = (arr.length / 2) - 1;
   =====
       int middleIndex = (arr.length / 2); #distractor
   =====
       result[0] = arr[middleIndex];
       result[1] = arr[middleIndex + 1];
   =====
       return result;
   =====
   } //end makeMiddle method


.. parsonsprob:: ch7ex9muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment is a method that should return string array that is in reverse order -- so {"b", "a", "z"} should return {"z", "a", "b"}.  But, the blocks have been mixed up and include <b>two extra blocks</b> that are not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static String[] reverse(String[] arr) {
   =====
       String[] result = new String[arr.length];
   =====
       int i = arr.length - 1;
   =====
       int i = arr.length; #distractor
   =====
       for (String element: arr) {
   =====
       for (element: arr) { #distractor
   =====
         result[i] = element;
   =====
         i--;
   =====
       } //end for loop
   =====
       return result;
   =====
   } //end reverse method


.. parsonsprob:: ch7ex10muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program copies the first half of an array given as an argument to the method into a result array which is returned. But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static int[] firstHalf(int[] arr) {
   =====
       int[] result = new int[arr.length / 2];
   =====
       for (int i = 0; i < result.length; i++) {
   =====
       for (int i = 0; i < arr.length; i++) { #distractor
   =====
         result[i] = arr[i];
   =====
       } //end for loop
   =====
       return result;
   =====
   } //end firstHalf method











