
import React from "react";
import ReactDOM from "react-dom/client"



const elem1 =React.createElement("h1",{id:"first",style:{backgroundColor:"black",fontSize:"35px",color:"pink"}},"Hello coder army");
const elem2= React.createElement("h2",{id:"second",style:{backgroundColor:"greenyellow",fontSize:"30px", color:"violet"}},"kaise ho aap sbb log");

const diva= React.createElement("div",{},[elem1,elem2]);
const reactroota= ReactDOM.createRoot(document.getElementById("root"));

reactroota.render(diva)

/* 
bundler (ex- Webpack, vite, parcel) kaa kaam hotaa hai hmaare code ko optimise krnaa.

npm install react => to install react using npm in node_modules.
npm install react-dom => to install react-dom using npm in node_modules.


import React from "react" => to import react module
import ReactDOM from "react-dom/client" =>to import react-dom module. jo nyaa waala react-dom hai wo react-dom ke andr client
waale folder me rkhaa huaa hai. 

import statement hmare JS kaa part to hai, lekin ye latest waali JS kaa part hai 
isliye hmme browser ko btana pdegaa ki ye normal JS nhi h, iss JS kaa type module hone 
wala hai, import od JS me nhi thaa.

import statement ko use krne ke liye hmm html me script tag me typr="module", krnaa pdegaa.

server open krne ke liye hi ek aur command hotaa hai.
npx - node pacage exacute => npm registry se aaye code ko execute krne ke liye npx kaa use krte hai.
npx parcel htmlfile_name => to open npx
npm se hmm jo bhi hmaara code hai npm registry me usko local machine me leke aa jaate hai.
it will give a the local host address of our project, which we can open in the browser.

npx parcel htmlfile_name   krne pe .parcel-cache au idst naam se do files create ho jaayengi.

.parcel-cache => ye cache file hai, iss file ko delete krke dobara npx waala
command run krne pe jyada time lgega localhost krne me. aur firr se dobara ye file
create ho jaayega.ye jbb server bnaa ke de deta hai, to uske chache data ko store
krke rkhtaa hai.
ctrl+c => to move out from command

node_modules file ko productin me nhi daala jaa skta, kyoki 
kaafi heavy file hai.

bundler hmaare code ko optimise kr detaa hai, aur wo jaata hai dist folder ke andr.
lekin hmko usse phle dist folder ko delete krke , firr se separate commant run krnaa hogaa.

npx parcel build htmlfile_name => to get optimised code, build se wo smjh jaayega ki hme producion level code chahiye.
ex-
dist/1.html               239 B     17ms
dist/1.db091baa.js    192.24 kB    167ms

iss tarh kaa file  create ho jaayega, ye dono optimised code files hai, jo dist
folder ke andr milegaa, iske saath hi js maaping file bhi create hogaa.

abb bss hme dist folder chahiye production me daalne ke liye.
jo dist folder ke andr optimised code files hai, wo ajib format me hoti hai, aur unreadable 
type form me hotii hai. 
.js.map file se optimised js file ko normal js file me convert kr ske hai.isliye
hmm isko production me nhi daalte , taaki hmaara koi code read naa kr paaye aur chori naa kr le.
jo optimise code hai, usme react aur react-dom packages kaa sirf utna hi code present hotaa 
hai, jitne kaa kaam hai.unused code bundler htaa detaa hai. 

agar .js.map file mil gyaa to hmm origial js code ko nikal skte hai. 
even bundler hmmare images wagairah ko bhi optimise kr detaa hai, compress kr ke.

npx parcel build html_file_name => command to generate optimised code for project, present inside dist folder.

dependency- jo files(packages, modules etc) jinko hmm apne project ke andr ishtemaal 
krte hai, unhi ko dependencies khaa jaata hai.

netlify=> to deploy the project.ispe hmm apne project ko host kr skte hai.


*/