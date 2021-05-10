---
title: "Heti feladat"
date: "2013-10-04"
tags: 
  - "feladat"
  - "geekseg"
coverImage: "photo.jpg"
---

Tegnap elkezdtem a Courserán egy [kriptográfia tanfolyamot](https://www.coursera.org/course/crypto). Biztos jó lesz, de sajnos már megy egy pár hete, így rögtön egy hónap lemaradással indulok, szóval össze kell kapnom magamat.

Ettől teljesen függetlenül arra gondoltam, hogy néhány kisebb-nagyobb gekkóra való feladatot feladhatnék itt a Tisztelt Olvasóimnak, hátha érdekli Önöket egy kis játék. Ezeket a továbbiakban heti feladat címen fogom írni. Nem lesz egy nagyon gyakori rovat, de bízom benne, hogy ahogy eddig is sikerült, néha azért kitalálok majd valamit.

Elsőnek egy érdemtelenül ismeretlen hibára hívnám fel a figyelmet. Mármint a nálam jobb szakembereknek ez nyilván a kisujjában van, de én még csak kb. másfél éve ismerem. Valahogy kimaradt abból az időszakból, amikor még napi szinten toltam a hackelős játékokat.

A feladat az, hogy szeretnénk valamilyen adatot eltárolni a látogatónk gépén, ez lehet mondjuk egy süti, vagy mint látni fogjuk, egy sima URL paraméter. Lényeg a lényeg: nem akarjuk, hogy a látogató átírhassa ezt az adatot. Az ötlet az, hogy fogunk valami titkos prefixet (mondjuk foobar), hozzácsapjuk a leküldendő adatot (almafa) és az egészet behasheljük valami frankó kis hash függvénnyel (sha256). A hash-t a továbbiakban Message Authentication Code-nak hívjuk (MAC), és az almafával együtt leküldjük a kliensre.

Tehát ez megy le: `almafa, hash("foobaralmafa")`

Amikor a látogató felküldi az adatot, a mac-et is mindig elküldi vele. Mivel nem ismeri a titkos prefixünket, ezért ha az almafát körtefára cseréli, nem fogja tudni a helyes mac-et mellé rakni, és kiderül a turpisság.

Vagy mégsem?

Készítettem egy [pici oldalt](https://csokavar.hu/projects/heti-feladat/), ahol megpróbálhatunk magunkból admint csinálni. Próbálják ki, tisztelt programozó barátaim!

Az induláshoz ez elég, több segítséget egyelőre nem adok, de kérdésekre válaszolok. Azért kapják elő a kereső ösztöneiket!
