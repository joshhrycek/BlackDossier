const COMICVINE_URL = "https://comicvine.gamespot.com/api/characters"
const GOODREADS_URL = ""
const AMAZON_URL = ""

function getDataFromComicvine(serachTerm, callback) {
    const settings = {
        url: COMICVINE_URL,
        data: {
            api_key : "a13358abcad5c60e3c10a801fdc83a487e50c2a8",
            filter : `name:${serachTerm}`,
            format: "json"
        },
        datatype: "json",
        type: "GET",
        success: callback
    };
    $.ajax(settings);
}

function displayComicvineData(data) {
    $('main').html(renderHeroPage(data))
}

function getDataFromGoodreads() {
    const query = {
        
    }
    $.getJSON(GOODREADS_URL, query, callback)
}

function displayGoodreadsData() {

}

function getDataFromAmazon() {
    const query = {
        
    }
    $.getJSON(AMAZON_URL, query, callback)
}

function displayAmazonData() {

}

function getSearchTerm() {
    $('form').on('submit', event => {
        event.preventDefault();
        let query = $(".serach-box").val()
        getDataFromComicvine(query, displayComicvineData)
    })
}

function renderHeroPage(data) {
    return `<h2>${data.results[0].deck}</h2>`
}

function renderStoryPage() {

}

function renderReviewPage() {

}

function createApp() {
    getSearchTerm()
}

$(createApp)