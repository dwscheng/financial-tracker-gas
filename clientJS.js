Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  });
  
  function getDeafault(){
    //default values for a transaction
    var data_deafault = {
      id: 0,
      date: new Date(),
      category: '',
      desc: '',
      multi_ccy: false,
      source: {
        acc:'',
        ccy:'CAD',
        amt: null
      },
      target:{
        acc:'',
        ccy:'CAD',
        amt: null
      }
    }
    return data_deafault;
  }
  
  document.addEventListener("DOMContentLoaded", function(){
    var myElement = document.getElementById('nav');
    var mc = new Hammer(myElement);
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  
      mc.on('pandown tap', function(ev) {
           console.log(ev);
         $('#navb').click();
    });
  });
  
  (function(){
    var app = angular.module('FTentry',[]);
  
    app.controller('txnController',function(){
      this.entries = [getDeafault()];
  
      //function to add a new entry
      this.add_entry = function(){
        this.entries.push(getDeafault());
        var id = this.entries.length-1;
        this.entries[id].id=id
      };
  
      //function to remove entry
      this.remove_entry = function(){
        this.entries.pop();
      }
  
      //account and account Type
      this.account = {"Account Type":["01 - Cash","02 - Bank Account","02 - Bank Account","02 - Bank Account","02 - Bank Account","02 - Bank Account","02 - Bank Account","02 - Bank Account","02 - Bank Account","02 - Bank Account","02 - Bank Account","03 - Credit Card","03 - Credit Card","03 - Credit Card","03 - Credit Card","03 - Credit Card","03 - Credit Card","03 - Credit Card","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","04 - Loan","05 - Income","06 - Spending","07 - Adjustment"],"Account":["Cash","HSBC Chequing","Interactive Brokers","Coinbase","HSBC Saving","Tangerine Saving","Tangerine TFSA","QuesTrade","HSBC TFSA","RBC Chequing","RBC Saving","HSBC Premier Mastercard","Amazon Rewards","HSBC Mastercard","Amex PwC","Amex Gold","Sears Mastercard","The Bay Mastercard","Jen","Gawdy","Francesca","Teresa","Satapon","Cheryl","Louise","Andrea","Cyrus","Lester","KHo","Adrian","Tim Law","Travix","Perry","Arie","Jessica","Tian","William","Garry","Aaron Au","Income","Spending","Adjustment"]};
      //category
      this.category = {"Category":["Food","Transfer","Transport","Entertainment","Housing","Wellness","Income","Wireless","Others","Travel","Shopping","Clothing","Gifts","Adjustment","Education"]}
      //currency options
      this.ccy = {"Currency":["CAD","USD","HKD"]};
    });
  })();
  