function toggleTheme(){
  const html = document.documentElement;
  const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
}

window.onload = () => {
  const saved = localStorage.getItem("theme");
  if(saved) document.documentElement.dataset.theme = saved;
};
