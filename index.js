const activePage = window.location.pathname;
const navlist = document.querySelectorAll("li")
const navlink = document.querySelectorAll("a");

navlist.forEach(link => {
  navlink.forEach(item => {
    if(item.href.includes(`${activePage}`)){
      // link.classList.add("active")
      item.parentNode.classList.add("active")
    }

  })
})

