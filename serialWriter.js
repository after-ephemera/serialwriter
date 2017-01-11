/* serialwriter.js */
// If there was no port entered, let the user know.
if(!process.env.npm_config_port){
  console.error('Please enter a port.');
  return;
}else{
  console.log("port: ", process.env.npm_config_port);
  var writeFile = require('write');

  var d = new Date();

  // Set up interface for user input.
  const readline = require('readline');
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var fn; // The filename to save to.

  // Prompt the user for a filename to save to, and handle the answer.
  rl.question('Please enter the filename (leave blank for default): ', startWrite);
}

/**
 * Takes the given filename (answer) and begins a write sequence
 * for the serial line.
 */
function startWrite(answer){
  fn = getFileName(answer);

  console.log(`Writing to file: ./logs/${fn}`);
  var oStream = writeFile.stream('./logs/' + fn);

  var SerialPort = require("serialport");
  var serialport = new SerialPort(process.env.npm_config_port, {
    parser: SerialPort.parsers.readline('\n')
  });
  serialport.on('open', function(){
    console.log(`Serial Port ${process.env.npm_config_port} Opened`);
    serialport.on('data', function(data){
        console.log(data);
        oStream.write(data + '\n');
    });
  });

  rl.close();
}

/**
 * Takes the user entered filename and makes it usable.
 * If the filename was blank, return the default
 * filename. Otherwise, make sure it ends with .txt and
 * return the proper filename.
 */
function getFileName(fn){
  if(!fn) {
    return 'test' + d.getFullYear() + (d.getMonth()+1) + d.getDate() + d.getTime() + '.txt';
  }

  l = fn.split('.');
  if(l[l.length - 1] == 'txt'){
    return fn;
  } else{
    return fn + '.txt';
  }
}
