const res = await fetch("http://localhost:5000/networkData")
var relationshipData = await res.json()
console.log(relationshipData[Object.keys(relationshipData)[0]])

document.createTextNode(document.getElementById("name").innerHTML = relationshipData[Object.keys(relationshipData)[0]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[0]].lastName));
document.createTextNode(document.getElementById("company").innerHTML = relationshipData[Object.keys(relationshipData)[0]].company);
document.createTextNode(document.getElementById("job").innerHTML = relationshipData[Object.keys(relationshipData)[0]].jobTitle);
document.createTextNode(document.getElementById("education").innerHTML = relationshipData[Object.keys(relationshipData)[0]].education);

/*
const nameT = document.createTextNode(document.getElementById("name").innerHTML = relationshipData[Object.keys(relationshipData)[0]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[0]].lastName));
const compT = document.createTextNode(document.getElementById("company").innerHTML = relationshipData[Object.keys(relationshipData)[0]].company);
const jobT = document.createTextNode(document.getElementById("job").innerHTML = relationshipData[Object.keys(relationshipData)[0]].jobTitle);
const eduT = document.createTextNode(document.getElementById("education").innerHTML = relationshipData[Object.keys(relationshipData)[0]].education);


for (let i = 0; i < 1; i++) {
    const row = document.createElement("tr");
    const head = document.createElement("th");
    const headText = document.createTextNode(nameT);
    head.appendChild(headText);
    const cell1 = document.createElement("td");
    const cell1Text = document.createTextNode(compT);
    cell1.appendChild(cell1Text);
    const cell2 = document.createElement("td");
    const cell2Text = document.createTextNode(jobT);
    cell2.appendChild(cell2Text);
    const cell3 = document.createElement("td");
    const cell3Text = document.createTextNode(eduT);
    cell3.appendChild(cell3Text);
    row.appendChild(head);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    const element = document.getElementById("tbod");
    element.appendChild(row);
  }
  */