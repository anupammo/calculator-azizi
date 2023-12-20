function stepOne() {
    let r3c1, r4c1, r1c2, r2c2, r3c2, r4c2, r1c3, r2c3, r3c3, r4c3, r1c4, r2c4, r3c4, r4c4, r1c5, r2c5, r3c5, r4c5;
    let goldGrowth, inflationRate;
    let goldP2023, goldP2024, goldP2025, goldP2026, goldP2027;
    let fxRate2023, fxRate2024, fxRate2025, fxRate2026, fxRate2027;
    let qmBuyRM2023, qmBuyRM2024, qmBuyRM2025, qmBuyRM2026, qmBuyRM2027;
    let qmSellRM2023, qmSellRM2024, qmSellRM2025, qmSellRM2026, qmSellRM2027;
    const qmSellval = 1.07;

    const ftbl = document.getElementById("ftbl");
    goldGrowth = parseFloat(document.getElementById("gold-growth").value);
    inflationRate = parseFloat(document.getElementById("inflation-rate").value);
    goldP2023 = parseFloat(document.getElementById("goldSpotPrice").value);
    goldP2024 = (goldP2023 + ((goldP2023 * goldGrowth) / 100));
    ftbl.rows[1].cells[2].innerHTML = "$ " + (goldP2024).toFixed(2);
    goldP2025 = (goldP2024 + ((goldP2024 * goldGrowth) / 100));
    ftbl.rows[1].cells[3].innerHTML = "$ " + (goldP2025).toFixed(2);
    goldP2026 = (goldP2025 + ((goldP2025 * goldGrowth) / 100));
    ftbl.rows[1].cells[4].innerHTML = "$ " + (goldP2026).toFixed(2);
    goldP2027 = (goldP2026 + ((goldP2026 * goldGrowth) / 100));
    ftbl.rows[1].cells[5].innerHTML = "$ " + (goldP2027).toFixed(2);

    fxRate2023 = parseFloat(document.getElementById("fxrateUsdMyr").value);
    fxRate2024 = (fxRate2023 + ((fxRate2023 * inflationRate) / 100));
    ftbl.rows[2].cells[2].innerHTML = "RM " + (fxRate2024).toFixed(3);
    fxRate2025 = (fxRate2024 + ((fxRate2024 * inflationRate) / 100));
    ftbl.rows[2].cells[3].innerHTML = "RM " + (fxRate2025).toFixed(3);
    fxRate2026 = (fxRate2025 + ((fxRate2025 * inflationRate) / 100));
    ftbl.rows[2].cells[4].innerHTML = "RM " + (fxRate2026).toFixed(3);
    fxRate2027 = (fxRate2026 + ((fxRate2026 * inflationRate) / 100));
    ftbl.rows[2].cells[5].innerHTML = "RM " + (fxRate2027).toFixed(3);

    qmBuyRM2023 = (goldP2023 * fxRate2023);
    ftbl.rows[3].cells[1].innerHTML = "RM " + (qmBuyRM2023).toFixed(2);
    qmBuyRM2024 = (goldP2024 * fxRate2024);
    ftbl.rows[3].cells[2].innerHTML = "RM " + (qmBuyRM2024).toFixed(2);
    qmBuyRM2025 = (goldP2025 * fxRate2025);
    ftbl.rows[3].cells[3].innerHTML = "RM " + (qmBuyRM2025).toFixed(2);
    qmBuyRM2026 = (goldP2026 * fxRate2026);
    ftbl.rows[3].cells[4].innerHTML = "RM " + (qmBuyRM2026).toFixed(2);
    qmBuyRM2027 = (goldP2027 * fxRate2027);
    ftbl.rows[3].cells[5].innerHTML = "RM " + (qmBuyRM2027).toFixed(2);

    qmSellRM2023 = (qmBuyRM2023 * qmSellval);
    ftbl.rows[4].cells[1].innerHTML = "RM " + (qmSellRM2023).toFixed(2);
    qmSellRM2024 = (qmBuyRM2024 * qmSellval);
    ftbl.rows[4].cells[2].innerHTML = "RM " + (qmSellRM2024).toFixed(2);
    qmSellRM2025 = (qmBuyRM2025 * qmSellval);
    ftbl.rows[4].cells[3].innerHTML = "RM " + (qmSellRM2025).toFixed(2);
    qmSellRM2026 = (qmBuyRM2026 * qmSellval);
    ftbl.rows[4].cells[4].innerHTML = "RM " + (qmSellRM2026).toFixed(2);
    qmSellRM2027 = (qmBuyRM2027 * qmSellval);
    ftbl.rows[4].cells[5].innerHTML = "RM " + (qmSellRM2027).toFixed(2);

    // Console output
    // console.log("Hi");
}