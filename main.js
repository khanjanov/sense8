let picSrc = [
  "assets/pics/Lito.webp",
  "assets/pics/Kala.jpg",
  "assets/pics/Capheus.jpg",
  "assets/pics/Nomi.jpg",
  "assets/pics/Riley.webp",
  "assets/pics/Sun.jpg",
  "assets/pics/Wolfgang.jpg",
  "assets/pics/Will.jpg",
  "assets/pics/all.jpg",
];

function changePic() {
  picSrc.forEach((el) => {
    let dontTakeLast = picSrc.indexOf(el) == picSrc.indexOf(picSrc.at(-1));
    if (dontTakeLast) return;
    let topDiv = document.querySelector(".wrapper__top");
    let topDivP = document.querySelector(".wrapper__top img");
    let b = document.querySelector(".wrapper__bottom");
    let wrapperBottomPics = document.createElement("div");
    wrapperBottomPics.classList.add("wrapper__bottom__pics");
    let p = document.createElement("img");
    p.src = el;
    wrapperBottomPics.append(p);
    b.append(wrapperBottomPics);
    wrapperBottomPics.addEventListener("mouseover", () => {
      topDiv.innerHTML = wrapperBottomPics.innerHTML;
      let topDivP = document.querySelector(".wrapper__top img");
      topDivP.setAttribute(
        "style",
        "width: 600px;height: 280px;border-radius: 8px;"
      );
      wrapperBottomPics.setAttribute(
        "style",
        "transform: scale(0.9);transition: linear 0.5s;"
      );
    });
    wrapperBottomPics.addEventListener("mouseout", () => {
      wrapperBottomPics.setAttribute(
        "style",
        "transform: scale(1);transition: linear 0.5s;"
      );
      topDivP.src = `${picSrc.at(-1)}`;
      topDiv.innerHTML = "";
      topDiv.append(topDivP);
    });
  });
}
changePic();