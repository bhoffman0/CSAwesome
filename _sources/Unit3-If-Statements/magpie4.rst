.. qnum::
   :prefix: lab-1d-
   :start: 1
   
.. highlight:: java
   :linenothreshold: 4



Activity 4: Responses that Transform Statements
=================================================

If your class has time, your teacher may have you do Activity 4 below.

As stated previously, single keywords are interesting, but better chatbots look for groups of words.
Statements like "I like cats", "I like math class", and "I like Spain" all have the form "I like something".
The response could be "What do you like about something?" This activity will respond to groupings
of words.

Try each of the following as the value for the ``statement`` in the main method and see what they print.  Or you can try it on |repl.it version 4|.

* I want to understand French.
* Do you like me?
* You confuse me.

You can also step through the code in the |Java Visualizer|. It may take a minute or two to load.  Click the forward button at the bottom of the code to execute the next statement. 




.. activecode:: lc-magpie4
   :language: java
   
   /**
    * A program to carry on conversations with a human user.
    * This version:
    *<ul><li>
    *   Uses advanced search for keywords 
    *</li><li>
    *   Will transform statements as well as react to keywords
    *</li></ul>
    * @author Laurie White
    * @version April 2012
    *
    */
   public class Magpie4
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
         if (statement.length() == 0)
         {
            response = "Say something, please.";
         }

         else if (findKeyword(statement, "no") >= 0)
         {
            response = "Why so negative?";
         }
         else if (findKeyword(statement, "mother") >= 0
                  || findKeyword(statement, "father") >= 0
                  || findKeyword(statement, "sister") >= 0
                  || findKeyword(statement, "brother") >= 0)
         {
            response = "Tell me more about your family.";
         }

         // Responses which require transformations
         else if (findKeyword(statement, "I want to", 0) >= 0)
         {
            response = transformIWantToStatement(statement);
         }
  
         // ADD Responses which require transformations!
         

         else
         {
            // Look for a two word (you <something> me)
            // pattern
            int psn = findKeyword(statement, "you", 0);

            if (psn >= 0
                && findKeyword(statement, "me", psn) >= 0)
            {
               response = transformYouMeStatement(statement);
            }
            else
            {
               response = getRandomResponse();
            }
         }
         return response;
      }
 
      /**
       * Take a statement with "I want to <something>." and transform it into 
       * "What would it mean to <something>?"
       * @param statement the user statement, assumed to contain "I want to"
       * @return the transformed statement
       */
      private String transformIWantToStatement(String statement)
      {
         //  Remove the final period, if there is one
         statement = statement.trim();
         String lastChar = statement.substring(statement
                                               .length() - 1);
         if (lastChar.equals("."))
         {
            statement = statement.substring(0, statement
                                               .length() - 1);
         }
         int psn = findKeyword (statement, "I want to", 0);
         String restOfStatement = statement.substring(psn + 9).trim();
         return "What would it mean to " + restOfStatement + "?";
      }
 
      /**  ADD CODE HERE!
       * Take a statement with "I want <something>." and transform it into 
       * Would you really be happy if you had <something>?
       * @param statement the user statement, assumed to contain "I want"
       * @return the transformed statement
       */
      private String transformIWantStatement(String statement)
      {
         // ADD CODE HERE 
         
         return "Would you really be happy if you had ...";
      }

      /**
       * Take a statement with "you <something> me" and transform it into 
       * "What makes you think that I <something> you?"
       * @param statement the user statement, assumed to contain "you" followed by "me"
       * @return the transformed statement
       */
      private String transformYouMeStatement(String statement)
      {
         //  Remove the final period, if there is one
         statement = statement.trim();
         String lastChar = statement.substring(statement
                                               .length() - 1);
         if (lastChar.equals("."))
         {
            statement = statement.substring(0, statement
                                               .length() - 1);
         }
  
         int psnOfYou = findKeyword (statement, "you", 0);
         int psnOfMe = findKeyword (statement, "me", psnOfYou + 3);
  
         String restOfStatement = statement.substring(psnOfYou + 3, psnOfMe).trim();
         return "What makes you think that I " + restOfStatement + " you?";
      }

     /**  ADD THIS
       * Take a statement with "I <something> you" and transform it into 
       * "Why do you <something> me?"
       * @param statement the user statement, assumed to contain "I" followed by something "you"
       * @return the transformed statement
       */
      private String transformIMeStatement(String statement)
      {
        // ADD CODE HERE
        return "Why do you...";
      }

      /**
       * Search for one word in phrase.  The search is not case sensitive.
       * This method will check that the given goal is not a substring of a longer string
       * (so, for example, "I know" does not contain "no").  
       * @param statement the string to search
       * @param goal the string to search for
       * @param startPos the character of the string to begin the search at
       * @return the index of the first occurrence of goal in statement or -1 if it's not found
       */
      private int findKeyword(String statement, String goal, int startPos)
      {
         String phrase = statement.trim();
         //  The only change to incorporate the startPos is in the line below
         int psn = phrase.toLowerCase().indexOf(goal.toLowerCase(), startPos);
  
         //  Refinement--make sure the goal isn't part of a word 
         while (psn >= 0) 
         {
            //  Find the string of length 1 before and after the word
            String before = " ", after = " "; 
            if (psn > 0)
            {
               before = phrase.substring (psn - 1, psn).toLowerCase();
            }
            if (psn + goal.length() < phrase.length())
            {
               after = phrase.substring(psn + goal.length(), psn + goal.length() + 1).toLowerCase();
            }
   
            //  If before and after aren't letters, we've found the word
            if (((before.compareTo ("a") < 0 ) || (before.compareTo("z") > 0))  //  before is not a letter
            && ((after.compareTo ("a") < 0 ) || (after.compareTo("z") > 0)))
            {
               return psn;
            }
   
            //  The last position didn't work, so let's find the next, if there is one.
            psn = phrase.indexOf(goal.toLowerCase(), psn + 1);
   
         }
  
         return -1;
      }
 
      /**
       * Search for one word in phrase.  The search is not case sensitive.
       * This method will check that the given goal is not a substring of a longer string
       * (so, for example, "I know" does not contain "no").  The search begins at the beginning of the string.  
       * @param statement the string to search
       * @param goal the string to search for
       * @return the index of the first occurrence of goal in statement or -1 if it's not found
       */
      private int findKeyword(String statement, String goal)
      {
         return findKeyword (statement, goal, 0);
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
      
	  public static void main(String[] args)
	  {
		Magpie4 maggie = new Magpie4();
		String statement = "I want to build a robot.";
		System.out.println("Statement: " + statement);
		System.out.println("Response: " + maggie.getResponse(statement));	
	  }

   }
   
.. |Java Visualizer| raw:: html

   <a href="http://www.pythontutor.com/visualize.html#code=public%20class%20Magpie4%0A%20%20%20%7B%20%0A%20%20%20%20%20%20public%20String%20getResponse%28String%20statement%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20String%20response%20%3D%20%22%22%3B%0A%20%20%20%20%20%20%20%20%20if%20%28statement.length%28%29%20%3D%3D%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20response%20%3D%20%22Say%20something,%20please.%22%3B%0A%0A%20%20%20%20%20%20%20%20%20else%20if%20%28findKeyword%28statement,%20%22no%22%29%20%3E%3D%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20response%20%3D%20%22Why%20so%20negative%3F%22%3B%0A%20%20%20%20%20%20%20%20%20else%20if%20%28findKeyword%28statement,%20%22mother%22%29%20%3E%3D%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7C%7C%20findKeyword%28statement,%20%22father%22%29%20%3E%3D%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7C%7C%20findKeyword%28statement,%20%22sister%22%29%20%3E%3D%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7C%7C%20findKeyword%28statement,%20%22brother%22%29%20%3E%3D%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20response%20%3D%20%22Tell%20me%20more%20about%20your%20family.%22%3B%0A%0A%20%20%20%20%20%20%20%20%20else%20if%20%28findKeyword%28statement,%20%22I%20want%20to%22,%200%29%20%3E%3D%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20response%20%3D%20transformIWantToStatement%28statement%29%3B%0A%20%20%20%20%20%20%20%20%20else%20if%20%28findKeyword%28statement,%20%22I%20want%22,%200%29%20%3E%3D%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20response%20%3D%20transformIWantStatement%28statement%29%3B%0A%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20int%20psn%20%3D%20findKeyword%28statement,%20%22you%22,%200%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28psn%20%3E%3D%200%20%26%26%20findKeyword%28statement,%20%22me%22,%20psn%29%20%3E%3D%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20response%20%3D%20transformYouMeStatement%28statement%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20response%20%3D%20getRandomResponse%28%29%3B%0A%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20return%20response%3B%0A%20%20%20%20%20%20%7D%0A%20%0A%20%20%20%20%20%20private%20String%20transformIWantToStatement%28String%20statement%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20statement%20%3D%20statement.trim%28%29%3B%0A%20%20%20%20%20%20%20%20%20String%20lastChar%20%3D%20statement.substring%28statement.length%28%29%20-%201%29%3B%0A%20%20%20%20%20%20%20%20%20if%20%28lastChar.equals%28%22.%22%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20statement%20%3D%20statement.substring%280,%20statement.length%28%29%20-%201%29%3B%0A%20%20%20%20%20%20%20%20%20int%20psn%20%3D%20findKeyword%20%28statement,%20%22I%20want%20to%22,%200%29%3B%0A%20%20%20%20%20%20%20%20%20String%20restOfStatement%20%3D%20statement.substring%28psn%20%2B%209%29.trim%28%29%3B%0A%20%20%20%20%20%20%20%20%20return%20%22What%20would%20it%20mean%20to%20%22%20%2B%20restOfStatement%20%2B%20%22%3F%22%3B%0A%20%20%20%20%20%20%7D%0A%20%0A%20%20%20%20%20%20private%20String%20transformIWantStatement%28String%20statement%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20statement%20%3D%20statement.trim%28%29%3B%0A%20%20%20%20%20%20%20%20%20String%20lastChar%20%3D%20statement.substring%28statement.length%28%29%20-%201%29%3B%0A%20%20%20%20%20%20%20%20%20if%20%28lastChar.equals%28%22.%22%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20statement%20%3D%20statement.substring%280,%20statement.length%28%29%20-%201%29%3B%0A%20%20%20%20%20%20%20%20%20int%20psn%20%3D%20findKeyword%20%28statement,%20%22I%20want%22,%200%29%3B%0A%20%20%20%20%20%20%20%20%20String%20restOfStatement%20%3D%20statement.substring%28psn%20%2B%207%29%3B%0A%20%20%20%20%20%20%20%20%20return%20%22Would%20you%20really%20be%20happy%20if%20you%20had%20%22%20%2B%20restOfStatement%20%2B%20%22%3F%22%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20private%20String%20transformYouMeStatement%28String%20statement%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20statement%20%3D%20statement.trim%28%29%3B%0A%20%20%20%20%20%20%20%20%20String%20lastChar%20%3D%20statement.substring%28statement.length%28%29%20-%201%29%3B%0A%20%20%20%20%20%20%20%20%20if%20%28lastChar.equals%28%22.%22%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20statement%20%3D%20statement.substring%280,%20statement.length%28%29%20-%201%29%3B%20%20%0A%20%20%20%20%20%20%20%20%20int%20psnOfYou%20%3D%20findKeyword%20%28statement,%20%22you%22,%200%29%3B%0A%20%20%20%20%20%20%20%20%20int%20psnOfMe%20%3D%20findKeyword%20%28statement,%20%22me%22,%20psnOfYou%20%2B%203%29%3B%0A%20%20%0A%20%20%20%20%20%20%20%20%20String%20restOfStatement%20%3D%20statement.substring%28psnOfYou%20%2B%203,%20psnOfMe%29.trim%28%29%3B%0A%20%20%20%20%20%20%20%20%20return%20%22What%20makes%20you%20think%20that%20I%20%22%20%2B%20restOfStatement%20%2B%20%22%20you%3F%22%3B%0A%20%20%20%20%20%20%7D%0A%20%0A%20%20%20%20%20%20private%20int%20findKeyword%28String%20statement,%20String%20goal,%20int%20startPos%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20String%20phrase%20%3D%20statement.trim%28%29%3B%0A%20%20%20%20%20%20%20%20%20int%20psn%20%3D%20phrase.toLowerCase%28%29.indexOf%28goal.toLowerCase%28%29,%20startPos%29%3B%0A%20%20%20%20%20%20%20%20%20while%20%28psn%20%3E%3D%200%29%20%0A%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20String%20before%20%3D%20%22%20%22,%20after%20%3D%20%22%20%22%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28psn%20%3E%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20before%20%3D%20phrase.substring%20%28psn%20-%201,%20psn%29.toLowerCase%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28psn%20%2B%20goal.length%28%29%20%3C%20phrase.length%28%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20after%20%3D%20phrase.substring%28psn%20%2B%20goal.length%28%29,%20psn%20%2B%20goal.length%28%29%20%2B%201%29.toLowerCase%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%28%28before.compareTo%20%28%22a%22%29%20%3C%200%20%29%20%7C%7C%20%28before.compareTo%28%22z%22%29%20%3E%200%29%29%20%20%26%26%20%28%28after.compareTo%20%28%22a%22%29%20%3C%200%20%29%20%7C%7C%20%28after.compareTo%28%22z%22%29%20%3E%200%29%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20psn%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20psn%20%3D%20phrase.indexOf%28goal.toLowerCase%28%29,%20psn%20%2B%201%29%3B%0A%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20return%20-1%3B%0A%20%20%20%20%20%20%7D%0A%20%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20private%20int%20findKeyword%28String%20statement,%20String%20goal%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20return%20findKeyword%20%28statement,%20goal,%200%29%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20private%20String%20getRandomResponse%28%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20return%20%22Interesting,%20tell%20me%20more.%22%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20public%20static%20void%20main%28String%5B%5D%20args%29%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20Magpie4%20maggie%20%3D%20new%20Magpie4%28%29%3B%0A%20%20%20%20%20%20%20%20String%20statement%20%3D%20%22I%20want%20to%20build%20a%20robot.%22%3B%0A%20%20%20%20%20%20%20%20System.out.println%28%22Statement%3A%20%22%20%2B%20statement%29%3B%0A%20%20%20%20%20%20%20%20System.out.println%28%22Response%3A%20%22%20%2B%20maggie.getResponse%28statement%29%29%3B%20%20%20%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%7D&cumulative=false&heapPrimitives=false&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>
   

.. This is giving a code too long error:  http://www.pythontutor.com/visualize.html#code=public+class+Magpie4%0A+++%7B%0A+++%0A++++++public+String+getGreeting(%29%0A++++++%7B%0A+++++++++return+%22Hello,+let's+talk.%22%3B%0A++++++%7D%0A+%0A++++++public+String+getResponse(String+statement%29%0A++++++%7B%0A+++++++++String+response+%3D+%22%22%3B%0A+++++++++if+(statement.length(%29+%3D%3D+0%29%0A+++++++++%7B%0A++++++++++++response+%3D+%22Say+something,+please.%22%3B%0A+++++++++%7D%0A%0A+++++++++else+if+(findKeyword(statement,+%22no%22%29+%3E%3D+0%29%0A+++++++++%7B%0A++++++++++++response+%3D+%22Why+so+negative%3F%22%3B%0A+++++++++%7D%0A+++++++++else+if+(findKeyword(statement,+%22mother%22%29+%3E%3D+0%0A++++++++++++++++++%7C%7C+findKeyword(statement,+%22father%22%29+%3E%3D+0%0A++++++++++++++++++%7C%7C+findKeyword(statement,+%22sister%22%29+%3E%3D+0%0A++++++++++++++++++%7C%7C+findKeyword(statement,+%22brother%22%29+%3E%3D+0%29%0A+++++++++%7B%0A++++++++++++response+%3D+%22Tell+me+more+about+your+family.%22%3B%0A+++++++++%7D%0A%0A+++++++++else+if+(findKeyword(statement,+%22I+want+to%22,+0%29+%3E%3D+0%29%0A+++++++++%7B%0A++++++++++++response+%3D+transformIWantToStatement(statement%29%3B%0A+++++++++%7D%0A++%0A+++++++++else+if+(findKeyword(statement,+%22I+want%22,+0%29+%3E%3D+0%29%0A+++++++++%7B%0A++++++++++++response+%3D+transformIWantStatement(statement%29%3B%0A+++++++++%7D%0A%0A+++++++++else%0A+++++++++%7B%0A++++++++++++int+psn+%3D+findKeyword(statement,+%22you%22,+0%29%3B%0A%0A++++++++++++if+(psn+%3E%3D+0%0A++++++++++++++++%26%26+findKeyword(statement,+%22me%22,+psn%29+%3E%3D+0%29%0A++++++++++++%7B%0A+++++++++++++++response+%3D+transformYouMeStatement(statement%29%3B%0A++++++++++++%7D%0A++++++++++++else%0A++++++++++++%7B%0A+++++++++++++++response+%3D+getRandomResponse(%29%3B%0A++++++++++++%7D%0A+++++++++%7D%0A+++++++++return+response%3B%0A++++++%7D%0A+%0A++++++private+String+transformIWantToStatement(String+statement%29%0A++++++%7B%0A+++++++++statement+%3D+statement.trim(%29%3B%0A+++++++++String+lastChar+%3D+statement.substring(statement%0A+++++++++++++++++++++++++++++++++++++++++++++++.length(%29+-+1%29%3B%0A+++++++++if+(lastChar.equals(%22.%22%29%29%0A+++++++++%7B%0A++++++++++++statement+%3D+statement.substring(0,+statement%0A+++++++++++++++++++++++++++++++++++++++++++++++.length(%29+-+1%29%3B%0A+++++++++%7D%0A+++++++++int+psn+%3D+findKeyword+(statement,+%22I+want+to%22,+0%29%3B%0A+++++++++String+restOfStatement+%3D+statement.substring(psn+%2B+9%29.trim(%29%3B%0A+++++++++return+%22What+would+it+mean+to+%22+%2B+restOfStatement+%2B+%22%3F%22%3B%0A++++++%7D%0A+%0A++++++private+String+transformIWantStatement(String+statement%29%0A++++++%7B%0A+++++++++//++Remove+the+final+period,+if+there+is+one%0A+++++++++statement+%3D+statement.trim(%29%3B%0A+++++++++String+lastChar+%3D+statement.substring(statement%0A+++++++++++++++++++++++++++++++++++++++++++++++.length(%29+-+1%29%3B%0A+++++++++if+(lastChar.equals(%22.%22%29%29%0A+++++++++%7B%0A++++++++++++statement+%3D+statement.substring(0,+statement%0A+++++++++++++++++++++++++++++++++++++++++++++++.length(%29+-+1%29%3B%0A+++++++++%7D%0A+++++++++int+psn+%3D+findKeyword+(statement,+%22I+want%22,+0%29%3B%0A+++++++++String+restOfStatement+%3D+statement.substring(psn+%2B+7%29%3B%0A+++++++++return+%22Would+you+really+be+happy+if+you+had+%22+%2B+restOfStatement+%2B+%22%3F%22%3B%0A++++++%7D%0A%0A++++++private+String+transformYouMeStatement(String+statement%29%0A++++++%7B%0A+++++++++statement+%3D+statement.trim(%29%3B%0A+++++++++String+lastChar+%3D+statement.substring(statement%0A+++++++++++++++++++++++++++++++++++++++++++++++.length(%29+-+1%29%3B%0A+++++++++if+(lastChar.equals(%22.%22%29%29%0A+++++++++%7B%0A++++++++++++statement+%3D+statement.substring(0,+statement%0A+++++++++++++++++++++++++++++++++++++++++++++++.length(%29+-+1%29%3B%0A+++++++++%7D%0A++%0A+++++++++int+psnOfYou+%3D+findKeyword+(statement,+%22you%22,+0%29%3B%0A+++++++++int+psnOfMe+%3D+findKeyword+(statement,+%22me%22,+psnOfYou+%2B+3%29%3B%0A++%0A+++++++++String+restOfStatement+%3D+statement.substring(psnOfYou+%2B+3,+psnOfMe%29.trim(%29%3B%0A+++++++++return+%22What+makes+you+think+that+I+%22+%2B+restOfStatement+%2B+%22+you%3F%22%3B%0A++++++%7D%0A%0A++++++%0A++++++private+int+findKeyword(String+statement,+String+goal,+int+startPos%29%0A++++++%7B%0A+++++++++String+phrase+%3D+statement.trim(%29%3B%0A+++++++++int+psn+%3D+phrase.toLowerCase(%29.indexOf(goal.toLowerCase(%29,+startPos%29%3B%0A++%0A+++++++++while+(psn+%3E%3D+0%29+%0A+++++++++%7B%0A++++++++++++String+before+%3D+%22+%22,+after+%3D+%22+%22%3B+%0A++++++++++++if+(psn+%3E+0%29%0A++++++++++++%7B%0A+++++++++++++++before+%3D+phrase.substring+(psn+-+1,+psn%29.toLowerCase(%29%3B%0A++++++++++++%7D%0A++++++++++++if+(psn+%2B+goal.length(%29+%3C+phrase.length(%29%29%0A++++++++++++%7B%0A+++++++++++++++after+%3D+phrase.substring(psn+%2B+goal.length(%29,+psn+%2B+goal.length(%29+%2B+1%29.toLowerCase(%29%3B%0A++++++++++++%7D%0A+++%0A++++++++++++if+(((before.compareTo+(%22a%22%29+%3C+0+%29+%7C%7C+(before.compareTo(%22z%22%29+%3E+0%29%29++%26%26+((after.compareTo+(%22a%22%29+%3C+0+%29+%7C%7C+(after.compareTo(%22z%22%29+%3E+0%29%29%29%0A++++++++++++%7B%0A+++++++++++++++return+psn%3B%0A++++++++++++%7D%0A+++%0A++++++++++++psn+%3D+phrase.indexOf(goal.toLowerCase(%29,+psn+%2B+1%29%3B%0A+++%0A+++++++++%7D%0A++%0A+++++++++return+-1%3B%0A++++++%7D%0A+%0A++++++%0A++++++private+int+findKeyword(String+statement,+String+goal%29%0A++++++%7B%0A+++++++++return+findKeyword+(statement,+goal,+0%29%3B%0A++++++%7D%0A%0A++++++private+String+getRandomResponse(%29%0A++++++%7B%0A+++++++++final+int+NUMBER_OF_RESPONSES+%3D+4%3B%0A+++++++++double+r+%3D+Math.random(%29%3B%0A+++++++++int+whichResponse+%3D+(int%29(r+*+NUMBER_OF_RESPONSES%29%3B%0A+++++++++String+response+%3D+%22%22%3B%0A++%0A+++++++++if+(whichResponse+%3D%3D+0%29%0A+++++++++%7B%0A++++++++++++response+%3D+%22Interesting,+tell+me+more.%22%3B%0A+++++++++%7D%0A+++++++++else+if+(whichResponse+%3D%3D+1%29%0A+++++++++%7B%0A++++++++++++response+%3D+%22Hmmm.%22%3B%0A+++++++++%7D%0A+++++++++else+if+(whichResponse+%3D%3D+2%29%0A+++++++++%7B%0A++++++++++++response+%3D+%22Do+you+really+think+so%3F%22%3B%0A+++++++++%7D%0A+++++++++else+if+(whichResponse+%3D%3D+3%29%0A+++++++++%7B%0A++++++++++++response+%3D+%22You+don't+say.%22%3B%0A+++++++++%7D%0A%0A+++++++++return+response%3B%0A++++++%7D%0A++++++%0A%09++public+static+void+main(String%5B%5D+args%29%0A%09++%7B%0A%09%09Magpie4+maggie+%3D+new+Magpie4(%29%3B%0A%09%09String+statement+%3D+%22I+want+to+build+a+robot.%22%3B%0A%09%09System.out.println(%22Statement%3A+%22+%2B+statement%29%3B%0A%09%09System.out.println(%22Response%3A+%22+%2B+maggie.getResponse(statement%29%29%3B%09%0A%09++%7D%0A%0A+++%7D&mode=display&origin=opt-frontend.js&cumulative=false&heapPrimitives=false&textReferences=false&py=java&rawInputLstJSON=%5B%5D&curInstr=0" target="_blank"  style="text-decoration:underline">Java visualizer</a>
   



Exercises: 
-------------

In this activity, the chatbot is altered to look not only for keywords, but also specific phrases.  Magpie4.java adds two new methods, transformIWantToStatement and transformYouMeStatement and getResponse has been modified to add tests to find "I want to something" statements and "You something me" statements.


Look at the code. See how it handles “I want to” and you/me statements.

.. |repl.it version 4| raw:: html

   <a href="https://repl.it/@BerylHoffman/Magpie-ChatBot-Lab-v4" target="_blank">repl.it version 4</a>
   

Then add two new methods, transformIWantStatement and transformIYouStatement, and calls to each as described below. Alter the code either above in the active code window or on |repl.it version 4| or in an IDE of your choice:

* In a method transformIWantStatement, have it respond to “I want something” statements with “Would you really be happy if you had something?” You can use the already written transformIWantToStatement method as a guide. In doing this, you need to be careful about where you place the call to the method so it calls the right one. Test with the following:

  * Statement: I want fried chicken.
  * Response: Would you really be happy if you had fried chicken?
  
* In a method transformIYouStatement, have it respond to statements of the form "I something you" with the restructuring "Why do you something me?". You can use the transformYouMeStatement method as a guide. Test with the following:

  * Statement: I like you.
  * Response: Why do you like me?
  
Find an example of when this structure does not work well. How can you improve it?


