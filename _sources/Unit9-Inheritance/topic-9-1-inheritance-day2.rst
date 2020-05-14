.. qnum::
   :prefix: 9-1-
   :start: 5
   
   
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

is-a vs. has-a (Day 2)
---------------------------------------

..	index::
    single: has-a
    single: association
    pair: relationships; association

Another type of relationship between classes is the **has-a** relationship or **association** relationship.  Use this when the object of one class contains a reference to one or more of another class.  For example, a course can have many course periods associated with it as shown below.  The ``1`` near the ``Course`` means that ``1`` course object is associated with the number shown near the other class.  In this case it is ``*`` which means 0 to many.  So one course is associated with 0 to many course periods.

.. figure:: Figures/assoc.png
    :width: 300px
    :align: center
    :figclass: align-center

    Figure 3: A UML Class Diagram showing Association

In the code, the ``Course`` class **has** an array or ArrayList of ``CoursePeriod`` objects as an attribute inside it.  

.. code-block:: java

  public class Course
  {
     private ArrayList<CoursePeriod> periodList;
  }

Alternatively, we could say that a CoursePeriod  has a Course attribute inside it to hold the information about the Course. It is up to the programmer how to design these two classes depending on which type of association would be more useful in the program.

.. code-block:: java

  public class CoursePeriod
  {
     private Course courseInfo;
     private int period;
  }

Here is another example. Consider the class Student and Course and an APcourse. An APcourse is a special type of Course. Students are in Courses. What are the relationships between these classes? The UML diagram below shows the inherits (is-a) relationship between Course and APcourse and the associate (has-a) relationship between Class and Students.

.. figure:: Figures/APcourseUML.png
    :width: 350px
    :align: center
    :figclass: align-center

    Figure 4: A UML Class Diagram for Student, Course, APcourse
 
|CodingEx| **Coding Exercise**

We can represent the diagram in Figure 4 in the code below. The Course class has an ArrayList of Student objects in it as the roster attribute. And an APcourse extends Course. What do you think the following code will print out?

.. activecode:: apclass
  :language: java
    
  What do you think the following code will print out?
  ~~~~
  import java.util.*;
    
    class Student
    {
      private String name;
      private int id;
    }

    class Course
    {
      private String title;
      private ArrayList<Student> roster;
    }
    
    public class APcourse extends Course
    {
       private String APexamDate;

       public static void main(String[] args)
       {
          APcourse csa = new APcourse();
          System.out.print("Is an APcourse a Course? ");
          System.out.println(csa instanceof Course);
       }
    }


is-a Substitution Test
----------------------------------

If you aren't sure if a class should inherit from another class ask yourself if you can substitute the subclass type for the superclass type.  For example, if you have a ``Book`` class and it has a subclass of ``ComicBook`` does that make sense?  Is a comic book a kind of book?  Yes, a comic book is a kind of book so inheritance makes sense.  If it doesn't make sense use *association* or the *has-a* relationship instead.

.. note::

   Only use inheritance when the child class is really a type of the parent class, otherwise use association.


|Exercise| **Check your understanding**

.. mchoice:: qoo_1
   :practice: T
   :answer_a: Create one class PublishedMaterial with the requested attributes.
   :answer_b: Create classes Book and Movie and each class has the requested attributes.
   :answer_c: Create the class PublishedMaterial and have Book and Movie inherit from it all the listed attributes.
   :answer_d: Create one class BookStore with the requested attributes.
   :answer_e: Create classes for PublishedMaterial, Books, Movies, Title, Price, ID, Authors, DatePublished
   :correct: c
   :feedback_a: This will complicate the process of retrieving objects based on their type. Also if we need to add information that is specific to Book or Movie, it would be best if these were subclasses of PublishedMaterial.
   :feedback_b: This involves writing more code than is necessary (usually people copy and paste the shared code) and makes it harder to fix errors. It would be better to put common attributes and methods in the superclass PublishedMaterial and have Book and Movie be subclasses.
   :feedback_c: We will need to get objects based on their type so we should create classes for Book and Movie. They have common attributes so we should put these in a common superclass PublishedMaterial.
   :feedback_d: The class name, BookStore, seems to imply the thing that keeps track of the store. This would be an appropriate class name for an object that handles the items in the Bookstore. However, for the published material, it would be better to use a superclass PublishedMaterial and subclasses for Books and Movies.
   :feedback_e: This is more classes than is necessary. Items such as Title, Price, ID, and DatePublished are simple variables that do not need a class of their own but should be attributes in a PublishedMaterial superclass, with Movies and Books as subclasses.

    An online store is working on an online ordering system for Books and Movies. For each type of Published Material (books and movies) they need to track the id, title, date published, and price. Which of the following would be the best design?

.. mchoice:: qoo_2
   :practice: T
   :answer_a: An is-a relationship. The Author class should be a subclass of the Book class.
   :answer_b: An is-a relationship. The Book class should be a subclass of the Author class.
   :answer_c: A has-a relationship. The Book class has an Author attribute. 
   :correct: c
   :feedback_a: Is an Author a type of Book?  Or, does a Book have an Author associated with it?
   :feedback_b: Is a Book a type of Author?  Or, does a Book have an Author associated with it?
   :feedback_c: A Book has an Author associated with it. Note that you could also say that an Author has many Books associated with it.

    An online site shows information about Books and Authors. What kind of relationship do these two classes have?

.. This one was confusing to teachers .. mchoice:: qoo_2
   :answer_a: The MovieShowing class should be a subclass of the Movie class.
   :answer_b: The Movie class should be a subclass of the MovieShowing class.
   :answer_c: A MovieShowing has a movie associated with it, so it should have a Movie attribute.
   :correct: c
   :feedback_a: Is a movie showing a type of movie?  Or, does a movie showing have a movie associated with it?
   :feedback_b: Is a movie a type of movie showing?  Or, does a movie showing have a movie associated with it?
   :feedback_c: A movie showing is not a type of movie and a movie is not a type of movie showing.  A movie showing has a movie associated with it.

    A movie theater has multiple showings of a movie each day. Each movie showing has a start time and location (theater number).  What should the relationship be between the Movie class and the MovieShowing class?
    
.. mchoice:: qoo_3
   :practice: T
   :answer_a: superclass
   :answer_b: parent
   :answer_c: extends
   :answer_d: class
   :correct: c
   :feedback_a: The parent class is the superclass, but this is not the Java keyword for declaring the parent class.
   :feedback_b: The class you are inheriting from is called the parent or superclass, but this is not the Java keyword.
   :feedback_c: The extends keyword is used to specify the parent class.
   :feedback_d: The class keyword is used to declare a class, but not the parent class.

   What Java keyword is used to set up an inheritance relationship between a subclass and a superclass?


|Groupwork| Programming Challenge : Online Store 
-------------------------------------------------

.. |Creately.com| raw:: html

   <a href="https://creately.com" target="_blank">Creately.com</a> 

Working in pairs or groups, design an online store with classes for Store, ItemForSale, Book, Movie, and Author. 

- First, do some research in an online store like Amazon to see what information they store on books, movies, and authors, and what type of information is the same for all items for sale. 

- List at least 3 attributes for each class. Which attributes should be in ItemForSale and which in Book, Movie or Author?

- What is the relationship between ItemForSale and Book? between ItemForSale and Movie? between Book and Author? between Store and ItemForSale? You may want to draw UML Class Diagrams for these classes on paper or using an online drawing tool like |Creately.com| (choose Class Diagrams, click to connect classes and choose the relationship)

- Use the ActiveCode window below to declare each class and specify their relationship to one another with inheritance or association. (Note that usually, each public class would be in a separate file, but since we only have 1 file in Active Code, we only make 1 class public).  Only put in the instance variables for each class. We will learn how to make constructors and methods in the next lessons.

.. activecode:: challenge-9-1-online-store
  :language: java
  
  Declare 3 instance variables for each of the classes below. Create an inheritance or association relationship for some of them. 
  ~~~~
  class ItemForSale
  {
       
  }

  class Movie
  {
    
  }
    
  class Book
  {
    
  }
    
  class Author
  {
    
  }
    
  public class Store 
  {
       // instance variables

       public static void main(String[] args)
       {
          Store s = new Store();
          Book b = new Book();
          System.out.println(b instanceof ItemForSale);
       }
  }

Summary
--------

- A class hierarchy can be developed by putting common attributes and behaviors of related classes into a single class called a **superclass**.

- Classes that extend a superclass, called subclasses, can draw upon the existing attributes and behaviors of the superclass without repeating these in the code.

- The keyword **extends** is used to establish an **inheritance** relationship between a **subclass** and a **superclass**.  A class can extend only one superclass.

- Extending a subclass from a superclass creates an **is-a relationship** from the subclass to the superclass.

