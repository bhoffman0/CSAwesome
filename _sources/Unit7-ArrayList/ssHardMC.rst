.. qnum::
   :prefix:  7-11-6-
   :start: 1

Hard Search/Sort Multiple Choice Questions
------------------------------------------

These problems are harder than those you will see on the AP CS A exam.

.. mchoice:: qssm_1
   :practice: T
   :answer_a: A B B C D
   :answer_b: E D C B B A
   :answer_c: A B B C D E
   :answer_d: E D C B A B
   :answer_e: E D C B B
   :correct: c
   :feedback_a: This would be true if the for loop inside the main method did not interate through every value in the array.
   :feedback_b: This would be true if the conditional statement inside the for loop stated "if (key.compareTo(letters[i]) < 0)", because that would put the array in a reverse alphabetical order.
   :feedback_c: This is an insertion sort which sorts the array in alphabetical order using the compareTo() method.
   :feedback_d: This would be true if array was not modified at all in the main method.
   :feedback_e: This would be true if the conditional statement inside the for loop stated "if (key.compareTo(letters[i]) < 0)" and if the loop did not iterate through every item of the letters array, because that would put the array in a reverse alphabetical order.

   What is printed when the following main method is executed? The break; statement used in this code breaks out of or terminates the loop at that point. It is not used on the AP CS A exam.

   .. code-block:: java

      public class AlphaSort
      {

          public static void main(String[] args)
          {
              int i, j;
              String key;
              String[] letters = {"E","D","C","B","A","B"};
              for (j = 1; j < letters.length; j++)
              {
                  key = letters[j];
                  i = j - 1;
                  while (i >= 0)
                  {
                      if (key.compareTo(letters[i]) > 0)
                      {
                          break;
                      }
                      letters[i + 1] = letters[i];
                      i--;
                  }
                  letters[i + 1] = key;
              }
              for (int t = 0; t < letters.length; t++)
              {
                  System.out.print((letters[t]) + "");
              }
          }
      }

You can step through the code above by clicking on the following link `Ex-12-8-1 <https://goo.gl/zqWPtU>`_.

.. mchoice:: qssm_2
   :practice: T
   :answer_a: 4
   :answer_b: 2
   :answer_c: 12
   :answer_d: 1
   :correct: b
   :feedback_a: This would be true if the if statement was not trying to check if the numbers in the array were negative and odd.
   :feedback_b: This answer is correct because the for loop iterates through every element and increments the count if the current number is negative and odd.
   :feedback_c: This may be a result of misunderstanding the question, as 12 cannot be an answer because the array length itself is only 6.
   :feedback_d: This would be true if the code was looking for the numbers in the array that were positive and odd.

   What is printed when the following main method is executed?

   .. code-block:: java

      public class NumberCount
      {
          public static void main(String[] args)
          {
              int count = 0;
              int[] numbers = {-5,4,-5,3,-2,-4};
              for (int j = 0; j < numbers.length; j++)
              {
                  if(numbers[j] < 0 && numbers[j] % 2 != 0)
                  {
                      count++;
                  }
              }
          System.out.println(count);
          }
      }

You can step through the code above by clicking on the following link `Ex-12-8-2 <https://goo.gl/MGwTeT>`_.

.. mchoice:: qssm_3
   :practice: T
   :answer_a: -3
   :answer_b: -4
   :answer_c: 4
   :answer_d: 0
   :correct: d
   :feedback_a: This would be true if there were three strings in the array that had the same first letter as the last letter.
   :feedback_b: This would be true if there were four strings in the array that had the same first letter as the last letter.
   :feedback_c: This would be true if there had been four strings in the array that had the first letter as an A and those strings' last letter was not an A.
   :feedback_d: This is the correct answer. The for loop is iterating through every element in the guestList array and the first if statement is checking to see if the current element in the array starts with the same letter and ends with the same letter. The variable, count decreases by one if that is true. However if that is false, the program goes to the else if statment and checks to see if the first letter is an A. If that is true count increases by one.

   What is printed when the following main method is executed?

   .. code-block:: java

	  public class GuestList
	  {
	      public static void main(String[] args)
	      {
	          int count = 0;
	          String[] guestList = {"Anna", "Briana", "Alex", "John"};
	          String subj1 = null;
	          String subj2 = null;
	          for (int j = 0; j < guestList.length; j++)
	          {
	              subj1 = guestList[j].substring(0,1);
	              subj2 = guestList[j].substring(guestList[j].length()-1);
	              if(subj1.equalsIgnoreCase(subj2))
	              {
	                  count--;
	              }
	              else if(subj1.equalsIgnoreCase("a"))
	              {
	                  count++;
	              }
	          }
	          System.out.println(count);
	      }
	  }


You can step through the code above by clicking on the following link `Ex-12-8-3 <https://goo.gl/MGXSF2>`_.

.. mchoice:: qssm_4
   :practice: T
   :answer_a: 8,7,7,3,4,1
   :answer_b: 4,7,7,3,8,1
   :answer_c: 4,8,7,1,3,7
   :answer_d: 1,8,7,7,4,3
   :correct: b
   :feedback_a: This would be true if the array was not modified at all.
   :feedback_b: This is the correct answer. The for loop is iterating through every element in the array. The if statement is checking to see if the current element is even or odd. If it is even, then the first element of the array and the current element will swap places in the array.
   :feedback_c: This would be true if the loop had brought all the even numbers to the beginning of the array.
   :feedback_d: This would be true if the if statement had said: if(arr[i] % 2 == 1).

   What is printed when the following main method is executed?

   .. code-block:: java

	  public class OddEvenMod
	  {
	      public static void main(String[] args)
	      {
	          int[] arr = {8,7,7,3,4,1};
	          for (int i = 0; i < arr.length; i++)
	          {
	              if(arr[i] % 2 == 0)
	              {
	                  int temp = arr[0];
	                  arr[0] = arr[i];
	                  arr[i] = temp;
	              }
	          }
	          for (int t = 0; t < arr.length; t++)
	          {
	              System.out.print((arr[t]) + ",");
	          }
	      }
	  }

You can step through the code above by clicking on the following link `Ex-12-8-4 <https://goo.gl/Rpc4o4>`_.

.. mchoice:: qssm_5
   :practice: T
   :answer_a: 3,5,3,9,2,4,
   :answer_b: 4,5,2,3,9,3,
   :answer_c: 5,3,2,9,3,4,
   :answer_d: 2,3,5,9,3,
   :correct: a
   :feedback_a: This is the correct answer. The check method is using a for loop and an if statement to return true if the parameter is prime and false if it is not prime. In the main method, the for loop iterates through every element in the array and checks to see if it is prime. If it is prime, then the program will swap that element with the first element in the array.
   :feedback_b: This would be true if the if statement had said: if(!check(arr[i])).
   :feedback_c: This would be true if the array had not been modified at all.
   :feedback_d: This would be true if the final for loop did not iterate through every element in the array.

   What is printed when the following main method is executed?

   .. code-block:: java

	  public class PrimeOrNot
	  {
	      private static boolean check(int n)
	      {
	          for(int i = 2; i < n; i++)
	          {
	              if(n % i == 0)
	                  return false;
	          }
	          return true;
	      }

	      public static void main(String[] args)
	      {
	          int[] arr = {5,3,2,9,3,4};
	          for (int i = 0; i < arr.length; i++)
	          {
	              if(check(arr[i]))
	              {
	                  int temp = arr[0];
	                  arr[0] = arr[i];
	                  arr[i] = temp;
	              }
	          }
	          for (int t = 0; t < arr.length; t++)
	          {
	              System.out.print((arr[t]) + ",");
	          }
	      }
	  }

You can step through the code above by clicking on the following link `Ex-12-8-5 <http://www.pythontutor.com/java.html#code=public%20class%20PrimeOrNot%0A%7B%0A%20%20%20%20private%20static%20boolean%20check%28int%20n%29%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20for%28int%20i%20%3D%202%3B%20i%20%3C%20n%3B%20i%2B%2B%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%28n%20%25%20i%20%3D%3D%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20int%5B%5D%20arr%20%3D%20%7B5,3,2,9,3,4%7D%3B%0A%20%20%20%20%20%20%20%20for%20%28int%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%28check%28arr%5Bi%5D%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20int%20temp%20%3D%20arr%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20arr%5B0%5D%20%3D%20arr%5Bi%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20arr%5Bi%5D%20%3D%20temp%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20for%20%28int%20t%20%3D%200%3B%20t%20%3C%20arr.length%3B%20t%2B%2B%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20System.out.print%28%28arr%5Bt%5D%29%20%2B%20%22,%22%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D&cumulative=false&curInstr=111&heapPrimitives=false&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false>`_.

.. mchoice:: qssm_6
   :practice: T
   :answer_a: Anna John Billy Bob Roger Dominic
   :answer_b: John Dominic Anna Roger Bob Billy
   :answer_c: Billy Bob Roger Anna Dominic John
   :answer_d: Anna John Billy Bob Roger
   :correct: b
   :feedback_a: This would be true if the program did not modify the names array at all.
   :feedback_b: This is the correct answer. The program is ordering the grades array from greatest to least as well as keeping the names with the grades.
   :feedback_c: This would be true if the program sorted the grades array from the smallest value to the largest value.
   :feedback_d: This would be true if the program did not modify the names array and if the for loop at the end of the program did not output all the values of the array.

   What is printed when the following main method is executed?

   .. code-block:: java

		public class GradeSort
		{
		   public static void main(String[] args)
		   {
			String[] names = {"Anna","John","Billy","Bob","Roger","Dominic"};
			int[] grades = {93,100,67,84,86, 93};
			int i, j, first, temp;
			String temp2;
			for (i = grades.length - 1; i > 0; i--)
			{
			    first = 0;
			    for (j = 1; j <= i; j++)
			    {
			        if (grades[j] < grades[first])
			            first = j;
			    }
			    temp = grades[first];
			    grades[first] = grades[i];
			    grades[i] = temp;
			    temp2 = names[first];
			    names[first] = names[i];
			    names[i] = temp2;
			}
			for (int t = 0; t < names.length; t++)
			{
			    System.out.print((names[t]) + " ");
			}
		   }
		}

You can step through the code above by clicking on the following link `Ex-12-8-6 <https://goo.gl/rXzB1c>`_.

.. mchoice:: qssm_7
   :practice: T
   :answer_a: 6 7 17 3 2 9 1 5
   :answer_b: 9 6 3 2 3 1 5 17
   :answer_c: 5 1 2 3 6 17 7 9
   :answer_d: 9 7 17 6 3 2 1 5
   :correct: d
   :feedback_a: This would be true if the program had not modified the array at all.
   :feedback_b: This would be true if the loop was moving the position of odd numbers in the array to arr.length-1.
   :feedback_c: This would be true if the array was printed in the reversed order.
   :feedback_d: This is the correct answer, because the divCheck method is checking to see if the values in the array are divisible by 2 or 3. If they are, they are swapped with the value at the first position (index 0).

   What is printed when the following main method is executed?

   .. code-block:: java

	  public class DivisibleBy2or3
	  {
	      private static boolean divCheck(int n)
	      {
	          if(n % 2 == 0 || n % 3 == 0)
	          {
	            return true;
	          }
	          return false;
	      }

	      public static void main(String[] args)
	      {
	          int[] arr = {6,7,17,3,2,9,1,5};
	          for (int i = 0; i < arr.length; i++)
	          {
	              if(divCheck(arr[i]))
	              {
	                  int temp = arr[0];
	                  arr[0] = arr[i];
	                  arr[i] = temp;
	              }
	          }
	          for (int t = 0; t < arr.length; t++)
	          {
	              System.out.print((arr[t]) + " ");
	          }
	      }
	  }

You can step through the code above by clicking on the following link `Ex-12-8-7 <https://goo.gl/LrbUuu>`_.
