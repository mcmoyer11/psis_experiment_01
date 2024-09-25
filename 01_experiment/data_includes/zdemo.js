
newTrial("demo",
    defaultText
        .center()
        .print()
    ,
    newText("<b>The experiment is now finished!</b>")
        .center()
        .print()
    ,
    newText("<br> <br> <br>")
        .print()
    ,
    newText("Please take a couple of minutes to complete the survey below.")
        .center()
        .print()
    ,
    newText("<br> <br> <br>")
        .print()
    ,
    newTextInput("Gender")
        .log()
        .before( newText("before", "Please enter your gender.") )
        .center()
        .print()
    ,
    newText("<br> <br>")
        .print()
    ,
    newTextInput("Education")
        .log()
        .before( newText("before", "Please enter your highest level of education.") )
        .center()
        .print()
    ,
    newText("<br> <br>")
        .print()
    ,
    newTextInput("NativeLang")
        .log()
        .before( newText("before", "Please enter your first/native language.") )
        .center()
        .print()
    ,
    newText("<br> <br>")
        .print()
    ,
    newTextInput("OtherLangs")
        .before( newText("before", "Do you speak any other languages?") )
        .center()
        .print()
    ,
    newText("<br> <br>")
        .print()
    ,
    newTextInput("Difficulty")
        .before( newText("before", "Did you find this task difficult?") )
        .center()
        .print()
    ,   
    newText("<br> <br>")
        .print()
    ,
    newTextInput("Comments")
        .before( newText("before", "Please enter any other comments you have about the task.") )
        .center()
        .print()
    ,
    newText("warning", "Please enter your native/first language.")
        .color("red")
        .bold()
    ,
    newButton("Submit")
        .center()
        .print()
        .wait(  // Make sure the TextInput has been filled
            getTextInput("NativeLang")
                .testNot.text("")
                .failure( getText("warning").print() )
        )
    ,
    newVar("NativeLang")
        .global()
        .set( getTextInput("NativeLang") )
    ,
    newVar("OtherLangs")
        .global()
        .set( getTextInput("OtherLangs") )
)
.log( "NativeLang" , getVar("NativeLang") )
.log( "OtherLangs" , getVar("OtherLangs") )
.log( "Gender" , getVar("Gender") )
.log( "Education" , getVar("Education") )
.log( "Comments" , getVar("Comments") );
