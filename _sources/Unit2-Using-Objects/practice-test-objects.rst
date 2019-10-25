.. qnum::
   :prefix: 2-13-
   :start: 1
   
Practice Test for Objects (2.1-2.5)
===================================

The following 10 questions are similar to what you might see on the AP CS A exam for Units 2.1-2.5.  You may only take this practice test once while logged in. There are no time limits, but it will keep track of how much time you take. Click on the finish button after you have answered all the questions, and the number correct and feedback on the answers will be displayed. 

We estimate that a score of about 50% on this test would correspond to the passing grade of 3 on the AP exam, a score of 65% to a 4, and a score of 80% and above to a 5 on the AP exam. These are just estimates and may not correspond to individual scores.

.. highlight:: java
   :linenothreshold: 3


.. timed:: practice-exam-2a

    .. mchoice:: AP2-1-3
       :practice: T
       :random:
       :answer_a: An attribute of boilingPoint object is double.
       :answer_b: An instance of the liquid1 class is Liquid.
       :answer_c: An attribute of the liquid1 object is freezingPoint.
       :answer_d: An instance of a Liquid object is hasFrozen.
       :answer_e: An attribute of freezingPoint is liquid1.
       :correct: c
       :feedback_a: double is a data type, not an attribute.
       :feedback_b: The classname is Liquid and the object instance is liquid1.
       :feedback_c: Correct!
       :feedback_d: The classname is Liquid and the object instance is liquid1.
       :feedback_e: An attribute of liquid1 is freezingPoint.

        A student has created a Liquid class. The class contains variables to represent the following.
        - A double variable called boilingPoint to represent the boiling point of the liquid.
        - A double variable called freezingPoint to represent at what temperature the liquid will freeze.
        - A boolean variable called hasFrozen to indicate whether the liquid is now frozen.

        The object liquid1 will be declared as type Liquid.
        Which of the following statements is accurate?


    .. mchoice:: AP2-1-4
       :practice: T
       :random:
       :answer_a: painting1 is an instance of three String objects.
       :answer_b: artist, title, and gallery are instances of the Artwork class.
       :answer_c: Artwork is an instance of the painting1 object.
       :answer_d: painting1 is an instance of the Artwork class.
       :answer_e: Artwork is an instance of three String objects.
       :correct: d
       :feedback_a: The String variables are attributes of painting1. 
       :feedback_b: These are attributes.
       :feedback_c: painting1 is an instance of Artwork.
       :feedback_d: Correct!
       :feedback_e: Artwork is the class name.

        A student has created an Artwork class. The class contains the following variables.
        - A String variable called artist to represent the artist’s name
        - A String variable called title to represent the artwork’s title
        - A String variable called gallery to represent the gallery title

        The object painting1 will be declared as type Artwork.
        Which of the following statements is true?


    .. mchoice:: AP2-2-3
       :practice: T
       :random:
       :answer_a: I only 
       :answer_b: I and II
       :answer_c: II only
       :answer_d: II and III
       :answer_e: I, II, and III
       :correct: c
       :feedback_a: I needs to initialize the object variable with a call to new Party().   
       :feedback_b: I needs to initialize the object variable with a call to new Party(). 
       :feedback_c: Correct!
       :feedback_d: III calls the Party constructor with a double parameter instead of an int.
       :feedback_e: I needs to initialize the object and III needs to use an int instead of a double as the parameter for the constructor.

        Which of the following code segments correctly creates an instance of a new Party object? 

        .. code-block:: java 

            public class Party
            {
                private int numInvited;
                private boolean partyCancelled;

                public Party()
                {
                    numInvited = 1;
                    partyCancelled = false;
                }

                public Party(int invites)
                {
                    numInvited = invites;
                    partyCancelled = false;
                }
            }
            I.   Party myParty;
            II.  int classSize = 20;
                 Party ourParty = new Party(classSize);
            III. int numOfFriends = 6;
                 Party yourParty = new Party(numOfFriends + 3.0);


    .. mchoice:: AP2-2-4
       :practice: T
       :answer_a: Liquid l = new Liquid(98.6);
       :answer_b: new Liquid l = 98.6;
       :answer_c: Liquid l = new Liquid();
       :answer_d: Liquid l = 98.6;
       :answer_e: Liquid l = Liquid(98.6);
       :correct: a
       :feedback_a: Correct 
       :feedback_b: new is incorrectly placed.
       :feedback_c: This creates an object but it does not set its boiling point to 98.6.
       :feedback_d: The call to the constructor is missing.
       :feedback_e: The keyword new is missing.

        Consider the following class. Which of the following code segments, when placed in a method in a class other than Liquid, will construct a Liquid object l with a boilingPoint of 98.6 ?

        .. code-block:: java 

            public class Liquid
            {
                private double boilingPoint;
                private double freezingPoint;

                public Liquid()
                {
                    boilingPoint = 0.0;
                }

                public Liquid(double b)
                {
                    boilingPoint = b;
                }
            }




    .. mchoice:: AP2-3-3
       :practice: T
       :random:
       :answer_a: liquid.freeze(80);
       :answer_b: liquid.freeze();
       :answer_c: liquid.increaseTemp();
       :answer_d: liquidfreeze();
       :answer_e: liquid.freeze;
       :correct: b
       :feedback_a: Method freeze() does not have parameters.
       :feedback_b: Correct
       :feedback_c: There is no method increaseTemp() in the Liquid class definition. 
       :feedback_d: The dot operator is required between the object name and the method name.
       :feedback_e: Parentheses are required after a method name.

        Consider the following class. Assume that the Liquid object liquid has been properly declared and initialized in a method in a class other than Liquid.  Which of the following statements are valid? 

        .. code-block:: java 

            public class Liquid
            {
              private double boilingPoint;
              private double freezingPoint;
              private double currentTemp;

              public Liquid(double b)
              {
                boilingPoint = b;
              }

              void lowerTemp()
              {
                currentTemp -= 10;
              }

              void raiseTemp()
              {
                currentTemp += 10;
              }

              void freeze()
              {
                currentTemp = freezingPoint;
              }
            }


    .. mchoice:: AP2-3-4
        :practice: T
        :random:

        Consider the following class definition.

        .. code-block:: java 

            public class Dog
            {
                public void bark()
                {
                    System.out.print("Woof ");
                }

                public void wag()
                {
                    System.out.print("Wag Tail ");
                }

                public void happy()
                {
                    wag();
                    bark();
                }
                /* Constructors not shown */
            }

        Which of the following code segments, if located in a method in a class other than Dog, will cause the message "Wag Tail Wag Tail Woof " to be printed?

        - .. code-block:: java

            Dog a = new Dog();
            a.bark();
            a.wag();

          - This would print "Woof Wag Tail "

        - .. code-block:: java

            Dog a = new Dog();
            Dog.happy();

          - You must use the object a, not the class name Dog, to call its methods.

        - .. code-block:: java

            Dog a = new Dog();
            a.happy();

          - This would print out "Wag Tail Woof ". 

        - .. code-block:: java

            Dog a = new Dog();
            a.wag(); 
            a.happy();

          + This would print out "Wag Tail Wag Tail Woof ";

        - .. code-block:: java

             Dog a = new Dog();
             a.wag();

          - This would just print "Wag Tail ".


    .. mchoice:: AP2-4-3
        :practice: T
        :random:

        Consider the following methods, which appear in the same class.

        .. code-block:: java

            public void celsiusToFahrenheit(double cTemp)
            {
                double fTemp = (cTemp * 9)/5 + 32;
                printTemperature(cTemp, fTemp);
            }

            public void printTemperature(double celsius, double fahrenheit)
            {
                System.out.print(celsius + "-->" + fahrenheit);
            }

        Assume that the method call ``celsiusToFahrenheit(5)`` appears in a method in the same class. What is printed as a result of the method call?

        - 5.0 --> 77.0

          - (5 * 9)/5 + 32 = 41

        - 41 --> 5

          - Notice the order of parameters in printTemperature.

        - celsius --> fahrenheit 

          - These are variables and their values would be printed.

        - 5 --> 33.8

          - (5 * 9)/5 + 32 = 41

        - 5.0 --> 41.0

          + Correct! (5 * 9)/5 + 32 = 41 and doubles print out with .0 at the end.

    .. mchoice:: AP2-4-4
        :practice: T
        :random:

        Consider the following methods, which appear in the same class.

        .. code-block:: java

            public void calculatePizzaOrder(int numOfPeople, double slicesPerPerson)
            {
                int numOfPizzas = (numOfPeople * slicesPerPerson)/8;
                /* INSERT CODE HERE */
            }

            public void printOrder(int number)
            {
                System.out.println("Order " + number + " pizzas ");
            }

        What of the following lines would go into ``/* INSERT CODE HERE */`` in line 4 in order to call the ``printOrder`` method to print the number of pizzas to order correctly? 

        - printOrder(numOfPizzas);

          + Correct! If you had 8 people who want to eat 2 pizza slices each, numOfPizzas would be 8*2/8 = 2 pizzas, and printOrder would print out "Order 2 pizzas".

        - printOrder(numOfPeople);

          - This would always print out an order of how many people you have instead of how many calculated pizzas. 

        - printOrder(2);

          - This would always print out "Order 2 pizzas" instead of the calculated number of pizzas.

        - printOrder(slicesPerPerson);

          - This would always print out an order of how many slices per person instead of how many calculated pizzas. 

        - calculatePizzaOrder(numOfPizzas);

          - This would not call the printOrder method.

    .. mchoice:: AP2-5-3
        :practice: T
        :random:

        Consider the following method in the Movie class.

        .. code-block:: java

            public double calculateMovieRating(int numOfPeople, double rating)
            { /*implementation not shown */}

        Which of the following lines of code, if located in a method in the same class as calculateMovieRating, will compile without an error?

        - int result = calculateMovieRating(234, null);

          - The method returns a double which cannot be saved in an int variable. 

        - double result = calculateMovieRating(100.0, 3.0);

          - The first parameter must be an int.

        - int result = calculateMovieRating(455, false); 

          - The method returns a double which cannot be saved in an int variable.

        - double result = calculateMovieRating(10, 4.0);

          + Correct.

        - double result = calculateMovieRating(10);

          - The method has 2 parameters.


    .. mchoice:: AP2-5-4
        :practice: T
        :random:
        :answer_a: int x = oneThing(2, 10) + anotherThing(5, 2);
        :answer_b: int x = oneThing(10, 2) + anotherThing(2, 5);
        :answer_c: int x = oneThing(2, 10) + anotherThing(3, 2);
        :answer_d: int x = oneThing(6, 3) + anotherThing(2, 10);
        :answer_e: int x = oneThing(0, 2) + anotherThing(20, 1);
        :correct: a
        :feedback_a: oneThing(2,10) returns 2*10 = 20 and anotherThing(5,2) returns 5/2 = 2.5 truncated to 2 with integer division, which adds up to 22.
        :feedback_b: This would return 20 + 0 (which is 0.4 truncated) = 20.
        :feedback_c: This would return 20 + 1 (which is 1.5 truncated) = 21. 
        :feedback_d: This would return 18 + 0 = 18.
        :feedback_e: This would return (0 * 2 = 0) + (20/1 = 20) = 20.

        Consider the following methods, which appear in the same class.

        .. code-block:: java

            public int oneThing(int i, int j)
            {
                return i * j;
            }

            public int anotherThing(int i, int j)
            {
                return i / j;
            }

        Which of the following statements, if located in a method in the same class, will initialize the variable x to 22?
