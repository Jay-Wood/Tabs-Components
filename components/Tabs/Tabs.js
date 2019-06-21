
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab
    // console.log("this.data = ", this.data)
    
    // Using the custom data attribute get the associated Item element
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    // console.log("this.itemElement = ", this.item)
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.item);
    // console.log("tabItem = ", this.tabItem)
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => {
      this.select()})

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links2 = document.querySelectorAll(".tabs-link");
    // console.log("links2 = ", links2)

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links2
    links2.forEach(linky => {linky.classList.remove("tabs-link-selected")});
    // console.log("link2 = ", links2)

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add("tabs-link-selected")
    
    // Call the select method on the item associated with this link
    this.tabItem.select()
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item") ;

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => {item.classList.remove(".tabs-item")});
    
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }
}

/* START HERE: 
- Select all classes named ".tabs-link" and assign that value to the links variable
- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
*/

let links = document.querySelectorAll(".tabs-link");
links.forEach(link => new TabLink(link));
// console.log("links var = ",links)