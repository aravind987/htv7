from socket import INADDR_UNSPEC_GROUP


class relationship:

    #Variables
    name = ""
    date = ""
    jobTitle = ""
    education = ""
    industry = ""
    company = ""
    connectionReason = ""
    contactInfo = []
    otherNotes = []

    def __init__(self,name,date):
        self.name = name
        self.date = date

    #Getters
    def getName (self):
        return self.name
    def getDate (self):
        return self.date
    def getJobTitle (self):
        return self.jobTitle
    def getEducation (self):
        return self.education
    def getIndustry (self):
        return self.industry
    def getCompany (self):
        return self.company
    def getConnectionReason (self):
        return self.connectionReason
    def getContactInfo (self):
        return self.contactInfo
    def getOtherNotes (self):
        return self.otherNotes

    #Setters   
    def setName (self, name):
        self.name = name
    def setDate (self, date):
        self.date = date
    def setJobTitle (self, jobTitle):
        self.jobTitle = jobTitle
    def setEducation (self, education):
        self.education = education
    def setIndustry (self, industry):
        self.industry = industry
    def setCompany (self, company):
        self.company = company
    def setConnectionReason (self, connectionReason):
        self.connectionReason = connectionReason
    def setContactInfo (self, contactInfo):
        self.contactInfo = contactInfo
    def setOtherNotes (self, otherNotes):
        self.otherNotes = otherNotes