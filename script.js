const body = document.querySelector("body");
const nav = document.querySelector("nav ");

const checkbox = document.querySelector("#toggle");
const aActive = nav.querySelectorAll("a");
const img = body.querySelector("#image");
const contactMe = document.getElementById("contactMe");
const footer = document.querySelector(".footer");

const menuToggle = document.querySelector(".menu-toggle input");
const powerButton = document.querySelector("#powerOn");
const book = document.querySelector(".about-detail");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
window.addEventListener("load", () => {
  if (window.innerWidth <= 950) {
    paper1.querySelector(".front").innerHTML = b1toF1();
    paper1.querySelector(".back").innerHTML = f2toB1();
    paper2.style.display = "none";
    document.querySelector("#f1").style.backgroundColor = "white";
  } else {
    paper1.querySelector(".front").innerHTML = f1();
    paper1.querySelector(".back").innerHTML = b1();
    paper2.style.display = "block";
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth <= 950) {
    paper1.querySelector(".front").innerHTML = b1toF1();
    paper1.querySelector(".back").innerHTML = f2toB1();
    paper2.style.display = "none";
    document.querySelector("#f1").style.backgroundColor = "white";
    if (paper1.classList.contains("flipped")) {
      book.style.transform = "translateX(0%)";
    }
  } else {
    paper1.querySelector(".front").innerHTML = f1();
    paper1.querySelector(".back").innerHTML = b1();
    paper2.style.display = "block";
    if (paper1.classList.contains("flipped")) {
      book.style.transform = "translateX(50%)";
    }
  }
});
book.addEventListener("click", () => {
  if (!paper1.classList.contains("flipped")) {
    openBook();
  } else {
    closeBook();
  }
});
function openBook() {
  paper1.classList.add("flipped");
  if (window.innerWidth > 950) {
    book.style.transform = "translateX(50%)";
  }
}

function closeBook() {
  paper1.classList.remove("flipped");
  book.style.transform = "translateX(0%)";
}
function f1() {
  return `   
  <div id="f1" class="front-content">
     <div class="eyes"></div>
      <img src="./assets/tali.png" class="tali" alt="" />
  </div>`;
}
function b1() {
  return ` 
          <div id="b1" class="back-content">
          <h2>Marwan Hadid</h2>
          <div class="aboutme">
            <div class="bg">
              <img class="bgAbout" src="./assets/graph.png" alt="" />
              <img class="aboutImg" src="./assets/controller.png" alt="" />
            </div>
            <h4>
              Saya adalah mahasiswa jurusan teknik informatika dari
              Universitas Binaniaga Indonesia. Saya sangat tertarik dengan
              programming dan desain, khususnya desain web. Tak hanya itu,
              saya juga senang memplajari berbagai bahasa, baik itu bahasa
              pemrograman serta bahasa asing.
            </h4>
          </div>
          <h4 class="bio">Bio</h4>
          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2002</h4>
            </div>
            <h4>Lahir di Bogor, Jawa Barat</h4>
          </div>

          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2008</h4>
            </div>
            <h4>Mengenyam pendidikan SD di SDN Pengadilan 5 Bogor</h4>
          </div>

          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2014</h4>
            </div>
            <h4>Melanjutkan pendidikan SMP di SMP PGRI 3 Bogor</h4>
          </div>

          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2017</h4>
            </div>
            <h4>Melanjutkan pendidikan SMK di SMKN 2 Bogor</h4>
          </div>

          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2020</h4>
            </div>
            <h4>
              Melanjutkan pendidikan kuliah di Universitas Binaniaga Indonesia
            </h4>
          </div>
          </div>
       `;
}
function b1toF1() {
  return ` 
          <div id="f1" class="front-content">
          
          <h2>Marwan Hadid</h2>
          <div class="aboutme">
            <div class="bg">
              <img class="bgAbout" src="./assets/graph.png" alt="" />
              <img class="aboutImg" src="./assets/controller.png" alt="" />
            </div>
            <h4>
              Saya adalah mahasiswa jurusan teknik informatika dari
              Universitas Binaniaga Indonesia. Saya sangat tertarik dengan
              programming dan desain, khususnya desain web. Tak hanya itu,
              saya juga senang memplajari berbagai bahasa, baik itu bahasa
              pemrograman serta bahasa asing.
            </h4>
          </div>
          <div id='bio'>
          <h4 class="bio">Bio</h4>
          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2002</h4>
            </div>
            <h4>Lahir di Bogor, Jawa Barat</h4>
          </div>

          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2008</h4>
            </div>
            <h4>Mengenyam pendidikan SD di SDN Pengadilan 5 Bogor</h4>
          </div>

          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2014</h4>
            </div>
            <h4>Melanjutkan pendidikan SMP di SMP PGRI 3 Bogor</h4>
          </div>

          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2017</h4>
            </div>
            <h4>Melanjutkan pendidikan SMK di SMKN 2 Bogor</h4>
          </div>

          <div class="tahun">
            <div class="tahun-detail">
              <div class="circle"></div>
              <h4>2020</h4>
            </div>
            <h4>
              Melanjutkan pendidikan kuliah di Universitas Binaniaga Indonesia
            </h4>
          </div>
          </div>
        </div>
       `;
}

function f2toB1() {
  return `
  <div id="b1" class="back-content">
            <h2>The Mogus</h2>
            <div class="bg">
              <img
                src="./assets/LogoAnimation/logoblack3.png"
                class="aboutImg"
                alt=""
           
              />
            </div>
            <h4>
              Perkenalkan, dia adalah Mogus. Karakter ini terinspirasi dari
              salah satu <i>game</i> terkenal, <i>Among Us</i>, yang di mana ada
              sebuah plesetan pada namanya menjadi Amogus. Jika pada mode terang
              Mogus akan berubah menjadi warna merah yang dinamakan Red Mogus.
              Sedangkan pada mode gelap berubah menjadi White Mogus.
            </h4>
          </div>`;
}

menuToggle.addEventListener("click", function () {
  nav.querySelector("ul").classList.toggle("slide");
});
powerButton.addEventListener("click", () => {
  console.log(powerButton.value);
  if (powerButton.value === "ON") {
    powerButton.value = "OFF";
    img.style.display = "none";
    body.querySelector(".change-color").style.display = "none";

    document.querySelector(".bg-Hello").style.backgroundColor = "black";
  } else {
    powerButton.value = "ON";
    img.style.display = "block";
    body.querySelector(".change-color").style.display = "flex";
    document.querySelector(".bg-Hello").style.backgroundColor = "white";
  }
  console.log(powerButton.value);
});

body.querySelectorAll(".check").forEach((item) => {
  item.addEventListener("click", () => {
    img.className = item.id;

    document.documentElement.style.setProperty("--color", item.title);
  });
});

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighLighter);
function navHighLighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 20;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(" a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

for (let i = 0; i < aActive.length; i++) {
  aActive[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}

const gambar = [1, 2, 3, 4, 5];

let i = 0;
setInterval(() => {
  img.setAttribute(
    "src",
    `./assets/LogoAnimation/logoblack` + gambar[i++] + ".svg"
  );
  if (i == gambar.length) i = 0;
}, 350);

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: document.getElementById("username").value,
    Password: "password",
    To: "marwanhadid6@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: document.getElementById("textarea").value,
  }).then((message) => alert(message));
}
