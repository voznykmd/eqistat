// Google charts packages upload

google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.load('current', {packages:['table']});
google.charts.load('current', {packages: ['geochart']});


google.charts.setOnLoadCallback(drawGID);



//Slider to charts

        var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
          showDivs(slideIndex += n);
        }

        function currentDiv(n) {
          showDivs(slideIndex = n);
        }

        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("myslides");

          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";
          }
          x[slideIndex-1].style.display = "block";
        }


//Draw buildings table

function drawBTable() {
  var queryStringTB = encodeURIComponent('SELECT B, C, E, G, I, J, K, L, M, N, O, P, Q LIMIT 29 OFFSET 0');

  var querytb = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Будівлі&headers=1&tq=' + queryStringTB );
  querytb.send(handleQueryResponseTB);
}

function handleQueryResponseTB(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var datatb = response.getDataTable();
  var tableb = new google.visualization.Table(document.getElementById('b-modal'));
  tableb.draw(datatb);
}

//Draw avto table

function drawATable() {
  var queryStringTA = encodeURIComponent('SELECT B, C, D, F, H, J, L, N LIMIT 29 OFFSET 0');

  var queryta = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Транспорт&headers=1&tq=' + queryStringTA );
  queryta.send(handleQueryResponseTA);
}

function handleQueryResponseTA(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var datata = response.getDataTable();
  var tablea = new google.visualization.Table(document.getElementById('a-modal'));
  tablea.draw(datata);
}

//Draw eqip table

function drawETable() {
  var queryStringTE = encodeURIComponent('SELECT B, D, E, F, G, H, I, J, K, L LIMIT 29 OFFSET 0');

  var queryte = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Обладнання&headers=1&tq=' + queryStringTE );
  queryte.send(handleQueryResponseTE);
}

function handleQueryResponseTE(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var datate = response.getDataTable();
  var tablee = new google.visualization.Table(document.getElementById('e-modal'));
  tablee.draw(datate);
}

//Draw PC table

function drawPTable() {
  var queryStringTP = encodeURIComponent('SELECT B, C, D, E, F, G, H, I, J LIMIT 29 OFFSET 0');

  var querytp = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Компютери&headers=1&tq=' + queryStringTP );
  querytp.send(handleQueryResponseTP);
}

function handleQueryResponseTP(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var datatp = response.getDataTable();
  var tablep = new google.visualization.Table(document.getElementById('p-modal'));
  tablep.draw(datatp);
}


//Draw buildings AGES chart

    function drawGID() {
      var queryString = encodeURIComponent('SELECT B, K, L, M, N LIMIT 29 OFFSET 0');

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Sheet1&headers=1&tq=' + queryString );
      query.send(handleQueryResponse);
    }

    function handleQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

var options = {

        legend: { position: 'top', alignment: 'center', maxLines: 2 },
        colors: ['#19BA55', '#4271B7', '#FFAE23', '#FF4923'],
        isStacked: 'percent',
	hAxis: {
        slantedText:true,
        slantedTextAngle:60},
       };

      var data = response.getDataTable();
      var chart = new google.visualization.ColumnChart(document.getElementById('build-age'));
      chart.draw(data, options);
    }

// Draw buildings STATE chart

function drawGID1() {
  var queryString1 = encodeURIComponent('SELECT B, O, P, Q LIMIT 29 OFFSET 0');

  var query1 = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Sheet1&headers=1&tq=' + queryString1 );
  query1.send(handleQueryResponse1);
}

function handleQueryResponse1(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

var options = {

    legend: { position: 'top', alignment: 'center', maxLines: 2 },
    colors: ['#4271B7', '#FFAE23', '#FF4923'],
    isStacked: 'percent',
    hAxis: {
        slantedText:true,
        slantedTextAngle:60},
   };

  var data1 = response.getDataTable();
  var chart1 = new google.visualization.ColumnChart(document.getElementById('build-state'));
  chart1.draw(data1, options);
}

// Draw buildings TYPE chart

function drawGID2() {
  var queryString2 = encodeURIComponent('SELECT B, E, G LIMIT 29 OFFSET 0');

  var query2 = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Sheet1&headers=1&tq=' + queryString2 );
  query2.send(handleQueryResponse2);
}

function handleQueryResponse2(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

var options = {

    legend: { position: 'top', alignment: 'center', maxLines: 2 },
    colors: ['#19BA55', '#FFAE23'],
    isStacked: 'percent',
hAxis: {
        slantedText:true,
        slantedTextAngle:60},
   };

  var data2 = response.getDataTable();
  var chart2 = new google.visualization.ColumnChart(document.getElementById('build-type'));
  chart2.draw(data2, options);
}

// Draw  chart AVTO-1

function drawAvto1() {
  var queryStringA1 = encodeURIComponent('SELECT B, D, F LIMIT 29 OFFSET 0');

  var queryA1 = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Транспорт&headers=1&tq=' + queryStringA1 );
  queryA1.send(handleQueryResponseA1);
}

function handleQueryResponseA1(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

var optionsA1 = {

    legend: { position: 'top', alignment: 'center', maxLines: 2 },
    colors: ['#19BA55', '#FF4923'],
    isStacked: 'percent',
hAxis: {
        slantedText:true,
        slantedTextAngle:60},
   };

  var dataA1 = response.getDataTable();
  var chartA1 = new google.visualization.ColumnChart(document.getElementById('auto-1'));
  chartA1.draw(dataA1, optionsA1);
}


// Draw  chart AVTO-2

function drawAvto2() {
  var queryStringA2 = encodeURIComponent('SELECT B, H, J LIMIT 29 OFFSET 0');

  var queryA2 = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Транспорт&headers=1&tq=' + queryStringA2 );
  queryA2.send(handleQueryResponseA2);
}

function handleQueryResponseA2(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

var optionsA2 = {

    legend: { position: 'top', alignment: 'center', maxLines: 2 },
    colors: ['#19BA55', '#FF4923'],
    isStacked: 'percent',
hAxis: {
        slantedText:true,
        slantedTextAngle:60},
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
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Транспорт&headers=1&tq=' + queryStringA4 );
  queryA4.send(handleQueryResponseA4);
}

function handleQueryResponseA4(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

var optionsA4 = {

    legend: { position: 'top', alignment: 'center', maxLines: 2 },
    colors: ['#19BA55', '#FF4923'],
    isStacked: 'percent',
hAxis: {
        slantedText:true,
        slantedTextAngle:60},
   };

  var dataA4 = response.getDataTable();
  var chartA4 = new google.visualization.ColumnChart(document.getElementById('auto-4'));
  chartA4.draw(dataA4, optionsA4);
}

// Draw  chart EQIP1

function drawEqip1() {
  var queryStringE1 = encodeURIComponent('SELECT B, C, D LIMIT 29 OFFSET 0');

  var queryE1 = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Обладнання&headers=1&tq=' + queryStringE1 );
  queryE1.send(handleQueryResponseE1);
}

function handleQueryResponseE1(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

var optionsE1 = {

    legend: { position: 'top', alignment: 'center', maxLines: 2 },
    colors: ['#19BA55', '#4271B7'],
hAxis: {
        slantedText:true,
        slantedTextAngle:60},

   };

  var dataE1 = response.getDataTable();
  var chartE1 = new google.visualization.ColumnChart(document.getElementById('eqip-1'));
  chartE1.draw(dataE1, optionsE1);
}


// Draw  chart EQIP2 - MAP


 function drawEqip2() {
  var queryStringE2 = encodeURIComponent('SELECT B, E LIMIT 28 OFFSET 0');

  var queryE2 = new google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Обладнання&headers=1&tq=' + queryStringE2 );
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
sizeAxis: { minValue: 0, maxValue: 100 },

colorAxis: {colors: ['#FF4923', '#19BA55']},
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
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Компютери&headers=1&tq=' + queryStringPC1 );
  queryPC1.send(handleQueryResponsePC1);
}

function handleQueryResponsePC1(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

var optionsPC1 = {

  legend: { position: 'top', alignment: 'center', maxLines: 2 },
  colors: ['#19BA55', '#FF4923'],
  isStacked: 'percent',
hAxis: {
        slantedText:true,
        slantedTextAngle:60},
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
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Компютери&headers=1&tq=' + queryStringPC2 );
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
      'https://docs.google.com/spreadsheets/d/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/gviz/tq?sheet=Компютери&headers=1&tq=' + queryStringPC3 );
  queryPC3.send(handleQueryResponsePC3);
}

function handleQueryResponsePC3(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

var optionsPC3 = {
  title: "Кількість закладів підключених до мережі Інтернет",
  legend: { position: 'top', alignment: 'center', maxLines: 2 },
  colors: ['#19BA55'],
  // titlePosition: 'out',

hAxis: {
        slantedText:true,
        slantedTextAngle:60},
 };

  var dataPC3 = response.getDataTable();
  var chartPC3 = new google.visualization.BarChart(document.getElementById('pc-3'));
  chartPC3.draw(dataPC3, optionsPC3);
}


//Redraw charts after resize

$(window).resize(function(){
  drawGID();
  drawGID1();
  drawAvto1();
  drawAvto2();
  drawAvto4();
  drawEqip1();
  drawEqip2();
  drawPC1();
  drawPC3();

});

//Draw charts on-click

  $("#b-age").click(function(){
      drawGID();
  });

  $("#b-state").click(function(){
      drawGID1();
  });

  $("#b-type").click(function(){
      drawGID2();
  });

  $("#avto-zn").click(function(){
      drawAvto1();
  });

  $("#avto-bn").click(function(){
      drawAvto2();
  });


  $('#myModal').modal('toggle')

	// Buildings title dinamic values //

var buildtotal = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/1/public/full/R31C3?alt=json").done(function(){
                var json = JSON.parse(buildtotal.responseText);

                var btotal = (json.entry.gs$cell.$t);
                document.getElementById("b-total").innerHTML = btotal;

            });

var buildcritical = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/1/public/full/R31C17?alt=json").done(function(){
                var json = JSON.parse(buildcritical.responseText);

                var bcritical = (json.entry.gs$cell.$t);
                document.getElementById("b-critical").innerHTML = bcritical;

            });

	// Automobiles title dinamic values //

var autototal = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/2/public/full/R31C3?alt=json").done(function(){
                var json = JSON.parse(autototal.responseText);

                var atotal = (json.entry.gs$cell.$t);
                document.getElementById("a-total").innerHTML = atotal;

            });

var autostaf = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/2/public/full/R31C7?alt=json").done(function(){
                var json = JSON.parse(autostaf.responseText);

                var astaf = (json.entry.gs$cell.$t);
                document.getElementById("a-staf").innerHTML = astaf;

            });

// PC title dinamic values //

var pctotal = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/3/public/full/R31C3?alt=json").done(function(){
                var json = JSON.parse(pctotal.responseText);

                var ptotal = (json.entry.gs$cell.$t);
                document.getElementById("p-total").innerHTML = ptotal;

            });

var pcstaf = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/3/public/full/R31C4?alt=json").done(function(){
                var json = JSON.parse(pcstaf.responseText);

                var pstaf = (json.entry.gs$cell.$t);
                document.getElementById("p-staf").innerHTML = pstaf;

            });


// Medeqipment title dinamic values //

var eqiptotal = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/4/public/full/R31C4?alt=json").done(function(){
                var json = JSON.parse(eqiptotal.responseText);

                var etotal = (json.entry.gs$cell.$t);
                document.getElementById("e-total").innerHTML = etotal + "%";

            });

var eqipmri = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/4/public/full/R31C15?alt=json").done(function(){
                var json = JSON.parse(eqipmri.responseText);

                var mristaf = (json.entry.gs$cell.$t);
                document.getElementById("mri-staf").innerHTML = mristaf;

            });
