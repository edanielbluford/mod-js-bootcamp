const notes = ["Note 1", "Note 2", "Note 3"];
console.log(notes);
notes.pop();

notes.push("My new note");

console.log(notes);

let removedNote = notes.pop();

console.log(notes.length);
console.log(notes[0]);
console.log(notes[notes.length - 1]);

notes.shift();
notes.unshift("My First Note");

notes.splice(1);

//?Counting 1
console.log("break");
