---
title: "Valahogy indul, aztán valahogy folytatódik"
date: "2007-11-26"
tags: 
  - "almok"
  - "geekseg"
  - "szemelyes"
---

Hétvégén végigtoltam valami [random haxor játékot](http://scifi.pages.at/hackits/), mert ott volt. Nagyon gagyi volt, és egy része más játékokból volt összelopva. Az azért már jelent valamit, ha az ilyenket észreveszem, nem?

Dzsuvaszkript volt a fele, aztán egy java appletet kellett visszafejteni. Emlékszem, amikor először ilyet csináltam (1999 körül), még nem tudtam, hogy javát effektíve lehet [dekompilálni](http://www.kpdus.com/jad.html), ezért a bájtkódból olvastam ki, hogy milyen memberek vannak a szóbanforgó appletben, és fordítottam mellé egy leszármazó osztályt, ami már elérte a protected membereket, és így nagy nehezen sikerült kinyerni a jelszót valahogy. (Ez még az egyszerűbb dolgok közé tartozott annak idején, mert az applet nem volt final, és így konkrétan le lehetett belőle származni, ugye. A bájtkódot soronként értelmezős rémtörténetekre, most inkább nem térnék ki.)

Egyedül az utolsó pálya volt érdekes, na nem a feladat miatt, mert csak egy sima monoalfabetikus titkosítást kellett visszafejteni. Ez közismerten betűk, betű párok, stb., stb., betű n-esek relatív gyakoriságának vizsgálatán alapszik. Két dolog kell hozzá:

1. egy elég hosszú, természetes nyelvű szöveg (pl. egy regény)
    
2. egy program ami egy, az elején véletlenszerűen kiválasztott, kódolást lépésenként módosítva próbálja a kódolt szöveg betű eloszlását a regény szövegéből kinyert eloszláshoz igazítani.
    

Jópofa dolog nézni, ahogy egy ilyen egyszerű kis algoritmus az értelmetlen betűhalmazból, szépen lassan olvasható szöveget készít. Boszorkányos...

Program természetesen [van raktáron](http://secretcodebreaker.com/scbsolvr.html), már csak egy regény kellett, és itt jött a probléma, ugyanis _német_ nyelvű szövegre volt szükség.

Közismerten egy kurva szót se tudok németül. A német érettségit annak idején úgy oldottuk meg, hogy előre kiosztottuk, hogy ki, mit fog húzni. Mondanom se kell, hogy hol csúszott el a dolog: én voltam a második vizsgázó, tehát volt egy minimális esélye annak, hogy Réka vagy a tánéni elkeveri a dolgokat, és az orrom előtt elviszik a tételemet... Kitalálják mi lett?

Nem, nem buktam meg. De az a szép, hogy még most, kilenc év után is álmodom azzal a kurva érettségivel, meg a rémes német tanárral, aki miatt nem tanultam meg németül. Mindig az van, hogy kihív felelni, és nem tudok megszólalni, mert nem beszélem azt a kurva, ronda, ótvar, fos nyelvet. El tudják képzelni, hogy ez mekkora érvágás nekem, akinek az egyetlen fegyvere ebbe a világba ez a pesszimizmusban tocsogó, kesernyés-savanyú, kitekert humora? És akkor állok ott mind a fasz, amíg föl nem ébredek. Gyűlölöm azt a nőt. OK, tudom, hogy nyelvi antitalentum vagyok. Egy szar. Köpjenek is le mindenképp, ha megoldható... De valahogy a másik tanár nénivel, aki azután jött, hogy Anikó megellett, sokkal jobban ki tudtam jönni. Olyan aranyos volt, és jólelkű. Még el is akartam venni feleségül. Csak az a kis korkülönbség ne lett volna...

Hogy a faszba jutottunk ide? Ja. Szóval egy óra alatt sikerült találni valami német könyvet, és ahogy a megfejtés lassacskán körvonalazódott azt kellett tapasztalnom, hogy megértettem. Pedig németül volt. Furi.
