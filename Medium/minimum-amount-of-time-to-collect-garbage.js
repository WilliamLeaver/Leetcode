/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    // Variable
    let totalTime = 0;
    let glassPos = 0;
    let paperPos = 0;
    let metalPos = 0;

    // iterate over houses in the garbage array
    for (let house = 0; house < garbage.length; house++) {
        // iterate over the trash at each house 
        for (const trash of garbage[house]) {
            // while the trash is there to be picked up but the truck is not add the time and then move the truck
            while (trash == 'G' && glassPos != house) { 
                totalTime = totalTime + travel[glassPos]; 
                glassPos++;
            }
            while (trash == 'P' && paperPos != house) {
                totalTime = totalTime + travel[paperPos]; 
                paperPos++;
            }
            while (trash == 'M' && metalPos != house) {     
                totalTime = totalTime + travel[metalPos]; 
                metalPos++;
            }
            // add the time for picking up the trash
            totalTime++;
        }
    }
    // return the total time
    return totalTime;
};
