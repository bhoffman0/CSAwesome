.. qnum::
   :prefix:  16-5-
   :start: 1

StudentAnswerSheet - Part A
===============================

..	index::
	single: StudentAnswerSheet
    single: free response

The following is a free response question from 2007.  It was question 3 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 3.** Consider a system for processing student test scores.  The following class will be used as part of this system and contains a student's name
and the student's answers for a multiple-choice test. The answers are represented as strings of length one with an omitted answer being represented by a string containing a single question mark (``"?"``). 
These answers are stored in an ``ArrayList`` in which the position of the answer corresponds to the question number on the test (question numbers start at 0).  
A student's score on the test is computed by comparing the student's answers with the corresponding answers in the answer key for the test.
One point is awarded for each correct answer and 1/4 of a point is deducted for each incorrect answer.  Omitted answers (indicated by ``"?"``) do not change the student's score.

.. code-block:: java

   public class StudentAnswerSheet
   {
       
       private List<String> answers; 
       
       /** @param key the list of correct answers, represented as strings 
        *         of length one
        *  Precondition: key.size() is equal to the number of answers in 
        *         this answer sheet
        *  @return this student's test score
       public double getScore(List<String> key)
       {
         /* to be implemented in part (a) */ 
       }
       
       /** @return the name of the student
        */
       public String getName()
       {
          /* implementation not shown */ 
       }
       
       // There may be other fields, constructors, and methods
       
   }
   
The following table shows an example of an answer key, a student's answers, and the corresponding point values
that would be awarded for the student's answers.  In this example, there are six correct answers, three incorrect
answers, and one omitted answer.  The student's score is ((6 * 1) - (3 * 0.25)) = 5.25.

.. figure:: Figures/StudentAnswerSheetEx.png
    :align: center
    :figclass: align-center

    Figure 1: The answer key and student answers and point values

**Part a.**  Write the ``StudentAnswerSheet`` method ``getScore``.  The parameter passed to method ``getScore``
is a ``List`` of strings representing the correct answer key for the test being scored.  The method 
computes and returns a ``double`` that represents the score for the student's test answers when compared
with the answer key.  One point is awarded for each correct answer and 1/4 of a point is deducted for each 
incorrect answer.  Omitted answers (indicated by ``"?"``) do not change the student's score.


Try and Solve It
----------------

Complete method ``getScore`` below.

The code below has a main method for testing the ``getScore`` method.

.. activecode:: StudentAnswerKeyA
   :language: java

   import java.util.ArrayList;
   import java.util.List;
   import java.util.Arrays;

   public class StudentAnswerSheet
   {
      private List<String> answers;  // the list of the student's answers
      private String name;

      public StudentAnswerSheet(String nm, List<String> ans)
      {
        name = nm;
        answers = new ArrayList<String>();
        for (String a : ans)
          answers.add(a);
      }

      /** @param key the list of correct answers, represented as strings of length one
       *         Precondition: key.size() is equal to the number of answers in this answer sheet
       *  @return this student's test score
       */
      public double getScore(ArrayList<String> key)
      {
        //*** Write this method! ***
      }

      /** @return the name of the student
       */
      public String getName()
      {
        return name;
      }
      
      public static void main(String[] args)
      {
         ArrayList<String> key = new ArrayList<String>(Arrays.asList(
                                 new String[] {"A", "C", "D", "E", "B", "C", "E", "B", "B", "C"}));

         ArrayList<String> answers1 = new ArrayList<String>(Arrays.asList(
                                      new String[] {"A", "B", "D", "E", "A", "C", "?", "B", "D", "C"}));
         StudentAnswerSheet s1 = new StudentAnswerSheet("S1", answers1);
         System.out.println("Your score for s1 is: " + s1.getScore(key) + " and should be 5.25");

         ArrayList<String> answers2 = new ArrayList<String>(Arrays.asList(
                                      new String[] {"A", "?", "D", "E", "A", "C", "?", "B", "D", "C"}));
         StudentAnswerSheet s2 = new StudentAnswerSheet("S2", answers2);
         System.out.println("Your score for s2 is: " + s2.getScore(key) + " and should be 5.5");
         
         ArrayList<String> answers3 = new ArrayList<String>(Arrays.asList(
              new String[] {"A", "?", "D", "E", "A", "C", "E", "B", "D", "C"}));
         StudentAnswerSheet s3 = new StudentAnswerSheet("S3", answers3);
         System.out.println("Your score for s3 is: " + s3.getScore(key) + " and should be 6.5");
         
         ArrayList<String> answers4 = new ArrayList<String>(Arrays.asList(
              new String[] {"A", "C", "D", "E", "A", "C", "E", "B", "D", "C"}));
         StudentAnswerSheet s4 = new StudentAnswerSheet("S4", answers4);
         System.out.println("Your score for s4 is: " + s4.getScore(key) + " and should be 7.5");

      }
   }