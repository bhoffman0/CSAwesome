.. qnum::
   :prefix: 6-4-
   :start: 1

.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork
    
Array Algorithms (FRQs)
=======================

..	index::
	single: array
	single: algorithms
	pair: array; algorithms
    pair: array; FRQ
    
In this lesson, you will study different Free Response Questions and responses that develop algorithms using arrays. 


Here are some common algorithms that you should be familiar with for the AP CS A exam:

- Determine the minimum or maximum value in an array
- Compute a sum, average, or mode of array elements
- Search for a particular element in the array
- Determine if at least one element has a particular property
- Determine if all elements have a particular property
- Access all consecutive pairs of elements
- Determine the presence or absence of duplicate elements
- Determine the number of elements meeting specific criteria
- Shift or rotate elements left or right
- Reverse the order of the elements

Here are two common array traversal loops that can be used for these algorithms:

.. code-block:: java 
 

  for (int value : array)
  {
      if (value ....)
          ...
  }
  
  for(int i=0; i < array.length; i++) 
  {
     if (array[i] ....)
         ...
  }     
  

.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=%20%20public%20class%20MinMax%0A%20%20%20%7B%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20int%5B%20%5D%20values%20%3D%20%7B6,%202,%201,%207,%2012,%205%7D%3B%0A%20%20%20%20%20%20%20%20int%20min%20%3D%20values%5B0%5D%3B%20//%20initialize%20min%20to%20the%20first%20element%0A%20%20%20%20%20%20%20%20for%20%28int%20val%20%3A%20values%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20%28val%20%3C%20min%29%20//%20found%20a%20new%20min!%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20min%20%3D%20val%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20System.out.println%28%22Min%20is%20%22%20%2B%20min%20%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%7D&cumulative=false&curInstr=20&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>	
   
|CodingEx| **Coding Exercise**



.. activecode:: minmax
   :language: java
   
   The code below finds the minimum (smallest element) in an array. Try it in the |Java visualizer|. Can you change it to find the maximum element instead? Can you also compute the average of the elements?
   ~~~~
   public class MinMax
   {      
      public static void main(String[] args)
      {
        int[ ] values = {6, 2, 1, 7, 12, 5};
        int min = values[0]; // initialize min to the first element
        for (int val : values)
        {
          if (val < min) // found a new min!
              min = val;
        }
        System.out.println("Min is " + min );
      }
   }

.. |visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public%20class%20Rotate%0A%20%20%20%7B%20%20%20%20%20%20%0A%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20int%5B%20%5D%20values%20%3D%20%7B6,%202,%201,%207,%2012,%205%7D%3B%0A%20%20%20%20%20%20%20%20int%20first%20%3D%20values%5B0%5D%3B%0A%20%20%20%20%20%20%20%20for%20%28int%20i%3D0%3B%20i%20%3C%20values.length%3B%20i%2B%2B%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20//%20if%20it's%20not%20the%20last%20element,%20copy%20the%20next%20one%20over%0A%20%20%20%20%20%20%20%20%20%20if%20%28i%20%3C%20values.length%20-%201%29%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20values%5Bi%5D%20%3D%20values%5Bi%2B1%5D%3B%0A%20%20%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20//%20last%20element%20gets%20first%0A%20%20%20%20%20%20%20%20%20%20%20%20%20values%5Bi%5D%20%3D%20first%3B%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20//%20print%20them%20out%20to%20see%20the%20results%0A%20%20%20%20%20%20%20%20for%20%28int%20val%20%3A%20values%29%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20System.out.print%28val%20%2B%20%22%20%22%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%7D%0A%20%20&cumulative=false&curInstr=47&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>	
   
|CodingEx| **Coding Exercise**

 

.. activecode:: rotate
   :language: java
   
   The code below rotates array elements to the left. Note that you need to use an indexed loop for this because you need to change the array and access two elements at different indices. Try it in the |visualizer|. Can you change it to rotate the elements to the right instead? 
   ~~~~
   public class Rotate
   {      
      public static void main(String[] args)
      {
        int[ ] values = {6, 2, 1, 7, 12, 5};
        int first = values[0];
        for (int i=0; i < values.length; i++)
        {
           // if it's not the last element, copy the next one over
          if (i < values.length - 1) 
              values[i] = values[i+1];
          else {
             // last element gets first
             values[i] = first; 
            }
        }
        // print them out to see the results
        for (int val : values)
        {
           System.out.print(val + " ");
        }

    }
   }
  
We encourage you to work in pairs or groups to tackle the following challenging FRQ problems and take them one step at a time. These will get easier with practice! 

.. toctree::
   :maxdepth: 3

   horseBarnA.rst
   horseBarnB.rst
   selfDivisorB.rst
   soundA.rst
   soundB.rst
   numberCubeA.rst
   numberCubeB.rst
   