---
title: "Költözés a felhőbe"
date: "2012-11-05"
tags: 
  - "metaentry"
coverImage: images/Clouds_on_a_nice_day_by_EdenMarel.jpg
---

Nos. Az 500 év letelt, a hétvégén átköltöztettem mindent a felhőbe, egész pontosan egy Amazon EC2, linuxos micro instance-ra, ami a legolcsóbb megoldás volt az összes közül.

Átállítottam az IP-ket is és kb. ma délutántól megint minden működik. A régi szerveren maradt a DNS, mert ahhoz valakinek kell majd írnom egy levelet. És még azt se találtam ki, hogy megint saját DNS szervert akarok-e vagy inkább veszek ilyen Route 53-as megoldást is, bármit is jelentsen ez. Talán az utóbbi, hogy ki tudjam próbálni.

Linuxra egész simán átálltam, annak ellenére, hogy az Apacheból is nginx lett, amit teljesen máshogy kell konfigurálni, és a gekko miatt erre szükség is van. Asszem per pillanat csak a gekko többnyelvűsége nem működik jól, de erre majd ránézek valamikor.

Na most, hogy tartalom is lesz-e az oldalon, arra nem tudok garanciát vállalni, mindenesetre a működési költségeket reményeim szerint le tudom faragni a felére-harmadára. Még nem számoltam ki teljesen, ráadásul egy ideig a legtöbb dolog ingyen lesz, mert az Amazonnál az új ügyfelek ebből a mini szerverből egyet használhatnak ingyenesen egy évig (free tier). Talán csak az elastic IP szolgáltatásért kell fizetni valami minimális díjat. Persze az is előfordulhat, hogy hirtelen annyira megnő a forgalom, hogy a zsebszerver már nem fogja bírni. De óvatos becsléseim szerint még akkor se járok rosszul ha kénytelen leszek a small instance kategóriára upgradelni. Bár azt már el tudom képzelni, hogy egy olyan gépet máshol olcsóbban megkapok, viszont így legalább szerzek egy kis felhős tapasztalatot...
