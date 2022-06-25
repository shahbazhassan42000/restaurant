//AJAX GET request
document.addEventListener("DOMContentLoaded",function (event) {
    let status=true;
    document.querySelector("button").addEventListener("click",function () {
        status=true;
       $ajaxUtils.sendGetRequest("data/name.json",function (response) {
          if(status)
          {
              let message=response.name+"'s wife is "+response.wife;
              if(response.haveChilds)
                  message+=". He have childs";
              else
                  message+=".<br> He have no childs";
              message+=" and have ";
              message+=response.annualIncome;
              message+=" annual income.";
              document.querySelector("#content").innerHTML="<h2>"+message+"</h2>";
          }
          else
              document.querySelector("#content").innerHTML="<h2>"+response+"</h2>";
       },true);
    });


});