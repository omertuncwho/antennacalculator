// script.js

document.getElementById("antenna-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const frequency = parseFloat(document.getElementById("frequency").value);
    const antennaType = document.getElementById("antenna-type").value;


    if (isNaN(frequency) || frequency <= 0) {
        alert("Please enter a valid frequency!");
        return;
    }
    if (frequency < 1 || frequency > 30) {
        alert("Please enter a frequency between 1 MHz and 30 MHz!");
        return;
    }
    let antennaLength = 0;
    let antennaSegments = '';
    let materialList = '';
    let notes = '';
   
    document.getElementById("dipole-image").style.display = 'none';
    document.getElementById("yagi-image").style.display = 'none';
    document.getElementById("monopole-image").style.display = 'none';
    document.getElementById("loop-image").style.display = 'none';

    switch (antennaType) {
        case "dipole":
            antennaLength = (468 / frequency).toFixed(2);
            antennaSegments = `Each half of the dipole should be: ${ (antennaLength / 2).toFixed(2) } feet.`;
            materialList = `
                - Metal wire (Copper or Aluminum) of ${antennaLength} feet
                - Insulators for support at both ends
                - Balun (optional, but recommended for better impedance matching)
                - Mounting pole or structure to support the antenna
            `;
            notes = "The dipole antenna is a basic and widely used antenna. It is ideally half-wave in length.";
            document.getElementById("dipole-image").style.display = 'block';  
            break;
        case "yagi":
            antennaLength = (1.5 * (468 / frequency)).toFixed(2);
            antennaSegments = `The total length of the Yagi antenna will be: ${antennaLength} feet.`;
            materialList = `
                - Metal wire or rods for elements (Driver, Reflector, and Directors)
                - Insulators and spacers for element separation
                - Balun (recommended)
                - Mounting pole and rotor (for directional adjustment)
            `;
            notes = "The Yagi antenna is a directional antenna that provides higher gain and is effective for long-range communication.";
            document.getElementById("yagi-image").style.display = 'block';  
            break;
        case "monopole":
            antennaLength = (234 / frequency).toFixed(2);
            antennaSegments = `The monopole antenna length will be: ${antennaLength} feet.`;
            materialList = `
                - Metal wire or rod for the monopole element
                - Ground plane (for better performance)
                - Insulators for mounting
                - Mounting pole
            `;
            notes = "The monopole antenna is a single-element antenna typically placed on the ground. It can also be used with elevated configurations.";
            document.getElementById("monopole-image").style.display = 'block';
            break;
        case "loop":
            antennaLength = (300 / frequency).toFixed(2);
            antennaSegments = `The total length of the loop antenna will be: ${antennaLength} feet.`;
            materialList = `
                - Copper or aluminum wire for the loop
                - Insulators for connecting the ends
                - Mounting hardware
                - Support pole or structure
            `;
            notes = "Loop antennas are compact and typically used for narrow frequency ranges. They are known for their efficient design in certain bands.";
            document.getElementById("loop-image").style.display = 'block';
            break;
    }
    document.getElementById("antenna-length").textContent = `Antenna Total Length: ${antennaLength} feet`;
    document.getElementById("antenna-segments").textContent = `Segment Lengths: ${antennaSegments}`;
    document.getElementById("material-list").textContent = `Required Materials: ${materialList}`;
    document.getElementById("notes").textContent = notes;
});
