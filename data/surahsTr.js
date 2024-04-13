const surahs = [
  { value: 1, label: "1. Fatiha", verse_count: 7, slug: "fatiha-suresi" },
  { value: 2, label: "2. Bakara", verse_count: 286, slug: "bakara-suresi" },
  {
    value: 3,
    label: "3. Ali İmran",
    verse_count: 200,
    slug: "ali-imran-suresi",
  },
  { value: 4, label: "4. Nisa", verse_count: 176, slug: "nisa-suresi" },
  { value: 5, label: "5. Maide", verse_count: 120, slug: "maide-suresi" },
  { value: 6, label: "6. Enam", verse_count: 165, slug: "enam-suresi" },
  { value: 7, label: "7. Araf", verse_count: 206, slug: "araf-suresi" },
  { value: 8, label: "8. Enfal", verse_count: 75, slug: "enfal-suresi" },
  { value: 9, label: "9. Tevbe", verse_count: 129, slug: "tevbe-suresi" },
  { value: 10, label: "10. Yunus", verse_count: 109, slug: "yunus-suresi" },
  { value: 11, label: "11. Hud", verse_count: 123, slug: "hud-suresi" },
  { value: 12, label: "12. Yusuf", verse_count: 111, slug: "yusuf-suresi" },
  { value: 13, label: "13. Rad", verse_count: 43, slug: "rad-suresi" },
  {
    value: 14,
    label: "14. İbrahim",
    verse_count: 52,
    slug: "ibrahim-suresi",
  },
  { value: 15, label: "15. Hicr", verse_count: 99, slug: "hicr-suresi" },
  { value: 16, label: "16. Nahl", verse_count: 128, slug: "nahl-suresi" },
  { value: 17, label: "17. İsra", verse_count: 111, slug: "isra-suresi" },
  { value: 18, label: "18. Kehf", verse_count: 110, slug: "kehf-suresi" },
  { value: 19, label: "19. Meryem", verse_count: 98, slug: "meryem-suresi" },
  { value: 20, label: "20. Taha", verse_count: 135, slug: "taha-suresi" },
  {
    value: 21,
    label: "21. Enbiya",
    verse_count: 112,
    slug: "enbiya-suresi",
  },
  { value: 22, label: "22. Hac", verse_count: 78, slug: "hac-suresi" },
  {
    value: 23,
    label: "23. Müminun",
    verse_count: 118,
    slug: "muminun-suresi",
  },
  { value: 24, label: "24. Nur", verse_count: 64, slug: "nur-suresi" },
  { value: 25, label: "25. Furkan", verse_count: 77, slug: "furkan-suresi" },
  { value: 26, label: "26. Şuara", verse_count: 227, slug: "suara-suresi" },
  { value: 27, label: "27. Neml", verse_count: 93, slug: "neml-suresi" },
  { value: 28, label: "28. Kasas", verse_count: 88, slug: "kasas-suresi" },
  {
    value: 29,
    label: "29. Ankebut",
    verse_count: 69,
    slug: "ankebut-suresi",
  },
  { value: 30, label: "30. Rum", verse_count: 60, slug: "rum-suresi" },
  { value: 31, label: "31. Lokman", verse_count: 34, slug: "lokman-suresi" },
  { value: 32, label: "32. Secde", verse_count: 30, slug: "secde-suresi" },
  { value: 33, label: "33. Ahzab", verse_count: 73, slug: "ahzab-suresi" },
  { value: 34, label: "34. Sebe", verse_count: 54, slug: "sebe-suresi" },
  { value: 35, label: "35. Fatır", verse_count: 45, slug: "fatir-suresi" },
  { value: 36, label: "36. Yasin", verse_count: 83, slug: "yasin-suresi" },
  {
    value: 37,
    label: "37. Saffat",
    verse_count: 182,
    slug: "saffat-suresi",
  },
  { value: 38, label: "38. Sad", verse_count: 88, slug: "sad-suresi" },
  { value: 39, label: "39. Zümer", verse_count: 75, slug: "zumer-suresi" },
  { value: 40, label: "40. Mümin", verse_count: 85, slug: "mumin-suresi" },
  {
    value: 41,
    label: "41. Fussilet",
    verse_count: 54,
    slug: "fussilet-suresi",
  },
  { value: 42, label: "42. Şura", verse_count: 53, slug: "sura-suresi" },
  { value: 43, label: "43. Zuhruf", verse_count: 89, slug: "zuhruf-suresi" },
  { value: 44, label: "44. Duhan", verse_count: 59, slug: "duhan-suresi" },
  { value: 45, label: "45. Casiye", verse_count: 37, slug: "casiye-suresi" },
  { value: 46, label: "46. Ahkaf", verse_count: 35, slug: "ahkaf-suresi" },
  {
    value: 47,
    label: "47. Muhammed",
    verse_count: 38,
    slug: "muhammed-suresi",
  },
  { value: 48, label: "48. Fetih", verse_count: 29, slug: "fetih-suresi" },
  {
    value: 49,
    label: "49. Hucurat",
    verse_count: 18,
    slug: "hucurat-suresi",
  },
  { value: 50, label: "50. Kaf", verse_count: 45, slug: "kaf-suresi" },
  {
    value: 51,
    label: "51. Zariyat",
    verse_count: 60,
    slug: "zariyat-suresi",
  },
  { value: 52, label: "52. Tur", verse_count: 49, slug: "tur-suresi" },
  { value: 53, label: "53. Necm", verse_count: 62, slug: "necm-suresi" },
  { value: 54, label: "54. Kamer", verse_count: 55, slug: "kamer-suresi" },
  { value: 55, label: "55. Rahman", verse_count: 78, slug: "rahman-suresi" },
  { value: 56, label: "56. Vakıa", verse_count: 96, slug: "vakia-suresi" },
  { value: 57, label: "57. Hadid", verse_count: 29, slug: "hadid-suresi" },
  {
    value: 58,
    label: "58. Mücadele",
    verse_count: 22,
    slug: "mucadele-suresi",
  },
  { value: 59, label: "59. Haşr", verse_count: 24, slug: "hasr-suresi" },
  {
    value: 60,
    label: "60. Mümtehine",
    verse_count: 13,
    slug: "mumtehine-suresi",
  },
  { value: 61, label: "61. Saff", verse_count: 14, slug: "saff-suresi" },
  { value: 62, label: "62. Cuma", verse_count: 11, slug: "cuma-suresi" },
  {
    value: 63,
    label: "63. Münafikun",
    verse_count: 11,
    slug: "munafikun-suresi",
  },
  {
    value: 64,
    label: "64. Tegabun",
    verse_count: 18,
    slug: "tegabun-suresi",
  },
  { value: 65, label: "65. Talak", verse_count: 12, slug: "talak-suresi" },
  { value: 66, label: "66. Tahrim", verse_count: 12, slug: "tahrim-suresi" },
  { value: 67, label: "67. Mülk", verse_count: 30, slug: "mulk-suresi" },
  { value: 68, label: "68. Kalem", verse_count: 52, slug: "kalem-suresi" },
  { value: 69, label: "69. Hâkka", verse_count: 52, slug: "hakka-suresi" },
  { value: 70, label: "70. Mearic", verse_count: 44, slug: "mearic-suresi" },
  { value: 71, label: "71. Nuh", verse_count: 28, slug: "nuh-suresi" },
  { value: 72, label: "72. Cin", verse_count: 28, slug: "cin-suresi" },
  {
    value: 73,
    label: "73. Müzzemmil",
    verse_count: 20,
    slug: "muzzemmil-suresi",
  },
  {
    value: 74,
    label: "74. Müddessir",
    verse_count: 56,
    slug: "muddessir-suresi",
  },
  { value: 75, label: "75. Kıyame", verse_count: 40, slug: "kiyame-suresi" },
  { value: 76, label: "76. İnsan", verse_count: 31, slug: "insan-suresi" },
  {
    value: 77,
    label: "77. Mürselat",
    verse_count: 50,
    slug: "murselat-suresi",
  },
  { value: 78, label: "78. Nebe", verse_count: 40, slug: "nebe-suresi" },
  { value: 79, label: "79. Naziat", verse_count: 46, slug: "naziat-suresi" },
  { value: 80, label: "80. Abese", verse_count: 42, slug: "abese-suresi" },
  { value: 81, label: "81. Tekvir", verse_count: 29, slug: "tekvir-suresi" },
  {
    value: 82,
    label: "82. İnfitar",
    verse_count: 19,
    slug: "infitar-suresi",
  },
  {
    value: 83,
    label: "83. Mutaffifin",
    verse_count: 36,
    slug: "mutaffifin-suresi",
  },
  {
    value: 84,
    label: "84. İnşikak",
    verse_count: 25,
    slug: "insikak-suresi",
  },
  { value: 85, label: "85. Büruc", verse_count: 22, slug: "buruc-suresi" },
  { value: 86, label: "86. Tarık", verse_count: 17, slug: "tarik-suresi" },
  { value: 87, label: "87. Ala", verse_count: 19, slug: "ala-suresi" },
  { value: 88, label: "88. Gaşiye", verse_count: 26, slug: "gasiye-suresi" },
  { value: 89, label: "89. Fecr", verse_count: 30, slug: "fecr-suresi" },
  { value: 90, label: "90. Beled", verse_count: 20, slug: "beled-suresi" },
  { value: 91, label: "91. Şems", verse_count: 15, slug: "sems-suresi" },
  { value: 92, label: "92. Leyl", verse_count: 21, slug: "leyl-suresi" },
  { value: 93, label: "93. Duha", verse_count: 11, slug: "duha-suresi" },
  {
    value: 94,
    label: "94. İnşirah",
    verse_count: 8,
    slug: "insirah-suresi",
  },
  { value: 95, label: "95. Tin", verse_count: 8, slug: "tin-suresi" },
  { value: 96, label: "96. Alak", verse_count: 19, slug: "alak-suresi" },
  { value: 97, label: "97. Kadir", verse_count: 5, slug: "kadir-suresi" },
  {
    value: 98,
    label: "98. Beyyine",
    verse_count: 8,
    slug: "beyyine-suresi",
  },
  { value: 99, label: "99. Zilzal", verse_count: 8, slug: "zilzal-suresi" },
  {
    value: 100,
    label: "100. Adiyat",
    verse_count: 11,
    slug: "adiyat-suresi",
  },
  { value: 101, label: "101. Karia", verse_count: 11, slug: "karia-suresi" },
  {
    value: 102,
    label: "102. Tekasür",
    verse_count: 8,
    slug: "tekasur-suresi",
  },
  { value: 103, label: "103. Asr", verse_count: 3, slug: "asr-suresi" },
  {
    value: 104,
    label: "104. Hümeze",
    verse_count: 9,
    slug: "humeze-suresi",
  },
  { value: 105, label: "105. Fil", verse_count: 5, slug: "fil-suresi" },
  {
    value: 106,
    label: "106. Kureyş",
    verse_count: 4,
    slug: "kureys-suresi",
  },
  { value: 107, label: "107. Maun", verse_count: 7, slug: "maun-suresi" },
  {
    value: 108,
    label: "108. Kevser",
    verse_count: 3,
    slug: "kevser-suresi",
  },
  {
    value: 109,
    label: "109. Kafirun",
    verse_count: 6,
    slug: "kafirun-suresi",
  },
  { value: 110, label: "110. Nasr", verse_count: 3, slug: "nasr-suresi" },
  {
    value: 111,
    label: "111. Tebbet",
    verse_count: 5,
    slug: "tebbet-suresi",
  },
  { value: 112, label: "112. İhlas", verse_count: 4, slug: "ihlas-suresi" },
  { value: 113, label: "113. Felak", verse_count: 5, slug: "felak-suresi" },
  { value: 114, label: "114. Nas", verse_count: 6, slug: "nas-suresi" },
];

module.exports = surahs;
