// Google charts packages upload
google.charts.load('current', {
    'packages': ['corechart', 'bar', 'controls', 'table', 'geochart']
});

google.charts.setOnLoadCallback(getBuildingsAgeChart);
google.charts.setOnLoadCallback(getChangesTable);

// Global variable declaration
var queryGlobalLink = 'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=';
var querySufix = '&headers=1&tq=';
//Link to data for big titles
var titleBuildingsData = 'https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/1/public/full/';
var titleCarsData = 'https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/2/public/full/';
var titleEquipData = 'https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/3/public/full/';
var titlePCData = 'https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/4/public/full/';
//List of names
var buildings = 'Будівлі';
var cars = 'Транспорт';
var equipment = 'Обладнання';
var computers = 'Компютери';
var changes = 'Зміни';
//Full query link
var queryBuildingsLink = queryGlobalLink + buildings + querySufix;
var queryCarsLink = queryGlobalLink + cars + querySufix;
var queryEquipLink = queryGlobalLink + equipment + querySufix;
var queryPCLink = queryGlobalLink + computers + querySufix;
var queryChangesLink = queryGlobalLink + changes + querySufix;
//Global charts options
//Main columns charts options
var columnChartOptions = {
    isStacked: 'percent',
    colors: ['#19BA55', '#4271B7', '#FFAE23', '#FF4923'],
    legend: {
        position: 'top',
        alignment: 'center',
        maxLines: 2
    },
    vAxis: {
        format: 'percent'
    },
    hAxis: {
        slantedText: true,
        slantedTextAngle: 60
    },
    vAxis: {
        format: 'percent'
    }
};
//Two column chart options
var twoColChartOptions = {
    legend: {
        position: 'top',
        alignment: 'center',
        maxLines: 2
    },
    colors: ['#19BA55', '#4271B7', '#FFAE23'],
    hAxis: {
        slantedText: true,
        slantedTextAngle: 60
    },
};

//Geo chart options
var geoChartOptions = {
    region: 'UA',
    displayMode: 'markers',
    sizeAxis: {
        minValue: 0,
        maxValue: 100
    },
    colorAxis: {
        colors: ['#FF4923', '#19BA55']
    },
    backgroundColor: 'white',
    datalessRegionColor: 'white',
    defaultColor: '#f5f5f5',
}

//Draw buildings table
function getBuildingsTable() {
    let queryBuildingsData = 'SELECT B, C, E, G, I, J, K, L, M, N, O, P, Q LIMIT 29 OFFSET 0';
    let queryBuildingsString = encodeURIComponent(queryBuildingsData);
    let query = new google.visualization.Query(queryBuildingsLink + queryBuildingsString);
    query.send(drawBuildingsTable);

    function drawBuildingsTable(response) {
        let data = response.getDataTable();
        let table = new google.visualization.Table(document.getElementById('b-modal'));
        table.draw(data);
    }
}

//Draw cars table
function getCarsTable() {
    let queryCarsData = 'SELECT B, C, D, F, H, J, L, N LIMIT 29 OFFSET 0';
    let queryCarsString = encodeURIComponent(queryCarsData);
    let query = new google.visualization.Query(queryCarsLink + queryCarsString);
    query.send(drawCarsTable);

    function drawCarsTable(response) {
        let data = response.getDataTable();
        let table = new google.visualization.Table(document.getElementById('a-modal'));
        table.draw(data);
    }
}

//Draw eqip table
function getEquipTable() {
    let queryEquipData = 'SELECT B, D, E, F, G, H, I, J, K, L LIMIT 29 OFFSET 0';
    let queryEquipString = encodeURIComponent(queryEquipData);
    let query = new google.visualization.Query(queryEquipLink + queryEquipString);
    query.send(drawEquipTable);

    function drawEquipTable(response) {
        let data = response.getDataTable();
        let table = new google.visualization.Table(document.getElementById('e-modal'));
        table.draw(data);
    }
}

//Draw PC table
function getPCTable() {
    let queryPCData = 'SELECT B, C, D, E, F, G, H, I, J LIMIT 29 OFFSET 0';
    let queryPCString = encodeURIComponent(queryPCData);
    let query = new google.visualization.Query(queryPCLink + queryPCString);
    query.send(drawPCTable);

    function drawPCTable(response) {
        let data = response.getDataTable();
        let table = new google.visualization.Table(document.getElementById('p-modal'));
        table.draw(data);
    }
}

//Draw Changes table (bootom of page)
function getChangesTable() {
    let queryChangesData = 'SELECT B, C, E LIMIT 28';
    let queryChangesString = encodeURIComponent(queryChangesData);
    let query = new google.visualization.Query(queryChangesLink + queryChangesString);
    query.send(drawChangesTable);

    function drawChangesTable(response) {
        let data = response.getDataTable();
        let table = new google.visualization.Table(document.getElementById('changes'));
        table.draw(data);
    }
}

// Draw buildings AGE chart
function getBuildingsAgeChart() {
    let queryBuildingsData = 'SELECT B, K, L, M, N LIMIT 29 OFFSET 0';
    let queryBuildingsString = encodeURIComponent(queryBuildingsData);
    var query = new google.visualization.Query(queryBuildingsLink + queryBuildingsString);
    query.send(drawBuildingsAgeChart);

    function drawBuildingsAgeChart(response) {
        var data = response.getDataTable();
        var dashboard = new google.visualization.Dashboard(document.getElementById('build-age'));
        // Create a range slider, passing some options
        var control = new google.visualization.ControlWrapper({
            'controlType': 'NumberRangeFilter',
            'containerId': 'buildings-age-filter',
            'options': {
                'filterColumnLabel': '>50 р',
            }
        });
        // Create a chart, passing some options
        var colChart = new google.visualization.ChartWrapper({
            'chartType': 'ColumnChart',
            'containerId': 'buildings-age-chart',
            'options': columnChartOptions
        });
        dashboard.bind(control, colChart);
        dashboard.draw(data);
    }
}

// Draw buildings TYPE chart
function getBuildingsTypeChart() {
    let queryBuildingsData = 'SELECT B, E, G LIMIT 29 OFFSET 0';
    let queryBuildingsString = encodeURIComponent(queryBuildingsData);
    var query = new google.visualization.Query(queryBuildingsLink + queryBuildingsString);
    query.send(drawBuildingsTypeChart);

    function drawBuildingsTypeChart(response) {
        var data = response.getDataTable();
        var dashboard = new google.visualization.Dashboard(document.getElementById('build-type'));
        // Create a range slider, passing some options
        var control = new google.visualization.ControlWrapper({
            'controlType': 'NumberRangeFilter',
            'containerId': 'buildings-type-filter',
            'options': {
                'filterColumnIndex': 1,
            }
        });
        // Create a chart, passing some options
        var colChart = new google.visualization.ChartWrapper({
            'chartType': 'ColumnChart',
            'containerId': 'buildings-type-chart',
            'options': columnChartOptions
        });
        dashboard.bind(control, colChart);
        dashboard.draw(data);
    }
}

// Draw buildings STATE chart
function getBuildingsStateChart() {
    let queryBuildingsData = 'SELECT B, O, P, Q LIMIT 29 OFFSET 0';
    let queryBuildingsString = encodeURIComponent(queryBuildingsData);
    var query = new google.visualization.Query(queryBuildingsLink + queryBuildingsString);
    query.send(drawBuildingsStateChart);

    function drawBuildingsStateChart(response) {
        var data = response.getDataTable();
        var dashboard = new google.visualization.Dashboard(document.getElementById('build-state'));
        // Create a range slider, passing some options
        var control = new google.visualization.ControlWrapper({
            'controlType': 'NumberRangeFilter',
            'containerId': 'buildings-state-filter',
            'options': {
                'filterColumnIndex': 3,
            }
        });
        // Create a chart, passing some options
        var colChart = new google.visualization.ChartWrapper({
            'chartType': 'ColumnChart',
            'containerId': 'buildings-state-chart',
            'options': columnChartOptions
        });
        dashboard.bind(control, colChart);
        dashboard.draw(data);
    }
}

// Draw  chart AVTO-1
function drawAvto1() {
    var queryString = encodeURIComponent('SELECT B, D, F LIMIT 29 OFFSET 0');
    var query = new google.visualization.Query(queryCarsLink + queryString);
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('auto-1'));
        chart.draw(data, columnChartOptions);
    }
}

// Draw  chart AVTO-2
function drawAvto2() {
    var queryString = encodeURIComponent('SELECT B, H, J LIMIT 29 OFFSET 0');
    var query = new google.visualization.Query(queryCarsLink + queryString);
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('auto-2'));
        chart.draw(data, columnChartOptions);
    }
}

// Draw  chart AVTO-3
function drawAvto3() {
    var queryString = encodeURIComponent('SELECT B, L, N LIMIT 29 OFFSET 0');
    var query = new google.visualization.Query(queryCarsLink + queryString);
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('auto-3'));
        chart.draw(data, columnChartOptions);
    }
}

// Draw  chart EQIP1
function drawEqip1() {
    var queryString = encodeURIComponent('SELECT B, C, D LIMIT 29 OFFSET 0');
    var query = new google.visualization.Query(queryEquipLink + queryString);
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('eqip-1'));
        chart.draw(data, twoColChartOptions);
    }
}

// Draw  chart EQIP2 - (Buble) MAP
function drawEqip2() {
    var queryString = encodeURIComponent('SELECT B, C, D, E, F LIMIT 28 OFFSET 0');
    var query = new google.visualization.Query(queryEquipLink + queryString);
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        var data = response.getDataTable();
        var chart = new google.visualization.BubbleChart(document.getElementById('eqip-2'));
        chart.draw(data, geoChartOptions);
    }
}

// Draw  chart EQIP3
function drawEqip3() {
    var queryString = encodeURIComponent('SELECT B, I, J, L LIMIT 28 OFFSET 0');
    var query = new google.visualization.Query(queryEquipLink + queryString);
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('eqip-3'));
        chart.draw(data, twoColChartOptions);
    }
}

// Draw  chart PC1
function drawPC1() {
    var queryString = encodeURIComponent('SELECT B, C, D LIMIT 29 OFFSET 0');
    var query = new google.visualization.Query(queryPCLink + queryString);
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        var data = response.getDataTable();
        var chart = new google.visualization.SteppedAreaChart(document.getElementById('pc-1'));
        chart.draw(data, columnChartOptions);
    }
}

//Draw chart PC2 - Placement


function drawPC2() {
    var queryString = encodeURIComponent('SELECT B, E, F, G LIMIT 29 OFFSET 0');
    var query = new google.visualization.Query(queryPCLink + queryString);
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
        var data = response.getDataTable();
        var chart = new google.visualization.SteppedAreaChart(document.getElementById('pc-2'));
        chart.draw(data, columnChartOptions);
    }
}

//Draw chart PC3 - Internet
function drawPC3() {
    var queryStringPC3 = encodeURIComponent('SELECT B, L LIMIT 29 OFFSET 0');
    var queryPC3 = new google.visualization.Query(queryPCLink + queryStringPC3);
    queryPC3.send(handleQueryResponsePC3);
}

function handleQueryResponsePC3(response) {

    var optionsPC3 = {
        legend: {
            position: 'top',
            alignment: 'center',
            maxLines: 2
        },
        colors: ['#19BA55'],
        // titlePosition: 'out',

        hAxis: {
            slantedText: true,
            slantedTextAngle: 60
        },
        vAxis: {
            format: 'percent'
        }
    };

    var dataPC3 = response.getDataTable();
    var chartPC3 = new google.visualization.SteppedAreaChart(document.getElementById('pc-3'));
    chartPC3.draw(dataPC3, optionsPC3);
}

// Buildings title dinamic values //

var buildtotal = $.ajax(titleBuildingsData + 'R31C3?alt=json').done(function() {
    var json = JSON.parse(buildtotal.responseText);
    var text = (json.entry.gs$cell.$t);
    document.getElementById("b-total").innerHTML = text;
});

var buildcritical = $.ajax(titleBuildingsData + 'R31C17?alt=json').done(function() {
    var json = JSON.parse(buildcritical.responseText);
    var text = (json.entry.gs$cell.$t);
    document.getElementById("b-critical").innerHTML = text;
});

// Automobiles title dinamic values //
var autototal = $.ajax(titleCarsData + 'R31C3?alt=json').done(function() {
    var json = JSON.parse(autototal.responseText);
    var text = (json.entry.gs$cell.$t);
    document.getElementById("a-total").innerHTML = text;
});

var autostaf = $.ajax(titleCarsData + "R31C7?alt=json").done(function() {
    var json = JSON.parse(autostaf.responseText);
    var text = (json.entry.gs$cell.$t);
    document.getElementById("a-staf").innerHTML = text;
});

// PC title dinamic values //
var pctotal = $.ajax(titleEquipData + "R31C3?alt=json").done(function() {
    var json = JSON.parse(pctotal.responseText);
    var text = (json.entry.gs$cell.$t);
    document.getElementById("p-total").innerHTML = text;
});

var pcstaf = $.ajax(titleEquipData + "R31C4?alt=json").done(function() {
    var json = JSON.parse(pcstaf.responseText);
    var text = (json.entry.gs$cell.$t);
    document.getElementById("p-staf").innerHTML = text;
});


// Medeqipment title dinamic values //
var eqiptotal = $.ajax(titlePCData + "R31C4?alt=json").done(function() {
    var json = JSON.parse(eqiptotal.responseText);
    var text = (json.entry.gs$cell.$t);
    document.getElementById("e-total").innerHTML = text + "%";
});

var eqipmri = $.ajax(titlePCData + "R31C15?alt=json").done(function() {
    var json = JSON.parse(eqipmri.responseText);
    var text = (json.entry.gs$cell.$t);
    document.getElementById("mri-staf").innerHTML = text;
});
