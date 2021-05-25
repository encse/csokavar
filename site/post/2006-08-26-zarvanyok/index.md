---
title: "Zárványok"
date: "2006-08-26"
tags: 
  - "geekség"
  - "zárványok"
coverImage: images/4-abra.jpg
---

Vannak ilyen evolúciós zsákutcák az informatikában. Csak foltozgatják őket évek óta, de nem vezetnek sehova. Vajon kinek jó az, hogy a harmadik évezredben még DOS alatt fut a cége ügyviteli szofvere? Biztos, hogy azóta semmit sem találtak fel, ami esetleg hasznos lenne? Mást ne mondjak: egér for free? Hmm? Egynél több program futtatása? Vágólap? Tucatnyi használható windows control? Nyomtató megosztása? Egyáltalán: támogatott nyomtatás? Együttműködő alkalmazások? Neeem az már tényleg túl durva lenne. Inkább Mari néni kinyomtatja ami kell, aztán begépeli Excelbe, ha már a főnöknek mindenképp grafikon kell a bevétel alakulásáról. Havonta egyszer úgyis elég...

Ez persze jöhetne éppen emailben is minden hónapban magától. Vagy ott díszeleghetne a képernyőn automatikusan percre készen. Annyi ilyen kis google, meg tököm tudja milyen, gadgetet lehet találni manapság. Dehát az mán tényleg science fiction lenne...

Hála Istennek, eddig nem kellett ilyenekkel játszanom. Jókat röhögtem a [The Old New Thing](http://blogs.msdn.com/oldnewthing/archive/2006/01/09/510781.aspx "The Old New Thing") bejegyzésein, amikor szegény programozók vért izzadnak, hogy a régi, szarul megírt, alkalmazások működjenek a Windows új verzióval. [Joel](http://www.joelonsoftware.com/articles/APIWar.html "Joel On Software") oldalán találtam egy sztorit a SimCity DOS-os verziójáról. Ez kicsit szabadon értelmezte a memóriakezelést, és itt-ott az előzőleg már felszabadított memóriát használta. A Microsoft fejlesztői aztán kénytelenek voltak külön memóriakezelő rutint írni az oprendszer következő verziójába, ami érzékelte, ha a SimCity futott, és olyankor kicsit másképp működött...

A múlt héten vettem egy DVD felvevőt, ami már felvétel közben le tudja játszani a film elejét (vagy egy másik filmet DVD-ről vagy winchesterről). Ha valaki csönget, csak megnyomom a PAUSE-t és _megáll az élő TV adás_. Ugyanígy állt meg az idő, amikor öcsém előhozakodott azzal, hogy izzítsam már be a HP1100-as lézernyomtatóját DOS alá. Bazeg. Akkoriban még fel se fedezték a lézert!

### Nyomtatás DOS-ban

Csak azért írom le, hátha lesz még egy szerencsétlen, ugyanezzel a problémával. Kezdjük az alapoknál. Látszik a nyomtató a párhuzamos porton?

C:> dir >lpt1

Semmi. Aztán még háromszor elküldtem neki, mire megtelt egy oldal a kis agyában, és kiköpött egy lapot tele szebbnél szebb vigyorgó fejekkel és egyéb vicces karakterrel.

Tehát akkor nem kellett eljátszani ezt, ami a google-ből kiesik ([http://support.microsoft.com/?kbid=314499](http://support.microsoft.com/?kbid=314499)).

C:> net use lpt2 \\gepemneveHpLaser  /persistent:yes

Itt arról van szó, hogy a gépen megosztjuk a nyomtatót, majd egy net use paranccsal az lpt2-es _virtuális párhuzamos portra_ kötjük. Asszem. Mindenesetre ez az egyetlen széleskörben fellelhető infromáció. Sajnos nem értem vele semmit. Jó lett volna, ha a nyomtató valahol máshol van a hálózaton, esetleg ha USB-s nyomtatóm van. (Az USB ugye már a DOS utáni időkből származik, így nincsenek felkészítve a régi programok a használatára.)

Én szerencsére elértem a nyomtatót, viszont még mindig ott voltak a hülye karakterek. Van a nyomtató tulajdonságaiban a speciális lapon egy 'nyomtató processzor' feliratú gomb. Itt át lehet állítani RAW módból TEXT módba, és akkor csak ész nélkül kiírja a szöveget, ami belemegy, nem akarja értelmezni a saját kicsi nyelvén. Ekkor már közel voltunk, csak az ékezetes karakterek nem működtek.

A végső mozzanat egy pjl fájl megtalálása volt. Ezt csak el kellett küldeni a nyomtatóra egy

C:> copy /b cp852.pjl lpt1

paranccsal, és máris működött a dolog. Szépen átállítgatja a nyomtatóban a 'kódlapot', hogy a magyar karaktereket is szeresse. Jah, előtte nem árt visszaállítani a nyomtatóprocesszort RAW módba, különben csak kiköpi az egészet a papírra ugye. (Ezzel is szívtam vagy öt percet.) És érdekes módon utána már nem is kellett visszaállítani TEXT módba, minden működött (Windows alatt és DOS alatt is).

Csak annyit még, hogy ha a nyomtató újraindul, elfelejti a beállításokat, így újra le kell futtatni a fenti parancsot. Érdemes tehát automatizálni a dolgot. Mondjuk mielőtt elindítjuk a DOS-os progit, mindig futtassuk le.

Mellékelek egy [kis zip-et](https://csokavar.hu/wp-content/uploads/2006/08/hp1100_DOS.zip), ha valaha szükség lenne rá.

És most vissza a huszonegyedik századba. PLAY
