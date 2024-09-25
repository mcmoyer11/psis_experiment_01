Template(GetTable("training.csv"),
    
    // "LocativesStimuli.csv", row => 
    row => newTrial( "train",
    
        newText("Context", row.Context_sentence)
            .center()
            .print()
        ,
        newText("break", "<br>")
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
        // newImage("image", row.ImageFileName)
        //     .size(600, 450)
        //     .center()
        //     .print()
        // ,
        newText("This is where the image should go")
            .center()
            .print()
        ,    
        newKey("spacebar3"," ")
            .wait()
        , 
        newText("Question", row.Question)
            .center()
            .print()
        ,
        newText("break", "<br>")
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
        newText("break", "<br>")
            .center()
            .print()
        ,
        newText("Judgement", row.DM)
            .center()
            .print()
        ,
        newText("break", "<br>")
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
    // .log( "ImageFileName", row.ImageFileName)

)