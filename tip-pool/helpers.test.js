describe("Helpers tests", function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
      });

    it('Should sum total from allPayments objects', function() {
        sumPaymentTotal('tipPercent');
        sumPaymentTotal('billAmt');
        sumPaymentTotal('tipAmt');
    });

    it('Should calculate the tip percent', function() {
        expect(calculateTipPercent(100, 20)).toEqual(20);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
});