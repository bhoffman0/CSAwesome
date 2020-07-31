var bhtoc = document.querySelector(".globaltoc");
var bhtoclist;        
if (bhtoc != undefined) {
    bhtoclist = bhtoc.children;
    if (bhtoclist != "undefined" && bhtoclist[0].innerText.startsWith("1"))
    {
      bhtoclist[0].querySelector("a").innerHTML = "1.1 Getting Started";
      bhtoclist[1].querySelector("a").innerHTML = "- 1.1.1 Preface";
      bhtoclist[2].querySelector("a").innerHTML = "- 1.1.2. About the AP CS A Exam";
      bhtoclist[3].querySelector("a").innerHTML = "- 1.1.3. Transitioning from AP CSP to AP CS A";
      bhtoclist[4].querySelector("a").innerHTML = "- 1.1.4. Java Development Environments";
      bhtoclist[5].querySelector("a").innerHTML = "- 1.1.5. Growth Mindset";
      bhtoclist[6].querySelector("a").innerHTML = "- 1.1.6. Pretest for the AP CS A Exam";
      bhtoclist[7].querySelector("a").innerHTML = "- 1.1.7. Survey";
      bhtoclist[8].querySelector("a").innerHTML = "1.2. Why Programming? Why Java?";
      bhtoclist[9].querySelector("a").innerHTML = "1.3. Variables and Data Types";
      bhtoclist[10].querySelector("a").innerHTML = "1.4. Expressions and Assignment Statements";
      bhtoclist[11].querySelector("a").innerHTML = "1.5. Compound Assignment Operators";
      bhtoclist[12].querySelector("a").innerHTML = "1.6. Casting and Ranges of Variables";
      bhtoclist[13].querySelector("a").innerHTML = "1.7. Unit 1 Summary";
      bhtoclist[14].querySelector("a").innerHTML = "1.8. Unit 1 Mixed Up Code Practice";
      bhtoclist[15].querySelector("a").innerHTML = "1.9. Unit 1 Coding Practice";
      bhtoclist[16].querySelector("a").innerHTML = "1.10. Multiple Choice Exercises";

   }
}