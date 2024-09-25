PennController.ResetPrefix(null)
DebugOff()

Sequence("ask_ID", "ask_info", "Instructions", rshuffle("training"), 
rshuffle("test"), "ask_comment","send", "end")

// This is run at the beginning of each trial
Header(
    newVar("ID")
        .global()
    )
        .log("ID", getVar("ID") 
) // Add the ID to all trials' results lines

// Ask ID
newTrial("ask_ID",
    defaultText.cssContainer({"margin-bottom":"1em"})
        .center(),
    newText("instructions-id", "Veuillez entrer un identifiant et cliquer sur le bouton ci-dessous pour commencer.").print(),
    newTextInput("input_ID").log().cssContainer({"margin-bottom":"1em"})
        .center()
        .print(),
    newText("warning", "<br> Veuillez entrer un identifiant.")
        .color("red")
        .bold(),    
    newButton("wait", "- Cliquez pour commencer -")
        .center()
        .print()
    .wait(getTextInput("input_ID")
        .testNot.text("")
        .failure( 
            getText("warning")
            .print() 
            )
    ),
    newVar("ID")
        .global()
        .set(
            getTextInput("input_ID")
            )
)

// Consent form
newTrial("ask_info",
    newText("text_1", "Veuillez entrer les informations ci-dessous :<br><br>")
        .center()
        .print(),
    newText("ask_age", "Age :"),
    newTextInput("input_age").log(),
    
    newText("ask_gender", "Genre :"),
    newTextInput("input_gender").log(),    
    
    newText("ask_nativeL", "Langue maternelle :"),
    newTextInput("input_nativeL").log(),  
    
    newText("ask_otherL", "Parlez-vous d'autres langues ?"),
    newTextInput("input_otherL").log(),    
    
    newText("ask_otherLlist", "Si oui, lesquelles ?"),
    newTextInput("input_otherLlist").log(),  
    
    newCanvas("info_part", 600,170)
        .add( 1, 10, getText("ask_age"))
        .add(230, 10, getTextInput("input_age"))
        .add( 1, 40, getText("ask_gender"))
        .add(230, 40, getTextInput("input_gender"))
        .add( 1, 70, getText("ask_nativeL"))
        .add(230, 70, getTextInput("input_nativeL"))
        .add( 1, 100, getText("ask_otherL"))
        .add(230, 100, getTextInput("input_otherL"))
        .add( 1, 130, getText("ask_otherLlist"))
        .add(230, 130, getTextInput("input_otherLlist"))
        .center().print(),

    newButton("continue", "- Cliquez ici pour continuer -")
        .center()
        .print()
        .wait()
)


// Instructions
newTrial("Instructions",
    defaultText.center().print(),

    newText("<h2>Instructions</h2>")
        .bold(),

    newText("<p></p>"),
    newText("pressspace", "<i> Appuyez sur </i>Espace<i>  pour faire défiler le dialogue. </i><br><p style='text-align:center'>_______")
        .print(),
    newKey("spacebar"," ")
        .wait(), 

    newText("Intro", `<p>Vous allez au théâtre avec votre ami Jordan.</p>`)
        .center()
        .print(), newKey("a"," ")
        .wait(), 
    newText("SAPrompt_p1", `<p style="text-align:center">Vous vous demandez s'il a déjà vu la pièce,</p>`)
        .center().print(), newKey("b"," ").wait(),   
    newText("SAPrompt_p2", `<p style="text-align:center">car vous savez qu'il va souvent au théâtre.</p>`)
        .center().print(), newKey("c"," ").wait(), 
    
    newText("Target", `<p> VOUS : "Jordan, tu as déjà vu cette pièce ?"</p>`)
        .center()
        .print(),newKey("d"," ")
        .wait(),
    newText("Answer", `<p> JORDAN : "Oui, mais il y a longtemps, et c'était un autre théâtre."</p>`).center().print(),newKey("e"," ").wait(),
    newText("blankspace", "_______")
        .print(),
    newText(`<p>Votre but est simplement d'<b>indiquer si le dialogue vous paraît plus ou moins naturel</b> :`).center().print(),
    newText("blankspace_____", "<p><br>")
        .print(),
    newText("left", "Ce dialogue sonne ... <br> ")
        .center().print(),    
    newText("legend",   "<i>Pas du tout naturel&nbsp;-&nbsp;&nbsp;Pas très naturel&nbsp;&nbsp;- &emsp;Ok&nbsp;&emsp;-&emsp;Assez naturel &emsp;- &emsp;Vraiment naturel</i>").center().print(),//.wait(),
    newScale("score",   "<br>&emsp;0&emsp;", "<br>&emsp;1&emsp;", "<br>&emsp;2&emsp;", "<br>&emsp;3&emsp;", "<br>&emsp;4&emsp;<br>&emsp;","<br>&emsp;5&emsp;<br>&emsp;<br>&emsp;", "<br>&emsp;6&emsp;", "<br>&emsp;7&emsp;", "<br>&emsp;8&emsp;", "<br>&emsp;9&emsp;<br>&emsp;","<br>&emsp;10&emsp;<br>&emsp;")
        .labelsPosition("bottom")
        .center().print().log().wait(),
    
    clear(),
    
    newText("<p>Ensuite, vous aurez aussi à répondre à une question sur la situation, par exemple :<br></p>").center().print(), 
    newText("comp_Q", "<p>Jordan a-t-il déjà vu cette pièce ? </p>")
    .center().print(), 
    newText("ans1", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:7em; height: 50; margin:4px'> <p style ='color:black;'> Non, jamais </p> </td></tr></table>"),
    newText("ans0", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:7em; height: 50; margin:4px'> <p style ='color:black;'> Oui, mais dans un autre théâtre </p> </td></tr></table>"),
    

    newCanvas("side-by-side", 400,200).add( 60, 10, getText("ans1")).add(210, 10, getText("ans0")).center().print(),
    

    newSelector("selection").add(getText("ans1"), getText("ans0")).log().shuffle() .wait(),
    clear(),
    newText("add", "<p>N'hésitez pas à noter ce qui vous paraît étrange et à nous envoyer vos commentaires ! <br>").print(),
    newButton("consent button", "- Cliquez ici lorsque vous êtes prêt(e) -").center().print().wait(),
)

// transition
newTrial("end",
    newText("<p align='center'><font size='5'>Merci encore pour votre aide ! </p>").center().print(),
    newText("<p align='center'><font size='4'>Vos réponses ont bien été enregistrées. Veuillez entrer le code suivant dans Prolific: C1A003Y4. Vous pouvez maintenant fermer cette fenêtre.")
        .center().print(),
    newButton("void") .wait()  
)


// transition
newTrial("ask_comment",
    newText("instructions-id", "<p align='center'> <font size='4'>Merci beaucoup pour votre aide ! <br><br> Si vous avez des commentaires, veuillez les indiquer ci-dessous  <br><br>").center().print(),
    newTextInput("feedback", "Laissez vos commentaires ici.")
    .center().log().lines(0).size(500, 200).print(),  
    newText("space", "<br><br>").print(),  
    newButton("send", "Cliquez pour envoyer vos commentaires.").center().print().wait()
)

// 6 training items at the beginning
// Trial in Template form
// Template( "list_training.csv", row =>
//     newTrial("training",
//         newButton("start_written", "- Lire le dialogue -").center().print().wait(),
//         clear(),
//         newText("Intro", `<p>${row.Intro}</b></p>`).center().print(),newKey("a", " ").wait(),
//         newText("SAPrompt_p1", `<p style="text-align:center">${row.SAPrompt_part1},</p>`).center().print(),newKey("b"," ").wait(),
//         newText("SAPrompt_p2", `<p style="text-align:center">${row.SAPrompt_part2}.</p>`).center().print(),newKey("c"," ").wait(),
//         newText("Target", `<p> VOUS : "${row.Target}"</p>`).center().print(),newKey("d"," ").wait(),
//         newText("Answer", `<p>JORDAN : "${row.Answer}"</p>`).center().print(),newKey("e"," ").wait(),
//         newText("blankspace", "<p><br>").print(),
//         newText("left", "Ce dialogue sonne ... <br> ").center().print(),
//         newText("legend",   "<i>Pas du tout naturel&nbsp;-&nbsp;&nbsp;Pas très naturel&nbsp;&nbsp;- &emsp;Ok&nbsp;&emsp;-&emsp;Assez naturel &emsp;- &emsp;Vraiment naturel</i>").center().print(),//.wait(),
//         newScale("score",   "<br>&emsp;0&emsp;", "<br>&emsp;1&emsp;", "<br>&emsp;2&emsp;", "<br>&emsp;3&emsp;", "<br>&emsp;4&emsp;<br>&emsp;","<br>&emsp;5&emsp;<br>&emsp;<br>&emsp;", "<br>&emsp;6&emsp;", "<br>&emsp;7&emsp;", "<br>&emsp;8&emsp;", "<br>&emsp;9&emsp;<br>&emsp;","<br>&emsp;10&emsp;<br>&emsp;")
//             .labelsPosition("bottom").center().print().log().wait(),
//         clear(),
//         newText("comp_Q", row.Comp_Q).center().print(), 
//         newText("ans1", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:7em; height: 50; margin:4px'> <p style ='color:black;'>" + row.Comp_Ans0 + "</p> </td></tr></table>"),
//         newText("ans0", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:7em; height: 50; margin:4px'> <p style ='color:black;'>" + row.Comp_Ans1 + "</p> </td></tr></table>"),
//         newCanvas("side-by-side", 400,200).add( 60, 50, getText("ans1")).add(210, 50, getText("ans0"))
//             .center().print(),
//         newSelector("selection")
//             .add(getText("ans1"), getText("ans0")).log().shuffle() .wait()
//      )
//     .log( "ID" , getVar("ID") )
//     .log( "Number" , row.Number )
//     .log( "Topic" , row.Topic)
//     .log( "SpeechAct" , row.SpeechAct)
//     .log( "Flavor" , row.Flavor)
//     .log( "Target" , row.Target)
//     .log( "Comp_Q" , row.Comp_Q)
//     .log( "Comp_Ans0" , row.Comp_Ans0)
//     .log( "Comp_Ans1" , row.Comp_Ans1)
// )

// Trial in Template form
Template( "list_final.csv", row =>
    newTrial("test",
        newButton("start_written", "- Lire le dialogue -").center().print().wait(),
        clear(),
        newText("Intro", `<p>${row.Intro}</b></p>`)
            .center().print(),newKey("a", " ")
            .wait(),
        
        newText("SAPrompt_p1", `<p style="text-align:center">${row.SAPrompt_part1},</p>`)
            .center().print(),newKey("b"," ").wait(),
        newText("SAPrompt_p2", `<p style="text-align:center">${row.SAPrompt_part2}.</p>`)
            .center().print(),newKey("c"," ").wait(),
        newText("Target", `<p> VOUS : "${row.Target}"</p>`)
            .center().print(),newKey("d"," ").wait(),
        newText("Answer", `<p>JORDAN : "${row.Answer}"</p>`)
            .center().print(),newKey("e"," ").wait(),
        newText("blankspace", "<p><br>")
            .print(),
        newText("left", "Ce dialogue sonne ... <br> ")
            .center().print(),
        

        newText("legend",   "<i>Pas du tout naturel&nbsp;-&nbsp;&nbsp;Pas très naturel&nbsp;&nbsp;- &emsp;Ok&nbsp;&emsp;-&emsp;Assez naturel &emsp;- &emsp;Vraiment naturel</i>")
            .center().print(),//.wait(),
        
        newScale("score",   "<br>&emsp;0&emsp;", "<br>&emsp;1&emsp;", "<br>&emsp;2&emsp;", "<br>&emsp;3&emsp;", "<br>&emsp;4&emsp;<br>&emsp;","<br>&emsp;5&emsp;<br>&emsp;<br>&emsp;", "<br>&emsp;6&emsp;", "<br>&emsp;7&emsp;", "<br>&emsp;8&emsp;", "<br>&emsp;9&emsp;<br>&emsp;","<br>&emsp;10&emsp;<br>&emsp;")
            .labelsPosition("bottom")
                .center().print().log().wait(),
        clear(),
        newText("comp_Q", row.Comp_Q)
            .center().print(), 
        newText("ans1", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:7em; height: 50; margin:4px'> <p style ='color:black;'>" + row.Comp_Ans0 + "</p> </td></tr></table>"),
        newText("ans0", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:7em; height: 50; margin:4px'> <p style ='color:black;'>" + row.Comp_Ans1 + "</p> </td></tr></table>"),
        newCanvas("side-by-side", 400,200)
            .add( 60, 50, getText("ans1"))
            .add(210, 50, getText("ans0"))
            .center().print(),
        newSelector("selection")
            .add(getText("ans1"), getText("ans0")).log().shuffle() .wait()
     )
    .log( "ID" , getVar("ID") )
    .log( "Number" , row.Number )
    .log( "Topic" , row.Topic)
    .log( "SpeechAct" , row.SpeechAct)
    .log( "Flavor" , row.Flavor)
    .log( "Target" , row.Target)
    .log( "Comp_Q" , row.Comp_Q)
    .log( "Comp_Ans0" , row.Comp_Ans0)
    .log( "Comp_Ans1" , row.Comp_Ans1)
)

SendResults( "send" )

.setOption( "countsForProgressBar" , false )
