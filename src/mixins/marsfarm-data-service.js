import temperaturesJSON from "./temperatures.js";

const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action);
  switch (action.type) {
    case "GET_TEMPERATURES":
      /**
       * This is what this service will look like (possibly using async/await)
       * For now, though, we're just gonna pipe back some json
       */

      // fetch("src/pages/temperatures.json")
      //   .then(resp => resp.json())
      //   .then(data => {
      //     next({
      //       type: "GET_TEMPERATURES_RECEIVED",
      //       data
      //     });
      //   });

      next({
        type: "GET_TEMPERATURES_RECEIVED",
        data: temperaturesJSON
      });
      break;
    default:
      next(action);
      break;
  }
};

export default dataService;
