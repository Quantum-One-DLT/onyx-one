import {
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: (props: LucideProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        stroke="#000000"
        d="m239.308,21.0035c-2.0113.142-4.0988.3848-6.0962.5801l4.4996,30.6174c-2.9224.2558-5.8098.6378-8.709,1.0158-2.6987.3517-5.4768.712-8.1284,1.1608l-3.6288-30.6174c-9.1098,1.4644-18.1004,3.548-26.998,6.0945l.2904.2897c-5.7613,1.6747-11.5031,3.5286-17.1278,5.6591l12.0475,28.1505c-2.52.937-5.0382,2.0153-7.5479,3.0473-2.6752,1.1001-5.3313,2.122-7.9833,3.3375l-11.3218-28.2957c-5.4662,2.4809-10.8666,5.2451-16.1117,8.126v-.4353c-8.0927,4.489-15.8899,9.3937-23.3693,14.8008l19.0148,24.2326c-2.2273,1.5733-4.3819,3.1448-6.5317,4.7885-.1614.1247-.2738.3099-.436.4353-2.143,1.6479-4.3208,3.2242-6.3867,4.9335l-18.5793-24.8131c-1.5716,1.2923-3.1002,2.5767-4.6448,3.9179l.2904.4353c-4.1234,3.5888-8.1235,7.3955-12.0475,11.3183-3.9741,3.9729-7.8353,8.0117-11.4669,12.1889l-.436-.4353c-1.3218,1.5223-2.6453,3.238-3.919,4.7885l24.9658,18.4284c-3.4149,4.1273-6.7169,8.4786-9.8702,12.9144-.1398.1953-.2962.3841-.4353.5801l-24.095-18.8638c-5.3708,7.4352-10.4877,15.1754-14.9505,23.217h.4353c-2.8941,5.2657-5.6291,10.5906-8.1284,16.1068l28.4495,11.3182c-.2155.4706-.3675.9784-.5809,1.451-.9814,2.1835-1.9991,4.3314-2.903,6.5298-.9144,2.2237-1.7733,4.4427-2.6128,6.6749-.1074.2839-.1845.5859-.2904.8707l-28.1592-12.0439c-2.1103,5.6183-3.9897,11.2326-5.6608,16.9774l-.2904-.2897c-2.5473,8.8948-4.6322,18.0243-6.0963,27.1348l30.6267,3.6277c-.2003,1.1867-.4007,2.43-.5808,3.6276-.2645,1.706-.503,3.3754-.7258,5.0787-.1513,1.1562-.3027,2.3281-.4353,3.4825-.1715,1.5475-.2912,3.0914-.4353,4.6434h-.1456l-30.6268-4.4982c-.1953,2.0153-.2926,4.062-.4353,6.0944h.5808c-.3769,5.4525-.5809,10.9944-.5809,16.5421 0,5.6186.1939,11.3114.5808,16.8322h-.5808c.1441,2.0419.2378,4.0652.4353,6.0945l30.6268-4.4983c.253,2.6793.6644,5.2903 1.016,7.9808 .3704,2.834.6745,5.7214 1.1613,8.5613l-30.3364,3.7727c1.4613,9.0541 3.4189,18.0037 5.9511,26.8446l.2904-.2897c1.6781,5.7692 3.5263,11.6004 5.6608,17.2676l28.1593-12.0438c.9464,2.5482 1.8711,5.0539 2.903,7.5455 .6745,1.6379 1.46,3.3038 2.1773,4.9337 .4454,1.0084.8492,2.0489 1.3063,3.0472l-28.4495,11.3183c2.4792,5.4632 5.1015,10.8632 7.9833,16.1068h-.436c4.4902,8.0908 9.5446,16.0323 14.9505,23.5071l24.2401-19.0089c1.568,2.2064 3.135,4.227 4.79,6.3847 .1088.1412.1809.294.2904.4353 .0288.036.1146.1074.1456.1449 1.642,2.1161 3.2038,4.3191 4.9351,6.3846l-24.8208,18.4284c1.2877,1.5628 2.7277,2.9602 4.0643,4.4983l.436-.2904c3.5898,4.1222 7.3978,8.121 11.3218,12.0438 3.9741,3.9729 8.0141,7.833 12.1926,11.4634l-.4353.4353c1.5463,1.3418 3.0698,2.7678 4.6448,4.063l18.5793-24.8131c1.2708,1.0515 2.619,2.0183 3.919,3.0472 .826.6594 1.634,1.3863 2.4676,2.0315 .1384.1059.2969.1838.436.2904 2.1521,1.6575 4.3319,3.2261 6.5317,4.7885l-19.0148,24.2327c7.4355,5.3661 15.1802,10.3394 23.2242,14.8008v-.4353c5.2451,2.8809 10.7461,5.6016 16.2569,8.1259l11.3218-28.2957c.6702.3063 1.3582.57 2.0321.8706 1.7978.8014 3.5627,1.5727 5.3706,2.3217 .183.0764.3971.0721.5809.1449 2.5096,1.0321 5.0278,2.1103 7.5478,3.0473l-12.0475,28.0055c5.6174,2.1106 11.3812,4.1337 17.1278,5.8042l-.2904.2897c8.898,2.547 17.8883,4.4852 26.998,5.9494l3.6288-30.4723c2.6956.4562 5.4043.8033 8.1284,1.1608 .1499.0216.2847.1261.4353.1449 .0504.005.0966-.005.1456,0 1.3352.1686 2.7222.2912 4.0643.4353 1.3187.1492 2.6058.3113 3.919.4353l-4.4997,30.6174c2.028.1953 4.199.4367 6.2415.5801v-.7256c5.5226.387 11.0721.5801 16.6924.5801 5.5493,0 11.093-.2032 16.5471-.5801l.1456.5801c2.033-.1427 3.9335-.2429 5.9512-.4353l-4.3545-30.6173c3.4987-.307 7.004-.8286 10.4508-1.306 2.0858-.2883 4.176-.521 6.2415-.8706l3.6288,30.3271c9.0533-1.4616 18.0093-3.2727 26.8528-5.8042l-.2904-.2904c5.7466-1.6706 11.5907-3.6936 17.2729-5.8042l-12.0475-28.0055c5.2947-1.9494 10.4629-4.2089 15.5311-6.5298l11.4669,28.5859c5.5179-2.4986 10.8444-5.2327 16.1117-8.126v.4353c8.044-4.4615 15.7866-9.5768 23.2241-14.9459l-19.0148-24.2327c.5362-.3812 1.0625-.7736 1.5967-1.1608 1.8038-1.2909 3.6213-2.5815 5.3706-3.9179 2.1376-1.6572 4.2963-3.325 6.3866-5.0787l18.5793,24.8131c1.5725-1.2952 3.0985-2.7212 4.6449-4.0629l-.4353-.4353c4.1785-3.6305 8.2184-7.4904 12.1926-11.4634 3.9239-3.9228 7.7318-7.9217 11.3218-12.0438l.436.2897c1.3365-1.5381 2.774-2.9356 4.0643-4.4983l-24.9659-18.5736c3.5428-4.2817 7.0458-8.7006 10.3057-13.3498l24.3852,19.154c5.4089-7.477 10.315-15.2719 14.8054-23.362h-.436c2.9036-5.2832 5.6311-10.7443 8.1284-16.2519l-28.5947-11.3183c1.4797-3.2294 2.8765-6.5475 4.2094-9.8672 .7682-1.9061 1.4637-3.7402 2.1772-5.6592l28.3044,12.0438c2.1345-5.6673 3.9827-11.4984 5.6609-17.2676l.2904.2897c2.5323-8.8409 4.4898-17.7906 5.9512-26.8446l-30.6267-3.7728c.098-.5773.1975-1.1616.2904-1.7413 .3791-2.2721.7135-4.5548 1.0161-6.82 .361-2.6993.7625-5.3014 1.0161-7.9808l30.6267,4.3532c.1938-1.9985.4389-3.9387.5808-5.9493h-.5808c.387-5.5208.5808-11.2137.5808-16.8323 0-5.5477-.2032-11.0896-.5808-16.5421h.5808c-.1456-2.07-.382-4.1873-.5808-6.2395l-30.6267,4.4982c-.2573-2.7273-.6479-5.3781-1.0161-8.1259-.0216-.1434.0216-.2926 0-.4353-.3675-2.6982-.8306-5.4199-1.3063-8.126l30.7719-3.6277c-1.464-9.1105-3.549-18.2399-6.0963-27.1348l-.2904.2897c-1.6837-5.7884-3.5311-11.4627-5.6608-17.1226l-28.3044,12.1889c-1.0034-2.7235-1.9428-5.4641-3.0482-8.1259-.3805-.9134-.7675-1.847-1.1611-2.757-.6709-1.5561-1.3288-3.1073-2.0321-4.6434l28.3043-11.3182c-2.5196-5.5379-5.2342-10.9861-8.1284-16.2518h.436c-4.4631-8.0408-9.4375-15.7836-14.8054-23.217l-24.2401,19.0089c-1.592-2.2402-3.0917-4.472-4.79-6.6749-1.7674-2.3256-3.6769-4.5976-5.5157-6.82l24.9659-18.4285c-1.2764-1.5504-2.5974-3.2662-3.9191-4.7885l-.436.4353c-3.6315-4.1772-7.4927-8.216-11.4668-12.1889-3.924-3.9228-7.9241-7.7295-12.0475-11.3183l.2904-.4353c-1.5671-1.3609-3.0524-2.6075-4.6448-3.9179l-18.5793,24.8132c-2.0367-1.6852-4.1179-3.3081-6.2414-4.9336-.1895-.147-.3899-.2897-.5809-.4353-2.1343-1.6222-4.3179-3.235-6.5318-4.7886l19.1599-24.2326c-7.4774-5.4043-15.4217-10.4569-23.5144-14.9459v.4353c-5.2585-2.8884-10.6274-5.5113-16.1117-7.9808l-11.3217,28.4408c-2.6523-1.227-5.302-2.3728-7.9833-3.4825-2.5088-1.0385-4.9817-2.0955-7.5478-3.0473l12.0475-28.1505c-5.6988-2.1348-11.5018-3.9815-17.2729-5.6592l.2904-.2897c-8.8433-2.5308-17.7994-4.4876-26.8528-5.9493l-3.6288,30.4722c-2.6517-.4482-5.4298-.8092-8.1284-1.1608-.1982-.0288-.382-.1196-.5809-.1449-2.658-.3387-5.3065-.6342-7.9833-.8706l4.4996-30.6173c-2.0253-.1975-4.0555-.2912-6.0962-.4353l-.1456.4353c-5.4542-.3769-10.9979-.436-16.5472-.4353-5.6202,0-11.1698.0504-16.6924.4353v-.5809zm16.6924,48.7556c2.9802-.0004 5.8768.004 8.8542.1449 .2371.007.4886-.0144.7258,0 5.7152.294 11.454.9238 17.1277,1.7413 1.9885.2861 3.9711.6652 5.9512,1.0158 1.6001.2839 3.2044.5463 4.79.8706 2.2963.4692 4.5413,1.04 6.822,1.5963 2.9111.7098 5.8284,1.4696 8.7091,2.3217s5.719,1.7628 8.5639,2.757 5.7605,2.0561 8.5639,3.1923 5.5171,2.3494 8.2736,3.6277 5.5695,2.6425 8.2736,4.0629 5.3372,2.9358 7.9833,4.4983c1.7066,1.0077 3.3997,1.9804 5.0803,3.0473 1.466.9318 2.9166,1.9307 4.3545,2.902 2.0282,1.3696 4.1114,2.7499 6.0964,4.2081 .3942.2897.7697.578 1.1612.8706 2.1166,1.5804 4.1784,3.2516 6.2414,4.9336l.7258.5801c.1045.0865.1859.2032.2904.2897 3.4074,2.8184 6.6731,5.6565 9.8703,8.7063 1.0951,1.0435 2.1177,2.1171 3.1933,3.1923 2.0813,2.0837 4.2602,4.2048 6.2415,6.3847 .8121.8918 1.5306,1.8534 2.3224,2.757 1.1724,1.341 2.3494,2.6886 3.4836,4.063 1.4332,1.7367 2.8387,3.435 4.2093,5.2238 .4446.5801.8685,1.1557 1.3063,1.7413 .3517.4692.6695.9794 1.0161,1.451 1.4158,1.9313 2.8671,3.8174 4.2093,5.8043 .3928.5794.7761,1.158 1.1612,1.7412 1.2666,1.9206 2.4322,3.9799 3.6288,5.9494 1.5558,2.5607 3.0658,5.051 4.4997,7.6906s2.7562,5.4112 4.0643,8.126 2.5956,5.485 3.7739,8.271c.3301.7829.6969,1.5354 1.0161,2.3217 .822,2.0206 1.57,4.0392 2.3224,6.0945 .2962.8109.5859,1.6527.8709,2.4668 .7142,2.041 1.3874,4.0216 2.0321,6.0944 .7718,2.482 1.5076,5.0202 2.1772,7.5455 .1175.4425.3214.8623.4353,1.306 .1989.7708.392,1.5489.5808,2.3217 .5427,2.2269.9896,4.5625 1.4515,6.8199 .6205,3.032 1.1255,6.058 1.5967,9.1417s.8432,6.1553 1.1611,9.2868c.036.3899.1081.7711.1456,1.1608 .5607,5.8869.8709,11.8142.8709,17.8481 0,5.9914-.3185,12.0014-.8709,17.848-.0432.4288-.1016.8778-.1456,1.3059-.005.0505.005.098 0,.1449-.3156,3.0827-.6976,6.1054-1.1611,9.1417-.4713,3.0837-.9764,6.1096-1.5967,9.1416-.4692,2.2936-.8949,4.542-1.4515,6.82-.178.7298-.3942,1.4502-.5808,2.1766-.5607,2.1807-1.2461,4.3666-1.887,6.5298-.2292.7729-.4864,1.553-.7257,2.3217-.6508,2.0945-1.306,4.1645-2.0321,6.2396-.1211.3445-.3128.6724-.436,1.0158-.8886,2.4912-1.7599,4.9412-2.7578,7.4003-.3358.8268-.6688,1.6459-1.0161,2.4668-.2666.632-.5967,1.2565-.8709,1.8863-.9322,2.1371-1.894,4.2903-2.903,6.3847-.943,1.9583-1.8876,3.873-2.903,5.8042-.3856.7328-.7663,1.4496-1.1612,2.1766-1.0718,1.9748-2.19,4.0061-3.3385,5.9493-.374.632-.78,1.259-1.1612,1.8864-1.5558,2.5607-3.1161,5.0678-4.79,7.5456-1.3662,2.0209-2.7551,3.9714-4.2093,5.9493-.3265.4454-.6854.8638-1.0161,1.3059-1.5473,2.0664-3.1456,4.2244-4.79,6.2396-.2371.2912-.4864.5809-.7257.8706-1.7645,2.1357-3.4963,4.1659-5.3706,6.2395-.1614.1787-.2738.4021-.4353.5801-1.9829,2.1773-4.1368,4.2807-6.2415,6.3846-2.1069,2.107-4.3263,4.2351-6.5318,6.2396-.1506.1362-.2847.2991-.4353.4353-2.0586,1.8586-4.1011,3.6025-6.2414,5.3689l-.8709.7254c-2.0207,1.6474-4.1516,3.2257-6.2415,4.7886-.4346.3257-.8694.6947-1.3064,1.0157-1.962,1.4403-3.9316,2.8438-5.9512,4.208-2.4776,1.6738-4.9871,3.2327-7.5478,4.7886-1.8489,1.1223-3.7823,2.1401-5.6609,3.1923-.7353.4122-1.4358.9032-2.1773,1.306-.5635.3056-1.1761.5715-1.7418.8706-.3063.1629-.5636.4194-.8709.5801-2.553,1.3324-5.0936,2.5667-7.693,3.7728-1.9678.9151-3.9469,1.7643-5.9512,2.6119-.4756.2011-.9744.3834-1.4516.5801-1.0658.4403-2.1175.8851-3.1933,1.306-1.7367.6789-3.4731,1.2617-5.2254,1.8863-1.7328.6183-3.4694,1.3182-5.2255,1.8864-1.4467.467-2.899.875-4.3545,1.3059-1.1528.3423-2.3215.6954-3.4836,1.0158-1.2047.3315-2.4189.7091-3.6288,1.0157-2.7868.707-5.5834,1.3063-8.4187,1.8864-3.032.6205-6.0609,1.1251-9.1445,1.5961-1.3022.1989-2.6081.4086-3.9191.5801-3.5038.4612-7.0755.7532-10.596,1.0158-4.5652.3344-9.2836.5801-13.9345.5801-4.7493,0-9.4196-.2313-14.0796-.5801-1.2465-.0937-2.5292-.1715-3.7739-.2904-2.0934-.2003-4.1546-.4547-6.2414-.7255-.8701-.1124-1.7466-.1658-2.6128-.2897-.5347-.0771-1.0628-.209-1.5966-.2904-3.0837-.4713-6.1126-.9758-9.1445-1.5962-2.292-.4692-4.5617-.8987-6.8221-1.4511-.7278-.1773-1.4513-.3942-2.1773-.5801-2.9763-.7657-5.9374-1.7048-8.8542-2.6119-2.0855-.6486-4.1881-1.3123-6.2414-2.0315-.3856-.1355-.7759-.2976-1.1612-.4353-1.1281-.4036-2.2205-.8814-3.3385-1.306-2.1254-.8048-4.2859-1.5816-6.3867-2.4668-2.0043-.8476-3.9835-1.6967-5.9512-2.6119-.7739-.3589-1.5525-.6457-2.3224-1.0158-.7808-.3762-1.5476-.7741-2.3224-1.1608-1.9188-.9578-3.7805-2.0258-5.6609-3.0472-2.6397-1.4338-5.2775-2.9425-7.8381-4.4983s-5.0701-3.1147-7.5479-4.7885-4.8667-3.4358-7.2575-5.2238-4.8123-3.6159-7.1124-5.514c-2.1141-1.7447-4.2072-3.5343-6.2415-5.3689-.1766-.1593-.405-.2753-.5809-.4353-2.2055-2.0046-4.2797-4.1326-6.3866-6.2396-2.127-2.1264-4.2389-4.1833-6.2414-6.3846-2.0301-2.2336-3.8851-4.6344-5.806-6.9651-1.8927-2.2943-3.7498-4.6037-5.5158-6.9651-1.7879-2.3909-3.5516-4.7776-5.2254-7.2553s-3.2342-4.9848-4.79-7.5455c-.3812-.6277-.7872-1.2541-1.1612-1.8863-1.1638-1.9697-2.2534-3.9471-3.3384-5.9494-1.4339-2.6396-2.7562-5.266-4.0642-7.9808s-2.5958-5.485-3.774-8.271c-.8855-2.1001-1.6625-4.2599-2.4676-6.3847-.4252-1.118-.9028-2.2093-1.3063-3.3375-.6342-1.7757-1.1633-3.5784-1.7418-5.3689-.3142-.9704-.7171-1.9247-1.016-2.9021-.2948-.967-.5924-1.9314-.8709-2.9021-.6889-2.4004-1.2962-4.8342-1.887-7.2553-.5665-2.3168-1.1178-4.6152-1.5966-6.9651-.609-2.9861-1.1329-5.9603-1.5967-8.9965-.4713-3.0837-.8433-6.1553-1.1611-9.2868-.036-.3812-.1088-.7792-.1456-1.1608-.5571-5.8451-.8663-11.8579-.8709-17.848 0-.0504-7e-05-.0973 0-.1449s-7e-05-.0966 0-.1449c.005-5.9349.3236-11.7651.8709-17.5579 .036-.3899.1052-.7712.1456-1.1608 .0216-.1924-.0216-.3884 0-.5801 .3128-2.9683.7063-5.898 1.1611-8.8515 .3654-2.3938.7055-4.7472 1.1612-7.1102 .093-.4778.1939-.9735.2904-1.451 .4958-2.4655 1.1494-4.9714 1.7418-7.4005 .7113-2.9104 1.4692-5.8262 2.3225-8.7063 .2443-.8231.4706-1.6464.7257-2.4668 .4281-1.3768.8473-2.7 1.3063-4.0629 .3286-.9747.6709-1.9319 1.0161-2.9022 .6464-1.8176 1.3314-3.5778 2.0321-5.3689 .4353-1.113.8489-2.2312 1.3063-3.3374 .4468-1.0803.9848-2.1223 1.4515-3.1924 .9302-2.1346 1.8891-4.2789 2.903-6.3846 .9343-1.9392 1.9043-3.9032 2.903-5.8043 1.4218-2.7037 2.9358-5.335 4.4997-7.9808 .4007-.6782.7527-1.3591 1.1612-2.0315 2.7956-4.5967 5.7698-9.1023 8.9993-13.4948 .3474-.4728.6637-.9809 1.0161-1.4511 1.537-2.0553 3.1713-3.9608 4.79-5.9494 3.9804-4.8782 8.2244-9.673 12.7733-14.2204s9.3451-8.7901 14.2248-12.7693c2.4398-1.9896 4.8883-3.9567 7.4027-5.8042 7.543-5.5425 15.4007-10.3918 23.5144-14.6557 2.7046-1.4213 5.3715-2.7837 8.1285-4.0629 5.5138-2.5584 11.1471-4.8298 16.8374-6.8199 2.8452-.9951 5.6829-1.9041 8.5639-2.7571s5.7977-1.6107 8.709-2.3217c3.5307-.8621 7.1747-1.6685 10.7411-2.3217 2.315-.4238 4.6406-.8249 6.9672-1.1608 5.6702-.8187 11.2711-1.4456 16.9826-1.7413 .24-.0144.485.007.7258,0 2.9774-.1427 6.0191-.1449 8.9993-.1449zm-16.8374,12.6242c-13.604,1.3209-27.1296,4.1903-40.2067,8.7064-1.6086.5549-3.2039,1.1412-4.79,1.7413-.1002.036-.1903.1066-.2904.1449-.0432.0144-.1031-.0144-.1456,0-2.44.9304-4.7279,2.0119-7.1124,3.0472-1.6118.6998-3.2043,1.4299-4.79,2.1766-.7724.3632-1.5545.6407-2.3224,1.0157v.1449c-12.4139,6.0733-23.9901,13.4699-34.5458,22.2012l18.5792,18.7187c-1.4456,1.1549-2.6574,2.4069-4.0642,3.6276-.0504.0505-.0937.1002-.1456.1449-.3409.2955-.6767.5715-1.0161.8706-.2847.253-.5873.4706-.8709.7256-.6457.578-1.2444,1.2864-1.887,1.8864-.663.5974-1.3917,1.1268-2.032,1.7412-.6349.6082-1.2637,1.2669-1.887,1.8864l-.1456.1449-.1456.1449c-1.842,1.851-3.477,3.716-5.2254,5.6592-.1369.1549-.2991.2803-.4353.4353-1.4364,1.6056-2.8622,3.2817-4.2094,4.9336-.4353.5261-.8835,1.0653-1.3063,1.5962l-18.8696-19.0088c-8.6384,10.4938-16.0274,22.1733-22.0628,34.5352-1.1676,2.3916-2.2789,4.8052-3.3386,7.2553-1.7599,4.0697-3.4858,8.1163-4.9351,12.334l.1456.1449c-4.4761,12.993-7.4016,26.3492-8.7091,39.904l26.5626.1449c-.0944.8472-.0865,1.7449-.1456,2.612-.1038,1.0157-.361,2.0273-.4353,3.0472-.1881,2.5849-.3827,5.2456-.436,7.8357-.0216.8785.003,1.7333 0,2.612-.007,2.7518.1449,5.5221.2904,8.271 .0144.2422.1319.4821.1456.7256 .0577,1.1066.209,2.2245.2904,3.3375 .1074,1.6446.1023,3.2719.2904,4.9336h-26.5626c1.2882,13.5535 4.2396,26.9276 8.7091,39.9042 .854,2.4794 1.789,4.9523 2.7578,7.4003 .9673,2.4442 1.9666,4.8458 3.0482,7.2553 .764,1.7021 1.5015,3.3952 2.3224,5.0786 6.0309,12.3763 13.5295,23.8625 22.208,34.3901l18.7245-18.5736c1.1551,1.4453 2.5529,2.8017 3.7739,4.2081 .0432.0505.1016.0951.1456.1449 .2955.3409.5715.6767.8709,1.0158 2.0878,2.3532 4.1291,4.7083 6.3866,6.965 .2205.2205.5038.3625.7257.5801 .1694.1737.2616.4101.436.5801 .3812.3747.921.645 1.3063,1.0158 1.2501,1.1722 2.4946,2.3581 3.774,3.4825 .6277.5744 1.2457,1.187 1.8869,1.7413l1.0161.8706c1.1056.9638 2.1728,1.9734 3.3385,2.9021l-18.7244,18.7187c10.4771,8.6561 21.944,16.0461 34.2556,22.0561v.2904c18.9622,9.2469 39.2245,14.7326 59.802,16.6872v-26.5544c1.9692.222 3.9629.2861 5.9512.4353 .8275.0649 1.6348.2443 2.4676.2904 2.7893.1794 5.5839.2904 8.4187.2904 2.766,0 5.6899.005 8.4187-.1449 .5866-.036 1.1565-.1074 1.7418-.1449 .3156-.0216.5556-.1225.8709-.1449 1.8582-.1319 3.8216-.2306 5.6609-.4353v26.4093c13.5057-1.3019 26.8269-4.2641 39.7712-8.7064l.1456.1449c1.8125-.6241 3.587-1.3497 5.3706-2.0315 .6731-.2558 1.3617-.4605 2.0321-.7255 1.7537-.6954 3.5011-1.4259 5.2254-2.1766 .6767-.2926 1.3585-.5686 2.0321-.8706 1.7118-.7715 3.399-1.6418 5.0803-2.4668 12.3529-6.0616 23.8823-13.511 34.4006-22.2012l-18.7244-18.7187c2.1948-1.7486 4.2715-3.6227 6.3866-5.514 .9462-.8316 1.8265-1.7567 2.7579-2.6119 1.135-1.0421 2.3826-1.9466 3.4836-3.0473 .0735-.0735.0721-.2169.1456-.2904 .5693-.5722 1.1773-1.1602 1.7418-1.7412l.1456-.1449c1.2271-1.2776 2.4585-2.5741 3.6288-3.9179l1.1612-1.3059c.1629-.1859.2832-.3884.4353-.5801 .0504-.0504.1009-.0937.1456-.1449 1.221-1.4064 2.6186-2.7628 3.7739-4.2081l18.5793,18.5736c8.6407-10.4818 16.0477-21.935 22.0629-34.245 .8374-1.7105 1.6868-3.4926 2.4676-5.2238 .2998-.6688.5794-1.3582.8709-2.0315 .7544-1.7287 1.4797-3.4768 2.1773-5.2238 .9883-2.475 1.8849-4.8921 2.7578-7.4005 4.509-12.9551 7.5425-26.2575 8.8542-39.759h-26.7077c.3156-2.7896.5679-5.5815.7258-8.4162 .0144-.24-.0144-.485 0-.7255 .1355-2.5563.2767-5.1339.2904-7.6906 0-.1967.0006-.3841 0-.5801-.002-.874.0216-1.7382 0-2.612-.005-.3373-.1333-.6774-.1456-1.0157-.036-1.3579.0721-2.7049 0-4.0629-.0216-.3762-.1218-.7856-.1456-1.1608-.036-.5174-.1088-1.0805-.1456-1.5962-.1319-1.8577-.2306-3.6754-.4353-5.514h26.4174c-1.7741-18.7832-6.6566-37.3409-14.515-54.8499-.7542-1.6979-1.5171-3.4093-2.3224-5.0788-5.9915-12.4197-13.3962-24.0071-22.0629-34.5352l-18.7245,19.0089c-.6126-.7684-1.2608-1.5627-1.8869-2.3217-1.3135-1.5836-2.6868-3.1165-4.0642-4.6434-1.7147-1.9395-3.3693-3.8035-5.2255-5.6592-.0216-.0216-.1203.0216-.1456,0-1.9596-1.9567-3.9187-3.9738-5.9512-5.8042-.2803-.2508-.5888-.4771-.8709-.7256-.3877-.3438-.7706-.6767-1.1611-1.0157-.7571-.6572-1.5579-1.2184-2.3224-1.8863-.6558-.5729-1.2193-1.2081-1.887-1.7413l18.5793-18.7187c-10.5558-8.7318-22.1274-16.1416-34.5458-22.2012v-.1449c-.7978-.3884-1.6654-.6399-2.4676-1.0157-3.8115-1.7858-7.6528-3.5647-11.612-5.0786-.1405-.0504-.2948-.0923-.436-.1449-1.7292-.6544-3.4806-1.2893-5.2254-1.8863-13.0484-4.4649-26.4501-7.2763-40.0616-8.5613v26.4093c-.823-.0923-1.6484-.111-2.4676-.1449h-.1456c-.9516-.0886-1.9453-.0757-2.903-.1449-.5196-.036-1.0758-.1131-1.5967-.1449-.3848-.0216-.777-.124-1.1611-.1449-.431-.0216-.8715.0216-1.3063,0-2.3476-.124-4.7683-.2904-7.1124-.2897-2.5352-.0004-5.0152.1614-7.5478.2897h-.1456c-2.054.1066-4.1925.2436-6.2415.4353-.9339.0886-1.829.1802-2.7578.2904v-26.6995zm1.3063,56.4462c.8454.5347 1.7045,1.0853 2.4676,1.7413 3.0375,2.611 5.4191,6.1512 6.5317,10.3025 1.8907,7.0538-.1809,14.2348-4.7899,19.2991-5.7913-3.6829-9.58-10.07-9.58-17.4127 0-5.3652 2.0027-10.2512 5.3706-13.9302zm30.9171.1449c3.2796,3.6672 5.2254,8.4688 5.2254,13.7851 0,7.278-3.7717,13.5691-9.4348,17.2676-4.5351-5.0289-6.5275-12.1298-4.6448-19.154 1.3862-5.1716 4.6741-9.2069 8.8542-11.8986zm-60.5278,7.8357c4.6771,1.5209 8.8046,4.6769 11.4669,9.2868 3.6419,6.306 3.5122,13.8263.436,19.8795-6.4084-2.1413-11.7626-7.3457-13.6442-14.3655-1.3938-5.2004-.5463-10.4047 1.7418-14.8008zm90.2836,0c2.2815,4.4073 2.9875,9.6118 1.5967,14.8008-1.8965,7.0754-7.2798,12.2851-13.7893,14.3655-3.0769-6.0531-3.2065-13.5735.436-19.8795 2.6869-4.6524 6.9852-7.7832 11.7572-9.2868zm-117.1365,15.5263c4.9922.2133 9.9881,2.1494 13.7893,5.9494 5.1486,5.147 6.7935,12.3589 5.3705,19.0088-6.809-.312-13.3233-3.9665-16.9826-10.3025-2.6804-4.6411-3.2334-9.7937-2.1773-14.6558zm143.699,0c1.0561,4.8621.503,10.0146-2.1773,14.6558-3.6337,6.2918-10.0804,9.9465-16.8374,10.3025-1.4202-6.6498.3668-13.8619 5.5157-19.0088 3.7525-3.7514 8.5726-5.6919 13.499-5.9494zm-162.7137,21.3306c3.9946-.3005 8.3243.4627 12.0475,2.612 6.2937,3.6325 9.8051,10.1765 10.1605,16.9774-6.6213,1.3918-13.7209-.3668-18.8696-5.5141-3.8292-3.828-5.8837-8.781-6.0963-13.785 .9071-.1939 1.8277-.2198 2.7579-.2897zm178.8254,0c1.0132-.0649 1.9043-.075 2.903,0 .9423.0721 1.9843.2371 2.903.4353-.2493,4.9508-2.1616,9.8516-5.9512,13.64-5.1842,5.1826-12.5004,6.9584-19.1598,5.514 .3553-6.8008 3.8669-13.3449 10.1605-16.9774 2.7923-1.6117 6.1051-2.4135 9.1445-2.6119zm-87.9612,9.1417c2.0205,0 4.0862.0966 6.0963.2897 .1449.0144.2912-.0144.436,0 1.3232.1362 2.6059.3603 3.9191.5801 .7785.129 1.5537.2782 2.3224.4353 .5808.1203 1.164.2984 1.7418.4353 1.4568.3416 2.9381.7209 4.3545,1.1608 1.6505.5182 3.3237,1.0839 4.9351,1.7413 1.8941.7727 3.6887,1.6467 5.5157,2.6118 .2854.1492.5881.2818.8709.4353 1.5294.8387 3.0287,1.6368 4.4997,2.6119 .2378.1557.4901.2767.7257.4353 3.2374,2.2083 6.2672,4.8142 9.1445,7.6906 2.3118,2.311 4.4954,4.8425 6.3867,7.4004 .9457,1.2789 1.777,2.5876 2.6127,3.9178s1.5999,2.6884 2.3224,4.063c1.9265,3.6654 3.4889,7.5583 4.6448,11.4633 1.102,3.7227 1.9173,7.4855 2.3224,11.3183 .0216.1874-.0216.3928 0,.5801 .1924,2.0124.2904,3.9296.2904,5.9494 0,1.5149-.036,3.1352-.1456,4.6434-.003.0505.004.0966 0,.1449-.3452,4.4758-1.1809,8.858-2.4676,13.2047-.578,1.9524-1.2778,3.92-2.0321,5.8042s-1.6495,3.6813-2.6127,5.514c-.1506.2854-.2818.5881-.4353.8706-.8512,1.5516-1.7817,3.02-2.7578,4.4983-1.1559,1.7503-2.2803,3.4257-3.6288,5.0787-.1103.1362-.1787.2998-.2904.4353-1.2668,1.5233-2.7893,2.9335-4.2094,4.3532-1.0785,1.0781-2.0602,2.2079-3.1933,3.1923-.2839.2465-.5837.485-.8709.7256-1.433,1.2016-2.9915,2.2827-4.4997,3.3375s-3.071,1.9944-4.6448,2.902c-.3978.227-.7579.5066-1.1612.7256-1.1909.6529-2.407,1.3165-3.6288,1.8864-.6183.2897-1.2584.6018-1.8869.8706-1.0078.4295-2.0236.7864-3.0482,1.1608-.9026.3308-1.8286.5816-2.7578.8706-.0432.0144-.1009-.0144-.1456,0-1.6621.5124-3.3493,1.0744-5.0803,1.4511-.2883.0649-.5845.0865-.8709.1449-.1939.0432-.3863.1067-.5809.1449-.8738.1708-1.7449.3048-2.6127.4353-1.1644.178-2.3116.3236-3.4836.4353-1.9651.1881-3.9911.2854-5.9512.2897-2.0552,0-4.0924-.1009-6.0964-.2897-1.6775-.16-3.4129-.4274-5.0802-.7256-1.8125-.3207-3.6156-.6904-5.3705-1.1608-2.9484-.7954-5.8757-1.8175-8.7091-3.0473-1.4167-.6147-2.8315-1.3081-4.2093-2.0315s-2.7318-1.4901-4.0643-2.3217c-.0915-.0576-.1989-.0879-.2904-.1449-.9382-.5931-1.8538-1.2452-2.7578-1.8864-.8912-.6313-1.7483-1.3487-2.6128-2.0315-.3279-.2594-.694-.4598-1.016-.7256-.1859-.1535-.3964-.2803-.5808-.4353-.4692-.3942-.8466-.8959-1.3063-1.306-.8978-.8007-1.7518-1.6061-2.6127-2.4668-1.418-1.4175-2.8086-2.8422-4.0643-4.3532-.1117-.1355-.1794-.2984-.2904-.4353-1.1699-1.4309-2.313-2.8498-3.3385-4.3532-.1578-.2342-.2803-.4893-.4353-.7255-.6868-1.0365-1.2676-2.1262-1.887-3.1923-.7611-1.3233-1.5109-2.6809-2.1773-4.063s-1.3201-2.7718-1.8869-4.2081c-.5837-1.4784-1.1236-2.9677-1.5967-4.4982-.4583-1.4737-.8136-3.0003-1.1612-4.4983-.3538-1.5298-.6306-3.0739-.8708-4.6434s-.4576-3.1843-.5809-4.7885-.1456-3.1543-.1456-4.7885c0-6.5367.9276-12.7956 2.7578-18.7187 1.2008-3.8861 2.7515-7.6498 4.6448-11.1732 .0577-.1153.2277-.1751.2904-.2897 .9453-1.7304 1.9302-3.4252 3.0482-5.0787 .1585-.2349.2738-.4929.436-.7256 2.1448-3.0901 4.6002-5.9047 7.2576-8.5613 1.4286-1.4281 2.795-2.7759 4.3545-4.0629 .1535-.1268.2803-.3099.436-.4353 2.5963-2.1012 5.5003-3.9818 8.4187-5.6591 1.3602-.7817 2.7876-1.4949 4.2094-2.1766 .4317-.2076.8695-.3834 1.3063-.5801 1.397-.6313 2.7606-1.2104 4.2094-1.7413 1.1882-.436 2.4087-.9407 3.6288-1.3059 .3373-.0994.6774-.196 1.0161-.2904 .7084-.1989 1.4595-.2602 2.1772-.4353 1.2499-.3012 2.5115-.6464 3.774-.8707 1.6765-.3005 3.3621-.56 5.0802-.7255 2.0141-.1939 3.9307-.2904 5.9512-.2904zm-98.4121,15.6715c1.3753.0807 2.8251.3546 4.2093.7255 3.1145.8342 5.9547,2.3742 8.2736,4.3532 .7728.6594 1.5243,1.2724 2.1772,2.0316 1.7973,2.089 3.0769,4.4952 3.9191,7.1101-6.0823,3.1176-13.5197,3.2389-19.8856-.4353-4.6132-2.6626-7.7777-6.8002-9.2896-11.4634 3.2349-1.6819 6.8192-2.5431 10.596-2.3217zm197.9854,0c3.3849-.0216 6.6506.82 9.58,2.3217-1.512,4.6633-4.6765,8.8007-9.2896,11.4634-6.3079,3.6407-13.79,3.6137-19.8857.5801 2.0806-6.5087 7.2915-11.889 14.3699-13.7851 1.7302-.4634 3.5105-.5686 5.2254-.5801zm-99.7184,2.6119c-1.8107.0144-3.6135.2119-5.3706.4353-.7755.0987-1.5592.1521-2.3224.2904-1.258.2212-2.5341.5419-3.7739.8706-.3791.1002-.7844.1794-1.1612.2897-.8641.2602-1.7712.5614-2.6127.8706-.147.0504-.2897.0908-.4353.1449-1.0551.4007-2.0329.8306-3.0482,1.306-.997.4605-1.9361.9132-2.903,1.4511-.9867.5499-1.965,1.1228-2.903,1.7413-.0915.0576-.2011.0843-.2904.1449-.7246.485-1.3393,1.0718-2.0321,1.5961-.3848.3005-.7698.5513-1.1612.8706-.1074.0872-.1845.2025-.2904.2904-1.0823.8854-2.1952,1.7591-3.1933,2.757-.0216.0216.0216.1196 0,.1449-.9304.9345-1.9268,1.9067-2.7579,2.902-.0649.0793-.0793.2104-.1456.2904-1.8632,2.2637-3.4358,4.5996-4.79,7.1102-.6861,1.2718-1.3316,2.5992-1.887,3.9179-.2984.7084-.6104,1.457-.8709,2.1766-.2263.6262-.382,1.2472-.5808,1.8864-.4562,1.4542-.8562,2.8712-1.1612,4.3532-.2292,1.1112-.4367,2.2174-.5808,3.3375-.0432.3474-.1095.6659-.1456,1.0158-.0144.142.0144.2926 0,.4353-.1254,1.3681-.1456,2.8049-.1456,4.208 0,3.4105.3913,6.8247 1.1613,10.1575 .4194,1.8174.9465,3.6061 1.5966,5.3689 .609,1.6519 1.3651,3.3485 2.1772,4.9337 .0721.1326.0757.3034.1456.4353 .7738,1.4732 1.6614,2.8096 2.6128,4.208 1.561,2.2949 3.3293,4.4892 5.3705,6.5298l.1456.1449c1.0465,1.0404 2.1943,1.9703 3.3385,2.9021 .9272.7551 1.9162,1.4974 2.903,2.1766 .5412.374 1.043.8134 1.5966,1.1608 .036.0216.1117-.0216.1456,0 .4209.2623.879.4785 1.3064.7255 1.1443.6601 2.2775,1.3284 3.4836,1.8864 1.389.6428 2.7464,1.2415 4.2093,1.7413 .8116.2825 1.644.4922 2.4676.7255 1.1437.3192 2.3039.6421 3.4835.8706 .1405.0288.294-.0288.4353,0 1.2955.2385 2.5857.4547 3.9191.5801 1.6053.1535 3.1813.3099 4.79.2904 1.3961-.0144 2.7016-.1521 4.0642-.2904 1.5047-.1564 3.015-.4158 4.4997-.7255 .8244-.1722 1.6523-.361 2.4676-.5801 1.0878-.2897 2.1397-.6486 3.1933-1.0157 1.4188-.4944 2.8599-1.1123 4.2094-1.7413 .1376-.0649.2984-.0793.436-.1449 .6983-.3366 1.348-.6407 2.0321-1.0158 .7622-.4137 1.4425-.8502 2.1773-1.3059 1.2488-.7747 2.4658-1.5767 3.6288-2.4668 .1895-.1456.3928-.2875.5808-.4353 .24-.191.4886-.3834.7257-.5801 1.0791-.8901 2.0574-1.9164 3.0482-2.9021 1.0414-1.036 2.1123-2.0585 3.0482-3.1923 .0216-.0288-.0216-.1153 0-.1449 .9797-1.1933 1.9039-2.3359 2.7578-3.6277 1.6129-2.4398 2.9476-5.0925 4.0643-7.8357 1.0758-2.643 1.9096-5.4036 2.4675-8.2711 .5427-2.7902.8709-5.6109.8709-8.5613s-.3315-5.7827-.8709-8.5613c-.5564-2.8642-1.3925-5.6352-2.4675-8.271-.565-1.3858-1.1901-2.7511-1.887-4.063-2.023-3.8451-4.6193-7.4911-7.8381-10.7378l-.1456-.1449c-1.0951-1.0948-2.1661-2.0907-3.3385-3.0473-.2724-.2205-.5931-.3661-.8709-.5801-.1614-.1261-.2724-.312-.436-.4353-.6753-.5066-1.4727-.9816-2.1773-1.4511-.2018-.1348-.3769-.3041-.5809-.4353-.9096-.5859-1.8047-1.0754-2.7578-1.5962-.8542-.467-1.7363-.8997-2.6128-1.3059-.0966-.0432-.1931-.1009-.2904-.1449-.565-.2573-1.1644-.4915-1.7418-.7256-1.3133-.5319-2.6929-1.0449-4.0643-1.4511-1.2047-.3574-2.3842-.6169-3.6288-.8706-.1975-.0432-.3848-.1088-.5809-.1449-1.2652-.2443-2.4945-.4461-3.7739-.5801-.1405-.0144-.2926.0144-.4353,0-1.4252-.1362-2.9223-.2904-4.3545-.2904h-.1456zm-103.0569,23.9425c7.3285,0 13.7319,3.952 17.4181,9.7222-5.0277,4.489-12.168,6.5162-19.1599,4.6434-5.1806-1.3878-9.3572-4.6652-12.0475-8.8515 3.6692-3.3246 8.4618-5.5141 13.7893-5.5141zm206.5493,0c5.3383,0 10.1175,2.1773 13.7893,5.5141-2.6928,4.1751-6.8774,7.4666-12.0475,8.8515-7.1338,1.9108-14.2631-.2515-19.3051-4.9336 3.7509-5.6491 10.327-9.432 17.5633-9.432zm-203.0657,26.6995c5.1448-.036 10.0125,1.9216 13.7893,5.2238 .0504.0432.0951.1009.1456.1449-3.6862,5.7267-10.0896,9.577-17.4181,9.577-5.2544,0-9.9934-2.0134-13.6442-5.2238 2.6662-4.2403 6.6975-7.6024 11.9023-8.9966 1.7302-.4634 3.5105-.7135 5.2255-.7255zm200.7432,0c1.3781.0778 2.68.3546 4.0642.7255 3.1144.8343 6.1292,2.4901 8.4188,4.4983 .7634.6695 1.3791,1.4174 2.0321,2.1766 .6133.7135 1.0889,1.3909 1.5967,2.1766-3.6719,3.3027-8.451,5.3689-13.7893,5.3689-7.2824,0-13.8228-3.7657-17.5633-9.4319 4.0738-3.7121 9.5868-5.8333 15.2409-5.514zm-191.889,24.9582c1.0131-.08 2.0495-.075 3.0481,0 2.8249.2119 5.4834,1.0046 7.9833,2.3217-2.1117,6.4769-7.2924,11.7441-14.3699,13.6399-5.202,1.3935-10.4089.6897-14.8053-1.5961 1.5072-4.712 4.6645-8.939 9.2896-11.6085 2.7923-1.6116 5.8146-2.5172 8.8542-2.757zm178.8254,0c3.9947-.3005 8.1793.6082 11.9024,2.757 4.6826,2.7027 7.9512,6.9697 9.4348,11.7536-4.395,2.2826-9.6082,2.9883-14.8054,1.5962-7.0775-1.8959-12.375-7.2788-14.5151-13.7851 2.499-1.2811 5.2015-2.1126 7.9833-2.3217zm-160.8268,21.4756c1.4362.005 2.7977.1348 4.2093.4353-.3113,6.8096-3.8226,13.3193-10.1605,16.9775-4.5977,2.6536-9.8385,3.1894-14.6602,2.1765 .2486-4.9392 2.1881-9.878 5.9512-13.64 4.0531-4.0519 9.3319-5.9722 14.6602-5.9494zm146.0214,0c5.3544.0009 10.6071,2.0426 14.6602,6.0945 3.7525,3.7513 5.6957,8.57 5.9512,13.4948-4.9056,1.0673-10.2967.5095-14.9505-2.1766-6.338-3.6582-9.8491-10.1678-10.1605-16.9774 1.4612-.3135 3.0108-.436 4.4996-.4353zm-126.1358,16.252c.1427-.007.2926.005.436,0 1.4926,6.6897-.4461,13.9409-5.6609,19.1539-3.7631,3.762-8.5823,5.677-13.499,5.9494-1.0925-4.864-.6493-10.1574 2.032-14.8008 3.5826-6.2032 10.0174-9.856 16.6924-10.3025zm105.8148,0h.1456c6.6749.4468 13.1097,4.0993 16.6923,10.3025 2.6817,4.6434 3.1246,9.9369 2.0321,14.8008-4.8511-.3113-9.6394-2.0909-13.3539-5.8042-5.2162-5.2146-6.9827-12.577-5.5157-19.2991zm-85.9292,11.3182c3.1138,6.0817 3.2384,13.5183-.436,19.8796-2.6702,4.6236-6.9347,7.7794-11.612,9.2867-2.2331-4.3681-2.9769-9.5065-1.5966-14.6557 1.8966-7.0763 7.1642-12.4001 13.6442-14.5106zm66.0436.1449c2.7857.8521 5.3554,2.1772 7.5478,4.0629 3.0375,2.611 5.4191,6.1511 6.5318,10.3025 1.3817,5.1553.5239,10.4043-1.7418,14.8008-4.7487-1.4836-9.0537-4.7506-11.7572-9.4318-3.6389-6.3009-3.6068-13.6839-.5808-19.7344zm-44.1258,5.6591c.0908.1009.1989.186.2904.2897 4.404,5.0343 6.2089,12.0901 4.3545,19.0088-1.3881,5.1791-4.6414,9.3767-8.8542,12.0439-3.3242-3.6696-5.3706-8.4593-5.3706-13.7851 0-7.3451 3.7854-13.8756 9.58-17.5579zm22.4983.1449c5.6661,3.698 9.4348,10.1325 9.4348,17.4127 0,5.3496-2.0541,10.1098-5.3706,13.7851-4.1307-2.7168-7.3393-6.9336-8.709-12.0438-1.8925-7.0607.0576-14.1194 4.6448-19.154z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  spinner: (props: LucideProps) => (
   
    <svg 
      {...props}
      viewBox="0 0 64 64" 
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      fill="none"
      role="status"
    >
    <path
      d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path
      d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    </path>
  </svg>
 ),
 quantum: (props: LucideProps)=>(

  <svg {...props} id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path fill="currentColor" stroke="none" d="m319.734 319.734h192.266v192.266h-192.266z"/><path d="m127.469 256c0-70.986 57.545-128.531 128.531-128.531s128.531 57.545 128.531 128.531h127.469c0-141.385-114.615-256-256-256s-256 114.615-256 256 114.615 256 256 256v-127.469c-70.986 0-128.531-57.545-128.531-128.531z"/></g></svg>
 )
}
