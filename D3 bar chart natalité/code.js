data = [
        {label:"1960", value: 4.777,
         label:"1961", value: 4.7226  },
        {label:"1962", value: 4.6659},
        {label:"1963", value: 4.6076},
        {label:"1964", value: 4.5489},
        {label:"1965", value: 4.4898},
        {label:"1966", value: 4.43},
        {label:"1967", value: 4.3699},
        {label:"1968", value: 4.3114},
        {label:"1969", value: 4.2566},
        {label:"1970", value: 4.2093},
        {label:"1971", value: 4.1732},
        {label:"1972", value: 4.1505},
        {label:"1973", value: 4.142},
        {label:"1974", value: 4.1476},
        {label:"1975", value: 4.1688},
        {label:"1976", value: 4.2065},
        {label:"1977", value: 4.2566},
        {label:"1978", value: 4.3126},
        {label:"1979", value: 4.367},
        {label:"1980", value: 4.4108},
        {label:"1981", value: 4.4349},
        {label:"1982", value: 4.4328},
        {label:"1983", value: 4.3994},
        {label:"1984", value: 4.331},
        {label:"1985", value: 4.2235},
        {label:"1986", value: 4.0747},
        {label:"1987", value: 3.8912},
        {label:"1988", value: 3.6817},
        {label:"1989", value: 3.4544},
        {label:"1990", value: 3.2183},
        {label:"1991", value: 2.9823},
        {label:"1992", value: 2.7542},
        {label:"1993", value: 2.5419},
        {label:"1994", value: 2.352},
        {label:"1995", value: 2.19},
        {label:"1996", value: 2.0581},
        {label:"1997", value: 1.9528},
        {label:"1998", value: 1.87},
        {label:"1999", value: 1.8081},
        {label:"2000", value: 1.7654},
        {label:"2001", value: 1.7398},
        {label:"2002", value: 1.7278},
        {label:"2003", value: 1.7259},
        {label:"2004", value: 1.7309},
        {label:"2005", value: 1.7401},
        {label:"2006", value: 1.752},
        {label:"2007", value: 1.7663},
        {label:"2008", value: 1.7823},
        {label:"2009", value: 1.7986},
        {label:"2010", value: 1.8154},
        {label:"2011", value: 1.8335},
        {label:"2012", value: 1.8533},
        {label:"2013", value: 1.8739},
        {label:"2014", value: 1.893},
        {label:"2015", value: 1.9066},
        {label:"2016", value: 1.9102},
        {label:"2017", value: 1.9011},
        {label:"2018", value: 1.8783},
    ];

//  
for(key in data) {
  //myArray[key] 
  //console.log(key + " = " + data[key]);
  //console.log(data[key].value);
  //console.log(data.length);
}



    // color  bars begin
    var randomColor = (function(){
    var golden_ratio_conjugate = 0.618033988749895;
    var h = Math.random();

    var hslToRgb = function (h, s, l){
        var r, g, b;

        if(s == 0){
            r = g = b = l; // achromatic
        }else{
            function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return '#'+Math.round(r * 255).toString(16)+Math.round(g * 255).toString(16)+Math.round(b * 255).toString(16);
      };

      return function(){
        h += golden_ratio_conjugate;
        h %= 1;
        return hslToRgb(h, 0.5, 0.60);
      };
    })();
    // color bars end
    var div = d3.select("body").append("div").attr("class", "toolTip");

    var axisMargin = 20,
            margin = 40,
            valueMargin = 4,
            width = parseInt(d3.select('body').style('width'), 10),
            height = parseInt(d3.select('body').style('height'), 10),
            barHeight = (height-axisMargin-margin*2)* 0.4/data.length,
            barPadding = (height-axisMargin-margin*2)*0.6/data.length,
            data, bar, svg, scale, xAxis, labelWidth = 0;

    max = d3.max(data, function(d) { return d.value; });

    svg = d3.select('body')
            .append("svg")
            .attr("width", width)
            .attr("height", height);

    bar = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g");
            //.style({fill: randomColor}); //  color everything

    bar.attr("class", "bar")
            .attr("cx",0)
            .attr("transform", function(d, i) {
                return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
            });

    bar.append("text")
            .attr("class", "label")
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") //vertical align middle
            .text(function(d){
                return d.label;
            }).each(function() {
        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
    });

    scale = d3.scale.linear()
            .domain([0, max])
            .range([0, width - margin*2 - labelWidth]);

    xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 2*margin + axisMargin)
            .orient("bottom");

    bar.append("rect")
            .attr("transform", "translate("+labelWidth+", 0)")
            .attr("height", barHeight)
						.attr("width", 0)
						.transition()
            .style({fill: randomColor})  // color  bars
						.duration(1500)
						.delay(function(d,i){ return i*250})
            .attr("width", function(d){
                return scale(d.value);
            });

    bar.append("text")
            .attr("class", "value")
            .attr("y", barHeight / 2)
            .attr("dx", -valueMargin + labelWidth) //margin right
            .attr("dy", ".35em") //vertical align middle
            .attr("text-anchor", "end")
            .text(function(d){
                return (d.value+" pourcent");
            })
            .attr("x", function(d){
                var width = this.getBBox().width;
                return Math.max(width + valueMargin, scale(d.value));
            });

    bar
            .on("mousemove", function(d){
                div.style("left", d3.event.pageX+10+"px");
                div.style("top", d3.event.pageY-25+"px");
                div.style("display", "inline-block");
                div.html((d.label)+"<br>"+(d.value)+"%");
            });
    bar
            .on("mouseout", function(d){
                div.style("display", "none");
            });

    svg.insert("g",":first-child")
            .attr("class", "axisHorizontal")
            .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
            .call(xAxis);

