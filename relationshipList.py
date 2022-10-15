import json
from relationship import relationship

class relationshipList:

    relationshipList = []
    jsonFile = ''

    def __init__(self, jsonFileDirectory):

        self.jsonFile = jsonFileDirectory

        file = open(self.jsonFile)

        relationshipDict = (json.load(file))["relationships"]


        # Adds relationship to the class' array
        # Note: Does not consider categories (for now)
        for relationshipName in relationshipDict:
            secondDict = relationshipDict[relationshipName]

            relationshipObject = relationship(relationshipName, secondDict['date'])

            self.retrieveRelationshipData(relationshipObject, secondDict)
            self.relationshipList.append(relationshipObject)

        file.close()


    def retrieveRelationshipData(self,relationshipObject, relationshipData):
        relationshipObject.setJobTitle(relationshipData["jobTitle"])
        relationshipObject.setCompany(relationshipData["company"])
        relationshipObject.setContactInfo(relationshipData["contactInfo"])
        relationshipObject.setConnectionReason(relationshipData["connectionReason"])
        relationshipObject.setIndustry(relationshipData["industry"])
        relationshipObject.setOtherNotes(relationshipData["otherNotes"])
        relationshipObject.setEducation(relationshipData["education"])

    def retrieveByName(self, name):
        for relationships in self.relationshipList:
            if(relationship.getName() == name):
                return relationship

        return False

    #Requires relationship object
    def setRelationshipData(self, newRelationship):
        self.relationshipList.appends(newRelationship)

    #Requires relationship object
    def removeRelationshipData(self, oldRelationship):
        self.relationshipList.remove(oldRelationship)






