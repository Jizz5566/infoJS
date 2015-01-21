/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-18 20:55:51
 * @version $Id$
 */
var map;
    var layer_1;
    var layer_0;
    var infowindow;

    function initialize() {
        map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: new google.maps.LatLng(23.973613, 120.980347),
            zoom: 8
        });
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));
        var style = [{
            featureType: 'road.local',
            elementType: 'all',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative.country',
            elementType: 'all',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative.province',
            elementType: 'all',
            stylers: [{
                visibility: 'off'
            }]
        }];
        var styledMapType = new google.maps.StyledMapType(style, {
            map: map,
            name: 'Styled Map'
        });
        map.mapTypes.set('map-style', styledMapType);
        map.setMapTypeId('map-style');
        //map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
        //map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

        layer_1 = new google.maps.FusionTablesLayer({
            query: {
                select: "col6",
                from: "1EUIHm2qmnHVu3rVbC_OwhaOEcw1k8x76lYv61T1S"
            },
            options: {
                styleId: 2,
                templateId: 2,
                map: map,
                suppressInfoWindows: true
            }

        });

        google.maps.event.addListener(layer_1, 'click', function(e) {
            var villige = e.row['county'].value;
            var nodeCol = document.createElement('div');
            if (infowindow) infowindow.close();
            else infowindow = new google.maps.InfoWindow();

            infowindow.setContent('<div class="tabs">' +
                '<div id="tab-2" style="overflow:hidden;">' + //firts tab content 
                '<h2><b>' + villige + '</b></h2>' +
				'<b align="left">單位：萬元/坪</b></br>' +
                '<iframe width="500" height="300" scrolling="no" frameborder="no" src="https://www.google.com/fusiontables/embedviz?containerId=googft-gviz-canvas&viz=GVIZ&t=LINE_AGGREGATE&isXyPlot=true&bsize=0.0&q=select+col0%2C+col1%2C+col' +
                e.row['sort'].value +
                '+from+1FvLF-h5NWKElof-7NzjMaxvLwZnioj5x9jVqaQ88&qrs=+where+col0+>=+&qre=+and+col0+%3C%3D+&qe=+order+by+col0+asc&uiversion=2&rstart=2010%2F3%2F31+0%3A0%3A0&rend=2014%2F6%2F30+23%3A13%3A19&gco_forceIFrame=true&gco_hasLabelsColumn=true&width=500&height=300" />' +
                /* '<iframe frameborder="no" src="https://www.google.com/fusiontables/embedviz?containerId=googft-gviz-canvas&q=select+col0%3E%3E0%2C+col7%3E%3E0%2C+col8%3E%3E0%2C+col9%3E%3E0%2C+col10%3E%3E0%2C+col11%3E%3E0%2C+col12%3E%3E0+from+1EUIHm2qmnHVu3rVbC_OwhaOEcw1k8x76lYv61T1S+%20WHERE%20county=%27' +
                 e.row[''].value +
                 '%27+order+by+col7%3E%3E0+asc+limit+10&viz=GVIZ&t=COLUMN&uiversion=2&gco_forceIFrame=true&gco_hasLabelsColumn=true&gco_vAxes=%5B%7B%22title%22%3A%22%E6%94%AF%E6%8C%81%E7%8E%87%22%2C+%22minValue%22%3Anull%2C+%22maxValue%22%3Anull%2C+%22useFormatFromData%22%3Afalse%2C+%22viewWindow%22%3A%7B%22max%22%3Anull%2C+%22min%22%3Anull%7D%2C+%22formatOptions%22%3A%7B%22source%22%3A%22inline%22%2C+%22suffix%22%3A%22%25%22%2C+%22prefix%22%3A%22%22%2C+%22scaleFactor%22%3A%220.01%22%7D%2C+%22format%22%3A%220.%23%23%22%7D%2C%7B%22useFormatFromData%22%3Atrue%2C+%22viewWindow%22%3A%7B%22max%22%3Anull%2C+%22min%22%3Anull%7D%2C+%22minValue%22%3Anull%2C+%22maxValue%22%3Anull%7D%5D&gco_useFirstColumnAsDomain=true&gco_isStacked=false&gco_booleanRole=certainty&gco_hAxis=%7B%22useFormatFromData%22%3Atrue%2C+%22minValue%22%3Anull%2C+%22maxValue%22%3Anull%2C+%22viewWindow%22%3Anull%2C+%22viewWindowMode%22%3Anull%7D&gco_legend=none&gco_title=&gco_theme=maximized&gco_tooltip=%7B%22isHtml%22%3Atrue%7D&gco_series=%7B%220%22%3A%7B%22errorBars%22%3A%7B%22errorType%22%3A%22percent%22%7D%7D%2C+%221%22%3A%7B%22errorBars%22%3A%7B%22errorType%22%3A%22percent%22%7D%7D%2C+%222%22%3A%7B%22errorBars%22%3A%7B%22errorType%22%3A%22percent%22%7D%7D%2C+%223%22%3A%7B%22errorBars%22%3A%7B%22errorType%22%3A%22percent%22%7D%7D%2C+%224%22%3A%7B%22errorBars%22%3A%7B%22errorType%22%3A%22percent%22%7D%7D%2C+%225%22%3A%7B%22targetAxisIndex%22%3A0%2C+%22color%22%3A%22none%22%2C+%22errorBars%22%3A%7B%22errorType%22%3A%22none%22%7D%7D%7D&tmplt=6&width=220&height=140" width="270" height="150" scrolling="no" />' +*/
                '</div>');
            infowindow.setPosition(e.latLng);
            infowindow.open(map);
            //$(".tabs").tabs();  
        });
        infoWindow = new google.maps.InfoWindow();
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    if (isMobile) {
        var legend = document.getElementById('googft-legend');
        var legendOpenButton = document.getElementById('googft-legend-open');
        var legendCloseButton = document.getElementById('googft-legend-close');
        legend.style.display = 'none';
        legendOpenButton.style.display = 'block';
        legendCloseButton.style.display = 'block';
        legendOpenButton.onclick = function() {
            legend.style.display = 'block';
            legendOpenButton.style.display = 'none';
        }
        legendCloseButton.onclick = function() {
            legend.style.display = 'none';
            legendOpenButton.style.display = 'block';
        }
    }
