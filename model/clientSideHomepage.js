function sendNotes(){
    var notes = $("#notes").val();
    var keyboard = {"notes": notes};
    $.post("/addJournaldb", {notes:notes}, function(error, res){
        if(!error)
        {
            alert("Note succesfully created");
        } else {
            console.log(error);
            alert("error");
        }
    })
    alert("Note added!");
}