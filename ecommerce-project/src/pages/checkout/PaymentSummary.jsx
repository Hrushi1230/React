
export function PaymentSummary({paymentSummary}) {
  let totalItems = paymentSummary.totalItems;
  let productCost=(paymentSummary.productCostCents)/100;
  let shipingCost=(paymentSummary.shippingCostCents)/100;
  let totalCostBeforeTax=((paymentSummary.totalCostBeforeTaxCents)/100).toFixed(2);
  let estimateTax=((paymentSummary.taxCents)/100).toFixed(2);
  let totalCost=((paymentSummary.totalCostCents)/100).toFixed(2);
 
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      <div className="payment-summary-row">
        <div>Items ({totalItems}):</div>
        <div className="payment-summary-money">${productCost}</div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">${shipingCost}</div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">${totalCostBeforeTax}</div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">${estimateTax}</div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">${totalCost}</div>
      </div>

      <button className="place-order-button button-primary">
        Place your order
      </button>
    </div>
  );
}
