const markInventory = (clothingItems) => {
  const clothingOptions = [];
  for (let item of clothingItems) {
    for (let size = 1; size < 6; size++) {
      clothingOptions.push(item + ' Size: ' + size);
    }
  }
  return clothingOptions;
};

console.log(markInventory(['T-Shirt', 'Sweater']));
