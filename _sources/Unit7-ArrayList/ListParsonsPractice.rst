.. qnum::
   :prefix: 7-9-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: ch8ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should be a class that adds some Strings of conversational phrases to a List and then prints them out.  But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   import java.util.List;
   import java.util.ArrayList;
   =====
   import java.util.List; #distractor
   =====
   public class ListTest {
   =====
      public static void main(String[] args) {
   =====
          List<String> conversation;
          conversation = new ArrayList<String>();
   =====
          conversation.add("hello");
          conversation.add("goodbye");
          conversation.add("how are you");
          conversation.add("see you later");
   =====
          for (String element: conversation) {
   =====
              System.out.print(element + ", ");
   =====
          } //end for loop
      } //end main method
   } //end class


.. parsonsprob:: ch8ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should be a method that traverses through an ArrayList of Strings (the parameter) and print out the elements in reverse order -- so  {"cat", "dog", "mouse"} should print "mouse, dog, cat, " as output.  Assume the ArrayList "myList" has been instantiated and filled with Strings.  But, the blocks have been mixed up and include <b>two extra blocks</b> that are not needed in a correct solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static void printBackwards(ArrayList<String> myList) {
   =====
       for (int i = myList.size() - 1; i >= 0; i--) {
   =====
       for (int i = myList.size() - 1; i > 0; i--) { #distractor
   =====
           System.out.print(myList.get(i) + ", ");
   =====
           System.out.print(myList[i] + ", "); #distractor
   =====
       } //end for loop
   } //end printBackwards method


.. parsonsprob:: ch8ex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should remove all the zeros from an ArrayList of Integers.  Assume the ArrayList "listOfNums" has been instantiated and filled with Integers.  But, the blocks have been mixed up and include <b>two extra blocks</b> that are not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   Integer zero = new Integer(0);
   int i = 0;
   =====
   while (i < listOfNums.size()) {
   =====
       if (listOfNums.get(i).equals(zero)) {
   =====
       if (listOfNums.get(i) == zero) { #distractor
   =====
           listOfNums.remove(i);
   =====
       } //end if
   =====
       else {
           i++;
       }
   =====
       i++; #distractor
   =====
   } //end while loop


.. parsonsprob:: ch8ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should return the smallest int given an ArrayList of Integers (the parameter).  But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static int findSmallest(ArrayList<Integer> nums) {
   =====
       int smallest = nums.get(0);
   =====
       int smallest = nums[0]; #distractor
   =====
       for (int i = 0; i < nums.size(); i++) {
   =====
           if (nums.get(i) < smallest) {
   =====
               smallest = nums.get(i);
   =====
           }
   =====
       } //end for loop
   =====
       return smallest;
   =====
   } //end findSmallest method

.. parsonsprob:: ch8ex5muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment is a method that should remove all the positive and negative odd values in an ArrayList of Integers (the parameter).  But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static void removeOdd(ArrayList<Integer> nums) {
   =====
       int i = 0;
   =====
       while (i < nums.size()) {
   =====
           if (Math.abs(nums.get(i)) % 2 == 1) {
   =====
           if (nums.get(i) % 2 == 1) { #distractor
   =====
               nums.remove(i);
   =====
           } else {
               i++;
           }
   =====
       } //end while loop
   =====
   } //end removeOdd method


.. parsonsprob:: ch8ex6muc
   :numbered: left
   :practice: T
   :adaptive:

   The following method should calculate the average from an ArrayList of Integers (the parameter).  But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public static double average(ArrayList<Integer> nums) {
   =====
      double sum = 0;
   =====
      for (int i = 0; i < nums.size(); i++) {
   =====
      for (int i = 0; i < nums.length; i++) { #distractor
   =====
          sum += nums.get(i);
   =====
      } //end for loop
   =====
      return (sum / nums.size());
   =====
   } //end average method


.. parsonsprob:: ch8ex7muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment is a method that should find the largest value given an ArrayList of Integers (the parameter) and move it to the back of the list.  But, the blocks have been mixed up and include <b>two extra blocks</b> that are not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static void moveLargest(ArrayList<Integer> nums) {
   =====
       int largest = 0;
   =====
       for (int i = 0; i < nums.size(); i++) {
   =====
           if (nums.get(i) > nums.get(largest)) {
   =====
           if (nums[i] > nums[largest]) { #distractor
   =====
               largest = i;
   =====
           }
   =====
       } //end for loop
   =====
       Integer largestVal = nums.remove(largest);
       nums.add(largestVal);
   =====
       nums.add(largest); #distractor
   =====
   } //end moveLargest method


.. parsonsprob:: ch8ex8muc
   :numbered: left
   :practice: T
   :adaptive:

   The following method should remove all the Strings that have length 3 or shorter from an ArrayList of Strings (the parameter) -- so {"catch", "dog", "tree", "me"} should return {"catch", "tree"}.  But, the blocks have been mixed up and include <b>one extra block</b> that is not needed in a correct solution.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public static void removeShort(ArrayList<String> words) {
   =====
       int i = 0;
   =====
       while (i < words.size()) {
   =====
           if (words.get(i).length() <= 3) {
   =====
           if (words.get(i).length <= 3) { #distractor
   =====
               words.remove(i);
   =====
           } else {
               i++;
           }
   =====
       } //end while loop
   =====
   } //end removeShort method


.. parsonsprob:: ch8ex9muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment is a method that should take each String from an ArrayList of Strings (the parameter) and add it again to the list -- so {"cat", "ribbon", "house"} should become {"cat", "cat", "ribbon", "ribbon", "house", "house"}.  But, the blocks have been mixed up and include <b>two extra blocks</b> that are not needed in a correct solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution. </p>
   -----
   public static void doubleList(ArrayList<String> words) {
   =====
       int count = 0;
   =====
       while (count < words.size()) {
   =====
       while (count <= words.size()) { #distractor
   =====
           String toAdd = words.get(count);
           words.add(count, toAdd);
   =====
           count += 2;
   =====
           count++; #distractor
   =====
       } //end while loop
   =====
   } //end doubleList method


.. parsonsprob:: ch8ex10muc
   :numbered: left
   :practice: T
   :adaptive:

   The following method should remove a specific Integer (specified in parameter) whenever it occurs in a given ArrayList of Integers (the parameter).  But, the blocks have been mixed up and include <b>three extra blocks</b> that are not needed in a correct solution.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public static void removeElement(ArrayList<Integer> nums,
                                    int toRemove) {
   =====
      int i = 0;
   =====
      while (i < nums.size()) {
   =====
      while (i < nums.length) { #distractor
   =====
          if (nums.get(i) == toRemove) {
   =====
          if (nums.get(i) == nums(toRemove)) { #distractor
   =====
           nums.remove(i);
   =====
          } //end if
   =====
          else {
              i++;
          }
   =====
          i++; #distractor
   =====
      } //end while loop
   } //end average method
