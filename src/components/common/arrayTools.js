export function copyArrayWithEditedItemById( items, editedItem ){
  let updatedItems = [...items]  

  let index = updatedItems.findIndex(function(item){
    let matched = editedItem._id === item._id;
    return matched;
  })

  if(index + 1) {
    updatedItems[index] = editedItem;
  }
  
  return updatedItems;
}

