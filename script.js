const Musicly = $("#Musicly");
const tiptool = $("#tiptool");

const name1 = $("#name");
const image = $("#image");
const audio = $("#audio");
const date = $("#date");

const homeInput = $("#home");
const favInput = $("#fav");
const musicTab = $("#addMusic");
const register = $("#register");

const main = $("#mu");
const row = $(".row");
const inputCol = $(".col-5");

main.hide();

//  عطني البيانات من L.S , واذا لم توجد من Arr 
const MusicArr = JSON.parse(localStorage.getItem("song")) || [
  {
    img: "https://cdn10.bigcommerce.com/s-o6vy9cv/products/75351/images/75827/201627__23348.1499268024.500.500.jpg?c=2",
    name: "Perfect ",
    Audio: "Perfect.mp3",
    date: " March 30, 2018",
  },
  {
    img: "https://images.genius.com/ccec68be22e8859347bbe551cb2288e3.1000x1000x1.png",
    name: "Building Lights ",
    Audio: "Blinding Lights.mp3",
    date: " October 4, 2019",
  },
  {
    img: "https://c-cl.cdn.smule.com/rs-s-sf-4/arr/77/7a/34627733-f4d0-418e-a310-4612a9239dcd_1024.jpg",
    name: "Everything ",
    Audio: "everything i wanted.mp3",
    date: "November 13, 2019",
  },
  {
    img: "https://1.bp.blogspot.com/-neC0NjkYC-M/X41qkdR1bbI/AAAAAAAAJBA/K7R3Lqx4yzUT88R1vOvOSu_zIoD0sk0zACLcBGAsYHQ/s1600/lovely%2B-%2Bbillie%2Beilish%2Band%2Bkhalid.webp",
    name: "Lovely ",
    Audio: "lovley.mp3",
    date: "April 19, 2018",
  },

 { img: "https://img.discogs.com/tgyw8EDHpLM49K4JwvnmwgMZzDw=/fit-in/593x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2129949-1320969383.jpeg.jpg", 
name: "Yellow",
Audio: "Yellow.mp3",
date: "Desmber 9, 2017" },

{ img: "https://images.genius.com/5436c762d677ed1c10ff0c81fea1c967.1000x1000x1.jpg", 
name: "Control", 
Audio: "Control.mp3",
date: "july 22, 2020",

},
];
// عرفت function ,وعملت loop , عطيت div جديد بداخله element .
function renderArr(array) {
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div id="main">
          
          <img id="Music" src="${array[i].img}" 
          width="180px" height="180px" alt="">
          <span id="FeadBack">
          <p> <b>${array[i].name} - </b>${array[i].date}</p>
        </span>
          <audio src="${array[i].Audio}" controls></audio>

          <button id= "btn-delete" onclick="remove(${i})">delete</button>

          
      </div>`);

    row.append(div); 
  }
  // استدعاء L.S
  localStorage.setItem("song", JSON.stringify(MusicArr)); 
}

renderArr(MusicArr);

function addMusic() {
  const newMusic = {
    img: image.val(),
    name: name1.val(),
    Audio: audio.val(),
    date: date.val(),
  };
  console.log(image.val());
  MusicArr.push(newMusic);
  row.html("");
  renderArr(MusicArr);
  // renderArr([newMusic]);
}
function remove(i) {
  // let row = $(".row");
  //all.log(i, 1);
  MusicArr.splice(i, 1);

  row.html("");
  renderArr(MusicArr);
}

// يعرض صفحة اضافه الميوزك
function showMusic() {
  main.show();
  row.hide();

}

// يعرض العناصر الي بالهوم الميوزك
function hideMusic(){

  main.hide();
  row.show();
}