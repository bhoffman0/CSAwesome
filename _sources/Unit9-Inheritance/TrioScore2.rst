.. qnum::
   :prefix:  9-9-2-
   :start: 1

Trio Student Solution 2
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

The following is the second sample student response.  

.. figure:: Figures/TrioStudentSol2a.png
    :width: 700px
    :align: center
    :figclass: align-center

    Figure 4: The start of the second sample student response to the Trio class problem.

.. figure:: Figures/TrioStudentSol2b.png
    :width: 700px
    :align: center
    :figclass: align-center

    Figure 5: The end of the second sample student response to the Trio class problem.
    
Apply the grading rubric shown above as you answer the following questions. 

*Apply the Grading Rubric*
    
.. mchoice:: qtrio2_1
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: This declares the class correctly as <code>public class Trio implements MenuItem</code>
   :feedback_b: What do you think is wrong with the class declaration?

   Should the student earn 1 point for the correct declaration of the ``Trio`` class?
   
.. mchoice:: qtrio2_2
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: Remember that all instance variables should be declared private so that the class controls access to the variables.  
   :feedback_b: The student did not make the instance variables private, so the student does not get this point.

   Should the student earn 1 point for declaring the private instance variables (sandwich, salad, and drink or name and price)?
   
.. mchoice:: qtrio2_3
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: This solution declares the constructor as <code>public Trio(Sandwich s, Salad sa, Drink d)</code>
   :feedback_b: What do you think is wrong with the constructor declaration?

   Should the student earn 1 point for declaring the the constructor correctly?
   
.. mchoice:: qtrio2_4
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: This solution initializes the instance variables (sandwich, salad, and drink) correctly with the values from the parameters (s, sa, and d).
   :feedback_b: What do you think is wrong with the initialization of the instance variables in the constructor?

   Should the student earn 1 point for correctly initializing the appropriate instance variables in the constructor?
   
.. mchoice:: qtrio2_5
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: This solution contains correct declarations for <code>public String getName()</code> and <code>public double getPrice()</code>.
   :feedback_b: To implement an interface the class must have a getName and getPrice method as defined by the MenuItem interface.  

   Should the student earn 1 point for correctly delcaring the methods in the ``MenuItem`` interface (getName and getPrice)?
   
.. mchoice:: qtrio2_6
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: Look at what <code>getName</code> is supposed to return. 
   :feedback_b: This solution doesn't include the "/" between the sandwich and salad and between the salad and the drink and is also missing the "Trio" at the end of the name, so it loses this point. 

   Should the student earn 1 point for correctly constructing the string to return from ``getName`` and making it available to be returned?
   
.. mchoice:: qtrio2_7
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: This solution does return the constructed string, even if the string is not completely correct.
   :feedback_b: Even though the string is not correct it was constructed and returned.  

   Should the student earn 1 point for returning a constructed string from ``getName``?
   
.. mchoice:: qtrio2_8
   :answer_a: Yes
   :answer_b: No
   :correct: b
   :feedback_a: What if b is equal to c but both are less than a?
   :feedback_b: This does not always compute the price correctly (when b is equal to c and they are both less than a).  

   Should the student earn 1 point for correctly calculating the price and making it available to be returned from ``getPrice``?
   
.. mchoice:: qtrio2_9
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: This solution does return the calculated price, even if that price is not always correct.
   :feedback_b: This point is earned if the student attempted to calculate the price and returned what was calculated.

   Should the student earn 1 point for returning the calculated price in ``getPrice``?
   
.. fillintheblank:: qtrio2_total

   What should the total score be for this student response (out of 9 points)?  Enter it as a number (like 3).

   -    :^6$: Correct.  The answer lost a total of 3 points.
        :.*: Subtract 1 point for each no response from the 9 possible points

        
        
        



