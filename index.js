var AdmZip = require('adm-zip');
var difference = require('lodash.difference');

var print = function (output/* , ...arguments */) {
  var args = Array.prototype.slice.apply(arguments);
  console.log.apply(console, args.slice(1));
  console.log(JSON.stringify(output, null, '\t'), '\n\n');
};

var inspect = function (filename) {
  var zip = new AdmZip(filename);
  var entries = zip.getEntries();

  var output = entries.map(function (entry) {
    return entry.entryName.substring(entry.entryName.indexOf('/') + 1);
  });

  print(output, '#', filename, ' contents as seen by adm-zip');

  return output;
};

var compare = function (output1, output2) {
  var diff = difference(output1, output2);
  print(diff, '# difference');
};



// Inspect the original fontello.zip file downloaded from the fontello API
var original = inspect('fontello-original.zip');

// Inpsect the unzipped and re-zipped (default OSX "Compress" option) file
var repacked = inspect('fontello-repacked.zip');

// Display difference
compare(repacked, original);
