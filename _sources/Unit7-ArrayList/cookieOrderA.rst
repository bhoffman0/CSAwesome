.. qnum::
   :prefix:  8-18-
   :start: 1

Free Response - CookieOrder A
=============================

..	index::
	single: cookieorder
    single: free response

The following is a free response question from 2010.  It was question 1 on the exam.  You can see all the free response questions from past exams at https://apstudents.collegeboard.org/courses/ap-computer-science-a/free-response-questions-by-year.

**Question 1.**  An organization raises money by selling boxes of cookies. A cookie order specifies the variety of cookie and the number of boxes ordered. The declaration of the ``CookieOrder`` class is shown below.

.. code-block:: java

   public class CookieOrder
   {
    /** Constructs a new CookieOrder object */
    public CookieOrder(String variety, int numBoxes)
    { /* implementation not shown */ }

    /** @return the variety of cookie being ordered
    */
    public String getVariety()
    { /* implementation not shown */ }

    /** @return the number of boxes being ordered
    */
    public int getNumBoxes()
    { /* implementation not shown */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

The ``MasterOrder`` class maintains a list of the cookies to be purchased. The declaration of the ``MasterOrder`` class is shown below.

.. code-block:: java

   public class MasterOrder
   {
    /** The list of all cookie orders */
    private List<CookieOrder> orders;

    /** Constructs a new MasterOrder object */
    public MasterOrder()
    { orders = new ArrayList<CookieOrder>(); }

    /** Adds theOrder to the master order.
    *   @param theOrder the cookie order to add to the master order
    */
    public void addOrder(CookieOrder theOrder)
    { orders.add(theOrder); }

    /** @return the sum of the number of boxes of all of the cookie orders
    */
    public int getTotalBoxes()
    { /* to be implemented in part (a) */ }

    // There may be instance variables, constructors, and methods that are not shown.
   }

**Part a.**
The ``getTotalBoxes`` method computes and returns the sum of the number of boxes of all cookie orders. If there are no cookie orders in the master order, the method returns 0.

How to Solve This
--------------------
1. You will need to loop through each Cookie Order, since there are more than one. What type of loop will you use?
2. How will you continuously count the amount of boxes? You will need a variable to hold that data.
3. The method has a return type; what will you return?

The Algorithm
-------------------
.. parsonsprob:: CookieOrderA
   :numbered: left
   :adaptive:

   The method getTotalBoxes below contains the correct code for one solution to this problem, but it is mixed up.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.
   -----
   public int getTotalBoxes() {

   =====
       int sum = 0;
   =====
       for (CookieOrder co : this.orders) {
   =====
           sum += co.getNumBoxes();
   =====
       } // end for
   =====
       return sum;
   =====
   } // end method


Solve Part A
------------

Complete the method ``getTotalBoxes`` below.

.. activecode:: FRQCookieOrderA
   :language: java

   import java.util.List;
   import java.util.ArrayList;

   class CookieOrder
   {
    private int numBoxes;
    private String variety;

    /** Constructs a new CookieOrder object */
    public CookieOrder(String variety, int numBoxes)
    {
      this.variety = variety;
      this.numBoxes = numBoxes;
    }

    /** @return the variety of cookie being ordered
    */
    public String getVariety()
    { return this.variety; }

    /** @return the number of boxes being ordered
    */
    public int getNumBoxes()
    { return this.numBoxes; }

    // There may be instance variables, constructors, and methods that are not shown.
   }

   public class MasterOrder
   {
    /** The list of all cookie orders */
    private List<CookieOrder> orders;

    /** Constructs a new MasterOrder object */
    public MasterOrder()
    { orders = new ArrayList<CookieOrder>(); }

    /** Adds theOrder to the master order.
    *   @param theOrder the cookie order to add to the master order
    */
    public void addOrder(CookieOrder theOrder)
    { orders.add(theOrder); }

    /** @return the sum of the number of boxes of all of the cookie orders
    */
    public int getTotalBoxes(){
      // Complete this method
    }

    public static void main(String[] args){
      boolean test1 = false;
      boolean test2 = false;

      MasterOrder order = new MasterOrder();

      if(order.getTotalBoxes() == 0)
        test1 = true;
      else
        System.out.println("Oops! Looks like your code doesn't properly check to see if the master order is empty.\n");


      order.addOrder(new CookieOrder("Raisin", 3));
      order.addOrder(new CookieOrder("Oatmeal", 8));

      if(order.getTotalBoxes() == 11)
        test2 = true;
      else
        System.out.println("Oops! Looks like your code doesn't properly count the number of boxes in the master order.\n");

      if(test1 && test2)
        System.out.println("Looks like your code works well!");
      else
        System.out.println("Make some changes to your code, please.");
    }
   }
