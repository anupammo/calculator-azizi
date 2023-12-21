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
    let sb1, sb2, sb3, sb4, sb5, sb6, sb7, sb8, sb9, sb10, sb11, sb12;
    let hb1, hb2, hb3, hb4, hb5, hb6, hb7, hb8, hb9, hb10, hb11, hb12;
    let nilai1, nilai2, nilai3, nilai4, nilai5, nilai6, nilai7, nilai8, nilai9, nilai10, nilai11, nilai12;
    let vfs1, vfs2, vfs3, vfs4, vfs5, vfs6, vfs7, vfs8, vfs9, vfs10, vfs11, vfs12;
    let hg1, hg2, hg3, hg4, hg5, hg6, hg7, hg8, hg9, hg10, hg11, hg12;
    let mfone1, mfone2, mfone3, mfone4, mfone5, mfone6, mfone7, mfone8, mfone9, mfone10, mfone11, mfone12;
    let mftwo1, mftwo2, mftwo3, mftwo4, mftwo5, mftwo6, mftwo7, mftwo8, mftwo9, mftwo10, mftwo11, mftwo12;
    let mft1, mft2, mft3, mft4, mft5, mft6, mft7, mft8, mft9, mft10, mft11, mft12;
    let mffour1, mffour2, mffour3, mffour4, mffour5, mffour6, mffour7, mffour8, mffour9, mffour10, mffour11, mffour12;
    let mffive1, mffive2, mffive3, mffive4, mffive5, mffive6, mffive7, mffive8, mffive9, mffive10, mffive11, mffive12;
    let mftotal1, mftotal2, mftotal3, mftotal4, mftotal5, mftotal6, mftotal7, mftotal8, mftotal9, mftotal10, mftotal11, mftotal12;
    let np1, np2, np3, np4, np5, np6, np7, np8, np9, np10, np11, np12;
    let gain1, gain2, gain3, gain4, gain5, gain6, gain7, gain8, gain9, gain10, gain11, gain12;
    let tgain1, tgain2, tgain3, tgain4, tgain5, tgain6, tgain7, tgain8, tgain9, tgain10, tgain11, tgain12;
    const stbl = document.getElementById("stbl");
    const mfr = .035;
    const p85 = .85;
    const p9 = .09;
    sb1 = parseInt(document.getElementById("month1").value);
    hb1 = (sb1 / qmSellRM2023);
    stbl.rows[4].cells[2].innerHTML = (hb1).toFixed(4) + "g";

    nilai1 = (sb1 * p85);
    stbl.rows[4].cells[3].innerHTML = "RM" + (nilai1);

    vfs1 = (sb1 - nilai1);
    stbl.rows[4].cells[4].innerHTML = "RM" + (vfs1);

    hg1 = (hb1 * p9);
    stbl.rows[4].cells[5].innerHTML = (hg1).toFixed(4) + "g";

    mfone1 = (((nilai1 * mfr) / 12) * 12);
    stbl.rows[4].cells[6].innerHTML = "RM" + (mfone1).toFixed(0);

    mftwo1 = (nilai1 * mfr);
    stbl.rows[4].cells[7].innerHTML = "RM" + (mftwo1).toFixed(0);

    mft1 = (nilai1 * mfr);
    stbl.rows[4].cells[8].innerHTML = "RM" + (mft1).toFixed(0);

    mffour1 = (nilai1 * mfr);
    stbl.rows[4].cells[9].innerHTML = "RM" + (mffour1).toFixed(0);

    mffive1 = (nilai1 * mfr);
    stbl.rows[4].cells[10].innerHTML = "RM" + (mffive1).toFixed(0);

    mftotal1 = (mfone1 + mftwo1 + mft1 + mffour1 + mffive1);
    stbl.rows[4].cells[11].innerHTML = "RM" + (mftotal1).toFixed(0);

    np1 = (hg1 * qmBuyRM2027);
    stbl.rows[4].cells[12].innerHTML = "RM" + (np1).toFixed(2);

    gain1 = ((hb1 * qmBuyRM2027) - nilai1);
    stbl.rows[4].cells[13].innerHTML = "RM" + (gain1).toFixed(2);

    tgain1 = ((np1 + gain1) - mftotal1);
    stbl.rows[4].cells[14].innerHTML = "RM" + (tgain1).toFixed(2);


    // Console output
    console.log('https://nivesguru.in');
    console.log('https://anupammondal.in');
}