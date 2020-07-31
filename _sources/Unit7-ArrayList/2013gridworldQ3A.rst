.. qnum::
   :prefix:  7-4-11-
   :start: 1

Free Response - Grid World A
------------------------------

..	index::
	  single: Grid World
    single: free response

The following is a free response question from 2013. It was question 3 part A on the exam. You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

3.   This question involves reasoning about the GridWorld case study that was formerly required knowledge for the APCSA exam. It is no longer expected that you know this information and it will be provided to you in this question.
Because there is a lot of extra material that you need to read and understand, this question may seem more challenging and will require more time than a typical FRQ you would expect on your AP exam. It is still good practice nonetheless.
In part (a) you will write a method to return an ``Arraylist`` of all empty ``Location`` objects in a given grid. The ``GridWorldUtilities`` class contains ``static`` methods. A partial declaration of the ``GridWorldUtilities`` class is shown below.

.. figure:: Figures/2013gridA1.png
    :align: center
    :figclass: align-center

In this question, you will write the ``GridWorldUtilities`` method ``getEmptyLocations``. If there are no empty locations
in grid, the method returns an empty ``Arraylist``. Otherwise, it returns an ``Arraylist`` of all empty locations in
grid. Each empty location should appear exactly once in the ``Arraylist``.


Necessary Preliminary Information
================================================
The GridWorld case study provided a graphical environment where visual objects inhabited and interacted in a two-dimensional grid (similar to GreenFoot).
In this case study, students designed and created ``Actor`` objects, added them to ``Grid`` objects, and determined whether the ``Actor`` objects behaved according to their specifications.
Since this case study is no longer in the AP Java curriculum, all the necessary documentation is provided below.

The first necessary class is the ``Location`` class. Every ``actor`` that appears in the ``Grid`` has a ``Location``. The ``Location`` class encapsulates the coordinates for an ``Actor`` object’s position in a ``Grid``.

.. figure:: Figures/2013locDoc.png
    :align: center
    :figclass: align-center

The next important part is the ``Grid Interface``. You may be unfamiliar with interfaces so don’t worry too much about how they work. What you need to know is that the interface ``Grid<E>`` specifies the methods for any ``grid`` that contains objects of the type ``E`` which you choose at its initialization.
For part A we will be working with the class ``BoundedGrid<E>`` which implements the ``Grid Interface``.

.. figure:: Figures/2013gridDoc.png
    :align: center
    :figclass: align-center

Part A: Check your understanding of the question
================================================

The problems in this section are to help you check your understanding and guide you towards a solution.
You can skip these if you think you know what to do already.  Click the buttons to reveal the problems if you want to do them.

.. reveal:: grid_wrld_cu_r1
   :showtitle: Reveal Keyword Exercise
   :hidetitle: Hide Keyword Problem

   .. clickablearea:: grid_find_parts
       :question: The question statement is listed below. Click on the part of the sentences below with the data type of the object passed to  <code>getEmptyLocations</code> and the datatype of the returned object.
       :iscode:
       :feedback: The method header for getEmptyLocations is "public static ? getEmptyLocations (?)". What information should replace the "?" and what does that tell you about the method?

       Write the :click-incorrect:GridWorldUtilities:endclick: method:click-incorrect: getEmptyLocations:endclick:. If there are no empty :click-incorrect:locations:endclick: in :click-correct:Grid:endclick:, the :click-incorrect:method:endclick: returns an empty :click-correct:Arraylist:endclick:.
       Otherwise, it returns an Arraylist of all :click-incorrect:empty:endclick: :click-incorrect:locations in Grid:endclick:. Each :click-incorrect:empty location:endclick: should appear exactly once in the Arraylist.


.. reveal:: grid_wrld_cu_r2
   :showtitle: Reveal Data Type Problem
   :hidetitle: Hide Data Type Problem

   .. mchoice:: grid_wrld_cu_mc_1
      :answer_a: GridWorldUtilities
      :answer_b: getEmptyLocations
      :answer_c: BoundedGrid
      :answer_d: Actor
      :correct: a
      :feedback_a: getEmptyLocations is a method inside of GridWorldUtilities.
      :feedback_b: getEmptyLocations exists in a class, whereas getEmptyLocations is only a method.
      :feedback_c: BoundedGrid is not the correct class.
      :feedback_d: Actor is no the correct class.

      In which class is the method ``getEmptyLocations`` written?

.. reveal:: grid_wrld_cu_r3
   :showtitle: Reveal Parameter Problem
   :hidetitle: Hide Parameter Problem

   .. mchoice:: grid_wrld_cu_mc_2
      :answer_a: Grid
      :answer_b: String
      :answer_c: Location
      :answer_d: Actor
      :correct: c
      :feedback_a: Grid is the type of the parameter.
      :feedback_b: There are no strings in this problem.
      :feedback_c: Correct, the ArrayList returned contains Location objects.
      :feedback_d: This is no the type of object the ArrayList holds.

      When this method returns an ``ArrayList``, what is the datatype of the objects in the ``ArrayList``?

.. reveal:: grid_wrld_cu_r4
   :showtitle: Reveal Height Bounds Problem
   :hidetitle: Hide Height Bounds Problem

   .. mchoice:: grid_wrld_cu_mc_3
      :answer_a: .length
      :answer_b: .getSize()
      :answer_c: .getHeight()
      :answer_d: .getNumRows()
      :correct: d
      :feedback_a: This call works for strings, but we aren't working with strings.
      :feedback_b: This is not an applicable command for grid
      :feedback_c: This does not exist.
      :feedback_d: Correct, this will return the height of the grid.

      How can one find the height of the ``grid`` that is passed to this method?

.. reveal:: grid_wrld_cu_r5
    :showtitle: Reveal Width Bounds Problem
    :hidetitle: Hide Width Bounds Problem

    .. mchoice:: grid_wrld_cu_mc_4
       :answer_a: .getNumCols()
       :answer_b: .getNumRows()
       :answer_c: .getWidth()
       :answer_d: .length
       :correct: a
       :feedback_a: Correct, this will find the width of the grid.
       :feedback_b: This will find the height of the grid, but we're looking for the width.
       :feedback_c: This does not exist.
       :feedback_d: This call works for strings, but we aren't working with strings.

       How can one find the width of the ``grid`` that is passed to this method?


How to Solve Part A
=====================

Here is the question again.

Write the ``GridWorldUtilities`` method ``getEmptyLocations``. If there are no empty locations
in grid, the method returns an empty ``Arraylist``. Otherwise, it returns an ``Arraylist`` of all empty locations in
grid. Each empty location should appear exactly once in the ``Arraylist``.

.. shortanswer:: grid_algorithm

   Explain in plain English what your code will have to do to answer this question.  Use the variable names given above.

This section contains a plain English explanation of one way to solve this problem as well as problems that test your understanding of how to write the code to do those things.  Click on the buttons to reveal the questions.

.. reveal:: grdwrld_algorithm
   :showtitle: Reveal Algorithm Structure Hint
   :hidetitle: Hide Algorithm Structure Hint

   The method ``getEmptyLocations`` needs to return an ``ArrayList`` of ``Location`` objects containing all the places in the grid that are empty.

   This implies that the code needs to create an empty ``ArrayList`` of type ``Location``.  Let's call it ``locs``. We need to have our program loop through the squares in ``grid`` from the start to the end (without going out of bounds). If the current square is empty, we need to add that position to the end of ``locs``.
   Finally our method should end by returning ``locs``.

.. reveal:: grdwrld_mcalg_hint_1
   :showtitle: Reveal ArrayList Declaration Problem
   :hidetitle: Hide ArrayList Declaration problem

   .. mchoice:: grdwrld_mcalg_answr_1
      :answer_a: locs = new ArrayList&lt;Location&gt;();
      :answer_b: ArrayList&lt;Location&gt; locs = new ArrayList&lt;Location&gt;;
      :answer_c: ArrayList&lt;Location&gt; locs = new List&lt;Location&gt;();
      :answer_d: ArrayList&lt;Location&gt; locs = new ArrayList&lt;Location&gt;();
      :correct: d
      :feedback_a: You must declare the type for locs
      :feedback_b: You must include the () when creating a new object
      :feedback_c: You must create an ArrayList using a concrete subclass like ArrayList
      :feedback_d: Correct!

      Which Java expression correctly creates an empty ``ArrayList`` of type ``Location`` called locs?

.. reveal:: grdwrld_mcalg_hint_2
   :showtitle: Reveal Loop Problem
   :hidetitle: Hide Loop Problem

   .. mchoice:: grdwrld_mcalg_answr_2
      :answer_a: nested for loop
      :answer_b: for
      :answer_c: for-each
      :answer_d: while
      :correct: d
      :feedback_a: Correct! This method will be the easiest to read and simplest to debug.
      :feedback_b: you cannot use a single for loop because you need to traverse 2 dimensions
      :feedback_c: you could use a nested for-each loop but it would make your code longer and less efficient, as well as harder to read.
      :feedback_d: you cannot use a single while loop because you need to traverse 2 dimensions

      Which loop would be best for this situation?

.. reveal:: grdwrld_mcalg_hint_3
   :showtitle: Reveal Initialization Problem
   :hidetitle: Hide Initialization problem

   .. mchoice:: grdwrld_mcalg_answr_3
      :answer_a: locToCheck = new Location (r,c);
      :answer_b: location locToCheck = location (r,c);
      :answer_c: Location locToCheck = new Location (r,c);
      :answer_d: location locToCheck = new location (r,c);
      :correct: c
      :feedback_a: You need to assign a datatype to locToCheck on the left side of the initialization.
      :feedback_b: You need to state that you a creating a new object with the keyword, "new".
      :feedback_c: Correct!
      :feedback_d: Watch your capitalization! the Location class needs to be capitalized.

       Assuming we have our nested for loop that uses r and c to iterate through the ``grid``, how do we initialize a ``Location`` object (called locToCheck) to add our ``ArrayList`` locs?

.. reveal:: grdwrld_mcalg_hint_4
   :showtitle: Reveal Empty Check Problem
   :hidetitle: Hide Empty Check problem

   .. mchoice:: grdwrld_mcalg_answr_4
      :answer_a: if (locToCheck == null)
      :answer_b: if (grid.get(locToCheck) == null)
      :answer_c: if (locs.get(locToCheck) == 0)
      :answer_d: if (grid.get(locToCheck) == 0)
      :correct: b
      :feedback_a: locToCheck currently only contains the location in the grid, not what object is actually located there
      :feedback_b: Correct!
      :feedback_c: We want locs to contain all the empty locations so it wouldn't make sense to call locs.get(locToCheck).
      :feedback_d: The grid could contain an integer object equal to 0 so that would mean the grid isn't empty at that spot.

      How can you check if the current location, "locToCheck" is empty?


Write the Code
==================

In this question, you will write the ``GridWorldUtilities`` method ``getEmptyLocations``. If there are no empty locations
in grid, the method returns an empty ``Arraylist``. Otherwise, it returns an ``Arraylist`` of all empty locations in
grid. Each empty location should appear exactly once in the ``Arraylist``.

Write the method ``getEmptyLocations`` in the code below. The main method contains code to test your solution.

.. activecode:: frq2013Q3A-grid
   :language: java

   import info.gridworld.grid;
   public class GridWorldUtilities
   {

       /** Gets all the locations in grid that do not contain objects.
        *  @param grid is a reference to a bounded object
        *  @param an array list (possibly contains nothing) of empty locations in grid.
        *         The size of the returned list is 0 if there are no empty locations in grid.
        *         Each empty location in grid should appear exactly and only once in the returned list.
        */
       public static ArrayList<Location> getEmptyLocations(Grid<Actor> grid) {
          /* TO BE IMPLEMENTED IN PART A*/
       }

       public static void main(String[] args)
       {
           ???
       }
   }
