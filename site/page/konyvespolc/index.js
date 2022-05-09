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
                <div class="gr_grid_book_container">
                <a href="" title="${book['Title']}">
                    <img src="${book['cover']}" loading="lazy"/>
                </a>
            </div>`;
        }


        document.getElementById('bookself').innerHTML = '<div class="gr_grid_container">'+books+'</div>';
});