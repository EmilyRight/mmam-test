var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},o=i.parcelRequire052b;null==o&&((o=function(i){if(i in e)return e[i].exports;if(i in t){var o=t[i];delete t[i];var n={id:i,exports:{}};return e[i]=n,o.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(i,e){t[i]=e},i.parcelRequire052b=o),o.register("2Yl7J",(function(i,e){!function(t,o){var n="function",s="undefined",r="object",a="string",l="model",c="name",d="type",u="vendor",h="version",b="architecture",m="console",w="mobile",p="tablet",f="smarttv",v="wearable",g="embedded",y="Amazon",x="Apple",k="ASUS",S="BlackBerry",T="Browser",A="Chrome",E="Firefox",L="Google",_="Huawei",M="LG",q="Microsoft",H="Motorola",C="Opera",P="Samsung",z="Sharp",N="Sony",O="Xiaomi",D="Zebra",I="Facebook",U=function(i){for(var e={},t=0;t<i.length;t++)e[i[t].toUpperCase()]=i[t];return e},j=function(i,e){return typeof i===a&&-1!==R(e).indexOf(R(i))},R=function(i){return i.toLowerCase()},$=function(i,e){if(typeof i===a)return i=i.replace(/^\s\s*/,""),typeof e===s?i:i.substring(0,350)},B=function(i,e){for(var t,s,a,l,c,d,u=0;u<e.length&&!c;){var h=e[u],b=e[u+1];for(t=s=0;t<h.length&&!c;)if(c=h[t++].exec(i))for(a=0;a<b.length;a++)d=c[++s],typeof(l=b[a])===r&&l.length>0?2===l.length?typeof l[1]==n?this[l[0]]=l[1].call(this,d):this[l[0]]=l[1]:3===l.length?typeof l[1]!==n||l[1].exec&&l[1].test?this[l[0]]=d?d.replace(l[1],l[2]):o:this[l[0]]=d?l[1].call(this,d,l[2]):o:4===l.length&&(this[l[0]]=d?l[3].call(this,d.replace(l[1],l[2])):o):this[l]=d||o;u+=2}},F=function(i,e){for(var t in e)if(typeof e[t]===r&&e[t].length>0){for(var n=0;n<e[t].length;n++)if(j(e[t][n],i))return"?"===t?o:t}else if(j(e[t],i))return"?"===t?o:t;return i},V={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},W={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,h],[/opios[\/ ]+([\w\.]+)/i],[h,[c,C+" Mini"]],[/\bopr\/([\w\.]+)/i],[h,[c,C]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[c,h],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[c,"UC"+T]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[h,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[h,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[c,"IE"]],[/yabrowser\/([\w\.]+)/i],[h,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure "+T],h],[/\bfocus\/([\w\.]+)/i],[h,[c,E+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[c,C+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[c,C+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[c,"MIUI "+T]],[/fxios\/([-\w\.]+)/i],[h,[c,E]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 "+T]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+T],h],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[c,h],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,I],h],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[c,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[c,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[c,A+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,A+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[c,"Android "+T]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[h,F,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[c,E+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[c,h],[/(cobalt)\/([\w\.]+)/i],[c,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[b,"amd64"]],[/(ia32(?=;))/i],[[b,R]],[/((?:i[346]|x)86)[;\)]/i],[[b,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[b,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[b,"armhf"]],[/windows (ce|mobile); ppc;/i],[[b,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[b,/ower/,"",R]],[/(sun4\w)[;\)]/i],[[b,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[b,R]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[u,P],[d,p]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[u,P],[d,w]],[/\((ip(?:hone|od)[\w ]*);/i],[l,[u,x],[d,w]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[u,x],[d,p]],[/(macintosh);/i],[l,[u,x]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[u,_],[d,p]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[u,_],[d,w]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[u,O],[d,w]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[u,O],[d,p]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[u,"OPPO"],[d,w]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[u,"Vivo"],[d,w]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[l,[u,"Realme"],[d,w]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[u,H],[d,w]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[u,H],[d,p]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[u,M],[d,p]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[u,M],[d,w]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[u,"Lenovo"],[d,p]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[u,"Nokia"],[d,w]],[/(pixel c)\b/i],[l,[u,L],[d,p]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[u,L],[d,w]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[u,N],[d,w]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[u,N],[d,p]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[u,"OnePlus"],[d,w]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[u,y],[d,p]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[u,y],[d,w]],[/(playbook);[-\w\),; ]+(rim)/i],[l,u,[d,p]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[u,S],[d,w]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[u,k],[d,p]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[u,k],[d,w]],[/(nexus 9)/i],[l,[u,"HTC"],[d,p]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[u,[l,/_/g," "],[d,w]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[u,"Acer"],[d,p]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[u,"Meizu"],[d,w]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[u,z],[d,w]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[u,l,[d,w]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[u,l,[d,p]],[/(surface duo)/i],[l,[u,q],[d,p]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[u,"Fairphone"],[d,w]],[/(u304aa)/i],[l,[u,"AT&T"],[d,w]],[/\bsie-(\w*)/i],[l,[u,"Siemens"],[d,w]],[/\b(rct\w+) b/i],[l,[u,"RCA"],[d,p]],[/\b(venue[\d ]{2,7}) b/i],[l,[u,"Dell"],[d,p]],[/\b(q(?:mv|ta)\w+) b/i],[l,[u,"Verizon"],[d,p]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[u,"Barnes & Noble"],[d,p]],[/\b(tm\d{3}\w+) b/i],[l,[u,"NuVision"],[d,p]],[/\b(k88) b/i],[l,[u,"ZTE"],[d,p]],[/\b(nx\d{3}j) b/i],[l,[u,"ZTE"],[d,w]],[/\b(gen\d{3}) b.+49h/i],[l,[u,"Swiss"],[d,w]],[/\b(zur\d{3}) b/i],[l,[u,"Swiss"],[d,p]],[/\b((zeki)?tb.*\b) b/i],[l,[u,"Zeki"],[d,p]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[u,"Dragon Touch"],l,[d,p]],[/\b(ns-?\w{0,9}) b/i],[l,[u,"Insignia"],[d,p]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[u,"NextBook"],[d,p]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[u,"Voice"],l,[d,w]],[/\b(lvtel\-)?(v1[12]) b/i],[[u,"LvTel"],l,[d,w]],[/\b(ph-1) /i],[l,[u,"Essential"],[d,w]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[u,"Envizen"],[d,p]],[/\b(trio[-\w\. ]+) b/i],[l,[u,"MachSpeed"],[d,p]],[/\btu_(1491) b/i],[l,[u,"Rotor"],[d,p]],[/(shield[\w ]+) b/i],[l,[u,"Nvidia"],[d,p]],[/(sprint) (\w+)/i],[u,l,[d,w]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[u,q],[d,w]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[u,D],[d,p]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[u,D],[d,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[u,l,[d,m]],[/droid.+; (shield) bui/i],[l,[u,"Nvidia"],[d,m]],[/(playstation [345portablevi]+)/i],[l,[u,N],[d,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[u,q],[d,m]],[/smart-tv.+(samsung)/i],[u,[d,f]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[u,P],[d,f]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[u,M],[d,f]],[/(apple) ?tv/i],[u,[l,x+" TV"],[d,f]],[/crkey/i],[[l,A+"cast"],[u,L],[d,f]],[/droid.+aft(\w)( bui|\))/i],[l,[u,y],[d,f]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[u,z],[d,f]],[/(bravia[\w ]+)( bui|\))/i],[l,[u,N],[d,f]],[/(mitv-\w{5}) bui/i],[l,[u,O],[d,f]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[u,$],[l,$],[d,f]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,f]],[/((pebble))app/i],[u,l,[d,v]],[/droid.+; (glass) \d/i],[l,[u,L],[d,v]],[/droid.+; (wt63?0{2,3})\)/i],[l,[u,D],[d,v]],[/(quest( 2)?)/i],[l,[u,I],[d,v]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[u,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[l,[d,w]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[d,p]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,p]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,w]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[u,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[c,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,h],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[c,[h,F,V]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[c,"Windows"],[h,F,V]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,"Mac OS"],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,h],[/\(bb(10);/i],[h,[c,S]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[c,E+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[c,"webOS"]],[/crkey\/([\d\.]+)/i],[h,[c,A+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[c,"Chromium OS"],h],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,h],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[c,h]]},G=function(i,e){if(typeof i===r&&(e=i,i=o),!(this instanceof G))return new G(i,e).getResult();var n=i||(typeof t!==s&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:""),m=e?function(i,e){var t={};for(var o in i)e[o]&&e[o].length%2==0?t[o]=e[o].concat(i[o]):t[o]=i[o];return t}(W,e):W;return this.getBrowser=function(){var i,e={};return e[c]=o,e[h]=o,B.call(e,n,m.browser),e.major=typeof(i=e.version)===a?i.replace(/[^\d\.]/g,"").split(".")[0]:o,e},this.getCPU=function(){var i={};return i[b]=o,B.call(i,n,m.cpu),i},this.getDevice=function(){var i={};return i[u]=o,i[l]=o,i[d]=o,B.call(i,n,m.device),i},this.getEngine=function(){var i={};return i[c]=o,i[h]=o,B.call(i,n,m.engine),i},this.getOS=function(){var i={};return i[c]=o,i[h]=o,B.call(i,n,m.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(i){return n=typeof i===a&&i.length>350?$(i,350):i,this},this.setUA(n),this};G.VERSION="1.0.33",G.BROWSER=U([c,h,"major"]),G.CPU=U([b]),G.DEVICE=U([l,u,d,m,w,f,p,v,g]),G.ENGINE=G.OS=U([c,h]),typeof e!==s?(i.exports&&(e=i.exports=G),e.UAParser=G):typeof define===n&&define.amd?define((function(){return G})):typeof t!==s&&(t.UAParser=G);var Y=typeof t!==s&&(t.jQuery||t.Zepto);if(Y&&!Y.ua){var X=new G;Y.ua=X.getResult(),Y.ua.get=function(){return X.getUA()},Y.ua.set=function(i){X.setUA(i);var e=X.getResult();for(var t in e)Y.ua[t]=e[t]}}}("object"==typeof window?window:this)}));var n={};
/*! WOW - v0.1.4 - 2014-03-03
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var i,e=function(i,e){return function(){return i.apply(e,arguments)}};i=function(){function i(){}return i.prototype.extend=function(i,e){var t,o;for(t in i)null!=(o=i[t])&&(e[t]=o);return e},i.prototype.isMobile=function(i){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(i)},i}(),this.WOW=function(){function t(i){null==i&&(i={}),this.scrollCallback=e(this.scrollCallback,this),this.scrollHandler=e(this.scrollHandler,this),this.start=e(this.start,this),this.scrolled=!0,this.config=this.util().extend(i,this.defaults)}return t.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},t.prototype.init=function(){var i;return this.element=window.document.documentElement,this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length?this.disabled()?this.resetStyle():"interactive"===(i=document.readyState)||"complete"===i?this.start():document.addEventListener("DOMContentLoaded",this.start):void 0},t.prototype.start=function(){var i,e,t,o;for(e=0,t=(o=this.boxes).length;t>e;e++)i=o[e],this.applyStyle(i,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)},t.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},t.prototype.show=function(i){return this.applyStyle(i),i.className=i.className+" "+this.config.animateClass},t.prototype.applyStyle=function(i,e){var t,o,n;return o=i.getAttribute("data-wow-duration"),t=i.getAttribute("data-wow-delay"),n=i.getAttribute("data-wow-iteration"),i.setAttribute("style",this.customStyle(e,o,t,n))},t.prototype.resetStyle=function(){var i,e,t,o,n;for(n=[],e=0,t=(o=this.boxes).length;t>e;e++)i=o[e],n.push(i.setAttribute("style","visibility: visible;"));return n},t.prototype.customStyle=function(i,e,t,o){var n;return n=i?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",e&&(n+="-webkit-animation-duration: "+e+"; -moz-animation-duration: "+e+"; animation-duration: "+e+";"),t&&(n+="-webkit-animation-delay: "+t+"; -moz-animation-delay: "+t+"; animation-delay: "+t+";"),o&&(n+="-webkit-animation-iteration-count: "+o+"; -moz-animation-iteration-count: "+o+"; animation-iteration-count: "+o+";"),n},t.prototype.scrollHandler=function(){return this.scrolled=!0},t.prototype.scrollCallback=function(){var i;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,t,o,n;for(n=[],e=0,t=(o=this.boxes).length;t>e;e++)(i=o[e])&&(this.isVisible(i)?this.show(i):n.push(i));return n}.call(this),!this.boxes.length)?this.stop():void 0},t.prototype.offsetTop=function(i){var e;for(e=i.offsetTop;i=i.offsetParent;)e+=i.offsetTop;return e},t.prototype.isVisible=function(i){var e,t,o,n,s;return t=i.getAttribute("data-wow-offset")||this.config.offset,n=(s=window.pageYOffset)+this.element.clientHeight-t,e=(o=this.offsetTop(i))+i.clientHeight,n>=o&&e>=s},t.prototype.util=function(){return this._util||(this._util=new i)},t.prototype.disabled=function(){return!1===this.config.mobile&&this.util().isMobile(navigator.userAgent)},t}()}).call(n);var s=o("2Yl7J");const r=()=>{const{userAgent:i}=navigator,e=new(0,s.UAParser);let t="unknown";return"Huawei"===e.getDevice().vendor&&(t="huawei"),/android/i.test(i)&&(t="android"),"Apple"===e.getDevice().vendor&&(t="ios"),t};var a=function(){const i=r();document.body.classList.add(`platform_${i}`),function(){const i=r(),e={ios:"https://redirect.appmetrica.yandex.com/serve/315401363163010541",android:"https://redirect.appmetrica.yandex.com/serve/388180713033187193",huawei:"https://redirect.appmetrica.yandex.com/serve/244065662866049837"};let t=e.android;"ios"===i?t=e.ios:"huawei"===i&&(t=e.huawei)}()};function l(i){return`0${i.toString(16)}`.substring(-2)}function c(i){const e=new Uint8Array((i||40)/2);return window.crypto.getRandomValues(e),Array.from(e,l).join("")}var d=class{constructor(){this.scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),this.clientHeight=document.documentElement.clientHeight,this.fullEventData={},this.scrollGtm=new Set([10,30,50,70,90])}handleClick(i){const e="js-gtm-event",t=i.target.classList.contains(e)?i.target:i.target.closest(`.${e}`);if(t){const i=t,e={eventAction:"click",eventLabel:i.getAttribute("data-event")||null,eventLocation:i.getAttribute("data-section")||null,eventContext:i.getAttribute("data-context")||null,eventCategory:i.getAttribute("data-event-category")||"Interactions"};this.gaPush(e)}}handleScroll(){const i=window.scrollY/(this.scrollHeight-this.clientHeight)*100;this.scrollEvt(i)}scrollEvt(i){this.scrollGtm.forEach((e=>{i>=e&&(this.scrollGtm.delete(e),this.scrollEventPush(e))}))}scrollEventPush(i){const e={eventAction:"scroll",eventLabel:`scrollPage-${i}%`,eventCategory:"Interactions"};this.gaPush(e)}gaPush(i){this.fullEventData={eventLabel:i.eventLabel,eventLocation:i.eventLocation||null,eventContext:i.eventContext||null,hitsTime:Date.now(),requestId:c(7),firingOptions:"onesPerEvent",event:"event",eventStream:"flight",eventAction:i.eventAction,eventCategory:i.eventCategory,eventContent:i.eventContent||null,eventValue:i.eventValue||null,ecommerce:null,ecommerceAction:!1,noninteraction:!1};try{dataLayer.push(this.fullEventData)}catch(i){console.log(this.fullEventData)}}addEventListeners(){document.body.addEventListener("click",this.handleClick.bind(this)),document.addEventListener("scroll",(()=>{this.handleScroll()}))}};const u=[{id:1,timecode:50,timecodeStart:50,timecodeFinish:1159,title:"Эрик Булатов. Живу дальше. Лаборатория художника"},{id:2,timecode:1160,timecodeStart:1160,timecodeFinish:1401,title:"Коллекция Фонда Still Art. Шедевры мировой фотографии моды"},{id:3,timecode:1402,timecodeStart:1402,timecodeFinish:1722,title:"Модницы XIX&nbsp;&mdash; начала&nbsp;ХХ века. Из&nbsp;коллекции МАММ"},{id:4,timecode:1723,timecodeStart:1723,timecodeFinish:1932,title:"Спорт в&nbsp;фотографии. От&nbsp;Родченко до&nbsp;наших дней"},{id:5,timecode:1933,timecodeStart:1933,timecodeFinish:2082,title:"Алексей Каллима. Теорема дождя"},{id:6,timecode:2082,timecodeStart:2082,timecodeFinish:2338,title:"Константин Батынков, Сергей Шеховцов. Футбол"},{id:7,timecode:2339,timecodeStart:2339,timecodeFinish:2724,title:"Дар музею. Памяти Юрия Рыбчинского"}],h="Вступление";var b=class{constructor(i){this.audio=i,this.minutesHTML=document.querySelector(".timer__minutes"),this.secondsHTML=document.querySelector(".timer__seconds"),this.currentMinutesHTML=document.querySelector(".timer__current-minutes"),this.currentSecondsHTML=document.querySelector(".timer__current-seconds"),this.timeStampTitle=document.querySelector(".timestamps__title"),this.playBtn=document.querySelector(".dashboard__play-btn"),this.dashboard=document.querySelector(".dashboard"),this.dashboardPannel=document.querySelector(".dashboard__pannel"),this.timeStampsArray=Array.from(document.querySelectorAll(".timestamp-item")),this.timeStampTitle.innerHTML=h;const{duration:e}=this.audio;this.duration=e,this.isPlaying=!1,this.minutes=0,this.seconds=0,this.currentMinutes=0,this.currentSeconds=0,this.interval=null,this.currentTime=this.audio.currentTime,this.setInitialTimer()}toggleEqualizer(){this.isPlaying?this.dashboard.classList.add("isPlaying"):this.dashboard.classList.remove("isPlaying")}setInitialTimer(){const i=this.audio.duration-this.audio.currentTime;this.minutes=Math.floor(i/60),this.seconds=Math.floor(i%60),this.minutesHTML.innerHTML=`${this.minutes>=10?this.minutes:`0${this.minutes}`}`,this.secondsHTML.innerHTML=`${this.seconds>=10?this.seconds:`0${this.seconds}`}`,this.setDashboardStyles()}setCustomTimer(){this.currentMinutes=Math.floor(this.audio.currentTime/60),this.currentSeconds=Math.floor(this.audio.currentTime%60)}removeActiveTimestamp(){this.timeStampsArray.forEach((i=>{i.classList.contains("_active")&&i.classList.remove("_active")}))}setActiveTimestamp(){this.timeStampsArray.forEach(((i,e)=>{const{timecodeStart:t,timecodeFinish:o,title:n}=u[e];this.audio.currentTime>=t&&this.audio.currentTime<o?(i.classList.add("_active"),this.timeStampTitle.innerHTML=n):i.classList.remove("_active")}))}setTimer(){this.interval=setInterval((()=>{this.currentSeconds+=1,60===this.currentSeconds&&(this.currentSeconds=0,this.currentMinutes+=1),this.audio.currentTime>=this.audio.duration?this.endAudio():(this.currentSecondsHTML.innerHTML=this.currentSeconds>=10?this.currentSeconds:`0${this.currentSeconds}`,this.currentMinutesHTML.innerHTML=this.currentMinutes>=10?this.currentMinutes:`0${this.currentMinutes}`,this.setDashboardStyles(),this.setActiveTimestamp())}),1e3)}setDashboardStyles(){const i=this.audio.currentTime/this.duration*100;this.dashboardPannel.style.background=`linear-gradient(to right, #3fcbff 0%, #3fcbff ${i}%, #65707b ${i}%, #65707b 100%)`,this.dashboardPannel.value=i}playAudio(){this.isPlaying=!0,clearInterval(this.interval),this.setTimer(),this.audio.play(),this.toggleEqualizer(),this.setDashboardStyles()}stopAudio(){this.isPlaying=!1,this.audio.pause(),clearInterval(this.interval),this.toggleEqualizer()}endAudio(){this.currentSeconds=0,this.currentMinutes=0,this.currentSecondsHTML.innerHTML="00",this.currentMinutesHTML.innerHTML="00",this.isPlaying=!1,this.audio.pause(),clearInterval(this.interval),this.toggleEqualizer(),this.currentTime=0,this.audio.currentTime=0,this.setDashboardStyles(),this.removeActiveTimestamp(),this.timeStampTitle.innerHTML=h}init(){this.playBtn.addEventListener("click",(()=>{this.isPlaying?this.stopAudio():this.playAudio()})),this.dashboardPannel.addEventListener("input",(()=>{const i=this.dashboardPannel.value/100*this.audio.duration;this.audio.currentTime=i,this.currentTime=i,this.setCustomTimer(),this.playAudio()})),this.timeStampsArray.forEach((i=>{i.addEventListener("click",(()=>{const{time:e}=i.dataset;this.audio.currentTime=Number(e),this.setActiveTimestamp(),this.setCustomTimer(),this.playAudio()}))}))}};const m=new d;function w(i){const e=i.getBoundingClientRect().top+window.scrollY+0;window.scrollTo({top:e,behavior:"smooth"})}document.addEventListener("DOMContentLoaded",(()=>{var i;a(),(new(0,n.WOW)).init(),m.addEventListeners(),document.querySelectorAll(".current-year").forEach((i=>{i.innerHTML=(new Date).getFullYear().toString()})),function(){const i=document.querySelectorAll(".js-go-next"),e=document.querySelectorAll("section");i.forEach((i=>{i.addEventListener("click",(()=>{const t=i.closest("section");let o;e.forEach(((i,n)=>{i===t&&(o=e[n+1],w(o))}))}))}))}(),i=document.querySelector(".section-about"),"#about"===window.location.hash&&w(i)})),window.addEventListener("load",(()=>{const i=document.querySelector("#audio");new b(i).init()}));