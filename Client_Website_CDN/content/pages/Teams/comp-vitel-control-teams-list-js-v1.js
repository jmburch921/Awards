function VitelWrapupReasonsListViewModel(hostThisContext) {
    var self = this;
    self.hostContext = hostThisContext;
    var parent;
    var currentDomainLogin;
    var environment;
    
    self.VitelControlEnvironmentUrl = ko.observable();

    self.WrapupReasonHasError = ko.observable(false);
    self.WrapupReasonError = ko.observable();

    self.WrapupReasonLoading = ko.observable(false);
    self.WrapupReasonList = ko.observableArray([]);

	self.apiUrl = {
        getAllWrapupReason: "api/v1/WrapupReasons"
	}
    //Initialize and get the nominations
    self.Initialize = function (domainLogin, env, parentContext, model) {
        parent = parentContext;
        currentDomainLogin = domainLogin;
        environment = env;
        self.VitelControlEnvironmentUrl(GetVitelControlUrl(environment));
    };

    self.OpenWrapupReason = function(){
        var wrapupReasonId = this.id;
        console.log("Opening "+ wrapupReasonId);
        window.location.replace("~/../View?id="+ wrapupReasonId);
    }
    
    self.EditWrapupReason = function(){
        var wrapupReasonId = this.id;
        console.log("Opening "+ wrapupReasonId);
        window.location.replace("~/../Edit?id="+ wrapupReasonId);
    }
    
    self.CreateWrapupReason = function(){
        console.log("Create new ");
        window.location.replace("~/../Create");
    }
    

    self.GetWrapupReason = function () {
        self.WrapupReasonLoading(true);
        self.WrapupReasonList.removeAll();
        var url = "";
        var headers = [vitelTools.vitelAuth.claimsHeader([vitelTools.vitelAuth.domainNameClaim(currentDomainLogin)])];
        url = self.VitelControlEnvironmentUrl() + self.apiUrl.getAllWrapupReason;
        console.log("Getting WrapupReason : for " + currentDomainLogin);
        vitelAjaxAsync.ajaxGet(self, self._populateWrapupReason, url, null, null, null, headers);
    };

    self._populateWrapupReason = function (result) {
        if (result.success) {
            var data = result.data;
            
            for (var i = 0; i < data.length; i++) {
                self.WrapupReasonList.push(data[i]);
            }


        } else {
             if(result.errorMessage==="error"){
                self.WrapupReasonHasError(true);
                self.WrapupReasonError("");
            }else{
                self.WrapupReasonHasError(true);
                self.WrapupReasonError(result.errorMessage);
            }
            
            
        }
        self.WrapupReasonLoading(false);
    };


}
