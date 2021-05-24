---
title: "css örömök"
date: "2006-08-05"
tags: 
  - "geekség"
  - "vélemény"
---

Gondoltam most nagyon szépen megcsinálok mindent a zsongi oldalhoz. A css világ azonban ellenem van. Az hagyján, hogy IE alatt teljesen másképp néznek ki a dolgok, mint Firefox-ban. Vannak olyan dolgok is, amiben egyetértenek, csak éppen egetrengetően nagy hülyeség.

Lássunk egy példát:

<html>
<head>
    <style>
    <!--
    body{
        background: blue;
        padding:0;
        margin:0;
    }
    div {
        background: yellow;
        padding:0;
        margin:0;
    }
    h1{
        background: green;
        padding: 0;
        margin: 40px;
    }
    -->
    </style>
</head>
<body>
    <div>
        <h1>h1</h1>
    </div>
</body>
</html>

Azt várnánk, hogy ennek eredményeként kapunk egy kék hátterű oldalt, benne egy sárga keretbe foglalt 'h1' felirattal, aminek még szintén van egy kis zöld kerete.

Hát nem... [Ez lesz belőle](https://csokavar.hu/wp-content/uploads/2006/08/css1.htm). Valamilyen oknál fogva úgy gondolja a böngésző, hogy a h1 alsó és felső margója, hiába van a sárga div-en belül, mégse legyen sárga. Viszont ugyez a logika már nem vonatkozik az oldalsó margókra. Ott sárga valamiért. Enyhén inkonzisztens...

Megoldás: ne akarjál nullás paddingot a diven. [Legyen mondjuk 1pt](https://csokavar.hu/wp-content/uploads/2006/08/css2.htm).

### Releváns linkek:

- [http://www.complexspiral.com/publications/uncollapsing-margins/](http://www.complexspiral.com/publications/uncollapsing-margins/)
- Olvasgatom ezt: [http://alistapart.com/](http://alistapart.com/)
- Meg ezt: [http://www.cssbeauty.com/](http://www.cssbeauty.com/)
- Illetve ezt: [http://cssvault.com/](http://cssvault.com/)
