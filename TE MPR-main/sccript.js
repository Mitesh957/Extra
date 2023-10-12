document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("taxCalculatorForm");
    const incomeInput = document.getElementById("income");
    const deductionsInput = document.getElementById("deductions");
    const taxRateInput = document.getElementById("taxRate");
    const totalTaxOutput = document.getElementById("totalTax");
    const netIncomeOutput = document.getElementById("netIncome");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const income = parseFloat(incomeInput.value) || 0;
        const deductions = parseFloat(deductionsInput.value) || 0;
        const taxRate = parseFloat(taxRateInput.value) || 0;

        const totalTax = (income - deductions) * (taxRate / 100);
        const netIncome = income - totalTax;

        totalTaxOutput.textContent = totalTax.toFixed(2);
        netIncomeOutput.textContent = netIncome.toFixed(2);
    });
});
