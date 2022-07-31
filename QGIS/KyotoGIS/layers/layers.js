var wms_layers = [];

var format_KyotoPrefecture_0 = new ol.format.GeoJSON();
var features_KyotoPrefecture_0 = format_KyotoPrefecture_0.readFeatures(json_KyotoPrefecture_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KyotoPrefecture_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KyotoPrefecture_0.addFeatures(features_KyotoPrefecture_0);
var lyr_KyotoPrefecture_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KyotoPrefecture_0, 
                style: style_KyotoPrefecture_0,
                interactive: true,
                title: '<img src="styles/legend/KyotoPrefecture_0.png" /> Kyoto Prefecture'
            });
var format_TokyoPrefecture_1 = new ol.format.GeoJSON();
var features_TokyoPrefecture_1 = format_TokyoPrefecture_1.readFeatures(json_TokyoPrefecture_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TokyoPrefecture_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TokyoPrefecture_1.addFeatures(features_TokyoPrefecture_1);
var lyr_TokyoPrefecture_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TokyoPrefecture_1, 
                style: style_TokyoPrefecture_1,
                interactive: true,
                title: '<img src="styles/legend/TokyoPrefecture_1.png" /> Tokyo Prefecture'
            });
var format_A4318_Preservation_District_of_Historic_Buildings_2 = new ol.format.GeoJSON();
var features_A4318_Preservation_District_of_Historic_Buildings_2 = format_A4318_Preservation_District_of_Historic_Buildings_2.readFeatures(json_A4318_Preservation_District_of_Historic_Buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A4318_Preservation_District_of_Historic_Buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A4318_Preservation_District_of_Historic_Buildings_2.addFeatures(features_A4318_Preservation_District_of_Historic_Buildings_2);
var lyr_A4318_Preservation_District_of_Historic_Buildings_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A4318_Preservation_District_of_Historic_Buildings_2, 
                style: style_A4318_Preservation_District_of_Historic_Buildings_2,
                interactive: true,
                title: '<img src="styles/legend/A4318_Preservation_District_of_Historic_Buildings_2.png" /> A43-18_ Preservation_District_of_Historic_Buildings'
            });
var format_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3 = new ol.format.GeoJSON();
var features_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3 = format_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3.readFeatures(json_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3.addFeatures(features_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3);
var lyr_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3, 
                style: style_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3,
                interactive: true,
                title: '<img src="styles/legend/A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3.png" /> A44-18_ Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty'
            });

lyr_KyotoPrefecture_0.setVisible(true);lyr_TokyoPrefecture_1.setVisible(true);lyr_A4318_Preservation_District_of_Historic_Buildings_2.setVisible(true);lyr_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3.setVisible(true);
var layersList = [lyr_KyotoPrefecture_0,lyr_TokyoPrefecture_1,lyr_A4318_Preservation_District_of_Historic_Buildings_2,lyr_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3];
lyr_KyotoPrefecture_0.set('fieldAliases', {'N03_001': 'N03_001', 'N03_002': 'N03_002', 'N03_003': 'N03_003', 'N03_004': 'N03_004', 'N03_007': 'N03_007', });
lyr_TokyoPrefecture_1.set('fieldAliases', {'N03_001': 'N03_001', 'N03_002': 'N03_002', 'N03_003': 'N03_003', 'N03_004': 'N03_004', 'N03_007': 'N03_007', });
lyr_A4318_Preservation_District_of_Historic_Buildings_2.set('fieldAliases', {'A43_001': 'A43_001', 'A43_002': 'A43_002', 'A43_003': 'A43_003', 'A43_004': 'A43_004', 'A43_005': 'A43_005', 'A43_006': 'A43_006', 'A43_007': 'A43_007', 'A43_008': 'A43_008', 'A43_009': 'A43_009', 'A43_010': 'A43_010', 'A43_011': 'A43_011', 'A43_012': 'A43_012', });
lyr_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3.set('fieldAliases', {'A44_001': 'A44_001', 'A44_002': 'A44_002', 'A44_003': 'A44_003', 'A44_004': 'A44_004', 'A44_005': 'A44_005', 'A44_006': 'A44_006', 'A44_007': 'A44_007', 'A44_008': 'A44_008', 'A44_009': 'A44_009', 'A44_010': 'A44_010', });
lyr_KyotoPrefecture_0.set('fieldImages', {'N03_001': 'TextEdit', 'N03_002': 'TextEdit', 'N03_003': 'TextEdit', 'N03_004': 'TextEdit', 'N03_007': 'TextEdit', });
lyr_TokyoPrefecture_1.set('fieldImages', {'N03_001': 'TextEdit', 'N03_002': 'TextEdit', 'N03_003': 'TextEdit', 'N03_004': 'TextEdit', 'N03_007': 'TextEdit', });
lyr_A4318_Preservation_District_of_Historic_Buildings_2.set('fieldImages', {'A43_001': 'TextEdit', 'A43_002': 'TextEdit', 'A43_003': 'TextEdit', 'A43_004': 'TextEdit', 'A43_005': 'Range', 'A43_006': 'TextEdit', 'A43_007': 'TextEdit', 'A43_008': 'Range', 'A43_009': 'TextEdit', 'A43_010': 'TextEdit', 'A43_011': 'TextEdit', 'A43_012': 'TextEdit', });
lyr_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3.set('fieldImages', {'A44_001': 'TextEdit', 'A44_002': 'TextEdit', 'A44_003': 'TextEdit', 'A44_004': 'TextEdit', 'A44_005': 'Range', 'A44_006': 'Range', 'A44_007': 'Range', 'A44_008': 'TextEdit', 'A44_009': 'TextEdit', 'A44_010': 'TextEdit', });
lyr_KyotoPrefecture_0.set('fieldLabels', {'N03_001': 'no label', 'N03_002': 'no label', 'N03_003': 'no label', 'N03_004': 'no label', 'N03_007': 'no label', });
lyr_TokyoPrefecture_1.set('fieldLabels', {'N03_001': 'no label', 'N03_002': 'no label', 'N03_003': 'no label', 'N03_004': 'no label', 'N03_007': 'no label', });
lyr_A4318_Preservation_District_of_Historic_Buildings_2.set('fieldLabels', {'A43_001': 'no label', 'A43_002': 'no label', 'A43_003': 'no label', 'A43_004': 'no label', 'A43_005': 'no label', 'A43_006': 'no label', 'A43_007': 'no label', 'A43_008': 'no label', 'A43_009': 'no label', 'A43_010': 'no label', 'A43_011': 'no label', 'A43_012': 'no label', });
lyr_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3.set('fieldLabels', {'A44_001': 'no label', 'A44_002': 'no label', 'A44_003': 'no label', 'A44_004': 'no label', 'A44_005': 'no label', 'A44_006': 'no label', 'A44_007': 'no label', 'A44_008': 'no label', 'A44_009': 'no label', 'A44_010': 'no label', });
lyr_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});