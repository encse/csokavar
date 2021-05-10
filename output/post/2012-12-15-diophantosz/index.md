---
title: "Diophantosz"
date: "2012-12-15"
tags: 
  - "feladat"
  - "geekseg"
  - "logika"
  - "matematika"
coverImage: "Fermat-3-11.jpg"
---

A következő jópofa feladaton gondolkoztam a héten viszonylag sokáig. Határozzuk meg azokat az \[latex\]x,y\[/latex\] pozitív egész számokat, amelyekre teljesül, hogy:

$$|2^x-3^y|=17$$

Ez egy diofantoszi egyenlet, de túl sok ötletem nem volt, hogyan is kezdjek neki. Mert az ilyenekről mindig azt hallottam, hogy próbáljuk meg valahogy szorzattá alakítani, aztán meglátjuk mi lesz belőle. Hát ez itt most nem megy, viszont kis szemlélődés után észrevesszük, hogy \[latex\]17 = 8+9\[/latex\], amivel talán lehet kezdeni valamit. Az abszolútértékkel a \[latex\]\\pm\[/latex\] szimbólum segítségével elbánva:

$$2^x-3^y = \\pm(8 + 9) = \\pm8 \\pm9$$

Amiből: $$2^x \\mp 8 = 3^y \\pm 9 $$

Kézzel ellenőrizhető, hogy \[latex\]x <3\[/latex\] és \[latex\]y<2\[/latex\] nem megoldásai az egyenletnek, így a kiemelést elvégezve is egész számok szerepelnek a zárójelek között:

$$8 (2^{x-3} \\mp 1) = 9 (3^{y-2} \\pm 1)$$

Kis hunyorítás után észrevehetjük, hogy a baloldali zárójelben szereplő kifejezésnek kilenccel, a jobboldalinak pedig nyolccal oszthatónak kell lennie.

Nincs mese, írjuk fel kettő és három hatványait moduló kilenc illetve nyolc:

<table><tbody><tr><td>[latex]n[/latex]</td><td>[latex]0[/latex]</td><td>[latex]1[/latex]</td><td>[latex]2[/latex]</td><td>[latex]3[/latex]</td><td>[latex]4[/latex]</td><td>[latex]5[/latex]</td><td>[latex]6[/latex]</td><td>[latex]7[/latex]</td></tr><tr><td>[latex]2^n\ mod\ 9[/latex]</td><td>[latex]1[/latex]</td><td>[latex]2[/latex]</td><td>[latex]4[/latex]</td><td>[latex]8[/latex]</td><td>[latex]7[/latex]</td><td>[latex]5[/latex]</td><td>[latex]1[/latex]</td><td>[latex]2[/latex]</td></tr><tr><td>[latex]3^n\ mod\ 8[/latex]</td><td>[latex]1[/latex]</td><td>[latex]3[/latex]</td><td>[latex]1[/latex]</td><td>[latex]3[/latex]</td><td>[latex]1[/latex]</td><td>[latex]3[/latex]</td><td>[latex]1[/latex]</td><td>[latex]3[/latex]</td></tr></tbody></table>

Az alsó sorból látszik, hogy \[latex\]3^n + 1\[/latex\] sosem lesz nyolccal osztható, így egyenletünk a következő esetre redukálódik: $$8 (2^{x-3} + 1) = 9 (3^{y-2} - 1)$$

Mivel a kettőhatvány sorozat 6 szerint periodikus, a táblázat alapján csak a \[latex\]2^{3+6n} + 1, n \\in \\mathbb{N}\_0 \[/latex\] alakú számok oszthatók kilenccel. Hasonlóan a \[latex\]3^{2m} - 1, m \\in \\mathbb{N}\_0\[/latex\] alakúak oszthatók nyolccal. Ezt összevetve a fentiekkel \[latex\]x-3 = 3 + 6n\[/latex\] és \[latex\]y-2 = 2m\[/latex\] miatt x és y is páros kell legyen.

Az most még nem nyilvánvaló miért, de én egy kicsit többet néztem már ezt a feladatot, mint Önök, és nagyon megörültem neki amikor idáig eljutottam, mert ezzel mégiscsak szorzattá tudjuk alakítani a fránya egyenletet.

Keressük ugyanis a megoldást \[latex\]x=2l,\\ y=2k\[/latex\] alakban:

$$3^{2k} - 2^{2l} = 17$$

Hohó, ez négyzetek különbsége:

$$(3^{k} - 2^{l})(3^{k} + 2^{l}) = 17$$

\[latex\]17\[/latex\]-nek nincs sok osztója, hiszen prím, így a szorzat egyik tényezője \[latex\]\\pm 1\[/latex\], a másik pedig \[latex\]\\pm 17\[/latex\] kell legyen. Így már csak ezt kell megoldanunk, amiből kiderül, hogy csak az \[latex\]x = 6\[/latex\] és \[latex\]y = 4\[/latex\] megoldásai az egyenletnek.

Nekem az tetszik ebben a feladatban, hogy két ötlet is kell hozzá, az első a hatványsorozat maradékaival, amiből már sok minden kiderül (kizártuk a \[latex\]2^x-3^y\[/latex\] alakú megoldásokat, és elég határozott elképzelésünk lett \[latex\]x\[/latex\]-ről és \[latex\]y\[/latex\]-ról), de ez még nem elég, mert rá kell jönni a szorzattá alakítós trükkre is. Jellemző, hogy pár perc alatt kitaláltam az elejét, aztán még napokig gondolkodtam rajta a buszon.

_Elnézést a Chrome használóktól, de mindenféle [gondjai vannak](https://groups.google.com/forum/?fromgroups#!topic/mathjax-users/dV_TmJ1QMO4) a webfontokkal szegénynek mostanában. Azért néznek ki ilyen csúnyán a matematikai kifejezések..._
