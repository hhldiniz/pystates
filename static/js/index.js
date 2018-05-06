$(document).ready(function(){
    $("#register_btn").click(function(){
        let state_name = $("#state_name").val();
        let pib = $("#pib").val();
        let population = $("#population").val();
        let xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200)
            {
                let response = this.responseText;
                alert(response);
            }
        };
       xmlHttpRequest.open("POST","/", true);
       xmlHttpRequest.send(`{"state_name": "${state_name}", "pib": "${pib}", "population": "${population}"}`);
    });
});