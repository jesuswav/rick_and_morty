(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{3625:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/characters",function(){return r(8553)}])},22:function(e,s,r){"use strict";var t=r(5893);s.Z=()=>(0,t.jsx)("div",{className:"w-full pt-5 bg-black",children:(0,t.jsx)("footer",{className:"text-white text-center py-8",children:(0,t.jsxs)("div",{className:"mx-auto",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[(0,t.jsxs)("div",{className:"col-span-1 md:col-span-2 lg:col-span-1",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Rick and Morty Universe"}),(0,t.jsx)("p",{className:"text-gray-400",children:"Explore the vast multiverse of Rick and Morty. Discover stories, characters and more!"})]}),(0,t.jsxs)("div",{className:"col-span-1",children:[(0,t.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Quick Links"}),(0,t.jsxs)("ul",{className:"text-gray-400",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/home/characters",children:"Characters"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/home/episodes",children:"Episodes"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Stories and Anecdotes"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Community"})})]})]}),(0,t.jsxs)("div",{className:"col-span-1",children:[(0,t.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Last News"}),(0,t.jsxs)("ul",{className:"text-gray-400",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"New episodes announced"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Details about the next project"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Exclusive interviews with the cast"})})]})]}),(0,t.jsxs)("div",{className:"col-span-1",children:[(0,t.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Follow us"}),(0,t.jsxs)("div",{className:"flex space-x-4 justify-evenly max-sm:m-5",children:[(0,t.jsx)("a",{href:"#",className:"text-gray-400 hover:text-white transition duration-300 ",children:(0,t.jsx)("img",{className:"h-10",src:"https://cdn-icons-png.flaticon.com/128/174/174848.png",alt:"Social"})}),(0,t.jsx)("a",{href:"https://www.instagram.com/1999garciajesse/",className:"text-gray-400 hover:text-white transition duration-300",children:(0,t.jsx)("img",{className:"h-10",src:"https://cdn-icons-png.flaticon.com/128/174/174855.png",alt:"Social"})}),(0,t.jsx)("a",{href:"#",className:"text-gray-400 hover:text-white transition duration-300",children:(0,t.jsx)("img",{className:"h-10",src:"https://cdn-icons-png.flaticon.com/128/174/174883.png",alt:"Social"})}),(0,t.jsx)("a",{href:"#",className:"text-gray-400 hover:text-white transition duration-300",children:(0,t.jsx)("img",{className:"h-10",src:"https://cdn-icons-png.flaticon.com/128/174/174876.png",alt:"Social"})}),(0,t.jsx)("a",{href:"#",className:"text-gray-400 hover:text-white transition duration-300",children:(0,t.jsx)("img",{className:"h-10",src:"https://cdn-icons-png.flaticon.com/128/174/174879.png",alt:"Social"})})]})]})]}),(0,t.jsx)("div",{className:"mt-8 text-gray-400 text-sm h-10 pt-4",children:"\xa9 2023 Rick and Morty Universe. All rights reserved."})]})})})},6608:function(e,s,r){"use strict";var t=r(5893),l=r(7294),a=r(6920);s.Z=e=>{let{openModal:s,setOpenModal:r}=l.useContext(a.H),{modalData:n,setModalData:c}=l.useContext(a.H);return(0,t.jsxs)("div",{onClick:()=>{r(!s),c(e),console.log(s)},className:"bg-color-fondo-oscuro flex flex-row w-full max-sm:w-11/12 justify-start pl-5 py-4 border-2 rounded-3xl border-solid border-gray-400 cursor-pointer hover:scale-105 duration-200",children:[(0,t.jsx)("div",{className:"flex",children:(0,t.jsx)("img",{className:"h-32 rounded-2xl object-cover",src:null==e?void 0:e.data.image,alt:"Image"})}),(0,t.jsxs)("div",{className:"flex flex-col ml-4 pr-4",children:[(0,t.jsx)("h3",{className:"font-bold",children:e.data.name}),(0,t.jsx)("h3",{className:"text-gray-300",children:e.data.origin.name}),(0,t.jsx)("h3",{className:"Alive"===e.data.status?"text-green-400":"text-red-600",children:e.data.status}),(0,t.jsx)("h3",{className:"text-gray-400",children:e.data.species})]})]})}},7358:function(e,s,r){"use strict";var t=r(5893);s.Z=e=>{let{setCurrentPage:s,currentPage:r,pages:l}=e;return(0,t.jsxs)("div",{className:"flex flex-row items-center justify-center mb-10 select-none",children:[(0,t.jsx)("div",{onClick:()=>{s(r-1)},className:r<2?"pointer-events-none cursor-pointer":"cursor-pointer p-2",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-8 h-8",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),(0,t.jsx)("div",{className:"border-2 bg-gray-600 font-semibold rounded-md mx-2 cursor-pointer border-white p-1 px-3",onClick:()=>s(r),children:r}),(0,t.jsx)("div",{className:"border-2 font-semibold rounded-md mx-2 cursor-pointer border-white p-1 px-3",onClick:()=>s(r+1),children:r+1}),(0,t.jsx)("div",{className:"border-2 font-semibold rounded-md mx-2 cursor-pointer border-white p-1 px-3",onClick:()=>s(r+2),children:r+2}),(0,t.jsx)("div",{onClick:()=>{s(r+1)},className:r>=l?"pointer-events-none cursor-pointer":"cursor-pointer p-2",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-8 h-8",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]})}},5202:function(e,s,r){"use strict";var t=r(5893),l=r(7294),a=r(4465),n=r(1922),c=r(6920);s.Z=()=>{let[e,s]=(0,l.useState)(""),{filteredCharacters:r,setFilteredCharacters:i}=l.useContext(c.H),{currentPage:o,setCurrentPage:d}=l.useContext(c.H),{notFilterCharacters:x,setNotFilterCharacters:h}=l.useContext(c.H),{globalError:m,setGlobalError:u}=l.useContext(c.H),{data:j,loading:p,error:f}=(0,n.Z)("".concat(a.Z.characters,"/?name=").concat(e));return(0,l.useEffect)(()=>{!p&&e&&(i(j.results),console.log(j),u()),e||(i(),console.log("Filtered characters:",r)),m&&(console.log("Set not filtered characters as true"),h(!0)),r||(console.log("setNotFilteredCharacters as undefined"),h())},[j,p,f,r,e]),console.log("Not filtered characters value from Search",x),(0,t.jsxs)("div",{className:"flex flex-row items-center w-full justify-end px-8",children:[(0,t.jsx)("input",{className:"bg-zinc-500 h-10 p-3 border-none rounded-md w-2/5 max-sm:w-full mx-2",placeholder:"Filter by name",onChange:e=>{s(e.target.value)}}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 cursor-pointer",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})]})}},8553:function(e,s,r){"use strict";r.r(s);var t=r(5893),l=r(7294),a=r(6608),n=r(7358),c=r(5202),i=r(22);r(9014);var o=r(1922),d=r(4465),x=r(6920);s.default=()=>{var e;let[s,r]=(0,l.useState)([]),[h,m]=(0,l.useState)(1),{filteredCharacters:u,setFilteredCharacters:j}=l.useContext(x.H),{notFilterCharacters:p,setNotFilterCharacters:f}=l.useContext(x.H),{data:g,loading:v,error:N}=(0,o.Z)(d.Z.characters,h);return(0,l.useEffect)(()=>{v||N||(r(g.results),console.log(s))},[g,v,N]),console.log("Not filtered characters value",p),(0,t.jsxs)("div",{className:"Appears mt-24 max-sm:mt-24 max-sm:px-0 w-full",children:[(0,t.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,t.jsx)(c.Z,{})}),p&&(0,t.jsxs)("div",{className:"flex justify-center items-center w-full h-full pt-10",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-10 h-10 mr-2",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})}),(0,t.jsx)("span",{className:"text-xl",children:"Sorry, no characters match the search"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-3 pt-8 gap-6 max-lg:grid-cols-2 p-4 px-10 max-sm:flex flex-col max-sm:p-5 items-center max-sm:w-full",children:[!u&&s.map(e=>(0,t.jsx)(a.Z,{data:e},null==e?void 0:e.id)),u&&!p&&(null==u?void 0:u.map(e=>(0,t.jsx)(a.Z,{data:e},null==e?void 0:e.id)))]}),(0,t.jsx)("div",{className:"flex pt-10 h-10 items-center justify-center w-full",children:(0,t.jsx)(n.Z,{setCurrentPage:m,currentPage:h,pages:null===(e=g.info)||void 0===e?void 0:e.pages})}),(0,t.jsx)("div",{className:"w-full mt-5",children:(0,t.jsx)(i.Z,{})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3625)}),_N_E=e.O()}]);