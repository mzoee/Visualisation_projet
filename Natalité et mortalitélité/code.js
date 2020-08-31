// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [{
        "year": "1960",
        "birth": 47.77,
        "death": 21.933
    }, {
        "year": "1961",
        "birth": 47.226,
        "death": 21.275
    }, {
        "year": "1962",
        "birth": 46.659,
        "death": 20.627
    }, {
        "year": "1963",
        "birth": 46.076,
        "death": 19.99
    }, {
        "year": "1964",
        "birth": 45.489,
        "death": 19.366
    }, {
        "year": "1965",
        "birth": 44.898,
        "death": 18.752
          }, {
        "year": "1966",
        "birth": 44.3,
        "death": 18.146
    }, {
        "year": "1967",
        "birth": 43.699,
        "death": 17.544    
    }, {
        "year": "1968",
        "birth": 43.114,
        "death": 16.942
    }, {
        "year": "1969",
        "birth": 42.566,
        "death": 16.341
    }, {
        "year": "1970",
        "birth": 42.093,
        "death": 15.732
    }, {
        "year": "1971",
        "birth": 41.732,
        "death": 15.102
    }, {
        "year": "1972",
        "birth": 41.505,
        "death": 14.454
    }, {
        "year": "1973",
        "birth": 41.42,
        "death": 13.809
    }, {
        "year": "1974",
        "birth": 41.476,
        "death": 13.19
    }, {
        "year": "1975",
        "birth": 41.688,
        "death": 12.664
    }, {
        "year": "1976",
        "birth": 42.065,
        "death": 12.308
    }, {
        "year": "1977",
        "birth": 42.566,
        "death": 12.151
    }, {
        "year": "1978",
        "birth": 43.126,
        "death": 12.186
    }, {
        "year": "1979",
        "birth": 43.67,
        "death": 12.373
    }, {
        "year": "1980",
        "birth": 44.108,
        "death": 12.622
    }, {
        "year": "1981",
        "birth": 44.349,
        "death": 12.811
    }, {
        "year": "1982",
        "birth": 44.328,
        "death": 12.837
    }, {
        "year": "1983",
        "birth": 43.994,
        "death": 12.631
    }, {
        "year": "1984",
        "birth": 43.31,
        "death": 12.175
    }, {
        "year": "1985",
        "birth": 42.235,
        "death": 11.484
    }, {
        "year": "1986",
        "birth": 40.747,
        "death": 10.616                 }, {
        "year": "1987",
        "birth": 38.912,
        "death": 9.678
    }, {
        "year": "1988",
        "birth": 36.817,
        "death": 8.765
    }, {
        "year": "1989",
        "birth": 34.544,
        "death": 7.928
    }, {
        "year": "1990",
        "birth": 32.183,
        "death": 7.211
    }, {
        "year": "1991",
        "birth": 29.823,
        "death": 6.633
          }, {
        "year": "1992",
        "birth": 27.542,
        "death": 6.176
        }, {
        "year": "1993",
        "birth": 25.419,
        "death": 5.818
        }, {
        "year": "1994",
        "birth": 23.52,
        "death": 5.554
     }, {
        "year": "1995",
        "birth": 21.9,
        "death": 5.373
      }, {
        "year": "1996",
        "birth": 20.581,
        "death": 5.259
       }, {
        "year": "1997",
        "birth": 19.528,
        "death": 5.19
      }, {
        "year": "1998",
        "birth": 18.7,
        "death": 5.144
     }, {
        "year": "1999",
        "birth": 18.081,
        "death": 5.109
     }, {
        "year": "2000",
        "birth": 17.654,
        "death": 5.077
    }, {
        "year": "2001",
        "birth": 17.398,
        "death": 5.049
    }, {
        "year": "2002",
        "birth": 17.278,
        "death": 5.033
    }, {
        "year": "2003",
        "birth": 17.259,
        "death": 5.077
    }, {
        "year": "2004",
        "birth": 17.309,
        "death": 5.035
    }, {
        "year": "2005",
        "birth": 17.401,
        "death": 5.041
    }, {
        "year": "2006",
        "birth": 17.52,
        "death": 5.039
    }, {
        "year": "2007",
        "birth": 17.663,
        "death": 5.025
    }, {
        "year": "2008",
        "birth": 17.823,
        "death": 4.996
    }, {
        "year": "2009",
        "birth": 17.986,
        "death": 4.955
    }, {
        "year": "2010",
        "birth": 18.154,
        "death": 4.905
    }, {
        "year": "2011",
        "birth": 18.335,
        "death": 4.857
    }, {
        "year": "2012",
        "birth": 18.533,
        "death": 4.82
    }, {
        "year": "2013",
        "birth": 18.739,
        "death": 4.799
    }, {
        "year": "2014",
        "birth": 18.93,
        "death": 4.795
    }, {
        "year": "2015",
        "birth": 19.066,
        "death": 4.805
    }, {
        "year": "2016",
        "birth": 19.102,
        "death": 4.821
    }, {
        "year": "2017",
        "birth": 19.011,
        "death": 4.835
    }, {
        "year": "2018",
        "birth": 18.783,
        "death": 4.843
    }];

//create category axis for years
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;

//create value axis for income and expenses
var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = true;


//create columns
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "year";
series.dataFields.valueX = "birth";
series.name = "birth";
series.columns.template.fillOpacity = 0.5;
series.columns.template.strokeOpacity = 0;
series.tooltipText = "birth in {categoryY}: {valueX.value}";

//create line
var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryY = "year";
lineSeries.dataFields.valueX = "death";
lineSeries.name = "death";
lineSeries.strokeWidth = 3;
lineSeries.tooltipText = "death in {categoryY}: {valueX.value}";

//add bullets
var circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.fill = am4core.color("#fff");
circleBullet.circle.strokeWidth = 2;

//add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

//add legend
chart.legend = new am4charts.Legend();
