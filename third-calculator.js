
const firstCalculate = () => {
    const x = document.getElementById("qm_buy").value;
    const y = document.getElementById("gca_repeat").value;
    const z = document.getElementById("nco_estimation").value;

    if (x == "" || x == 0 || x == null) {
        document.getElementById("qm_buy").focus();
    } else if (y == "" || y == 0 || y == null) {
        document.getElementById("gca_repeat").focus();
    } else if (z == "" || z == 0 || z == null) {
        document.getElementById("nco_estimation").focus();
    } else {
        let qm_buy = document.getElementById("qm_buy").value;
        const qm_buy7 = (parseFloat(qm_buy * 0.07).toFixed(2));
        let qm_sell = parseFloat(qm_buy) + parseFloat(qm_buy7);
        document.getElementById("qm_sell").value = qm_sell;
        let gca_repeat = document.getElementById("gca_repeat").value;
        let gca_1time = ((gca_repeat * 0.85) / qm_sell).toFixed(5);
        document.getElementById("gca_1time").value = gca_1time;

        let nco_estimation = (document.getElementById("nco_estimation").value / 100);
        let lme_future5 = (parseFloat(qm_buy) + (parseFloat(qm_buy * nco_estimation) * 5)).toFixed(2);
        let lme_future10 = (parseFloat(qm_buy) + (parseFloat(qm_buy * nco_estimation) * 10)).toFixed(2);
        let lme_future15 = (parseFloat(qm_buy) + (parseFloat(qm_buy * nco_estimation) * 15)).toFixed(2);
        let lme_future20 = (parseFloat(qm_buy) + (parseFloat(qm_buy * nco_estimation) * 20)).toFixed(2);
        document.getElementById("lme_future5").innerHTML = lme_future5;
        document.getElementById("lme_future10").innerHTML = lme_future10;
        document.getElementById("lme_future15").innerHTML = lme_future15;
        document.getElementById("lme_future20").innerHTML = lme_future20;

        let temp_counter = 0;
        let temp_rollingcapital = 0;
        let repeatedgca = 0;
        let gca_results = 0;
        let netgram15 = 0;
        let netmf = 0;
        let netbaseprice = 0;
        const gca85 = [];
        const lock15 = [];
        const rollingcapital = [];
        const gram15 = [];
        const gram100 = [];
        const mf35 = [];
        const baseprice = [];
        let temp_gca85 = gca_repeat;
        let temp_lock15 = gca_repeat;
        for (let i = 0; i < 30; i++) {

            gca85[i] = parseFloat(temp_gca85 * 0.85).toFixed(2);
            lock15[i] = parseFloat(temp_gca85 * 0.15).toFixed(2);
            temp_gca85 = gca85[i];
            temp_lock15 = lock15[i];
            rollingcapital[i] = (parseFloat(gca85[i]) + parseFloat(lock15[i])).toFixed(2);
            gram15[i] = (lock15[i] / qm_sell).toFixed(4);
            gram100[i] = (rollingcapital[i] / qm_sell).toFixed(4);
            mf35[i] = parseFloat(gca85[i] * 0.035).toFixed(2);
            baseprice[i] = parseFloat(gram100[i] * qm_buy).toFixed(2);

            temp_rollingcapital = rollingcapital[i];
            temp_counter = temp_counter + 1;

            if (temp_rollingcapital < 150) {
                break;
            }

            let table = document.getElementById("myTable");
            let row = table.insertRow(-1);
            let col8 = row.insertCell(-1);
            let col1 = row.insertCell(-1);
            let col2 = row.insertCell(-1);
            let col3 = row.insertCell(-1);
            let col4 = row.insertCell(-1);
            let col5 = row.insertCell(-1);
            let col6 = row.insertCell(-1);
            let col7 = row.insertCell(-1);
            col3.innerHTML = "RM " + lock15[i];
            col2.innerHTML = "RM " + gca85[i];
            col1.innerHTML = "RM " + rollingcapital[i];
            col4.innerHTML = gram15[i] + "g";
            col5.innerHTML = gram100[i] + "g";
            col6.innerHTML = "RM " + mf35[i];
            col7.innerHTML = "RM " + baseprice[i];
            col8.innerHTML = i + 1;
            repeatedgca += parseFloat(gram100[i])
            netgram15 += parseFloat(gram15[i])
            netmf += parseFloat(mf35[i])
            netbaseprice += parseFloat(baseprice[i])
            gcaresults = (repeatedgca * qm_buy).toFixed(2);
            ncovalue5 = (netgram15);
        }

        document.getElementById("repeated_gca").value = (repeatedgca).toFixed(2);
        document.getElementById("gca_results").value = gcaresults;
        document.getElementById("net_mf3_5").innerHTML = (netmf).toFixed(2);
        document.getElementById("net_base_price").innerHTML = (netbaseprice).toFixed(2);
        const ncoval5 = (parseFloat((netgram15 * parseFloat(lme_future5)).toFixed(2)) + ((parseFloat((parseFloat(repeatedgca) * parseFloat(lme_future5)) - parseFloat(netbaseprice)).toFixed(2)) - (netmf * 5)));
        const ncoval10 = (parseFloat((netgram15 * parseFloat(lme_future10)).toFixed(2)) + ((parseFloat((parseFloat(repeatedgca) * parseFloat(lme_future10)) - parseFloat(netbaseprice)).toFixed(2)) - (netmf * 10)));
        const ncoval15 = (parseFloat((netgram15 * parseFloat(lme_future15)).toFixed(2)) + ((parseFloat((parseFloat(repeatedgca) * parseFloat(lme_future15)) - parseFloat(netbaseprice)).toFixed(2)) - (netmf * 15)));
        const ncoval20 = (parseFloat((netgram15 * parseFloat(lme_future20)).toFixed(2)) + ((parseFloat((parseFloat(repeatedgca) * parseFloat(lme_future20)) - parseFloat(netbaseprice)).toFixed(2)) - (netmf * 20)));
        document.getElementById("nco_value5").innerHTML = ncoval5.toFixed(2);
        document.getElementById("nco_value10").innerHTML = ncoval10.toFixed(2);
        document.getElementById("nco_value15").innerHTML = ncoval15.toFixed(2);
        document.getElementById("nco_value20").innerHTML = (ncoval20).toFixed(2);

        document.getElementById('btn_calc').innerHTML = "Reset";
        document.getElementById('btn_calc').setAttribute('onclick', 'reloadValid()');
    }
}
const dtlsDev = () => {
    const str1 = "Developed by - ";
    const dev = "Anupam Mondal";
    const dev_url = "https://anupammondal.in";
    console.log(str1, dev);
    console.log(dev_url);
}
const reloadValid = () => {
    location.reload (alert("You need to insert fresh value for Calculation !!"));
}
document.body.onload = dtlsDev;