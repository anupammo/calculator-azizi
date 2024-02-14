
        // 5x
        let dailywaiting = 90;
        let lmecprice = 63;
        let lmeprice = 66;
        function chartData() {
            var xValues = [1, dailywaiting];
            var yValues = [55, 60, 65, 70];
            const ctx = document.getElementById('myChart');
            const myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: xValues,
                    datasets: [{
                        label: 'USD / $',
                        data: [lmecprice, lmeprice],
                        borderColor: "blue",
                        fill: false
                    }]
                },
                options: {
                    legend: { display: true }
                }
            })
        }
        function getValue() {
            lmecprice = document.getElementById('lme-cprice').value;
            let fxrate = document.getElementById('fx-rate').value;
            let qmprice = document.getElementById('qm-price').value;
            let unitbought = document.getElementById('unit-bought').value;
            document.getElementById('disp-unit').innerHTML = unitbought;
            let unitprice = parseInt(document.getElementById('unit-price').value);
            let futurefx = document.getElementById('future-fx').value;
            let usdgain = document.getElementById('usd-gain').value;
            dailywaiting = document.getElementById('daily-waiting').value;
            // Table One
            const tbl1 = document.getElementById("tbl1");
            let spread4p = parseFloat((((lmecprice * fxrate) / 100) * 4).toFixed(2));
            let qmsell = parseFloat((lmecprice * 1.04).toFixed(2));
            let produkgae5x = (qmsell - lmecprice).toFixed(2);
            let qmBuy = parseFloat((lmecprice * fxrate).toFixed(2));
            let qmSellSpread = parseFloat(((lmecprice * fxrate) + spread4p).toFixed(2));
            tbl1.rows[1].cells[1].innerHTML = "RM" + spread4p;
            tbl1.rows[2].cells[1].innerHTML = "$" + qmsell;
            tbl1.rows[0].cells[1].innerHTML = "$" + produkgae5x;
            tbl1.rows[3].cells[1].innerHTML = "RM" + qmBuy;
            tbl1.rows[4].cells[1].innerHTML = "RM" + qmSellSpread;
            // Table Two
            const tbl2 = document.getElementById("tbl2");
            let unitcost = (unitprice * unitbought);
            let apayment = (unitcost * fxrate).toFixed(2);
            tbl2.rows[2].cells[1].innerHTML = "$" + unitcost;
            tbl2.rows[3].cells[1].innerHTML = "RM" + apayment;
            // Table Three
            const tbl3 = document.getElementById("tbl3");
            let qmbought = (qmprice * unitbought).toFixed(2);
            let totalgae = (qmbought * fxrate).toFixed(2);
            tbl3.rows[1].cells[1].innerHTML = "$" + qmbought;
            tbl3.rows[2].cells[1].innerHTML = "RM" + totalgae;
            // Table Four
            const tbl4 = document.getElementById("tbl4");
            let gae35 = ((qmbought * 3.5) / 100).toFixed(2);
            let bconverted = (gae35 * fxrate).toFixed(2);
            let mfqm = (gae35 / 365).toFixed(2);
            tbl4.rows[0].cells[1].innerHTML = "$" + gae35;
            tbl4.rows[1].cells[1].innerHTML = "RM" + bconverted;
            tbl4.rows[2].cells[1].innerHTML = "$" + mfqm;
            // Table Five
            const tbl5 = document.getElementById("tbl5");
            let valuegae = ((unitprice * 5) * unitbought).toFixed(2);
            let totalgold = (valuegae / qmsell).toFixed(5);
            let netcash = ((totalgold * lmecprice) - qmbought).toFixed(2);
            tbl5.rows[0].cells[1].innerHTML = "$" + valuegae;
            tbl5.rows[1].cells[1].innerHTML = totalgold + "g";
            tbl5.rows[2].cells[1].innerHTML = "$" + netcash;
            // Table Six
            const tbl6 = document.getElementById("tbl6");
            lmeprice = (parseFloat(usdgain) + parseInt(lmecprice));
            let lmepercent = (((lmeprice - lmecprice) / lmecprice) * 100).toFixed(1);
            tbl6.rows[2].cells[1].innerHTML = "$" + lmeprice;
            tbl6.rows[3].cells[1].innerHTML = lmepercent + "%";
            // Table Seven
            const tbl7 = document.getElementById("tbl7");
            feetodate = (dailywaiting * mfqm).toFixed(2);
            tbl7.rows[1].cells[1].innerHTML = feetodate;
            // Table Eight
            const tbl8 = document.getElementById("tbl8");
            let netcashout = parseFloat((totalgold * lmeprice) - qmbought).toFixed(2);
            tbl8.rows[0].cells[1].innerHTML = "$" + netcashout;
            tbl8.rows[1].cells[1].innerHTML = "$" + netcashout;
            // Table Nine
            const tbl9 = document.getElementById("tbl9");
            let terminateusd = (netcashout - feetodate).toFixed(2);
            let terminatemyr = (terminateusd * futurefx).toFixed(2);
            let profit = (terminatemyr - apayment).toFixed(2);
            tbl9.rows[0].cells[1].innerHTML = "$" + terminateusd;
            tbl9.rows[1].cells[1].innerHTML = "RM" + terminatemyr;
            tbl9.rows[2].cells[1].innerHTML = "RM" + profit;
        }
        function lmeCPrice() {
            getValue();
            chartData();
        }
        function fxRate() {
            getValue();
            chartData();
        }
        function unitBought() {
            getValue();
            chartData();
        }
        function futureFx() {
            getValue();
            chartData();
        }
        function usdGain() {
            getValue();
            chartData();
        }
        function dailyWaiting() {
            getValue();
            chartData();
        }

        // 10x
        let dailywaiting10x = 60;
        let lmecprice10x = 63;
        let lmeprice10x = 66;
        function chartData10x() {
            var xValues = [1, dailywaiting10x];
            var yValues = [55, 60, 65, 70];
            const ctx = document.getElementById('myChart10x');
            const myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: xValues,
                    datasets: [{
                        label: 'USD / $',
                        data: [lmecprice10x, lmeprice10x],
                        borderColor: "blue",
                        fill: false
                    }]
                },
                options: {
                    legend: { display: true }
                }
            })
        }
        // window.onload = chartData10x;
        function getValue10x() {
            lmecprice10x = document.getElementById('lme-cprice-10x').value;
            let fxrate10x = document.getElementById('fx-rate-10x').value;
            let qmprice10x = document.getElementById('qm-price-10x').value;
            let unitbought10x = document.getElementById('unit-bought-10x').value;
            document.getElementById('disp-unit-10x').innerHTML = unitbought10x;
            let unitprice10x = parseInt(document.getElementById('unit-price-10x').value);
            let futurefx10x = document.getElementById('future-fx-10x').value;
            let usdgain10x = document.getElementById('usd-gain-10x').value;
            dailywaiting10x = document.getElementById('daily-waiting-10x').value;
            // Table One
            const tbl11 = document.getElementById("tbl11");
            let qmsell10x = parseFloat((lmecprice10x * 1.03).toFixed(2));
            let produkgae10x = (qmsell10x - lmecprice10x).toFixed(2);
            let spread4p10x = parseFloat((((lmecprice10x * fxrate10x) / 100) * 3).toFixed(2));
            let qmBuy10x = parseFloat((lmecprice10x * fxrate10x).toFixed(2));
            let qmSellSpread10x = parseFloat(((lmecprice10x * fxrate10x) + spread4p10x).toFixed(2));
            tbl11.rows[0].cells[1].innerHTML = "$" + produkgae10x;
            tbl11.rows[1].cells[1].innerHTML = "RM" + spread4p10x;
            tbl11.rows[3].cells[1].innerHTML = "$" + qmsell10x;
            tbl11.rows[2].cells[1].innerHTML = "RM" + qmBuy10x;
            tbl11.rows[4].cells[1].innerHTML = "RM" + qmSellSpread10x;
            // Table Two
            const tbl12 = document.getElementById("tbl12");
            let unitcost10x = (unitprice10x * unitbought10x);
            let apayment10x = (unitcost10x * fxrate10x).toFixed(2);
            tbl12.rows[2].cells[1].innerHTML = "$" + unitcost10x;
            tbl12.rows[3].cells[1].innerHTML = "RM" + apayment10x;
            // Table Three
            const tbl13 = document.getElementById("tbl13");
            let qmbought10x = (qmprice10x * unitbought10x).toFixed(2);
            let totalgae10x = (qmbought10x * fxrate10x).toFixed(2);
            tbl13.rows[1].cells[1].innerHTML = "$" + qmbought10x;
            tbl13.rows[2].cells[1].innerHTML = "RM" + totalgae10x;
            // Table Four
            const tbl14 = document.getElementById("tbl14");
            let gae3510x = ((qmbought10x * 3.5) / 100).toFixed(2);
            let bconverted10x = (gae3510x * fxrate10x).toFixed(2);
            let mfqm10x = (gae3510x / 365).toFixed(2);
            let mfmyr10x = (mfqm10x * fxrate10x).toFixed(2);
            tbl14.rows[0].cells[1].innerHTML = "$" + gae3510x;
            tbl14.rows[1].cells[1].innerHTML = "RM" + bconverted10x;
            tbl14.rows[2].cells[1].innerHTML = "$" + mfqm10x;
            tbl14.rows[3].cells[1].innerHTML = "RM" + mfmyr10x;
            // Table Ten 
            const tbl10 = document.getElementById("tbl10");
            let gae10xusd = parseFloat(unitcost10x) + parseFloat(gae3510x);
            let gae10xmyr = parseFloat(apayment10x) + parseFloat(bconverted10x);
            tbl10.rows[0].cells[1].innerHTML = "$" + gae10xusd;
            tbl10.rows[1].cells[1].innerHTML = "RM" + gae10xmyr;
            // Table Five
            const tbl15 = document.getElementById("tbl15");
            let valuegae10x = ((unitprice10x * 10) * unitbought10x).toFixed(2);
            let totalgold10x = (valuegae10x / qmsell10x).toFixed(5);
            let netcash10x = ((totalgold10x * lmecprice10x) - qmbought10x).toFixed(2);
            tbl15.rows[0].cells[1].innerHTML = "$" + valuegae10x;
            tbl15.rows[1].cells[1].innerHTML = totalgold10x + "g";
            tbl15.rows[2].cells[1].innerHTML = "$" + netcash10x;
            // Table Six
            const tbl16 = document.getElementById("tbl16");
            lmeprice10x = (parseFloat(usdgain10x) + parseInt(lmecprice10x));
            let lmepercent10x = (((lmeprice10x - lmecprice10x) / lmecprice10x) * 100).toFixed(1);
            tbl16.rows[2].cells[1].innerHTML = "$" + lmeprice10x;
            tbl16.rows[3].cells[1].innerHTML = lmepercent10x + "%";
            // Table Seven
            const tbl17 = document.getElementById("tbl17");
            feetodate10x = (dailywaiting10x * mfqm10x).toFixed(2);
            tbl17.rows[1].cells[1].innerHTML = "$" + feetodate10x;
            // Table Eight
            const tbl18 = document.getElementById("tbl18");
            let netcashout10x = parseFloat((totalgold10x * lmeprice10x) - qmbought10x).toFixed(2);
            let fvaluemyr = (parseFloat(netcashout10x) * parseFloat(futurefx10x)).toFixed(2);
            let gvaluemyr = (parseFloat(fvaluemyr) - parseFloat(apayment10x)).toFixed(2);
            tbl18.rows[0].cells[1].innerHTML = "$" + netcashout10x;
            tbl18.rows[1].cells[1].innerHTML = "RM" + fvaluemyr;
            tbl18.rows[2].cells[1].innerHTML = "RM" + gvaluemyr;
            // Table Nine
            const tbl19 = document.getElementById("tbl19");
            let refundmf = (gae3510x - feetodate10x).toFixed(2);
            let totalmf = (refundmf * futurefx10x).toFixed(2);
            let totalacc = parseFloat(netcashout10x) + parseFloat(refundmf);
            let netcash = (parseFloat(totalacc) * parseFloat(futurefx10x)).toFixed(2);
            let totalprofit = (parseFloat(netcash) - parseFloat(gae10xmyr)).toFixed(2);
            tbl19.rows[0].cells[1].innerHTML = "$" + refundmf;
            tbl19.rows[1].cells[1].innerHTML = "RM" + totalmf;
            tbl19.rows[2].cells[1].innerHTML = "$" + totalacc;
            tbl19.rows[3].cells[1].innerHTML = "RM" + netcash;
            tbl19.rows[4].cells[1].innerHTML = "RM" + totalprofit;
        }
        function lmeCPrice10x() {
            getValue10x();
            chartData10x();
        }
        function fxRate10x() {
            getValue10x();
            chartData10x();
        }
        function unitBought10x() {
            getValue10x();
            chartData10x();
        }
        function futureFx10x() {
            getValue10x();
            chartData10x();
        }
        function usdGain10x() {
            getValue10x();
            chartData10x();
        }
        function dailyWaiting10x() {
            getValue10x();
            chartData10x();
        }
        function forBodyload() {
            window.onload = chartData;
            window.onload = chartData10x;
        }