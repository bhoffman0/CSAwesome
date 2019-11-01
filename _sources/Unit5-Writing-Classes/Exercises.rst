.. qnum::
   :prefix: 5-12-
   :start: 1
   
Exercises
=========


.. mchoice:: AP5-1-3
    :practice: T

    The Liquid class will contain two double attributes for a liquid’s boiling point temperature and freezing point temperature. The class will also contain a constructor.
    
    .. code-block:: java

        public class Liquid
        {
           /* missing code */
        }
        Which of the following replacements for /* missing code */ is the most appropriate 
        implementation of the class?
        
    - .. code-block:: java
    
        private double boilingPoint;
        private double freezingPoint;
        public Liquid(double boilingPoint, double freezingPoint)
        { /* implementation not shown */ }

      + Correct! The instance variables should be private and the constructor and methods should be public.
      
    - .. code-block:: java
    
        private double boilingPoint;
        private double freezingPoint;
        private Liquid(double boilingPoint, double freezingPoint)
        { /* implementation not shown */ }

      - Constructors should be public.
     
    - .. code-block:: java
    
        private double boilingPoint;
        public double freezingPoint;
        private Liquid(double freezingPoint, double boilingPoint)
        { /* implementation not shown */ }

      - The instance variables should be private and the constructor and methods should be public.
     
    - .. code-block:: java
     
        public double boilingPoint;
        public double freezingPoint;
        private Liquid(double boilingPoint, double freezingPoint)
        { /* implementation not shown */ }

      - The instance variables should be private and the constructor and methods should be public.
      
    - .. code-block:: java
      
          public double freezingPoint;
          public double boilingPoint;
          public Liquid(double freezingPoint, double boilingPoint)
          { /* implementation not shown */ }

      - The instance variables should be private.

.. mchoice:: AP5-1-4
    :practice: T
    :random:

    The Cat class below will contain two String attributes and one int attribute for name, color, and age; a constructor; and an adoptCat method. The adoptCat method is intended to be accessed outside the class.
    
    .. code-block:: java

        public class Cat
        {
          /* missing code */
        }
        Which of the following replacements for /* missing code */ is the most appropriate 
        implementation of the class?
        
    - .. code-block:: java
    
        private String name;
        private String color;
        private int age;
        public Cat()
        { /* implementation not shown */ }
        private void adoptCat(String n, String c, int a)
        { /* implementation not shown */ }

      - Method adoptCat() should be public.
      
    - .. code-block:: java
    
        public String name;
        public String color;
        public int age;
        private Cat()
        { /* implementation not shown */ }
        private void adoptCat(String n, String c, int a)
        { /* implementation not shown */ }

      - Method and constructor should be public, and instance variables should be private.
        
    - .. code-block:: java
        
        private String name;
        private String color;
        private int age;
        public Cat()
        { /* implementation not shown */ }
        public void adoptCat(String n, String c, int a)
        { /* implementation not shown */ }

      + Correct! Method and constructor should be public, and instance variables should be private.
        
    - .. code-block:: java
    
        public String name;
        public String color;
        public int age;
        public Cat()
        { /* implementation not shown */ }
        public void adoptCat(String n, String c, int a)
        { /* implementation not shown */ }

      - Instance variables should be private.
    
    - .. code-block:: java
    
        public String name;
        public String color;
        public int age;
        private Cat()
        { /* implementation not shown */ }
        public void adoptCat(String n, String c, int a)
        { /* implementation not shown */ }

      - Instance variables should be private, and the constructor should be public.
      
.. mchoice:: AP5-2-4
    :practice: T
    :random:

    Consider the definition of the Party class below. The class uses the instance variable numOfPeople to indicate how many people are at the party.
    
    .. code-block:: java

        public class Party
        {
            private int numOfPeople;
            private String partyHost;
            
            public Party (String name, int people)
            {
                partyHost = name;
                numOfPeople = people;
            }
        }

        Which of the following statements will create a Party object
        that represents a party that has three people at it?
        
    - Party p = new Party ("Natasha", "3");

      - An int should be passed in as the second parameter, not a String.
      
    - Party p = new Party ("Eduardo", 3);

      + Correct
    
    - Party p = new Party ("Emillio", "three");

      - An int should be passed in as the second parameter, not a string.
      
    - Party p = new Party ("Bob", three);

      - The word three would be treated as an undeclared variable here.
      
    - Party p = new Party ("Billie", "2+1");

      - Strings cannot perform addition.

.. mchoice:: AP5-2-5
   :practice: T
   :random:
   :answer_a: I only
   :answer_b: I and II 
   :answer_c: I and III
   :answer_d: I, II, and III
   :answer_e: II and III
   :correct: d
   :feedback_a: II and III can also create a correct Party instance
   :feedback_b: III can also create a correct Party instance
   :feedback_c: II can also create a correct Party instance
   :feedback_d: I, II, and III can successfully create the Party instance.
   :feedback_e: I can also create a correct Party instance

   Consider the following class definition. Each object of the class Party will store the party host’s name as partyHost, the number of people as numOfPeople, and the capacity that the event can hold as capacity. Which of the following code segments, found in a class other than Party, can be used to create a party hosted by Charlie without anyone there initially, but the place can hold 78 people ?
   
   .. code-block:: java

    public class Party
    {
        private String partyHost;
        private int numOfPeople;
        private int capacity;

        public Party(String name, int num, int cap)
        {
            partyHost = name;
            numOfPeople = num;
            capacity = cap;
        }
        public Party (String name, int cap)
        {
            partyHost = name;
            numOfPeople = 0;
            capacity = cap;
        }
        /* Other methods not shown */
    }

    I.   Party b = new Party("Charlie", 78);
    II.  Party b = new Party("Charlie", 0, 70+8);
    III. Party b = new Party("Charlie", 0, 78);

.. mchoice:: AP5-2-6
    :practice: T
    :random:

    Consider the following class definition.
    
    .. code-block:: java

        public class Party
        {
            private int numOfPeople;
            private double volumeOfMusic;
            /* missing constructor */
        }

    The following statement appears in a method in a class other than Party. It is intended to create a new Party object p with its attributes set to 10 and 5.0.
    
    .. code-block:: java

         Party p = new Party(10, 5.0);

         Which of the following can be used to replace /* missing constructor */ 
         so that the object m is correctly created?
     
    - .. code-block:: java
    
        public Party(int first, double second)
        {
            numOfPeople = 10;
            volumeOfMusic = 5.0;
        }

      - The constructor should be using the local variables to set the instance variables.

    - .. code-block:: java
    
        public Party(int first, double second)
        {
            numOfPeople = first;
            volumeOfMusic = second;
        }

      + Correct

    - .. code-block:: java
    
        public Party(int first, double second)
        {
            first = 10;
            second = 5.0;
        }

      - The constructor should be using the parameters to set the instance variables.

    - .. code-block:: java
    
        public Party(int first, double second)
        {
            first = numOfPeople;
            second = volumeOfMusic;
        }

      - The constructor should be changing the instance variables, not the local variables.
      
.. mchoice:: AP5-3-3
    :practice: T
    :random:

    Consider the following class definition that defines a Liquid class with a boilingPoint, a currentTemperature, and a freezingPoint. For example, Liquid water = new Liquid(100, 50, 0); defines a water object with a boiling point of 100, a current temperature of 50, and a freezing temperature of 0.

    .. code-block:: java

        public class Liquid
        {
            private int boilingPoint;
            private int currentTemp;
            private int freezingPoint;

            public Liquid(int bp, int ct, int fp)
            {
                boilingPoint = bp;
                currentTemp = ct;
                freezingPoint = fp;
            }
            /* Other methods not shown */
        }

    Which of the following preconditions is reasonable for the Liquid constructor? 
       
    - Precondition: fp \> 0 
    
      - Incorrect. The freezing point could be negative.
      
    - Precondition: currentTemp \> 0 
    
      - Incorrect. Unable to make this assumption for all liquids.
    
    - Precondition: fp < ct < bp 
    
      + Correct!
    
    - Precondition: fp > ct > bp 
      
      - Incorrect. This would again result in freezing point being > boiling point which is impossible.

.. mchoice:: AP5-4-4
   :practice: T
   :random:
   :answer_a: The getAge method should be declared as private.
   :answer_b: The return type of the getAge method should be void.
   :answer_c: The getAge method should have at least one parameter.
   :answer_d: The variable age is not declared inside the getAge method.
   :answer_e: The instance variable age should be returned instead of a, which is local to the constructor.
   :correct: e
   :feedback_a: The method should be public so it can be accessed outside of the class.
   :feedback_b: The method return type should stay as int.
   :feedback_c: The getAge should not take any parameters.
   :feedback_d: This is an instance variable and should be declared outside.
   :feedback_e: The accessor method getAge should return the instance variable age.

    Consider the following Cat class, with the cat’s age stored in the method’s int attribute. The getAge method is intended to allow methods in other classes to access a Cat object’s age value; however, it does not work as intended. Which of the following best explains why the getAge method does NOT work as intended?
    
    .. code-block:: java

        public class Cat
        {
            private int age;

            public Cat(int a)
            {
                age = a;
            }

            public int getAge()
            {
                return a;
            }
        }


.. mchoice:: AP5-4-3
   :practice: T
   :random:
   
   Consider the following Liquid class. The currentTemperature is stored in the method’s int attribute. The getCurrentTemp method is intended to allow methods in other classes to access a Liquid object’s currentTemperature value; however, it does not work as intended. Which of the following best explains why the getCurrentTemperature method does NOT work as intended?
   
   .. code-block:: java

        public class Liquid
        {
            private int currentTemperature;

            public Liquid(int ct)
            {
                currentTemperature = ct;
            }

            public void getCurrentTemperature()
            {
                return currentTemperature;
            }
        }

   - The getCurrentTemperature method should be declared as private.
    
     - Accessor methods should be public methods.
    
   - The return type of the getCurrentTemperature method should be int.
    
     + Correct! The return type should match the type of the variable being returned.

   - The getCurrentTemperature method should have at least one parameter.
    
     - Get methods do not need parameters.

   - The variable currentTemperature is not declared inside of the getCurrentTemperature method.
    
     - currentTemperature is an instance variable that is shared by all the methods in the class.

   - The instance variable ct should be returned instead of currentTemperature.
    
     - The getCurrentTemperature method does not have access to the ct variable which is the parameter for the constructor.
     

.. mchoice:: AP5-5-3
    :practice: T
    :random:

    Consider the following class definition.
    
    .. code-block:: java

        public class Liquid
        {
            private int currentTemp;

            public Liquid(int temp)
            {
                currentTemp = temp;
            }

            public int getTemp()
            {
              return currentTemp;
            }
            
            public void resetTemp(int new_temp)
            {
                currentTemp = new_temp;
            }
        }

    Consider the following code segment, which appears in a method in a class other than Liquid. The code segment does not compile.
    
    .. code-block:: java

        Liquid liq = new Liquid(50);
        System.out.println("The temperature of the liquid is " + liq.currentTemp);

    Which of the following best identifies the reason the code segment does not compile?
    
    - The Liquid class constructor should not have a parameter.
        
      - The constructor does have a parameter.
      
    - The resetTemperature method does not return a value that can be printed.
        
      - This is a void mutator method.
      
    - The private instance variable cannot be accessed from outside the class unless the accessor method is used.
    
      + Correct! The currentTemp instance variable is private and cannot be accessed outside of the class but the public accessor method getTemp() can be used instead.
      
    - The getTemp method cannot be called from outside the Liquid class.
      
      - The getTemp accessor method should be used from outside the class.
      
    - currentTemp does not have a value.
      
      - currentTemp is initialized to a value by the constructor but it is private and cannot be accessed outside the class.


.. mchoice:: AP5-5-4
    :practice: T
    :random:

    In the Liquid class below, the raiseTemperature method is intended to increase the value of the instance variable currentTemp by the value of the parameter increase. The method does not work as intended.
    
    .. code-block:: java

        public class Liquid
        {
            private int currentTemp;

            public Liquid(int ct)
            {
                currentTemp = ct;
            }

            public void raiseTemperature(int increase) // Line 10
            {
                return currentTemp + increase; // Line 12
            }
        }

    Which of the following changes should be made so that the class definition compiles without error and the method raiseTemperature works as intended?
    
    - Replace line 12 with ``currentTemp += increase;``
    
      + Correct! This void mutator method should just change the value of currentTemp and not return a value.
      
    - Replace line 12 with ``return currentTemp += increase;``
    
      - This void mutator method should just change the value of currentTemp and not return a value.
        
    - Replace line 12 with  ``increase += currentTemp;``
    
      - This method should  change the value of currentTemp, not increase.
        
    - Replace line 10 with  ``public raiseTemperature(int increase)``
        
      - This mutator method needs a return type of void.
      
    - Replace line 10 with  ``public int raiseTemperature(int increase)``
        
      - This mutator method should have a void return value and just change the value of currentTemp without returning a value.
      

.. mchoice:: AP5-6-3
   :practice: T
   :random:
   :answer_a: return (numOfBoxes + priceOfOnePizzaBox) / numOfPeople;
   :answer_b: return numOfPeople * numOfBoxes * priceOfOnePizzaBox;.
   :answer_c: return numOfBoxes / priceOfOnePizzaBox / numOfPeople;
   :answer_d: return numOfPeople / (numOfBoxes * priceOfOnePizzaBox);
   :answer_e: return (numOfBoxes * priceOfOnePizzaBox) / numOfPeople;
   :correct: e
   :feedback_a: Assume you have 5 boxes at $10 each. You would need to multiply them to get a total cost of $50. If you had 10 people at the party, you would need to divide $50 by 10 to get $5 per person.
   :feedback_b: Assume you have 5 boxes at $10 each for a total cost of $50. If you had 10 people at the party, you would need to divide $50 by 10 to get $5 per person.
   :feedback_c: Assume you have 5 boxes at $10 each. You would need to multiply them to get a total cost of $50. If you had 10 people at the party, you would need to divide $50 by 10 to get $5 per person.
   :feedback_d: Assume you have 5 boxes at $10 each for a total cost of $50. If you had 10 people at the party, you would need to divide $50 by 10 to get $5 per person.
   :feedback_e: Assume you have 5 boxes at $10 each for a total cost of $50. If you had 10 people at the party, you would need to divide $50 by 10 to get $5 per person.
   

   Consider the following class definition. The calculatePizzaCostPerPerson method is intended to calculate the amount each person at the party must pay for pizza. The amount is equal to the total price of all the pizza boxes divided by the number of people at the party. Which of the following code segments should replace *missing code* so that the calculatePizzaCostPerPerson method will work as intended?
   
   .. code-block:: java

        public class Party
        {
            private int numOfPeople; //number of people at the party

            public Party(int people)
            {
                numOfPeople = people;
            }

            public double calculatePizzaCostPerPerson(int numOfBoxes, double priceOfOnePizzaBox)
            {
                /* missing code */
            }
        }




.. mchoice:: AP5-6-4
   :practice: T
   :random:
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: I and II only
   :answer_e: I, II, and III
   :correct: d
   :feedback_a: I would work but this is not the only code that would work.
   :feedback_b: II would work but this is not the only code that would work.
   :feedback_c: You cannot put a shortcut assignment operator in the conditional test of an if statement.
   :feedback_d: Correct!
   :feedback_e: III would not work because you cannot put a shortcut assignment operator in the conditional test of an if statement.

   Consider the Party class below.
    
   .. code-block:: java

        public class Party
        {
            private int numOfPeople; //number of people at the party
            private int capacity;    //total capacity of people at party

            public Party(int people, int cap)
            {
                numOfPeople = people;
                capacity = cap;
            }

            public boolean updateNumOfPeople(int additionalPeople)
            {
                /* missing code */
            }
        }
    
   The class contains the updateNumOfPeople method, which is intended to update the instance variable numOfPeople under certain conditions and return a value indicating whether the  update was successful. If adding additionalPeople to the current number of people would lead to the number going over the capacity, then the update would be unsuccessful. Otherwise, if adding the number of additional people is still below or at the capacity, the update is successful. Which of the following code segments can replace *missing code* to ensure that the updateNumOfPeople method works as intended?

   .. code-block:: java
     
        I.  if (numOfPeople + additionalPeople > capacity)
            {
                return false;
            }
            else
            {
                numOfPeople += additionalPeople;
                return true;
            }
        II. if (numOfPeople + additionalPeople <= capacity)
            {
                numOfPeople += additionalPeople;
                return true;
            }
            else
            {
                return false;
            }
        III. if (numOfPeople += additionalPeople <= capacity)
             {
                return true;
             }
             else
             {
                return false;
             }           

.. mchoice:: AP5-8-3
    :practice: T

    Consider the following class definition.

    .. code-block:: java

        public class Liquid
        {
            private int currentTemp;
            private int boilingPoint;

            public Liquid(int ct, int boilingPoint)
            {
                currentTemp = ct;
                boilingPoint = bp;
            }

            public void changeTemp(int newTemp)
            {
                currentTemp = newTemp;
            }

            public void increaseTemp(int howMuch)
            {
                currentTemp = newTemp + howMuch;
            }

        }

    Which of the following best explains why the class will not compile?
    
    - The class is missing an accessor method.
        
      - The class does not necessarily need an accessor method.
      
    - The instance variables currentTemp and boilingPoint should be  public instead of private.
    
      - Instance variables are usually private.
      
    - The Liquid constructor needs a return type.
    
      - Constructors do not have return types.
        
    - The Liquid class is missing a constructor.
    
      - The class includes a constructor.
      
    - The variable newTemp is not defined in the increaseTemp method.
    
      + Correct! newTemp is defined in a different method. The instance variable currentTemp should be used instead.
      

.. mchoice:: AP5-8-4
   :practice: T
   :answer_a: The private variables boxesOfFood and numOfPeople are not properly initialized.
   :answer_b: The private variables boxesOfFood and numOfPeople should have been declared public.
   :answer_c: The public method getBoxesOfFood should have been declared private.
   :answer_d: The variable updatedAmountOfFood in the eatFoodBoxes method is a local variable and different from the one in orderMoreFood.
   :answer_e: The variables boxesOfFood and numOfPeople in the updatedAmountOfFood method are local variables.
   :correct: d
   :feedback_a: The private variables boxesOfFood and numOfPeople are initialized by the constructor.
   :feedback_b: Instance variables are usually private.
   :feedback_c: Methods are usually public.
   :feedback_d: The variable updatedAmountOfFood in the eatFoodBoxes method is a local variable and different from the one in orderMoreFood.
   :feedback_e: The variables boxesOfFood and numOfPeople are instance variables.

   Consider the following class definition for Party.  The following code segment appears in a method in a class other than Party. The code segment is intended to print the value 30, but does not print the correct value because of an error in the Party class. Which of the following best explains why the correct value isn’t printed?
    
   .. code-block:: java
 
       Party p = new Party(20, 15);
       p.orderMoreFood(20);
       p.eatFood(5);
       System.out.println(bob.getBoxesOfFood());
        
       public class Party
       {
        private int boxesOfFood;
        private int numOfPeople;

        public Party(int people, int foodBoxes)
        {
            numOfPeople = people;
            boxesOfFood = foodBoxes;
        }

        public void orderMoreFood(int additionalFoodBoxes)
        {
            int updatedAmountOfFood = boxesOfFood + additionalFoodBoxes;
            boxesOfFood = updatedAmountOfFood;
        }

        public int getNumOfPeople() {
            return numOfPeople;
        }

        public int getBoxesOfFood() {
            return boxesOfFood;
        }

        public void eatFood(int eatenBoxes) 
        {
            int updatedAmountOfFood = getNumOfPeople();
            boxesOfFood = updatedAmountOfFood - eatenBoxes;
        }

        
.. mchoice:: AP5-9-3
    :practice: T

    Consider the following class definitions. 
    
    .. code-block:: java

        public class Party
        {
            private String partyHost;
            private int monthOfParty;
            private int partyStartTime;

            public Party (String h, int month, int startTime)
            {
                partyHost = h;
                monthOfParty = month;
                partyStartTime = startTime;
            }

            public int getMonth()
            {
                return monthOfParty;
            }

            public int getStartTime()
            {
                return partyStartTime;
            }

            public String getHost()
            {
                return partyHost;
            }

            public void addToOptions (PartyOptions p)
            {
                p.addParty(this);
            }
        }

        public class PartyOptions
        {
            private int onlyThisMonth;

            public PartyOptions(int month)
            {
                onlyThisMonth = month;
            }

            /* A Party should only be added to this PartyOption if the party’s month matches onlyThisMonth */
            public void addParty(Party party)
            {
                if (p.GetMonth() == onlyThisMonth)
                {
                    System.out.print("Party by " + p.getHost() + " accepted; ");
                }
                else
                {
                    System.out.print("Party by " + p.getHost() + " rejected; ");
                }
            }
        }


    Consider the following code segment, which appears in a class other than Party or PartyOptions.
    
    .. code-block:: java
     
        Party p1 = new Party("Kerry", 10, 7);
        Party p2 = new Party("Jules", 9, 6);

        PartyOptions p = new PartyOptions(10);
        p1.addToOptions(p);
        p2.addToOptions(p);

    - Party by Kerry rejected; Party by Jules rejected;
    
      - Kerry's party is accepted because it is in the 10th month.
   
    - Party by Kerry rejected; Party by Jules accepted;
    
      - Jules' party is rejected because it is not in the 10th month. 
   
    - Party by Kerry accepted; Party by Jules rejected;
   
      + Kerry's party is accepted because it is in the 10th month.
      
    - Party by Kerry accepted; Party by Jules accepted;
   
      - Jules' party is rejected because it is not in the 10th month.    



