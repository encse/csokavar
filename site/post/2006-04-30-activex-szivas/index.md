---
title: "ActiveX szívás"
date: "2006-04-30"
tags: 
  - "geekség"
---

Ezt el ne felejtsem megemlíteni cs-nek legközelebb, ha a szofverszabadalmakról kérdez.

Kedves M$ barátunk elvesztett egy szabadalmi pert a "weboldalba ágyazott activex kontrolok automatikus aktiválásáról". Jól hangzik, igaz? Nyilván nem csak azért indítanak egy ilyen pert, hogy némi pénzt csikarjanak ki a nagyemberből... Nyilván. A dolognak a következménye az lett, hogy a Microsoft megváltoztatta az IE ActiveX kezelését: most nem aktiválódnak maguktól a kontrollok.

Most azt hiszik, valami random implementációs detailről beszélek, és ilyennel halandó ember úgysem találkozik. Ez sajnos nem igaz. Lásd pl. index.hu, vigyük csak az egeret egy flash reklám fölé:

![flash_ad](images/flash_ad.webp) 

"Az aktiváláshoz és használathoz kattintson a vezérlőre." Erről van szó. Flashnél még nem is annyira gáz a helyzet. A Wildcat oldal viszont tele van .mov videókkal, amit csak a szintén ActiveX-es Quicktime Playerrel lehet lejátszani. Mit gondolnak ott hogy sikerült implementálni a dolgot? Vajon ilyen diszkrét módon, vagy sikerült valami elbaszott megoldást választani? NA? Szabad a gazda?

Ha az oldal quicktime komponenseket tartalmaz, egy idegesitő dialog box jön fel, egyetlen OK gombbal, és a következő szöveggel: "Kattintson ide az ActiveX vezérlő futtatásához ezen a webhelyen." (click to run an ActiveX control on this webpage) De ez még nem elég, ugyanis _minden egyes komponenst külön-külön engedélyezni kell._ Ha tehát két videó van, akkor kétszer kell leokézni. Csodálatos.

De: **van megoldás**, és ehhez csak a _világ összes_ quicktimeot tartalmazó oldalát kell módosítani. Az Apple már ki is adott [egy kis tutorialt](http://www.apple.com/quicktime/tutorials/embed.html) a témában. Eddig egy .mov fájl beágyazása valami ilyesmi volt html-ben:

```
...
<object classid="clsid:02BF25D5..." ...>
<param name="src" value="sample.mov"></object>
...
```

nem valami szép, de legalább kifejezi az intenciót ugye. Márminthogy itten valami külső stuffal megjelenítendő dolog van (sample.mov). Ebből mindenki tudja, mi a téma. W3c ajánlás, meg ami kell. Még együtt is élnék vele. (Az egy másik kérdés, hogy az Operához hasonló low quality browserek miatt egy sima beágyazás eddig is kb 20 sor volt, mert ő nem hajlandó enni ezt a formátumot.)

Az Apple workaroundja (egyébként az ms-től vették) egyszerűen hihetetlen. Ahelyett, hogy kiadnának egy újabb verziót a szánalmas lejátszójukból, ami legalább annyira működik, mint a flash player, a következő tréfát eszelték ki: a fenti objektes mókát mostantól nem szabad html-ben leírni, hanem külső javascript fájlból _kell_ begenerálni. Pl. _document.writeln()_ használatával:

**InsertMovie.js**
```
function InsertSampleMovie()
{
        document.write('<object classid="clsid: 02BF25D5..." ...>');
        document.write('<param name="src" value="sample.mov" />');
        document.write('</object>n');
}
```

**index.html**
```
<html>
<head>
<script src="InsertMovie.js" language="JavaScript" 
        type="text/javascript"></script>
</head>
<body>
<!-- object-es móka helyett:-->
<script language="JavaScript" type="text/javascript">
        InsertSampleMovie();</script>
</body>
</html>
```

Magyarul a következőről van szó: basszuk meg szépen a tiszta reprezentációt, használjunk javascriptet, az mostanában úgyis megint divatos (AJAX ugye). Ezzel az ocsmány gusztustalan hackkel sikerült megkerülni a szabadalmi vitát. Jó-jó, én se akarnék fizetni valami random cégnek, de azért ez mégse nevezhető megoldásnak.

A híres Apple meg teszi alá a lovat. Ahogy mondtam, a lejátszón is módosíthattak volna, az ugyanis nem gáz, ha mondjuk duplán kell kattintani az ablakon ha le akarok játszani egy videót. De nem. Ők tesznek a Windows felhasználókra. (Csak azt nem értem, hogy akkor minek ajánlgatják a tutorialt)

Az egésznek pedig én iszom meg a levét, mert most generálhatom bele a hacket az oldalba.

Nevetséges.
