#!/usr/bin/env node

console.log('Hello satellte_jsm6330');

const multiLineAsciiArt = `
˚  ₊      ˚  ₊           ₊    ˚   ✩    ˚      ˚ ☽  ˚  .　  ·
     ˚  ₊      ˚  ₊         /) /)   ₊   ✩    ˚      ₊      ˚  ₊
                  ˚    ✩  ( •̥ ˕ •̥)       ˚  .　  ·  ✩    .　  ·
                   ₊˚｡    c(“)(“)   ₊ ˚ ✩    .　  ·   * .　  ·
✩    .                .  ／￣￣￣ ＼        * .　  ·
              ･☆ ⊹     |)    ○ ○ ○  (|     ˚  .　  ·
₊    ˚   ✩     ˚      ／″   jsm6330  ＼  
      ˚    .　  ·   ／＿＿＿＿＿＿＿ ＿＼
 ˚  ₊       ˚  ₊     ￣ ＼＿＼＿_／＿／￣　    
`;
                                                      
console.log(multiLineAsciiArt);


const name = process.argv;
const namelist = name.slice(2);

class PersonList{
	constructor(type){
		this.type = type;
		this.names = [];
	}
	addName(name){
		this.names.push(name);
	}
}


class PresenterList extends PersonList{
	constructor(){
		super("발표자");
	}
}

const presenterlist = new PresenterList();
for(let i = 0; i<namelist.length; i++){
	presenterlist.addName(namelist[i]);
}


function RandomSelect(namelist){
        if(namelist.length>=2){
                selectedPresenter =  namelist[Math.floor(Math.random() * namelist.length)];
                console.log(`${presenterlist.type}: ${selectedPresenter}`);
        }
        else{
                console.log('두 명 이상 이름을 입력하세요');
        }
}

RandomSelect(presenterlist.names);
