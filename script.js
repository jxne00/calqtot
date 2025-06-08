function calculate() {
    const baseAmount = parseFloat(document.getElementById('amount').value) || 0;
    const gstPercent = parseFloat(document.getElementById('gst').value);
    const svcPercent = parseFloat(document.getElementById('service').value);
    const applyGST = document.getElementById('applyGST').checked;
    const applySVC = document.getElementById('applySVC').checked;

    let total = baseAmount;
    let formula = `$${baseAmount.toFixed(2)}`;
    let finalAmt = baseAmount;

    if (applySVC) {
        finalAmt *= 1 + svcPercent / 100;
        formula += ` x ${(1 + svcPercent / 100).toFixed(2)} (SVC)`;
    }

    if (applyGST) {
        finalAmt *= 1 + gstPercent / 100;
        formula += ` x ${(1 + gstPercent / 100).toFixed(2)} (GST)`;
    }

    total = finalAmt;

    document.getElementById('formula').textContent = `Formula used: ${formula}`;
    document.getElementById('result').textContent = `Total: $${total.toFixed(2)}`;
}
