

function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(newOrder);
  }
  return deliveryOrders;
}


function refundOrder(orderNumber, deliveryOrders) {
  deliveryOrders.splice(orderNumber - 1, 1);
  return deliveryOrders;
}


function listItems(deliveryOrders) {
  var itemNames = "";
  for (var i = 0; i < deliveryOrders.length; i++) {
    var order = deliveryOrders[i];
    var newItemName = order.item;
    if (i === 0) {
      itemNames = itemNames + newItemName
    } else {
      itemNames = itemNames + `, ${newItemName}`
    }
    // if (i === deliveryOrders.length - 1) {
    //   itemNames = itemNames + newItemName
    // } else {
    //   itemNames = itemNames + `${newItemName}, `
    // }
  }
  return itemNames
}


function searchOrder(deliveryOrders, itemName) {
  var itemFound = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    var name = deliveryOrders[i].item
    if (name === itemName) {
       itemFound = true
    }
  }
  return itemFound
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
