const getCalculate = () => {
    let qm_buy = parseFloat(document.getElementById("qm_buy").value);
    let fx_rate = parseFloat(document.getElementById("fx_rate").value);
    let unit_req = parseFloat(document.getElementById("unit_req").value);
    let qm_sell_gae = parseFloat((qm_buy * 0.03) + qm_buy).toFixed(2);
    document.getElementById("qm_sell").innerHTML = qm_sell_gae;
    let upfront_payment = parseFloat(250 * fx_rate * unit_req).toFixed(2);
    document.getElementById("upfront-pay").innerHTML = upfront_payment;
    let upfront_fee = parseFloat(((2250 * unit_req) * 0.035) * fx_rate).toFixed(2);
    document.getElementById("upfront-mgmt-fee").innerHTML = upfront_fee;
    let in_rm = parseFloat(qm_sell_gae * fx_rate).toFixed(2);
    document.getElementById("in-rm").innerHTML = in_rm;
    let total_payment = parseFloat(upfront_payment) + parseFloat(upfront_fee);
    document.getElementById("total-payment-fpx").innerHTML = total_payment;
    let gram_listed = parseFloat((2500 * unit_req) / qm_sell_gae).toFixed(3);
    document.getElementById("gram-listed-gae").innerHTML = gram_listed;
    let current_gae = parseFloat((gram_listed * qm_buy) - 2250).toFixed(2);
    document.getElementById("current-gae-value").innerHTML = current_gae;
    let tawarruq_finance = 9 * unit_req;
    document.getElementById("tawarruq-fin").innerHTML = tawarruq_finance;
    let in_myr = parseFloat(current_gae * fx_rate).toFixed(2);
    document.getElementById("in-myr").innerHTML = in_myr;
}
const dtlsDev = () => {
    const str1 = "Developed by - "
    const dev = "Anupam Mondal";
    const dev_url = "https://anupammondal.in";
    console.log(str1, dev);
    console.log(dev_url);
}
const getPrediction = () => {
    let prediction_gain = parseInt(document.getElementById("prediction-gain").value);
    let days_invested = parseInt(document.getElementById("days-invested").value);

    let fx_rate = parseFloat(document.getElementById("fx_rate").value).toFixed(3);
    let qm_sell_gae = parseFloat(document.getElementById("qm_sell").textContent);
    let unit_req = parseInt(document.getElementById("unit_req").value);
    let upfront_payment = parseFloat(document.getElementById("upfront-pay").textContent).toFixed(2);
    let gram_listed = parseFloat(document.getElementById("gram-listed-gae").textContent).toFixed(4);

    let future_qm = parseFloat(((prediction_gain / 100) * qm_sell_gae) + qm_sell_gae).toFixed(2);
    document.getElementById("future-qm").innerHTML = future_qm;

    let net_cash_out = parseFloat((gram_listed * future_qm) - (250 * 9 * unit_req)).toFixed(2);
    document.getElementById("net-cash-out").innerHTML = net_cash_out;


    let total_gain = parseInt((((gram_listed * future_qm) - (250 * 9 * unit_req)) * fx_rate) - (250 * fx_rate * unit_req)).toFixed(2);
    document.getElementById("total-gain").innerHTML = total_gain;


    let mf_refund = parseFloat((((2250 * unit_req) * 0.035) * fx_rate) - (((2250 * unit_req) * 0.035 / 365) * days_invested) * fx_rate).toFixed(2);
    document.getElementById("mf-refund").innerHTML = mf_refund;
    // console.log(gram_listed * future_qm);
    // console.log(gram_listed, future_qm, 250, 9, unit_req, fx_rate, 250, fx_rate, unit_req);
}
document.body.onload = dtlsDev;