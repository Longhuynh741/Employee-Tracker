# Employee Tracker ![<Test>](https://img.shields.io/badge/License-MIT-blue.svg) 

Project Demonstration: 

<hr>

This project was created for the intents and purposes of building a command line application to interact with a mySQL database. The objective of the project was for the user to be able to generate data tables using information generated through prompts with user-input to retrieve specific data from a SQL database. Once information has been gathered from the prompts, our terminal will generate the data retrieved from the SQL database and display it. Execution of this requires that we: <ul>
<li> Utilize npm packages to generate the prompts and mySQL functions
<li> Being able to use mySQL workbench to generate the database
<li> Troubleshooting errors along the way
</ul>

The project is done through the use of [Visual Studio Code](https://code.visualstudio.com) and [MySQL Workbench](https://www.mysql.com/products/workbench/) with aide from [NPM documentations](https://www.npmjs.com/).
# Installation

Steps to participate in this project:

1. Access the source code and relevant materials through [GitHub](https://github.com/Longhuynh741/EmployeeTemplate-GT-FT). 
2. Fork the project into your own exisitng repository <br> 
*Optional. For refactoring and/or updating uses
3. Clone the copy onto your local branch. *SHH key cloning preferred
4. Using an installed Visual Studio Code or any other code editor, open the file and run "npm install" to install relevant node modules. *MySQL and inquirer modules needed to run this project
5. Create your database in the MYSQL workbench. *** It is recommended that you use the file provided in "schema.sql" as a template for your database. 
6. Correctly connect your database in the "server.js" file. This includes inputting the database name and your password.
7. Run "npm server.js" in order to initialize the code. 


(Optional): You can also install the [Prettier-Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension to aid in formating the code.

# Usage

<h2> Using the terminal log, open into the working file. You must be in the working file in order to run node server.js correctly. Follow the prompts in the example starting with node server.js </h2>

Example: <img src="images\Tracker1.png" alt="NodeExample">


<h2> After answering the prompted questions, a generate table should appear. It should take into account the user's input and display relevant data. Look at the picture for a reference </h2>

<img src="images\Tracker 2.png" alt="ReadMeExample">


# Credits

Repository Used: [GitHub](https://github.com/)

Code Editor Used: [Visual Studio Code](https://code.visualstudio.com)

Extensions: [Prettier-Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

All source code was provided to me by the staff/instructors of the GT-FT-FullStack team.
# License

MIT License

Copyright (c) [2020] [LongHuynh]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.