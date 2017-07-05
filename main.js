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
    getBuildingsAgeChart();
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
