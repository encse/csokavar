---
title: "Web 2.0 - Intentional programming"
date: "2006-10-14"
tags: 
  - "geekseg"
  - "isc"
  - "zsonglorkodes"
---

Mivel már évek óta az intentional bizniszben utazom ([www.intentionalsoftware.com](http://www.intentionalsoftware.com/)), nem csoda, ha a hétvégi projektben sem tudok teljesen elszakadni tőle. :)

Adott ugye az én kis honlapom a [Wildcat Zsonglőr Oldalak](http://zsonglor.csokavar.hu/), ami a webkettes korszellemnek megfelelően nyitott az olvasók hozzászólásaira. Eddig csak a szokásos dolgokat támogattam: szöveget, szmájlikat és linkeket lehetett beszúrni, mígnem azt vettem észre, hogy két látogató egymásnak próbál elmagyarázni valami zsonglőr trükköt, de sehogy se jutnak dűlőre:

> \- \[...\] meg lehet próbálni 4 labdával kaszkádolni uúgy, h villanással kezded, aztán keresztbe dobálod...mind1...érthetőbb lesz ha megpróbáljátok... \[...\]
> 
> \- A kaszkádot 4el nem érdemes gyakorolni, inkább azt csináld hogy 2őt jobbal kettőt ballal dobsz és mindig keresztbe...Egyébként ha megy az 5labda flash onnan szerintem még legalább fél év hogy stabilan menjen az 5labda...
> 
> \- A szétválásra gondolsz? azt már tudom,és sztem a 4 labdás kaszkád hasznos,mármint amikor az jól megy,akkor 5 labdával is jól megy.Persze,lehet h semmit nem fejleszt,de azért szerintem nem árt ha tudom
> 
> \- Nem a szétválósra gondolok...kettőt dobsz jobbal majd kettőt ballal megint kettőt jobbal stb...és minden labdát keresztbe dobsz...
> 
> \- Tehát multiplex kaszkád? Nem igazán értem,mert ahhoz hogy mindig 2-t tudjak dobni keresztbe,6 labdát kell dobálni. vagy nem?

_Intentional szemmel nézve_ a probléma az, hogy nincsenek megfelelő fogalmaik a trükkök meghatározására. A legtutibb az lenne, ha mindketten ismernék mindkét trükk nevét, de egyrészt ők még kezdők, másrászt a zsonglőrök világában mindennek ezer neve van, és sajnos a legtöbb névhez több trükk is kapcsolódik. Teljes káosz, így marad a körülírás, de az meg, mint látható, nem elég pontos. (Ezért van az, hogy az oldalamon minden trükknek van neve, van hozzá leírás és videó is. Ez aránylag jól definiálja őket.)

A zsonglőr trükkök leírásának másik eszköze a siteswap notation. Ez egy számokból, betűkből és kölönböző zárójelekből álló nyelv, amivel a trükkök egy elég nagy osztálya röviden és pontosan kifejezhető. Sajnos a siteswap tömörsége miatt nem kifejezetten alkalmas emberi fogyasztásra, így két szék közül a pad alá esnénk, ha nem lennének a különböző zsonglőr szimulátorok. Ezek képesek animációként megjeleníteni egy-egy siteswap kódot.

Nyilvánvaló, hogy a helyzeten egy a zsonglőrködés domainjére nézve specifikus szolgáltatás segítene a legjobban, és erre a zsonglőr szimulátorokat érdemes használni.

Webprogramozásban ez így néz ki szépen:

- készítettem egy új oldalt (juggle.php), ahol egy zsonglőr szimulátorral lehet játszani

- a kommentező form aljára odabiggyesztettem egy linket, ami megnyitja ezt az oldalt.

- a juggle.php érzékeli, ha a kommentező formból nyitják meg, és felajánlja az éppen szimulált trükk beillesztését a komment mezőbe.

- a beillesztés egy a juggle.php-re mutató url formájában történik, ami paraméterként tartalmazza a lejátszandó trükk siteswap kódját.

A dolog már így is működne, elég a hozzászólásban az így beillesztett linkre kattintani, és máris látható minden, de miért ne menjünk egy lépéssel tovább:

- a kommentező motor az ilyen url-eket felismeri, és helyettük egy-egy zsonglőr szimulátort jelenít meg, a siteswap kóddal felparaméterezve.

### Releváns linkek

- [zsonglor.csokavar.hu/juggle.php](http://zsonglor.csokavar.hu/juggle.php)
- [www.siteswap.net](http://www.siteswap.net/)
