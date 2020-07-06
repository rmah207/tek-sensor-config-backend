var dc = require("./DataConverters.js");


// thing = [0x03, 0x69, 0x23, 0x53, 0x14, 0x56, 0x15, 0x64, 0x19, 0x32, 0x48, 0x26, 0x58, 0x61, 0x69, 0x13, 0x94, 0x61]
// please_god = dc.decode(
//     sensor = dc.Industrial_Tracker_UL,
//     data = thing,
//     port = 15
// )
// console.log(please_god)

payload = [
    0x03, 69,
    
    0x07, 0xE4, 5, 23, 12, 30, 0,
    0, 0, 1, 0, 0, 0, 2, 0, 3,

    0x07, 0xE6, 4, 20, 9, 11, 69,
    0x00, 0x01, 0xA4, 0x00, 0x00, 0x06, 0xCA, 0x00, 0x05
]

thing = dc.decode(
    sensor = dc.Industrial_Tracker_UL,
    data = payload,
    port = 15
)
console.log(thing)


// payload = [0b11110101, 0xAB, 0xCD, 0xEF, 0x69];
// thing = dc.decode(
//     sensor = dc.Industrial_Sensor_UL,
//     data = payload,
//     port = 20
// )
// console.log(thing)

// payload = [0x20, 0x00, 0x00, 0x01, 0x2C];
// thing = dc.decode(
//     sensor = dc.Home_Sensor_UL,
//     data = payload,
//     port = 100
// )
// console.log(thing)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FOR MEDICAL SENSOR
// payload = [0xEA, 0x90, 0x0C, 0b00110101, 0x04, 0xD5, 0x48, 0xFF, 0xFF];
// decoded_data = dc.decode(dc.Medical_Sensor_UL, payload, 10, flatten = false);
// console.log(decoded_data)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FOR BLE
// payload = [
//     0xB3,
//     0x25, 0x43, 0xA0, 0x31,
//     0x41, 0xDC, 0x42, 0x02,
//     0x35, 0x45, 0x46, 0x21,
//     0x10, 0x25, 0x36, 0x16
// ];

// decoded_data = dc.decode(
//     sensor = dc.BLE_Tracker_UL,
//     data = payload,
//     port = 25);
// console.log(decoded_data)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // FOR DOWNLINKS
// commands = {
//     ticks_config : {                        // Configure the ticks
//         tick_seconds : { write : 60 },          // Write 60 to seconds per tick
//         tick_temperature : { read : true },     // Read from ticks per temperature
//         tick_battery : { write : 1 }            // Write ticks per battery to 1
//     },

//     accelerometer : {                       // Configure the accelerometer
//         accelerometer_mode : {                  // Configure the acceleromter's mode
//             write :{
//                 accelerometer_break_in_threshold_enable : 1,    // Enable break-in threshold
//                 accelerometer_impact_threshold_enable : 1,      // Enable impact threshold
//                 accelerometer_enable : 1                        // Enable accelerometer
//             }
//         },
//         accelerometer_values_to_transmit : { read : true }      // Read accelerometer's tx values
//     }
// }

// encoded_data = dc.encode(commands, dc.Home_Sensor_DL);
// console.log(encoded_data)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FOR UPLINKS
// payload = [
//     0x07, 0x71, 0xFF, 0xC2,
//     0x00, 0x00, 0x03, 0xE8,
//     0x03, 0x67, 0x00, 0xEB,
//     0x00, 0xFF, 0x01, 0x2E
// ];

// decoded_data = dc.decode(
//     sensor = dc.Home_Sensor_UL,
//     data = payload,
//     port = 10);
// console.log(decoded_data)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // FOR DIGITAL SIGN
// string = ("this string is so long that I don't even want to think about sending it, but I'm gonna use it to stress test"
//     + " this algorithm anyways, so I need to test it using this absurdly long string that no one in their right mind would" 
//     + " ever want to send. lol. screw this let's just make it even longer LMAO and throw in some weird characters"
//     + "\n~!@#$%^&*()_+?><:'234'21'3#'4ajsdkfj;alsdfj;alsdjka;djk;adsfk;lasdjf;lasnvlakjbwhnwojf;caoifja;oefjsdljfawodjif;akdlfna"
//     + "wjlnvwolfckdjfa;ovnekasdfasdfasdfagawrwegasdvaiuq2o8374y2398huisdlfp93ioaldlfhaow9uebvawoiefa9pwioeafwf")

// digital_sign_commands = {  
//     book_app : {
//         roomStatusRsp : {
//             send : {
//                 booked_by : "Bob Person",
//                 string_size : "Bob Person".length,
//                 time_min : 30,
//                 time_hr : 12,
//                 PM_AM : 1,
//                 Nx_C : 0,
//                 TS_E : 1,
//                 EPD_E : 1,
//                 ACK : 1
//             }
//         }
//     }
// };

// encoded_data = dc.encode(digital_sign_commands, dc.Digital_Sign_DL);
// console.log(encoded_data);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// base64 = dc.bytes_to_base64(encoded_data["103"][0])
