newTrial("instructions1",

    newText("In the following experiment, you will see brief stories about some friends.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Each story will be accompanied by an image, and some text describing the image.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("After you see the image and the text introducing the story, one character will ask a question, and another will answer.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Your job is to evaluate the answer, given the story and the image you see.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    
newTrial("instructions2",

    newText("To make your evaluation, you will be provided with a slider scale from <b>no</b> to <b>yes</b>.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newScale("natural", 5)
        .slider()
        .center()
        .before( newText("left", "No") )
        .after(  newText("right", "Yes")  )
        .print()
        .wait()
    ,
    newTimer("wait2", 1000)
        .start()
        .wait()
    ,

    newButton("next", "Next.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    
newTrial("endinstructions",

    newText("Great! Now you're ready for the experiment.")
        .center()
        .print()
    ,  
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Make sure you're in a quiet room with no distractions.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Once you start the experiment, do not stop until the end.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the space bar when you're ready to start.")
        .center()
        .print()
    ,
    newKey(" ")
        .wait()
    );