---
title: "A robot"
date: "2007-06-09"
tags: 
  - "geekség"
  - "robot"
  - "szeretem"
---

Pénteken egy ügyes húzással belegyömöszöltem a laptop táskába a [LEGO Mindstorms](http://en.wikipedia.org/wiki/Lego_Mindstorms) készletünket, és kicsempésztem az irodából. Reggel fél háromig játszottam vele. Utána kicsit lepihentem, de hajnali hétnél tovább nem sikerült bírni, úgyhogy folytattam, ahol abbahagytam.

Először csináltam egy f�sza robotot, ami a múltkori közös próbálkozásunkkal ellentétben TUD kanyarodni.

Ezután jöhetett a programozás. LEGO robotot NQC-ben (is) szokás programozni, amiről azt kell tudni, hogy nagyon fapados nyelv. A név kifejtése Not Quite C, de szerintem a C-re csak a szintaxisa hasonlít.

Hogy érezzük miről is van szó: függvények nincsenek. Van _sub_rutin, de ebből csak összesen 8 tárolható a robotban. Aztán van még _inline függvény_, aminek a sub-tól eltérően lehetnek paraméterei, de visszatérési értéke ennek sincs. A trükk az, hogy a függvény törzse fordításkor a hívás helyére másolódik, amivel kicselezhető a firmware szabta nyolcas korlát, cserébe viszont hamarabb kifogyunk a memóriából...

Mivel a nyelv csak az int-et ismeri adattípusként, lebegőpontos műveletek nincsenek. Így aztán már egy szimpla kerekítési problémán is gondolkodni kell. Pozitív számokra ugye 0.5-öt hozzáad az ember, és elhagyja a tizedesjegyeket. Ez még éppen érthető, de ehhez képest itt még az osztás előtt hozzá kell adni a számlálóhoz a nevező felét. Brrr.

Hogy mondjak valami jót is: vannak párhuzamosan futtatható taszkok. Bár erre egyelőre nem volt szükség. (Gondolom az is gagyi egyébként.)

Mindenesetre megcsináltam pár algó+robot változatot a vonalkövetés problémára. Ez amolyan Hello World! robotéknál. Adott egy fehér háttéren, egy annál sötétebb színű, önmagába záródó vonal. Ezen kell egy fényérzékelővel felszerelt robotot elveztetni.

A legegyszerűbb megoldás talán a következő:

```
while true
    if <az érzékelő a vonalon van> then
        <kanyarodjunk jobbra>
    else
        <kanyarodjunk balra>
```

Ehhez csak a fenti érzékelést, és a két cselekvést végrehajtani képes robotra van szükségünk. Hallgatólagosan feltettük azt is, hogy a robotunk nem helyben kanyarodik, hanem, mondjuk egy autóhoz hasonlóan, kanyarodás közben kicsit előre is halad.

Ha minden jól ment, akkor robotunk szépen cikkcakkban végig fog menni a vonal jobb szélén.

Jó, jó, de honnan tudjuk, hogy az 'érzékelő a vonalon van'? Először a fényérzékelővel bemérjük a vonal fényességét (mondjuk 29%), meg a háttér fényességét (55%), az kettő átlaga 42%. Ha a fényérzékelő ennél kevesebbet mutat, úgy ítéljük meg, hogy a vonalon vagyunk:

```
<az érzékelő a vonalon van> = ÉRZÉKELŐ_PILLANATNYI_ÁLLAPOTA < ÁTLAG
```

A manuális kalibrálásnál jópofább, ha a robot magától tanulja meg az értékeket. Ehhez csak az érzékelő eddigi minimum és maximum értékeit kell tárolni, amiből az ÁTLAG számolható.

Fejleszhetünk az algoritmuson úgy is, hogy a fényességi tartományt 2 helyett 3 részre osztjuk, és a középsőben a robot előre halad. Aztán lehet még tovább bontogatni, és az egyes tartományokhoz különböző kanyarodási sebességeket rendelni.

[youtube src="t-lXlGYnikk"]

_Itt aludtam el._

Reggel elkezdtem kutatni a .NET-es kommunikáció után. A fő célom ezúttal egy Morse-kód leolvasó robot elkészítése volt, ami a végén feltölti PC-re az adatokat, és a gép ebből kiszámolja a szöveges megfelelőt. (Ezt még [Verseny24](http://verseny24.sch.bme.hu/)\-en kellett megoldanunk annó 2002-ben.)

Találtam egy [microsoftos blogot](http://blogs.msdn.com/coding4fun/archive/2006/10/26/877488.aspx), ahol készítettek egy wrappert a LEGO Mindstorms SDK-s robot-PC kommunikáció köré. Ezzel közvetlenül lehet a robotot irányítani, azaz nem kell NQC-vel szívni. C#-ban megírja az ember, amit szeretne, a framework pedig infrán lekommunikálja az egészet a robottal. Talán mondanom se kell, mekkora felüdülést jelentenek az NQC után az olyan apróságok, mint pl., hogy a szenzorok változásáról egy .NET event formájában kapok hírt, vagy hogy a kib\*szott kerekítéshez meghívhatom a `Math.Round()` metódust...

Sajnos semmi sincs ingyen, két kommunkációval kapcsolatos hátránya azért van a dolognak:

1. nagyon lassú
2. az adatok közvetítéséhez az infra portoknak végig látni kell egymást. Kanyargó robotnál ez gondot jelenthet.

Szerencsére, a Morse olvasásnál elég egyenesen előre menni, és jókora fogaskerék áttétekkel nagyon lassan haladó robot is lehet építeni, így mindkét probléma orvosolható. Már csak egy darab parkettát kellett találnom a pincében, meg szigetelőszalagot, hogy felvéshessem a HELLO szó betűit, amit aztán másodikra sikerült is dekódolni.
