---
title: "Két programozó a buszon"
date: "2006-05-25"
tags: 
  - "busz"
  - "feladat"
  - "geekség"
  - "logika"
---

Lukáccsal jöttünk fel Budapestre a hétvégén. Mikor kifogytunk a témából feldobott egy jó gondolkodós feladatot, bosszúból én is egyet. (Mégis mi mást csinálna két programozó a szabadidejében?)

1\. Ez állítólag Google felvételi feladat, mármint olyan felvételi beszélgetésre való. Értik...

Van egy 1 dimenziós bolygó (számegyenes), amire ledobunk két robotot, és közéjük egy bóját:

```
---------R----------B-------------------R---------------
```

A robotok tudnak jobbra/balra menni, mindkét irányba két sebességgel. Ezen kívül ácsoroghatnak is. Van véges memóriájuk. Nem kommunikálhatnak egymással.

Feladat: adjunk algoritmust arra, hogy megtalálják egymást.

Az pl. nem jó, hogy az egyik robot áll, a másik pedig jobbra-balra megy egyre nagyobb kitéréssel, hiszen csak véges nagy a memóriája, a másik robot pedig bármilyen messze lehet. Tehát, ha túl messze van, akkora kitérést már nem tud szegény robot fejben tartani.

2\. Adott egy n x m-es mátrix. A mátrix elemei izzók. Ezek lehetnek ki- vagy bekapcsolt állapotban. Műveletek: a mátrix bármelyik sorában ill. oszlopában egyszerre átállíthatjuk a lámpákat. Pl. egy 3x3-as mátrixban, először az első oszlopot, majd az első sort átállítva ezt kapjuk:

```
011
100
100
```

Probléma: szépen le volt kapcsolva az összes lámpa, mikor Agresszív Pistike egy óvatlan pillanatban (iskola helyett) összevissza kapcsolgatta a őket. 

Állítsuk vissza a kiindulási állapotot!
