 // Changing which calculator show
    this.invoiceFactoringShow = true
    this.smallBusinessLoanShow = false
    this.lineOfCreditPayoffShow = false

    this.changingCalculators = function(calculator) {
      
      if(calculator === 1)  {
        this.invoiceFactoringShow = true
        this.smallBusinessLoanShow = false
        this.lineOfCreditPayoffShow = false
      } 

      if(calculator === 2)  {
        this.invoiceFactoringShow = false
        this.smallBusinessLoanShow = true
        this.lineOfCreditPayoffShow = false
      }

      if(calculator === 3)  {
        this.invoiceFactoringShow = false
        this.smallBusinessLoanShow = false
        this.lineOfCreditPayoffShow = true
      }
    }

    // Invoice Factoring Calculator calculations and reset
    this.invoiceFactoringCalculation = function() {
      this.invoice.advanceAmount = Math.round((this.invoice.percent / 100) * this.invoice.amount)
      this.invoice.weeklyCost = Math.round(((this.invoice.amount * (this.invoice.fee / 100 )) * this.invoice.weeks))
      this.invoice.reserveAmount = Math.round((this.invoice.amount - this.invoice.advanceAmount) - (this.invoice.weeklyCost - this.invoice.processing - this.invoice.miscellaneous))
      this.invoice.costFactoring = Math.round(parseInt(this.invoice.weeklyCost) + parseInt(this.invoice.processing) + parseInt(this.invoice.miscellaneous))
    }

    // Small business loan calculator reset and calculations

    this.smallBusinessLoanCalculation = function(){
      
      var n = this.loan.years * 12
      var i = this.loan.rate / 100 / 12
      var d = ((Math.pow(1 + i, n)) - 1) / ((Math.pow(1 + i, n)) * i)
      this.loan.monthly = Math.round(this.loan.amount / d)
      this.loan.totalInterest = Math.round((this.loan.monthly * n) - this.loan.amount)
      this.loan.monthlyInterest = Math.round(this.loan.totalInterest / n)
      this.loan.totalCost = Math.round(parseInt(this.loan.amount) + this.loan.totalInterest)

      if (this.loan.extra)  {
        this.loan.finalYears = this.loan.years * (this.loan.totalCost / ((parseInt(this.loan.extra) + this.loan.monthly) * this.loan.years * 12))
        this.loan.finalYears = Math.round(this.loan.finalYears * 100) / 100
      } else {
        this.loan.finalYears = parseInt(this.loan.years)
      }


    }

    //line credit payoff calculations and reset

    this.lineCreditPayoffCalculation = function() {
      if (this.credit.additional )  {
      var n = this.credit.months
      var i = this.credit.rate / 100 / 12
      var d = ((Math.pow(1 + i, n)) - 1) / ((Math.pow(1 + i, n)) * i)
      this.credit.monthlyCalculated = Math.round(((parseInt(this.credit.balance)) + (parseInt(this.credit.additional) * parseInt(this.credit.months))) / d)

      } else {
        var n = this.credit.months
      var i = this.credit.rate / 100 / 12
      var d = ((Math.pow(1 + i, n)) - 1) / ((Math.pow(1 + i, n)) * i)
      this.credit.monthlyCalculated = Math.round(parseInt(this.credit.balance) / d)
      }
    }
