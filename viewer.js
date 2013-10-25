/**
 * @author danielquisbert.info@gmail.com [Daniel Quisbert]
 */

/**
 * @requires OpenLayers/Map.js
 */

"use strict";

var map;
/** 
 * @constructor
 */
function Configuration() {
	
	this.proxy = "/cgi-bin/proxy.cgi?url=";
}

function createMap(conf, protocol) {
	map = new OpenLayers.Map("map", {
		div : 'map',
		//allOverlays : true,
		maxResolution : 196543.0339,
		//restrictedExtent : extendOsmGoogle(context.bounds),
		units : 'm',
		maxExtent : extendOsmGoogle(),
		numZoomLevels : 20,
		projection : new OpenLayers.Projection("EPSG:900913"),
		displayProjection : new OpenLayers.Projection("EPSG:4326")
	});	
	backgroundMap();
	for (var i = 0; i < map.layers.length; i++) {		
		map.layers[i].setTileSize(new OpenLayers.Size(256, 256));		
	}
	//Forzamos el centrado con el zoom
	map.setCenter(extendOsmGoogle().getCenterLonLat(), 14);	
}

function extendOsmGoogle() {
	var nx = new OpenLayers.Bounds(-7588438.77501, -1864320.6882818, -7582261.7109984, -1861459.0785812);
	return nx;
}

function backgroundMap() {

	map.addLayer(new OpenLayers.Layer.OSM("Mapnik"));
	map.addLayer(new OpenLayers.Layer.OSM("Google-like", ["http://a.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/9/256/${z}/${x}/${y}.png", "http://b.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/9/256/${z}/${x}/${y}.png", "http://c.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/9/256/${z}/${x}/${y}.png"], {
		"tileOptions" : {
			"crossOriginKeyword" : null
		}
	}));
	map.addLayer(new OpenLayers.Layer.OSM("Midnight Commander", ["http://a.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/999/256/${z}/${x}/${y}.png", "http://b.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/999/256/${z}/${x}/${y}.png", "http://c.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/999/256/${z}/${x}/${y}.png"], {
		"tileOptions" : {
			"crossOriginKeyword" : null
		}
	}));
	map.addLayer(new OpenLayers.Layer.Google("Google Streets", {
		type : google.maps.MapTypeId.ROADMAP,
	}));
	map.addLayer(new OpenLayers.Layer.Google("Google Satellite", {
		type : google.maps.MapTypeId.SATELLITE,
	}));
	map.addLayer(new OpenLayers.Layer.Google("Google Hybrid", {
		type : google.maps.MapTypeId.HYBRID,
	}));
	map.addLayer(new OpenLayers.Layer.OSM.CycleMap("CycleMap"), new OpenLayers.Layer.Google("Google Physical", {
		type : google.maps.MapTypeId.TERRAIN,
	}));
}

// main
//init = function() {	
var conf;
conf = new Configuration();
OpenLayers.ProxyHost = conf.proxy;
createMap();
//menu de capas
map.addControl(new OpenLayers.Control.LayerSwitcher());

//};

//window.onload = init;
