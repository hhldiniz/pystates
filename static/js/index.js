$(document).ready(function(){
    $("#register_btn").click(function(){
        let state_name = $("#state_name").val();
        let pib = $("#pib").val();
        let population = $("#population").val();
        let data = {"state_name": state_name, "pib": pib, "population": population};
        if(validateStateFormFields(data))
        {
                let xmlHttpRequest = new XMLHttpRequest();
                xmlHttpRequest.onreadystatechange = function(){
                    if(this.readyState === 4 && this.status === 200)
                    {
                        let response = JSON.parse(this.responseText);
                        if(response['result'])
                            new Noty({
                                text: "Cadastro realizado com sucesso!",
                                type: "success",
                                theme: "relax"
                            }).show();
                        else
                            new Noty({
                                text:"Um erro ocorreu ao realizar a inclusão do estado",
                                type:"error",
                                theme: "relax"
                            }).show();
                    }
                };
               xmlHttpRequest.open("POST","/", true);
               xmlHttpRequest.send(JSON.stringify(data));
        }
        else
            new Noty({
               text: "Você forneceu dados inválidos",
               type: "error",
               theme: "relax"
            }).show();
    });

    function validateStateFormFields(data) {
        let regex = /\d+/;
        for(let obj in data)
        {
            if(data.hasOwnProperty(obj))
            {
               switch (obj)
               {
                   case "state_name":
                       if(data[obj].length === 0)
                           return false;
                       break;
                   case "pib":
                       if(data[obj] === "0" || data[obj] === undefined || data[obj].length === 0 || !regex.test(data[obj]))
                           return false;
                       break;
                   case "population":
                        if(data[obj] === "0" || data[obj] === undefined || data[obj].length === 0 || !regex.test(data[obj]))
                           return false;
                        break;
               }
            }
        }
        return true;
    }
});