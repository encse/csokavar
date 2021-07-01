---
title: "Diophantosz"
date: "2012-12-15"
tags: 
  - "feladat"
  - "geekség"
  - "logika"
  - "matematika"
coverImage: images/Fermat-3-11.webp
---

A következő jópofa feladaton gondolkoztam a héten viszonylag sokáig. Határozzuk meg azokat az $x,y$ pozitív egész számokat, amelyekre teljesül, hogy:

$$| 2^x-3^y | =17$$

Ez egy diofantoszi egyenlet, de túl sok ötletem nem volt, hogyan is kezdjek neki. Mert az ilyenekről mindig azt hallottam, hogy próbáljuk meg valahogy szorzattá alakítani, aztán meglátjuk mi lesz belőle. Hát ez itt most nem megy, viszont kis szemlélődés után észrevesszük, hogy $17 = 8+9$, amivel talán lehet kezdeni valamit. Az abszolútértékkel a $\pm$ szimbólum segítségével elbánva:

$$2^x-3^y = \pm(8 + 9) = \pm8 \pm9$$

Amiből: 

$$2^{x} \mp 8 = 3^{y} \pm9$$

Kézzel ellenőrizhető, hogy $x <3$ és $y<2$ nem megoldásai az egyenletnek, így a kiemelést elvégezve is egész számok szerepelnek a zárójelek között:

$$8 (2^{x-3} \mp 1) = 9 (3^{y-2} \pm 1)$$

Kis hunyorítás után észrevehetjük, hogy a baloldali zárójelben szereplő kifejezésnek kilenccel, a jobboldalinak pedig nyolccal oszthatónak kell lennie.

Nincs mese, írjuk fel kettő és három hatványait moduló kilenc illetve nyolc:

 | $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | 
 |-----|-----|-----|-----|-----|-----|-----|-----|-----|
 | $2^n\ mod\ 9$ | $1$ | $2$ | $4$ | $8$ | $7$ | $5$ | $1$ | $2$ | 
 | $3^n\ mod\ 8$ | $1$ | $3$ | $1$ | $3$ | $1$ | $3$ | $1$ | $3$ | 

Az alsó sorból látszik, hogy $3^n + 1$ sosem lesz nyolccal osztható, így egyenletünk a következő esetre redukálódik: 

$$8 (2^{x-3} + 1) = 9 (3^{y-2} - 1)$$

Mivel a kettőhatvány sorozat 6 szerint periodikus, a táblázat alapján csak a $2^{3+6n} + 1, n \in \mathbb{N}_0$ alakú számok oszthatók kilenccel. Hasonlóan a $3^{2m} - 1, m \in \mathbb{N}_0$ alakúak oszthatók nyolccal. Ezt összevetve a fentiekkel $x-3 = 3 + 6n$ és $y-2 = 2m$ miatt x és y is páros kell legyen.

Az most még nem nyilvánvaló miért, de én egy kicsit többet néztem már ezt a feladatot, mint Önök, és nagyon megörültem neki amikor idáig eljutottam, mert ezzel mégiscsak szorzattá tudjuk alakítani a fránya egyenletet.

Keressük ugyanis a megoldást $x=2l,\ y=2k$ alakban:

$$3^{2k} - 2^{2l} = 17$$

Hohó, ez négyzetek különbsége:

$$(3^{k} - 2^{l})(3^{k} + 2^{l}) = 17$$

$17$-nek nincs sok osztója, hiszen prím, így a szorzat egyik tényezője $\pm 1$, a másik pedig $\pm 17$ kell legyen. Így már csak ezt kell megoldanunk, amiből kiderül, hogy csak az $x = 6$ és $y = 4$ megoldásai az egyenletnek.

Nekem az tetszik ebben a feladatban, hogy két ötlet is kell hozzá, az első a hatványsorozat maradékaival, amiből már sok minden kiderül (kizártuk a $2^x-3^y$ alakú megoldásokat, és elég határozott elképzelésünk lett $x$-ről és $y$-ról), de ez még nem elég, mert rá kell jönni a szorzattá alakítós trükkre is. Jellemző, hogy pár perc alatt kitaláltam az elejét, aztán még napokig gondolkodtam rajta a buszon.

_Elnézést a Chrome használóktól, de mindenféle [gondjai vannak](https://groups.google.com/forum/?fromgroups#!topic/mathjax-users/dV_TmJ1QMO4) a webfontokkal szegénynek mostanában. Azért néznek ki ilyen csúnyán a matematikai kifejezések..._
