---
title: "Spam filter házilag"
date: "2006-09-30"
tags: 
  - "geekseg"
---

A Freeblogon rendszeresen végigjárja valami hülye robot a bejegyzéseimet, és telepakolja 'Hi guys, check out these cool sites' kezdetű szeméttel az én drága írásaimat. Szerencsére, a gyári spamszűrő rendszerint kidobálja őket a fenébe.

Elkezdtem gondolkozni, hogyan lehetne ilyet csinálni a saját honlapomra (mármint a [https://csokavar.hu-ra/](https://csokavar.hu-ra/)). Végül három, egymást kiegészítő megoldásra jutottam. 

### A tartalom vizsgálata

A nyilvánvaló megoldás a tiltott szavak (viagra, penis, stb.) szűrése. Csábító lenne valami [Bayes-szűrőt](http://en.wikipedia.org/wiki/Bayesian_filtering) implementálni, de kiderült, ebben az esetben teljesen felesleges. A kapott szemetet analizálva arra jutottam, hogy a hozzászólásokkal ellentétben, a spamek tele vannak linkekkel. Így a viagrás szabály mellé betettem a linkek számára is egy korlátot. Nem dobunk ki semmit, de ha valaki túl sok linket akar a hozzászólásába tenni, akkor az először moderálásra kerül.

### IP alapú szűrés

Viszonylag hamar ráleltem a [www.spamhaus.org-ra](http://www.spamhaus.org-ra/), ami egy nonprofit feketelista szolgáltató. Sajnos csak ahhoz adnak segítséget, hogy az ember a mail szerverét illessze hozzájuk. Mivel én egy üzenőfalat akarok vele filterezni, kénytelen voltam kicsit tovább keresgélni.

Kiderült, hogy a srácok igazán leleményes megoldást találtak a lista lekérdezésére: ráapplikálták a DNS-re. A szolgáltatással azt tudjuk kideríteni, hogy egy IP címen notorius spamelők laknak-e, vagy sem.

Adott tehát egy IP cím. A példa kedvéért mondjuk 127.0.0.2.. Ez megállapodás szerint feketelistás cím. Mivel a való világban nem fordul elő, nem okoz problémát. (Már amennyire biztos lehetek ilyenekben, nem vagyok informatikus.) Ebből a tagok megfordításával és a .sbl-xbl.spamhaus.org szuffixel csinálunk egy domain nevet, és ezt egy sima nslookup-al megpróbáljuk feloldani.

Konkrétan:

<pre><code>>nslookup 2.0.0.127.sbl-xbl.spamhaus.org
Server: xxx.xxx.xxx.xxx
Address: xxx.xxx.xxx.xxx#yyy

Non-authoritative answer:
Name: 2.0.0.127.sbl-xbl.spamhaus.org
Address: 127.0.0.2
Name: 2.0.0.127.sbl-xbl.spamhaus.org
Address: 127.0.0.4
</code></pre>

A két válasz azt jelenti, hogy 'fúj spam', ha nem kapnánk választ: 'nem spam'. Precízebben:

<pre><code>127.0.0.2: Direct UBE sources, verified spam services and ROKSO spammers
127.0.0.4-6: Illegal 3rd party exploits, including proxies, worms and trojan exploits
</code></pre>

Nekem ez nagyon bejön... Aztán találtam még egy php kódot is (fúj konzerv) hozzá:

<pre><code>function is_blacklisted($ip)
{
  // written by satmd, do what you want with it, but keep the author please
  $result=Array();
  $dnsbl_check=array("bl.spamcop.net",
                     "list.dsbl.org",
                     "sbl.spamhaus.org");
  if ($ip)
  {
    $quads=explode(".",$ip);
    $rip=$quads[3].".".$quads[2].".".$quads[1].".".$quads[0];
    for ($i=0; $i&lt;count($dnsbl_check); $i++)
    {
      if (checkdnsrr($rip.".".$dnsbl_check[$i].".","A"))
      {
        $result[]=Array($dnsbl_check[$i],$rip.".".$dnsbl_check[$i]);
      }
    }
    return $result;
  }
}
</code></pre>

Ennyi. :)


### Javascript

Már a fenti két megoldás is kiszűrte a szemetet, de zavaró volt, hogy utólag kézzel kell őket kitörölnöm. Egy újabb kis trükkel azonban sikerült teljesen kiírtani a spamet az oldalról.

Az oskolában azt tanítják, hogy olyan oldalt csináljunk, amit a keresőrobotok könnyen el tudnak olvasni. Na mit nem tudnak a keresőrobotok? Javascriptet futtatni. Legalábbis ezt nehezebb megvalósítani, mint az xhtml oldalakból a form-ok kiszedegetését. Tudom, hogy egy valamirevaló oldalnak javascript nélkül is illik működni, de ez egyrészt eddig sem volt így, hála az [Active-X vezérlőknek](https://csokavar.hu/blog/2006/04/30/activex-szivas/), másrészt manapság úgyis az AJAX felé megy a világ (és az oldalam is), amihez pedig elengedhetetlen valami kliens oldali script nyelv. Summa summarum: beáldoztam a formok javascript mentességét a spam filter oltárán. Pillanatnyilag a form action attribútuma, azaz annak az oldalnak a címe, ami a formot feldolgozza, javascriptből jön.

Működik. Tegyük hozzá: egyelőre. Attól nem kell félek, hogy az én kis látogatottságú oldalamra valaki kézzel megírja a küldő scriptet. Sokkal aggasztóbb, hogy előbb-utóbb feltalálják a javascriptet is futtatni képes spam robotot. Onnan már csak a regisztráció vagy [captcha](http://en.wikipedia.org/wiki/Captcha)k tudnának kirángatni, de azokat már nem fogok bevezetni, azt hiszem...
