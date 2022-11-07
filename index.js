// $(document).ready(function () {
//     renderCurrentTime();
//     renderQuote();
// });


// function renderCurrentTime() {
//     let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
//     fetch(url)
//         .then(res => res.json()).then((data) => {
//             let datetime = data['datetime'].substr(11, 5);
//             $('#time').text(datetime);
//         });
// }


// function renderQuote() {
//     let url = `https://api.quotable.io/random`;
//     fetch(url)
//         .then(res => res.json()).then((data) => {
//             let content = `" ${data['content']} "`;
//             let author = `- ${data['author']} -`;
//             $('#content').text(content);
//             $('#author').text(author);
//         });
// }

$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
    renderRandomImage();
});

//현재 시간
function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let datetime = data["datetime"].substr(11, 5);
            // let datetime = data['datetime']
            // console.log(datetime)
            $("#currentTime").text(datetime);
        });
}

// 명언
function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let content = `" ${data["content"]} "`;
            let author = `- ${data["author"]} -`;
            $("#quoteContent").text(content);
            $("#quoteAuthor").text(author);
        });
}

// 랜덤 사진 꾸미기
function renderRandomImage() {
    let imageList = [];
    // 이미지 개수를 변경하려면 i=5의 값을 이미지 개수만큼 바꿔주세요!
    for (i = 0; i < 5; i++) {
        imageList.push(i);
    }
    let imageListLength = imageList.length;
    let randomImage = Math.floor(Math.random() * (imageListLength)) + 1
    randomImage = `images/${randomImage}.jpg`
    $(document.body).css("background-image", `url(${randomImage})`);
}

// - 만약 코드에서 주어진 다섯 개 보다 많은 이미지를 넣고 싶다면?
// - 일단 ** 이미지를 더 많이 준비해주세요! **
// - 준비한 이미지의 개수만큼 아래의 코드를 바꿔야 해요!
// - `for (i=0; i<5; i++)` 부분에서 `i<5` 의 숫자를 ** 이미지 개수만큼의 숫자로 ** 바꿔주시면 됩니다!