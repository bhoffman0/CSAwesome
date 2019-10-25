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
            cap = 0;
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
    
     - Incorrect. Getter methods are fine as public methods
    
   - The return type of the getCurrentTemperature method should be int.
    
     + Correct!

   - The getCurrentTemperature method should have at least one parameter.
    
     - Incorrect. Getter’s do not need parameters.

   - The variable currentTemperature is not declared inside of the getCurrentTemperature method.
    
     - Incorrect. Simply not true.

   - The instance variable ct should be returned instead of currentTemperature, which is local to the constructor.
    
     - Incorrect. Constructor variables should be used simply for initializing the attributes.



.. mchoice:: qsh_3
   :practice: T
   :random:
   :answer_a: Lasagna Meow Screeech
   :answer_b: Meow Screeech Lasagna
   :answer_c: Screeech Meow Lasagna
   :answer_d: Lasagna Screeech Meow
   :correct: b
   :feedback_a: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor
   :feedback_b: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor
   :feedback_c: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor
   :feedback_d: The baseclass constructor runs first so Animal doesn't have one so then it goes to Cat's constructor and then Garfield's constructor

   What is the output of the following code?

   .. code-block:: java

    class Animal
    {
        void someSound()
        {
            System.out.print("Screeech ");
        }
    }

    class Cat extends Animal
    {
        public Cat()
        {
            System.out.print("Meow ");
            super.someSound();
        }
    }

    class Garfield extends Cat
    {
        public Garfield()
        {
            System.out.print("Lasagna ");
        }
    }
    public class MainClass
    {
        public static void main(String[] args)
        {
            Garfield garfield = new Garfield();
        }
    }

