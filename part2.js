function processNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        result.value = "Please enter valid numbers in all input fields.";
        return;
    }

    const sum = num1 + num2 + num3;
    const avg = sum / 3;
    const product = num1 * num2 * num3;
    const smallest = Math.min(num1, num2, num3);
    const largest = Math.max(num1, num2, num3);

    result.value = `Sum: ${sum}\nAverage: ${avg}\nProduct: ${product}\nSmallest: ${smallest}\nLargest: ${largest}`;
}

