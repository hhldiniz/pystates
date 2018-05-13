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
        dataTable.addColumn('string', 'Estado');
        dataTable.addColumn('number', "População");
        request.setOnLoadRequestCallback(function(){
            let preparedData = [];
            let data = JSON.parse(request_obj.responseText.replace(/'/g,"\""));
            for(let i=0; i<data.length;i++)
            {
                preparedData.push([data[i]["name"], parseInt(data[i]["population"])]);
            }
            dataTable.addRows(preparedData);
            let chartOptions = {'title':'Estado VS População - Barras', width: $(window).width()};
            let chart = new google.visualization.BarChart(document.getElementById("state_population_graph_bars"));
            chart.draw(dataTable, chartOptions);
            dataTable = new google.visualization.DataTable();
            dataTable.addColumn('string', 'Estado');
            dataTable.addColumn('number', 'PIB');
            preparedData = [];
            for(let i=0; i<data.length;i++)
            {
                preparedData.push([data[i]['name'], parseInt(data[i]['pib'])]);
            }
            dataTable.addRows(preparedData);
            chartOptions = {'title': 'Estado VS PIB - Barras', width: $(window).width()};
            chart = new google.visualization.BarChart(document.getElementById("state_pib_graph_bars"));
            chart.draw(dataTable, chartOptions);
            chart = new google.visualization.BarChart(document.getElementById("population_pib_graph_bars"));
            dataTable = new google.visualization.DataTable();
            dataTable.addColumn('number', 'População');
            dataTable.addColumn('number', 'PIB');
            preparedData = [];
            chartOptions = {'title':'População VS PIB - Barras', width: $(window).width()};
            for(let i =0; i<data.length;i++)
            {
                preparedData.push([parseInt(data[i]['population']), parseInt(data[i]['pib'])]);
            }
            dataTable.addRows(preparedData);
            chart.draw(dataTable, chartOptions);
        });
    }
});