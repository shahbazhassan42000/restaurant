$(function () {
    $("#navbarToggle").blur(function (event) {
        let screenWidth=window.innerWidth;
        if(screenWidth<768)
            $("#collapsable-nav").collapse('hide');
    });
});

(function (global) {
    let dc={};
    let homeHtml="snippets/home-snippet.php";

    //Convenient function for inserting innerHTML for 'select'
    let insertHtml=function (selector,html) {
      let targetElement=document.querySelector(selector);
      targetElement.innerHTML=html;
    };
    //Show loading icon inside element identified by 'selector'
    let showLoading=function (selector) {
        let html="<div class='text-center'>";
        html+="<img src='images/gifs/making-pancake-loader.gif'></div>";
        insertHtml(selector,html);
    };
    
    //on page load (before images or css)
    document.addEventListener("DOMContentLoaded",function (event) {

        //on first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHtml,function (responseText) {
            insertHtml("#main-content",responseText);
        },false);
    });
    global.$dc=dc;
})(window);
