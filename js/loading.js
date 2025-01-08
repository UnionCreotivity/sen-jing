function loading(tag) {
  const imgTxt = $(".article-1-left-txt");
  imgTxt.css("opacity", 0);

  let number = $(tag).html();
  let parse = parseInt(number);

  let test;
  let timeRun = setInterval(() => {
    test = parse++;
    $(tag).text(test);
    if (test == 99) clearInterval(timeRun);
  }, 50);
}
loading(".loading-progress");

$(window).on("load", function () {
  gsap.to(".loading-page", {
    opacity: 0,
  });
});
