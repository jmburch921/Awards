function PeopleSpaViewModel(hostThisContext) {
    var self = this;
    self.hostContext = hostThisContext;
    var parent;
    var currentDomainLogin;
    var environment;

    self.ApiBaseUri = ko.observable();

    self.WrapupReasonHasError = ko.observable(false);
    self.WrapupReasonError = ko.observable();

    self.SearchDataLoading = ko.observable(false);
    self.SearchDataList = ko.observableArray([]);

    self.apiUrl = {
        getAllPersons: "api/v1/Persons"
    }
    //Initialize and get the nominations
    self.Initialize = function (env, parentContext, model) {
        parent = parentContext;
        environment = env;
        self.ApiBaseUri(applicationTools.baseUrl(environment));
        self.InitializeBaseState();
    };
    self.firstnameCheckBox = ko.observable();
    self.firstnameSearchValue = ko.observable();
    self.lastnameCheckBox = ko.observable();
    self.lastnameSearchValue = ko.observable();
    self.emailCheckBox = ko.observable();
    self.emailSearchValue = ko.observable();


    self.InitializeBaseState = function () {
        self.SearchDataLoading(false);
        self.SearchDataList.removeAll();
        self.firstnameCheckBox(false);
        self.firstnameSearchValue("");
        self.lastnameCheckBox(false);
        self.lastnameSearchValue("");
        self.emailCheckBox(false);
        self.emailSearchValue("");
        
    };




    self.OpenPeople = function () {
        var id = this.PersonId;
        console.log("Opening " + id);
        window.location.replace("../people/view?id=" + id);
    }

    self.EditPeople = function () {
        var id = this.PersonId;
        console.log("Opening " + id);
        window.location.replace("../people/edit?id=" + id);
    }
    
    self.CreatePeople = function () {
        window.location.replace("../people/create");
    }



    self.GetPeople = function () {
        self.SearchDataLoading(true);
        self.SearchDataList.removeAll();
        var url = "";
        var headers = [applicationTools.appAuth.claimsHeader([applicationTools.appAuth.domainNameClaim("metmom\\roolivier")])];
        url = self.ApiBaseUri() + self.apiUrl.getAllPersons;
        console.log("Getting all people : for " + currentDomainLogin);
        ajaxAsync.ajaxGet(self, self._populateWrapupReason, url, null, null, null, headers);
    };

    self._populateWrapupReason = function (result) {
        if (result.success) {
            var data = result.data;

            for (var i = 0; i < data.length; i++) {
                self.SearchDataList.push(data[i]);
            }
        } else {
            if (result.errorMessage === "error") {
                self.WrapupReasonHasError(true);
                self.WrapupReasonError("");
            } else {
                self.WrapupReasonHasError(true);
                self.WrapupReasonError(result.errorMessage);
            }


        }
        self.SearchDataLoading(false);
    };


}
