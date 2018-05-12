$(document).ready(function () {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(onLoadGoogleAPI);
    $(".state_population_menu_item").click(function () {
        $(".state_population_menu_item").removeClass("active");
        $(this).addClass("active");
    });

    $(".state_pib_menu_item").click(function () {
        $(".state_pib_menu_item").removeClass("active");
        $(this).addClass("active");
    });

    $(".population_pib_menu_item").click(function () {
        $(".population_pib_menu_item").removeClass("active");
        $(this).addClass("active");
    });
    function onLoadGoogleAPI() {
        let data = new google.visualization.DataTable();
        data.addColumn('string', 'Estados');
        data.addColumn('number', "População");
        let request = new HTTPRequest();
        request.setHost("/states");
        request.setData("");
        request.openCon("GET");
        request.sendRequest();
        let request_obj = request.getXmlHttpRequestObject();
        let dataTable = new google.visualization.DataTable();
        request.setOnLoadCallback(function(){
            let preparedData = [];
            let data = JSON.parse(request_obj.responseText);
            for(let obj in data)
            {
                if(data.hasOwnProperty(obj))
                    preparedData.append([obj['name'],parseInt(obj['population'])]);
            }
            dataTable.addRows(preparedData);
        });
        let chartOptions = {'title':'Estado VS População - Barras'};
        let chart = new google.visualization.BarChart(document.getElementById("state_population_graph"));
        chart.draw(dataTable, chartOptions);
    }
});