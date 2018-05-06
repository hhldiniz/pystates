$(document).ready(function(){
    $("#register_btn").click(function(){
        let state_name = $("#state_name").val();
        let pib = $("#pib").val();
        let population = $("#population").val();
        $.ajax({
            url: "/",
            method: "POST",
            data: {state_name: state_name, pib: pib, population: population},
            success: data=>{

            },
            error: err=>{
                console.log(err);
            }
       });
    });
});