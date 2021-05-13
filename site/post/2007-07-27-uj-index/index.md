---
title: "Új index"
date: "2007-07-27"
tags: 
  - "geekseg"
---

Az [index](http://www.index.hu/) új kinézete már négy nappal a bevezetés után kihúzta a gyufát, legalábbis ami a reklámokat illeti. Nagyon elszúrták a cikkek közepébe ékelt hirdetéseket, ugyanis folyamatosan elfelejtem átgörgetni őket.

Aztán elhatároztam, hogy mindenféle adblocker/greasemonkey plugin nélkül, a puszta IE-vel fogom megoldani a dolgot. (Hozzátartozik, hogy most húztam újra a gépet, és még nem barmoltam szét mindenhonnan letöltött spyware-rel.) Szóval user stylesheetek. Ezt ugyebár a gyengénlátóknak találták fel eredetileg, hogy letilthassák a csillivilli stylesheeteket, és jó nagy, kontrasztos betűket csináljanak maguknak, de szerintem még nem volt olyan ember, aki használta volna a feature-t. Gondolom minden épeszű ember normálisan testreszabható firefoxot használ, meg a böngészőbe épített zoomot.

Én viszont szeretem a kihívásokat, és kis trükközés után a következő eredményre jutottam:

userContent.css:

/\*Index hirdetések kiírtása\*/
div.hirdetes,
div.hirdetes\_container,
div.hirdetes\_bottom,
div.hirdetes\_container\_bottom,
#superbanner\_container,
#ads,
#also\_bannerek
{
    display:none;
}

Ezután a userContent.css-t az Eszközök/Internet Beállítások/Kisegítő lehetőségek lapon a Dokumentumok formázása saját stíluslappal-nál szépen betöltöttem. Azóta alig akad egy-egy hirdetés az indexen.

Ami azt illeti, nem túl szofisztikált ez a stylesheet dolog a Microsoftnál. Most minden betöltött oldalra ugyanezt a stylesheetet fogja alkalmazni, tehát mondjuk az origo.hu lapjain is ezt. Magyarán egy kalap szar a dolog. Mondjuk játéknak azért jó volt...
