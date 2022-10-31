---
title: "Könyvespolc"
date: "2022-10-31"
tags: 
  - "fun"
  - "személyes"
---

2006-ban jött az [ötlet](https://csokavar.hu/blog/2006/10/konyvespolc/), hogy virtuális könyvespolcot készítsek a könyveimből. Akkoriban tényleg sok bepótolni valóm volt, kezdő programozóként el kellett olvasnom mindent, amit általában a programozók el szoktak olvasni. Először a moly.hu-t használtam gyűjtőoldalnak, később váltottam a GoodReads-re. Mindkettőnek van valamifajta API-ja vagy widgetje, amit be tudtam ágyazni a Csókavárra, de mindegyikkel volt valami baj. A moly.hu-n nem volt meg sok szakkönyv, a másikon meg csak 200 könyv fért a widgetbe.

Utóbb a GoodReads-t felvásárolta az Amazon és elkezdték kivezetni az API-t, amit addig használtam, így aztán kénytelen voltam más megoldást találni. Ez lett aztán a [https://github.com/encse/bookshelf](https://github.com/encse/bookshelf) repo. Kezdetben csak egy mezei JSON file volt benne és mellette a borító fotók. Ez nagyon hamar kényelmetlen lett, mert a JSON-t nem jó szerkeszteni, a borítókat meg állandóan méretezgetni kell, szóval körítettem köré egy kis alkalmazást is lit-html segítségével. Ki akartam próbálni a custom web componenteket, mert olyan jól néz ki, hogy írhatok `<my-bookshelf>`-et a html-be.

Minden statikusan működik: kihúzom a repót, elindítok egy local szervert, editálok és pusholok. Erre ráugrik egy Github action, ami kiteszi valahova, ahonnan csak egy Javascriptet kell behúzni, és kész is, működik. Szeretem ezt a megoldást, mert nem kell szórakozni a backuppal, hozza a verziózást, a deployt és nem kell szerver oldalon futtatni hozzá kódot.

Most már semmi akadálya, hogy reviewt is írjak néhány könyvemhez, és [házikönyvtárrá](https://csokavar.hu/konyvespolc) változtassam az egészet.