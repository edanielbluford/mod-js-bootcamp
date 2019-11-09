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
const findNote = function (notes, noteTitle){
  return notes.find(function (note,index){
  return note.title.toLowerCase() === noteTitle.toLowerCase();
})

}

const note = findNote(notes,"Stuff to work on")
console.log(note)

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function(note, index) {
//   return note.title === "Things to buy";
// });

// console.log(index);
