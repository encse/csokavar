---
title: "Gekkó tesztek"
date: "2013-01-01"
tags: 
  - "gekko"
coverImage: images/maxresdefault-1.webp
---

Egy játékos írt pár napja, hogy biztos minden rendben van-e a Gekkó adathalászós pályájával, mert nem akar napokig egy nem működő feladattal szívni. Megnyugtattam, hogy igen minden OK, mert kipróbáltam miután összeraktam a szervert, de ezen felbuzdulva allokáltam magamnak három gyerekalvásnyi időt, és csináltam egy kis móricka automatizált tesztelést hozzá.

Végtelenül hulladék az egész, mondom, csak pár órám volt rá. Viszont az eredmény elég korrekt. Pár pillanat alatt végignyomkodja az oldalt, megnézi az egyes feladatokat jó válasszal, rossz válasszal. Megoldja a hackelős feladatokat ahogy elképzeltem a megoldást. Tényleg jópofa.

Mivel eddig semmi tesztelés nem volt, és amúgy is fejlesztési időre optimalizáltam, kezdettől fogva end-to-end tesztben gondolkodtam. Így aztán kliens oldalon, ahol lehet Seleniumot használok, begépeltetem vele a formokba amit fel akarok küldeni, ellenőrzöm, hogy a válaszoldalon ott vannak-e azok a stringek, amiknek ott kell lennie. Egyszerű, de működik.

Szerver oldalon is kellett némi segítség. Szerencsére használhattam azt az API-t, ami egy felhasználóról visszaadja, hogy hány XP-je, HP-je van éppen vagy hány feladatot oldott meg stb. De emellett kellett még valami gettó interfész, amin keresztül a tesztelő felhasználó jellemzőit lehet állítgatni: legyen ennyi meg ennyi XP-je, HP-je és tegyük fel, hogy megoldotta X feladatot, vagy éppen hogy még nem oldotta meg. Egyszerű HTTP POST-on keresztül működik, és mivel csak egy felhasználót lehet vele bizergálni, még authentikáció sem kellett hozzá.

Meg is lett tegnap délutánra, de akkor még nem ment minden teszt, ami meglepett, mert a gépemre feltelepített oldalon semmi hibát nem talált. És végül kiderült, hogy megérte az egész, mert tényleg találtam valamit: a mysql meg a php nem ugyanabban az időzónában futottak, ez okozta a félreértést.
