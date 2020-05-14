.. qnum::
   :prefix: 8-16-
   :start: 1

Free Response - Climbing Club B
================================

..	index::
	single: ClimbingClub
    single: free response
    
The following is part b of a free response question from 2012.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.  

**Question 1.**  A mountain climbing club maintains a record of the climbs that its members have made. Information about a
climb includes the name of the mountain peak and the amount of time it took to reach the top. The information is
contained in the ``ClimbInfo`` class as declared below.

.. code-block:: java
 
   public class ClimbInfo
   {
      /** Creates a ClimbInfo object with name peakName and time climbTime.
        * @param peakName the name of the mountain peak
        * @param climbTime the number of minutes taken to complete the climb
        */
      public ClimbInfo(String peakName, int climbTime)
      { /* implementation not shown */ }
      
      /** @return the name of the mountain peak*/
      public String getName()
      { /* implementation not shown */ }
     
      /** @return the number of minutes taken to complete the climb*/
      public int getTime()
      { /* implementation not shown */ }
     
      // There may be instance variables, constructors, and methods 
      // that are not shown.
   }
   
The ``ClimbingClub`` class maintains a list of the climbs made by members of the club. The declaration of the
``ClimbingClub`` class is shown below. You will write two different implementations of the ``addClimb``
method. You will also answer two questions about an implementation of the ``distinctPeakNames`` method

.. code-block:: java

   public class ClimbingClub
   {
      /** The list of climbs completed by members of the club.
       * Guaranteed not to be null. Contains only non-null 
       * references.
       */
      private List<ClimbInfo> climbList;
   
      /** Creates a new ClimbingClub object. */
      public ClimbingClub()
      { 
         climbList = new ArrayList<ClimbInfo>(); 
      }
   
      /** Adds a new climb with name peakName and time climbTime 
       * to the list of climbs.
       * @param peakName the name of the mountain peak climbed
       * @param climbTime the number of minutes taken to complete 
       * the climb
       */
      public void addClimb(String peakName, int climbTime)
      { 
         /* to be implemented in part (a) */
      }
   
      /** @return the number of distinct names in the list of climbs */
      public int distinctPeakNames()
      { 
         /* implementation shown in part (c) */ 
      }
   
      // There may be instance variables, constructors, and methods 
      // that are not shown.
   }

**Part b.**  Write an implementation of the ``ClimbingClub`` method ``addClimb`` that stores the elements of
``climbList`` in alphabetical order by name (as determined by the ``compareTo`` method of the ``String``
class). This implementation of ``addClimb`` should create a new ``ClimbInfo`` object with the given name
and time and then insert the object into the appropriate position in ``climbList``. Entries that have the
same name will be grouped together and can appear in any order within the group. For example, consider the
following code segment.

.. code-block:: java

   ClimbingClub hikerClub = new ClimbingClub();
   hikerClub.addClimb("Monadnock", 274);
   hikerClub.addClimb("Whiteface", 301);
   hikerClub.addClimb("Algonquin", 225);
   hikerClub.addClimb("Monadnock", 344);
   
When the code segment has completed execution, the instance variable climbList would contain the
following entries in either of the orders shown below.

.. image:: Figures/climbClubB.png
   :alt: Picture of the list after the above code executes
   :align: center
   :width: 500
   
Walk Through the Example
--------------------------

#. First you will create a new ``ClimbInfo`` object with a ``peakName`` of Monadnock and a climbTime of 274 and insert it in the empty ``climbList``.
#. Next you will create a new ``ClimbInfo`` object with a ``peakName`` of Whiteface and a climbTime of 301.  You will compare the peakName of Whiteface to Monadnock and since it is greater you will try to continue but you will have reached the end of the ``climbList`` so you will insert it there.
#. Next you will create a new ``ClimbInfo`` object with a ``peakName`` of Algonquin and a climbTime of 225.  You will compare Algonquin to Monadnock and since Algonquin is less than Monadnock you will insert it at position 0.
#. Next you will create a new ``ClimbInfo`` object with a ``peakName`` of Monadnock and a climbTime of 334. You will compare Monadnock to Algonquin and since it is greater you will continue.  You will next check Monadnock to Monadnock and since they are equal you can insert it there.  
   
Algorithm
-----------

Loop through the elements of ``climbList`` until you find the index where the new peakName is less than the peakName of the ``ClimbInfo`` object at the current index.  Insert the new ``ClimbInfo`` object there.  

How To Solve This
-------------------

#. How will you find the correct place to add it in the list?  You will need to loop through the ``climbList`` and find the first place that the new ``peakName`` is less than the current list element's ``peakName``.   What type of loop should you use?
#. You have to watch out for the case when the new peakName is greater than anything else in the list or the list is empty.
#. Once you find the right place to add the new object how can you add it at that location?  What method of the ``ArrayList`` class lets you add an object at a particular location in a list?
#. How can you tell if one string is less than or equal to another?  
#. How can you get the peakName from the next ``ClimbInfo`` object?  
#. In the ``addClimb`` method you need to create a new ``ClimbInfo`` object and initialize the ``peakName`` and ``climbTime``.  How do you create a new object of a class and initialize the fields?

Try and Solve It
-------------------
   
Complete the method ``addClimb`` in the ``ClimbingClub`` class in the code below.  It should create a new ``ClimbInfo`` object and insert it in alphabetical order by ``peakName`` in the ``climbList``.  The code includes a ``main`` method that will test the ``addClimb`` method.


   
.. activecode:: ClimbClubB
   :language: java
   
   import java.util.List;
   import java.util.ArrayList;
   
   class ClimbInfo 
   { 
      private String name;
      private int time;
  
      /** Creates a ClimbInfo object with name peakName and time climbTime. 
        * 
        * @param peakName the name of the mountain peak 
        * @param climbTime the number of minutes taken to complete the climb */ 
      public ClimbInfo(String peakName, int climbTime) 
      { 
         name = peakName;
         time = climbTime;
      }
  
      /** @return the name of the mountain peak */ 
      public String getName() 
      {
         return name;
      }
  
      /** @return the number of minutes taken to complete the climb */ 
      public int getTime() 
      {
         return time;
      }
  
      public String toString()
      {
         return "Peak name: " + name + " time: " + time;
      }
   }
   
   public class ClimbingClub 
   { 
      /** The list of climbs completed by members of the club. 
        *  Guaranteed not to be null. Contains only non-null references. 
        */ 
      private List<ClimbInfo> climbList; 
  
      /** Creates a new ClimbingClub object. */ 
      public ClimbingClub() 
      { 
         climbList = new ArrayList<ClimbInfo>(); 
      } 
  
      /** Adds a new climb with name peakName and time climbTime 
        * to the list of climbs in order by name
        * @param peakName the name of the mountain peak climbed 
        * @param climbTime the number of minutes taken to complete the climb 
        */  
      public void addClimb(String peakName, int climbTime) 
      { 
     
      } 
  
      public String toString()
      {
         String output ="";
         for (ClimbInfo info : climbList)
         {
            output = output + info.toString() + "\n";
         }
         return output;
      }
  
      public static void main(String[] args)
      {
         ClimbingClub hikerClub = new ClimbingClub();
         hikerClub.addClimb("Monadnock", 274); 
         hikerClub.addClimb("Whiteface", 301); 
         hikerClub.addClimb("Algonquin", 225); 
         hikerClub.addClimb("Monadnock", 344);
         System.out.print(hikerClub);  
         System.out.println("The order printed above should be Algonquin, Monadnock, Monadnock, Whiteface");
      }

   }
        

    
Video - One way to code the solution
-------------------------------------

There are many possible solutions to this problem.  The video below shows one solution.

.. the video is 2012Q1B.mov

The following video is also on YouTube at https://youtu.be/Fye33yPQk-g.  It walks through coding a solution.

.. youtube:: Fye33yPQk-g
    :width: 800
    :align: center


   
