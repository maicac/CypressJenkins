const pruebaJson = require("./reports/report.json");
const fs = require("fs");
module.exports = pruebaJson;

let testTotales = 0;
let testsPasados = 0;
let testsFallados = 0;
let testsSkipped = 0;

let data = "";

console.log("POST-PROCESAMIENTO de Reporte JSON");

pruebaJson.results[0].suites.forEach((suite, idSuite) => {
    console.log(`SUITE ${idSuite+1} - ${suite.title}`);
    data += `SUITE ${idSuite+1} - ${suite.title} \n`;

    suite.tests.forEach((test, idTests) => {
        console.log(`TEST ${idTests+1} - ${test.title} - ${test.state}`)
        data += `TEST ${idTests+1} - ${test.title} - ${test.state} \n`;   

        switch(test.state){
            case "passed":
                testsPasados++;
                break;
            case "failed":
                testsFallados++;
                break;
            case "pending":
                testsSkipped++;
                break;

        }
    })
});

testsTotales = testsPasados + testsFallados + testsSkipped;
console.log(`TEST TOTALES: ${testsTotales}`);
console.log(`TEST PASADOS: ${testsPasados}`);
console.log(`TEST FALLADOS: ${testsFallados}`);
console.log(`TEST SKIPPED: ${testsSkipped}`);

data += `TESTS TOTALES ${testsTotales} \n`;
data += `TESTS PASADOS ${testsPasados} \n`;
data += `TESTS FALLADOS ${testsFallados} \n`;
data += `TESTS SKIPPED ${testsSkipped} \n`;

fs.writeFileSync("reports/resumenTests.txt", data);