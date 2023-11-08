// Sample data for the states
const statesData = [
    { abbr: 'AL', name: 'Alabama', capital: 'Montgomery', population: '4,903,185' },
    { abbr: 'AK', name: 'Alaska', capital: 'Juneau', population: '731,545' },
    // ... other states
    { abbr: 'WY', name: 'Wyoming', capital: 'Cheyenne', population: '578,759' }
];

function getStateInfo() {
    let userInput = document.getElementById('stateInput').value.trim();
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Clear previous results

    if (!userInput) {
        resultElement.innerHTML = 'Please enter a state name or abbreviation.';
        return;
    }

    // Normalize the user input for comparison
    userInput = userInput.toLowerCase();

    // Attempt to find the state in the array
    let stateInfo = statesData.find(state => 
        state.name.toLowerCase() === userInput || 
        state.abbr.toLowerCase() === userInput
    );

    // Display the result
    if (stateInfo) {
        resultElement.innerHTML = `
            <strong>State Name:</strong> ${stateInfo.name}<br>
            <strong>Abbreviation:</strong> ${stateInfo.abbr}<br>
            <strong>Capital:</strong> ${stateInfo.capital}<br>
            <strong>Population:</strong> ${stateInfo.population}`;
    } else {
        resultElement.innerHTML = 'No information found for that state.';
    }
}
