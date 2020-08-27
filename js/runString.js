function animateMarquee(el, duration) {
  const innerEl = el.querySelector(".run-str_inner");
  const innerWidth = innerEl.offsetWidth;
  const cloneEl = innerEl.cloneNode(true);
  el.appendChild(cloneEl);

  let start = performance.now();
  let progress;
  let translateX;

  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;

    if (progress > 1) {
      progress %= 1;
      start = now;
    }

    translateX = innerWidth * progress;

    innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
    requestAnimationFrame(step);
  });
}

const runStr1 = document.querySelector("#run-str1");
const runStr2 = document.querySelector("#run-str2");

animateMarquee(runStr1, 10000);
animateMarquee(runStr2, 15000);
