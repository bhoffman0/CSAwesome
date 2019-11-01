.. qnum::
   :prefix: 9-12-
   :start: 8

Medium Multiple Choice Questions
----------------------------------

These problems are similar to those you will see on the AP CS A exam.
           
.. mchoice:: qoom_1
   :practice: T
   :answer_a: Won't compile since <code>GradStudent</code> doesn't have a <code>getInfo</code> method
   :answer_b: Taco
   :answer_c: Pizza
   :answer_d: Won't compile since you are creating a <code>GradStudent</code>, not a <code>Student</code>
   :answer_e: Won't compile since you use <code>this.getFood()</code>
   :correct: b
   :feedback_a: <code>GradStudent</code> will inherit the <code>getInfo</code> method from <code>Student</code>. This would be true if <code>getInfo</code> was a private method.
   :feedback_b: Objects know what class they are created as and all methods are resolved starting with that class at run time. If the method isn't found in that class the parent class is checked (and so on until it is found). So it will first look for <code>getInfo</code> in <code>GradStudent</code> and when it doesn't find it it will look in <code>Student</code>. In <code>getInfo</code> it calls <code>this.getFood</code>. Again, it will first look for this method in <code>GradStudent</code>. It will find the <code>getFood</code> method there and return "Taco".
   :feedback_c: This would be true if it was <code>Student s1 = new Student();</code>
   :feedback_d: An object of a subclass can be substituted for a parent class object. A <code>GradStudent</code> is a <code>Student</code>.
   :feedback_e: In object methods if you leave off the <code>this.</code> when invoking an object method it will be added for you by the compiler. The keyword <code>this</code> refers to the current object which is implicitly passed to all object methods.  

   Given the following class declarations, what is the output from ``Student s1 = new GradStudent();`` followed by ``s1.getInfo();``?
   
   .. code-block:: java 

      public class Student {
         public String getFood() {
            return "Pizza";
         }
         public String getInfo()  { 
            return this.getFood(); 
         }
      }

      public class GradStudent extends Student {
         public String getFood() {
            return "Taco";
         }
      }
      
.. mchoice:: qoom_2
   :practice: T
   :answer_a: I only
   :answer_b: II only
   :answer_c: I and II only
   :answer_d: II and III only
   :answer_e: I, II, and III
   :correct: d
   :feedback_a: I is wrong because <code>y</code> is a private field and thus can not be directly accessed from code in a client class.
   :feedback_b: I is wrong because <code>y</code>  is a private field and thus can not be directly accessed from code in a client class. II is correct because <code>EnhancedItem</code> has <code>setY</code> as a public method. III is correct because <code>EnhancedItem</code> inherits the public method <code>setX</code> from <code>Item</code>.
   :feedback_c: I is wrong because <code>y</code>  is a private field and thus can not be directly accessed from code in a client class.
   :feedback_d: I is wrong because <code>y</code>  is a private field and thus can not be directly accessed from code in a client class.  II is correct because <code>EnhancedItem</code> has <code>setY</code> as a public method.  III is correct because <code>EnhancedItem</code> inherits the public method <code>setX</code> from <code>Item</code>.
   :feedback_e: I is wrong because <code>y</code>  is a private field and thus can not be directly accessed from code in a client class.

   Given the following class declarations, and ``EnhancedItem enItemObj = new EnhancedItem();`` in a client class, which of the following statements would compile?
   
   .. code-block:: java 

      public class Item
      {
         private int x;

         public void setX(int theX)
         {
            x = theX;
         }
         // ... other methods not shown
      }

      public class EnhancedItem extends Item
      {
         private int y;

         public void setY(int theY)
         {
            y = theY;
         }

        // ... other methods not shown
      }

      I. enItemObj.y = 32;
      II. enItemObj.setY(32);
      III. enItemObj.setX(52);
      
.. mchoice:: qoom_3
   :practice: T
   :answer_a: t1.method1(t1,t1);
   :answer_b: t2.method1(t2,t2);
   :answer_c: t3.method1(t1,t1);
   :answer_d: t2.method1(t3,t2);
   :answer_e: t3.method1(t3,t3);
   :correct: e
   :feedback_a: You can't pass an object of class <code>Test1</code> since it is not either an object of type <code>Test2</code> or an object of type <code>Test3</code>. You can pass the specified type or an object that is a subclass of the specified type but <code>Test1</code> is not a subclass of <code>Test2</code> or <code>Test3</code>.
   :feedback_b: You can't pass an object of class <code>Test2</code> as a parameter of type <code>Test3</code>. <code>Test2</code> is the parent class of <code>Test3</code> not a subclass. You can pass an object of the specified type or an object of any subclass.
   :feedback_c: You can't pass an object of class <code>Test1</code> since it is not either an object of type <code>Test2</code> or an object of type <code>Test3</code>. You can pass the specified type or an object that is a subclass of the specified type but <code>Test1</code> is not a subclass of <code>Test2</code> or <code>Test3</code>.
   :feedback_d: You can't pass <code>t2</code> as an object of type <code>Test3</code> since it is an object of class <code>Test2</code> and class <code>Test2</code> is not either class <code>Test3</code> or a subclass of class <code>Test3</code>. Class <code>Test2</code> is the parent of class <code>Test3</code>.
   :feedback_e: Since <code>method1</code> is a public method of class <code>Test1</code> objects of any subclasses of <code>Test1</code> can invoke the method. So, it can be invoked on <code>t3</code> since it is an object of <code>Test3</code> and this is a subclass of <code>Test1</code>.  And, since <code>method1</code> takes an object of class <code>Test2</code> and <code>Test3</code> as parameters. This actually means it can take an object of <code>Test2</code> or any subclass of <code>Test2</code> and an object of <code>Test3</code> or any subclass of <code>Test3</code>. So it can take <code>t3</code> which is an object of class <code>Test3</code> as an object of <code>Test2</code> since <code>Test3</code> is a subclass of <code>Test2</code>.

   Given the following class declarations and initializations in a client program, which of the following is a correct call to ``method1``?
   
   .. code-block:: java 

      public class Test1
      {
         public void method1(Test2 v1, Test3 v2)
         {
            // rest of method not shown
         }
      }

      public class Test2 extends Test1
      {
      }

      public class Test3 extends Test2
      {
      }
      
      The following initializations appear in a different class.
      Test1 t1 = new Test1();
      Test2 t2 = new Test2();
      Test3 t3 = new Test3();
      
.. mchoice:: qoom_4
   :practice: T
   :answer_a: Meow Moo Woof Awk Awk
   :answer_b: Awk Awk Awk Awk Awk
   :answer_c: This will not compile
   :answer_d: This will have runtime errors
   :answer_e: Meow Moo Woof Oink Awk
   :correct: a
   :feedback_a: Objects keep a reference to the class that created them. So, even if you put them in an array of <code>Animal</code> objects, they know what they are and all methods are resolved starting with the class of the object. <code>Bird</code> and <code>Pig</code> do not override speak so the <code>speak</code> method in <code>Animal</code> will execute.
   :feedback_b: Methods are always resolved starting with the class of the object, so <code>Cat</code>, <code>Cow</code>, and <code>Dog</code> will all execute their overridden <code>speak</code> methods, so the output will be: Meow Moo Woof Awk Awk.
   :feedback_c: Because <code>Bird</code>, <code>Cow</code>, <code>Cat</code>, <code>Dog</code>, and <code>Pig</code> are subclasses of <code>Animal</code>, they can be stored in an array declared as <code>Animal</code> without any compile time errors.
   :feedback_d: Because <code>Bird</code>, <code>Cow</code>, <code>Cat</code>, <code>Dog</code>, and <code>Pig</code> are subclasses of <code>Animal</code>, they can be stored in an array declared as <code>Animal</code> without any runtime errors.
   :feedback_e: The <code>Pig</code> class did not override the <code>speak</code> method, so it will use the method from <code>Animal</code>, thus the output should be: Meow Moo Woof Awk Awk

    If you have a parent class ``Animal`` that has a method ``speak()`` which returns: Awk. ``Cat`` has a ``speak`` method that returns: Meow.  ``Bird`` does not have a ``speak`` method.  ``Dog`` has a ``speak`` method that returns: Woof.  ``Pig`` does not have a ``speak`` method.  ``Cow`` has a ``speak`` method that returns: Moo.   What is the output from looping through the array ``a`` created below and asking each element to ``speak()``? 
	
    .. code-block:: java 
	  
	  Animal[] a = { new Cat(), new Cow(), new Dog(), new Pig(), new Bird() }
	  
.. mchoice:: qoom_5
   :practice: T
   :answer_a: The code compiles and runs with no errors, the output is 5 6 5 6
   :answer_b: The code compiles and runs with no errors, the output is: 5 6 10 11
   :answer_c: The code compiles and runs with no errors, the output is 10 11 10 11
   :answer_d: The code won't compile.
   :answer_e: You get a runtime error <code>ClassCastException</code>, when <code>fastCar.addFuel()</code> is executed.
   :correct: b
   :feedback_a: <code>RaceCar</code>, while it inherits methods from <code>Car</code> via inheritance, has a separate and different constructor that sets the initial fuel amount to <code>2 * g</code>, thus in this case, <code>fuel</code> for <code>fastCar</code> is set to <code>10</code> initially.
   :feedback_b: The code compiles correctly, and because <code>RaceCar</code> extends the <code>Car</code> class, all the public methods of <code>Car</code> can be used by <code>RaceCar</code> objects. Also, a variable <code>Car</code> can refer to a <code>Car</code> object or an object of any subclass of <code>Car</code>. An object always knows the class that created it, so even though <code>fastCar</code> is declared to be a <code>Car</code> the constructor that is executed is the one for <code>RaceCar</code>.
   :feedback_c: The variable <code>car</code> is a <code>Car</code> object, so the constructor used is not the same as the <code>fastCar</code> object which is a <code>RaceCar</code>. The <code>car</code> constructor does not change the passed in parameter, so it is set to <code>5</code> initially.
   :feedback_d: <code>RaceCar</code> inherits from the <code>Car</code> class so all the public methods in <code>Car</code> can be accessed by any object of the <code>RaceCar</code> class.
   :feedback_e: <code>RaceCar</code> inherits from the <code>Car</code> class so all the public methods in <code>Car</code> can be accessed by any object of the <code>RaceCar</code> class.

   Given the following class declarations and code, what is the result when the code is run?
   
   .. code-block:: java 

      public class Car
      {
         private int fuel;

         public Car() { fuel = 0; } 
         public Car(int g) { fuel = g; }

         public void addFuel() { fuel++; }
         public void display() { System.out.print(fuel + " "); }
      }

      public class RaceCar extends Car
      {
         public RaceCar(int g) { super(2*g); }
      }
      
      What is the result when the following code is compiled and run?

      Car car = new Car(5);
      Car fastCar = new RaceCar(5);
      car.display()
      car.addFuel();
      car.display();
      fastCar.display();
      fastCar.addFuel();
      fastCar.display();
      
.. mchoice:: qoom_6
   :practice: T
   :answer_a: I only
   :answer_b: II only
   :answer_c: I and III only
   :answer_d: III only
   :answer_e: I, II, and III
   :correct: c
   :feedback_a: Both I and III are correct. I is correct because variable <code>b</code> has been declared to be an object of the class <code>Book</code> so you can invoke any public methods that are defined in the <code>Book</code> class or in parents of <code>Book</code>. II is not correct because you can't invoke methods in the <code>Dictionary</code> class directly on <code>b</code> since <code>b</code> is declared to be of type <code>Book</code> not type <code>Dictionary</code> and <code>Dictionary</code> is a subclass of <code>Book</code> not a parent class of <code>Book</code>. III is correct because you can cast <code>b</code> to type <code>Dictionary</code> and then invoke public methods in <code>Dictionary</code>.
   :feedback_b: You can't invoke methods in the <code>Dictionary</code> class directly on <code>b</code> since <code>b</code> is declared to be of type <code>Book</code> not type <code>Dictionary</code> and <code>Dictionary</code> is a subclass of <code>Book</code> not a parent class of <code>Book</code>. The compiler checks that the method exists on the declared class type, not the run-time type of the object.
   :feedback_c: I is correct because variable <code>b</code> has been declared to be an object of the class <code>Book</code> so you can invoke any public methods that are defined in the <code>Book</code> class or in parents of <code>Book</code>. II is not correct because you can't invoke methods in the <code>Dictionary</code> class directly on <code>b</code> since <code>b</code> is declared to be of type <code>Book</code> not type <code>Dictionary</code> and <code>Dictionary</code> is a subclass of <code>Book</code> not a parent class of <code>Book</code>. III is correct because you can cast <code>b</code> to type <code>Dictionary</code> and then invoke public methods in <code>Dictionary</code>.
   :feedback_d: I is also correct.
   :feedback_e: You can't invoke methods in the <code>Dictionary</code> class directly on <code>b</code> since <code>b</code> is declared to be of type <code>Book</code> not type <code>Dictionary</code> and <code>Dictionary</code> is a subclass of <code>Book</code> not a parent class of <code>Book</code>. The compiler checks that the method exists on the declared class, not the run-time class.

   Given the following class declarations and code, what is the result when the code is run?
   
   .. code-block:: java 
      
      public class Book
      {
         public String getISBN() 
         {
            // implementation not shown
         }
   
         // constructors, fields, and other methods not shown
      }

      public class Dictionary extends Book
      {
         public String getDefinition(String word)
         {
            // implementation not shown
         }
 
         // constructors, fields, and methods not shown
      }
      
      Assume that the following declaration appears in a client class.
      
      Book b = new Dictionary();
      
      Which of the following statements would compile without error?
      I.  b.getISBN();
      II. b.getDefinition("wonderful");
      III. ((Dictionary) b).getDefinition("wonderful");
      

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