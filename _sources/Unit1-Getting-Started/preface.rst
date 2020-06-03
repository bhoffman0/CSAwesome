.. .. qnum::
   :prefix: 0-1-
   :start: 0

Preface
===============

..	index::
	single: license
	
CSAwesome is a free AP CS A curriculum that was created in 2019 by adapting the AP CS A Java Review e-book written by Dr. Barbara Ericson, while she was a senior research scientist at Georgia Tech, currently Assistant Professor of Information at University of Michigan. She published this book using a modified BSD license to encourage people to use it, change it, and modify it for their own purposes. 

CSAwesome is an official College Board CS A curriculum and PD provider as of 2020. Dr. Beryl Hoffman, Associate Professor of Computer Science at Elms College, MA, created and adapted the CSAwesome curriculum to follow the College Board CS A 2019 guidelines with the support of a 2019 Google CS-ER grant and the Mobile CSP project (https://www.mobile-csp.org).  Special thanks to Barb Ericson, Beth Simon, John Figliulo, Pauline Lake, Jennifer Rosato, Kim Evelti, Becky Stacey, Art Lopez, and Kyle Gillette for feedback, edits, and ideas. In the summer 2020, we are very grateful to CSA teacher extraordinaire Kate McDonnell who created JUnit test helper code for our Java server, and many volunteers who are helping to add junit tests to each active code to make them auto-gradable. Our hopes are that CSP teachers and students can use this interactive book to help transition from AP CSP to AP CS A.

.. |form| raw:: html

   <a href="https://forms.gle/4gMBsv4W71vG5mNe8" target="_blank" style="text-decoration:underline">form</a>
   
If you see errors or bugs, please report them with this |form|.


**Acknowledgements**


We gratefully acknowledge the use of the Runestone platform and Jobe server run by Brad Miller, and the past use of the Jobe server from the University of Canterbury, New Zealand. 

Special thanks also to the following people that we have collaborated with:

* Jeff (Jochen) Rick made great contributions to the Parsons problems (mixed up code problems).

* Philip Guo who created the Java Visualizer, which we link to.  We would love to embed it in this ebook, but need someone to do that.

* Paul Resnick at the University of Michigan for hosting us all at the summer 2016 hackathon for Runestone Interactive and for his input into the design of the instructor dashboard.

* Brad Miller and David Ranum and the students at Luther College, who created the Runestone Interactive platform.  Brad Miller has been keeping it going for years.

Thank you also to the National Science Foundation for supporting our ebook work through several grants: Grant No. 1432300, 1138378, and 1228352.

Any opinions, findings, and conclusions or recommendations expressed in this material
are those of the authors and do not necessarily reflect the views of the National Science Foundation.

Google has supported this work through their Google RISE Awards: TFR14-03256, 	TFR14-00363, and 	TFR-16-01052.  They have also supported our efforts
to help more under-represented students succeed in their AP CS A courses and on the exam.

Any opinions, findings, and conclusions or recommendations expressed in this material
are those of the authors and do not necessarily reflect the views of the Google.


**Contributors**


The following people have contributed to this ebook:

Several students at Georgia Tech have helped review the eBook:

* Emily Cahil
* Bre'Ana Deen
* Kantwon Rogers
* Hemanth Koralla
* Ikenna Omekam
* Gabriel Galarza
* Ja'Quan Taylor
* Nimish Todi
* Ashraf Younis
* Sana Ajani
* Yamini Nambiar
* Andrew Teachout
* Sydni Peterson
* Bhavika Devnani
* Stephanie Remy

Several students at the University of California, San Diego have been involved in creating multiple choice questions for the EBook.

* Matthew Crooks
* Miranda Go
* Valerie Hon
* Sophia Krause-Levy
* Shauna Sapper

Many others have been involved in the creation of content for the eBook (including high school students).

* Atiba Nkosi Kee
* Robert McKenzie - created videos explaining concepts (arrays, interfaces, searching)
* Nicole Guobadia - created videos explaining concepts (recursion)
* Daniel Boaitey - created free response videos from 2014 questions.
* Christy Zachary - created free response videos and Java executable examples
* Javier Rodriguez - added a new exam (non-timed #1)
* Gabby Jackson - added new exams (non-timed #2, #3, and #4)
* Sofia Moin - added a video on variables
* Gerald Nash - added many free response questions for arrays, 2D arrays, and lists
* Sabrina Seibel - added free response question 4 from 2016 - StringFormatter and added questions to the code practice problems at the end of the 2d array chapter and the OO chapter.
* Julian Hamelberg - worked on free response questions - seating chart A and B
* Christine Hsieh - added mixed up code problems at the end of the array chapter and code practice problems
* Carlos Diaz - fixed problems and added code highlights
* Avery Rosh - found an error in one of the 2D array questions
* JP Fasano - found an error in one of the non-timed exams
* Srikar Yendapally - added code problems to the 2D array chapter
* Kiran Ruston - added new questions to the free response problems at the end of the ebook.

**License**

.. figure:: https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png
   :align: center
   
.. |creative commons| raw:: html

   <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" style="text-decoration:underline">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>

This work is licensed under a |creative commons|.

Barbara Ericson `barbarer@umich.edu <mailto://barbarer@umich.edu>`_ 
2014
All rights reserved.

Beryl Hoffman `hoffmanb@elms.edu <mailto://hoffmanb@elms.edu>`_ 
2019
All rights reserved.


Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
