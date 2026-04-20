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
    <img src="styles/legend/Ringinrejo_2_1.png" /> Jalan<br />\
    <img src="styles/legend/Ringinrejo_2_2.png" /> Saluran<br />\
    <img src="styles/legend/Ringinrejo_2_3.png" /> Sungai<br />\
    <img src="styles/legend/Ringinrejo_2_4.png" /> <br />' });

lyr_ESRISatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Ringinrejo_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleHybrid_1,lyr_Ringinrejo_2];
lyr_Ringinrejo_2.set('fieldAliases', {'ID': 'ID', 'KODEWILAYA': 'KODEWILAYA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'SUMBERGEOM': 'SUMBERGEOM', 'ALATUKUR': 'ALATUKUR', 'PENGGUNAAN': 'PENGGUNAAN', 'METODUKUR': 'METODUKUR', 'Copy_NIB': 'Copy_NIB', 'Nomor_Hak': 'Nomor_Hak', 'Surat_Ukur': 'Surat_Ukur', 'NIB_1': 'NIB_1', 'Luas': 'Luas', 'Produk': 'Produk', 'Luas_Peta': 'Luas_Peta', 'Validator_': 'Validator_', 'Validator1': 'Validator1', 'Blokir_Int': 'Blokir_Int', 'KW': 'KW', 'Pemilik_Pe': 'Pemilik_Pe', 'Pemilik_Ak': 'Pemilik_Ak', 'Tipe_Hak': 'Tipe_Hak', 'Nama': 'Nama', 'KETERANGAN': 'KETERANGAN', 'NO_BIDANG': 'NO_BIDANG', 'Existing': 'Existing', 'Status': 'Status', });
lyr_Ringinrejo_2.set('fieldImages', {'ID': 'TextEdit', 'KODEWILAYA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', 'TAHUN': 'TextEdit', 'NIB': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', 'SUMBERGEOM': 'TextEdit', 'ALATUKUR': 'TextEdit', 'PENGGUNAAN': 'TextEdit', 'METODUKUR': 'TextEdit', 'Copy_NIB': 'TextEdit', 'Nomor_Hak': 'TextEdit', 'Surat_Ukur': 'TextEdit', 'NIB_1': 'TextEdit', 'Luas': 'TextEdit', 'Produk': 'TextEdit', 'Luas_Peta': 'TextEdit', 'Validator_': 'TextEdit', 'Validator1': 'TextEdit', 'Blokir_Int': 'TextEdit', 'KW': 'TextEdit', 'Pemilik_Pe': 'TextEdit', 'Pemilik_Ak': 'TextEdit', 'Tipe_Hak': 'TextEdit', 'Nama': 'TextEdit', 'KETERANGAN': 'TextEdit', 'NO_BIDANG': 'TextEdit', 'Existing': 'TextEdit', 'Status': 'TextEdit', });
lyr_Ringinrejo_2.set('fieldLabels', {'ID': 'hidden field', 'KODEWILAYA': 'hidden field', 'KECAMATAN': 'inline label - visible with data', 'KELURAHAN': 'inline label - visible with data', 'TIPEHAK': 'hidden field', 'TIPEPRODUK': 'hidden field', 'TAHUN': 'hidden field', 'NIB': 'inline label - visible with data', 'LUASTERTUL': 'hidden field', 'LUASPETA': 'hidden field', 'SUMBERGEOM': 'hidden field', 'ALATUKUR': 'hidden field', 'PENGGUNAAN': 'hidden field', 'METODUKUR': 'hidden field', 'Copy_NIB': 'hidden field', 'Nomor_Hak': 'hidden field', 'Surat_Ukur': 'hidden field', 'NIB_1': 'hidden field', 'Luas': 'hidden field', 'Produk': 'hidden field', 'Luas_Peta': 'hidden field', 'Validator_': 'hidden field', 'Validator1': 'hidden field', 'Blokir_Int': 'hidden field', 'KW': 'hidden field', 'Pemilik_Pe': 'hidden field', 'Pemilik_Ak': 'hidden field', 'Tipe_Hak': 'hidden field', 'Nama': 'inline label - visible with data', 'KETERANGAN': 'hidden field', 'NO_BIDANG': 'inline label - visible with data', 'Existing': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_Ringinrejo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});