---
title: "Encsé vírust irt"
date: "2007-06-06"
tags: 
  - "geekség"
  - "virus"
---

> A bejegyzés, amelyből kiderül, hogy hősünk bátor, valamint remek berhelő cuccokal gazdagítjuk Windowsunk kelléktárát. *.

Nem titok, hogy a bátrak böngészőjét használom a bátrak oprendszerén. Annak rendje és módja szerint be is kaptam valami kis falovat a minap, ami aztán elvette a procim nagy százalékát és állandóan hülye reklámokat dobált a képernyőmre. Mondanom se kell, hogy ez elég idegesítő, úgyhogy a kötelező körök ([Ad-Aware](http://www.lavasoftusa.com/)) lefutása után nekiláttam kézzel kiírtani a kis nyavalyást.

Hasonló kalandjaim során már kiderült, hogy érdemes a registryben a

```
HKLM/SOFTWARE/Microsoft/Windows NT/CurrentVersion/Winlogon/Notify
```

kulcsot megnézni, mert előszeretettel vesznek fel magunknak ide bejegyzéseket a cuccok. Találtam is két gyanús entryt, de hiába töröltem őket kézzel, rögtön visszatette őket a kis mocsok.

Semmi gond: csökkentett mód. Nos... úgy tűnik, csökkentett módban a Windowsom valami hülye módba váltja a monitort, amiben minden csíkos, és semmi sem felismerhető, úgyhogy ez a vonal bedöglött.

A következő ötlet a shell lecserélése volt explorer-ről cmd-re. Ez egy ügyes trükk, ha a kiírtandó dolog csak az explorerrel együtt indul el, jól ki lehet cselezni... Sajnos ezúttal a probléma így is előjött, úgyhogy kénytelen voltam az éles rendszert megpróbálni kipucolni valahogy...

Gyerekek! Minden háztartásban akad egy [SysInternals](http://www.microsoft.com/technet/sysinternals/default.mspx)-féle [Registry Monitor](http://www.microsoft.com/technet/sysinternals/ProcessesAndThreads/Regmon.mspx). Ezzel kiderítettem, hogy a winlogon.exe írkálja vissza az entryket, sőt egyúttal egy remek kis tracet is elkaptam, amiben benne volt, hogy még melyik tíz helyre teszi vissza magát. (IE Browser Helper Ojjekt és társai.)

A Winlogont _Ctrl+Alt+Del_-lel kilőni természetesen nem lehet, mert 'Ez egy kritikus rendszerfolyamat', így aztán maradt a sysinternals másik remek terméke a [Process Explorer](http://www.microsoft.com/technet/sysinternals/ProcessesAndThreads/ProcessExplorer.mspx). Ez a Winlogonra is működik, ráadásul nemcsak kilőni, hanem még felfüggeszteni is tudja a processzeket...

Innentől felgyorsultak az események. Winlogon -> pause, majd registryből a trace alapján kézzel szemetet kitöröl. Restart és működik. :)

Mondjuk egy jó órám így is elment vele...

* * *

\* Kevesebb Dumast kéne olvasni.
