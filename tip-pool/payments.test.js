describe("Payments tests", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
      });
    
    it('Should add a curPayment object to allPayments, update html and reset input values', function() {
        submitPaymentInfo();
    });

    it('Should return undefined with negative or empty inputs', function() {
        createCurPayment();
    });

    it('Should return the bill amount', function() {
        createCurPayment();
    });

    it('Should create table row element and pass to appendTd with input value', function() {
        //appendPaymentTable(curpayment);
    });

    it('Should calculate the sum of every payment', function() {
        
        updateSummary();

        
        
    });

    it('Should return a tipPercentAvg of 0', function() {
        
        updateSummary();

        
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
});