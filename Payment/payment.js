function paymentProcess() {
    // Get the total amount from the "Total" section
    var totalAmount = document.getElementById("total-amount").textContent;

    var options = {
        "key": "rzp_test_RkrD1X74NWT4U5",
        "amount": parseFloat(totalAmount.replace("INR ", "")) * 100,
        "currency": "INR",
        "name": "TaxEase",
        "description": "Tax Filing Amount",
        "image": "logo.png",
        "handler": function (response) {
            savetoDB(response);
            $('#myModal').modal();
        },
        "prefill": {
            "name": "Mitesh Singh",
            "email": "miteshsingh957@gmail.com",
            "contact": "7420027576"
        },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#9932CC"
        }
    };

    var propay = new Razorpay(options);
    propay.open();
}
