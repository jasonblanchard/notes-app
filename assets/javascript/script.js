var noteData = [
  {
    id: 1,
    text: "Notes about javascript blah blah blah",
    important: false,
    createdAt: 1444951030
  },
  {
    id: 2,
    text: 'Prep for interview blah dee blah',
    important: false,
    createdAt: 1447629460
  },
  {
    id: 3,
    text: 'New years eve plans.....',
    important: true,
    createdAt: 1450221472
  }
];

var id = 0; // Increment IDs from this number to make them unique within the app.

// Domain bbject definitions.
Note = {
  init: function(noteData) {
    this.id = noteData.id || id++;
    this.text = noteData.text || '';
    this.important = noteData.important || false;
    this.createdAt = noteData.createdAt || Date.now();
    return this;
  }
}

var NoteCollection = {
  init: function(notes) {
    this.notes = notes;
  },

  fromJS: function(notes) {
    this.notes = [];
    for (var i = 0; i < notes.length; i++) {
      var noteData = notes[i];
      var note = Object.create(Note);
      this.notes.push(note.init(noteData));
    }
    return this;
  },

  findImportant() {
    var importantNotes = [];
    for (var i = 0; i < noteData.length; i++) {
      if (noteData[i].important === true) {
        importantNotes.push(noteData[i]);
      }
    }
    return importantNotes;
  },

  findById(id) {
    var note;
    for (var i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        note = this.notes[i];
      }
    }
    return note;
  }
}

var NoteRenderer = {
  render: function(noteCollection, el) {
    var notes = noteCollection.notes;

    for (var i = 0; i < notes.length; i++) {
      $(el).append("<div>" + notes[i].text + "</div>");
    }
  }
}

// Testing
var noteCollection = Object.create(NoteCollection);
NoteCollection.fromJS(noteData);
console.log(noteCollection.notes);
console.log(noteCollection.findImportant());
console.log(noteCollection.findById(1));


$(document).ready(function() {
  NoteRenderer.render(noteCollection, $('#notes'));
});
