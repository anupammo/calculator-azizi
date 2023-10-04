const firstStage = () => {
    let usd_lme = parseFloat(document.getElementById("usd_lme").value);
    let fx_rate = parseFloat(document.getElementById("fx_rate").value);
    if (usd_lme == "" || usd_lme == 0 || isNaN(usd_lme)) {
        document.getElementById("usd_lme").focus();
    } else if (fx_rate == "" || fx_rate == 0 || isNaN(fx_rate)) {
        document.getElementById("fx_rate").focus();
    } else {
        let qm_buy = parseFloat((usd_lme * fx_rate).toFixed(2));
        let qm_sell = parseFloat((qm_buy * 1.07).toFixed(2));
        document.getElementById("qm_buy").value = "RM" + qm_buy;
        document.getElementById("qm_sell").value = "RM" + qm_sell;
    }
}
const secondStage = () => {
    const usd_lme = parseFloat(document.getElementById("usd_lme").value);
    const fx_rate = parseFloat(document.getElementById("fx_rate").value);
    const cash_val = parseFloat(document.getElementById("cash_val").value);
    if (usd_lme == "" || usd_lme == 0 || isNaN(usd_lme)) {
        document.getElementById("usd_lme").focus();
    } else if (fx_rate == "" || fx_rate == 0 || isNaN(fx_rate)) {
        document.getElementById("fx_rate").focus();
    } else if (cash_val == "" || cash_val == 0 || isNaN(cash_val)) {
        document.getElementById("cash_val").focus();
    } else {
        let qm_buy = parseFloat((usd_lme * fx_rate).toFixed(2));
        let qm_sell = parseFloat((qm_buy * 1.07).toFixed(2));
        let net_gram = parseFloat((cash_val / qm_sell).toFixed(5));
        let net_cash = parseFloat((net_gram * qm_buy).toFixed(2));
        document.getElementById("qm_buy").value = "RM" + qm_buy;
        document.getElementById("qm_sell").value = "RM" + qm_sell;
        document.getElementById("net_gram").value = net_gram + "g";
        document.getElementById("net_cash").value = "RM" + net_cash.toLocaleString('en-US');
    }
}
const dtlsDev = () => { const str1 = "Dev : https://AnupamMondal.in"; console.log(str1); }
const thirdStage = () => {
    const usd_lme = parseFloat(document.getElementById("usd_lme").value);
    const fx_rate = parseFloat(document.getElementById("fx_rate").value);
    const cash_val = parseFloat(document.getElementById("cash_val").value);
    if (usd_lme == "" || usd_lme == 0 || isNaN(usd_lme)) {
        document.getElementById("usd_lme").focus();
    } else if (fx_rate == "" || fx_rate == 0 || isNaN(fx_rate)) {
        document.getElementById("fx_rate").focus();
    } else if (cash_val == "" || cash_val == 0 || isNaN(cash_val)) {
        document.getElementById("cash_val").focus();
    } else {
        let qm_buy = parseFloat((usd_lme * fx_rate).toFixed(2));
        let qm_sell = parseFloat((qm_buy * 1.07).toFixed(2));
        let net_gram = parseFloat((cash_val / qm_sell).toFixed(5));
        let net_cash = parseFloat((net_gram * qm_buy).toFixed(2));
        let cash8_5 = (cash_val * 0.85);
        let hold_inv = parseFloat((cash_val / qm_sell).toFixed(4));
        let lock_15 = parseFloat(hold_inv * 0.15).toFixed(5);
        document.getElementById("qm_buy").value = "RM" + qm_buy;
        document.getElementById("qm_sell").value = "RM" + qm_sell;
        document.getElementById("net_gram").value = net_gram + "g";
        document.getElementById("net_cash").value = "RM" + net_cash.toLocaleString('en-US');
        document.getElementById("disp_cash").value = "RM" + cash_val.toLocaleString('en-US');
        document.getElementById("cash8_5").value = "RM" + cash8_5.toLocaleString('en-US');
        document.getElementById("lock_15").value = lock_15 + "g";
        document.getElementById("hold_inv").value = hold_inv + "g";
    }
}
const lastStage = () => {
    const usd_lme = parseFloat(document.getElementById("usd_lme").value);
    const fx_rate = parseFloat(document.getElementById("fx_rate").value);
    const cash_val = parseFloat(document.getElementById("cash_val").value);
    const gram_val = parseFloat(document.getElementById("gram_val").value);
    if (usd_lme == "" || usd_lme == 0 || isNaN(usd_lme)) {
        document.getElementById("usd_lme").focus();
    } else if (fx_rate == "" || fx_rate == 0 || isNaN(fx_rate)) {
        document.getElementById("fx_rate").focus();
    } else if (cash_val == "" || cash_val == 0 || isNaN(cash_val)) {
        document.getElementById("cash_val").focus();
    } else if (gram_val == "" || gram_val == 0 || isNaN(gram_val)) {
        document.getElementById("gram_val").focus();
    } else {
        let qm_buy = parseFloat((usd_lme * fx_rate).toFixed(2));
        let qm_sell = parseFloat((qm_buy * 1.07).toFixed(2));
        let net_gram = parseFloat((cash_val / qm_sell).toFixed(5));
        let net_cash = parseFloat((net_gram * qm_buy).toFixed(2));
        let cash8_5 = (cash_val * 0.85);
        let hold_inv = parseFloat((cash_val / qm_sell).toFixed(4));
        let lock_15 = parseFloat(hold_inv * 0.15).toFixed(5);
        let nco_val = parseFloat((gram_val * qm_buy).toFixed(2));
        let gca_gold = parseFloat(((gram_val * qm_buy) * 0.91).toFixed(2));
        document.getElementById("qm_buy").value = "RM" + qm_buy;
        document.getElementById("qm_sell").value = "RM" + qm_sell;
        document.getElementById("net_gram").value = net_gram + "g";
        document.getElementById("net_cash").value = "RM" + net_cash.toLocaleString('en-US');
        document.getElementById("disp_cash").value = "RM" + cash_val.toLocaleString('en-US');
        document.getElementById("cash8_5").value = "RM" + cash8_5.toLocaleString('en-US');
        document.getElementById("lock_15").value = lock_15 + "g";
        document.getElementById("hold_inv").value = hold_inv + "g";
        document.getElementById("nco_val").value = "RM" + nco_val;
        document.getElementById("gca_gold").value = "RM" + gca_gold;
    }
}
document.body.onload = dtlsDev;