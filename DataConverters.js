var encode_module = require("./encode.js");
var decode_module = require("./decode.js");
var Base64Binary_module = require("./Base64Binary.js");

var Digital_Sign_DL = require(".\\DL_Sensor_Jsons\\DL_Digital_Signage.json");
var Home_Sensor_DL = require(".\\DL_Sensor_Jsons\\DL_Home_Sensor.json");
// var Medical_Sensor_DL = require()
var Industrial_Sensor_DL = require(".\\DL_Sensor_Jsons\\DL_Industrial_Sensor.json");
var Industrial_Tracker_DL = require(".\\DL_Sensor_Jsons\\DL_Industrial_Tracker.json");
var Agricultural_Sensor_DL = require(".\\DL_Sensor_Jsons\\DL_Agricultural_Sensor.json");
var BLE_Tracker_DL = require(".\\DL_Sensor_Jsons\\DL_BLE_Tracker.json");
var AC_Outlet_DL = require(".\\DL_Sensor_Jsons\\DL_AC_Outlet.json");

var Digital_Sign_UL = require(".\\UL_Sensor_Jsons\\uplinkDigitalSignage.json")
var Home_Sensor_UL = require(".\\UL_Sensor_Jsons\\uplinkHomeSensor.json");
var Medical_Sensor_UL = require(".\\UL_Sensor_Jsons\\uplinkMedicalSensor.json");
var Industrial_Sensor_UL = require(".\\UL_Sensor_Jsons\\uplinkIndustrialSensor.json")
var Industrial_Tracker_UL = require(".\\UL_Sensor_Jsons\\uplinkIndustrialTracker.json")
var Agricultural_Sensor_UL = require(".\\UL_Sensor_Jsons\\uplinkAgriculturalSensor.json");
var BLE_Tracker_UL = require(".\\UL_Sensor_Jsons\\uplinkBLE_Tracker.json");
var AC_Outlet_UL = require(".\\UL_Sensor_Jsons\\uplinkAC_Outlet.json");

module.exports = {
    encode: encode_module.encode,
    decode: decode_module.decode,

    bytes_to_base64: Base64Binary_module.encode,
    base64_to_bytes: Base64Binary_module.decode,


    Digital_Sign_DL: Digital_Sign_DL,
    Home_Sensor_DL: Home_Sensor_DL,
    // medical sensor
    Industrial_Sensor_DL: Industrial_Sensor_DL,
    Industrial_Tracker_DL: Industrial_Tracker_DL,
    Agricultural_Sensor_DL: Agricultural_Sensor_DL,
    BLE_Tracker_DL: BLE_Tracker_DL,
    AC_Outlet_DL: AC_Outlet_DL,

    Digital_Sign_UL: Digital_Sign_UL,
    Home_Sensor_UL: Home_Sensor_UL,
    Medical_Sensor_UL: Medical_Sensor_UL,
    Industrial_Sensor_UL: Industrial_Sensor_UL,
    Industrial_Tracker_UL: Industrial_Tracker_UL,
    Agricultural_Sensor_UL: Agricultural_Sensor_UL,
    BLE_Tracker_UL: BLE_Tracker_UL,
    AC_Outlet_UL: AC_Outlet_UL
}


