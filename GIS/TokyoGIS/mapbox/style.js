
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "N0319_13_190101_0": {
            "type": "geojson",
            "data": json_N0319_13_190101_0
        }
                    ,
        "A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_1": {
            "type": "geojson",
            "data": json_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_1
        }
                    ,
        "A4318_Preservation_District_of_Historic_Buildings_2": {
            "type": "geojson",
            "data": json_A4318_Preservation_District_of_Historic_Buildings_2
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
            "id": "lyr_N0319_13_190101_0_0",
            "type": "fill",
            "source": "N0319_13_190101_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#fdbf6f'}
        }
,
        {
            "id": "lyr_A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_1_0",
            "type": "fill",
            "source": "A4418_Priority_Area_of_Plan_for_the_Maintenance_and_Improvement_of_Historical_Scenic_Beauty_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#377eb8'}
        }
,
        {
            "id": "lyr_A4318_Preservation_District_of_Historic_Buildings_2_0",
            "type": "fill",
            "source": "A4318_Preservation_District_of_Historic_Buildings_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e41a1c'}
        }
],
}