window.addEventListener("load", function() {

    document.querySelectorAll('[data-preload]').forEach(element=>{
        element.style.backgroundColor=null;
    });

    document.querySelectorAll('.gallery').forEach(gallery => {

        function pick(items) {
            return items[Math.floor(Math.random() * items.length)];
        }

        function performLayout() {
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
        window.addEventListener("resize", function() {
            if (wait) window.clearTimeout(wait);
            wait = window.setTimeout(performLayout, 50);
        }, false);

    })

    document.querySelectorAll('.site-heading nav').forEach(element=>{
        const button = document.createElement('button');
        button.classList.add("hamburger", "hamburger--squeeze", "dropdown");
        button.type = "button";
        const hamburgerbox = document.createElement('span');
        hamburgerbox.classList.add("hamburger-box");
        const hamburgerInner = document.createElement('span');
        hamburgerInner.classList.add("hamburger-inner");
        hamburgerbox.append(hamburgerInner);
        button.append(hamburgerbox);
        element.parentNode.insertBefore(button, element);
        button.onclick = ()=>{
            element.classList.toggle("active");
            button.classList.toggle("active");
            return false;
        }
    }
    )
});

var connection = new WebSocket('wss://csokavar.hu/finger',"finger-protocol");
connection.onmessage = function(e) {
    console.log(e.data);
};
