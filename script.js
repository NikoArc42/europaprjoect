function dropfunc() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.ham')) {
      let dropdown = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdown.length; i++) {
        let openDropdown = dropdown[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
