window.onload = eventHandler;
var accountInfoList = [];

function Account(name, deposit) {
    this.name = name;
    this.deposit = deposit;
}

function eventHandler() {
    
    var acc = function() {
        var account = "";
        var deposit = "";
        
        return {
            createAccount: function() {
                
                this.account = document.getElementById("accountName").value;
                this.deposit = document.getElementById("deposit").value;
                var det = "";
                var acco = new Account(account, deposit);
                accountInfoList.push(acco);
                for(account in accountInfoList) {
                    det += account.name + " " + account.amount
                }  
                document.getElementById("details").value = det;             
            }
        };        
    };    
    var create = document.getElementById("createNewAccount");
    var acc1 = acc();
    create.onclick = acc1.createAccount;
    
    
    
}


