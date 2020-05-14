.. qnum::
   :prefix:  9-9-3-
   :start: 1

Trio Student Solution 3
------------------------

..	index::
	single: trio
    single: free response
    
The following is a free response question from 2014.  It was question 4 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.  

**Question 4.**  The menu at a lunch counter includes a variety of sandwiches, salads, and drinks. The menu also allows a
customer to create a "trio," which consists of three menu items: a sandwich, a salad, and a drink. The price
of the trio is the sum of the two highest-priced menu items in the trio; one item with the lowest price is free.
Each menu item has a name and a price. The four types of menu items are represented by the four classes
``Sandwich``, ``Salad``, ``Drink``, and ``Trio``. All four classes implement the following ``MenuItem`` interface.

.. code-block:: java 

   public interface MenuItem
   {
     /** @return the name of the menu item */
     String getName();

     /** @return the price of the menu item */
     double getPrice();
   }
   
The following diagram shows the relationship between the ``MenuItem`` interface and the ``Sandwich``, ``Salad``, ``Drink``, and ``Trio`` classes.

.. figure:: Figures/trioUML.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 1: UML class diagram showing MenuItem is implemented by Sandwich, Salad, Drink, and Trio.
    
For example, assume that the menu includes the following items. The objects listed under each heading are instances of the class indicated by the heading.

.. figure:: Figures/menuItemObjs.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 2: Example objects 

The menu allows customers to create Trio menu items, each of which includes a sandwich, a salad, and a
drink. The name of the Trio consists of the names of the sandwich, salad, and drink, in that order, each
separated by "/" and followed by a space and then "Trio". The price of the Trio is the sum of the two
highest-priced items in the Trio; one item with the lowest price is free.
A trio consisting of a cheeseburger, spinach salad, and an orange soda would have the name
``"Cheeseburger/Spinach Salad/Orange Soda Trio"``
and a price of $4.00 (the two highest prices
are $2.75 and $1.25). Similarly, a trio consisting of a club sandwich, coleslaw, and a cappuccino would have the
name ``"Club Sandwich/Coleslaw/Cappuccino Trio"`` 
and a price of $6.25 (the two highest prices
are $2.75 and $3.50).
    
Grading Rubric
===================

Below is the grading rubric for the Trio class problem.


.. figure:: Figures/TrioGrading.png
    :width: 700px
    :align: center
    :figclass: align-center

    Figure 3: The grading rubric for the Trio class problem.
    
Practice Grading
===================

The following is the third sample student response.  

.. figure:: Figures/TrioStudentSol3.png
    :width: 700px
    :align: center
    :figclass: align-center

    Figure 4: The start of the second sample student response to the Trio class problem.
    
Apply the grading rubric shown above as you answer the following questions. 

*Apply the Grading Rubric*
    
.. mchoice:: qtrio3_1
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: This declares the class correctly as <code>public class Trio implements MenuItem</code>
   :feedback_b: What do you think is wrong with the class declaration?

   Should the student earn 1 point for the correct declaration of the ``Trio`` class?
   
.. mchoice:: qtrio3_2
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: Do you see any instance variables declared here? 
   :feedback_b: The student did not declare any instance variables.
   
   Should the student earn 1 point for declaring the private instance variables (sandwich, salad, and drink or name and price)?
   
.. mchoice:: qtrio3_3
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: This solution declares the constructor as <code>public Trio(Sandwich sandwich, Salad salad, Drink drink)</code>
   :feedback_b: What do you think is wrong with the constructor declaration?

   Should the student earn 1 point for declaring the the constructor correctly?
   
.. mchoice:: qtrio3_4
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: This solution doesn't have any instance variables declared and doesn't try to use the parameter values.
   :feedback_b: There is no attempt to set the instance variables (which haven't been declared) to the parameter values.

   Should the student earn 1 point for correctly initializing the appropriate instance variables in the constructor?
   
.. mchoice:: qtrio3_5
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: To implement an interface the class must have both a <code>getName</code> and <code>getPrice</code> method.
   :feedback_b: This class is missing both the interface methods.  
   
   Should the student earn 1 point for correctly declaring the methods in the ``MenuItem`` interface (getName and getPrice)?
   
.. mchoice:: qtrio3_6
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: While the <code>toString</code> method exists and correctly creates the name string, it is not called by a <code>getName</code> method.
   :feedback_b: Since there is no <code>getName</code> method this point can not be awarded.   

   Should the student earn 1 point for correctly constructing the string to return from ``getName`` and making it available to be returned?
   
.. mchoice:: qtrio3_7
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: While the <code>toString</code> method exists and correctly creates and returns the name string, it is not called by a <code>getName</code> method.
   :feedback_b: Since there is no <code>getName</code> method this point can not be awarded.  

   Should the student earn 1 point for returning a constructed string from ``getName``?
   
.. mchoice:: qtrio3_8
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: While there is a method that calculates the price correctly, it is the wrong method.
   :feedback_b: There is no <code>getPrice</code> method so the student can not earn this point.   

   Should the student earn 1 point for correctly calculating the price and making it available to be returned from ``getPrice``?
   
.. mchoice:: qtrio3_9
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: While there is a method that calculates the price correctly and returns it, it is the wrong method.
   :feedback_b: There is no <code>getPrice</code> method so the student can not earn this point. 

   Should the student earn 1 point for returning the calculated price in ``getPrice``?
   
.. fillintheblank:: qtrio3_total

   What should the total score be for this student response (out of 9 points)?  Enter it as a number (like 3).

   -    :^2$: Correct.  This solution only got 2 points
        :.*: Add 1 point for each yes response

        
        
        



