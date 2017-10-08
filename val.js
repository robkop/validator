String.prototype.isEmail = function () {
    const reg = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
    if (reg.test(this)) {
        return true;
    } else {
        return false;
    };
};
String.prototype.isPassword = function (num) {
    if (this.length >= num) {
        return true
    } else {
        return false
    };
};

String.prototype.isNRB = function () {
    const p = {
        1010: "Narodowy Bank Polski",
        1020: "PKO BP",
        1030: "Bank Handlowy (Citi Handlowy)",
        1050: "ING",
        1060: "BPH",
        1090: "BZ WBK",
        1130: "BGK",
        1140: "mBank",
        1160: "Bank Millennium",
        1240: "Pekao",
        1280: "HSBC",
        1320: "Bank Pocztowy",
        1470: "Eurobank",
        1540: "BOŚ",
        1580: "Mercedes-Benz Bank Polska",
        1610: "SGB - Bank",
        1670: "RBS Bank (Polska)",
        1680: "Plus Bank",
        1750: "Raiffeisen Bank",
        1840: "Societe Generale",
        1870: "Nest Bank",
        1910: "Deutsche Bank Polska",
        1930: "Bank Polskiej Spółdzielczości",
        1940: "Credit Agricole Bank Polska",
        1950: "Idea Bank",
        2030: "BGŻ BNP Paribas",
        2070: "FCE Bank Polska",
        2120: "Santander Consumer Bank",
        2130: "Volkswagen Bank",
        2140: "Fiat Bank Polska",
        2160: "Toyota Bank",
        2190: "DnB Nord",
        2480: "Getin Noble Bank",
        2490: "Alior Bank"
    };
    let e = this.slice(2, 6);
    let f = p[e];

    let x = this.trim().replace(/ /g, "").replace(/-/g, "").replace(/\D/g, "");
    if (x.length == 26) {
        const y = [1, 10, 3, 30, 9, 90, 27, 76, 81, 34, 49, 5, 50, 15, 53, 45, 62, 38, 89, 17,
            73, 51, 25, 56, 75, 71, 31, 19, 93, 57
        ];
        x = x + "2521";
        x = x.substr(2) + x.substr(0, 2);
        let c = 0;
        for (let i = 0; i < 30; i++) {
            c += x[29 - i] * y[i];
        }

        if (c % 97 === 1) {
            return {
                ok: true,
                desc: "Bank account is valid.",
                bankName: f,
                finalNRB: this.trim().replace(/ /g, "").replace(/-/g, "").replace(/\D/g, "")
            }
        } else {
            return {
                ok: false,
                desc: "Bank account is invalid.",
                bankName: f

            };
        }




    } else {
        return {
            ok: false,
            desc: "Bank account is too short or too long. It;s length should be equal to 26.",
            bankName: f,
        };
    }

};