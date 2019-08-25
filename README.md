# Perfect Aligner

This project is a web-based visual simulator for bioinformatics alignment algorithms.  There are two components for pairwise sequence alignment algorithms known as Neddleman Wunsch and  Smith Waterman.
They are able to visualize the dynamic programing steps of the algorithms along with the dynamic matrix. Also there are components to visualize the aligned sequences using TCoffee and Dialign algorithms. The user need to input a file which contains the aligned sequences in FASTA format for the multiple sequence alignment visualizers.

## Requirements
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8. and Java

 - [npm](https://www.npmjs.com/get-npm) 
 - [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.
 - [Java](https://www.java.com/en/)
 - [maven](https://maven.apache.org/)
 - [tomcat](https://tomcat.apache.org/)

## Getting started

 - Clone the repository / downoad the zip

>git clone https://github.com/AnuradhaSK/Perfect-Aligner.git
 - Navigate to "Perfect-Aligner" folder
 - Open a terminal and issue 
> mvn clean install
 - Once the perfectaligner.war is build sucessfully, 
 - Start the tomcat server
 - Deploy the war file at path **Perfect-Aligner/target/PerfectAligner.war**
 - Navigate to **Perfect-Aligner/client/perfect-aligner** 
 - Open a terminal and issue
> npm install
> ng serve --proxy-config proxy.conf.json
 - Browse http://localhost:4200/
