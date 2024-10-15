# nodejs

- nodejs is a javascript runtime environment built on chrome javascript v8 engine
- and executes javascript code outside of the web browser what is that means eariler javascript used and managed over the web and it used to be dominated in webworld.but when nodejs came in.javascript can run everywhere.so bascially it helps to execute the code outside the browser. not just limited to servers you can run javascript in lot of places you can't even think of.so you can do lot of things with nodejs
- javascript is a cross platform (it can run on windows,macos,linux)
- nodejs is opensource and its maintained by openjs foundation
- basically who adds the new features and updates so its added by the commity of the openjs foundation
- nodejs helps you to run the javascript out side the browser
- nodejs has an event-driven-architecture capable of asynchronous i/o (some times known as non blocking i/o)
- whereever there is javascript there will always be a javascript engine
- every browser runs the javascript and every browser has javascript engine and every browser has its own javascript engine
- nodejs first version relased on 2009 and developed by Ryan Dahl

### history of nodejs

- in 2009 nodejs was born and Ryan dahl created the nodejs
- every code you write in nodejs is javascript to run the javascript you need JS engine
- whereever javascript there is javascript engine which executes it.without javascript engine you can't just run the javascript
- when Ryan dahl developed nodejs.he didn't use v8 engine. he used the spider monkey (its javascript engine which is found in firefox)
- basically every browser has its own javascript engine.here chrome has v8 engine similarly firefox has engine which is spider monekey
- within 2 days he said iam done with spider monkey and he started using v8 engine then he never looked back
- later on there were few versions of nodejs which is used spider monekey behind the scenes
- but today the offical nodejs is using v8 engine behind the scenes.and v8 engine became popular and v8 engine powers
- when ryan developed nodejs he developed independently but there is a company "Joyent".this company also working on something similar to what nodejs was.so here the company was buidling internal project where there were trying to use javascript on the server. there were really passinated by the idea of ryan dahl
- the comapny said to Ryan dahl.come and work on nodejs in our company and became our employee.and build the project under us.and will fund it.and encourge it.support it
- if nodejs exist there is a very big contribution of Joyent in it
- slowly slowly nodejs started becoming big.and Joyent company internally started using nodejs
- now nodejs not maintained by Joyent company
- eariler name of nodejs was web.js.because Ryan said i want to create web server using this technology.so named as web.js.
- but later on when he relized the potential he renamed to nodejs and said that nodejs is bigger thing,its not just limited to build the webservers.you can build anything out of it that is why he said nodejs.
- when he was trying to create the nodejs why did he created the nodejs.what was the problem.there was something called Apache which is used to create HTTP server and this is kind of "blocking server".Ryan wanted to create "Non Blocking I/O".that was the reason why Ryan was developed the Nodejs
- the advantage of "Non Blocking I/O" it can handle multiple requests with lesser number of threads
- in 2010 npm happened. npm is package manager for node.developer from Joyent decided to create the package manager for it.so that everybody can contribute and build small small package.
- basically npm is a registry.a central place where you can add new packages.
- suppose you want to handle time and date for that you have the package like that you have lot of packages.everything present in npm
- when npm was developed this is very significant achivement for nodejs.nodejs as framework would not be successfull if npm was not there.
- why nodejs is popular because of the npm
- in 2011 windows support added initally it was build for macos and linux.
- now in 2011 windows support came up that was lead by Joyent + Microsoft.because its was gained by lot of popularity.
- in 2012 after 3 years Ryan dahl left the project.i have no issues with project and company but iam not maintaining the project.then responsibility given to the "Isaac" who was created the npm.he was project lead of the nodejs.thats how Issac took over it.
- ryan got off from the project that pace of developement of the nodejs started becoming slow.chorme was realising new new version of nodejs but the developement speed of the nodejs become slow.
- in 2014 the developer name Fedar.he created the fork of the nodejs.and he named as io.js.
- now nodejs is 2 things there is io.js and node.js and everything messed up
- in sep 2015 there was nodejs foundation commite formed and everything merged and called it as nodejs
- in 2019 there was commite "Js foundation" and "nodejs foundation" and these 2 commites merged and create new commit which is "openJs foundation"
- since 2019 this openJs foundation took the controll over the nodejs.this commite responsible for nodejs

## episode 2 (js on server)

- server means nothing its a remote computer or cpu or computer working remotely
- you are running your website on the server what is that means you are running your website somebody else computer or colud located remotly
- at the end of the day its one machine one cpu which is receving that request.that receving computer known as server.
- suppose you wrote google.com in your computer.here every domain name maps to the IP.suppose here ip assume 111.4.5.67.so this ip map to the device or computer or server (server means machine)
- initally you can use Javascript only on browsers but after nodejs came in we can use javascript on server as well.
- why this was powerfull when javascript was used only for frontend or client there are diffrent frontend developers on the backend there were language like java,c++ etc used there are separate backend developer.
- now javascript come in server as well. so what happened is there is an opprotunity for single developer to develop the full stack
- "Nodejs is c++ code"
- JS engine - v8(developed by google) here V8 is C++ program
- JS engine uses C++ to execute the javascript code
- at end of the Javascript engine is the C++ program.so javascript engine is the not the machine
- you can search for v8 engine opensource there you can see 72% C++ used.and other things javascript and typescript python also used.
- if you are using javascript engine means you are executing C++ program

#### what is v8 engine?

- V8 is Google's open source high performance javascript and WebAssembly engine, written in c++.
- it is used in Chrome and in Node.js and it implements ECMAScript and WebAssembly and runs on Windows macOS,and Linux systems
- V8 can be embedded into any C++ application.it means what is v8 engine v8 engine job is to execute the javascript program
- basically what happens is you write some javascript code and that javascript code read by V8(C++ program) then converted to code which machine understands it.
- here V8 convert javascript code to machine level code and machine understands it and execute that code.that how v8 writes
- here javascript and C++ all these wroking in tandom. javascript is being read by C++.and then telling machine its converted and at the end its binary which computer understand
- so we can't say like C++ is better than javascript or javascript is better than C++.here every technology has its own specific usecase and it has own specific potential.and own specific problem it resolves.
- when V8 can be embedded into any C++ application.this is the main thing.which is lead to the nodejs invention
- when V8 Can be lead to the nodejs invention.what creator of nodejs is did.he created node.js.again.
- so here nodejs is the C++ application with v8 embedded into it.

### when v8 can execute our javascript code why was the need of nodejs?

- now V8 is javascript engine.it follows ECMAScript Standards.(it means ECMAScript is a standard for scipting languages.including javascript,JScript so whatever code you write in javascript you follow the standard like var a =10;)
- and this ECMAScript standards not just followed by Javascript.but lot of other language.but javascript is most popular language among all other languages.

### ECMA Script Standards//Rules.

- example you have written "===" for comparsion these rules are defined by the Ecmascript standards
- alot of JS engines follow these Standards.because here these standards are defined by the central commity.
- here suppose we have diffrent Javascript engines for diffrent browsers and implemented diffrent logic for creating this javascript engine.but these javascript engines follows the specific standards which is ECMAScript Standards
- so here V8 Can't go outside the ECMAScript Standards.
- but nodejs has v8 engine and it has lot more super powers.and that nodejs when it runs on the server makes it very powerful.here
- you can say super powers are API's on the server
- example: if you want to access your database onto the server.suppose there is sql database installed or mongo database installed.if you want connect to that database through javascript how will that happens.so here V8 can't connect to the database right.because it does not access to connect to the database. suppose you want to make network request(http) to someother computer.V8 Cann't do that. because it is not ECMAScript standards.here only job of V8 engine is to Execute the Core javascript (ECMAScript Standards).V8 can't fetch the image from folder.so you need some super powers that super powers comes in form of the API.that is the core thing nodejs adds into the V8 engine.and this Nodejs is known as "JS runtime Environment"
- here Nodejs has some more super powers on top of the v8 engine
- V8 + some super powers is the Nodejs and this is know as Javascript Runtime and this nodejs executed on the server
- Nodejs is build using javascript and C++ and at the end of the its C++ program.but it also has lot Javascript Api's(these apis which user can call and connect to the database)
- its like one layer on top it another layer and on top of it another layer etc.. opensource build something like this. here Somebody maintaing nodejs. and somebody build modules on this nodejs.somebody maintaining ECMAScript Standards and on top it V8 and on top V8 there is nodejs and on top nodejs there is other applications which are buiild.

### V8 is a C++ code what does it do why it is C++?

- the computer understands binary code.on top it Assembly code.on top it Machine Code.on top it High Level Languages.here High Level Language is C++.
- so basically computer understands C++ and we as a developer understands the High Level Languages like C++.
- you cannot write the code in Binary because even if you want to write alphabet you have to write so much big code.here our head can't process the binary.
- so here we are capable of writing High Level languages on top of C++ we have Javascript.
- we as a user loves to write javascript because one line can do lot of things behind the scenes
- so we write javascript code and what happens is this Javascript Engine(C++ code) takes our javascript code and convert it into Machine code and Assembly code is Known As Low Level Code.and this is being understood by computer in the form of the Binary.(byte code)
- this why you need Javascript Engine

### Lets Write the code

- explained how nodejs should be installed (diffrent Operating Systems,etc..)
- first in your system nodejs shoule be installed and verify using command node -v and npm -v.npm automatically installed when nodejs is installed
- we can write code using "node REPL(read evaluate print loop)"
- in CMD just type "node" you will went into the "REPl"
- now you are now entering into the program(basically its C++ program).we are kind of run the node in the REPL mode.
- its kind of read the code, evaluate the code, print the code, and loop.
- in REPL whatever nodejs program you give it will work even javascript code also
- in browser also when you type javascript code it will execute code.its same like nodejs only behind the scene running v8 engine.the diagram is similar like instead of node we have browser.
- but we can't write inside REPL because its painfull to write like in REPL.because we have files, folder.so this REPL Doesn't work for prodution.in our daily normally we create files folders and create the project.
- generally we have to create main js file that file we can call it as app.js or index.js or script.js etc..
- executing file by using command called "node <file name>"
- you have access of global object in browser that global object is window.
- here "this" also points to this window object
- this global object given to us is the browser.some people feel like global object given by the v8 engine but this global object given by the browser not the v8 engine.

#### in nodejs we have global object which is known as global

- once you do console.log(global) it will print and you can see settimeout and clearTimeout and setInterval etc.. so you can access those in nodejs using this global object
- and here global not part of the v8 engine its part of one of the super power.which is given to use NodeJs
- if you type console.log(this); it will not print global object.it will print empty object in nodejs.
- in browser console if you type window,this,self,frames type it will give window object.why because when browser was not created they were using v8 engine they names it as "window".then all the people who are starting writing code and see on the browser started writing the window as global obejct.then we got the concept of this that "this" started points to "window" object in the browser.
- then there is the concept webworkers came in here they started writing self.
- when nodejs created they are started using gloabl as window object.so in nodejs,browser,or webworker,evrywhere at the end of the we are using javascript right.so there should be the common global object.
- to standarize this in 2020 there is a foundation called open js foundation.there are developing new features in javascript.they came up with the proposition there should be standard global object in the all the runtime environment we can say.
- if you are using webworkers, or nodejs, or browser in all the places there should be single global object and there should be single way to represent it.
- there alot of proposals like some people say global and some people say other name etc.. but commity did not decide on anything.because right now when you type global in the console nothing will happen. but at some later point of time gloabl started pointing to window object.what will happen is suppose there are some people or some website starting using global as variable name so there will be confilct with there varibale name.
- what commity did was, they came up with new name that is "gloablThis". and this globalThis was refering to global object in all across all javascript runtime environments.whether its browser or nodejs or webworkers anythere you write javascript piece of code you get this globalThis.
- here both are equal global === globalThis
- normally we have diffrent engines for each browser,v8 engine ,spider moneky, in all places this "globalThis" will work

### Module Export & Require

- whenever you have nodejs application you have entry point for that application.that entry point is the file when give command "node <entry point>".here entry point is app.js.
- suppoze you already have app.js but you created another file called xyz.js.so these files we can call it as moduels
- so for connecting one module to another module we use it "require"
- normally here i have created new module xyz and i included that module inside another module which app.js using require function.require function always avaiable in nodejs applcation
- here basically firest require method will call and execute that file then it will execute other lines.
- whenever you create separate module and when you require that module first that module will run.but you can't access variables,functions from one module into another module.simply by require it.
- by default module protects variables and functions from leaking.
- if you want to use variables and function of one module into another module you have to explicitly export it.
- some people say why its protecting each module there private variables and functions.because if it wont protect it it will create the conflicts with other module variable names
- even if you wont write .js extension while doing require default it considered as .js file
- **till now we have used the CommonJS modules pattern**

#### CommonJs Modules (CJS)

- here by default CommonJs Module is enabled
- here we use **module.exports,require()**
- here it does it in synchronous way
- it will run in non-strict mode

#### ES Modules(mjs)

- if you want to use ES module pattern inside package.json file write something like below
-       {
          "type": "module"
        }
- here we use **import and export** this import and export by default used in import and export
- this is newer way and openjs foundation saying going forward ES modules will become standard way
- here we have asynchronous way(its very powerful,newer way,standard way) and some people say it **ES6 module**
- it will run in strict mode

- here when you do **console.log(module.exports);** it will give empty object
- we can write also something like **module.export.x = x; module.export.y = y;**

- **Nested module pattern**
- suppose when you have lot of files like 100's of files and evry file has so many functions and variables etc..so bascailly you are trying group together all files and create separate module out of it.that is the reason we created index.js
- we have seen how json file exported and imported
- there are some modules which are present in core of nodejs.there is a module util.you have to import something like **const util =require("node:util");** it will give access to util object so inside util object we have alot of functions and properties.
- basically module is a separate piece of javascript code that we can assume as module.here we can say single .js file also module and folder also you can call it as module.
- **in simple terms we can say module is collection of javascript code which is private to itself it exist independently of anyother program if you want expose or use it from module then you have to do module.exports**

#### new editor neovin which is gaining much popularity try once

### what is blocking i/0 and non blocking i/0?
