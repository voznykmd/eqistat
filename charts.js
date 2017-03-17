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

// Google charts packages upload

google.charts.load( "current", {packages: ['corechart']});

google.charts.setOnLoadCallback(drawGID);


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
   };

  var data2 = response.getDataTable();
  var chart2 = new google.visualization.ColumnChart(document.getElementById('build-type'));
  chart2.draw(data2, options);
}


//Redraw charts after resize

$(window).resize(function(){
  drawGID();
  drawGID1();

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

var autostaf = $.ajax("https://spreadsheets.google.com/feeds/cells/1ikWRxH9wsnj9qpVPCRTMOFnS4fCiHfYRIuIbeDZdgNI/2/public/full/R31C11?alt=json").done(function(){
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
