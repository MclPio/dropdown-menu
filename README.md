# Dropdown menu
`DropDown.onClick()` or `DropDown.onHover()` in your index.js

insert this component in your page
```html
  <div class="dropdown">
    <button class="dropdown-toggle">
      Dropdown
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Update</a>
      <a class="dropdown-item" href="#">Edit</a>
      <a class="dropdown-item" href="#">Delete</a>
    </div>
  </div>
```
insert this into your index page
```js
import { DropDown } from "@mclpio/dropdown-menu/src/index";
```