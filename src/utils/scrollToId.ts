export function smoothScrollTo(targetId: string, duration = 1000) {
  const target = document.getElementById(targetId);
  const header = document.querySelector("header"); // pretpostavka: <header> tag

  if (!target) return;

  const headerHeight = header?.getBoundingClientRect().height || 0;

  const start = window.scrollY;
  const end =
    target.getBoundingClientRect().top + window.scrollY - headerHeight;
  const distance = end - start;

  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * progress);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
