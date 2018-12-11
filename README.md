Q2 is in whoami.js
the challange starts with download of whoami.zip that holds whoami.jpg.
file is actually a json file.

looking at the file i noticed unicode chars of hebrew letters.
structure is an array of gimatria numbers. i took the string and choped anything that is not a letter, converted the letters to numbers and calculated sum. that matches with the numbers in file.

now other thing i noticed is that there is a sentence hidden - return
in
base64
sum
of
values
below
median

Fixed the median function - now code plots the right password for level 2.

-----

Added Q3 solution in theusualsuspect.js
in short - the file contains a csv and a hint file.

create a db with the name shabak on local mongo db.
import the csv to mongo using this line:

mongoimport -d shabak -c logs --type csv --file log.csv --headerline

then run the query supplied in theusualsuspect.js
it will plot the ip's needed for the answer.

Enjoy :)
until next time!