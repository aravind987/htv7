const res = await fetch("http://localhost:5000/networkData")
var relationshipData = await res.json()
console.log(relationshipData[Object.keys(relationshipData)[6]])

document.getElementById("name1").innerHTML = relationshipData[Object.keys(relationshipData)[0]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[0]].lastName);
document.getElementById("company1").innerHTML = relationshipData[Object.keys(relationshipData)[0]].company;
document.getElementById("job1").innerHTML = relationshipData[Object.keys(relationshipData)[0]].jobTitle;
document.getElementById("education1").innerHTML = relationshipData[Object.keys(relationshipData)[0]].education;

document.getElementById("name2").innerHTML = relationshipData[Object.keys(relationshipData)[1]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[1]].lastName);
document.getElementById("company2").innerHTML = relationshipData[Object.keys(relationshipData)[1]].company;
document.getElementById("job2").innerHTML = relationshipData[Object.keys(relationshipData)[1]].jobTitle;
document.getElementById("education2").innerHTML = relationshipData[Object.keys(relationshipData)[1]].education;

document.getElementById("name3").innerHTML = relationshipData[Object.keys(relationshipData)[2]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[2]].lastName);
document.getElementById("company3").innerHTML = relationshipData[Object.keys(relationshipData)[2]].company;
document.getElementById("job3").innerHTML = relationshipData[Object.keys(relationshipData)[2]].jobTitle;
document.getElementById("education3").innerHTML = relationshipData[Object.keys(relationshipData)[2]].education;

document.getElementById("name4").innerHTML = relationshipData[Object.keys(relationshipData)[3]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[3]].lastName);
document.getElementById("company4").innerHTML = relationshipData[Object.keys(relationshipData)[3]].company;
document.getElementById("job4").innerHTML = relationshipData[Object.keys(relationshipData)[3]].jobTitle;
document.getElementById("education4").innerHTML = relationshipData[Object.keys(relationshipData)[3]].education;

document.getElementById("name5").innerHTML = relationshipData[Object.keys(relationshipData)[4]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[4]].lastName);
document.getElementById("company5").innerHTML = relationshipData[Object.keys(relationshipData)[4]].company;
document.getElementById("job5").innerHTML = relationshipData[Object.keys(relationshipData)[4]].jobTitle;
document.getElementById("education5").innerHTML = relationshipData[Object.keys(relationshipData)[4]].education;

document.getElementById("name6").innerHTML = relationshipData[Object.keys(relationshipData)[5]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[5]].lastName);
document.getElementById("company6").innerHTML = relationshipData[Object.keys(relationshipData)[5]].company;
document.getElementById("job6").innerHTML = relationshipData[Object.keys(relationshipData)[5]].jobTitle;
document.getElementById("education6").innerHTML = relationshipData[Object.keys(relationshipData)[5]].education;

document.getElementById("name7").innerHTML = relationshipData[Object.keys(relationshipData)[6]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[6]].lastName);
document.getElementById("company7").innerHTML = relationshipData[Object.keys(relationshipData)[6]].company;
document.getElementById("job7").innerHTML = relationshipData[Object.keys(relationshipData)[6]].jobTitle;
document.getElementById("education7").innerHTML = relationshipData[Object.keys(relationshipData)[6]].education;

document.getElementById("name8").innerHTML = relationshipData[Object.keys(relationshipData)[7]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[7]].lastName);
document.getElementById("company8").innerHTML = relationshipData[Object.keys(relationshipData)[7]].company;
document.getElementById("job8").innerHTML = relationshipData[Object.keys(relationshipData)[7]].jobTitle;
document.getElementById("education8").innerHTML = relationshipData[Object.keys(relationshipData)[7]].education;

document.getElementById("name9").innerHTML = relationshipData[Object.keys(relationshipData)[8]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[8]].lastName);
document.getElementById("company9").innerHTML = relationshipData[Object.keys(relationshipData)[8]].company;
document.getElementById("job9").innerHTML = relationshipData[Object.keys(relationshipData)[8]].jobTitle;
document.getElementById("education9").innerHTML = relationshipData[Object.keys(relationshipData)[8]].education;

document.getElementById("name10").innerHTML = relationshipData[Object.keys(relationshipData)[9]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[9]].lastName);
document.getElementById("company10").innerHTML = relationshipData[Object.keys(relationshipData)[9]].company;
document.getElementById("job10").innerHTML = relationshipData[Object.keys(relationshipData)[9]].jobTitle;
document.getElementById("education10").innerHTML = relationshipData[Object.keys(relationshipData)[9]].education;

document.getElementById("name11").innerHTML = relationshipData[Object.keys(relationshipData)[10]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[10]].lastName);
document.getElementById("company11").innerHTML = relationshipData[Object.keys(relationshipData)[10]].company;
document.getElementById("job11").innerHTML = relationshipData[Object.keys(relationshipData)[10]].jobTitle;
document.getElementById("education11").innerHTML = relationshipData[Object.keys(relationshipData)[10]].education;

document.getElementById("name12").innerHTML = relationshipData[Object.keys(relationshipData)[11]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[11]].lastName);
document.getElementById("company12").innerHTML = relationshipData[Object.keys(relationshipData)[11]].company;
document.getElementById("job12").innerHTML = relationshipData[Object.keys(relationshipData)[11]].jobTitle;
document.getElementById("education12").innerHTML = relationshipData[Object.keys(relationshipData)[11]].education;

document.getElementById("name13").innerHTML = relationshipData[Object.keys(relationshipData)[12]].firstName.concat(" ", relationshipData[Object.keys(relationshipData)[12]].lastName);
document.getElementById("company13").innerHTML = relationshipData[Object.keys(relationshipData)[12]].company;
document.getElementById("job13").innerHTML = relationshipData[Object.keys(relationshipData)[12]].jobTitle;
document.getElementById("education13").innerHTML = relationshipData[Object.keys(relationshipData)[12]].education;