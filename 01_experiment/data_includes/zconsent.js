newTrial("consent",
    newHtml("consent.html")
        .log()
        .print()
    ,
    newText("<br>")
        .print()
    ,
    newTextInput("ID")
        .log()
        .before( newText("before", "<p>Please enter your unique participant ID</p>") )
        .center()
        .print()
    ,
    newText("warning", "Please enter your ID first")
        .color("red")
        .bold()
    ,
    newText("<br>")
        .print()
    ,
    newButton("consent button", "By clicking this button I indicate my consent")
        .center()
        .print()
        .wait(  // Make sure the TextInput has been filled
            getTextInput("ID")
                .testNot.text("")
                .failure( getText("warning").print() )
        )
    ,   // Create a Var element before going to the next screen
    newText("<br>")
        .print()
    ,
    newText("<br>")
        .print()
    ,
    newVar("ID")
        .global()          // Make it globally accessible
        .set( getTextInput("ID") )
)
.log( "ID" , getVar("ID") )
.setOption("hideProgressBar", true); // Do not show the progress bar on first screen