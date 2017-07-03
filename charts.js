// Google charts packages upload
google.charts.load('current', {
    'packages': ['corechart', 'bar', 'controls', 'table', 'geochart']
});

google.charts.setOnLoadCallback(getBuildingsAgeChart);

// Global variable declaration
var queryGlobalLink = 'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=';
var querySufix = '&headers=1&tq=';
//Link to data for big titles
var titleBuildingsData = 'https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/1/public/full/';
//List of names
var buildings = 'Будівлі';
var cars = 'Транспорт';
var equipment = 'Обладнання';
var computers = 'Компютери';
//Full query link
var queryBuildingsLink = queryGlobalLink + buildings + querySufix;
var queryCarsLink = queryGlobalLink + cars + querySufix;
var queryEquipLink = queryGlobalLink + equipment + querySufix;
var queryPCLink = queryGlobalLink + computers + querySufix;
//Global charts options
var columnChartOptions = {
    isStacked: true,
    legend: {
        position: 'top',
        alignment: 'center',
        maxLines: 2
    },
    colors: ['#19BA55', '#4271B7', '#FFAE23', '#FF4923'],
    isStacked: 'percent',
    hAxis: {
        slantedText: true,
        slantedTextAngle: 60
    },
};

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
            'controlType': 'CategoryFilter',
            'containerId': 'buildings-age-filter',
            'options': {
                'filterColumnIndex': 0,
            }
        });
        // Create a chart, passing some options
        var colChart = new google.visualization.ChartWrapper({
            'chartType': 'ColumnChart',
            'containerId': 'buildings-age-chart',
            'options': {
                isStacked: 'percent',
                'legend': {
                    position: 'top',
                    alignment: 'center',
                    maxLines: 2
                },
                vAxis: {
                    format: 'percent'
                }
            }
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
            'controlType': 'CategoryFilter',
            'containerId': 'buildings-type-filter',
            'options': {
                'filterColumnIndex': 0,
            }
        });
        // Create a chart, passing some options
        var colChart = new google.visualization.ChartWrapper({
            'chartType': 'ColumnChart',
            'containerId': 'buildings-type-chart',
            'options': {
                isStacked: 'percent',
                'legend': {
                    position: 'top',
                    alignment: 'center',
                    maxLines: 2
                },
                vAxis: {
                    format: 'percent'
                }
            }
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
            'controlType': 'CategoryFilter',
            'containerId': 'buildings-state-filter',
            'options': {
                'filterColumnIndex': 0,
            }
        });
        // Create a chart, passing some options
        var colChart = new google.visualization.ChartWrapper({
            'chartType': 'ColumnChart',
            'containerId': 'buildings-state-chart',
            'options': {
                isStacked: 'percent',
                'legend': {
                    position: 'top',
                    alignment: 'center',
                    maxLines: 2
                },
                vAxis: {
                    format: 'percent'
                }
            }
        });
        dashboard.bind(control, colChart);
        dashboard.draw(data);
    }
}

// Draw  chart AVTO-1

function drawAvto1() {
    var queryStringA1 = encodeURIComponent('SELECT B, D, F LIMIT 29 OFFSET 0');

    var queryA1 = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Транспорт&headers=1&tq=' + queryStringA1);
    queryA1.send(handleQueryResponseA1);
}

function handleQueryResponseA1(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var optionsA1 = {

        legend: {
            position: 'top',
            alignment: 'center',
            maxLines: 2
        },
        colors: ['#19BA55', '#FF4923'],
        isStacked: 'percent',
        hAxis: {
            slantedText: true,
            slantedTextAngle: 60
        },
    };

    var dataA1 = response.getDataTable();
    var chartA1 = new google.visualization.ColumnChart(document.getElementById('auto-1'));
    chartA1.draw(dataA1, optionsA1);
}


// Draw  chart AVTO-2

function drawAvto2() {
    var queryStringA2 = encodeURIComponent('SELECT B, H, J LIMIT 29 OFFSET 0');

    var queryA2 = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Транспорт&headers=1&tq=' + queryStringA2);
    queryA2.send(handleQueryResponseA2);
}

function handleQueryResponseA2(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var optionsA2 = {

        legend: {
            position: 'top',
            alignment: 'center',
            maxLines: 2
        },
        colors: ['#19BA55', '#FF4923'],
        isStacked: 'percent',
        hAxis: {
            slantedText: true,
            slantedTextAngle: 60
        },
    };

    var dataA2 = response.getDataTable();
    var chartA2 = new google.visualization.ColumnChart(document.getElementById('auto-2'));
    chartA2.draw(dataA2, optionsA2);
}

// Draw  chart AVTO-3  MUST BE HERE!!!

// Draw  chart AVTO-4

function drawAvto4() {
    var queryStringA4 = encodeURIComponent('SELECT B, L, N LIMIT 29 OFFSET 0');

    var queryA4 = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Транспорт&headers=1&tq=' + queryStringA4);
    queryA4.send(handleQueryResponseA4);
}

function handleQueryResponseA4(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var optionsA4 = {

        legend: {
            position: 'top',
            alignment: 'center',
            maxLines: 2
        },
        colors: ['#19BA55', '#FF4923'],
        isStacked: 'percent',
        hAxis: {
            slantedText: true,
            slantedTextAngle: 60
        },
    };

    var dataA4 = response.getDataTable();
    var chartA4 = new google.visualization.ColumnChart(document.getElementById('auto-4'));
    chartA4.draw(dataA4, optionsA4);
}

// Draw  chart EQIP1

function drawEqip1() {
    var queryStringE1 = encodeURIComponent('SELECT B, C, D LIMIT 29 OFFSET 0');

    var queryE1 = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Обладнання&headers=1&tq=' + queryStringE1);
    queryE1.send(handleQueryResponseE1);
}

function handleQueryResponseE1(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var optionsE1 = {

        legend: {
            position: 'top',
            alignment: 'center',
            maxLines: 2
        },
        colors: ['#19BA55', '#4271B7'],
        hAxis: {
            slantedText: true,
            slantedTextAngle: 60
        },

    };

    var dataE1 = response.getDataTable();
    var chartE1 = new google.visualization.ColumnChart(document.getElementById('eqip-1'));
    chartE1.draw(dataE1, optionsE1);
}


// Draw  chart EQIP2 - MAP


function drawEqip2() {
    var queryStringE2 = encodeURIComponent('SELECT B, E LIMIT 28 OFFSET 0');

    var queryE2 = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Обладнання&headers=1&tq=' + queryStringE2);
    queryE2.send(handleQueryResponseE2);
}

function handleQueryResponseE2(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var optionsE2 = {

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

    var dataE2 = response.getDataTable();
    var chartE2 = new google.visualization.GeoChart(document.getElementById('eqip-2'));
    chartE2.draw(dataE2, optionsE2);
}

// Draw  chart EQIP3


// Draw  chart PC1

function drawPC1() {
    var queryStringPC1 = encodeURIComponent('SELECT B, C, D LIMIT 29 OFFSET 0');

    var queryPC1 = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Компютери&headers=1&tq=' + queryStringPC1);
    queryPC1.send(handleQueryResponsePC1);
}

function handleQueryResponsePC1(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var optionsPC1 = {

        legend: {
            position: 'top',
            alignment: 'center',
            maxLines: 2
        },
        colors: ['#19BA55', '#FF4923'],
        isStacked: 'percent',
        hAxis: {
            slantedText: true,
            slantedTextAngle: 60
        },
    };

    var dataPC1 = response.getDataTable();
    var chartPC1 = new google.visualization.ColumnChart(document.getElementById('pc-1'));
    chartPC1.draw(dataPC1, optionsPC1);
}

//Draw chart PC2 - Placement

function drawPC2() {

    // Create our data table.

    var queryStringPC2 = encodeURIComponent('SELECT B, E, F, G LIMIT 29');

    var queryPC2 = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Компютери&headers=1&tq=' + queryStringPC2);
    queryPC2.send(handleQueryResponsePC2);
}

function handleQueryResponsePC2(response) {

    var datapc2 = response.getDataTable();
    // Create a dashboard.
    var dashboard = new google.visualization.Dashboard(
        document.getElementById('pc-2'));
    // Create a range slider, passing some options
    var controlPC2 = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'pc-2-filter',
        'options': {
            'filterColumnIndex': 0,
        }
    });
    // Create a chart, passing some options
    var colChart = new google.visualization.ChartWrapper({
        'chartType': 'ColumnChart',
        'containerId': 'pc-2-chart',
        'options': {
            isStacked: 'percent',
            'legend': 'right',
        }
    });

    dashboard.bind(controlPC2, colChart);

    dashboard.draw(datapc2);
}

//Draw chart PC3 - Internet

function drawPC3() {
    var queryStringPC3 = encodeURIComponent('SELECT B, H LIMIT 29 OFFSET 0');

    var queryPC3 = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Компютери&headers=1&tq=' + queryStringPC3);
    queryPC3.send(handleQueryResponsePC3);
}

function handleQueryResponsePC3(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var optionsPC3 = {
        title: "Кількість закладів підключених до мережі Інтернет",
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
    };

    var dataPC3 = response.getDataTable();
    var chartPC3 = new google.visualization.BarChart(document.getElementById('pc-3'));
    chartPC3.draw(dataPC3, optionsPC3);
}


//Redraw charts after resize

$(window).resize(function() {
    getBuildingsAgeChart();
    getBuildingsStateChart();
    getBuildingsTypeChart();
    drawAvto1();
    drawAvto2();
    drawAvto4();
    drawEqip1();
    drawEqip2();
    drawPC1();
    drawPC3();

});

//Draw charts on-click

$("#b-age").click(function() {
    getBuildingsAgeStateChart();
});

$("#b-type").click(function() {
    getBuildingsTypeChart();
});

$("#b-state").click(function() {
    getBuildingsStateChart();
});

$("#avto-zn").click(function() {
    drawAvto1();
});

$("#avto-bn").click(function() {
    drawAvto2();
});

$('#myModal').modal('toggle')

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

var autototal = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/2/public/full/R31C3?alt=json").done(function() {
    var json = JSON.parse(autototal.responseText);

    var atotal = (json.entry.gs$cell.$t);
    document.getElementById("a-total").innerHTML = atotal;

});

var autostaf = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/2/public/full/R31C7?alt=json").done(function() {
    var json = JSON.parse(autostaf.responseText);

    var astaf = (json.entry.gs$cell.$t);
    document.getElementById("a-staf").innerHTML = astaf;

});

// PC title dinamic values //

var pctotal = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/3/public/full/R31C3?alt=json").done(function() {
    var json = JSON.parse(pctotal.responseText);

    var ptotal = (json.entry.gs$cell.$t);
    document.getElementById("p-total").innerHTML = ptotal;

});

var pcstaf = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/3/public/full/R31C4?alt=json").done(function() {
    var json = JSON.parse(pcstaf.responseText);

    var pstaf = (json.entry.gs$cell.$t);
    document.getElementById("p-staf").innerHTML = pstaf;

});


// Medeqipment title dinamic values //

var eqiptotal = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/4/public/full/R31C4?alt=json").done(function() {
    var json = JSON.parse(eqiptotal.responseText);

    var etotal = (json.entry.gs$cell.$t);
    document.getElementById("e-total").innerHTML = etotal + "%";

});

var eqipmri = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/4/public/full/R31C15?alt=json").done(function() {
    var json = JSON.parse(eqipmri.responseText);

    var mristaf = (json.entry.gs$cell.$t);
    document.getElementById("mri-staf").innerHTML = mristaf;

});
