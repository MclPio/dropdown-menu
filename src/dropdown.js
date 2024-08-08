class DropDown {
  static onClick() {
    const dropdownItems = document.getElementsByClassName("dropdown")
    
    for (let i = 0; i < dropdownItems.length; i++) {
      const dropdown = dropdownItems[i]
      const dropdownToggle = dropdown.getElementsByClassName('dropdown-toggle')[0]
      const dropdownMenu = dropdown.getElementsByClassName('dropdown-menu')[0]
      dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle("visible")
      })

      document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
          dropdownMenu.classList.remove("visible");
        }
      });
    }
    
  }

  static onHover() {
    const dropdownItems = document.getElementsByClassName("dropdown")
    
    for (let i = 0; i < dropdownItems.length; i++) {
      const dropdown = dropdownItems[i]
      const dropdownToggle = dropdown.getElementsByClassName('dropdown-toggle')[0]
      const dropdownMenu = dropdown.getElementsByClassName('dropdown-menu')[0]
      
      dropdownToggle.onmouseenter = () => {
        dropdownMenu.classList.add("visible")
      }

      dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.classList.remove('visible')
      })
      
    }
  }
}

export { DropDown }