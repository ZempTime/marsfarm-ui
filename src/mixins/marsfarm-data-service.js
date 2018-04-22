const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action);
  switch (action.type) {
    case "GET_TEMPERATURES":
      fetch("src/pages/temperatures.json")
        .then(resp => resp.json())
        .then(data => {
          next({
            type: "GET_TEMPERATURES_RECEIVED",
            data
          });
        });
      break;
    default:
      next(action);
      break;
  }
};

export default dataService;
