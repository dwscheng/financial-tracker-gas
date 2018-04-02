
// < !--Your application bootstrap-- >
/**
 * You must include the dependency on 'ngMaterial' 
 */

var app = angular.module('TrackerApp', ['ngMaterial', 'ngMessages']);
app.controller('TransactionCtrl',function(){
    this.entries = [getDeafault()];

    //function to add new entry
    this.add_entry= function(){
      this.entries.push(getDeafault());
      var id = this.entries.length - 1;
      this.entries[id].id = id;  
    };

    this.remove_entry = function(){
        this.entries.pop();
    };

    //account and account Type
    this.account = { "Account Type": ["01 - Cash", "02 - Bank Account", "02 - Bank Account", "02 - Bank Account", "02 - Bank Account", "02 - Bank Account", "02 - Bank Account", "02 - Bank Account", "02 - Bank Account", "02 - Bank Account", "02 - Bank Account", "03 - Credit Card", "03 - Credit Card", "03 - Credit Card", "03 - Credit Card", "03 - Credit Card", "03 - Credit Card", "03 - Credit Card", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "04 - Loan", "05 - Income", "06 - Spending", "07 - Adjustment"], "Account": ["Cash", "HSBC Chequing", "Interactive Brokers", "Coinbase", "HSBC Saving", "Tangerine Saving", "Tangerine TFSA", "QuesTrade", "HSBC TFSA", "RBC Chequing", "RBC Saving", "HSBC Premier Mastercard", "Amazon Rewards", "HSBC Mastercard", "Amex PwC", "Amex Gold", "Sears Mastercard", "The Bay Mastercard", "Jen", "Gawdy", "Francesca", "Teresa", "Satapon", "Cheryl", "Louise", "Andrea", "Cyrus", "Lester", "KHo", "Adrian", "Tim Law", "Travix", "Perry", "Arie", "Jessica", "Tian", "William", "Garry", "Aaron Au", "Income", "Spending", "Adjustment"] };
    //category
    this.category = { "Category": ["Food", "Transfer", "Transport", "Entertainment", "Housing", "Wellness", "Income", "Wireless", "Others", "Travel", "Shopping", "Clothing", "Gifts", "Adjustment", "Education"] }
    //currency options
    this.ccy = { "Currency": ["CAD", "USD", "HKD"] };

    this.process = function(entry){
        console.log(entry);
        entry.processing=true; 
        entry.hide=true;
        console.log(JSON.stringify(entry));
        
    };
});

app.directive('uploadfile',function(){
    return{
        retrict:'A',
        link: function(scope,element){
            element.bind('click',function(e){
                // console.log(e.target);
                // console.log($(e.target).siblings('#upload'));
                $(e.target).siblings('#upload').click()
            })
        }
    }
});

function getDeafault() {
    //default values for a transaction
    var data_deafault = {
        id: 0,
        date: new Date(),
        category: '',
        desc: '',
        multi_ccy: false,
        hide: false,
        processing: false,
        source: {
            acc: '',
            ccy: 'CAD',
            amt: null
        },
        target: {
            acc: '',
            ccy: 'CAD',
            amt: null
        }
    }
    return data_deafault;
}
