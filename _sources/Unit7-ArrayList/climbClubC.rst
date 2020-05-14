.. qnum::
   :prefix: 8-17-
   :start: 1

Free Response - Climbing Club C
================================

..	index::
	single: ClimbingClub
    single: free response
    
The following is part c of a free response question from 2012.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.  

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

**Part c.**  The ``ClimbingClub`` method ``distinctPeakNames`` is intended to return the number of different
names in ``climbList``. For example, after the following code segment has completed execution, the value
of the variable ``numNames`` would be 3.

.. code-block:: java

   ClimbingClub hikerClub = new ClimbingClub();
   hikerClub.addClimb("Monadnock", 274);
   hikerClub.addClimb("Whiteface", 301);
   hikerClub.addClimb("Algonquin", 225);
   hikerClub.addClimb("Monadnock", 344);
   
Consider the following implementation of method distinctPeakNames.

.. code-block:: java

   /** @return the number of distinct names in the list of climbs */
   public int distinctPeakNames()
   {
      if (climbList.size() == 0)
      {
         return 0;
      }
      
      ClimbInfo currInfo = climbList.get(0);
      String prevName = currInfo.getName();
      String currName = null;
      int numNames = 1;
      for (int k = 1; k < climbList.size(); k++)
      {
         currInfo = climbList.get(k);
         currName = currInfo.getName();
         if (prevName.compareTo(currName) != 0)
         {
            numNames++;
            prevName = currName;
         }
      }
     return numNames;
   }
   
.. mchoice:: frqccc_1
   :answer_a: yes
   :answer_b: no
   :correct: b
   :feedback_a: Did you trace it to see what it would do?
   :feedback_b: This code depends on the peakNames being in alphabetical order by peakName.    

   Does this implementation of the ``distinctPeakNames`` method work as intended when the ``addClimb`` method stores the ``ClimbInfo`` objects in the order they were added as described in part (a)?

.. mchoice:: frqccc_2
   :answer_a: yes
   :answer_b: no
   :correct: a
   :feedback_a: This code depends on the peakNames being in alphabetical order by peakName.
   :feedback_b: Did you trace it to see what it would do?   

   Does this implementation of the ``distinctPeakNames`` method work as intended when the ``addClimb`` method stores the ``ClimbInfo`` objects in alphabetical order by name as described in part (b)?

Try it Out
------------

   
.. activecode:: ClimbClubC
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
  
      /** Adds a new climb with name peakName and time climbTime to the end of the list of climbs  
        * 
        * @param peakName the name of the mountain peak climbed 
        * @param climbTime the number of minutes taken to complete the climb 
        */   
      public void addClimbA(String peakName, int climbTime) 
      { 
         climbList.add(new ClimbInfo(peakName, climbTime));
      }
      
      /** Adds a new climb with name peakName and time climbTime to the list of climbs in order by name
        * 
        * @param peakName the name of the mountain peak climbed 
        * @param climbTime the number of minutes taken to complete the climb 
        */ 
      public void addClimbB(String peakName, int climbTime) 
      { 
         // find the position for the new item
         int index = 0;
         while (index < climbList.size() && climbList.get(index).getName().compareTo(peakName) <= 0)
         {
            index++;
         }
         climbList.add(index, new ClimbInfo(peakName, climbTime));
      } 
      
      /** @return the number of distinct names in the list of climbs */
      public int distinctPeakNames()
      {
         if (climbList.size() == 0)
         {
            return 0;
         }
      
         ClimbInfo currInfo = climbList.get(0);
         String prevName = currInfo.getName();
         String currName = null;
         int numNames = 1;
         for (int k = 1; k < climbList.size(); k++)
         {
            currInfo = climbList.get(k);
            currName = currInfo.getName();
            if (prevName.compareTo(currName) != 0)
            {
               numNames++;
               prevName = currName;
            }
         }
         return numNames;
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
         hikerClub.addClimbA("Monadnock", 274); 
         hikerClub.addClimbA("Whiteface", 301); 
         hikerClub.addClimbA("Algonquin", 225); 
         hikerClub.addClimbA("Monadnock", 344);
         System.out.print(hikerClub);  
         System.out.println("The order printed above should be Monadnock, Whiteface, Algonquin, Monadnock");
         System.out.println("Distinct peaks is " + hikerClub.distinctPeakNames() + " and should be " + 3);
         
         hikerClub = new ClimbingClub();
         hikerClub.addClimbB("Monadnock", 274); 
         hikerClub.addClimbB("Whiteface", 301); 
         hikerClub.addClimbB("Algonquin", 225); 
         hikerClub.addClimbB("Monadnock", 344);
         System.out.print(hikerClub);  
         System.out.println("The order printed above should be Algonquin, Monadnock, Monadnock, Whiteface");
         System.out.println("Distinct peaks is " + hikerClub.distinctPeakNames() + " and should be " + 3);
      }

   }
        

    
