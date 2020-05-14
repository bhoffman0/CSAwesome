.. qnum::
   :prefix: 8-15-
   :start: 1

Free Response - Climbing Club A
================================

..	index::
	single: ClimbingClub
    single: free response
    
The following is part a of a free response question from 2012.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.  

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

**Part a.**  Write an implementation of the ``ClimbingClub`` method ``addClimb`` that stores the ``ClimbInfo``
objects in the order they were added. This implementation of ``addClimb`` should create a new
``ClimbInfo`` object with the given name and time. It appends a reference to that object to the end of
climbList. For example, consider the following code segment.

.. code-block:: java

   ClimbingClub hikerClub = new ClimbingClub();
   hikerClub.addClimb("Monadnock", 274);
   hikerClub.addClimb("Whiteface", 301);
   hikerClub.addClimb("Algonquin", 225);
   hikerClub.addClimb("Monadnock", 344);
   
When the code segment has completed executing, the instance variable ``climbList`` would contain the
following entries.

.. image:: Figures/climbClubA.png
   :alt: Picture of the list after the above code executes
   :align: center
   :width: 500
   
How To Solve This
-------------------

In the ``addClimb`` method you need to create a new ``ClimbInfo`` object and initialize the ``peakName`` and ``climbTime``.  How do you create a new object of a class and initialize the fields?

Once you have created the ``ClimbInfo`` object you want to add it in the order they were created.  To do this you can add it to the end of the ``climbList``.  How do you add an object to the end of a list?

.. .. disqus::
   :shortname: cslearn4u
   :identifier: apcsa-climbClubAFRQ

Try and Solve It
-------------------
   
Complete the method ``addClimb`` in the ``ClimbingClub`` class in the code below.  The code includes a ``main`` method that will test the ``addClimb`` method.

.. activecode:: ClimbClubA
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
       * * Guaranteed not to be null. Contains only non-null references. 
       */ 
     private List<ClimbInfo> climbList; 
  
     /** Creates a new ClimbingClub object. */ 
     public ClimbingClub() 
     { 
        climbList = new ArrayList<ClimbInfo>(); 
     } 
  
     /** Adds a new climb with name peakName and time climbTime to the end of the list of climbs  
      * 
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
       // test a 
       ClimbingClub hikerClub = new ClimbingClub(); 
       hikerClub.addClimb("Monadnock", 274); 
       hikerClub.addClimb("Whiteface", 301); 
       hikerClub.addClimb("Algonquin", 225); 
       hikerClub.addClimb("Monadnock", 344);
       System.out.print(hikerClub);
       System.out.println("The order printed above should be Monadnock, Whiteface, Algonquin, Monadnock");
     }

   }
    
Video - One way to code the solution
-------------------------------------

There are many possible solutions to this problem.  The video below shows one solution.

.. the video is 2012Q1A.mov

The following video is also on YouTube at https://youtu.be/dAbU9_Qn92I.  It walks through coding a solution.

.. youtube:: dAbU9_Qn92I
    :width: 800
    :align: center

   
