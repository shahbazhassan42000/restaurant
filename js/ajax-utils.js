(function (global) {
    //set up a namespace for out utility
    let ajaxUtils={};

    //Returns an HTTP request object
    function getRequestObject() {
        if(global.XMLHttpRequest)
            return (new XMLHttpRequest());
        else if(global.ActiveXObject) //for very old IE browsers (optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        else
        {
            global.alert("AJAX is not supported!!!");
            return null;
        }
    }

    //Makes an AJAX GET request to 'requestUrl'
    ajaxUtils.sendGetRequest=function (requestUrl,responseHandler,isJsonResponse=true) {
        let request=getRequestObject();
        request.onreadystatechange=function () {
          handleResponse(request,responseHandler,isJsonResponse);
        };
        request.open("GET",requestUrl,true);
        request.send(null);   //for POST only
    };

    //Only calls user provided 'responseHandler' function if response is ready without errors
    function handleResponse(request,responseHandler,isJsonResponse) {
        if((request.readyState==4)&&(request.status==200)){
            if(isJsonResponse)
                responseHandler(JSON.parse(request.responseText));
            else
                responseHandler(request.responseText);
        }
    }

    //expose utility to the global object
    global.$ajaxUtils=ajaxUtils;
})(window);