window.onload = dashboard();
var accountInfoList = [];
var account = {
    name: 'name',
    deposit: 10000
};

function dashboard() {
    var create = document.getElementById("createNewAccount");

    create.onclick = callAccountModule;
    
}

(function callAccountModule() {
    var account;
    var deposit;
    
    function retrieveAccount(){
        account = document.getElementById("accountName");
        deposit = document.getElementById("deposit");
        accountInfoList.push(new account(name, deposit));
    }

    retrieveAccount();
    var details = "";
    for(account in accountInfoList) {
        details+= "Account name: " + account.name + " " + "Balance: " + account.balance + "/n";
    }
    document.getElementById("details").value = details;
})();
