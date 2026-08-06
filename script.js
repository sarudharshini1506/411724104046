let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function saveNote(){

    let id = document.getElementById("noteId").value;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    if(title=="" || description==""){
        alert("Enter all fields");
        return;
    }

    if(id==""){
        notes.push({
            title:title,
            description:description
        });
    }
    else{
        notes[id]={
            title:title,
            description:description
        };
    }

    localStorage.setItem("notes",JSON.stringify(notes));

    document.getElementById("noteId").value="";
    document.getElementById("title").value="";
    document.getElementById("description").value="";

    displayNotes();
}

function displayNotes(){

    let data="";

    for(let i=0;i<notes.length;i++){

        data += `
        <div class="note">
            <h4>${notes[i].title}</h4>
            <p>${notes[i].description}</p>

            <button onclick="editNote(${i})">Edit</button>

            <button onclick="deleteNote(${i})">Delete</button>
        </div>
        `;
    }

    document.getElementById("notes").innerHTML=data;
}

function editNote(index){

    document.getElementById("noteId").value=index;
    document.getElementById("title").value=notes[index].title;
    document.getElementById("description").value=notes[index].description;
}

function deleteNote(index){

    notes.splice(index,1);

    localStorage.setItem("notes",JSON.stringify(notes));

    displayNotes();
}