const API_URL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

document.addEventListener("DOMContentLoaded" ,async function() {
populate();
})

async function populate(){
    let request = new Request(API_URL);

    let reponse = await fetch(request);
    let squadhero = await reponse.json();

    console.log(squadhero);

    populateHeader(squadhero);
    populateSection(squadhero);
}

function populateHeader(data){
    let header = document.querySelector("header");

    const title = document.createElement("h1");
    title.textContent = data.squadName
    header.appendChild(title);

    const homeTown = document.createElement("p");
    homeTown.textContent = `Min elskede hjemby: ${data.homeTown}` 
    header.appendChild(homeTown);

}

function populateSection (Data){
    let section = document.querySelector("section");

    for (const member of Data.members){
        let memberName = document.createElement("H2")
        let memberAge = document.createElement("H3")
        let memberScret = document.createElement("H3")
        let memberPowers = document.createElement("div");

        memberName.textContent = member.name;
        memberAge.textContent = member.age;
        memberScret.textContent = member.secretIdentity;
        memberPowers.textContent = member.powers;
        

        section.appendChild(memberName);
        section.appendChild(memberAge);
        section.appendChild(memberScret);
        section.appendChild(memberPowers);
    }

}

