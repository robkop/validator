String.prototype.isEmail = function () {
    const reg = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
    if (reg.test(this)) {
        return true;
    } else {
        return false;
    };
};
String.prototype.isPassword = function (num, special) {
    if (this.length >= num) {
        const reg = /[$-/:-?{-~!"^_`\[\]]/;
        if (special) {
            if (reg.test(this)) {
                return {
                    test: 'OK',
                    desc: ''
                }
            } else {
                return {
                    test: 'fail',
                    desc: 'Password doeas not contain special character.'
                }
            }

        } else {
            return {
                test: 'OK',
                desc: ''
            }
        }
        return true
    } else {
        return {
            test: 'fail',
            desc: 'Password is too short.'
        }
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
String.prototype.isPlPostalCode = function () {
    const x = this.trim().replace(/ /g, "").replace(/\D/g, "");
    const reg = /\d{5}/;
    const y = x.substr(0, 1);

    const regions = {
        0: 'okręg warszawski (woj. warszawskie)',
        1: 'okręg olsztyński (woj. olsztyńskie i białostockie)',
        2: 'okręg lubelski (woj. lubelskie i kieleckie)',
        3: 'okręg krakowski (woj. krakowskie i rzeszowskie)',
        4: 'okręg katowicki (woj. katowickie i opolskie)',
        5: 'okręg wrocławski (woj. wrocławskie)',
        6: 'okręg poznański (woj. poznańskie i zielonogórskie)',
        7: 'okręg szczeciński (woj. szczecińskie i koszalińskie)',
        8: 'okręg gdański (woj. gdańskie i bydgoskie)',
        9: 'okręg łódzki (woj. łódzkie)'
    }

    if (reg.test(x)) {
        return {
            postalCodeOK: true,
            postalCode: x.substr(0, 2) + "-" + x.substr(3, 23),
            postalCodeRegion: regions[y]

        }
    } else {
        return {
            postalCodeOK: false
        }
    }

};
String.prototype.isPlVatID = function () {
    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    nip = this.replace(/[\s-]/g, '');

    if (nip.length == 10 && parseInt(nip, 10) > 0) {
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += nip[i] * weights[i];
        }
        if ((sum % 11) == nip[9]) {
            return {
                isValid: true,
                nip: nip
            };
        } else {
            return false;
        }

    }
    return false;
};
String.prototype.replaceEnter = function () {
    return this.replace(/\n/g, ',');
};
String.prototype.replaceEnterQT = function () {
    const x = this.replace(/\n/g, "','")
    const y = "'" + x + "'";
    return y
};