
function createRestaurant(restaurantName, menus) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;
}


// function addMenuItem(pizzaRestaurant, newMenuItem) {
//   pizzaRestaurant.menus.lunch.push(newMenuItem)
//   //return pizzaRestaurant.menus.lunch
// }

// function addMenuItem(pizzaRestaurant, newMenuItem) {
//   if (newMenuItem.type === "lunch") {
//     pizzaRestaurant.menus.lunch.push(newMenuItem)
//   } else if (newMenuItem.type === "breakfast") {
//     pizzaRestaurant.menus.breakfast.push(newMenuItem)
//   } else if (newMenuItem.type === "dinner") {
//     pizzaRestaurant.menus.dinner.push(newMenuItem)
//   }
// }

function addMenuItem(pizzaRestaurant, newMenuItem) {
  if (newMenuItem.type === "lunch" && pizzaRestaurant.menus.lunch.includes(newMenuItem) === false) {
    pizzaRestaurant.menus.lunch.push(newMenuItem)
  } else if (newMenuItem.type === "breakfast" && pizzaRestaurant.menus.breakfast.includes(newMenuItem) === false) {
    pizzaRestaurant.menus.breakfast.push(newMenuItem)
  } else if (newMenuItem.type === "dinner" &&  pizzaRestaurant.menus.dinner.includes(newMenuItem) === false) {
    pizzaRestaurant.menus.dinner.push(newMenuItem)
  }
}



function removeMenuItem(pizzaRestaurant, newMenuItem, type) {
  for (i = 0; i < pizzaRestaurant.menus.lunch.length; i++)
  if (pizzaRestaurant.menus.lunch[i].name === newMenuItem) {
    restaurant.menus.lunch.splice(0, 1)
    return `No one is eating our ${newMenuItem} - it has been removed from the ${type} menu!`
  }
  for (i = 0; i < pizzaRestaurant.menus.breakfast.length; i++)
  if (pizzaRestaurant.menus.breakfast[i].name === newMenuItem) {
    pizzaRestaurant.menus.breakfast.splice(0, 1)
    return `No one is eating our ${newMenuItem} - it has been removed from the ${type} menu!`
  }
  for (i = 0; i < pizzaRestaurant.menus.dinner.length; i++)
  if (pizzaRestaurant.menus.dinner[i].name === newMenuItem) {
    pizzaRestaurant.menus.dinner.splice(0, 1)
    return `No one is eating our ${newMenuItem} - it has been removed from the ${type} menu!`
  }
    return `Sorry, we don't sell ${newMenuItem}, try adding a new recipe!`
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
