Serial Writer 
Jk Jensen
2016

Before you begin:

You must have NodeJS and NPM to use this package.

Make sure to install all dependencies for SerialWriter by running “npm install” or “nom i” in the terminal.

Start your micro controller, and remember the com port that it 
is connected to. On linux this will look like 
"dev/tty.usbmodem1421" and on windows it will look like
"COM1”.

To use SerialWriter, type 

npm run --port=“*PORT*"

 into the terminal, where *PORT* is the port number that the microcontroller is running on.