
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "KyotoPrefecture_0": {
            "type": "geojson",
            "data": json_KyotoPrefecture_0
        }
                    ,
        "TokyoPrefecture_1": {
            "type": "geojson",
            "data": json_TokyoPrefecture_1
        }
                    ,
        "A4318_Preservation_District_of_Historic_Buildings_2": {
            "type": "geojson",
            "data": json_A4318_Preservation_District_of_Historic_Buildings_2
        }
                    ,
        "A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3": {
            "type": "geojson",
            "data": json_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_KyotoPrefecture_0_0",
            "type": "fill",
            "source": "KyotoPrefecture_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#fdbf6f'}
        }
,
        {
            "id": "lyr_TokyoPrefecture_1_0",
            "type": "fill",
            "source": "TokyoPrefecture_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#fdbf6f'}
        }
,
        {
            "id": "lyr_A4318_Preservation_District_of_Historic_Buildings_2_0",
            "type": "fill",
            "source": "A4318_Preservation_District_of_Historic_Buildings_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e41a1c'}
        }
,
        {
            "id": "lyr_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3_0",
            "type": "fill",
            "source": "A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_3",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#377eb8'}
        }
],
}