.. qnum::
   :prefix: 9-10-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block or two that aren't needed in the correct solution.  Try to solve these on your phone or other mobile device!


.. .. parsonsprob:: oopex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should create an abstract class with an abstract method walk(). But, the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public abstract class Dog {
   =====
   public class Dog abstract { #distractor
   =====
           public abstract void walk();
   =====
           public void walk(); #distractor
   =====
   } // end class


.. parsonsprob:: oopex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should create an empty Dog class that is a child of the Animal class. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class Dog extends Animal {
   =====
   public Animal class Dog { #distractor
   =====
   public class Animal extends Dog { #distractor
   =====
   public class Dog implements Animal { #distractor
   =====
   } // end class

.. parsonsprob:: oopex3muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program should overload a void method talk with no parameters. But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public class GenericPerson
   {
      public void talk()
      {
         System.out.println("Hello!");  
      }
   }
   
   public class Person extends GenericPerson {
   =====
   	public void talk(String name) {
   		System.out.println("Hello" + name);
   	}
   =====
   public String talk() {
   	return "Hello!";
   } #distractor
   =====
   public char talk() {
   	return 'y';
   } #distractor
   =====
   } // end class

.. .. parsonsprob:: oopex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program should create an interface, named Person, with two methods, walk() and talk(). But, the blocks have been mixed up and may include extra blocks that are not needed in a correct solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   public interface Person {
   =====
   public abstract class Person { #distractor
   =====
   public class interface Person { #distractor
   =====
   	public void walk() {
   		System.out.println("walk");
   	}
   	public void talk() {
   		System.out.println("talk");
   	} #distractor
   =====
   	public walk();
   	public talk(); #distractor
   =====
   	public void walk();
   	public void talk();
   =====
   } // end class
