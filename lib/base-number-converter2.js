// lib/main.js
const CompositeDisposable = require("atom").CompositeDisposable;

module.exports = {
  activate: function() {
    // Assign a new instance of CompositeDisposable...
    this.subscriptions = new CompositeDisposable();

    // ...and adding commands.
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'base-number-converter:binaryToDecimal': this.convertBinaryToDecimal.bind(null)
        //'base-number-converter:binaryToHex': this.convertBinaryToHex.bind(null),
        //'base-number-converter:decimalToBinary': this.convertDecimalToBinary.bind(null),
        //'base-number-converter:decimalToHex': this.convertDecimalToHex.bind(null),
        //'base-number-converter:hexToBinary': this.convertHexToBinary.bind(null),
        //'base-number-converter:hexToDecimal': this.convertHexToDecimal.bind(null)
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

    var binaryData = selection.toString();

    var result = [];
  	for (var n = 0, l = binaryData.length; n < l; n ++)
      result.push(Number(binaryData.charCodeAt(n)).toString(16));

//  	console.log("result " + result);

    activeEditor.insertText(result.join(''));
  }
};
