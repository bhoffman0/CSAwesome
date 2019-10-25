.. qnum::
   :prefix: lab-1b-
   :start: 1

.. highlight:: java
   :linenothreshold: 4



Activity 2: Running Simplified Magpie Code
===========================================

The College Board activity asks you to enter input using the ``Scanner`` class and record the responses.  But, instead you can run this simplified version below and just call the ``getResponse`` method with each string as input as shown in the ``main`` method below. 

Up until now, all our code has been in the main method. In this lab, there are a couple methods. The main method creates a Magpie object called maggie, and calls its methods maggie.getGreeting() and maggie.getResponse(input) giving one of the following strings as input and printing its response.

* My mother and I talked last night.
* I said no!
* The weather is nice.
* Do you know my brother?

Run the following code and see the responses to these 4 inputs.

.. activecode:: lc-magpie2
   :language: java

   public class Magpie2
   {
      public String getGreeting()
      {
        return "Hello, let's talk.";
      }

      public String getResponse(String statement)
      {
        String response = "";
        if (statement.indexOf("no") >= 0) {
          response = "Why so negative?";
        } else if (statement.indexOf("mother") >= 0
                    || statement.indexOf("father") >= 0
                    || statement.indexOf("sister") >= 0
                    || statement.indexOf("brother") >= 0) {
          response = "Tell me more about your family.";
        } else {
          response = getRandomResponse();
        }
        return response;
      }

      private String getRandomResponse()
      {
        final int NUMBER_OF_RESPONSES = 4;
        double r = Math.random();
        int whichResponse = (int)(r * NUMBER_OF_RESPONSES);
        String response = "";

        if (whichResponse == 0) {
          response = "Interesting, tell me more.";
        } else if (whichResponse == 1) {
          response = "Hmmm.";
        } else if (whichResponse == 2) {
          response = "Do you really think so?";
        } else if (whichResponse == 3) {
          response = "You don't say.";
        }
        return response;
	    }

      public static void main(String[] args)
      {
        Magpie2 maggie = new Magpie2();

        System.out.println(maggie.getGreeting());
        System.out.println(">My mother and I talked last night.");
        System.out.println(maggie.getResponse("My mother and I talked last night."));
        System.out.println(">I said no.");
        System.out.println(maggie.getResponse("I said no!"));
        System.out.println(">The weather is nice.");
        System.out.println(maggie.getResponse("The weather is nice."));
        System.out.println(">Do you know my brother?");
        System.out.println(maggie.getResponse("Do you know my brother?"));
      }
   }

.. |chatbots| raw:: html

   <a href="https://sites.google.com/site/webtoolsbox/bots" target="_blank">chatbots here</a>

.. |Java visualizer Chatbot| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public+class+Magpie2%0A%7B%0A+++public+String+getGreeting(%29%0A+++%7B%0A+++++return+%22Hello,+let's+talk.%22%3B%0A+++%7D%0A%0A+++public+String+getResponse(String+statement%29%0A+++%7B%0A+++++String+response+%3D+%22%22%3B%0A+++++if+(statement.indexOf(%22no%22%29+%3E%3D+0%29+%7B%0A+++++++response+%3D+%22Why+so+negative%3F%22%3B%0A+++++%7D+else+if+(statement.indexOf(%22mother%22%29+%3E%3D+0%0A+++++++++++++++++%7C%7C+statement.indexOf(%22father%22%29+%3E%3D+0%0A+++++++++++++++++%7C%7C+statement.indexOf(%22sister%22%29+%3E%3D+0%0A+++++++++++++++++%7C%7C+statement.indexOf(%22brother%22%29+%3E%3D+0%29+%7B%0A+++++++response+%3D+%22Tell+me+more+about+your+family.%22%3B%0A+++++%7D+else+%7B%0A+++++++response+%3D+getRandomResponse(%29%3B%0A+++++%7D%0A+++++return+response%3B%0A+++%7D%0A%0A+++private+String+getRandomResponse(%29%0A+++%7B%0A+++++final+int+NUMBER_OF_RESPONSES+%3D+4%3B%0A+++++double+r+%3D+Math.random(%29%3B%0A+++++int+whichResponse+%3D+(int%29(r+*+NUMBER_OF_RESPONSES%29%3B%0A+++++String+response+%3D+%22%22%3B%0A%0A+++++if+(whichResponse+%3D%3D+0%29+%7B%0A+++++++response+%3D+%22Interesting,+tell+me+more.%22%3B%0A+++++%7D+else+if+(whichResponse+%3D%3D+1%29+%7B%0A+++++++response+%3D+%22Hmmm.%22%3B%0A+++++%7D+else+if+(whichResponse+%3D%3D+2%29+%7B%0A+++++++response+%3D+%22Do+you+really+think+so%3F%22%3B%0A+++++%7D+else+if+(whichResponse+%3D%3D+3%29+%7B%0A+++++++response+%3D+%22You+don't+say.%22%3B%0A+++++%7D%0A+++++return+response%3B%0A+++++++%7D%0A%0A+++public+static+void+main(String%5B%5D+args%29%0A+++%7B%0A+++++Magpie2+maggie+%3D+new+Magpie2(%29%3B%0A%0A+++++System.out.println(maggie.getGreeting(%29%29%3B%0A+++++System.out.println(maggie.getResponse(%22My+mother+and+I+talked+last+night.%22%29%29%3B%0A+++++System.out.println(maggie.getResponse(%22I+said+no!%22%29%29%3B%0A+++++System.out.println(maggie.getResponse(%22The+weather+is+nice.%22%29%29%3B%0A+++++System.out.println(maggie.getResponse(%22Do+you+know+my+brother%3F%22%29%29%3B%0A+++%7D%0A%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=9" target="_blank">Java visualizer Chatbot</a>
   
When different methods are called from the main method, the control flows to these methods and then comes back to main exactly where it was left when the methods finish. 

Click on this cool |Java visualizer Chatbot| to step through the code. Click on the Forward button at the bottom of the code to step through the code to see the flow of control from the main method to the other methods and back.


.. |Magpie lab on repl.it| raw:: html

   <a href="https://repl.it/@BerylHoffman/Magpie-ChatBot-Lab-v2" target="_blank">Magpie lab on repl.it</a>
   
You can also run a version of the |Magpie lab on repl.it| that uses the Scanner class for input so that you can type in your own input to interact with it.

As you can see the ``getResponse`` method of Magpie2 looks for certain keywords like ``"mother"`` and ``"brother"``.  Why do you think the response to "Do you know my brother?" isn't "Tell me more about your family."?  Discuss this with partner in pairs and see if you can figure it out. See if you can modify the code above to respond correctly.

The response to "The weather is nice." is one of the random responses. Look at the code to see how the ``if`` statement assigns a value to the response and returns that response.
The method ``getRandomResponse`` generates a random number and uses that to assign the response. Modify the code above to add other random responses.



Exercises
------------

Alter the code above or in your own IDE (see section below) to do the following. We encourage you to work in pairs.

* Have it respond "Tell me more about your pets" when the statement contains the word "dog" or "cat". For example, a possible statement and response would be:

  * Statement: I like my cat Mittens.
  * Response: Tell me more about your pets.

* Have it respond favorably when it sees the name of your teacher. Be sure to use appropriate pronouns! For example, a possible statement and response would be:

  * Statement: Mr. Finkelstein is telling us about robotics.
  * Response: He sounds like a good teacher.

* Have the code check that the statement has at least one character. You can do this by using the ``trim`` method to remove spaces from the beginning and end, and then checking the length of the trimmed string. If there are no characters, the response should tell the user to enter something. For example, a possible statement and response would be:

  * Statement:
  * Response: Say something, please.

* Add two more noncommittal responses to the possible random responses.

* Pick three more keywords, such as “no” and “brother” and edit the ``getResponse`` method to respond to each of these.

* What happens when more than one keyword appears in a string? Try the input “My **mother** has a **dog** but **no** cat.” Which response did you get -- was it the one about family or the one about pets or the negative one for no?  Change the order of your if-else-if statements to make it so that one of the other responses is selected and try running it again.

.. shortanswer:: short-lab1b1
   :optional:

   What happens when a keyword is included in another word? Consider statements like “I know all the state capitals” which contains no and “I like vegetables smothered in cheese” which contains mother. Explain the problem with the responses to these statements.

Activity 2: Actual Code - (Optional)
-------------------------------------

You can do all of Activity 2 with the actual code using the Scanner class for input instead if you prefer. 

Here is the actual code for the |Magpie lab on repl.it|.  It uses the ``Scanner`` class to read input from the user.  The ``Scanner`` class is not on the AP CS A exam. You can log in to repl.it and use this code and change it to do this lab. 

Or you can copy and paste in the code from below into any Integrated Development Environment (IDE) like DrJava or JGrasp to run on your computer.

Here is the code for MagpieRunner2.java.


.. code-block:: java

  import java.util.Scanner;

  /**
   * A simple class to run the Magpie class.
   * @author Laurie White
   * @version April 2012
   */
  public class MagpieRunner2
  {

     /**
	  * Create a Magpie, give it user input, and print its replies.
  	  */
	 public static void main(String[] args)
	 {
	    Magpie2 maggie = new Magpie2();

		System.out.println (maggie.getGreeting());
		Scanner in = new Scanner (System.in);
		String statement = in.nextLine();

		while (!statement.equals("Bye"))
		{
			System.out.println (maggie.getResponse(statement));
			statement = in.nextLine();
		}
	 }
  }

Here is the code for Magpie2.java.

.. code-block:: java

  public class Magpie2
  {
	/**
     * Get a default greeting
	 * @return a greeting
	 */
	public String getGreeting()
	{
		return "Hello, let's talk.";
	}

	/**
	 * Gives a response to a user statement
	 *
	 * @param statement
	 *            the user statement
	 * @return a response based on the rules given
	 */
	public String getResponse(String statement)
	{
		String response = "";
		if (statement.indexOf("no") >= 0)
		{
			response = "Why so negative?";
		}
		else if (statement.indexOf("mother") >= 0
				|| statement.indexOf("father") >= 0
				|| statement.indexOf("sister") >= 0
				|| statement.indexOf("brother") >= 0)
		{
			response = "Tell me more about your family.";
		}
		else
		{
			response = getRandomResponse();
		}
		return response;
	}

	/**
	 * Pick a default response to use if nothing else fits.
	 * @return a non-committal string
	 */
	private String getRandomResponse()
	{
		final int NUMBER_OF_RESPONSES = 4;
		double r = Math.random();
		int whichResponse = (int)(r * NUMBER_OF_RESPONSES);
		String response = "";

		if (whichResponse == 0)
		{
			response = "Interesting, tell me more.";
		}
		else if (whichResponse == 1)
		{
			response = "Hmmm.";
		}
		else if (whichResponse == 2)
		{
			response = "Do you really think so?";
		}
		else if (whichResponse == 3)
		{
			response = "You don't say.";
		}

		return response;
	 }
   }
