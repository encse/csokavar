---
title: "Könyvespolc"
date: "2016-09-17"
coverImage: images/Screen-Shot-2021-01-14-at-20.45.37-scaled.webp
---

Szeretek olvasni, és néha [véleményt](https://csokavar.hu/blog/tag/konyv/) is írok róla. Nagyjából így néz ki a könyvespolcom, bár nem minden van rajta az itteniekből, és olyan is van, amit nem olvastam el végig. Nem válogatom szét tematikusan, mert minek. Vannak közte gyerek könyvek, amiket még kiskoromban olvastam és olyanok is, amiket már a sajátjaimnak olvasok. Van itt programozós, sci-fi, fantasy és minimális szépnek nevezett irodalom is.

Mostanában már kevesebb idő jut rá, az ezer oldalas szakkönyvekkel meg lassan is haladok. Még az isc-s időkben, amikor 10 percre laktam az irodától, annyira ráértem, hogy munka után leültem az aktuális könyvvel és olvastam egész elalvásig, hétvégente meg mindig könyvesboltba jártam, hátha találok valamit…

<bookself/>


<style>
    bookself {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        background: #552a0a;
        border: 8px solid rgb(119 63 21);
        box-shadow:
            inset 0px 0px 25px -4px #000000,
            inset 0px -14px 17px -15px #FFFFFF;

    }

    book-container {
        border-bottom: 8px solid rgb(119 63 21);
        flex: 1;
        display: flex;
        box-shadow: inset 0px -14px 17px -15px #000000;
    }

    book {
        margin: 4px;
        box-shadow: 2px 2px #e8e8e8, 0px 2px #e8e8e8;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        display: flex;
    }

    book img {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    }
</style>

<script>

    fetch('https://bookshelf.csokavar.hu/books.json')
    .then(response => response.json())
    .then(booksData => {

        const getDate = (book) => {
            for(key of ["Date Read", "Date Added", "Year Published", "Original Publication Year"]) {
                if (book[key]) {
                    return new Date(book[key]);
                }
            }
            return new Date('1970');
        }

        booksData.sort(function(a, b){
            return getDate(b).getTime() - getDate(a).getTime();
        });
        
        let books = '';
        for(let book of booksData){
            books += `
                <book-container>
                    <book title="${book['Title']}">
                        <img src="${book['cover']}" loading="lazy"/>
                    </book>
                </book-container>`;
        }


        document.getElementsByTagName('bookself')[0].innerHTML = books;
    });

</script>