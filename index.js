#!/usr/bin/env node

console.log('Hello satellte_jsm6330');

const multiLineAsciiArt = `
˚  ₊      ˚  ₊           ₊    ˚   ✩    ˚      ˚ ☽  ˚  .　  ·
     ˚  ₊      ˚  ₊         /) /)   ₊   ✩    ˚      ₊      ˚  ₊
                  ˚    ✩   (•̥  •̥)       ˚  .　  ·  ✩    .　  ·
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


function RandomSelect(n = 1, ...namelist){
        if(namelist.length>=2){
		let selectedPresenters = [];//발표자 배열
		for(let i = 0; i<n; i++){
			let index = Math.floor(Math.random() * namelist.length);
            		selectedPresenters.push(namelist[index]);
            		namelist.splice(index, 1); // 중복 선택 방지
		}

                console.log(`${presenterlist.type}: ${selectedPresenters.join(', ')}`);
        }
        else{
                console.log('두 명 이상 이름을 입력하세요');
        }
}

RandomSelect(1, ...presenterlist.names);
