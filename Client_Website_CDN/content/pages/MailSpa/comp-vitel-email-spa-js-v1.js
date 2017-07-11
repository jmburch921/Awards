function VitelMediaChannelMenuViewModel(hostThisContext) {
    var self = this;
    self.hostContext = hostThisContext;
    var parent;
    var currentDomainLogin;
    var currentAgentId;
    var environment;
self.Action= ko.observable();
            self.Actor= ko.observable();
    self.VitelControlEnvironmentUrl = ko.observable();
    self.CurrentUserDomainUserName = ko.observable();
    self.CurrentAgentId = ko.observable();
    
    self.MediaChannelMenuHasError = ko.observable(false);
    self.MediaChannelMenuError = ko.observable();
    self.MediaChannelMenuLoading = ko.observable(false);
    self.MediaChannelMenuList = ko.observableArray([]);

	self.apiUrl = {
        agentIdFromDomainLogin : "api/v1/Agents/Users/",
        getMediaChannelsForAgent: "api/v1/MediaChannels/Agents/"
	};
    self.Initialize = function (domainLogin, env, parentContext, model ) {
        parent = parentContext;
        currentDomainLogin = domainLogin;
        environment = env;
        self.VitelControlEnvironmentUrl(vitelTools.baseUrl(environment));
        //self.CurrentUserDomainUserName(currentDomainLogin);
        self.CurrentUserDomainUserName(vitelTools.getDomainUserNameFromPage());
        var headers = [vitelTools.vitelAuth.claimsHeader([vitelTools.vitelAuth.domainNameClaim(currentDomainLogin)])];
        var url = self.VitelControlEnvironmentUrl() + self.apiUrl.agentIdFromDomainLogin + self.CurrentUserDomainUserName();
        console.log("Getting agentId for : " + self.CurrentUserDomainUserName());
        vitelAjaxAsync.ajaxGetSync(self, self._populateAgentIdForDomainLogin, url, null, null, null, headers);
        //get the agent for the domain domainLogin
        self.getMediaChannelsForAgent();
    };   
    self._populateAgentIdForDomainLogin= function (result) {
        if (result.success) {
            var data = result.data;            
            self.CurrentAgentId(data);
            console.log("Getting agentId for : " + self.CurrentUserDomainUserName() + " - "+self.CurrentAgentId());
        } else {
            console.log("Error getting agentId for domainLogin.")
        }
    }

    self.getMediaChannelsForAgent = function () {
        self.MediaChannelMenuLoading(true);
        self.MediaChannelMenuList.removeAll();
        var url = "";
        var agentId = 1;
        var headers = [vitelTools.vitelAuth.claimsHeader([vitelTools.vitelAuth.domainNameClaim(currentDomainLogin)])];
        url = self.VitelControlEnvironmentUrl() + self.apiUrl.getMediaChannelsForAgent + self.CurrentAgentId();
        console.log("Getting media channels for : " + self.CurrentAgentId());
        vitelAjaxAsync.ajaxGet(self, self._populateMediaChannelMenu, url, null, null, null, headers);
    };
    self._populateMediaChannelMenu = function (result) {
        if (result.success) {
            var data = result.data;            
            for (var i = 0; i < data.length; i++) {
                var item = new MediaChannelMenuObject(self);
                item.Initialize(data[i].BaseMediaChannelId,data[i].Description );
                self.MediaChannelMenuList.push(item);
            }
        } else {
             if(result.errorMessage==="error"){
                self.MediaChannelMenuHasError(true);
                self.MediaChannelMenuError("");
            }else{
                self.MediaChannelMenuHasError(true);
                self.MediaChannelMenuError(result.errorMessage);
            }
        }
        self.MediaChannelMenuLoading(false);
    };


    function MediaChannelMenuObject(parentContext){
        var self = this;
        self.parentContext = parentContext;
        self.Id = ko.observable(-1);
        self.MediaChannelName = ko.observable("");

        self.Initialize = function(id,name){
            self.Id(id);
            self.MediaChannelName(name);
        },
        self.doNothing = function(){

        },
        self.LoadInboxForMediaChannel  = function(){
            self.parentContext.Action('INBOX');
            self.parentContext.Actor('ALL');
            self.OpenMailList(this.Id());        
        },
        self.LoadUnAssignedForMediaChannel  = function(){
            self.parentContext.Action('UNASSIGNED');
            self.parentContext.Actor('ALL');
            self.OpenMailList(this.Id());        
        },
        self.LoadSentForMediaChannel  = function(){   
            self.parentContext.Action('SENT');
            self.parentContext.Actor('ALL');         
            self.OpenMailList(this.Id());          
        },
        self.LoadInboxForMediaChannelUser  = function(){
            self.parentContext.Action('INBOX');
            self.parentContext.Actor('SELF');
            self.OpenMailList(this.Id());           
        },
        self.LoadSentForMediaChannelUser  = function(){
            self.parentContext.Action('SENT');
            self.parentContext.Actor('SELF');
            self.OpenMailList(this.Id()); 
        },
        self.OpenMailList = function(mediaChannelId){
            var action = self.parentContext.Action();
            var actor = self.parentContext.Actor();
            console.log("doing "+self.parentContext.Action() + " "+ self.parentContext.Actor());
            parentContext.MailLoading(true);
            parentContext.MailList.removeAll();
            
            var agentId = 1;
            var headers = [vitelTools.vitelAuth.claimsHeader([vitelTools.vitelAuth.domainNameClaim(currentDomainLogin)])];
            var url="";
            switch(action) {
                case 'INBOX':
                    switch(actor) {
                        case 'ALL':
                            //INBOX FOR ALL
                            url = self.parentContext.VitelControlEnvironmentUrl()  +"api/v1/Emails/MediaChannels/"+mediaChannelId+"";
                            console.log("Getting mails channels for : " + mediaChannelId);
                            break;
                        case 'SELF':
                            url = self.parentContext.VitelControlEnvironmentUrl()  +"api/v1/Emails/MediaChannels/"+mediaChannelId+"/Agents/Users/"+vitelTools.getDomainUserNameFromPage()+"/Incomplete";
                            break;
                        default:
                            //action without any actor
                    }
                    break;
                case 'SENT':
                    switch(actor) {
                        case 'ALL':
                            url = self.parentContext.VitelControlEnvironmentUrl()  +"api/v1/Emails/MediaChannels/"+mediaChannelId+"/Statuses/6";
                            console.log("Getting completed mails channels for : " + mediaChannelId);
                            break;
                        case 'SELF':
                        url = self.parentContext.VitelControlEnvironmentUrl()  +"api/v1/Emails/MediaChannels/"+mediaChannelId+"/Agents/Users/"+vitelTools.getDomainUserNameFromPage()+"/Statuses/6";
                            break;
                        default:
                            //action without any actor
                    }
                    break;
                case 'UNASSIGNED':
                    switch(actor) {
                        case 'ALL':
                            //INBOX FOR ALL
                            //VitelMail/api/v1/Emails/MediaChannels/1/Statuses/1
                            //var url = 'https://devtest.mmiholdings.co.za:44390/VitelMail/api/v1/Emails/MediaChannels/'+mediaChannelId+''
                            url = self.parentContext.VitelControlEnvironmentUrl()  +"api/v1/Emails/MediaChannels/"+mediaChannelId+"/Statuses/1";
                            console.log("Getting unassigned channels for : " + mediaChannelId);
                            break;
                        default:
                        
                    }
                    
                            //action without any actor
                default:
                    //no action and no actor
            }             
            vitelAjaxAsync.ajaxGet(self, self._returnEmails, url, null, null, null, headers);
        },


        self._returnEmails = function(result){
            if (result.success) {
                var data = result.data;            
                for (var i = 0; i < data.length; i++) {
                    var item = new MailObject(self, self.parentContext);
                    item.Initialize(data[i].id, data[i].fromName, data[i].subject, data[i].statusName, data[i].statusId, data[i].emailReceivedDateTime, data[i].emailReceivedDateTime );
                    parentContext.MailList.push(item);
                    //id,from,subject,crdate,timeInq
                }
            } else {
                if(result.errorMessage==="error"){
                    parentContext.MailHasError(true);
                    parentContext.MailError("");
                }else{
                    parentContext.MailHasError(true);
                    parentContext.MailError(result.errorMessage);
                }
            }
            parentContext.MailLoading(false);
        }
    };

    //Mail

    self.MailHasError = ko.observable(false);
    self.MailError = ko.observable();
    self.MailLoading = ko.observable(false); 
    self.MailList = ko.observableArray([]);; 

    function MailObject(parentContext, mainParentContext){
        var self = this;
        self.parentContext = parentContext;        
        self.mainContext = mainParentContext;
        self.Id = ko.observable(-1);
        self.MediaChannelId = ko.observable(-1);
        self.From = ko.observable("");
        self.Subject = ko.observable("");
        self.Status = ko.observable("");
        self.StatusId = ko.observable("");
        self.ReceivedDateTime = ko.observable("");
        self.TimeInQue = ko.observable("");

        self.Initialize = function(id,from,subject,status,statusId,recdate,timeInq){
            self.Id(id);
            self.From(from);
            self.Subject(subject);
            self.Status(status)
            self.StatusId(statusId)
            self.ReceivedDateTime(recdate);
            self.TimeInQue(timeInq);
        }
        self.Reply = function(){
            var mailObject = this;
            self.mainContext.ReplyToMailModal(mailObject);
        },
        self.PendMail = function(){
            var mailObject = this;
            var url = self.mainContext.VitelControlEnvironmentUrl()  +"api/v1/Emails/"+ mailObject.Id()+"/Statuses/3";
            var headers = [vitelTools.vitelAuth.claimsHeader([vitelTools.vitelAuth.domainNameClaim(currentDomainLogin)])];
            vitelAjaxAsync.ajaxPatch(self, self._reOpen, url, null, null, null, headers);
            
        },
        self.AssignToMyself = function(){
            var mediaChannelId = self.parentContext.Id();

            self.mainContext.MailList.remove(this);
            var mailItem = this;
            console.log("removing " + mailItem.Id());

            var url = self.mainContext.VitelControlEnvironmentUrl()  +"api/v1/Emails/"+mailItem.Id()+"/Agents/Users/"+vitelTools.getDomainUserNameFromPage()+"/Assign";
            var headers = [vitelTools.vitelAuth.claimsHeader([vitelTools.vitelAuth.domainNameClaim(currentDomainLogin)])];
            vitelAjaxAsync.ajaxPatch(self, self._reOpen, url, null, null, null, headers);
        },
        self.UnAssignFromMyself = function(){
            var mediaChannelId = self.parentContext.Id();

            self.mainContext.MailList.remove(this);
            var mailItem = this;
            console.log("removing " + mailItem.Id());

            var url = self.mainContext.VitelControlEnvironmentUrl()  +"api/v1/Emails/"+mailItem.Id()+"/Agents/Users/"+vitelTools.getDomainUserNameFromPage()+"/UnAssign";
            var headers = [vitelTools.vitelAuth.claimsHeader([vitelTools.vitelAuth.domainNameClaim(currentDomainLogin)])];
            vitelAjaxAsync.ajaxPatch(self, self._reOpen, url, null, null, null, headers);
        }
        self._reOpen = function(){
            self.parentContext.OpenMailList(self.parentContext.Id());
        }
        self.PreviewMail = function(){
            self.DisplayDialog(this.Id());
        },
        
        self.DisplayDialog = function(mailId){
            var item = new Dialogue(self, self.mainContext)
            item.Initialize(mailId);
        }

    };

    self.ModalReplyId = ko.observable();
    self.ModalReplyFrom = ko.observable();
    self.ModalReplyTo = ko.observable();
    self.ReplyToMailModal = function(maiObject){
        self.ModalReplyId(maiObject.Id());
        self.ModalReplyFrom(maiObject.From());
        self.ModalReplyTo(maiObject.From());
        $('#EmailReplyModal').modal('show');
    }


    self.DialogId = ko.observable();
    self.DialogFrom = ko.observable();
    self.DialogFromEmail = ko.observable();    
    self.DialogSubject = ko.observable();
    self.DialogBody = ko.observable(); 
    self.DialogStatus = ko.observable();  
    self.DialogErrorHeader = ko.observable();  
    self.DialogErrorMessage = ko.observable();  
      
    self.AssignMyMail = function (){
        
        var id = self.DialogId();
        console.log(this.Action() + " "+ this.Actor()+" id:["+id+"]");
       // this.MailList().remove( function (item) { return item.id === this.DialogId; } );
        alert("assigned" );
    };
    function Dialogue(parentContext, mainParentContext){
        var self = this;
        self.parentContext = parentContext;        
        self.mainContext = mainParentContext;
        self.Id = ko.observable(-1);
        self.Initialize = function(id){
            self.Id(id);
            var url = "";
            var agentId = 1;
            var headers = [vitelTools.vitelAuth.claimsHeader([vitelTools.vitelAuth.domainNameClaim(currentDomainLogin)])];
            //url = self.VitelControlEnvironmentUrl() + self.apiUrl.getMediaChannelsForAgent + agentId;
            url = 'https://devtest.mmiholdings.co.za:44390/VitelMail/api/v1/Emails/'+id
            console.log("Getting specific mail for : " + id);
            vitelAjaxAsync.ajaxGet(self, self._populateDisplay, url, null, null, null, headers);            
        }
        self._populateDisplay = function(result){            
            if (result.success) {
                var data = result.data; 
                mainParentContext.DialogId(data.id);
                mainParentContext.DialogFrom(data.fromName); 
                mainParentContext.DialogFromEmail(data.fromEmail);           
                mainParentContext.DialogSubject(data.subject);            
                mainParentContext.DialogBody(data.emailBody);                
                mainParentContext.DialogStatus(data.statusName);

                
                $('#EmailDisplay').modal('show');
            }  else{
                mainParentContext.DialogErrorHeader("Access denied...");
                mainParentContext.DialogErrorMessage("The email is not allocated to you");
                $('#EmailErrorDisplay').modal('show');
            }          
        };
    }


}
