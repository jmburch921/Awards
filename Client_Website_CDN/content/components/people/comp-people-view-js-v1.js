function PeopleViewViewModel(hostThisContext) {
    var self = this;
    self.hostContext = hostThisContext;
    var parent;
    var currentDomainLogin;
    var environment;
    var currentPersonId;

    self.ApiBaseUri = ko.observable();

    self.WrapupReasonHasError = ko.observable(false);
    self.WrapupReasonError = ko.observable();

    self.WrapupReasonLoading = ko.observable(false);
    self.WrapupReasonList = ko.observableArray([]);

    self.apiUrl = {
        getPersonById: "api/v1/Persons",
        getAllPersons: "api/v1/Persons",
        getAllPersonTypes: "api/v1/PersonTypes",
        getAllIdentifierTypes: "api/v1/IdentifierTypes",
        postPerson: "api/v1/Persons"
    }
    //Initialize and get the nominations
    self.Initialize = function (env, parentContext, model, itemId) {
        currentPersonId = itemId;
        parent = parentContext;
        environment = env;
        self.ApiBaseUri(applicationTools.baseUrl(environment));
    };

    self.OpenPeopleList = function () {
        window.location.replace("../people/search");
    };
    self.EditPeopleList = function () {
        window.location.replace("../people/Edit?id=" + currentPersonId);
    };
    self.personId = ko.observable("");
    self.personTypes = ko.observable("");
    self.availablePersonTypes = ko.observableArray(['NONE AVAILABLE']);
    self.firstname = ko.observable("");
    self.lastname = ko.observable("");
    self.email = ko.observable("");
    self.manager = ko.observable("");
    self.availableManagers = ko.observableArray(['NONE AVAILABLE']);
    self.identifier = ko.observable("");
    self.availableIdentifiers = ko.observableArray(['NONE AVAILABLE']);
    self.identifiervalue = ko.observable();
    self.inactive = ko.observable(true);
    self.inactiveDate = ko.observable();
    //Get the person types for the dropdown
    self.GetPersonById = function () {
        var url = "";
        var headers = [applicationTools.appAuth.claimsHeader([applicationTools.appAuth.domainNameClaim(currentDomainLogin)])];
        url = self.ApiBaseUri() + self.apiUrl.getPersonById + "/" + currentPersonId;
        ajaxAsync.ajaxGet(self, self._PopulatePerson, url, null, null, null, headers);
    };
    self._PopulatePerson = function (result) {
        if (result.success) {
            var data = result.data;
            self.personId(data[0].PersonId);
            self.personTypes(self.getPersonTypeItem(data[0].PersonTypeId));
            self.identifier(self.getIdentifierItem(data[0].IdentifierTypeId));
            self.identifiervalue(data[0].IdentifierValue);
            self.manager(self.getManagerItem(data[0].ManagerPersonId));
            self.firstname(data[0].Firstname);
            self.lastname(data[0].Lastname);
            self.email(data[0].EMail);
            self.inactive(data[0].InActive);
            self.inactiveDate(data[0].InActiveDate);
        }
    }
    
    
    
    //Get the person types for the dropdown
    self.GetPersonTypes = function () {
        self.availablePersonTypes.removeAll();
        var url = "";
        var headers = [applicationTools.appAuth.claimsHeader([applicationTools.appAuth.domainNameClaim(currentDomainLogin)])];
        url = self.ApiBaseUri() + self.apiUrl.getAllPersonTypes;
        ajaxAsync.ajaxGet(self, self._GetPersonTypes, url, null, null, null, headers);
    };
    self._GetPersonTypes = function (result) {
        if (result.success) {
            var data = result.data;
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                dataItem.testvalue = data[i].Name+" "+data[i].Name
                self.availablePersonTypes.push(dataItem);
            }
        }
    };
    self.getPersonTypeItem = function (id) {
        for (var i = 0; i < self.availablePersonTypes().length; i++) {
            var curId = self.availablePersonTypes()[i].PersonTypeId
            if ( curId === id) {
                console.log(self.availablePersonTypes()[i]);
                return self.availablePersonTypes()[i];
            }
        }
    }

    //Get the managers for the dropdown
    self.GetManagers = function () {
        self.availableManagers.removeAll();
        var url = "";
        var headers = [applicationTools.appAuth.claimsHeader([applicationTools.appAuth.domainNameClaim(currentDomainLogin)])];
        url = self.ApiBaseUri() + self.apiUrl.getAllPersons;
        ajaxAsync.ajaxGet(self, self._GetManagers, url, null, null, null, headers);
    };
    self._GetManagers = function (result) {
        if (result.success) {
            var data = result.data;
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                dataItem.Fullname = data[i].Firstname + " " + data[i].Lastname
                self.availableManagers.push(dataItem);
            }
        }
    };
    self.getManagerItem = function (id) {
        for (var i = 0; i < self.availableManagers().length; i++) {
            var curId = self.availableManagers()[i].PersonId
            if ( curId === id) {
                var dataItem = self.availableManagers()[i];
                dataItem.Fullname = dataItem.Firstname + " " + dataItem.Lastname;
                return dataItem;
            }
        }
    }
    //Get the identifiers for the dropdown
    self.GetIdentifiers = function () {
        self.availableIdentifiers.removeAll();
        var url = "";
        var headers = [applicationTools.appAuth.claimsHeader([applicationTools.appAuth.domainNameClaim(currentDomainLogin)])];
        url = self.ApiBaseUri() + self.apiUrl.getAllIdentifierTypes;
        ajaxAsync.ajaxGet(self, self._GetIdentifiers, url, null, null, null, headers);
    };    
    self._GetIdentifiers = function (result) {
        if (result.success) {
            var data = result.data;
            for (var i = 0; i < data.length; i++) {
                self.availableIdentifiers.push(data[i]);
            }
        }
    };
    self.getIdentifierItem = function (id) {
        for (var i = 0; i < self.availableIdentifiers().length; i++) {
            var curId = self.availableIdentifiers()[i].IdentifierTypeId
            if ( curId === id) {
                console.log(self.availableIdentifiers()[i]);
                return self.availableIdentifiers()[i];
            }
        }
    }
}
