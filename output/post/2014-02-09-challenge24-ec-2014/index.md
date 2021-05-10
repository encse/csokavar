---
title: "Challenge24 Ec 2014"
date: "2014-02-09"
tags: 
  - "geekseg"
coverImage: "ch242.jpg"
---

Ez is [megvolt](http://ch24.org/) tegnap. Az idei csapatunk (a Quxers) szerintem kiváló volt, bár csak ketten voltunk három helyett. Nem találtunk senkit aki elég motivált és alkalmas lett volna harmadik embernek, főleg hogy még rá is kellett volna érnie.

Volt aki szerint gáz, hogy még mindig versenyeken indulunk, de én még nem érzem magam annyira öregnek. Legalább nem butulok el. Addig nincs vele gond, amíg nehéznek találjuk a feladatokat. Márpedig az idei feladatok is nehezek voltak, végül 51-edik helyen végeztünk, egy elég jó hajrával. Látszik hogy két ember kevés, ha lett volna egy jó harmadik, simán bent vagyunk a döntőben.

Négy feladattal tudtunk foglalkozni a tízből a rendelkezésre álló hat óra alatt. Ebből az egyik egy egészértékű programozós feladat volt ([Spy Union](http://ch24.org/ch24static/archive/2014/ec/html/G.html)), ezt gyorsan sikerült megoldanunk. Aztán volt egy olyan ami utazó ügynöknek nézett ki ([Travelling](http://ch24.org/ch24static/archive/2014/ec/html/E.html)) egy kis bonyolítással: az ügynök a Föld körül utazgat, viszont csak kelet felé mehet. Ez megbonyolítja a távolság számítást két pont között. Ráadásul csak kétszer volt szabad átlépni az antimeridánt. Mindez belefért az utazó ügynökbe, de végül kiderült, hogy nem így kellett volna nekiállni, mert van rá valami direktebb, dinamikus programozáson alapuló módszer. Viszont így a nagyágyút bevetve is megoldottunk hat bemenetet a tízből az utolsó órában.

Aztán jutott még idő egy valószínűség számítós feladatra ([Wiretrapping](http://ch24.org/ch24static/archive/2014/ec/html/B.html)), ahol mint kiokoskodtuk egy gráf összes feszítőfáját kellett meghatározni. Ez volt az összes esetek száma, a rossz eseteket meg úgy kaptuk, hogy a gráfból elhagytunk egy élet, és így is megszámoltuk a feszítő fákat. Erre sok idő ráment, mert a buta algoritmus nem futott le rá, végül tovább olvastuk a PDF-et amit találtunk a neten, és kiderült, hogy [visszavezethető](http://en.wikipedia.org/wiki/Kirchhoff's_theorem) a probléma egy mátrix determinánsának kiszámolására.

Az utolsó 20 percben összeírtunk valami szögegyszerű algoritmust egy olyan problémára, ahol az egyes csapatok eredményei egymással versenyeztek ([Image compression](http://ch24.org/ch24static/archive/2014/ec/html/J.html)). Egy képet kellett közelíteni úgy, hogy referencia pontokat vettél fel (itt meg itt legyen ilyen meg ilyen szín). A közelített kép ezeknek a referencia pontoknak a színéből és távolságából esik ki valami átlagszámítással. Mivel a többi csapat se nagyon foglalkozott ezzel, így egész sok pontot kaptunk erre is.

Az idei hangfeldolgozás, ha jól értem egy Doppler effektuson alapuló távolságmérés volt ([Forensics](http://ch24.org/ch24static/archive/2014/ec/html/F.html "Forensics")). Ezzel eljátszottam egy ideig, de nem tudtam értelmes egyenleteket felírni rá, úgyhogy menet közben átnyergeltem egy másik problémára. Két feladatot meg el sem olvastunk, mert már a leírás is túl hosszúnak tűnt. (Mondom, kevés volt az ember, nagyon kellett sietni.)

Jól kitöltöttük az időt, és jól együtt tudtunk dolgozni. Sajnos csak ennyire futotta, pedig tényleg úgy érzem, hogy ott lenne a helyünk a legjobb 30 között. Ha lesz jövőre is energiánk, talán akkor sikerül, bár most azért szerencsénk is volt, mert az utazó ügynökös algoritmust pont két nappal előtte kódoltam le, úgyhogy az megvolt, csak adaptálni kellett.
