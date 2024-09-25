PennController.ResetPrefix(null)
// DebugOff()
Sequence( randomize("test")
    // "intro","Consent","Participantid","Questionsparticipant","game1","counter","instructions","instructions2",
    // "endintructions",
    // "warmup1","mid warmup","vartest","warmup2","end of warmup",
    // "reminder",
    // randomize("test"),
    // "debrief",
    // SendResults(),
    // "outro"
    )


// What is in Header happens at the beginning of every single trial
Header(
    //We will use this global Var element later to store the participant's name
    newVar("ParticipantName")
       .global()
   ,
    // newTimer(250)
    //   .start()
    //   .wait()

    defaultText
        .print()
)

Template("locatives_long.csv", row =>//.setGroupColumn( "Group" ),
    newTrial( "test",
    
        newText("Context", row.Context_sentence)
            .center()
            .print()
        ,
        newKey("spacebar1"," ")
            .wait()
        , 
        newText("Order", row.Order)
            .center()
            .print()
        ,
        newKey("spacebar2"," ")
            .wait()
        , 
        newImage("image", row.ImageFileName)
            .size(700, 350)
            .center()
            .print()
        ,
        // newImage("image", row.Image_File_Name)
        //     .size(600, 400)
        //     .center()
        //     .print()
        // ,
        newKey("spacebar3"," ")
            .wait()
        , 
        newText("Question", row.Question)
            .center()
            .print()
        ,
        newKey("spacebar4"," ")
            .wait()
        , 
        newText("Answer", row.Answer)
            .center()
            .print()
        ,
        newKey("spacebar5"," ")
            .wait()
        , 
        newText("Judgement", row.DM)
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
            // Only validate a click on Start when inputID has been filled
            // .wait(  // Make sure the TextInput has been filled
            //     getTextInput("inputID")
            //         .testNot.text("")
            //         .failure( getText("warning").print() )
            // )
    
    )
    .log( "TrialType" , row.TrialType )
    .log( "Number" , row.Number )
    .log( "Item" , row.Item )
    // .log( "Group", row.Group)
    .log( "Condition", row.Condition)
    .log( "ImageFileName", row.ImageFileName)

)


SendResults()

// Spaces and linebreaks don't matter to the script: we've only been using them for the sake of readability
newTrial( "bye" ,
    newText("Thank you for your participation!")
        .print()
    ,
    newButton()
        .wait()  // Wait for a click on a non-displayed button = wait here forever
)
.setOption( "countsForProgressBar" , false )

// Make sure the progress bar is full upon reaching this last (non-)trial
    