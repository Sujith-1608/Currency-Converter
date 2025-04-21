const countryList = {
    AED: { countryCode: "AE", currencyName: "United Arab Emirates Dirham", currencySymbol: "د.إ" },
    AFN: { countryCode: "AF", currencyName: "Afghan Afghani", currencySymbol: "؋" },
    XCD: { countryCode: "AG", currencyName: "East Caribbean Dollar", currencySymbol: "$" },
    ALL: { countryCode: "AL", currencyName: "Albanian Lek", currencySymbol: "L" },
    AMD: { countryCode: "AM", currencyName: "Armenian Dram", currencySymbol: "֏" },
    ANG: { countryCode: "AN", currencyName: "Netherlands Antillean Guilder", currencySymbol: "ƒ" },
    AOA: { countryCode: "AO", currencyName: "Angolan Kwanza", currencySymbol: "Kz" },
    AQD: { countryCode: "AQ", currencyName: "Arabian Qatari Rial", currencySymbol: "ر.ق" },
    ARS: { countryCode: "AR", currencyName: "Argentine Peso", currencySymbol: "$" },
    AUD: { countryCode: "AU", currencyName: "Australian Dollar", currencySymbol: "$" },
    AZN: { countryCode: "AZ", currencyName: "Azerbaijani Manat", currencySymbol: "₼" },
    BAM: { countryCode: "BA", currencyName: "Bosnia and Herzegovina Convertible Mark", currencySymbol: "KM" },
    BBD: { countryCode: "BB", currencyName: "Barbadian Dollar", currencySymbol: "$" },
    BDT: { countryCode: "BD", currencyName: "Bangladeshi Taka", currencySymbol: "৳" },
    XOF: { countryCode: "BE", currencyName: "West African CFA Franc", currencySymbol: "CFA" },
    BGN: { countryCode: "BG", currencyName: "Bulgarian Lev", currencySymbol: "лв" },
    BHD: { countryCode: "BH", currencyName: "Bahraini Dinar", currencySymbol: ".د.ب" },
    BIF: { countryCode: "BI", currencyName: "Burundian Franc", currencySymbol: "Fr" },
    BMD: { countryCode: "BM", currencyName: "Bermudian Dollar", currencySymbol: "$" },
    BND: { countryCode: "BN", currencyName: "Brunei Dollar", currencySymbol: "$" },
    BOB: { countryCode: "BO", currencyName: "Bolivian Boliviano", currencySymbol: "Bs." },
    BRL: { countryCode: "BR", currencyName: "Brazilian Real", currencySymbol: "R$" },
    BSD: { countryCode: "BS", currencyName: "Bahamian Dollar", currencySymbol: "$" },
    NOK: { countryCode: "BV", currencyName: "Norwegian Krone", currencySymbol: "kr" },
    BWP: { countryCode: "BW", currencyName: "Botswana Pula", currencySymbol: "P" },
    BYR: { countryCode: "BY", currencyName: "Belarusian Ruble", currencySymbol: "Br" },
    BZD: { countryCode: "BZ", currencyName: "Belize Dollar", currencySymbol: "$" },
    CAD: { countryCode: "CA", currencyName: "Canadian Dollar", currencySymbol: "$" },
    CDF: { countryCode: "CD", currencyName: "Congolese Franc", currencySymbol: "Fr" },
    XAF: { countryCode: "CF", currencyName: "Central African CFA Franc", currencySymbol: "CFA" },
    CHF: { countryCode: "CH", currencyName: "Swiss Franc", currencySymbol: "CHF" },
    CLP: { countryCode: "CL", currencyName: "Chilean Peso", currencySymbol: "$" },
    CNY: { countryCode: "CN", currencyName: "Chinese Yuan", currencySymbol: "¥" },
    COP: { countryCode: "CO", currencyName: "Colombian Peso", currencySymbol: "$" },
    CRC: { countryCode: "CR", currencyName: "Costa Rican Colón", currencySymbol: "₡" },
    CUP: { countryCode: "CU", currencyName: "Cuban Peso", currencySymbol: "$" },
    CVE: { countryCode: "CV", currencyName: "Cape Verdean Escudo", currencySymbol: "$" },
    CYP: { countryCode: "CY", currencyName: "Cypriot Pound", currencySymbol: "£" },
    CZK: { countryCode: "CZ", currencyName: "Czech Koruna", currencySymbol: "Kč" },
    DJF: { countryCode: "DJ", currencyName: "Djiboutian Franc", currencySymbol: "Fr" },
    DKK: { countryCode: "DK", currencyName: "Danish Krone", currencySymbol: "kr" },
    DOP: { countryCode: "DO", currencyName: "Dominican Peso", currencySymbol: "$" },
    DZD: { countryCode: "DZ", currencyName: "Algerian Dinar", currencySymbol: "د.ج" },
    ECS: { countryCode: "EC", currencyName: "Ecuadorian Sucre", currencySymbol: "S/" },
    EEK: { countryCode: "EE", currencyName: "Estonian Kroon", currencySymbol: "kr" },
    EGP: { countryCode: "EG", currencyName: "Egyptian Pound", currencySymbol: "ج.م" },
    ETB: { countryCode: "ET", currencyName: "Ethiopian Birr", currencySymbol: "ብር" },
    EUR: { countryCode: "FR", currencyName: "Euro", currencySymbol: "€" },
    FJD: { countryCode: "FJ", currencyName: "Fijian Dollar", currencySymbol: "$" },
    FKP: { countryCode: "FK", currencyName: "Falkland Islands Pound", currencySymbol: "£" },
    GBP: { countryCode: "GB", currencyName: "British Pound Sterling", currencySymbol: "£" },
    GEL: { countryCode: "GE", currencyName: "Georgian Lari", currencySymbol: "₾" },
    GGP: { countryCode: "GG", currencyName: "Guernsey Pound", currencySymbol: "£" },
    GHS: { countryCode: "GH", currencyName: "Ghanaian Cedi", currencySymbol: "₵" },
    GIP: { countryCode: "GI", currencyName: "Gibraltar Pound", currencySymbol: "£" },
    GMD: { countryCode: "GM", currencyName: "Gambian Dalasi", currencySymbol: "D" },
    GNF: { countryCode: "GN", currencyName: "Guinean Franc", currencySymbol: "Fr" },
    GTQ: { countryCode: "GT", currencyName: "Guatemalan Quetzal", currencySymbol: "Q" },
    GYD: { countryCode: "GY", currencyName: "Guyanese Dollar", currencySymbol: "$" },
    HKD: { countryCode: "HK", currencyName: "Hong Kong Dollar", currencySymbol: "$" },
    HNL: { countryCode: "HN", currencyName: "Honduran Lempira", currencySymbol: "L" },
    HRK: { countryCode: "HR", currencyName: "Croatian Kuna", currencySymbol: "kn" },
    HTG: { countryCode: "HT", currencyName: "Haitian Gourde", currencySymbol: "G" },
    HUF: { countryCode: "HU", currencyName: "Hungarian Forint", currencySymbol: "Ft" },
    IDR: { countryCode: "ID", currencyName: "Indonesian Rupiah", currencySymbol: "Rp" },
    ILS: { countryCode: "IL", currencyName: "Israeli New Shekel", currencySymbol: "₪" },
    INR: { countryCode: "IN", currencyName: "Indian Rupee", currencySymbol: "₹" },
    IQD: { countryCode: "IQ", currencyName: "Iraqi Dinar", currencySymbol: "ع.د" },
    IRR: { countryCode: "IR", currencyName: "Iranian Rial", currencySymbol: "ریال" },
    ISK: { countryCode: "IS", currencyName: "Icelandic Króna", currencySymbol: "kr" },
    JMD: { countryCode: "JM", currencyName: "Jamaican Dollar", currencySymbol: "$" },
    JOD: { countryCode: "JO", currencyName: "Jordanian Dinar", currencySymbol: "د.أ" },
    JPY: { countryCode: "JP", currencyName: "Japanese Yen", currencySymbol: "¥" },
    KES: { countryCode: "KE", currencyName: "Kenyan Shilling", currencySymbol: "KSh" },
    KGS: { countryCode: "KG", currencyName: "Kyrgyzstani Som", currencySymbol: "с" },
    KHR: { countryCode: "KH", currencyName: "Cambodian Riel", currencySymbol: "៛" },
    KMF: { countryCode: "KM", currencyName: "Comorian Franc", currencySymbol: "Fr" },
    KPW: { countryCode: "KP", currencyName: "North Korean Won", currencySymbol: "₩" },
    KRW: { countryCode: "KR", currencyName: "South Korean Won", currencySymbol: "₩" },
    KWD: { countryCode: "KW", currencyName: "Kuwaiti Dinar", currencySymbol: "د.ك" },
    KYD: { countryCode: "KY", currencyName: "Cayman Islands Dollar", currencySymbol: "$" },
    KZT: { countryCode: "KZ", currencyName: "Kazakhstani Tenge", currencySymbol: "₸" },
    LAK: { countryCode: "LA", currencyName: "Laotian Kip", currencySymbol: "₭" },
    LBP: { countryCode: "LB", currencyName: "Lebanese Pound", currencySymbol: "ل.ل" },
    LKR: { countryCode: "LK", currencyName: "Sri Lankan Rupee", currencySymbol: "₨" },
    LRD: { countryCode: "LR", currencyName: "Liberian Dollar", currencySymbol: "$" },
    LSL: { countryCode: "LS", currencyName: "Lesotho Loti", currencySymbol: "M" },
    LTL: { countryCode: "LT", currencyName: "Lithuanian Litas", currencySymbol: "Lt" },
    LVL: { countryCode: "LV", currencyName: "Latvian Lats", currencySymbol: "Ls" },
    LYD: { countryCode: "LY", currencyName: "Libyan Dinar", currencySymbol: "د.ل" },
    MAD: { countryCode: "MA", currencyName: "Moroccan Dirham", currencySymbol: "د.م." },
    MDL: { countryCode: "MD", currencyName: "Moldovan Leu", currencySymbol: "L" },
    MGA: { countryCode: "MG", currencyName: "Malagasy Ariary", currencySymbol: "Ar" },
    MKD: { countryCode: "MK", currencyName: "Macedonian Denar", currencySymbol: "ден" },
    MMK: { countryCode: "MM", currencyName: "Myanma Kyat", currencySymbol: "Ks" },
    MNT: { countryCode: "MN", currencyName: "Mongolian Tögrög", currencySymbol: "₮" },
    MOP: { countryCode: "MO", currencyName: "Macanese Pataca", currencySymbol: "MOP$" },
    MRO: { countryCode: "MR", currencyName: "Mauritanian Ouguiya", currencySymbol: "UM" },
    MTL: { countryCode: "MT", currencyName: "Maltese Lira", currencySymbol: "Lm" },
    MUR: { countryCode: "MU", currencyName: "Mauritian Rupee", currencySymbol: "₨" },
    MVR: { countryCode: "MV", currencyName: "Maldivian Rufiyaa", currencySymbol: "Rf" },
    MWK: { countryCode: "MW", currencyName: "Malawian Kwacha", currencySymbol: "MK" },
    MXN: { countryCode: "MX", currencyName: "Mexican Peso", currencySymbol: "$" },
    MYR: { countryCode: "MY", currencyName: "Malaysian Ringgit", currencySymbol: "RM" },
    MZN: { countryCode: "MZ", currencyName: "Mozambican Metical", currencySymbol: "MT" },
    NAD: { countryCode: "NA", currencyName: "Namibian Dollar", currencySymbol: "$" },
    XPF: { countryCode: "NC", currencyName: "CFP Franc", currencySymbol: "Fr" },
    NGN: { countryCode: "NG", currencyName: "Nigerian Naira", currencySymbol: "₦" },
    NIO: { countryCode: "NI", currencyName: "Nicaraguan Córdoba", currencySymbol: "C$" },
    NPR: { countryCode: "NP", currencyName: "Nepalese Rupee", currencySymbol: "₨" },
    NZD: { countryCode: "NZ", currencyName: "New Zealand Dollar", currencySymbol: "$" },
    OMR: { countryCode: "OM", currencyName: "Omani Rial", currencySymbol: "ر.ع." },
    PAB: { countryCode: "PA", currencyName: "Panamanian Balboa", currencySymbol: "B/." },
    PEN: { countryCode: "PE", currencyName: "Peruvian Nuevo Sol", currencySymbol: "S/." },
    PGK: { countryCode: "PG", currencyName: "Papua New Guinean Kina", currencySymbol: "K" },
    PHP: { countryCode: "PH", currencyName: "Philippine Peso", currencySymbol: "₱" },
    PKR: { countryCode: "PK", currencyName: "Pakistani Rupee", currencySymbol: "₨" },
    PLN: { countryCode: "PL", currencyName: "Polish Zloty", currencySymbol: "zł" },
    PYG: { countryCode: "PY", currencyName: "Paraguayan Guarani", currencySymbol: "₲" },
    QAR: { countryCode: "QA", currencyName: "Qatari Riyal", currencySymbol: "ر.ق" },
    RON: { countryCode: "RO", currencyName: "Romanian Leu", currencySymbol: "lei" },
    RSD: { countryCode: "RS", currencyName: "Serbian Dinar", currencySymbol: "дин" },
    RUB: { countryCode: "RU", currencyName: "Russian Ruble", currencySymbol: "₽" },
    RWF: { countryCode: "RW", currencyName: "Rwandan Franc", currencySymbol: "Fr" },
    SAR: { countryCode: "SA", currencyName: "Saudi Riyal", currencySymbol: "ر.س" },
    SBD: { countryCode: "SB", currencyName: "Solomon Islands Dollar", currencySymbol: "$" },
    SCR: { countryCode: "SC", currencyName: "Seychellois Rupee", currencySymbol: "₨" },
    SDG: { countryCode: "SD", currencyName: "Sudanese Pound", currencySymbol: "ج.س" },
    SEK: { countryCode: "SE", currencyName: "Swedish Krona", currencySymbol: "kr" },
    SGD: { countryCode: "SG", currencyName: "Singapore Dollar", currencySymbol: "$" },
    SKK: { countryCode: "SK", currencyName: "Slovak Koruna", currencySymbol: "Sk" },
    SLL: { countryCode: "SL", currencyName: "Sierra Leonean Leone", currencySymbol: "Le" },
    SOS: { countryCode: "SO", currencyName: "Somali Shilling", currencySymbol: "Sh" },
    SRD: { countryCode: "SR", currencyName: "Surinamese Dollar", currencySymbol: "$" },
    STD: { countryCode: "ST", currencyName: "São Tomé and Príncipe Dobra", currencySymbol: "Db" },
    SVC: { countryCode: "SV", currencyName: "Salvadoran Colón", currencySymbol: "₡" },
    SYP: { countryCode: "SY", currencyName: "Syrian Pound", currencySymbol: "£" },
    SZL: { countryCode: "SZ", currencyName: "Swazi Lilangeni", currencySymbol: "E" },
    THB: { countryCode: "TH", currencyName: "Thai Baht", currencySymbol: "฿" },
    TJS: { countryCode: "TJ", currencyName: "Tajikistani Somoni", currencySymbol: "ЅМ" },
    TMT: { countryCode: "TM", currencyName: "Turkmenistan Manat", currencySymbol: "m" },
    TND: { countryCode: "TN", currencyName: "Tunisian Dinar", currencySymbol: "د.ت" },
    TOP: { countryCode: "TO", currencyName: "Tongan Paʻanga", currencySymbol: "T$" },
    TRY: { countryCode: "TR", currencyName: "Turkish Lira", currencySymbol: "₺" },
    TTD: { countryCode: "TT", currencyName: "Trinidad and Tobago Dollar", currencySymbol: "$" },
    TWD: { countryCode: "TW", currencyName: "New Taiwan Dollar", currencySymbol: "NT$" },
    TZS: { countryCode: "TZ", currencyName: "Tanzanian Shilling", currencySymbol: "Sh" },
    UAH: { countryCode: "UA", currencyName: "Ukrainian Hryvnia", currencySymbol: "₴" },
    UGX: { countryCode: "UG", currencyName: "Ugandan Shilling", currencySymbol: "USh" },
    USD: { countryCode: "US", currencyName: "United States Dollar", currencySymbol: "$" },
    UYU: { countryCode: "UY", currencyName: "Uruguayan Peso", currencySymbol: "$" },
    UZS: { countryCode: "UZ", currencyName: "Uzbekistani Som", currencySymbol: "сум" },
    VEF: { countryCode: "VE", currencyName: "Venezuelan Bolívar", currencySymbol: "Bs" },
    VND: { countryCode: "VN", currencyName: "Vietnamese Dong", currencySymbol: "₫" },
    VUV: { countryCode: "VU", currencyName: "Vanuatu Vatu", currencySymbol: "Vt" },
    YER: { countryCode: "YE", currencyName: "Yemeni Rial", currencySymbol: "﷼" },
    ZAR: { countryCode: "ZA", currencyName: "South African Rand", currencySymbol: "R" },
    ZMK: { countryCode: "ZM", currencyName: "Zambian Kwacha", currencySymbol: "ZK" },
    ZWD: { countryCode: "ZW", currencyName: "Zimbabwean Dollar", currencySymbol: "$" },
  };

const BASE_URL =
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const fromCurrency=document.querySelector(".from-currency");
const toCurrency=document.querySelector(".to-currency");
const btn=document.querySelector("button");
const convertedAmt=document.querySelector(".converted-amt");
const currfrom=document.querySelector(".curr-from");
const currto=document.querySelector(".curr-to");
const currConvtAmt=document.querySelector(".curr-converted-amt");
const exchangeIcon = document.querySelector(".exchange-icon");

function populateSelect(selectElement){
    for(const currencyCode in countryList){
        const option=document.createElement("option");
        option.value=currencyCode;
        option.textContent=currencyCode;
        selectElement.appendChild(option);
    }
}

populateSelect(fromCurrency);
populateSelect(toCurrency);

fromCurrency.value="USD";
toCurrency.value="INR";

function updateCurrencyDisplay(selectElement,imgElement,nameElement,symbolElement){
    const selectedCurrency = selectElement.value;
    const data=countryList[selectedCurrency];
    imgElement.src=`https://flagsapi.com/${data.countryCode}/flat/64.png`;
    nameElement.textContent=data.currencyName;
    symbolElement.textContent=data.currencySymbol;
}

//Updating from currency flag
fromCurrency.addEventListener("change",()=>{
    const fromImg=document.querySelector("#from img");
    const fromText=document.querySelector(".from-container p");
    const symbolElement=document.querySelector(".from-currencyCode");
    updateCurrencyDisplay(fromCurrency,fromImg,fromText,symbolElement);
});

//Updating to currency flag
toCurrency.addEventListener("change",()=>{
    const toImg=document.querySelector("#to img");
    const toText=document.querySelector(".to-container p");
    const tosymbolElement=document.querySelector(".to-currencyCode");
    updateCurrencyDisplay(toCurrency,toImg,toText,tosymbolElement);
});

btn.addEventListener("click", async()=>{
    exchangeIcon.classList.toggle("rotate");
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if (amtval==="" || amtval<1){
        amtval=1;
        amount.value="1";
    }
    const URL=`${BASE_URL}/${fromCurrency.value.toLowerCase()}.json`;
    let response= await fetch(URL);
    let data = await response.json();
    let rate=data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];

    let actualrate=parseInt(amtval)*parseFloat(rate);
    convertedAmt.textContent = actualrate;

    currfrom.innerHTML=fromCurrency.value;
    currto.innerHTML=toCurrency.value;
    currConvtAmt.innerHTML=rate;
});



  