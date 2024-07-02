let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let nums = document.querySelectorAll(".num");
let lines = document.querySelectorAll(".line");
let imgs = document.querySelectorAll("img");
let count = 0;

next.addEventListener("click", function () {
  if (count < 2) {
    lines[count].classList.add("active");
    nums[count + 1].classList.add("active");
    imgs.forEach((i) => (i.style.display = "none"));
    imgs[count + 1].style.display = "block";
    prev.classList.add("active");
    count++;
    console.log(count);
  } else if (count >= 2) {
    lines[count].classList.add("active");
    nums[count + 1].classList.add("active");
    imgs.forEach((i) => (i.style.display = "none"));
    imgs[count + 1].style.display = "block";
    next.classList.add("active");
    count = 2;
  }
});
prev.addEventListener("click", function () {
  if (count > 0) {
    lines[count].classList.remove("active");
    nums[count + 1].classList.remove("active");
    // imgs
    imgs.forEach((i) => (i.style.display = "none"));
    imgs[count].style.display = "block";
    next.classList.remove("active");
    count--;
  } else if (count <= 0) {
    lines[count].classList.remove("active");
    nums[count + 1].classList.remove("active");
    // imgs
    imgs.forEach((i) => (i.style.display = "none"));
    imgs[count].style.display = "block";
    prev.classList.remove("active");
    count = 0;
  }
});
