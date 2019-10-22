const notes = [
  {
    title: "My Next Trip",
    body: "No where"
  },
  {
    title: "Stuff to work on",
    body: "Exercise"
  },
  {
    title: "Things to buy",
    body: "Clothes"
  }
];
//console.log(notes);
//notes.pop();

//notes.push("My new note");

//console.log(notes);

//let removedNote = notes.pop();

//console.log(notes.length);
//console.log(notes[0]);
//console.log(notes[notes.length - 1]);

//notes.shift();
//notes.unshift("My First Note");

//notes.splice(1);

//?Counting 1
//console.log("break");

console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function(note, index) {
  return note.title === "Things to buy";
});

console.log(index);
