var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Ringinrejo_2 = new ol.format.GeoJSON();
var features_Ringinrejo_2 = format_Ringinrejo_2.readFeatures(json_Ringinrejo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ringinrejo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ringinrejo_2.addFeatures(features_Ringinrejo_2);
var lyr_Ringinrejo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ringinrejo_2, 
                style: style_Ringinrejo_2,
                popuplayertitle: 'Ringinrejo',
                interactive: true,
    title: 'Ringinrejo<br />\
    <img src="styles/legend/Ringinrejo_2_0.png" /> BIDANG KOSONG<br />\
    <img src="styles/legend/Ringinrejo_2_1.png" /> FIX<br />\
    <img src="styles/legend/Ringinrejo_2_2.png" /> Jalan<br />\
    <img src="styles/legend/Ringinrejo_2_3.png" /> Saluran<br />\
    <img src="styles/legend/Ringinrejo_2_4.png" /> Sungai<br />\
    <img src="styles/legend/Ringinrejo_2_5.png" /> <br />' });

lyr_ESRISatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Ringinrejo_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleHybrid_1,lyr_Ringinrejo_2];
lyr_Ringinrejo_2.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'NIB': 'NIB', 'NIB_1': 'NIB_1', 'NO_BIDANG': 'NO_BIDANG', 'Nama': 'Nama', 'Existing': 'Existing', 'Status': 'Status', });
lyr_Ringinrejo_2.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'NIB': 'TextEdit', 'NIB_1': 'TextEdit', 'NO_BIDANG': 'TextEdit', 'Nama': 'TextEdit', 'Existing': 'TextEdit', 'Status': 'TextEdit', });
lyr_Ringinrejo_2.set('fieldLabels', {'KECAMATAN': 'inline label - visible with data', 'KELURAHAN': 'inline label - visible with data', 'NIB': 'hidden field', 'NIB_1': 'hidden field', 'NO_BIDANG': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Existing': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_Ringinrejo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});