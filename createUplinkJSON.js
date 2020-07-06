//CSV parsing
var fs = require('fs');
var papa = require('papaparse');

function createUplinkJSON(csvPath, jsonPath){
    const file_stream = fs.createReadStream(csvPath);
//   ./resources/homeSensor.csv
    return new Promise(resolve =>
        papa.parse(file_stream, {
            complete: (results) => {
                resolve(postParse(results.data))
            },
            header: true,
        })
    );

    function postParse(parameters) {
        var newParameters = {};
        // Data structure of newParameters is as follows:
        // port > header > [array of parameters for a header]
        parameters.forEach(p => {
            if (!newParameters.hasOwnProperty(p.port))
                newParameters[p.port] = {}

            if (!newParameters[p.port].hasOwnProperty(p.header))
                newParameters[p.port][p.header] = []

            newParameters[p.port][p.header].push({
                data_size: p.data_size,
                bit_start: p.bit_start,
                bit_end: p.bit_end,
                type: p.type,
                parameter_name: p.parameter_name,
                group_name: p.group_name,
                coefficient: p.coefficient,
                // addition: p.addition,
                round: p.round                
            });
        })
        console.log(JSON.stringify(newParameters))
        // fs.writeFile("./uplinkBLE_Tracker.json", JSON.stringify(newParameters), (err) => {
        //     if (!err) {
        //         console.log("done");
        //     }
        // })

        return newParameters;
    }
}

thing = createUplinkJSON(
    "C:\\Users\\rmah\\VS-Code\\Data_Converters\\resources\\UL\\IndustrialTrackerFieldsUL.csv",
    "C:\\Users\\rmah\\VS-Code\\Data_Converters\\uplinkAgriculturalSensor.json"
    )
