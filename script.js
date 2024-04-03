const exchangeRate = {
    CAD: 1.0,
    USD: 0.74
};


function cadToUsd(amount) {
    return amount * exchangeRate['USD'];
}

function usdToCad(amount) {
    return amount * exchangeRate['CAD'];
}

function updateConvertedAmount() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const fromFlag = document.getElementById('from-flag').value;
    const toFlag = document.getElementById('to-flag').value;
  
    let convertedAmount;
    if (fromFlag === 'canada' && toFlag === 'us') {
        convertedAmount = cadToUsd(amount);
    } else if (fromFlag === 'us' && toFlag === 'canada') {
        convertedAmount = usdToCad(amount);
    } else {
        alert("Invalid currency conversion.");
        return;
    }
  
    document.getElementById('converted-amount').innerHTML = `${toFlag === 'canada' ? '🇨🇦' : '🇺🇸'} ${convertedAmount.toFixed(3)}`;
}

document.getElementById('convert').addEventListener('click', updateConvertedAmount);
document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('amount').value = '';
    document.getElementById('converted-amount').innerHTML = '';
});
