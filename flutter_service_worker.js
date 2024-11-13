'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "997529e3d0c7132ccb865a73a348182c",
".git/config": "7bbdd4f038ddc1aa20f802b1af4178bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c45ca3b48f3ee9158c3531c9ddb63f8a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "91dd5322a5d7dc3642c2dad7984dc3bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41fa350a7bf032caffe0868141e9327e",
".git/logs/refs/heads/main": "e96b5ebfaebf6dc48b1324afde478bd1",
".git/logs/refs/remotes/origin/main": "dba409201a7f5abb8100b1bb359111f4",
".git/objects/01/bf508a37b0678450becc75e48b2b7bf7273ac1": "6de91458ca645c97dd3ad41ff6fee2d9",
".git/objects/01/e081a4b874604ebf151a0620fe60deb93a0f31": "b0675c5b576ad6a840d4525f10f012af",
".git/objects/02/ba2a9eaecf1c192965804a8edb81bb3bbb4f44": "d72676daa47811e944754056563a9e4d",
".git/objects/03/5edfaf8a3e7b30f7b7e02a13a971fc6f8d23c7": "7485502a2ab91bdcacfae37311c422f5",
".git/objects/03/b933e3665f9b3137762b065d75361ad143a085": "12bd13a1fa7f4cf2afb265d22c9de23e",
".git/objects/05/6b3b6575ef17842bfbd16abeb43293ab540ff6": "6427701729e4024dd3e638df5878eab7",
".git/objects/06/2a134df571c2d4b08024d658019cf4472f89f8": "616c368286b2e410a20d41d29e030c6f",
".git/objects/06/cff4e42e66a64490d1c3fed3fd4215c2939743": "693cc0464c95e7e84e5d15d08ec10d07",
".git/objects/07/fdbc650a6eb81f4e99bd9cdbe0211a10e88329": "fd4f1d1eaf00884f0a519420e4cedb7c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/3602043205c47a9201b8549e272d33134ab479": "9bc1050dc70eb8ee09e37c1ef8a11810",
".git/objects/09/d964aaad82a301a8ce031e04e485fbd8e82503": "0b3fbc72ee651b55dd3dacc54851c9c9",
".git/objects/0a/46c44677a52883892f31b7edb6068ae7d9c25e": "fd0a58ea06c2d338e3297a1f4f82a1bb",
".git/objects/0c/3ffc364229ea37c246f0c66374a22311fbab29": "e2fc7c60c0246b87ed59055b1c3253e7",
".git/objects/0c/d16bba72402f3c95f23e3c49f447c9bedec572": "1e001f084a3ed87554137b35664e182b",
".git/objects/0e/6de24608c9708f898dba4f48a994d02c755164": "f53595d6a5e9f9576092a466bd96bf4c",
".git/objects/0e/78412f1d778314eb74afee5ccd434fe3fb0279": "6de5ac43bbfbaa112a101dc881c4a63c",
".git/objects/10/8a633e9d5820dbfbd4ae0448ed297dcf259cb0": "ec15acbfd289f1aa3a7f8e72fa8b1955",
".git/objects/11/a08bd9a622e22b5d8f795d6193221b7e96d5cf": "a50da286521d35d7c73c27aaee6455e2",
".git/objects/11/baa877e87210bbd3503ebc3aa1c1d14e6a03d5": "ddeff13fad5cdd702af432b6c1a46a2c",
".git/objects/13/9e2dd06e1ad6981cd52d620b8078dc0349ae92": "63ad1718a4df7b84ce0232629bd52368",
".git/objects/14/8d46fd98ca88204a52482f75165d4876e84993": "30bb01fe802de745ccb2ff5992f2ddd5",
".git/objects/16/e7564767914c5ac0b58a8ede3bb55287eba7bf": "7f2fa8d35d54ef4a4ee379c823673d66",
".git/objects/18/86f035eabd4df7637299185827964c240fcc89": "ee8986211a9dd4a81d1a44d6b35813d8",
".git/objects/19/0ad3f5b0cab6c232d5f737a64ef1a832383c7f": "51047580e47321218577a874fa9d3bf6",
".git/objects/19/75a71f81e6705e4b110c1653411d614aabbcce": "62496cf15dc850250ed15e131c87c4ae",
".git/objects/1b/6563bc219822e1586421b6c76f388cd075aeae": "506860d40c156a5ce45ba060b647a42e",
".git/objects/1b/aad56097dba76b313f23abe71faab5655e4276": "7caf4442bed6eb2bfcb4b611cfce5a47",
".git/objects/1e/80ac73f1f10204cea2683bdd468fbb86711230": "a72f771b34d88be2e81c0ab2c24f5fe3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/6958ee0b729f5462fbf1655c445b8eb5e9cb26": "ca86cab299cbe32a07f552a02c74d171",
".git/objects/21/30a703581454d55bcbf00b51402e76327d389a": "e10ef039d0c2249c7c5f0b43af8a00de",
".git/objects/25/0159f6e12b09ef683952a892599cdd011c980d": "19951e2b8c2d527074a11290a76ac66b",
".git/objects/25/01f0d2ae292a7b8853a13045ab6a3ce851cc71": "fb48b48f8ec27a0fd0f374b0627e4f5f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/f23dcc5a3804bb02340acfc5317206d76a95a3": "87cceaae2a971a84c4bf0f6b7f31b57d",
".git/objects/27/fb9f1289d5b1584feefd0e9fd653fb592b84d3": "b73adbca5aadddcf37046b155780ec4c",
".git/objects/28/1c7e0da36c0e23b69f2f437b7026e2b85fe24f": "e636a7b67f340ebdbdeee12306541e56",
".git/objects/28/9e6967df7d3b35ed3a651466082a0955db646e": "4101b7421765a1e5818addaaa0864009",
".git/objects/28/a3068195ffebb3f1b6b2c07a6bff3a8caa12a7": "4994d31a1d5eac4f2726a8d2996536c4",
".git/objects/2a/2d6c5a56289d6da5ea324224f5f6809f190440": "bf79cf161f6f190501ac5f81d86ce00d",
".git/objects/2e/f46b3eba842a514c943d8d61c64e522eb24844": "d753c1df7d1efb063c14bf954aa5e6bf",
".git/objects/30/badfaed57cc2ba9605820214068e054894cc8d": "58158f0e299026d080be7f3c14f21d2e",
".git/objects/31/6f24403d728dd081c9171b9e32bfb2a3971e34": "127cf4e9aa19e793f01889b34bcca5cf",
".git/objects/31/e4c345a680afc45bfce6634574ba64f65834d8": "ce834a33c5349594a8f7fbee0f562c6e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/130cceef625a495cf0f65ae0eaaf97fecf6ed5": "73c3f634f74a79cec07ba4b76289a5c2",
".git/objects/39/226fa87e8ee0481fe362ec70984750b5cd93a4": "704934eb33905ae1b95bb8b626546dd0",
".git/objects/39/b421d398ab1993af33c6610c37ccd77070d51f": "ea4917ea346ee0c7e8edbc12db47094a",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/e7509a27d57f8b5ee6b197d09a07e5bd155b34": "12fdc5ff87eedc34be9cd7cf04429b9a",
".git/objects/3b/5fbf62fd2f3fef17899b624ade4acf0261e4d1": "7db84846ee03845f49064ada9845177d",
".git/objects/3f/7ae70a26cdcc33c84a375380e8b68adf7c6bba": "7421c9941480cf34fa50fdaa3177db13",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/5da0da176f9c6b617c53c526fa3aeb42c1e9e3": "19ff3d3a2b2d7c7ffddd26b5262baedc",
".git/objects/43/613e5a11264de6132708478b225111b072d37e": "bc41d84fd3b70de0d060e867f066746e",
".git/objects/43/c4be327f120044b14b0c0fd76ee6c4a3181116": "75d251f852eb172aab1d0a12477ff656",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/775210f580037bf4b4540696380d61f6eb3bef": "dd0f48f3abb823bb8e3ca0a1b03ff87a",
".git/objects/45/c213adbb9424e9026158a8abbfa93abb5aa777": "d5889268060c428b1ca54adf4af3f3bc",
".git/objects/45/f22eb5fbc41db24dd69d6b0d0cdea4367417e7": "0c017042ebc5f97e7ea92f0a139f83eb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c4c54525f34c5bb746fbaa3c88d8fb3143f5cb": "ca86fc0b66914f04dc7356e0e40c7b13",
".git/objects/49/7d77529ec7f34a2e40272daf482b0df144b546": "7268f68da3e1fdc99a5dd3924532842f",
".git/objects/49/b3bbfd5ef02def550f5a1fc749c045d0fbf73d": "5703102c80d2412629b2f32fe7b5b059",
".git/objects/4a/080ce6e5c6225647afc30be3de6a5f758432af": "5b78a39e5be699da0e6832337d9b2615",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/b1f48aa0e4b9b08b99dff3e777d964171b7d89": "f3a1724ffc6c6fabddb61d2c52a800e7",
".git/objects/4c/cfc58c93b9859e141e3f6c611ec62b15343897": "4ffb80c3b89933d43ec4172c8558451c",
".git/objects/4d/b63ffd065ca779ef6f4899924c2b24be7693b7": "28b26d3ab8b17b83d8432adabf356630",
".git/objects/4d/b92ba0e487d182b3af02502a1070b1ba8a1b8e": "7a9eb810e81e5f550e61d98835fb75d3",
".git/objects/4d/ef3b5c8674fdea5f89d5750a03f4ec72a76ff2": "6deedd812da36ae7ba16176c6ca887f7",
".git/objects/4f/3a714fc35e31f53cf9cc3d3b86dba0704aa7a5": "70bf42547e21536e6cf3e14f464d5233",
".git/objects/4f/74e2e4db2a91f83390f68713b82c023c4a1dcb": "569bd9e2e05d68fc30e20d94259a1a4d",
".git/objects/50/524c0578e71c92d3c86ea80e1effda0a7c318b": "8575c64c933993ea6edb4a0c7b768bc8",
".git/objects/57/99e7ab94358b076d7404729d1e2f2746433231": "6219935b9dacae68fd5e2ca368b64639",
".git/objects/58/e7c81a03e1b6b8b51e3e970fa31c99631ef36c": "7fe336f346891a1b0db3651d0329f29b",
".git/objects/59/7c56c8ef73b8a44b214abe52e3f6b5362f4c61": "722e71e8180c204184b7e701c158c010",
".git/objects/59/eb8d0f62f0ac8163902dcf71f76e7b92b0c137": "162b2007149762324126028390b92538",
".git/objects/5a/6f13d32a685981c21201ef078ad8d4d4985751": "0354c17533e8a372a678ae896722afea",
".git/objects/61/153b9c8a899abed44674b9d87f9e940067bd6e": "cacf7d90f4f5f96fc5762591fde1bc6b",
".git/objects/62/91e5e065f1dbad5359ae2509f9be92d5cf3e94": "d1d2de8ee223d9bfb9b19ec554b99231",
".git/objects/63/439c680e47f60d4e4faef3ab54970794fefb32": "f68b27d816424b6565627bdabfeda62a",
".git/objects/65/5c826aa4f46da07706c570804d1d51e1eb0878": "f5decab12a9f34335e7dec9fe0ca7b12",
".git/objects/66/22e86984ba62859bbeb7f88567c3f8d2640b7f": "ca289f515d2539327dd3c1cf270f6aea",
".git/objects/69/fb14154608739fd019d8090e48d6b3b65b9549": "9ea61b36cd85881535cf34d2a233b427",
".git/objects/6b/869f3e0d704b1f1f5f82a570c796cfbb396f58": "861b72dda5d1f6f4720ffbdfc6209ccb",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/b959716ec17be1d95d2fd756ea894712ea2549": "ed7f636efe351d3b906e63f92d21fb0b",
".git/objects/6e/6de934bac75d23aec85381b20ea3d1dfbf5dda": "633f6522e6a3d7b7d2674d99565e234b",
".git/objects/6f/a4e94d844740f7c88c7fe27b69564f0a8a3927": "db12a5fbee7ac513dc37d8ddb1158f66",
".git/objects/6f/cb448df03317ba4bea4502127800aab6b6f0cc": "c1e0cd7aba4a6d701340be8f4090f8f0",
".git/objects/70/9e557788088f5bf534eb4d03c5cfc00a4dca4c": "80f52ee70cbbbc30fd2aa1b882b44733",
".git/objects/72/b62c22cff6c93e69dfeac93188ddf9feefe358": "c32fd21fe7c006f338c77a98c3ad70e2",
".git/objects/72/eb1a7c289439a843093e555123acf9d4f6af3e": "19fa485ef56c64ddbfd7c7fbd0d0fcd8",
".git/objects/74/761f83a3e96a9bb51109c0978b983014de24e2": "e80720c7d59f128d45f1181fb59a96fb",
".git/objects/76/6a01c5d691ecc73e58d7c6899fe3c1ee11feec": "2061f1f555b8685ea60539a1703ab570",
".git/objects/7a/33230e59a48ed8aa23011b56eecef1a34bc3b2": "45f38704e02b63ab7bf158c9fd14cab5",
".git/objects/7a/84faba662d7c83e3646ddc4288c4d84f5205d6": "6eeba181015396f881e0dce005a3b061",
".git/objects/7b/1fc2e221cda550be45e0ef91faf960ae5156a7": "9b4f885e8d3c474c1dcbe6cd98f1b420",
".git/objects/7b/5dfc4c23e841c22aa790910dcd29d543264405": "a7d3cbdaa138f89f6f937e2c4a79a362",
".git/objects/7b/61d2f7db8bf619b9426937446921e18e88be23": "91ca075b422a90675f0d1b35814f3a69",
".git/objects/7b/f0aaf8c6ca44b4d8277d7e4022eccc42635bf2": "ecbf41320f68632624adea0cbfe73c11",
".git/objects/7c/9984aad5ee84758598899c324d4d4dc95e9cd6": "f9625a30e211a09a13d1095458b1a7c8",
".git/objects/7c/b7a5751f1efa383bc8fed033ebe8f66b99d022": "5a5ffa1602fce54bcc0c757c50057d6b",
".git/objects/7e/d2734ca8e602f5666363957af2a5099a7296dd": "02d64e76427e94f146d8bf67d0879dcb",
".git/objects/7f/b3841237f32cc7c524c7e95ff9ed1e91967c48": "d95cd3bd4493f763d4713561ed3b34dd",
".git/objects/7f/b51fb8a40fbf6475035c918735ac4af45728b5": "7c60c09f922f761063eafa9b5bbacc20",
".git/objects/80/bff43ab2d00f2952eb0d18262682842a0ca25e": "dca6d250e8c6091fbdb1fdb2d335677d",
".git/objects/81/2ec2b2f18524f079ad792bb6e6d7553be56be7": "f52a116290906e909ed2223a66c55eab",
".git/objects/81/437007cb2c05914f92903b8b7bfc05678c8a7e": "fc8d35a6c72fb0a306730d7f5af748d0",
".git/objects/82/9236c60d9c6e1d0c3054f402b08e293b52b87f": "934f9f6497e74efc60715660f9337095",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/2643ef395d2803090f142ca56a9f4c8b7c387d": "e97709325f23caf184ce2374d684175a",
".git/objects/84/38460483528fd76a8812598094c74dcbbea1ec": "d6aea69be0a0beae3845111309e67836",
".git/objects/85/42e4eba123f0b6393e8085b423ba9ac86f764c": "ba805579fbdda4add976aacb42992c5c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/fc4be7b8d44522bcecc83d32253095a91999fd": "47de699309425bacd25783e9fcf2e9d6",
".git/objects/86/97f97ead0221491275329bebc513b2a6c2640c": "344bd72146ba6df95ac12580aeae0a2c",
".git/objects/87/af2e1d27e1aafc14bc119d0cca9aa287bad11a": "d84068c1ac58bd455b7c67338026cffd",
".git/objects/88/aa9810395308d8aa8ed91215b21c50e49ef470": "b4d364e79fca71c1fa0f8dfb65ad9df2",
".git/objects/89/3ded26dde1417aa9a1147fbb052c7a9ee65bb5": "1b7654a18a6a2ed9b4c7bcbafdb49d20",
".git/objects/8d/7f54a46eeaba5e378e8633ac9d2736ca25ea25": "a93d0d774625a2c301ac3acf6e27c6f2",
".git/objects/90/8e3ccc7fe24a4d728abfcc279b7e0e087b5413": "7497c446766e40a1f32936c2f3188133",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/f0c1fc884aaa9817fb33c70558f08a90d89c22": "d999ccf95bef77561ba40940df19ba73",
".git/objects/92/76c30b8985f627978087698357953e9ba535d6": "07157bcfd271b503bb2ecf0e99600112",
".git/objects/93/591db21f525e5890586e434f842a8ce7d52972": "ae476a9e94c7233e26740c5304ec1a5e",
".git/objects/93/b70d53019334567f9f8e6211d60fb221cfb767": "813a0c9affa9a5f4723b1e066045328d",
".git/objects/93/e6b3e4768aa6f2e16985732de392a7365c10ed": "4ff8c389ec1e85149ed822dc651e2171",
".git/objects/94/60776324cf2f00b3205601edfc8417f1b885ef": "9a9519aeab122b1f07ebb62df08b30c0",
".git/objects/95/99af60b30bb712eff223f1d87caeb6f486ce7f": "686fcd825afcb4ff32146567214a4a87",
".git/objects/96/37451edc75a843928b257490b42f641a17779b": "8a08951ae84d7da9b6627c0b8e4dfb1e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/3ef944ac49656818f8631385d025d65eb897c2": "1442bfba990d4e48725eb295498ec658",
".git/objects/99/8943d3cc7da7608f541db2a919f45de7acdfd9": "bdaa8e85fc3191620185e14dbf3cb95e",
".git/objects/99/9c162856c73eaac9e6bd7e6e483d9dafe8daa9": "165e8b5c5eeb177154cc7ca202149209",
".git/objects/9a/5a64ccf7ad745bf92752b2ce1aa3b8187e49d0": "aa50c1146b215683f7e832f0f3746689",
".git/objects/9c/189fd4a650822917ff6ac213f2baba0289e729": "87cd468a568d668d95ce4c85c4db83f2",
".git/objects/9f/ae6dc048cfb6c6f5cf92809bc691d31398b44a": "5abec07db98661f2cb26cb9213d0e929",
".git/objects/a0/16d33b5d645889c55d37e45a6ae489d0866346": "f6fd39283fe0a4c82191cfcd60cf4165",
".git/objects/a2/55062b3eeddb1176e5063b3efcca8ee18f1f92": "097977e18ca482cf36032325338652c6",
".git/objects/a5/09ec95ab49fa5ff1da8a4fe6de19ebfbd4ab47": "03c83b2ef122a5cb9786877dfd356ac3",
".git/objects/a5/e4f4f5aa0de66787fe93e4f3f94873f9e8a7a0": "758d079082c6fcab0df572b9fc3af0e0",
".git/objects/a6/c8a567976c7b76b89875dcbb369dff2cda99be": "10c7787025747783142035414d08e2d9",
".git/objects/a9/6d3218be058fb7b538356a86972af8b7135889": "188e6f1fd184262f303b8f6fbfaa94a5",
".git/objects/a9/9d67e41d5cd425b45ab7819317c9694a739e1d": "8984d714b808dcd4f45087ef403c25ee",
".git/objects/aa/87683eef387baeaee838125646fcbb2509de58": "81318cc8cbeec8542956972901275347",
".git/objects/aa/8d640fafb53d0cff22efe5da8daafcd749bbc0": "34b0551ce0107c6d2505222af7624d85",
".git/objects/ae/71b0f4d6525351a773609c9d480ec37ee46886": "8b9f95c51ae2f89ed6220f3a20b485e7",
".git/objects/b0/14ce712546a7c323977dba43725bce3150077b": "1c740c85bfd7ea6f455252059fbe4f6a",
".git/objects/b1/466a80e75bfad9ec1016cbc2574607aefe706b": "9f601206a693b3778b7f80bce0ceedbf",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/d841d074253dd09b5a66a7212b6e493246e575": "6d65544147f61b621989f360e6c7401b",
".git/objects/b2/edfd63b73fbfc2629429089f96d94444ab9f65": "9f0368a2a18de9820df016b5d601b606",
".git/objects/b7/5e4f1c4ecef9baa71d27c62e1c50cde1b6cd82": "96780f4490c7590e01a2b81bafec5d0a",
".git/objects/b8/b77e45e3db8f28355460ea769426ede89361b8": "fcb73aca4368b3f8b0ebb447afd5d1eb",
".git/objects/b8/fa9ab12277d33ea76a8db2b4519f09ea4ce89c": "e7a87f39d1d9082b0a6cb82cc3549974",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/3446f704a1a50ca2e09ea9fa6965a010583603": "5c8f6b1eb426ad9f490936a81306a8a0",
".git/objects/bb/b1b19590b2606e0207640032f5db27cabe3524": "3b29ebec0195924bc45ce3ab0384023c",
".git/objects/bc/0774106134e7e0985bfb6d57a39888cdaab112": "6e29075d1dc3411aaf2d1f850c7eafef",
".git/objects/bc/5d06771566f46d3711b9d75584945166ae539e": "cab72e0a019d14b6a2d4e0f69af375f4",
".git/objects/bd/aafb4f559283b1d4ab1c4886a735e423856c8c": "5594eaddd8e88480780ec129cbc9a9b8",
".git/objects/be/848b05c54482ea0cbe91f521699e38eebd0ddb": "aaab1272ecb90318b8daaa8e65b481f0",
".git/objects/be/a1cff3e41a0ed545a06d553859f5305b9657db": "40f29ff391e7bd495dd1bb840a987457",
".git/objects/bf/03d149a21ea2577c858fcaf2e6d6371846be43": "ee9f401cfc6d482786e2007921c07a21",
".git/objects/c5/634d8d93a26e3f9e1d0da284e52c1dd2f68f5b": "7883f2a4571bd2ca01fddec977271002",
".git/objects/c7/6703081593209d270198783820f202758a5161": "41c1f548a8c2a1123f1ec92e1daa381d",
".git/objects/c7/7bc5340f090f45aa925611f8c4f7ecfeeef047": "abe277459aa6d36fa3d241ad0c968b0a",
".git/objects/c8/4af9f9f48268d2276d4ab5fa0559e2a14ce27b": "05d69b506ecc44f309c592ce80db8ab3",
".git/objects/cb/3f2b1d8db9e5f8a049f77f98eb5eec330444a9": "dfad1a80ef24048b7b5ed57beea0cc0f",
".git/objects/cb/849022a08853dce3049dc4fc0fa91bbadaef6d": "b9179fc4e189059ab8b5d0e2283a7994",
".git/objects/cc/05ab5e1fb3f9174985204514a3ebed6cd301f8": "56c36deaf9b9c7dd1ff1b69d73881bfe",
".git/objects/cc/ea92d2761972ec45aed75054a4726f0a08dca4": "2954f3bc81b34de48cb6852ce433eb07",
".git/objects/cc/f5c53f3e4a1e3158b27f7bd8bf32e142cad370": "37c52d9af41c7d06cbcbdb6337039dd1",
".git/objects/cd/4a276619cde75675b76c15f5835e42a642aa79": "c9f2c18fe20ed758d492da07a4595736",
".git/objects/cf/9521995e22074b1b25fb2870d00d1e054b5d8f": "fa369bd0c49721e1f1f52db1cac98c30",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/5ec9cfbc01c360fa8aa59e1cf0f349d87e4838": "c5905ec63e63b493947d218e26c790e5",
".git/objects/d1/eb61c52a233616b018f33d802557a63b79b364": "db0ac464926feb3754123e5c0013104a",
".git/objects/d1/ee115624fc7b4ef03cd94b1a6c78124d80b9b2": "3e4caf564054bb3960ad0eb8de0fdb0f",
".git/objects/d3/b760c43edf36779fdd49f0c3ab01d737751eee": "6c1b05ff4491f6b98ac4bb3e4aeef823",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b0bc924c6f1266e050b6a57d03387190df7294": "e2769c324efa00a2bdb92ca9c6b57a6b",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/606d3462d89729b1c4751d8d1084e3e1c5f98f": "841ced69cca914a7f3f3e5ac0f196045",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/e4d93c0a0f4fcb7604814687b01002ada3987e": "34445f7cf69ef787d9b9b9edda006f79",
".git/objects/dd/18a6f84ff180b10d8530dc710d8efbb54cdbad": "e7e442b47e9bd6bde6bf8816a71a0022",
".git/objects/dd/18beb41147d969a4b0c3174bedc3be4624397e": "13e009ea67f22386df0c745a369bd857",
".git/objects/dd/8a003288cd9e315c8f61703b92b6691c4c8a90": "b263b795037cd95e5afd2b727adc79a8",
".git/objects/de/f38894ccd07b8d506761f7f0222b06a21f15be": "3e260c8950f264177bc9790e538c37c8",
".git/objects/df/3498f4466b5480b8a4d2f68d74794ad1cba1fb": "11d9ab1031a98190c4e1233edc41c131",
".git/objects/df/ff9f1ab63a08c8a313a4bcd29c313582524b04": "0597eb376362e8143329c74f69b7e99d",
".git/objects/e1/9b70b05d243097ff964bd702133e7ab943de81": "418ccb9f1dc8de259bb416ac3d5c1418",
".git/objects/e1/fc3a685d603d5e4b664f1edb335f076ca1acaa": "1fb342156feccc7e49e78de6607d26a1",
".git/objects/e2/760272952f96e4736e13ebd89757b97f979cdc": "dc716f32a8b8a759a08e1820a2bb7bd9",
".git/objects/e3/60c334cc08da07f1bc90a2f8c3fa0dc773d097": "784ce505ad5708db9ffd5180a8a308d3",
".git/objects/e5/c1d749c886df243bed7bbc62ff4e8849763364": "553bf2ffbe69177e407fa556b6317db9",
".git/objects/e8/8405f50d8019adf333479b7584f897362dca4d": "d656b6ed6b7a3c6ab6158d8a5bcca026",
".git/objects/e9/5db43412a3749a3efeaecea95fb9a5703e381d": "f285e147ff2422ab856cb4cab53b5a75",
".git/objects/eb/507bea1cb7fb00a30ee77ada1a5aa4f5fcfdcb": "cec10a9a50f3c254d628f05d3638255d",
".git/objects/eb/6dcaa2203fc2440b422d330b71e2086b797f98": "3ac92d5fda7510ee95a7d17fa5e0bf09",
".git/objects/eb/84c92b72ba19609ebf7a594bd0eab8000c7fad": "64826ab1d3ad2cd30c9b65850bc43c75",
".git/objects/ee/a538c6a71b55c4ec421151cf70bbca9b787abf": "d525866b20fdbf296f6de7e670e9f2f7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/058c1e5c5c0786d94b9a0a57e8ab766e3e1583": "6638b6813e056dbb326ec801a974b8a1",
".git/objects/f4/0ba87f25f16c609923031911e2c4f10d392014": "1414a55215db3d2f46cfa89564acc413",
".git/objects/f5/5610fe320b0d04086ee4f0c7b1120e816ee752": "84f78c6c9c96369471847cb2a6ab197b",
".git/objects/f5/69c5f3ae455c5dd58c5a1e4ed8e15acf77cf9f": "07933aa01aae32a994c9c92f9e0461fa",
".git/objects/f5/cd984d469427a5c0f5c4d902be1ed1a866acd9": "af1bdf8d338d5b6ad57d88658a271af4",
".git/objects/f6/14bf89b39d62188e35c710a3c20a841f447bc2": "74ef9ce58cc786756f3c1332922f86b9",
".git/objects/f6/4790ddc0e48042610ff8938501bae89813e5c2": "b210f12699618dfeefe8f14fa398a8e2",
".git/objects/f7/8baf3ea798633a8c7846c66b920d8bc570c7d1": "45ef3586d70193ee86112364fd1d0687",
".git/objects/f7/f184c21962dc7ee74355fac43c268983c08bbb": "268d6968aebb03bc664a7a6f1f6b4f0a",
".git/objects/f9/d736b7c5f96f6229820148ab7aa5fd3a29db73": "9768e6d27ad841f031e19636a93ae063",
".git/objects/fa/4a0b1e3bb3a22721a2aa1cc11e760299d2c82f": "013c3cc0658f08347b952e7f4b295e46",
".git/objects/fa/5a17a38b2d96c26d1ba08d6caadb892718eca4": "a4243ef824b39afff8e7333006d92228",
".git/objects/fb/5a15360ce654507de1c9e66d9b698d678065ee": "4f4d9a9719e0686ef6025ec164ebacc6",
".git/objects/fe/30dc8bdb940a702251eeedf5aa62b16737b31f": "a82a93d187fc46f2155a826321afac2d",
".git/objects/ff/a39e9d95e277dbbe53618fb3c3b1b690a52ab9": "c8a4e3e95337e8536437d3ad61c277e3",
".git/ORIG_HEAD": "1bb9605c121e49cedbbe3364e9ecb259",
".git/refs/heads/main": "1bb9605c121e49cedbbe3364e9ecb259",
".git/refs/remotes/origin/main": "1bb9605c121e49cedbbe3364e9ecb259",
"assets/AssetManifest.bin": "7e04eb9e5cf9704942d6bfb7d856c1b3",
"assets/AssetManifest.bin.json": "d554f884437490ccc7ecb0aa547634a0",
"assets/AssetManifest.json": "5db1410b228b183a328ddbcb57f0030d",
"assets/assets/imgs/bags.jpeg": "7c49a0340a0e249b0f67e41b575fbd84",
"assets/assets/imgs/bags1.jpeg": "18ec775c762bf257fc187b2e713a37b0",
"assets/assets/imgs/bags2.jpeg": "822b8d85a9484bf0cec69a9418e5751b",
"assets/assets/imgs/logo.png": "99aad750d271108b7cb5c1329e5a89bf",
"assets/assets/imgs/main.jpeg": "4709404daf3f21ae14bc97faef9cab96",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "85ea18e50e070ab8d59de14f5a5e4ce1",
"assets/NOTICES": "bb70d308aec7100da8f3382437be1766",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "99aad750d271108b7cb5c1329e5a89bf",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0bd768e33094d2020711ddd6776451b1",
"index.html": "133912e3b208ea748aaa2a6c42711b3b",
"/": "133912e3b208ea748aaa2a6c42711b3b",
"main.dart.js": "3455d6157dc25ed765ae23946fdff2c4",
"manifest.json": "0723c3ccd4fd7c67a4ab0cc7905208b9",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
