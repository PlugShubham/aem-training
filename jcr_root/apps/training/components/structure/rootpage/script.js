"use strict";

use(function(){
    
    var input1= this.value1;
    var input2= this.value2;
    var message = "Welcome "+input1+" "+input2+" to the Page: ";
    var pageName = currentPage.name;
    
    return{
        greetings:message,
        pageTitle:pageName
    }
})