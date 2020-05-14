.. qnum::
   :prefix: 6-9-
   :start: 1
   
Practice Exam for Arrays
-------------------------

The following problems are *harder* than what you will probably see on the AP CS A exam.  They come from research in computer science education and test your ability to trace and understand complex code with loops, arrays, and conditionals.  They are used with permission from Raymond Lister of the University of Technology, Sydney, Australia.  

Please answer each to the best of your ability.  

Click the "Start" button when you are ready to begin the exam, but only then as you can only take the exam once.  Click the "Pause" button to pause the exam (you will not be able to see the questions when the exam is paused).  Click on the "Finish Exam" button at the end only when you are done.  It will display the number correct, number wrong, and number skipped after the "Finish Exam" button.

.. timed:: arrayExam1

   .. mchoice:: arrayEx1
      :practice: T
      :answer_a: 0
      :answer_b: 1
      :answer_c: 2
      :answer_d: 3
      :correct: c
      :feedback_a: While i is set to 0 initially it does change.  
      :feedback_b: This would be true if i was incremented after the sum was changed instead of before.  
      :feedback_c: This will loop twice and increment i each time so at the end i is 2.  
      :feedback_d: This would be true if it was asking for the value of limit.

      What is the value of ``i`` after the following code has executed?

   
      .. code-block:: java

        int[] x = {2, 1, 4, 5, 7};
        int limit = 3;
        int i = 0;
        int sum = 0;
        while ((sum < limit) && (i < x.length))
        {
           i++;
           sum = sum + x[i];
        }


   .. mchoice:: arrayEx2
      :practice: T
      :answer_a: 3
      :answer_b: 2
      :answer_c: 1
      :answer_d: 0
      :correct: b
      :feedback_a: This would be true if the while loop continued as long as i1 and i2 where greater than or equal to 0.  
      :feedback_b: This loops and only increments count when the same value is in x1 and x2, but it doesn't compare the values at index 0 since it stops when either index is 0.
      :feedback_c: It may appear that the indices get out of synchronization, but check out the else if and else code.
      :feedback_d: The very first time through the loop the values at the two indicies are equal and count is incremented.  

      What is the value of ``count`` after the following code has executed?
   
      .. code-block:: java

        int[] x1 = {1, 2, 4, 7};
        int[] x2 = {1, 2, 5, 7};
        int i1 = x1.length - 1;
        int i2 = x2.length - 1;
        int count = 0;
        while ((i1 > 0 ) && (i2 > 0 ))
        {
           if (x1[i1] == x2[i2])
           {
              count++;
              i1--;
              i2--;
           }
           else if (x1[i1] < x2[i2])
           {
              i2--;
           }
           else
           { // x1[i1] > x2[i2]
              i1--;
           }
        }

   .. mchoice:: arrayEx3
      :practice: T
      :answer_a: 1
      :answer_b: 2
      :answer_c: 3
      :answer_d: 4
      :answer_e: 5
      :correct: c
      :feedback_a: This would be true if the second loop only executed one time, but it executes for all values in x.
      :feedback_b: This would be true if there were only 2 distinct values in x.
      :feedback_c: This changes b[x[i]] to true and then counts the number of true in b.  Since x only has 3 distinct values in it the answer will be 3.  
      :feedback_d: This would be true if there were 4 distinct values in x.  
      :feedback_e: This would be true if it was ``b[i] = true`` instead of ``b[x[i]] = true``.
      
      What is the value of ``count`` after the following code has executed?
   
      .. code-block:: java

        int [] x = {1, 2, 3, 3, 3};
        boolean b[] = new boolean[x.length];
        for (int i = 0; i < b.length; i++)
           b[i] = false;
        for (int i = 0; i < x.length; i++)
           b[ x[i] ] = true;
        int count = 0;
        for (int i = 0; i < b.length; i++)
        {
           if (b[i] == true) count++;
        } 


   .. mchoice:: arrayEx4
      :practice: T
      :answer_a: 0
      :answer_b: 1
      :answer_c: 2
      :answer_d: 3
      :answer_e: 4
      :correct: e
      :feedback_a: While count starts at 0 it is incremented when a match is found, which will happen when i1 is 1 and i2 is 0.  
      :feedback_b: This would be true if the loop stopped after the first match was found, but it does not.
      :feedback_c: This would be true if the code only looked for a match at the same indicies. 
      :feedback_d: This would be true if both i2 and i1 were incremented when a match was found.  
      :feedback_e: This code only increments i2 when a match is found, which means that the 2 at position 2 in x1 matches both 2's in x2. 

      What is the value of ``count`` after the following code has executed? 
   
      .. code-block:: java

        int[ ] x1 = {0, 1, 2, 3};
        int[ ] x2 = {1, 2, 2, 3};
        int i1 = 0;
        int i2 = 0;
        int count = 0;
        while ( (i1 < x1.length) &&
                (i2 < x2.length))
        {
           if (x1[i1] == x2[i2])
           {
              count++;
              i2++;
           }
           else if (x1[i1] < x2[i2])
           {
              i1++;
           }
           else
           { // x1[i1] > x2[i2]
              i2++;
           }
        }
     
   .. mchoice:: arrayEx5
      :practice: T
      :answer_a: {3,2,2,0}
      :answer_b: {0,1,2,3} 
      :answer_c: {3,2,1,0}
      :answer_d: {0,2,4,6}
      :answer_e: {6,4,2,0}
      :correct: a
      :feedback_a: This loops 2 times.  During the first loop it copies x[3] to x[0] and sets x[3] to 2 times the original value of x[0].  In the second loop it copies x[2] to x[1] and sets x[2] to 2 times the original value in x[1]. 
      :feedback_b: These are the initial values for x, but they are changed since i starts out at 0 and j starts out as 3 and i is less than j.  
      :feedback_c: This would be true if the code simply reversed the values in the array, but what happens when x[j] = 2 * temp?
      :feedback_d: This would be true if the code just multiplied all the original values by 2.  Is that what it does?  Why would you need to use temp for that?
      :feedback_e: This would be true if the code multiplied the original values by 2 and reversed the values.  Is that what it does?  The loop only continues while i is less than j, so it doesn't loop through all the values in x.
      
      After the following code is executed which of the following are the values in ``x``?
      
      .. code-block:: java
   
         int[ ] x = {0, 1, 2, 3};
         int temp;
         int i = 0;
         int j = x.length - 1;
         while (i < j)
         {
            temp = x[i];
            x[i] = x[j];
            x[j] = 2 * temp;
            i++;
            j--;
         }
   
   .. mchoice:: arrayEx6
      :practice: T
      :answer_a: A
      :answer_b: B
      :answer_c: C
      :answer_d: D
      :answer_e: E
      :correct: b
      :feedback_a: This won't work since each time through the loop b is reset based on the last comparison.  
      :feedback_b: This will return false if it finds a value at i that is larger than the value at i+1 and otherwise it returns true.
      :feedback_c: There is no way for b to become true.
      :feedback_d: This sets b to true when it finds elements that are out of order.  
      :feedback_e: This returns as soon as it finds a value that is out of order, but returns true instead of false.

      Which of the following is the missing code from the method ``isSorted`` so that it correctly checks that all elements in ``x`` are sorted in ascending order?
   
      .. code-block:: java
   
         public static boolean isSorted(int[] x)
         {
            //missing code goes here
         }
          

        A. 
        boolean b = true;
        for (int i=0 ; i < x.length - 1; i++)
        {
           if ( x[i] > x[i+1] )
              b = false;
           else
              b = true;
        }
        return b;
        
        B.
        for (int i=0; i < x.length - 1; i++)
        {
           if (x[i] > x[i+1] )
              return false;
        }
        return true;
        
        C.
        boolean b = false;
        for (int i=0; i<x.length - 1; i++)
        {
           if (x[i] > x[i+1] )
              b = false;
        }
        return b;
        
        D.  
        boolean b = false;
        for (int i=0;i<x.length - 1;i++)
        {
           if (x[i] > x[i+1] )
              b = true;
        }
        return b;
        
        E.
        for (int i=0;i<x.length - 1;i++)
        {
           if (x[i] > x[i+1] )
              return true;
        }
        return false;
        

   .. mchoice:: arrayEx7
      :answer_a: 0
      :answer_b: 1
      :answer_c: 2
      :answer_d: 3
      :answer_e: 4
      :correct: d
      :feedback_a: Each time the loop executes i is incremented and it executes at least once. 
      :feedback_b: Does this code only execute 1 time?  
      :feedback_c: This code will loop till sum is not less than limit.  It adds the value at i of x each time to sum so sum isn't 7 until the 3rd time through the loop.  
      :feedback_d: This will loop three times till sum is 7 and so i will be 3.  
      :feedback_e: This would be true if it was <code>sum <= limit</code>.  

      What is the value of ``i`` after the following code executes?  
   
      .. code-block:: java
   
         int[] x = {2, 1, 4, 5, 7};
         int limit = 7;
         int i = 0;
         int sum = 0;
         while ((sum<limit) && (i<x.length))
         {
            sum += x[i];
            i++;
         }
    
   .. mchoice:: arrayEx8
      :practice: T
      :answer_a: <code>for (int j=0 ; j < x.length; j++)</code>
      :answer_b: <code>for (int j=0 ; j < x.length - 1; j++)</code>
      :answer_c: <code>for (int j=i+1; j < x.length; j++)</code>
      :answer_d: <code>for (int j=i+1; j < x.length - 1; j++)</code>
      :correct: c
      :feedback_a: The inner loop should start at the outer loop current position plus one to not double count inversions.
      :feedback_b: The inner loop should start at the outer loop current position plus one to not double count inversions.
      :feedback_c: This correctly starts at the outer loop current index plus one and loops through the rest of the array.
      :feedback_d: This misses checking the last value in the array since it is <code>j < x.length-1</code>.  
    
      If any two numbers in an array of integers, not necessarily consecutive numbers in the array, are out of order (i.e. the number that occurs first in the array is larger than the number that occurs second), then that is called an inversion. For example, consider an array “x” that has the values {1, 4, 3, 2}.  Then there are three inversions since 4 is greater than both 3 and 2 and 3 is greater than 2.  Which of the following can be used to replace the missing code so that the code correctly counts the number of inversions?
   
      .. code-block:: java


         int inversionCount = 0;
         for (int i=0 ; i < x.length - 1 ; i++)
         {
            // missing code goes here
            {
               if (x[i] > x[j])
                  inversionCount++;
            }
         }
            
      
   .. mchoice:: arrayEx9
      :practice: T
      :answer_a: A
      :answer_b: B
      :answer_c: C
      :answer_d: D
      :correct: b
      :feedback_a: This increments a2 before copying the value into array2 and so puts it in the wrong place. 
      :feedback_b: This will copy all the even values in array1 to array2 and put them in the same position as they were in array1.
      :feedback_c: This will cause an out of bounds error.
      :feedback_d: This increments a2 before copying the value into array2 and so puts it in the wrong place. 

      Which of the following correctly copies all the even numbers from ``array1`` to ``array2`` in the same order as they are in ``array1`` without any errors?  Assume that ``array2`` is large enough for all the copied values.  
   
      .. code-block:: java
      
         A. 
         int a2 = 0;
         for (int a1=0 ; a1 < array1.length ; a1++)
         {
            // if array1[a1] is even
            if (array1[a1] % 2 == 0)
            {
               // array1[a1] is even,
               // so copy it
               a2++;
               array2[a2] = array1[a1];
            }
         }
         
         B. 
         int a2 = 0;
         for (int a1=0 ; a1 < array1.length ; a1++)
         {
            // if array1[a1] is even
            if (array1[a1] % 2 == 0)
            {
               // array1[a1] is even,
               // so copy it
               array2[a2] = array1[a1];
               a2++;
            }
         }
         
         C. 
         int a2 = 0;
         for ( int a1=0 ; a1 <= array1.length ; a1++)
         {
            // if array1[a1] is even
            if (array1[a1] % 2 == 0)
            {
               // array1[a1] is even,
               // so copy it
               array2[a2] = array1[a1];
               a2++;
            }
         }
         
         D. 
         int a2 = 0;
         for (int a1=0 ; a1 <= array1.length ; a1++)
         {
            // if array1[a1] is even
            if (array1[a1] % 2 == 0)
            {
               // array1[a1] is even,
               // so copy it
               a2++;
               array2[a2] = array1[a1];
            }
         }

          
   .. mchoice:: arrayEx10
      :practice: T
      :answer_a: {4, 3, 0, 0}
      :answer_b: {4, 1, 3, 0}
      :answer_c: {2, 4, 3, 0}
      :answer_d: {2, 4, 1, 3}
      :correct: a
      :feedback_a: This copies the value from array1[a1] to array2[a2] but only if the value at array1[a1] is greater than or equal to 2.  So it copies the 4 and 3.  Notice that a2 starts at 0 and a1 starts at 1.  
      :feedback_b: This would be true except that a2 is only incremented if the copy occurs.  
      :feedback_c: Walk through the very first iteration of the loop and notice that after the first iteration the first value in array2 is 4.  
      :feedback_d: This would be true if we were asking for the values in array1.  

      After the following code executes what are the values in ``array2``?
   
      .. code-block:: java
   
         int[] array1 = {2, 4, 1, 3};
         int[] array2 = {0, 0, 0, 0};
         int a2 = 0;
         for (int a1=1; a1 < array1.length; a1++)
         {
            if (array1[a1] >= 2)
            {
               array2[a2] = array1[a1];
               a2++;
            }
         }
         
  