document.addEventListener('DOMContentLoaded', () => {
  let cube = document.querySelector('.image-cube');
  let container = document.querySelector('.container');
  let btnNext = document.getElementById('next');
  let btnPrev = document.getElementById('prev');

  let pos = 0;

  btnNext.addEventListener('click', () => {
    pos += 90;
    cube.style.transform = `rotateY(${pos}deg)`;
    container.animate(
      [
        { transform: `scale(1)` },
        { transform: `scale(0.5)` },
        { transform: `scale(1)` },
      ],
      {
        duration: 2000,
        iterations: 1,
      }
    );
  });

  btnPrev.addEventListener('click', () => {
    pos -= 90;
    cube.style.transform = `rotateY(${pos}deg)`;
    container.animate(
      [
        { transform: `scale(1)` },
        { transform: `scale(0.5)` },
        { transform: `scale(1)` },
      ],
      {
        duration: 2000,
        iterations: 1,
      }
    );
  });
});
