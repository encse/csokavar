---
title: "Kockák metszete"
date: "2014-01-04"
tags: 
  - "fun"
  - "geekseg"
  - "grafika"
coverImage: "cubes.gif"
---

Az egyetemen volt egy olyan beadandó, amiben két kocka metszetét kellett megjeleníteni. Egy egész hétvégét eltöltöttem vele, mire kész lett. Kiszámoltam egy poliédernek és egy féltérnek metszeteként létrejövő poliédert. Így az egyik kockát mint poliédert a másik kockát határoló félterekkel egyesével elmetszve megkaptam a végeredményt. Ezt utána már csak ki kellett rajzolni.

Na de mennyi számolási hibám volt, és milyen bonyolult lett a végeredmény. Most, hogy összebarátkoztam a ray traceléssel, ismét elővettem a feladatot, és lényegesen egyszerűbben és átláthatóbban sikerült megoldani. Tulajdonképpen csak annyi a dolgunk, hogy a képernyő egyes pontjain átmenő egyenesekre meghatározzuk a kockákkal vett legközelebbi és legtávolabbi metszéspontot, így kapunk egy vagy két szakaszt, esetleg elfajuló esetben pontot. Aztán megnézzük, hogy van-e átfedés. Ha igen, máris találtunk egy metszéspontot.

Még egy kis alpha blending, és néhány forgató mátrix, és kész is a [végeredmény](https://csokavar.hu/projects/raymarch/cubes/), ami megint csak Chrome és Firefox böngészőkben működik, mert ismét webgl-t használtam hozzá.

\[iframe src="//csokavar.hu/projects/raymarch/cubes/"\]

A forráskód githubon is [elérhető](https://github.com/encse/raymarch), ha bárkit édekel az ilyesmi.
