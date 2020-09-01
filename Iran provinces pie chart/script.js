

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart);

// Add data
chart.data = [ {
  "state": "Alborz",
  "population": 2712400

}, {
  "state": "Ardebil",
  "population": 1270420
}, {
  "state": "Bushehr",
  "population": 1163400

}, {
  "state": "Chaharmahal & Bakhtiyari ",
  "population": 947763
}, {
  "state": "East Azarbayejan",
  "population": 3909652
}, {
  "state": "Esfahan",
  "population": 5120850
}, {
  "state": "Fars",
  "population": 4851274
}, {
  "state": "Gilan",
  "population": 2530696
}, {
  "state": "Golestan",
  "population": 1868819
}, 
 {"state": "Hamedan",
  "population": 1738234
}, {
  "state": "Hormozgan",
  "population": 1776415
}, {
  "state": "Ilam",
  "population": 580158
}, {
  "state": "Kerman",
  "population": 3164718
}, {
  "state": "Kermanshah",
  "population": 1952434
}, {
  "state": "Khorasan-e-Razavi",
  "population": 6434501
},
  {"state": "Khuzestan",
  "population": 4710509
}, {
  "state": "Kohgiluyeh & Boyerahmad ",
  "population": 713052
}, {
  "state": "Kordestan",
  "population": 1603011
}, {
  "state": "Lorestan",
  "population": 1760649
}, {
  "state": "Markazi",
  "population": 1429475
}, {
  "state": "Mazandaran",
  "population": 3283582},
   {"state": "North Khorasan",
  "population": 863092
}, {
  "state": "Qazvin",
  "population": 1273761
}, {
  "state": "Qom",
  "population": 1292283
}, {
  "state": "Semnan",
  "population": 702360
}, {
  "state": "Sistan and Baluchestan",
  "population": 2775014
}, {
  "state": "South Khorasan",
  "population": 768898},
  {"state": "Tehran",
  "population": 13267637}, 
 {
  "state": "West Azarbayejan",
  "population": 3265219
}, {
  "state": "Yazd",
  "population": 1138533
}, {
  "state": "Zanjan",
  "population": 1057461}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "population";
pieSeries.dataFields.category = "state";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);
