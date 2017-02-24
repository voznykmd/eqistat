google.charts.load( "current", {packages: ['corechart']});
google.charts.load('upcoming', {'packages': ['geochart']});


      google.charts.setOnLoadCallback(drawGID);
google.charts.setOnLoadCallback(drawVisualization);


    function drawGID() {
      var queryString = encodeURIComponent('SELECT A, B, C LIMIT 22 OFFSET 0');

      var query = new google.visualization.Query(
          'https://docs.google.com/spreadsheets/d/1rP3shkngNOjPTrV8WOezQHkxByxapb1eHxRFYe978dY/gviz/tq?sheet=Sheet1&headers=1&tq=' + queryString );
      query.send(handleQueryResponse);
    }

    function handleQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var data = response.getDataTable();
      var chart = new google.visualization.ColumnChart(document.getElementById('eqip-chart'));
      chart.draw(data);
    }



      $(window).resize(function(){
        drawGID();
        drawGID1();
        drawVisualization();
      });


        $("#auto").click(function(){
            drawGID1();
        });

        $("#eqip").click(function(){
            drawGID();
        });

//Slideshow

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

//

function drawGID1() {
var queryString1 = encodeURIComponent('SELECT A, B, C LIMIT 8 OFFSET 0');

var query1 = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1rP3shkngNOjPTrV8WOezQHkxByxapb1eHxRFYe978dY/gviz/tq?sheet=Sheet1&headers=1&tq=' + queryString1 );
query1.send(handleQueryResponse1);
}

function handleQueryResponse1(response) {
if (response.isError()) {
  alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
  return;
}

var options = {

         slices: {  0: {offset: 0.1},
                    1: {offset: 0.1},
                    2: {offset: 0.1},
                    3: {offset: 0.1},
                    4: {offset: 0.1},
                    5: {offset: 0.1},
                    6: {offset: 0.1},
                    7: {offset: 0.1},
                    8: {offset: 0.1},
         },
       };

var data1 = response.getDataTable();
var chart1 = new google.visualization.PieChart(document.getElementById('auto-chart'));
chart1.draw(data1, options);
}

//Exampless!!!

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
         ['2004/05',  165,      938,         522,             998,           450,      614.6],
         ['2005/06',  135,      1120,        599,             1268,          288,      682],
         ['2006/07',  157,      1167,        587,             807,           397,      623],
         ['2007/08',  139,      1110,        615,             968,           215,      609.4],
         ['2008/09',  136,      691,         629,             1026,          366,      569.6]
      ]);

    var options = {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('eqip-chart-m'));
    chart.draw(data, options);
  }


  google.charts.setOnLoadCallback(drawMarkersMap);

        function drawMarkersMap() {
        var data3 = google.visualization.arrayToDataTable([
          ['City',   'Population', 'Area'],
          ['Lviv',      2761477,    1285.31],
          ['Drohobych',     1324110,    181.76],
          ['Zhovkva',    959574,     117.27],
          ['Chervonohrad',     907563,     130.17],
          ['Boryslav',   655875,     158.9],
        ]);

        var options3 = {
          region: 'UA',
          displayMode: 'markers',
          colorAxis: {colors: ['green', 'blue']}
        };

        var chart3 = new google.visualization.GeoChart(document.getElementById('eqip-chart-o'));
        chart3.draw(data3, options3);
      }
