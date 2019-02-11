var fs=require('fs');
fs.createReadStream("largefile.txt").pipe(process.stdout);
