window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = window.pageYOffset + section.getBoundingClientRect().top;
    const sectionHeight = section.clientHeight;
    var height =
      document.body.clientHeight - (window.scrollY + window.innerHeight);
    const contactBox = document.getElementById("contact");

    if (window.pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
    if (height <= contactBox.clientHeight / 2) {
      current = section.getAttribute("id");
    }
    // 섹션 등장 애니메이션
    if (current == "profile") {
      document.querySelector(".greeting").classList.add("focus-in-expand");
      document
        .querySelector(".profile__introduction")
        .classList.add("tracking-in-contract");
    }
    if (current == "contact") {
      document.querySelector(".choco-img").classList.add("slide-in-left");
      document
        .querySelector(".box_contact > .category-title")
        .classList.add("slide-in-left");
      if (matchMedia("screen and (max-width: 757px)").matches) {
        document
          .querySelector(".contact__address")
          .classList.add("rotate-mobile");
      } else {
        document
          .querySelector(".contact__address")
          .classList.add("rotate-in-2-br-cw");
      }
    }
    if (current == "work") {
      const boxes = document.querySelectorAll(".box_work");
      boxes.forEach((box) => {
        const boxTop = window.pageYOffset + box.getBoundingClientRect().top;
        const boxHeight = box.clientHeight;
        if (window.pageYOffset >= boxTop - boxHeight * 1.5) {
          box.classList.add("slide-in-right");
        }
      });
    }
  });
});
