"use strict";

use(function(){
    
    var authorTitle= granite.resource.properties["titleProperty"];
    var jcrTitle= currentPage.title;
    var pageName = currentPage.name;
    
    var title = authorTitle || jcrTitle || pageName;
    
    return{
        title:title
    }
})