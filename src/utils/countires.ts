// countries.js
// Export default array of country objects (iso2, country, dialCode, flag)
// Flags created inline via String.fromCodePoint for portability.

const countries = [
    { iso2: "AF", country: "Afghanistan", dialCode: "93", flag: String.fromCodePoint(0x1F1E6,0x1F1EB) }, // 🇦🇫
    { iso2: "AL", country: "Albania", dialCode: "355", flag: String.fromCodePoint(0x1F1E6,0x1F1F1) }, // 🇦🇱
    { iso2: "DZ", country: "Algeria", dialCode: "213", flag: String.fromCodePoint(0x1F1E9,0x1F1FF) }, // 🇩🇿
    { iso2: "AS", country: "American Samoa", dialCode: "1-684", flag: String.fromCodePoint(0x1F1E6,0x1F1F8) }, // 🇦🇸
    { iso2: "AD", country: "Andorra", dialCode: "376", flag: String.fromCodePoint(0x1F1E6,0x1F1E9) }, // 🇦🇩
    { iso2: "AO", country: "Angola", dialCode: "244", flag: String.fromCodePoint(0x1F1E6,0x1F1F4) }, // 🇦🇴
    { iso2: "AI", country: "Anguilla", dialCode: "1-264", flag: String.fromCodePoint(0x1F1E6,0x1F1EE) }, // 🇦🇮
    { iso2: "AQ", country: "Antarctica", dialCode: "672", flag: String.fromCodePoint(0x1F1E6,0x1F1F6) }, // 🇦🇶
    { iso2: "AG", country: "Antigua and Barbuda", dialCode: "1-268", flag: String.fromCodePoint(0x1F1E6,0x1F1EC) }, // 🇦🇬
    { iso2: "AR", country: "Argentina", dialCode: "54", flag: String.fromCodePoint(0x1F1E6,0x1F1F7) }, // 🇦🇷
    { iso2: "AM", country: "Armenia", dialCode: "374", flag: String.fromCodePoint(0x1F1E6,0x1F1F2) }, // 🇦🇲
    { iso2: "AW", country: "Aruba", dialCode: "297", flag: String.fromCodePoint(0x1F1E6,0x1F1FC) }, // 🇦🇼
    { iso2: "AU", country: "Australia", dialCode: "61", flag: String.fromCodePoint(0x1F1E6,0x1F1FA) }, // 🇦🇺
    { iso2: "AT", country: "Austria", dialCode: "43", flag: String.fromCodePoint(0x1F1E6,0x1F1F9) }, // 🇦🇹
    { iso2: "AZ", country: "Azerbaijan", dialCode: "994", flag: String.fromCodePoint(0x1F1E6,0x1F1FF) }, // 🇦🇿
    { iso2: "BS", country: "Bahamas", dialCode: "1-242", flag: String.fromCodePoint(0x1F1E7,0x1F1F8) }, // 🇧🇸
    { iso2: "BH", country: "Bahrain", dialCode: "973", flag: String.fromCodePoint(0x1F1E7,0x1F1ED) }, // 🇧🇭
    { iso2: "BD", country: "Bangladesh", dialCode: "880", flag: String.fromCodePoint(0x1F1E7,0x1F1EE) }, // 🇧🇩
    { iso2: "BB", country: "Barbados", dialCode: "1-246", flag: String.fromCodePoint(0x1F1E7,0x1F1E7) }, // 🇧🇧
    { iso2: "BY", country: "Belarus", dialCode: "375", flag: String.fromCodePoint(0x1F1E7,0x1F1FE) }, // 🇧🇾
    { iso2: "BE", country: "Belgium", dialCode: "32", flag: String.fromCodePoint(0x1F1E7,0x1F1EA) }, // 🇧🇪
    { iso2: "BZ", country: "Belize", dialCode: "501", flag: String.fromCodePoint(0x1F1E7,0x1F1FF) }, // 🇧🇿
    { iso2: "BJ", country: "Benin", dialCode: "229", flag: String.fromCodePoint(0x1F1E7,0x1F1EF) }, // 🇧🇯
    { iso2: "BM", country: "Bermuda", dialCode: "1-441", flag: String.fromCodePoint(0x1F1E7,0x1F1F2) }, // 🇧🇲
    { iso2: "BT", country: "Bhutan", dialCode: "975", flag: String.fromCodePoint(0x1F1E7,0x1F1F9) }, // 🇧🇹
    { iso2: "BO", country: "Bolivia", dialCode: "591", flag: String.fromCodePoint(0x1F1E7,0x1F1F4) }, // 🇧🇴
    { iso2: "BQ", country: "Bonaire, Sint Eustatius and Saba", dialCode: "599", flag: String.fromCodePoint(0x1F1E7,0x1F1F6) }, // 🇧🇶
    { iso2: "BA", country: "Bosnia and Herzegovina", dialCode: "387", flag: String.fromCodePoint(0x1F1E7,0x1F1E6) }, // 🇧🇦
    { iso2: "BW", country: "Botswana", dialCode: "267", flag: String.fromCodePoint(0x1F1E7,0x1F1FC) }, // 🇧🇼
    { iso2: "BR", country: "Brazil", dialCode: "55", flag: String.fromCodePoint(0x1F1E7,0x1F1F7) }, // 🇧🇷
    { iso2: "IO", country: "British Indian Ocean Territory", dialCode: "246", flag: String.fromCodePoint(0x1F1EE,0x1F1F4) }, // 🇮🇴 (approx)
    { iso2: "VG", country: "British Virgin Islands", dialCode: "1-284", flag: String.fromCodePoint(0x1F1FB,0x1F1EC) }, // 🇻🇬
    { iso2: "BN", country: "Brunei", dialCode: "673", flag: String.fromCodePoint(0x1F1E7,0x1F1F3) }, // 🇧🇳
    { iso2: "BG", country: "Bulgaria", dialCode: "359", flag: String.fromCodePoint(0x1F1E7,0x1F1EC) }, // 🇧🇬
    { iso2: "BF", country: "Burkina Faso", dialCode: "226", flag: String.fromCodePoint(0x1F1E7,0x1F1EB) }, // 🇧🇫
    { iso2: "BI", country: "Burundi", dialCode: "257", flag: String.fromCodePoint(0x1F1E7,0x1F1EE) }, // 🇧🇮
    { iso2: "KH", country: "Cambodia", dialCode: "855", flag: String.fromCodePoint(0x1F1F0,0x1F1ED) }, // 🇰🇭
    { iso2: "CM", country: "Cameroon", dialCode: "237", flag: String.fromCodePoint(0x1F1E8,0x1F1F2) }, // 🇨🇲
    { iso2: "CA", country: "Canada", dialCode: "1", flag: String.fromCodePoint(0x1F1E8,0x1F1E6) }, // 🇨🇦
    { iso2: "CV", country: "Cape Verde", dialCode: "238", flag: String.fromCodePoint(0x1F1E8,0x1F1FB) }, // 🇨🇻
    { iso2: "KY", country: "Cayman Islands", dialCode: "1-345", flag: String.fromCodePoint(0x1F1F0,0x1F1FE) }, // 🇰🇾
    { iso2: "CF", country: "Central African Republic", dialCode: "236", flag: String.fromCodePoint(0x1F1E8,0x1F1EB) }, // 🇨🇫
    { iso2: "TD", country: "Chad", dialCode: "235", flag: String.fromCodePoint(0x1F1F9,0x1F1E9) }, // 🇹🇩
    { iso2: "CL", country: "Chile", dialCode: "56", flag: String.fromCodePoint(0x1F1E8,0x1F1F1) }, // 🇨🇱
    { iso2: "CN", country: "China", dialCode: "86", flag: String.fromCodePoint(0x1F1E8,0x1F1F3) }, // 🇨🇳
    { iso2: "CX", country: "Christmas Island", dialCode: "61", flag: String.fromCodePoint(0x1F1E8,0x1F1FD) }, // 🇨🇽
    { iso2: "CC", country: "Cocos (Keeling) Islands", dialCode: "61", flag: String.fromCodePoint(0x1F1E8,0x1F1E8) }, // 🇨🇨
    { iso2: "CO", country: "Colombia", dialCode: "57", flag: String.fromCodePoint(0x1F1E8,0x1F1F4) }, // 🇨🇴
    { iso2: "KM", country: "Comoros", dialCode: "269", flag: String.fromCodePoint(0x1F1E8,0x1F1F2) }, // 🇰🇲 (approx)
    { iso2: "CG", country: "Congo - Brazzaville", dialCode: "242", flag: String.fromCodePoint(0x1F1E8,0x1F1EC) }, // 🇨🇬
    { iso2: "CD", country: "Congo - Kinshasa (DRC)", dialCode: "243", flag: String.fromCodePoint(0x1F1E8,0x1F1E9) }, // 🇨🇩
    { iso2: "CK", country: "Cook Islands", dialCode: "682", flag: String.fromCodePoint(0x1F1E8,0x1F1F0) }, // 🇨🇰
    { iso2: "CR", country: "Costa Rica", dialCode: "506", flag: String.fromCodePoint(0x1F1E8,0x1F1F7) }, // 🇨🇷
    { iso2: "CI", country: "Côte d’Ivoire", dialCode: "225", flag: String.fromCodePoint(0x1F1E8,0x1F1EE) }, // 🇨🇮
    { iso2: "HR", country: "Croatia", dialCode: "385", flag: String.fromCodePoint(0x1F1ED,0x1F1F7) }, // 🇭🇷
    { iso2: "CU", country: "Cuba", dialCode: "53", flag: String.fromCodePoint(0x1F1E8,0x1F1FA) }, // 🇨🇺
    { iso2: "CW", country: "Curaçao", dialCode: "599", flag: String.fromCodePoint(0x1F1E8,0x1F1FC) }, // 🇨🇼
    { iso2: "CY", country: "Cyprus", dialCode: "357", flag: String.fromCodePoint(0x1F1E8,0x1F1FE) }, // 🇨🇾
    { iso2: "CZ", country: "Czech Republic", dialCode: "420", flag: String.fromCodePoint(0x1F1E8,0x1F1FF) }, // 🇨🇿
    { iso2: "DK", country: "Denmark", dialCode: "45", flag: String.fromCodePoint(0x1F1E9,0x1F1F0) }, // 🇩🇰
    { iso2: "DJ", country: "Djibouti", dialCode: "253", flag: String.fromCodePoint(0x1F1E9,0x1F1EF) }, // 🇩🇯
    { iso2: "DM", country: "Dominica", dialCode: "1-767", flag: String.fromCodePoint(0x1F1E9,0x1F1F2) }, // 🇩🇲
    { iso2: "DO", country: "Dominican Republic", dialCode: "1-809", flag: String.fromCodePoint(0x1F1E9,0x1F1F4) }, // 🇩🇴
    { iso2: "EC", country: "Ecuador", dialCode: "593", flag: String.fromCodePoint(0x1F1EA,0x1F1E8) }, // 🇪🇨
    { iso2: "EG", country: "Egypt", dialCode: "20", flag: String.fromCodePoint(0x1F1EA,0x1F1EC) }, // 🇪🇬
    { iso2: "SV", country: "El Salvador", dialCode: "503", flag: String.fromCodePoint(0x1F1F8,0x1F1FB) }, // 🇸🇻
    { iso2: "GQ", country: "Equatorial Guinea", dialCode: "240", flag: String.fromCodePoint(0x1F1EA,0x1F1EC) }, // 🇬🇶 (approx)
    { iso2: "ER", country: "Eritrea", dialCode: "291", flag: String.fromCodePoint(0x1F1EA,0x1F1F7) }, // 🇪🇷
    { iso2: "EE", country: "Estonia", dialCode: "372", flag: String.fromCodePoint(0x1F1EA,0x1F1EA) }, // 🇪🇪
    { iso2: "SZ", country: "Eswatini", dialCode: "268", flag: String.fromCodePoint(0x1F1F8,0x1F1FF) }, // 🇸🇿
    { iso2: "ET", country: "Ethiopia", dialCode: "251", flag: String.fromCodePoint(0x1F1EA,0x1F1EA) }, // 🇪🇹
    { iso2: "FK", country: "Falkland Islands", dialCode: "500", flag: String.fromCodePoint(0x1F1EB,0x1F1F0) }, // 🇫🇰
    { iso2: "FO", country: "Faroe Islands", dialCode: "298", flag: String.fromCodePoint(0x1F1EB,0x1F1F4) }, // 🇫🇴
    { iso2: "FJ", country: "Fiji", dialCode: "679", flag: String.fromCodePoint(0x1F1EB,0x1F1EF) }, // 🇫🇯
    { iso2: "FI", country: "Finland", dialCode: "358", flag: String.fromCodePoint(0x1F1EB,0x1F1EE) }, // 🇫🇮
    { iso2: "FR", country: "France", dialCode: "33", flag: String.fromCodePoint(0x1F1EB,0x1F1F7) }, // 🇫🇷
    { iso2: "GF", country: "French Guiana", dialCode: "594", flag: String.fromCodePoint(0x1F1EB,0x1F1EC) }, // 🇬🇫
    { iso2: "PF", country: "French Polynesia", dialCode: "689", flag: String.fromCodePoint(0x1F1F5,0x1F1EB) }, // 🇵🇫
    { iso2: "GA", country: "Gabon", dialCode: "241", flag: String.fromCodePoint(0x1F1EC,0x1F1E6) }, // 🇬🇦
    { iso2: "GM", country: "Gambia", dialCode: "220", flag: String.fromCodePoint(0x1F1EC,0x1F1F2) }, // 🇬🇲
    { iso2: "GE", country: "Georgia", dialCode: "995", flag: String.fromCodePoint(0x1F1EC,0x1F1EA) }, // 🇬🇪
    { iso2: "DE", country: "Germany", dialCode: "49", flag: String.fromCodePoint(0x1F1E9,0x1F1EA) }, // 🇩🇪
    { iso2: "GH", country: "Ghana", dialCode: "233", flag: String.fromCodePoint(0x1F1EC,0x1F1ED) }, // 🇬🇭
    { iso2: "GI", country: "Gibraltar", dialCode: "350", flag: String.fromCodePoint(0x1F1EC,0x1F1EE) }, // 🇬🇮
    { iso2: "GR", country: "Greece", dialCode: "30", flag: String.fromCodePoint(0x1F1EC,0x1F1F7) }, // 🇬🇷
    { iso2: "GL", country: "Greenland", dialCode: "299", flag: String.fromCodePoint(0x1F1EC,0x1F1F1) }, // 🇬🇱
    { iso2: "GD", country: "Grenada", dialCode: "1-473", flag: String.fromCodePoint(0x1F1EC,0x1F1E9) }, // 🇬🇩
    { iso2: "GP", country: "Guadeloupe", dialCode: "590", flag: String.fromCodePoint(0x1F1EC,0x1F1F5) }, // 🇬🇵
    { iso2: "GU", country: "Guam", dialCode: "1-671", flag: String.fromCodePoint(0x1F1EC,0x1F1FA) }, // 🇬🇺
    { iso2: "GT", country: "Guatemala", dialCode: "502", flag: String.fromCodePoint(0x1F1EC,0x1F1F9) }, // 🇬🇹
    { iso2: "GG", country: "Guernsey", dialCode: "44-1481", flag: String.fromCodePoint(0x1F1EC,0x1F1EC) }, // 🇬🇬
    { iso2: "GN", country: "Guinea", dialCode: "224", flag: String.fromCodePoint(0x1F1EC,0x1F1F3) }, // 🇬🇳
    { iso2: "GW", country: "Guinea-Bissau", dialCode: "245", flag: String.fromCodePoint(0x1F1EC,0x1F1FC) }, // 🇬🇼
    { iso2: "GY", country: "Guyana", dialCode: "592", flag: String.fromCodePoint(0x1F1EC,0x1F1FE) }, // 🇬🇾
    { iso2: "HT", country: "Haiti", dialCode: "509", flag: String.fromCodePoint(0x1F1ED,0x1F1F9) }, // 🇭🇹
    { iso2: "HN", country: "Honduras", dialCode: "504", flag: String.fromCodePoint(0x1F1ED,0x1F1F3) }, // 🇭🇳
    { iso2: "HK", country: "Hong Kong SAR China", dialCode: "852", flag: String.fromCodePoint(0x1F1ED,0x1F1F0) }, // 🇭🇰
    { iso2: "HU", country: "Hungary", dialCode: "36", flag: String.fromCodePoint(0x1F1ED,0x1F1FA) }, // 🇭🇺
    { iso2: "IS", country: "Iceland", dialCode: "354", flag: String.fromCodePoint(0x1F1EE,0x1F1F8) }, // 🇮🇸
    { iso2: "IN", country: "India", dialCode: "91", flag: String.fromCodePoint(0x1F1EE,0x1F1F3) }, // 🇮🇳
    { iso2: "ID", country: "Indonesia", dialCode: "62", flag: String.fromCodePoint(0x1F1EE,0x1F1E9) }, // 🇮🇩
    { iso2: "IR", country: "Iran", dialCode: "98", flag: String.fromCodePoint(0x1F1EE,0x1F1F7) }, // 🇮🇷
    { iso2: "IQ", country: "Iraq", dialCode: "964", flag: String.fromCodePoint(0x1F1EE,0x1F1F6) }, // 🇮🇶
    { iso2: "IE", country: "Ireland", dialCode: "353", flag: String.fromCodePoint(0x1F1EE,0x1F1EA) }, // 🇮🇪
    { iso2: "IM", country: "Isle of Man", dialCode: "44-1624", flag: String.fromCodePoint(0x1F1EE,0x1F1F2) }, // 🇮🇲
    { iso2: "IL", country: "Israel", dialCode: "972", flag: String.fromCodePoint(0x1F1EE,0x1F1F1) }, // 🇮🇱
    { iso2: "IT", country: "Italy", dialCode: "39", flag: String.fromCodePoint(0x1F1EE,0x1F1F9) }, // 🇮🇹
    { iso2: "JM", country: "Jamaica", dialCode: "1-876", flag: String.fromCodePoint(0x1F1EF,0x1F1F2) }, // 🇯🇲
    { iso2: "JP", country: "Japan", dialCode: "81", flag: String.fromCodePoint(0x1F1EF,0x1F1F5) }, // 🇯🇵
    { iso2: "JE", country: "Jersey", dialCode: "44-1534", flag: String.fromCodePoint(0x1F1EF,0x1F1EA) }, // 🇯🇪
    { iso2: "JO", country: "Jordan", dialCode: "962", flag: String.fromCodePoint(0x1F1EF,0x1F1F4) }, // 🇯🇴
    { iso2: "KZ", country: "Kazakhstan", dialCode: "7", flag: String.fromCodePoint(0x1F1F0,0x1F1FF) }, // 🇰🇿 (shares 7)
    { iso2: "KE", country: "Kenya", dialCode: "254", flag: String.fromCodePoint(0x1F1F0,0x1F1EA) }, // 🇰🇪
    { iso2: "KI", country: "Kiribati", dialCode: "686", flag: String.fromCodePoint(0x1F1F0,0x1F1EE) }, // 🇰🇮
    { iso2: "KP", country: "North Korea", dialCode: "850", flag: String.fromCodePoint(0x1F1F0,0x1F1F5) }, // 🇰🇵
    { iso2: "KR", country: "South Korea", dialCode: "82", flag: String.fromCodePoint(0x1F1F0,0x1F1F7) }, // 🇰🇷
    { iso2: "KW", country: "Kuwait", dialCode: "965", flag: String.fromCodePoint(0x1F1F0,0x1F1FC) }, // 🇰🇼
    { iso2: "KG", country: "Kyrgyzstan", dialCode: "996", flag: String.fromCodePoint(0x1F1F0,0x1F1EC) }, // 🇰🇬
    { iso2: "LA", country: "Laos", dialCode: "856", flag: String.fromCodePoint(0x1F1F1,0x1F1E6) }, // 🇱🇦
    { iso2: "LV", country: "Latvia", dialCode: "371", flag: String.fromCodePoint(0x1F1F1,0x1F1FB) }, // 🇱🇻
    { iso2: "LB", country: "Lebanon", dialCode: "961", flag: String.fromCodePoint(0x1F1F1,0x1F1E7) }, // 🇱🇧
    { iso2: "LS", country: "Lesotho", dialCode: "266", flag: String.fromCodePoint(0x1F1F1,0x1F1F8) }, // 🇱🇸
    { iso2: "LR", country: "Liberia", dialCode: "231", flag: String.fromCodePoint(0x1F1F1,0x1F1F7) }, // 🇱🇷
    { iso2: "LY", country: "Libya", dialCode: "218", flag: String.fromCodePoint(0x1F1F1,0x1F1FE) }, // 🇱🇾
    { iso2: "LI", country: "Liechtenstein", dialCode: "423", flag: String.fromCodePoint(0x1F1F1,0x1F1EE) }, // 🇱🇮
    { iso2: "LT", country: "Lithuania", dialCode: "370", flag: String.fromCodePoint(0x1F1F1,0x1F1F9) }, // 🇱🇹
    { iso2: "LU", country: "Luxembourg", dialCode: "352", flag: String.fromCodePoint(0x1F1F1,0x1F1FA) }, // 🇱🇺
    { iso2: "MO", country: "Macau SAR China", dialCode: "853", flag: String.fromCodePoint(0x1F1F2,0x1F1F4) }, // 🇲🇴
    { iso2: "MG", country: "Madagascar", dialCode: "261", flag: String.fromCodePoint(0x1F1F2,0x1F1EC) }, // 🇲🇬
    { iso2: "MW", country: "Malawi", dialCode: "265", flag: String.fromCodePoint(0x1F1F2,0x1F1FC) }, // 🇲🇼
    { iso2: "MY", country: "Malaysia", dialCode: "60", flag: String.fromCodePoint(0x1F1F2,0x1F1FE) }, // 🇲🇾
    { iso2: "MV", country: "Maldives", dialCode: "960", flag: String.fromCodePoint(0x1F1F2,0x1F1FB) }, // 🇲🇻
    { iso2: "ML", country: "Mali", dialCode: "223", flag: String.fromCodePoint(0x1F1F2,0x1F1F1) }, // 🇲🇱
    { iso2: "MT", country: "Malta", dialCode: "356", flag: String.fromCodePoint(0x1F1F2,0x1F1F9) }, // 🇲🇹
    { iso2: "MH", country: "Marshall Islands", dialCode: "692", flag: String.fromCodePoint(0x1F1F2,0x1F1ED) }, // 🇲🇭
    { iso2: "MQ", country: "Martinique", dialCode: "596", flag: String.fromCodePoint(0x1F1F2,0x1F1F6) }, // 🇲🇶
    { iso2: "MR", country: "Mauritania", dialCode: "222", flag: String.fromCodePoint(0x1F1F2,0x1F1F7) }, // 🇲🇷
    { iso2: "MU", country: "Mauritius", dialCode: "230", flag: String.fromCodePoint(0x1F1F2,0x1F1FA) }, // 🇲🇺
    { iso2: "YT", country: "Mayotte", dialCode: "262", flag: String.fromCodePoint(0x1F1FE,0x1F1F9) }, // 🇾🇹
    { iso2: "MX", country: "Mexico", dialCode: "52", flag: String.fromCodePoint(0x1F1F2,0x1F1FD) }, // 🇲🇽
    { iso2: "FM", country: "Micronesia", dialCode: "691", flag: String.fromCodePoint(0x1F1F2,0x1F1EB) }, // 🇫🇲
    { iso2: "MD", country: "Moldova", dialCode: "373", flag: String.fromCodePoint(0x1F1F2,0x1F1E9) }, // 🇲🇩
    { iso2: "MC", country: "Monaco", dialCode: "377", flag: String.fromCodePoint(0x1F1F2,0x1F1E8) }, // 🇲🇨
    { iso2: "MN", country: "Mongolia", dialCode: "976", flag: String.fromCodePoint(0x1F1F2,0x1F1F3) }, // 🇲🇳
    { iso2: "ME", country: "Montenegro", dialCode: "382", flag: String.fromCodePoint(0x1F1F2,0x1F1EA) }, // 🇲🇪
    { iso2: "MS", country: "Montserrat", dialCode: "1-664", flag: String.fromCodePoint(0x1F1F2,0x1F1F8) }, // 🇲🇸
    { iso2: "MA", country: "Morocco", dialCode: "212", flag: String.fromCodePoint(0x1F1F2,0x1F1E6) }, // 🇲🇦
    { iso2: "MZ", country: "Mozambique", dialCode: "258", flag: String.fromCodePoint(0x1F1F2,0x1F1FF) }, // 🇲🇿
    { iso2: "MM", country: "Myanmar (Burma)", dialCode: "95", flag: String.fromCodePoint(0x1F1F2,0x1F1F2) }, // 🇲🇲
    { iso2: "NA", country: "Namibia", dialCode: "264", flag: String.fromCodePoint(0x1F1F3,0x1F1E6) }, // 🇳🇦
    { iso2: "NR", country: "Nauru", dialCode: "674", flag: String.fromCodePoint(0x1F1F3,0x1F1F7) }, // 🇳🇷
    { iso2: "NP", country: "Nepal", dialCode: "977", flag: String.fromCodePoint(0x1F1F3,0x1F1F5) }, // 🇳🇵
    { iso2: "NL", country: "Netherlands", dialCode: "31", flag: String.fromCodePoint(0x1F1F3,0x1F1F1) }, // 🇳🇱
    { iso2: "NC", country: "New Caledonia", dialCode: "687", flag: String.fromCodePoint(0x1F1F3,0x1F1E8) }, // 🇳🇨
    { iso2: "NZ", country: "New Zealand", dialCode: "64", flag: String.fromCodePoint(0x1F1F3,0x1F1FF) }, // 🇳🇿
    { iso2: "NI", country: "Nicaragua", dialCode: "505", flag: String.fromCodePoint(0x1F1F3,0x1F1EE) }, // 🇳🇮
    { iso2: "NE", country: "Niger", dialCode: "227", flag: String.fromCodePoint(0x1F1F3,0x1F1EA) }, // 🇳🇪
    { iso2: "NG", country: "Nigeria", dialCode: "234", flag: String.fromCodePoint(0x1F1F3,0x1F1EC) }, // 🇳🇬
    { iso2: "NU", country: "Niue", dialCode: "683", flag: String.fromCodePoint(0x1F1F3,0x1F1FA) }, // 🇳🇺
    { iso2: "NF", country: "Norfolk Island", dialCode: "672", flag: String.fromCodePoint(0x1F1F3,0x1F1EB) }, // 🇳🇫
    { iso2: "MK", country: "North Macedonia", dialCode: "389", flag: String.fromCodePoint(0x1F1F2,0x1F1F0) }, // 🇲🇰
    { iso2: "MP", country: "Northern Mariana Islands", dialCode: "1-670", flag: String.fromCodePoint(0x1F1F2,0x1F1F5) }, // 🇲🇵
    { iso2: "NO", country: "Norway", dialCode: "47", flag: String.fromCodePoint(0x1F1F3,0x1F1F4) }, // 🇳🇴
    { iso2: "OM", country: "Oman", dialCode: "968", flag: String.fromCodePoint(0x1F1F4,0x1F1F2) }, // 🇴🇲
    { iso2: "PK", country: "Pakistan", dialCode: "92", flag: String.fromCodePoint(0x1F1F5,0x1F1F0) }, // 🇵🇰
    { iso2: "PW", country: "Palau", dialCode: "680", flag: String.fromCodePoint(0x1F1F5,0x1F1FC) }, // 🇵🇼
    { iso2: "PS", country: "Palestinian Territories", dialCode: "970", flag: String.fromCodePoint(0x1F1F5,0x1F1F8) }, // 🇵🇸
    { iso2: "PA", country: "Panama", dialCode: "507", flag: String.fromCodePoint(0x1F1F5,0x1F1E6) }, // 🇵🇦
    { iso2: "PG", country: "Papua New Guinea", dialCode: "675", flag: String.fromCodePoint(0x1F1F5,0x1F1EC) }, // 🇵🇬
    { iso2: "PY", country: "Paraguay", dialCode: "595", flag: String.fromCodePoint(0x1F1F5,0x1F1FE) }, // 🇵🇾
    { iso2: "PE", country: "Peru", dialCode: "51", flag: String.fromCodePoint(0x1F1F5,0x1F1EA) }, // 🇵🇪
    { iso2: "PH", country: "Philippines", dialCode: "63", flag: String.fromCodePoint(0x1F1F5,0x1F1ED) }, // 🇵🇭
    { iso2: "PN", country: "Pitcairn Islands", dialCode: "64", flag: String.fromCodePoint(0x1F1F5,0x1F1F3) }, // 🇵🇳
    { iso2: "PL", country: "Poland", dialCode: "48", flag: String.fromCodePoint(0x1F1F5,0x1F1F1) }, // 🇵🇱
    { iso2: "PT", country: "Portugal", dialCode: "351", flag: String.fromCodePoint(0x1F1F5,0x1F1F9) }, // 🇵🇹
    { iso2: "PR", country: "Puerto Rico", dialCode: "1-787", flag: String.fromCodePoint(0x1F1F5,0x1F1F7) }, // 🇵🇷
    { iso2: "QA", country: "Qatar", dialCode: "974", flag: String.fromCodePoint(0x1F1F6,0x1F1E6) }, // 🇶🇦
    { iso2: "RE", country: "Réunion", dialCode: "262", flag: String.fromCodePoint(0x1F1F7,0x1F1EA) }, // 🇷🇪
    { iso2: "RO", country: "Romania", dialCode: "40", flag: String.fromCodePoint(0x1F1F7,0x1F1F4) }, // 🇷🇴
    { iso2: "RU", country: "Russia", dialCode: "7", flag: String.fromCodePoint(0x1F1F7,0x1F1FA) }, // 🇷🇺
    { iso2: "RW", country: "Rwanda", dialCode: "250", flag: String.fromCodePoint(0x1F1F7,0x1F1FC) }, // 🇷🇼
    { iso2: "BL", country: "St. Barthélemy", dialCode: "590", flag: String.fromCodePoint(0x1F1E7,0x1F1F1) }, // 🇧🇱
    { iso2: "SH", country: "St. Helena", dialCode: "290", flag: String.fromCodePoint(0x1F1F8,0x1F1ED) }, // 🇸🇭
    { iso2: "KN", country: "St. Kitts and Nevis", dialCode: "1-869", flag: String.fromCodePoint(0x1F1F0,0x1F1F3) }, // 🇰🇳
    { iso2: "LC", country: "St. Lucia", dialCode: "1-758", flag: String.fromCodePoint(0x1F1F1,0x1F1E8) }, // 🇱🇨
    { iso2: "MF", country: "St. Martin (French part)", dialCode: "590", flag: String.fromCodePoint(0x1F1F2,0x1F1F8) }, // 🇲🇫
    { iso2: "PM", country: "St. Pierre & Miquelon", dialCode: "508", flag: String.fromCodePoint(0x1F1F5,0x1F1F2) }, // 🇵🇲
    { iso2: "VC", country: "St. Vincent & Grenadines", dialCode: "1-784", flag: String.fromCodePoint(0x1F1FB,0x1F1E8) }, // 🇻🇨
    { iso2: "WS", country: "Samoa", dialCode: "685", flag: String.fromCodePoint(0x1F1FC,0x1F1F8) }, // 🇼🇸
    { iso2: "SM", country: "San Marino", dialCode: "378", flag: String.fromCodePoint(0x1F1F8,0x1F1F2) }, // 🇸🇲
    { iso2: "ST", country: "Sao Tome & Principe", dialCode: "239", flag: String.fromCodePoint(0x1F1F8,0x1F1F9) }, // 🇸🇹
    { iso2: "SA", country: "Saudi Arabia", dialCode: "966", flag: String.fromCodePoint(0x1F1F8,0x1F1E6) }, // 🇸🇦
    { iso2: "SN", country: "Senegal", dialCode: "221", flag: String.fromCodePoint(0x1F1F8,0x1F1F3) }, // 🇸🇳
    { iso2: "RS", country: "Serbia", dialCode: "381", flag: String.fromCodePoint(0x1F1F7,0x1F1F8) }, // 🇷🇸
    { iso2: "SC", country: "Seychelles", dialCode: "248", flag: String.fromCodePoint(0x1F1F8,0x1F1E8) }, // 🇸🇨
    { iso2: "SL", country: "Sierra Leone", dialCode: "232", flag: String.fromCodePoint(0x1F1F8,0x1F1F1) }, // 🇸🇱
    { iso2: "SG", country: "Singapore", dialCode: "65", flag: String.fromCodePoint(0x1F1F8,0x1F1EC) }, // 🇸🇬
    { iso2: "SX", country: "Sint Maarten (Dutch part)", dialCode: "599", flag: String.fromCodePoint(0x1F1F8,0x1F1FD) }, // 🇸🇽
    { iso2: "SK", country: "Slovakia", dialCode: "421", flag: String.fromCodePoint(0x1F1F8,0x1F1F0) }, // 🇸🇰
    { iso2: "SI", country: "Slovenia", dialCode: "386", flag: String.fromCodePoint(0x1F1F8,0x1F1EE) }, // 🇸🇮
    { iso2: "SB", country: "Solomon Islands", dialCode: "677", flag: String.fromCodePoint(0x1F1F8,0x1F1E7) }, // 🇸🇧
    { iso2: "SO", country: "Somalia", dialCode: "252", flag: String.fromCodePoint(0x1F1F8,0x1F1F4) }, // 🇸🇴
    { iso2: "ZA", country: "South Africa", dialCode: "27", flag: String.fromCodePoint(0x1F1FF,0x1F1E6) }, // 🇿🇦
    { iso2: "SS", country: "South Sudan", dialCode: "211", flag: String.fromCodePoint(0x1F1F8,0x1F1F8) }, // 🇸🇸
    { iso2: "ES", country: "Spain", dialCode: "34", flag: String.fromCodePoint(0x1F1EA,0x1F1F8) }, // 🇪🇸
    { iso2: "LK", country: "Sri Lanka", dialCode: "94", flag: String.fromCodePoint(0x1F1F1,0x1F1F0) }, // 🇱🇰
    { iso2: "SD", country: "Sudan", dialCode: "249", flag: String.fromCodePoint(0x1F1F8,0x1F1E9) }, // 🇸🇩
    { iso2: "SR", country: "Suriname", dialCode: "597", flag: String.fromCodePoint(0x1F1F8,0x1F1F7) }, // 🇸🇷
    { iso2: "SE", country: "Sweden", dialCode: "46", flag: String.fromCodePoint(0x1F1F8,0x1F1EA) }, // 🇸🇪
    { iso2: "CH", country: "Switzerland", dialCode: "41", flag: String.fromCodePoint(0x1F1E8,0x1F1ED) }, // 🇨🇭
    { iso2: "SY", country: "Syria", dialCode: "963", flag: String.fromCodePoint(0x1F1F8,0x1F1FE) }, // 🇸🇾
    { iso2: "TW", country: "Taiwan", dialCode: "886", flag: String.fromCodePoint(0x1F1F9,0x1F1FC) }, // 🇹🇼
    { iso2: "TJ", country: "Tajikistan", dialCode: "992", flag: String.fromCodePoint(0x1F1F9,0x1F1EF) }, // 🇹🇯
    { iso2: "TZ", country: "Tanzania", dialCode: "255", flag: String.fromCodePoint(0x1F1F9,0x1F1FF) }, // 🇹🇿
    { iso2: "TH", country: "Thailand", dialCode: "66", flag: String.fromCodePoint(0x1F1F9,0x1F1ED) }, // 🇹🇭
    { iso2: "TL", country: "Timor-Leste", dialCode: "670", flag: String.fromCodePoint(0x1F1F9,0x1F1F1) }, // 🇹🇱
    { iso2: "TG", country: "Togo", dialCode: "228", flag: String.fromCodePoint(0x1F1F9,0x1F1EC) }, // 🇹🇬
    { iso2: "TK", country: "Tokelau", dialCode: "690", flag: String.fromCodePoint(0x1F1F9,0x1F1F0) }, // 🇹🇰
    { iso2: "TO", country: "Tonga", dialCode: "676", flag: String.fromCodePoint(0x1F1F9,0x1F1F4) }, // 🇹🇴
    { iso2: "TT", country: "Trinidad and Tobago", dialCode: "1-868", flag: String.fromCodePoint(0x1F1F9,0x1F1F9) }, // 🇹🇹
    { iso2: "TN", country: "Tunisia", dialCode: "216", flag: String.fromCodePoint(0x1F1F9,0x1F1F3) }, // 🇹🇳
    { iso2: "TR", country: "Turkey", dialCode: "90", flag: String.fromCodePoint(0x1F1F9,0x1F1F7) }, // 🇹🇷
    { iso2: "TM", country: "Turkmenistan", dialCode: "993", flag: String.fromCodePoint(0x1F1F9,0x1F1F2) }, // 🇹🇲
    { iso2: "TC", country: "Turks and Caicos Islands", dialCode: "1-649", flag: String.fromCodePoint(0x1F1F9,0x1F1E8) }, // 🇹🇨
    { iso2: "TV", country: "Tuvalu", dialCode: "688", flag: String.fromCodePoint(0x1F1F9,0x1F1FB) }, // 🇹🇻
    { iso2: "UG", country: "Uganda", dialCode: "256", flag: String.fromCodePoint(0x1F1FA,0x1F1EC) }, // 🇺🇬
    { iso2: "UA", country: "Ukraine", dialCode: "380", flag: String.fromCodePoint(0x1F1FA,0x1F1E6) }, // 🇺🇦
    { iso2: "AE", country: "United Arab Emirates", dialCode: "971", flag: String.fromCodePoint(0x1F1E6,0x1F1EA) }, // 🇦🇪
    { iso2: "GB", country: "United Kingdom", dialCode: "44", flag: String.fromCodePoint(0x1F1EC,0x1F1E7) }, // 🇬🇧
    { iso2: "US", country: "United States", dialCode: "1", flag: String.fromCodePoint(0x1F1FA,0x1F1F8) }, // 🇺🇸
    { iso2: "UY", country: "Uruguay", dialCode: "598", flag: String.fromCodePoint(0x1F1FA,0x1F1FE) }, // 🇺🇾
    { iso2: "UZ", country: "Uzbekistan", dialCode: "998", flag: String.fromCodePoint(0x1F1FA,0x1F1FF) }, // 🇺🇿
    { iso2: "VU", country: "Vanuatu", dialCode: "678", flag: String.fromCodePoint(0x1F1FB,0x1F1FA) }, // 🇻🇺
    { iso2: "VA", country: "Vatican City", dialCode: "379", flag: String.fromCodePoint(0x1F1FB,0x1F1E6) }, // 🇻🇦
    { iso2: "VE", country: "Venezuela", dialCode: "58", flag: String.fromCodePoint(0x1F1FB,0x1F1EA) }, // 🇻🇪
    { iso2: "VN", country: "Vietnam", dialCode: "84", flag: String.fromCodePoint(0x1F1FB,0x1F1F3) }, // 🇻🇳
    { iso2: "WF", country: "Wallis & Futuna", dialCode: "681", flag: String.fromCodePoint(0x1F1FC,0x1F1EB) }, // 🇼🇫
    { iso2: "EH", country: "Western Sahara", dialCode: "212", flag: String.fromCodePoint(0x1F1EA,0x1F1ED) }, // 🇪🇭 (approx)
    { iso2: "YE", country: "Yemen", dialCode: "967", flag: String.fromCodePoint(0x1F1FE,0x1F1EA) }, // 🇾🇪
    { iso2: "ZM", country: "Zambia", dialCode: "260", flag: String.fromCodePoint(0x1F1FF,0x1F1F2) }, // 🇿🇲
    { iso2: "ZW", country: "Zimbabwe", dialCode: "263", flag: String.fromCodePoint(0x1F1FF,0x1F1FC) }, // 🇿🇼
  
    // territories / special entries often useful in phone pickers:
    { iso2: "AB", country: "Ascension Island", dialCode: "247", flag: String.fromCodePoint(0x1F1E6,0x1F1E9) }, // 🇦🇯 approximation
    { iso2: "CX", country: "Christmas Island", dialCode: "61", flag: String.fromCodePoint(0x1F1E8,0x1F1FD) }, // 🇨🇽
    { iso2: "CC", country: "Cocos (Keeling) Islands", dialCode: "61", flag: String.fromCodePoint(0x1F1E8,0x1F1E8) }, // 🇨🇨 duplicate
    { iso2: "GS", country: "South Georgia & South Sandwich Is.", dialCode: "500", flag: String.fromCodePoint(0x1F1EC,0x1F1F8) }, // 🇬🇸
    { iso2: "UM", country: "U.S. Minor Outlying Islands", dialCode: "1", flag: String.fromCodePoint(0x1F1FA,0x1F1F2) }, // 🇺🇲 (approx)
    { iso2: "AQ", country: "Antarctica", dialCode: "672", flag: String.fromCodePoint(0x1F1E6,0x1F1F6) }, // 🇦🇶 duplicate
  ];
  
  export default countries;
  