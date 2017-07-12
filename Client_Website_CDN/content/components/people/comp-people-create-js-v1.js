function PeopleCreateViewModel(hostThisContext) {
    var self = this;
    self.hostContext = hostThisContext;
    var parent;
    var currentDomainLogin;
    var environment;

    self.ApiBaseUri = ko.observable();

    self.WrapupReasonHasError = ko.observable(false);
    self.WrapupReasonError = ko.observable();

    self.WrapupReasonLoading = ko.observable(false);
    self.WrapupReasonList = ko.observableArray([]);

    self.apiUrl = {
        getAllPersons: "api/v1/Persons",
        getAllPersonTypes: "api/v1/PersonTypes",
        getAllIdentifierTypes: "api/v1/IdentifierTypes",
        postPerson: "api/v1/Persons"
    }
    //Initialize and get the nominations
    self.Initialize = function (env, parentContext, model) {
        parent = parentContext;
        environment = env;
        self.ApiBaseUri(applicationTools.baseUrl(environment));
    };

    self.OpenPeopleList = function () {
        window.location.replace("../people/search");
    };

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
    self.CreatePersonItem = function () {
        var jsonObject = JSON.stringify({
            personTypeId: self.personTypes().PersonTypeId,
            firstname: self.firstname(),
            lastname: self.lastname(),
            eMail: self.email(),
            managerPersonId: self.manager().PersonId,
            identifierTypeId: self.identifier().IdentifierTypeId,
            identifierValue: self.identifiervalue()
        });
        console.log(jsonObject)
        var url = "";
        var headers = [applicationTools.appAuth.claimsHeader([applicationTools.appAuth.domainNameClaim(currentDomainLogin)])];
        url = self.ApiBaseUri() + self.apiUrl.postPerson;
        ajaxAsync.ajaxPost(self, self.OpenPeopleList, url, null, jsonObject, null, headers);
    };

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
                self.availablePersonTypes.push(dataItem);
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
                var dataItem = data[i];
                dataItem.testvalue = data[i].Name + " " + data[i].Name
                self.availableIdentifiers.push(dataItem);
            }
        }
    };
}
