'use strict';

var regions = {};

regions.centralAsia = {
  name: 'Central Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_Asia
    'KZ', // Kazakhstan
    'KG', // Kyrgyzstan
    'TJ', // Tajikistan
    'TM', // Turkmenistan
    'UZ', // Uzbekistan
  ]
}

regions.southernAsia = {
  name: 'Southern Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/South_Asia
    'AF', // Afghanistan
    'BD', // Bangladesh
    'BT', // Bhutan
    'IO', // British Indian Ocean Territory
    'IN', // India
    'IR', // Iran
    'MV', // Maldives
    'NP', // Nepal
    'PK', // Pakistan
    'LK', // Sri Lanka
  ]
}

regions.southeastAsia = {
  name: 'Southeast Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Southeast_Asia
    'BN', // Brunei
    'KH', // Cambodia
    'CX', // Christmas Island
    'CC', // Cocos (Keeling) Islands
    'TL', // East Timor
    'ID', // Indonesia
    'LA', // Laos
    'MY', // Malaysia
    'MM', // Myanmar (Burma)
    'PH', // Philippines
    'SG', // Singapore
    'TH', // Thailand
    'VN', // Vietnam
  ]
}

regions.eastAsia = {
  name: 'East Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/East_Asia
    'CN', // China
    'HK', // Hong Kong
    'JP', // Japan
    'KP', // North Korea
    'KR', // South Korea
    'MO', // Macao
    'MN', // Mongolia
    'TW', // Taiwan
  ]
}

regions.westernAsia = {
  name: 'Western Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Western_Asia
    'AM', // Armenia
    'AZ', // Azerbaijan
    'BH', // Bahrain
    'IQ', // Iraq
    'IL', // Israel
    'JO', // Jordan
    'KW', // Kuwait
    'LB', // Lebanon
    'OM', // Oman
    'PS', // Palestinian territories
    'QA', // Qatar
    'SA', // Saudi Arabia
    'SY', // Syria
    'TR', // Turkey
    'AE', // United Arab Emirates
    'YE', // Yemen
  ]
}

regions.centralAfrica = {
  name: 'Central Aftrica',
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_Africa
    'AO', // Angola
    'CM', // Cameroon
    'CF', // Central African Republic
    'TD', // Chad
    'CG', // Republic of the Congo
    'CD', // Democratic Republic of the Congo
    'GQ', // Equatorial Guinea
    'GA', // Gabon
    'ST', // São Tomé and Príncipe
  ]
};

regions.northAfrica = {
  name: 'North Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/North_Africa
    'DZ', // Algeria
    'EG', // Egypt
    'LY', // Libya
    'MA', // Morocco
    'SD', // Sudan
    'TN', // Tunisia
    'EH', // Western Sahara
  ]
};

regions.southernAfrica = {
  name: 'Southern Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/Southern_Africa
    'BW', // Botswana
    'LS', // Lesotho
    'NA', // Namibia
    'ZA', // South Africa
    'SZ', // Swaziland
  ]
};

regions.eastAfrica = {
  name: 'East Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/East_Africa
    'BI', // Burundi
    'KM', // Comoros
    'DJ', // Djibouti
    'ER', // Eritrea
    'ET', // Ethiopia
    'KE', // Kenya
    'MG', // Madagascar
    'MW', // Malawi
    'MU', // Mauritius
    'YT', // Mayotte (France)
    'MZ', // Mozambique
    'RE', // Réunion (France)
    'RW', // Rwanda
    'SC', // Seychelles
    'SO', // Somalia
    'SS', // South Sudan
    'TZ', // Tanzania
    'UG', // Uganda
    'ZM', // Zambia
    'ZW', // Zimbabwe
  ]
};

regions.westAfrica = {
  name: 'West Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/West_Africa
    'BJ', // Benin
    'BF', // Burkina Faso
    'CV', // Cabo Verde
    'CI', // Côte d'Ivoire
    'GM', // Gambia
    'GH', // Ghana
    'GN', // Guinea
    'GW', // Guinea-Bissau
    'LR', // Liberia
    'ML', // Mali
    'MR', // Mauritania
    'NE', // Niger
    'NG', // Nigeria
    'SH', // Saint Helena, Ascension and Tristan da Cunha (United Kingdom)
    'SN', // Senegal
    'SL', // Sierra Leone
    'TG', // Togo
  ]
};

regions.centralAmerica = {
  name: 'Central America',
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_America
    'BZ', // Belize
    'CR', // Costa Rica
    'SV', // El Salvador
    'GT', // Guatemala
    'HN', // Honduras
    'NI', // Nicaragua
    'PA', // Panama
  ]
}

regions.northernAmerica = {
  name: 'Northern America',
  countries: [
    // source is http://en.wikipedia.org/wiki/Northern_America
    'BM', // Bermuda
    'CA', // Canada
    'GL', // Greenland
    'MX', // Mexico
    'PM', // Saint Pierre and Miquelon
    'US', // United States
  ]
}

regions.caribbean = {
  name: 'Caribbean',
  countries: [
    // source is http://en.wikipedia.org/wiki/Caribbean
    'AI', // Anguilla
    'AG', // Antigua and Barbuda
    'AW', // Aruba
    'BS', // Bahamas
    'BB', // Barbados
    'BQ', // Bonaire, Sint Eustatius & Saba
    'VG', // British Virgin Islands
    'KY', // Cayman Islands
    'CU', // Cuba
    'CW', // Curaçao
    'DM', // Dominica
    'DO', // Dominican Republic
    'GD', // Grenada
    'GP', // Guadeloupe
    'HT', // Haiti
    'JM', // Jamaica
    'MQ', // Martinique
    'MS', // Montserrat
    'PR', // Puerto Rico
    'BL', // Saint Barthélemy
    'KN', // St. Kitts & Nevis
    'LC', // Saint Lucia
    'MF', // Saint Martin
    'VC', // Saint Vincent and the Grenadines
    'SX', // Sint Maarten
    'TT', // Trinidad and Tobago
    'TC', // Turks & Caicos
    'VI', // United States Virgin Islands
  ]
}

regions.southAmerica = {
  name: 'South America',
  countries: [
    // source is http://en.wikipedia.org/wiki/South_America
    'AR', // Argentina
    'BO', // Bolivia
    'BR', // Brazil
    'CL', // Chile
    'CO', // Colombia
    'EC', // Ecuador
    'FK', // Falkland Islands
    'GF', // French Guiana
    'GY', // Guyana
    'PY', // Paraguay
    'PE', // Peru
    'SR', // Suriname
    'UY', // Uruguay
    'VE', // Venezuela
  ]
}

regions.antartica = {
  name: 'Antartica',
  countries: [
    // source is http://en.wikipedia.org/wiki/Antarctica
    'AQ', // Antarctica
    'BV', // Bouvet Island
    'TF', // French Southern Territories
    'HM', // Heard Island and McDonald Islands
    'GS', // South Georgia and the South Sandwich Islands
  ]
}

regions.northernEurope = {
  name: 'Northern Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Northern_Europe
    'AX', // Åland
    'DK', // Denmark
    'EE', // Estonia
    'FO', // Faroe Islands
    'FI', // Finland
    'GG', // Guernsey
    'IS', // Iceland
    'IE', // Republic of Ireland
    'JE', // Jersey (UK)
    'IM', // Isle of Man
    'LV', // Latvia
    'LT', // Lithuania
    'NO', // Norway
    'SJ', // Svalbard and Jan Mayen
    'SE', // Sweden
    'GB', // United Kingdom
  ]
}

regions.southernEurope = {
  name: 'Southern Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Southern_Europe
    'AL', // Albania
    'AD', // Andorra
    'BA', // Bosnia and Herzegovina
    'HR', // Croatia
    'CY', // Cyprus
    'GI', // Gibraltar
    'GR', // Greece
    'IT', // Italy
    'MK', // Republic of Macedonia
    'VA', // Vatican City
    'MT', // Malta
    'ME', // Montenegro
    'PT', // Portugal
    'SM', // San Marino
    'RS', // Serbia
    'SI', // Slovenia
    'ES', // Spain
  ]
}

regions.easternEurope = {
  name: 'Eastern Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Eastern_Europe
    'BY', // Belarus
    'BG', // Bulgaria
    'CZ', // Czech Republic
    'GE', // Georgia
    'HU', // Hungary
    'MD', // Moldova
    'PL', // Poland
    'RO', // Romania
    'RU', // Russia
    'SK', // Slovakia
    'UA', // Ukraine
  ]
}

regions.westernEurope = {
  name: 'Western Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Western_Europe
    'AT', // Austria
    'BE', // Belgium
    'FR', // France
    'DE', // Germany
    'LI', // Liechtenstein
    'LU', // Luxembourg
    'MC', // Monaco
    'NL', // Netherlands
    'CH', // Switzerland
  ],
};
 
regions.australia = {
  name: 'Australia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'AU', // Australia
    'NF', // Norfolk Island
    'NZ', // New Zealand
  ]
};

regions.melanesia = {
  name: 'Melanesia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'FJ', // Fiji
    'NC', //  New Caledonia
    'PG', // Papua New Guinea
    'SB', // Solomon Islands
    'VU', // Vanuatu
  ]
};    

regions.micronesia = {
  name: 'Micronesia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'GU', // Guam
    'KI', // Kiribati
    'MH', // Marshall Islands
    'FM', // Micronesia, Fed. Sts.
    'NR', // Nauru
    'MP', // Northern Mariana Islands
    'PW', // Palau
    'UM', // United States Minor Outlying Islands
  ]
};    

regions.polynesia = {
  name: 'Polynesia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'AS', // American Samoa
    'CK', // Cook Islands
    'PF', // French Polynesia
    'NU', // Niue
    'PN', // Pitcairn Islands
    'WS', // Samoa
    'TK', // Tokelau
    'TO', // Tonga
    'TV', // Tuvalu
    'WF', // Wallis and Futuna
  ]
};

module.exports = regions;
