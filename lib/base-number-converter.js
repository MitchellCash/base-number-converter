// lib/base-number-converter.js
const CompositeDisposable = require("atom").CompositeDisposable;

module.exports = {
  activate: function() {
    // Assign a new instance of CompositeDisposable...
    this.subscriptions = new CompositeDisposable();

    // ...and adding commands.
    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        "base-number-converter:binarytoDecimal": this.convertBinaryToDecimal.bind(null),
        "base-number-converter:decimaltoBinary": this.convertDecimalToBinary.bind(null),
        "base-number-converter:decimaltoHex": this.convertDecimalToHex.bind(null),
        "base-number-converter:hexToAscii": this.convertToAscii.bind(null)
      })
    );
  },

  convertBinaryToDecimal: function(n) {
    var activeEditor = atom.workspace.getActiveTextEditor();

    if (activeEditor == null)
      return;

    var selection = activeEditor.getSelectedText();

    if (selection.length == 0)
      return;

      var test = selection.toString();

    activeEditor.insertText(parseInt(test, 10));
  },

  convertDecimalToBinary: function(n) {
    var activeEditor = atom.workspace.getActiveTextEditor();

    if (activeEditor == null)
      return;

    var selection = activeEditor.getSelectedText();

    if (selection.length == 0)
      return;

    function decimalData(selection) {
      return (+selection).toString(2);
    }

    activeEditor.insertText(decimalData(selection));
  },

  convertDecimalToHex: function(n) {
    var activeEditor = atom.workspace.getActiveTextEditor();

    if (activeEditor == null)
      return;

    var selection = activeEditor.getSelectedText();

    if (selection.length == 0)
      return;

    function decimalData(selection) {
      return (+selection).toString(16).toUpperCase();
    }

    activeEditor.insertText(decimalData(selection));
  },

  convertToAscii: function(n) {
    var activeEditor = atom.workspace.getActiveTextEditor();

    if (activeEditor == null)
      return;

    var selection = activeEditor.getSelectedText();

      if (selection.length == 0)
        return;

    var hexData = selection.toString();
    var result = '';

    for (var i = 0; i < hexData.length; i += 2)
        result += parseInt(hexData, 16);

//  	console.log("result " + result);

    activeEditor.insertText(result);
  }
};
