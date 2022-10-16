function displayInformation(data) {
    document.getElementById('cardName').innerHTML = data["firstName"] + " " + data["lastName"];
    document.getElementById('cardDate').innerHTML = data["date"];
    document.getElementById('cardContact').innerHTML = data["contactInfo"];
    document.getElementById('cardCompany').innerHTML = data["company"];
    document.getElementById('cardIndustry').innerHTML = data["industry"];
    document.getElementById('cardJob').innerHTML = data["jobTitle"];
    document.getElementById('cardEducation').innerHTML = data["education"];
    document.getElementById('cardNotes').innerHTML = data["otherNotes"];
    console.log("Test")
    document.querySelector('.informationCard').style.left = '70%';
}

function closeInformation() {
    document.getElementById('cardName').innerHTML = ' ';
    document.getElementById('cardDate').innerHTML = ' ';
    document.getElementById('cardContact').innerHTML = ' ';
    document.getElementById('cardCompany').innerHTML = ' ';
    document.getElementById('cardIndustry').innerHTML = ' ';
    document.getElementById('cardJob').innerHTML = ' ';
    document.getElementById('cardEducation').innerHTML = ' ';
    document.getElementById('cardNotes').innerHTML = ' ';

    document.querySelector('.informationCard').style.left = '100%';

}

export {displayInformation, closeInformation}