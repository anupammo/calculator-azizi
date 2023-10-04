

var xValues = [2027, 2032, 2037, 2042];
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: '%',
            data: [],
            borderColor: "blue",
            fill: false
        }, {
            label: '%',
            data: [1050, 1150, 1200, 1250],
            borderColor: "red",
            fill: false
        }]
    },
    options: {
        legend: { display: true }
    }
})
const dtlsDev = () => { const str1 = "Dev : https://AnupamMondal.in"; console.log(str1); }
const firstCalculate = () => {

    const x = document.getElementById("buy_val").value;
    const y = document.getElementById("incr_est").value;
    if (x == "" || x == 0 || x == null) {
        document.getElementById("buy_val").focus();
    } else if (y == "" || y == 0 || y == null) {
        document.getElementById("incr_est").focus();
    } else {
        let buy_val = document.getElementById("buy_val").value;
        let incr_est = document.getElementById("incr_est").value;
        let sell_val = document.getElementById("sell_val").value = parseFloat(buy_val * 1.07).toFixed(2);
    }
}
const lastCalculate = () => {

    const x = document.getElementById("sell_val").value;
    if (x == "" || x == 0 || x == null) {
        document.getElementById("incr_est").focus();
    }

    let buy_val = document.getElementById("buy_val").value;
    let incr_est = document.getElementById("incr_est").value;
    let sell_val = document.getElementById("sell_val").value = parseFloat(buy_val * 1.07).toFixed(2);

    const val_rm = [];
    val_rm[0] = document.getElementById("val_1").value;
    val_rm[1] = document.getElementById("val_2").value;
    val_rm[2] = document.getElementById("val_3").value;
    val_rm[3] = document.getElementById("val_4").value;
    val_rm[4] = document.getElementById("val_5").value;
    val_rm[5] = document.getElementById("val_6").value;
    val_rm[6] = document.getElementById("val_7").value;
    val_rm[7] = document.getElementById("val_8").value;
    val_rm[8] = document.getElementById("val_9").value;
    val_rm[9] = document.getElementById("val_10").value;
    val_rm[10] = document.getElementById("val_11").value;
    val_rm[11] = document.getElementById("val_12").value;

    const gold_g = [];
    gold_g[0] = ((val_rm[0] / sell_val).toFixed(4))
    gold_g[1] = ((val_rm[1] / sell_val).toFixed(4))
    gold_g[2] = ((val_rm[2] / sell_val).toFixed(4))
    gold_g[3] = ((val_rm[3] / sell_val).toFixed(4))
    gold_g[4] = ((val_rm[4] / sell_val).toFixed(4))
    gold_g[5] = ((val_rm[5] / sell_val).toFixed(4))
    gold_g[6] = ((val_rm[6] / sell_val).toFixed(4))
    gold_g[7] = ((val_rm[7] / sell_val).toFixed(4))
    gold_g[8] = ((val_rm[8] / sell_val).toFixed(4))
    gold_g[9] = ((val_rm[9] / sell_val).toFixed(4))
    gold_g[10] = ((val_rm[10] / sell_val).toFixed(4))
    gold_g[11] = ((val_rm[11] / sell_val).toFixed(4))

    let total_cash = 0;
    for (let i = 0; i < val_rm.length; i++) {
        total_cash += parseFloat(val_rm[i]);
    }
    document.getElementById("total_cash").innerHTML = parseFloat(total_cash).toFixed();
    let gca_cash = parseInt(total_cash * 0.85);
    document.getElementById("gca_cash").innerHTML = gca_cash;
    document.getElementById("lock_cash").innerHTML = parseInt(total_cash * 0.15);

    let total_gold = 0;
    for (let i = 0; i < gold_g.length; i++) {
        total_gold += parseFloat(gold_g[i]);
    }
    document.getElementById("total_gold").innerHTML = total_gold;
    document.getElementById("gca_gold").innerHTML = parseFloat(total_gold * 0.85).toFixed(4);
    const lock_gold = parseFloat(total_gold * 0.15).toFixed(4);
    document.getElementById("lock_gold").innerHTML = lock_gold;

    document.getElementById("weight_1").innerHTML = gold_g[0];
    document.getElementById("weight_2").innerHTML = gold_g[1];
    document.getElementById("weight_3").innerHTML = gold_g[2];
    document.getElementById("weight_4").innerHTML = gold_g[3];
    document.getElementById("weight_5").innerHTML = gold_g[4];
    document.getElementById("weight_6").innerHTML = gold_g[5];
    document.getElementById("weight_7").innerHTML = gold_g[6];
    document.getElementById("weight_8").innerHTML = gold_g[7];
    document.getElementById("weight_9").innerHTML = gold_g[8];
    document.getElementById("weight_10").innerHTML = gold_g[9];
    document.getElementById("weight_11").innerHTML = gold_g[10];
    document.getElementById("weight_12").innerHTML = gold_g[11];

    const i_rate = (incr_est / 100);
    const col3_data = [];
    let temp_col3 = buy_val;
    const col4_data = [];
    const col5_data = [];
    const col6_data = [];
    const col7_data = [];

    const col3_7data = [];
    let temp7_col3 = buy_val;
    const col4_7data = [];
    const col5_7data = [];
    const col6_7data = [];
    const col7_7data = [];
    for (let i = 0; i < 20; i++) {
        col3_data[i] = (parseFloat(temp_col3) + (parseFloat(temp_col3) * i_rate)).toFixed(2);
        temp_col3 = col3_data[i];
        col4_data[i] = (col3_data[i] * lock_gold).toFixed(2);
        col5_data[i] = ((total_gold * col3_data[i]) - (total_gold * buy_val)).toFixed(2);
        col6_data[i] = ((gca_cash * 0.035) * (i + 1)).toFixed(2);
        col7_data[i] = ((parseFloat(col4_data[i]) + parseFloat(col5_data[i])) - parseFloat(col6_data[i])).toFixed(2);

        col3_7data[i] = (parseFloat(temp7_col3) + (parseFloat(temp7_col3) * 0.07)).toFixed(2);
        temp7_col3 = col3_7data[i];
        col4_7data[i] = (col3_7data[i] * lock_gold).toFixed(2);
        col5_7data[i] = ((total_gold * col3_7data[i]) - (total_gold * buy_val)).toFixed(2);
        col6_7data[i] = ((gca_cash * 0.035) * (i + 1)).toFixed(2);
        col7_7data[i] = ((parseFloat(col4_7data[i]) + parseFloat(col5_7data[i])) - parseFloat(col6_7data[i])).toFixed(2);
    }

    // Col-3 data on 20 years table
    document.getElementById("row1_col3").innerHTML = col3_data[0];
    document.getElementById("row2_col3").innerHTML = col3_data[1];
    document.getElementById("row3_col3").innerHTML = col3_data[2];
    document.getElementById("row4_col3").innerHTML = col3_data[3];
    document.getElementById("row5_col3").innerHTML = col3_data[4];
    document.getElementById("row6_col3").innerHTML = col3_data[5];
    document.getElementById("row7_col3").innerHTML = col3_data[6];
    document.getElementById("row8_col3").innerHTML = col3_data[7];
    document.getElementById("row9_col3").innerHTML = col3_data[8];
    document.getElementById("row10_col3").innerHTML = col3_data[9];
    document.getElementById("row11_col3").innerHTML = col3_data[10];
    document.getElementById("row12_col3").innerHTML = col3_data[11];
    document.getElementById("row13_col3").innerHTML = col3_data[12];
    document.getElementById("row14_col3").innerHTML = col3_data[13];
    document.getElementById("row15_col3").innerHTML = col3_data[14];
    document.getElementById("row16_col3").innerHTML = col3_data[15];
    document.getElementById("row17_col3").innerHTML = col3_data[16];
    document.getElementById("row18_col3").innerHTML = col3_data[17];
    document.getElementById("row19_col3").innerHTML = col3_data[18];
    document.getElementById("row20_col3").innerHTML = col3_data[19];

    // Col-4 data on 20 years table
    document.getElementById("row1_col4").innerHTML = col4_data[0];
    document.getElementById("row2_col4").innerHTML = col4_data[1];
    document.getElementById("row3_col4").innerHTML = col4_data[2];
    document.getElementById("row4_col4").innerHTML = col4_data[3];
    document.getElementById("row5_col4").innerHTML = col4_data[4];
    document.getElementById("row6_col4").innerHTML = col4_data[5];
    document.getElementById("row7_col4").innerHTML = col4_data[6];
    document.getElementById("row8_col4").innerHTML = col4_data[7];
    document.getElementById("row9_col4").innerHTML = col4_data[8];
    document.getElementById("row10_col4").innerHTML = col4_data[9];
    document.getElementById("row11_col4").innerHTML = col4_data[10];
    document.getElementById("row12_col4").innerHTML = col4_data[11];
    document.getElementById("row13_col4").innerHTML = col4_data[12];
    document.getElementById("row14_col4").innerHTML = col4_data[13];
    document.getElementById("row15_col4").innerHTML = col4_data[14];
    document.getElementById("row16_col4").innerHTML = col4_data[15];
    document.getElementById("row17_col4").innerHTML = col4_data[16];
    document.getElementById("row18_col4").innerHTML = col4_data[17];
    document.getElementById("row19_col4").innerHTML = col4_data[18];
    document.getElementById("row20_col4").innerHTML = col4_data[19];

    // Col-5 data on 20 years table
    document.getElementById("row1_col5").innerHTML = col5_data[0];
    document.getElementById("row2_col5").innerHTML = col5_data[1];
    document.getElementById("row3_col5").innerHTML = col5_data[2];
    document.getElementById("row4_col5").innerHTML = col5_data[3];
    document.getElementById("row5_col5").innerHTML = col5_data[4];
    document.getElementById("row6_col5").innerHTML = col5_data[5];
    document.getElementById("row7_col5").innerHTML = col5_data[6];
    document.getElementById("row8_col5").innerHTML = col5_data[7];
    document.getElementById("row9_col5").innerHTML = col5_data[8];
    document.getElementById("row10_col5").innerHTML = col5_data[9];
    document.getElementById("row11_col5").innerHTML = col5_data[10];
    document.getElementById("row12_col5").innerHTML = col5_data[11];
    document.getElementById("row13_col5").innerHTML = col5_data[12];
    document.getElementById("row14_col5").innerHTML = col5_data[13];
    document.getElementById("row15_col5").innerHTML = col5_data[14];
    document.getElementById("row16_col5").innerHTML = col5_data[15];
    document.getElementById("row17_col5").innerHTML = col5_data[16];
    document.getElementById("row18_col5").innerHTML = col5_data[17];
    document.getElementById("row19_col5").innerHTML = col5_data[18];
    document.getElementById("row20_col5").innerHTML = col5_data[19];

    // Col-6 data on 20 years table
    document.getElementById("row1_col6").innerHTML = col6_data[0];
    document.getElementById("row2_col6").innerHTML = col6_data[1];
    document.getElementById("row3_col6").innerHTML = col6_data[2];
    document.getElementById("row4_col6").innerHTML = col6_data[3];
    document.getElementById("row5_col6").innerHTML = col6_data[4];
    document.getElementById("row6_col6").innerHTML = col6_data[5];
    document.getElementById("row7_col6").innerHTML = col6_data[6];
    document.getElementById("row8_col6").innerHTML = col6_data[7];
    document.getElementById("row9_col6").innerHTML = col6_data[8];
    document.getElementById("row10_col6").innerHTML = col6_data[9];
    document.getElementById("row11_col6").innerHTML = col6_data[10];
    document.getElementById("row12_col6").innerHTML = col6_data[11];
    document.getElementById("row13_col6").innerHTML = col6_data[12];
    document.getElementById("row14_col6").innerHTML = col6_data[13];
    document.getElementById("row15_col6").innerHTML = col6_data[14];
    document.getElementById("row16_col6").innerHTML = col6_data[15];
    document.getElementById("row17_col6").innerHTML = col6_data[16];
    document.getElementById("row18_col6").innerHTML = col6_data[17];
    document.getElementById("row19_col6").innerHTML = col6_data[18];
    document.getElementById("row20_col6").innerHTML = col6_data[19];

    // Col-7 data on 20 years table
    document.getElementById("row1_col7").innerHTML = col7_data[0];
    document.getElementById("row2_col7").innerHTML = col7_data[1];
    document.getElementById("row3_col7").innerHTML = col7_data[2];
    document.getElementById("row4_col7").innerHTML = col7_data[3];
    document.getElementById("row5_col7").innerHTML = col7_data[4];
    document.getElementById("row6_col7").innerHTML = col7_data[5];
    document.getElementById("row7_col7").innerHTML = col7_data[6];
    document.getElementById("row8_col7").innerHTML = col7_data[7];
    document.getElementById("row9_col7").innerHTML = col7_data[8];
    document.getElementById("row10_col7").innerHTML = col7_data[9];
    document.getElementById("row11_col7").innerHTML = col7_data[10];
    document.getElementById("row12_col7").innerHTML = col7_data[11];
    document.getElementById("row13_col7").innerHTML = col7_data[12];
    document.getElementById("row14_col7").innerHTML = col7_data[13];
    document.getElementById("row15_col7").innerHTML = col7_data[14];
    document.getElementById("row16_col7").innerHTML = col7_data[15];
    document.getElementById("row17_col7").innerHTML = col7_data[16];
    document.getElementById("row18_col7").innerHTML = col7_data[17];
    document.getElementById("row19_col7").innerHTML = col7_data[18];
    document.getElementById("row20_col7").innerHTML = col7_data[19];

    // Col-7 data on 20 years table
    const d = new Date();
    let year = d.getFullYear();
    const col8_data = [];
    for (let i = 0; i < 20; i++) {
        year = year + 1;
        col8_data[i] = year;
        console.log(col8_data[i]);
    }

    document.getElementById("row1_col8").innerHTML = col8_data[0];
    document.getElementById("row2_col8").innerHTML = col8_data[1];
    document.getElementById("row3_col8").innerHTML = col8_data[2];
    document.getElementById("row4_col8").innerHTML = col8_data[3];
    document.getElementById("row5_col8").innerHTML = col8_data[4];
    document.getElementById("row6_col8").innerHTML = col8_data[5];
    document.getElementById("row7_col8").innerHTML = col8_data[6];
    document.getElementById("row8_col8").innerHTML = col8_data[7];
    document.getElementById("row9_col8").innerHTML = col8_data[8];
    document.getElementById("row10_col8").innerHTML = col8_data[9];
    document.getElementById("row11_col8").innerHTML = col8_data[10];
    document.getElementById("row12_col8").innerHTML = col8_data[11];
    document.getElementById("row13_col8").innerHTML = col8_data[12];
    document.getElementById("row14_col8").innerHTML = col8_data[13];
    document.getElementById("row15_col8").innerHTML = col8_data[14];
    document.getElementById("row16_col8").innerHTML = col8_data[15];
    document.getElementById("row17_col8").innerHTML = col8_data[16];
    document.getElementById("row18_col8").innerHTML = col8_data[17];
    document.getElementById("row19_col8").innerHTML = col8_data[18];
    document.getElementById("row20_col8").innerHTML = col8_data[19];

    // Col-7 data on 5/10/15/20 years table
    document.getElementById("5years").innerHTML = col7_data[4];
    document.getElementById("10years").innerHTML = col7_data[9];
    document.getElementById("15years").innerHTML = col7_data[14];
    document.getElementById("20years").innerHTML = col7_data[19];

    myChart.data.datasets[0].data = [col7_data[4], col7_data[9], col7_data[14], col7_data[19]];
    myChart.data.datasets[0].label = incr_est + "%";
    myChart.data.datasets[1].label = "7%";
    myChart.data.datasets[1].data = [col7_7data[4], col7_7data[9], col7_7data[14], col7_7data[19]];
    myChart.update();

    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    var collapseList = collapseElementList.map(function (collapseEl) {
        return new bootstrap.Collapse(collapseEl)
    })

}
document.body.onload = dtlsDev;