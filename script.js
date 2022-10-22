const body = document.querySelector("body");
const nav = body.querySelector("nav");
const sections = document.querySelectorAll("section[id]");
const checkbox = document.querySelector("#toggle");
const aActive = nav.querySelectorAll("a");
const img = body.querySelector("#image");

const menuToggle = document.querySelector(".menu-toggle input");
const book = document.querySelector(".about-detail");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const color = localStorage.getItem("color");
const colorImage = localStorage.getItem("colorImage");
if (color || colorImage) {
  img.className = colorImage;
  document.documentElement.style.setProperty("--color", color);
}
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
            
              <img class="aboutImg" src="./assets/Foto.png" alt="" />
            </div>
            <h4>
              Saya adalah mahasiswa jurusan teknik informatika dari
              Universitas Binaniaga Indonesia. Saya sangat tertarik dengan
              programming dan desain, khususnya desain web. Tak hanya itu,
              saya juga senang memplajari berbagai bahasa, baik itu bahasa
              pemrograman serta bahasa asing.
            </h4>
            <h2>Hobi</h2>
            <div class="hobby_list">
              <div class="hobby_data">
                <div class="hobby_name"><h5>Membaca Buku</h5></div>
              </div>
              <div class="hobby_bar" id="reading"></div>
            </div>
             <div class="hobby_list">
              <div class="hobby_data">
                <div class="hobby_name"><h5>Berolahraga Jogging</h5></div>
              </div>
              <div class="hobby_bar" id="jogging"></div>
            </div>
              <div class="hobby_list">
              <div class="hobby_data">
                <div class="hobby_name"><h5>Berolahraga Skipping</h5></div>
              </div>
              <div class="hobby_bar" id="jogging"></div>
            </div>
        </div>
          </div>
          
       `;
}
function b1toF1() {
  return ` 
          <div id="f1" class="front-content">
          
          <div class="aboutme">
          <h2>Marwan Hadid</h2>
            <div class="bg">
     
              <img class="aboutImg" src="./assets/Foto.png" alt="" />
            </div>
            <h4>
              Saya adalah mahasiswa jurusan teknik informatika dari
              Universitas Binaniaga Indonesia. Saya sangat tertarik dengan
              programming dan desain, khususnya desain web. Tak hanya itu,
              saya juga senang memplajari berbagai bahasa, baik itu bahasa
              pemrograman serta bahasa asing.
            </h4>
          </div>
          <div class="hobby">
          <h2>Hobi</h2>
            <div class="hobby_list">
              <div class="hobby_data">
                <div class="hobby_name"><h5>Membaca Buku</h5></div>
              </div>
              <div class="hobby_bar" id="reading"></div>
            </div>
             <div class="hobby_list">
              <div class="hobby_data">
                <div class="hobby_name"><h5>Berolahraga Jogging</h5></div>
              </div>
              <div class="hobby_bar" id="jogging"></div>
            </div>
              <div class="hobby_list">
              <div class="hobby_data">
                <div class="hobby_name"><h5>Berolahraga Skipping</h5></div>
              </div>
              <div class="hobby_bar" id="skipping"></div>
            </div>
            </div>
        </div>
       `;
}

function f2toB1() {
  return `
  <div id="b1" class="back-content">
          
            <h2 class="bio">Bio</h2>
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
          </div>`;
}

menuToggle.addEventListener("click", function () {
  nav.querySelector("ul").classList.toggle("slide");
});

body.querySelectorAll(".check").forEach((item) => {
  item.addEventListener("click", () => {
    img.className = item.id;
    document.querySelector("img#image").className = item.id;
    document.documentElement.style.setProperty("--color", item.title);
    localStorage.setItem("color", item.title);
    localStorage.setItem("colorImage", item.id);
  });
});

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

var form = document.getElementById("form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Terima kasih atas pesannya!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML =
              "Oops! Sepertinya ada masalah saat mengirimkan pesan";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! Ada masalah saat mengirimkan pesan Anda";
    });
}
form.addEventListener("submit", handleSubmit);
