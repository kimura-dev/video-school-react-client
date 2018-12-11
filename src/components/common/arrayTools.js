export function copyArrayWithEditedItemById( items, editedItem ){
  let updatedItems = [...items]  // Make the the new array

  let index = updatedItems.findIndex(function(item){
    let matched = editedItem._id === item._id;
    return matched;
  })

  if(index) {
     updatedItems[index] = editedItem;
  }

  return updatedItems;
}

