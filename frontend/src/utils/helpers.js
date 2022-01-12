export const handleQuantity = (type, setFunction, quantity, countInStock) => {
    if (type == "plus" && quantity < countInStock) {
        setFunction(prev => prev + 1)

    } else if (type == "minus" && quantity > 1) {
        setFunction(prev => prev - 1)
    }
  }
  