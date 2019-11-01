.. qnum::
   :prefix: 5-9-
   :start: 1

.. |CodingEx| image:: ../../_static/codingExercise.png
    :width: 30px
    :align: middle
    :alt: coding exercise
    
    
.. |Exercise| image:: ../../_static/exercise.png
    :width: 35
    :align: middle
    :alt: exercise
    
    
.. |Groupwork| image:: ../../_static/groupwork.png
    :width: 35
    :align: middle
    :alt: groupwork
    
    
this Keyword
=================

The keyword **this** can be used in a class to refer to the current calling object.  

.. |Java visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=%20public%20class%20Person%20%0A%20%20%7B%0A%20%20%20%20%20//%20instance%20variables%20%0A%20%20%20%20%20private%20String%20name%3B%0A%20%20%20%20%20private%20String%20email%3B%0A%20%20%20%20%20private%20String%20phoneNumber%3B%0A%20%20%20%20%20%0A%20%20%20%20%20//%20constructor%0A%20%20%20%20%20public%20Person%28String%20theName%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20this.name%20%3D%20theName%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20accessor%20methods%20-%20getters%20%0A%20%20%20%20%20public%20String%20getName%28%29%20%7B%20return%20this.name%3B%7D%0A%20%20%20%20%20public%20String%20getEmail%28%29%20%7B%20return%20this.email%3B%7D%0A%20%20%20%20%20public%20String%20getPhoneNumber%28%29%20%7B%20return%20this.phoneNumber%3B%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20mutatoor%20methods%20-%20setters%0A%20%20%20%20%20public%20void%20setName%28String%20theName%29%20%7B%20this.name%20%3D%20theName%3B%7D%0A%20%20%20%20%20public%20void%20setEmail%28String%20theEmail%29%20%7Bthis.email%20%3D%20theEmail%3B%7D%0A%20%20%20%20%20public%20void%20setPhoneNumber%28String%20thePhoneNumber%29%20%7B%20this.phoneNumber%20%3D%20thePhoneNumber%3B%7D%0A%20%20%20%20%20public%20String%20toString%28%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20return%20this.name%20%2B%20%22%20%22%20%2B%20this.email%20%2B%20%22%20%22%20%2B%20this.phoneNumber%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%20%0A%20%20%20%20%20//%20main%20method%20for%20testing%0A%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20Person%20p1%20%3D%20new%20Person%28%22Sana%22%29%3B%0A%20%20%20%20%20%20%20%20System.out.println%28p1%29%3B%0A%20%20%20%20%20%20%20%20Person%20p2%20%3D%20new%20Person%28%22Jean%22%29%3B%0A%20%20%20%20%20%20%20%20p2.setEmail%28%22jean%40gmail.com%22%29%3B%0A%20%20%20%20%20%20%20%20p2.setPhoneNumber%28%22404%20899-9955%22%29%3B%0A%20%20%20%20%20%20%20%20System.out.println%28p2%29%3B%0A%20%20%20%20%20%7D%0A%20%20%7D%0A%20%20&cumulative=false&curInstr=25&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>
   
For example, in the following Class Person, when we create an object p1 and call the constructor or p1.setEmail(), the word "this" refers to p1. And when we make the same method calls with object p2, "this" refers to p2.    
Run the code below and also check it out in the |Java visualizer| which shows how this refers to different objects when the code is run.

 
.. activecode:: PersonClassThis
  :language: java

  public class Person 
  {
     // instance variables 
      private String name;
      private String email;
      private String phoneNumber;
     
     // constructor
     public Person(String theName)
     {
        this.name = theName;
     }
     
     // accessor methods - getters 
     public String getName() { return this.name;}
     public String getEmail() { return this.email;}
     public String getPhoneNumber() { return this.phoneNumber;}
     
     // mutator methods - setters
     public void setName(String theName) { this.name = theName;}
     public void setEmail(String theEmail) {this.email = theEmail;}
     public void setPhoneNumber(String thePhoneNumber) { this.phoneNumber = thePhoneNumber;}
     public String toString()
     {
        return this.name + " " + this.email + " " + this.phoneNumber;
     }
     
     // main method for testing
     public static void main(String[] args)
     {
        Person p1 = new Person("Sana");
        System.out.println(p1);
        Person p2 = new Person("Jean");
        p2.setEmail("jean@gmail.com");
        p2.setPhoneNumber("404 899-9955");
        System.out.println(p2);
     }
  }

.. note::

    Note that in the code above, this.name, this.email, and this.phoneNumber are equivalent to writing just name, email, and phoneNumber, but ``this.variable`` is a way to indicate that we are referring to the instance variables of this object instead of a local variable. 

Static methods cannot refer to this or instance variables because they are called with the classname, not an object, so there is no this object. 


The keyword this is sometimes used by programmers to distinguish between variables. Programmers can give the parameter variables the same names as the instance variables and this can distinguish them and avoid a naming conflict. For example, both the instance variable and the parameter variable are called name in the code below.

.. code-block:: java
 
     // instance variables 
     private String name;
     
     // constructor
     public Person(String name)
     {
        // Set this object's instance variable name to the parameter variable name
        this.name = name; 
     }


.. |Java visualizer2| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public%20class%20Pay%0A%20%20%20%7B%0A%20%20%20%20private%20double%20pay%3B%0A%0A%20%20%20%20public%20Pay%28double%20p%29%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20pay%20%3D%20p%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20double%20getPay%28%29%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20return%20pay%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20void%20calculatePayWithOvertime%28%29%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20//%20this%20Pay%20object%20is%20passed%20to%20the%20Overtime%20constructor%0A%20%20%20%20%20%20%20%20Overtime%20ot%20%3D%20new%20Overtime%28this%29%3B%0A%20%20%20%20%20%20%20%20pay%20%3D%20ot.getOvertimePay%28%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%20%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20Pay%20myPay%20%3D%20new%20Pay%28100.0%29%3B%0A%20%20%20%20%20%20%20%20myPay.calculatePayWithOvertime%28%29%3B%0A%20%20%20%20%20%20%20%20System.out.println%28myPay.getPay%28%29%29%3B%0A%20%20%20%20%7D%0A%20%20%20%7D%0A%0A%20%20%20class%20Overtime%0A%20%20%20%7B%0A%20%20%20%20private%20double%20payWithOvertime%3B%0A%0A%20%20%20%20public%20Overtime%28Pay%20p%29%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20payWithOvertime%20%3D%20p.getPay%28%29%20*%201.5%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20public%20double%20getOvertimePay%28%29%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20return%20payWithOvertime%3B%0A%20%20%20%20%7D%0A%20%20%20%7D&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false"  target="_blank" style="text-decoration:underline">Java visualizer</a>

The **this** variable can be used anywhere you would use an object variable.  You can even pass it to another method as an argument. Consider the classes below, Pay and Overtime. The Pay class declares an Overtime object and passes in **this** (the current Pay object) to its constructor which computes the overtime with respect to that Pay object. Try this code in the |Java visualizer2|. Here is an image that shows how this and myPay and p all refer to the same object in memory.

.. figure:: Figures/thisTrace.png
    :width: 400px
    :align: center


.. activecode:: PayClassThis
   :language: java
   
   What does this code print out? Trace through the code. Notice how the this Pay object is passed to the Overtime constructor.
   ~~~~
   public class Pay
   {
    private double pay;

    public Pay(double p)
    {
        pay = p;
    }

    public double getPay()
    {
        return pay;
    }

    public void calculatePayWithOvertime()
    {
        // this Pay object is passed to the Overtime constructor
        Overtime ot = new Overtime(this);
        pay = ot.getOvertimePay();
    }
    
    public static void main(String[] args) 
    {
        Pay myPay = new Pay(100.0);
        myPay.calculatePayWithOvertime();
        System.out.println(myPay.getPay());
    }
   }

   class Overtime
   {
    private double payWithOvertime;

    public Overtime(Pay p)
    {
        payWithOvertime = p.getPay() * 1.5;
    }

    public double getOvertimePay()
    {
        return payWithOvertime;
    }
   }

|Exercise| Check Your Understanding

.. mchoice:: AP5-9-1
    :practice: T

    Consider the following class definitions.
    
    .. code-block:: java

       public class Pay
       {
        private double pay;

        public Pay(double p)
        {
            pay = p;
        }

        public double getPay()
        {
            return pay;
        }

        public void calculatePayWithOvertime()
        {
            // this Pay object is passed to the Overtime constructor
            Overtime ot = new Overtime(this);
            pay = ot.getOvertimePay();
        }
       }

       public class Overtime
       {
        private double payWithOvertime;

        public Overtime(Pay p)
        {
            payWithOvertime = p.getPay() * 1.5;
        }
        public double getOvertimePay()
        {
            return payWithOvertime;
        }
       }

    The following code segment appears in a class other than Pay or Overtime.
    
    .. code-block:: java

        Pay one = new Pay(20.0);
        one.getPayWithOvertime();
        System.out.println(one.getPay());

    What, if anything, is printed as a result of executing the code segment?
    
    - 10.0
    
      - The pay starts at 20 and then increases with overtime.
      
    - 15.0
        
      - If the pay started at 10, this would be the result.
        
    - 20.0
        
      - The pay starts at 20 and then increases with overtime.
      
    - 30.0
        
      + Correct! The pay starts at 20 and then increases with overtime by multiplying by 1.5.
      
    - Nothing is printed because the code will not compile.
      
      - Incorrect. The code will compile.

       

    

|Groupwork| Programming Challenge : Bank Account
------------------------------------------------------------

.. figure:: Figures/dollarSign.png
    :width: 100px
    :align: left
    
- Create a class called Bank Account below that keeps track of the account holder's name, the account number, and the balance in the account. Make sure you use the appropriate data types for these. 

- Write 2 constructors for the class that initialize the instance variables to default values and to given parameters. For the parameters, use the same variable names as your instance variables. Use the **this** keyword to distinguish between the instance variables and the parameter variables.

- Write a toString() method for the class. Use the **this** keyword to return the instance variables.

- Write a withdraw(amount) and deposit(amount) for the class. Withdraw should subtract the amount from the balance as long as there is enough money in the account (the balance is larger than the amount). Deposit should add the amount to the balance.  Use the **this** keyword to refer to the balance.

- Test your class below with a main method that creates a Bank Account object and calls its deposit and withdraw methods and prints out the object to test its toString() method. 

.. activecode:: challenge-5-9-BankAccount
  :language: java

  
   


Summary
--------

- Within a non-static method or a constructor, the keyword this is a reference to the current object, the object whose method or constructor is being called.

- this.instanceVariable can be used to distinguish between this object's instance variables and local parameter variables that may have the same variable names.

- Static methods do not have a this reference.

- The this variable can be used anywhere you would use an object variable, even to pass it to another method as an argument. 


AP Practice
------------

.. mchoice:: AP5-9-2
    :practice: T

    Consider the following class definitions.
    
    .. code-block:: java
 
        public class Liquid
        {
            private int currentTemp;

            public Liquid (int ct)
            {
                currentTemp = ct;
            }

            public int getCurrentTemp()
            {
                return currentTemp;
            }

            public void addToJar(LiquidJar j)
            {
                j.addLiquid(this);
            }
        }

        public class LiquidJar
        {
            private int totalTemp;

            public void addLiquid(Liquid l)
            {
                totalTemp += l.getCurrentTemp();
            }

            public int getTotalTemp()
            {
                return totalTemp;
            }
            // Constructor not shown.
        }

    Consider the following code segment, which appears in a class other than Liquid or LiquidJar.
        
    .. code-block:: java

            Liquid water = new Liquid(50);
            Liquid milk = new Liquid(15);

            LiquidJar j = new LiquidJar();
            water.addToJar(j);
            milk.addToJar(j);
            System.out.println(j.getTotalTemp());

    What, if anything, is printed out after the execution of the code segment?

    - 50
        
      - The liquid water has a temperature of 50 but more is added to the jar.
          
    - 15
        
      - The liquid milk has a temperature of 15 but more is added to the jar.

    - 65
        
      + Correct! The liquid water with a temperature of 50 and then the liquid milk with a temperature of 15 are added to the jar.
          
    - Nothing, the code segment attempts to access the private variable currentTemp outside of its scope.
          
      - Incorrect. The currentTemp is never used outside its scope.
          
    - Nothing, the code segment attempts to access the private variable totalTemp outside of its scope.
        
      - Incorrect. The totalTemp is never used outside its scope.





