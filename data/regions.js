"use strict";

var _ = require("underscore");

var regions = {};
module.exports = regions;

regions.europe = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Europe
    'AL', // Albania
    'AD', // Andorra
    'AM', // Armenia
    'AT', // Austria
    'AZ', // Azerbaijan
    'BY', // Belarus
    'BE', // Belgium
    'BA', // Bosnia and Herzegovina
    'BG', // Bulgaria
    'HR', // Croatia
    'CY', // Cyprus
    'CZ', // Czech Republic
    'DK', // Denmark
    'EE', // Estonia
    'FI', // Finland
    'FR', // France
    'GE', // Georgia (country)
    'DE', // Germany
    'GR', // Greece
    'HU', // Hungary
    'IS', // Iceland
    'IE', // Republic of Ireland
    'IT', // Italy
    'KZ', // Kazakhstan
    'LV', // Latvia
    'LI', // Liechtenstein
    'LT', // Lithuania
    'LU', // Luxembourg
    'MK', // Republic of Macedonia
    'MT', // Malta
    'MD', // Moldova
    'MC', // Monaco
    'ME', // Montenegro
    'NL', // Netherlands
    'NO', // Norway
    'PL', // Poland
    'PT', // Portugal
    'RO', // Romania
    'RU', // Russia
    'SM', // San Marino
    'RS', // Serbia
    'SK', // Slovakia
    'SI', // Slovenia
    'ES', // Spain
    'SE', // Sweden
    'CH', // Switzerland
    'TR', // Turkey
    'UA', // Ukraine
    'GB', // United Kingdom
    'VA', // Vatican City

    // Several dependencies and similar territories with broad autonomy are also found in Europe. Note that the list does not include the constituent countries of the United Kingdom, federal states of Germany and Austria, and autonomous territories of Spain and the post-Soviet republics as well as the republic of Serbia.
          // Åland (Finland)
    'FO', // Faroe Islands (Denmark)
    'GI', // Gibraltar (UK)
    'GG', // Guernsey (UK)
    'IM', // Isle of Man (UK)
    'JE', // Jersey (UK)
    'SJ', // Svalbard and Jan Mayen (Norway)
  ],
};

regions.middleEast = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Middle_east
    'BH', // Bahrain
    'CY', // Cyprus
    'EG', // Egypt
    'IR', // Iran
    'IQ', // Iraq
    'IL', // Israel
    'JO', // Jordan
    'KW', // Kuwait
    'LB', // Lebanon
    'OM', // Oman
    'PS', // Palestine
    'QA', // Qatar
    'SA', // Saudi Arabia
    'SY', // Syria
    'TR', // Turkey
    'AE', // United Arab Emirates
    'YE', // Yemen
  ]
};

regions.latinAmerica = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Latin_America
    'AR', // Argentina
    'BO', // Bolivia
    'BR', // Brazil
    'CL', // Chile
    'CO', // Colombia
    'CR', // Costa Rica
    'CU', // Cuba
    'DO', // Dominican Republic
    'EC', // Ecuador
    'SV', // El Salvador
    'GT', // Guatemala
    'HT', // Haiti
    'HN', // Honduras
    'MX', // Mexico
    'NI', // Nicaragua
    'PA', // Panama
    'PY', // Paraguay
    'PE', // Peru
    'PR', // Puerto Rico
    'UY', // Uruguay
    'VE', // Venezuela
  ]
};

regions.southAmerica = {
  countries: [
    // source is http://en.wikipedia.org/wiki/South_America
    'AR', // Argentina
    'BO', // Bolivia
    'BR', // Brazil
    'CL', // Chile
    'CO', // Colombia
    'EC', // Ecuador
    'FK', // Falkland Islands (United Kingdom)
    'GF', // French Guiana (France)
    'GY', // Guyana
    'PY', // Paraguay
    'PE', // Peru
    'GS', // South Georgia and the South Sandwich Islands
    'SR', // Suriname
    'TT', // Trinidad and Tobago
    'UY', // Uruguay
    'VE', // Venezuela
  ]
};

regions.easternAfrica = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Africa
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

regions.centralAfrica = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Africa
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

regions.northernAfrica = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Africa
    'DZ', // Algeria
    'IC', // Canary Islands (Spain)
          // Santa Cruz de Tenerife
    'EA', // Ceuta (Spain)
    'EG', // Egypt
    'LY', // Libya
          // Madeira (Portugal)
          // Melilla (Spain)
    'MA', // Morocco
    'SD', // Sudan
    'TN', // Tunisia
    'EH', // Western Sahara
  ]
};

regions.southernAfrica = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Africa
    'BW', // Botswana
    'LS', // Lesotho
    'NA', // Namibia
    'ZA', // South Africa
    'SZ', // Swaziland
  ]
};

regions.westernAfrica = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Africa
    'BJ', // Benin
    'BF', // Burkina Faso
    'CV', // Cape Verde
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

regions.africa = {
  countries: _.flatten([
    regions.easternAfrica.countries,
    regions.centralAfrica.countries,
    regions.northernAfrica.countries,
    regions.southernAfrica.countries,
    regions.westernAfrica.countries,
  ])
  .sort()
};

regions.asia = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Asia
    'AF', // Afghanistan
    'AM', // Armenia
    'AZ', // Azerbaijan
    'BH', // Bahrain
    'BD', // Bangladesh
    'BT', // Bhutan
    'BN', // Brunei
    'KH', // Cambodia
    'CN', // China
    'CY', // Cyprus
    'TL', // East Timor
    'GE', // Georgia (country)
    'IN', // India
    'ID', // Indonesia
    'IR', // Iran
    'IQ', // Iraq
    'IR', // Israel
    'JP', // Japan
    'JO', // Jordan
    'KZ', // Kazakhstan
    'KW', // Kuwait
    'KG', // Kyrgyzstan
    'LA', // Laos
    'LB', // Lebanon
    'MY', // Malaysia
    'BV', // Maldives
    'MN', // Mongolia
    'MM', // Myanmar (Burma)
    'NP', // Nepal
    'KP', // North Korea
    'OM', // Oman
    'PK', // Pakistan
    'PS', // Palestinian territories
    'PH', // Philippines
    'QA', // Qatar
    'RU', // Russia
    'SA', // Saudi Arabia
    'SG', // Singapore
    'LK', // Sri Lanka
    'KR', // South Korea
    'SY', // Syria
    'TW', // Taiwan
    'TJ', // Tajikistan
    'TH', // Thailand
    'TR', // Turkey
    'TM', // Turkmenistan
    'AE', // United Arab Emirates
    'UZ', // Uzbekistan
    'VN', // Vietnam
    'YE', // Yemen
  ]
};

regions.caribbeanAndAtlanticIslands = {
  countries: [
    // source is http://www.infoplease.com/ipa/A0877690.html
    'AI', // Anguilla
    'AG', // Antigua and Barbuda
    'BS', // Bahamas
    'BB', // Barbados
    'BM', // Bermuda
    'VG', // British Virgin Islands
    'KY', // Cayman Islands
    'DO', // Dominican Republic
    'DM', // Dominica
    'GD', // Grenada
    'JM', // Jamaica
    'MS', // Montserrat
    'KN', // St. Kitts & Nevis
    'LC', // St. Lucia
    'VC', // St. Vincent & the Grenadines
    'TT', // Trinidad & Tobago
    'TC', // Turks & Caicos
  ]
};

regions.pacificIslands = {
  countries: [
    // source is http://data.worldbank.org/region/PSS
    'FJ', // Fiji
    'KI', // Kiribati
    'MH', // Marshall Islands
    'FM', // Micronesia, Fed. Sts.
    'PW', // Palau
    'WS', // Samoa
    'SB', // Solomon Islands
    'TO', // Tonga
    'TV', // Tuvalu
    'VU', // Vanuatu
  ]
};
