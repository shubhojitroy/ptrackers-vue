const _countries = [
  { code: "AUS", name: "AUSTRALIA" },
  { code: "NZL", name: "NEW ZEALAND" },
  { code: "SGP", name: "SINGAPORE" },
  { code: "HKG", name: "HONG KONG" },
  { code: "GBR", name: "UNITED KINGDOM" },
  { code: "USA", name: "UNITED STATES OF AMERICA" },
  { code: "---", name: "----------------" },
  { code: "AFG", name: "AFGHANISTAN" },
  { code: "ALA", name: "ALAND ISLANDS" },
  { code: "ALB", name: "ALBANIA" },
  { code: "DZA", name: "ALGERIA" },
  { code: "ASM", name: "AMERICAN SAMOA" },
  { code: "AND", name: "ANDORRA" },
  { code: "AGO", name: "ANGOLA" },
  { code: "AIA", name: "ANGUILLA" },
  { code: "ATA", name: "ANTARCTICA" },
  { code: "ATG", name: "ANTIGUA AND BARBUDA" },
  { code: "ARG", name: "ARGENTINA" },
  { code: "ARM", name: "ARMENIA" },
  { code: "ABW", name: "ARUBA" },
  { code: "AUT", name: "AUSTRIA" },
  { code: "AZW", name: "AZERBAIJAN" },
  { code: "BHS", name: "BAHAMAS" },
  { code: "BHR", name: "BAHRAIN" },
  { code: "BGD", name: "BANGLADESH" },
  { code: "BRB", name: "BARBADOS" },
  { code: "BLR", name: "BELARUS" },
  { code: "BEL", name: "BELGIUM" },
  { code: "BLZ", name: "BELIZE" },
  { code: "BEN", name: "BENIN" },
  { code: "BMU", name: "BERMUDA" },
  { code: "BTN", name: "BHUTAN" },
  { code: "BOL", name: "BOLIVIA" },
  { code: "BIH", name: "BOSNIA AND HERZEGOWINA" },
  { code: "BWA", name: "BOTSWANA" },
  { code: "BVT", name: "BOUVET ISLAND" },
  { code: "BRA", name: "BRAZIL" },
  { code: "IOT", name: "BRITISH INDIAN OCEAN TERRITORY" },
  { code: "VGB", name: "BRITISH VIRGIN ISLANDS" },
  { code: "BRN", name: "BRUNEI DARUSSALAM" },
  { code: "BGR", name: "BULGARIA" },
  { code: "BFA", name: "BURKINA FASO" },
  { code: "BDI", name: "BURUNDI" },
  { code: "KHM", name: "CAMBODIA" },
  { code: "CMR", name: "CAMEROON" },
  { code: "CAN", name: "CANADA" },
  { code: "CPV", name: "CAPE VERDE" },
  { code: "CYM", name: "CAYMAN ISLANDS" },
  { code: "CAF", name: "CENTRAL AFRICAN REPUBLIC" },
  { code: "TCD", name: "CHAD" },
  { code: "CIL", name: "CHANNEL ISLANDS" },
  { code: "CHL", name: "CHILE" },
  { code: "CHN", name: "CHINA" },
  { code: "CXR", name: "CHRISTMAS ISLAND" },
  { code: "CCK", name: "COCOS (KEELING) ISLANDS" },
  { code: "COL", name: "COLOMBIA" },
  { code: "COM", name: "COMOROS" },
  { code: "COG", name: "CONGO" },
  { code: "COK", name: "COOK ISLANDS" },
  { code: "CRI", name: "COSTA RICA" },
  { code: "CIV", name: "COTE D'IVOIRE" },
  { code: "HRV", name: "CROATIA" },
  { code: "CUB", name: "CUBA" },
  { code: "CYP", name: "CYPRUS" },
  { code: "CZE", name: "CZECH REPUBLIC" },
  { code: "DNK", name: "DENMARK" },
  { code: "DJI", name: "DJIBOUTI" },
  { code: "DMA", name: "DOMINICA ISLAND" },
  { code: "DOM", name: "DOMINICAN REPUBLIC" },
  { code: "TMP", name: "EAST TIMOR" },
  { code: "ECU", name: "ECUADOR" },
  { code: "EGY", name: "EGYPT" },
  { code: "SLV", name: "EL SALVADOR" },
  { code: "GNQ", name: "EQUATORIAL GUINEA" },
  { code: "ERI", name: "ERITREA" },
  { code: "EST", name: "ESTONIA" },
  { code: "ETH", name: "ETHIOPIA" },
  { code: "FLK", name: "FALKLAND ISLANDS (MALVINAS)" },
  { code: "FRO", name: "FAROE ISLANDS" },
  { code: "FJI", name: "FIJI" },
  { code: "FIN", name: "FINLAND" },
  { code: "FRA", name: "FRANCE" },
  { code: "GUF", name: "FRENCH GUIANA" },
  { code: "PYF", name: "FRENCH POLYNESIA" },
  { code: "ATF", name: "FRENCH SOUTHERN TERRITORIES" },
  { code: "GAB", name: "GABON" },
  { code: "GMB", name: "GAMBIA" },
  { code: "GEO", name: "GEORGIA" },
  { code: "DEU", name: "GERMANY" },
  { code: "GHA", name: "GHANA" },
  { code: "GIB", name: "GIBRALTAR" },
  { code: "GRC", name: "GREECE" },
  { code: "GRL", name: "GREENLAND" },
  { code: "GRD", name: "GRENADA" },
  { code: "GLP", name: "GUADELOUPE" },
  { code: "GUM", name: "GUAM" },
  { code: "GTM", name: "GUATEMALA" },
  { code: "GGY", name: "GUERNSEY" },
  { code: "GIN", name: "GUINEA" },
  { code: "GNB", name: "GUINEA-BISSAU" },
  { code: "GUY", name: "GUYANA" },
  { code: "HTI", name: "HAITI" },
  { code: "HMD", name: "HEARD AND MCDONALD ISLANDS" },
  { code: "HND", name: "HONDURAS" },
  { code: "HUN", name: "HUNGARY" },
  { code: "ISL", name: "ICELAND" },
  { code: "IND", name: "INDIA" },
  { code: "IDN", name: "INDONESIA" },
  { code: "IRN", name: "IRAN" },
  { code: "IRQ", name: "IRAQ" },
  { code: "IRL", name: "IRELAND" },
  { code: "ISM", name: "ISLE OF MAN" },
  { code: "IMN", name: "ISLE OF MAN" },
  { code: "ISR", name: "ISRAEL" },
  { code: "ITA", name: "ITALY" },
  { code: "JAM", name: "JAMAICA" },
  { code: "JPN", name: "JAPAN" },
  { code: "JEY", name: "JERSEY" },
  { code: "JOR", name: "JORDAN" },
  { code: "KAZ", name: "KAZAKHSTAN" },
  { code: "KEN", name: "KENYA" },
  { code: "KIR", name: "KIRIBATI" },
  { code: "PRK", name: "KOREA" },
  { code: "KWT", name: "KUWAIT" },
  { code: "KGZ", name: "KYRGYZSTAN" },
  { code: "LAO", name: "LAO PEOPLE'S DEMOCRATIC" },
  { code: "LVA", name: "LATVIA" },
  { code: "LBN", name: "LEBANON" },
  { code: "LSO", name: "LESOTHO" },
  { code: "LBR", name: "LIBERIA" },
  { code: "LBY", name: "LIBYAN ARAB JAMAHIRYA" },
  { code: "LIE", name: "LIECHTENSTEIN" },
  { code: "LTU", name: "LITHUANIA" },
  { code: "LUX", name: "LUXEMBOURG" },
  { code: "MAC", name: "MACAU" },
  { code: "MKD", name: "MACEDONIA" },
  { code: "MDG", name: "MADAGASCAR" },
  { code: "MWI", name: "MALAWI" },
  { code: "MYS", name: "MALAYSIA" },
  { code: "MDV", name: "MALDIVES" },
  { code: "MLI", name: "MALI" },
  { code: "MLT", name: "MALTA" },
  { code: "MHL", name: "MARSHALL ISLANDS" },
  { code: "MTQ", name: "MARTINIQUE" },
  { code: "MRT", name: "MAURITANIA" },
  { code: "MUS", name: "MAURITIUS" },
  { code: "MYT", name: "MAYOTTE" },
  { code: "FXX", name: "METROPOLITAN FRANCE" },
  { code: "MEX", name: "MEXICO" },
  { code: "FSM", name: "MICRONESIA" },
  { code: "MCO", name: "MONACO" },
  { code: "MNG", name: "MONGOLIA" },
  { code: "MSR", name: "MONSERRAT" },
  { code: "MNE", name: "MONTENEGRO" },
  { code: "MAR", name: "MOROCCO" },
  { code: "MOZ", name: "MOZAMBIQUE" },
  { code: "MMR", name: "MYANMAR" },
  { code: "NAM", name: "NAMIBIA" },
  { code: "NRU", name: "NAURU" },
  { code: "NPL", name: "NEPAL" },
  { code: "NLD", name: "NETHERLANDS" },
  { code: "ANT", name: "NETHERLANDS ANTILLES" },
  { code: "NEV", name: "NEVIS" },
  { code: "NCL", name: "NEW CALEDONIA" },
  { code: "NIC", name: "NICARAGUA" },
  { code: "NER", name: "NIGER" },
  { code: "NGA", name: "NIGERIA" },
  { code: "NIU", name: "NIUE" },
  { code: "NFK", name: "NORFOLK ISLAND" },
  { code: "MNP", name: "NORTHERN MARIANA ISLANDS" },
  { code: "NOR", name: "NORWAY" },
  { code: "OMN", name: "OMAN" },
  { code: "PAK", name: "PAKISTAN" },
  { code: "PLW", name: "PALAU" },
  { code: "PSE", name: "PALESTINE" },
  { code: "PAN", name: "PANAMA" },
  { code: "PNG", name: "PAPUA NEW GUINEA" },
  { code: "PRY", name: "PARAGUAY" },
  { code: "PER", name: "PERU" },
  { code: "PHL", name: "PHILIPPINES" },
  { code: "PCN", name: "PITCAIRN" },
  { code: "POL", name: "POLAND" },
  { code: "PRT", name: "PORTUGAL" },
  { code: "PRI", name: "PUERTO RICO" },
  { code: "QAT", name: "QATAR" },
  { code: "KOR", name: "REPUBLIC OF KOREA" },
  { code: "MDA", name: "REPUBLIC OF MOLDOVA" },
  { code: "REU", name: "REUNION" },
  { code: "ROU", name: "ROMANIA" },
  { code: "RUS", name: "RUSSIAN FEDERATION" },
  { code: "RWA", name: "RWANDA" },
  { code: "WSM", name: "SAMOA" },
  { code: "SMR", name: "SAN MARINO" },
  { code: "STP", name: "SAO TOME AND PRINCIPE" },
  { code: "SAU", name: "SAUDI ARABIA" },
  { code: "SEN", name: "SENEGAL" },
  { code: "SRB", name: "SERBIA" },
  { code: "SCG", name: "SERBIA & MONTENEGRO" },
  { code: "SYC", name: "SEYCHELLES" },
  { code: "SLE", name: "SIERRA LEONE" },
  { code: "SVK", name: "SLOVAKIA" },
  { code: "SVN", name: "SLOVENIA" },
  { code: "SLB", name: "SOLOMON ISLANDS" },
  { code: "SOM", name: "SOMALIA" },
  { code: "ZAF", name: "SOUTH AFRICA" },
  { code: "SGS", name: "SOUTH GEORGIA AND THE SOUTH SA" },
  { code: "ESP", name: "SPAIN" },
  { code: "LKA", name: "SRI LANKA" },
  { code: "BLM", name: "ST BARTHELEMY" },
  { code: "SHN", name: "ST HELENA" },
  { code: "KNA", name: "ST KITTS AND NEVIS" },
  { code: "LCA", name: "ST LUCIA" },
  { code: "MAF", name: "ST MARTIN" },
  { code: "SPM", name: "ST PIERRE AND MIQUELON" },
  { code: "VCT", name: "ST VINCENT AND THE GRENADIN" },
  { code: "SDN", name: "SUDAN" },
  { code: "SUR", name: "SURINAME" },
  { code: "SJM", name: "SVALBARD AND JAN MAYEN ISLANDS" },
  { code: "SWZ", name: "SWAZILAND" },
  { code: "SWE", name: "SWEDEN" },
  { code: "CHE", name: "SWITZERLAND" },
  { code: "SYR", name: "SYRIAN ARAB REPUBLIC" },
  { code: "TWN", name: "TAIWAN" },
  { code: "TJK", name: "TAJIKISTAN" },
  { code: "TZA", name: "TANZANIA" },
  { code: "THA", name: "THAILAND" },
  { code: "TLS", name: "TIMOR-LESTE" },
  { code: "TGO", name: "TOGO" },
  { code: "TKL", name: "TOKELAU" },
  { code: "TON", name: "TONGA" },
  { code: "TTO", name: "TRINIDAD AND TOBAGO" },
  { code: "TUN", name: "TUNISIA" },
  { code: "TUR", name: "TURKEY" },
  { code: "TKM", name: "TURKMENISTAN" },
  { code: "TCA", name: "TURKS AND CAICOS ISLANDS" },
  { code: "TUV", name: "TUVALU" },
  { code: "UGA", name: "UGANDA" },
  { code: "UKR", name: "UKRAINE" },
  { code: "ARE", name: "UNITED ARAB EMIRATES" },
  { code: "UMI", name: "UNITED STATES MINOR OUTLYING ISLANDS" },
  { code: "URY", name: "URUGUAY" },
  { code: "UZB", name: "UZBEKISTAN" },
  { code: "VUT", name: "VANUATU" },
  { code: "VAT", name: "VATICAN CITY STATE (HOLY SEE)" },
  { code: "VEN", name: "VENEZUELA" },
  { code: "VNM", name: "VIETNAM" },
  { code: "VIR", name: "VIRGIN ISLANDS" },
  { code: "WLF", name: "WALLIS AND FUTUNA ISLANDS" },
  { code: "WIN", name: "WEST INDIES" },
  { code: "ESH", name: "WESTERN SAHARA" },
  { code: "YEM", name: "YEMEN" },
  { code: "YUG", name: "YUGOSLAVIA" },
  { code: "ZAR", name: "ZAIRE" },
  { code: "ZMB", name: "ZAMBIA" },
  { code: "ZWE", name: "ZIMBABWE" }
]

export const countries = {
  items: _countries
}
