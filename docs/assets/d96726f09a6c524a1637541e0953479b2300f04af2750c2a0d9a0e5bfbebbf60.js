window.addEventListener("load", function () {

    document.querySelectorAll('[data-preload]').forEach(element => {
        element.style.backgroundColor = null;
    });

    document.querySelectorAll('[data-hamburger-menu]').forEach(element => {
        element.onclick = () => element.parentElement.classList.toggle('active');
    });

    document.querySelectorAll('[data-gallery]').forEach(gallery => {

        function pick(items) {
            return items[Math.floor(Math.random() * items.length)];
        }
        let oldWidth = null;

        function performLayout() {

            if (oldWidth == gallery.clientWidth) {
                return;
            }
            oldWidth = gallery.clientWidth;

            let top = 0;
            let gutter = 8;

            let dy = (gallery.clientHeight - (gutter * gallery.children.length - 1)) / gallery.children.length;
            let i = 0;
            while (i < gallery.children.length) {
                let left = 0;

                if (i < gallery.children.length - 1 && Math.random() < 0.6) {
                    let width = pick([0.3, 0.4, 0.5, 0.6, 0.7]);
                    let child = gallery.children[i++];
                    child.style.width = `${width * gallery.clientWidth}px`;
                    child.style.height = `${dy * 2 + gutter}px`;
                    child.style.transform = `translate(${left}px, ${top}px)`;
                    left += width * gallery.clientWidth + gutter;


                    child = gallery.children[i++];
                    child.style.width = `${gallery.clientWidth - left}px`;
                    child.style.height = `${dy * 2 + gutter}px`;
                    child.style.transform = `translate(${left}px, ${top}px)`;

                    top += dy * 2 + 2 * gutter;
                } else {

                    let child = gallery.children[i++];
                    child.style.width = `${gallery.clientWidth}px`;
                    child.style.height = `${dy}px`;
                    child.style.transform = `translate(${left}px, ${top}px)`;
                    top += dy + gutter;
                }
            }
        }

        performLayout();

        let wait = false;
        window.addEventListener("resize", function () {
            if (wait) window.clearTimeout(wait);
            wait = window.setTimeout(performLayout, 50);
        }, false);

    });

    document.querySelectorAll('[data-search]').forEach(element => {


        const searchIndex = JSON.parse(document.querySelector('[data-search-index]').textContent);

        let input = document.querySelector('[data-search-input]')
        let result = document.querySelector('[data-search-result]')
        let suggestionsItem = document.querySelector('[data-search-suggestions]')

        let searchParam = new URLSearchParams(window.location.search).get('s');
        if (searchParam != null) {
            input.value = searchParam;
        }

        performSearch();

        input.oninput = () => {
            performSearch();
        };

        function normalizeString(st) {
            return st
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();
        }

        function performSearch() {
            result.innerHTML = '';
            suggestionsItem.innerHTML = '';

            if (input.value == "") {
                return;
            }
       
            function intersect(idxToPointA, idxToPointB) {
                var res = new Map();
                for (idx of idxToPointA.keys()) {
                    if (idxToPointB.has(idx)) {
                        res.set(idx, idxToPointA.get(idx) + idxToPointB.get(idx));
                    }
                }
                return res;
            }

            function union(idxToPointA, idxToPointB) {
                var res = new Map(idxToPointA);
                for (idx of idxToPointB.keys()) {
                    if (!res.has(idx)) {
                        res.set(idx, 0);
                    }
                    res.set(idx, res.get(idx) + idxToPointB.get(idx));
                }
                return res;
            }

            function addPoints(idxToPoint, key, point){
                for(let idx of searchIndex.words[key]){
                    if (!idxToPoint.has(idx)) {
                        idxToPoint.set(idx, 0);
                    }
                    idxToPoint.set(idx, idxToPoint.get(idx) + point);
                }
            }

            function findPrefixMatch(searchString) {
                let idxToPoint = new Map();

                for (let key of Object.keys(searchIndex.words)) {
                    if (key.startsWith(searchString)) {
                        let point = 0;
                        if (key == searchString) {
                            point += 100 * searchString.length;
                        } else {
                            point += 6 * searchString.length;
                        }

                        addPoints(idxToPoint, key, point);
                    }
                }
                return idxToPoint;
            }

            function findPrefixMatches(normalizedSearchString) {
                const searchStringWords = normalizedSearchString.split(" ");

                let idxToPoint = new Map();
                let first = true;
                for (let searchString of searchStringWords) {
                    if (first) {
                        idxToPoint = findPrefixMatch(searchString);
                        first = false;
                    }
                    else {
                        idxToPoint = intersect(idxToPoint, findPrefixMatch(searchString));
                    }
                }
                return idxToPoint;
            }

            function findExpressionMatch(normalizedSearchString) {
                let idxToPoint = new Map();

                for (let key of Object.keys(searchIndex.words)) {
                    if (key === normalizedSearchString) {
                        let point = 100 * normalizedSearchString.length;
                        addPoints(idxToPoint, key, point);
                    }
                }
                return idxToPoint;
            }

            const normalizedSearchString = normalizeString(input.value);

            let idxToPoint = union(findExpressionMatch(normalizedSearchString), findPrefixMatches(normalizedSearchString))
            
            for (let searchResult of [...idxToPoint.entries()]
                .sort((a, b) => b[1] - a[1] != 0 ? b[1] - a[1] : b[0] - a[0]) // same points -> reverse chronological order
                .filter(a => a[1] > 18)
            ) {
                let idx = searchResult[0];
                const meta = searchIndex.meta[idx];
                let item = document.createElement('div');
                result.appendChild(item);
                item.innerHTML = meta;
            }

            let keywordToPoint = new Map();

            for (let keyword of searchIndex.keywords) {
                let normalizedKeyword = normalizeString(keyword);
                let point = 0;

                if (normalizedKeyword.indexOf(normalizedSearchString) >= 0) {
                    if (normalizedKeyword == normalizedSearchString) {
                        point += 100;
                    } else if (normalizedKeyword.startsWith(normalizedSearchString)) {
                        point += 60;
                    } else {
                        point += 0;
                    }

                }

                if (point > 0) {
                    if (!keywordToPoint.has(keyword)) {
                        keywordToPoint.set(keyword, 0);
                    }

                    keywordToPoint.set(keyword, keywordToPoint.get(keyword) + point);
                }
            }

            if (keywordToPoint.size > 0) {
                let suggestions = [...keywordToPoint.entries()].sort((a, b) => b[1] - a[1]);
                const maxPoint = suggestions[0][1];
                suggestions = suggestions.filter(a => a[1] == maxPoint);

                if (maxPoint < 100) {

                    for (let suggestion of suggestions) {
                        let keyword = suggestion[0];
                        let item = document.createElement('div');
                        suggestionsItem.appendChild(item);
                        let link = document.createElement('a');
                        link.setAttribute('href', '#');
                        link.setAttribute('tabindex', '0');
                        item.appendChild(link)
                        link.innerHTML = keyword;
                        item.onclick = () => {
                            input.value = keyword;
                            performSearch();
                        };
                    }
                }
            }
        }
    });


    new WebSocket('wss://finger.csokavar.hu', "finger-protocol").onmessage = (e) => {
        console.log(e.data);
    };
});
