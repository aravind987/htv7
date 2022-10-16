/*document.getElementById('parentName').appendChild(document.createElement('section').appendChild(document.createNode(data["firstName"] + " " + data["lastName"])))
    document.getElementById('parentDate').appendChild(document.createElement('section').appendChild(document.createNode(data["date"])))
    document.getElementById('parentContact').appendChild(document.createElement('section').appendChild(document.createNode(data["contactInfo"])))
    document.getElementById('parentCompany').appendChild(document.createElement('section').appendChild(document.createNode(data["company"])))
    document.getElementById('parentIndustry').appendChild(document.createElement('section').appendChild(document.createNode(data["industry"])))
    document.getElementById('parentJobTitle').appendChild(document.createElement('section').appendChild(document.createNode(data["jobTitle"])))
    document.getElementById('parentEducation').appendChild(document.createElement('section').appendChild(document.createNode(data["education"])))
    document.getElementById('parentNotes').appendChild(document.createElement('section').appendChild(document.createNode(data["otherNotes"])))
*/


function displayInformation(data) {
    document.getElementById('cardName').innerHTML = data["firstName"] + " " + data["lastName"];
    document.getElementById('cardDate').innerHTML = data["date"];
    document.getElementById('cardContact').innerHTML = data["contactInfo"]["phoneNumber"] + ' & ' + data["contactInfo"]["emailAddress"];
    document.getElementById('cardCompany').innerHTML = data["company"];
    document.getElementById('cardIndustry').innerHTML = data["industry"];
    document.getElementById('cardJob').innerHTML = data["jobTitle"];
    document.getElementById('cardEducation').innerHTML = data["education"];
    document.getElementById('cardNotes').innerHTML = data["otherNotes"];
    console.log("Test")
    document.querySelector('.informationCard').style.left = '70%';
}

function closeInformation() {

    document.querySelector('.informationCard').style.left = '100%';

    document.getElementById('cardName').innerHTML = ' ';
    document.getElementById('cardDate').innerHTML = ' ';
    document.getElementById('cardContact').innerHTML = ' ';
    document.getElementById('cardCompany').innerHTML = ' ';
    document.getElementById('cardIndustry').innerHTML = ' ';
    document.getElementById('cardJob').innerHTML = ' ';
    document.getElementById('cardEducation').innerHTML = ' ';
    document.getElementById('cardNotes').innerHTML = ' ';



}

export {displayInformation, closeInformation}