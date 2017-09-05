module.exports = (state, action) => {
   switch (action.type) {
      case 'COUNTER_UP': {
         return {
            counter: state.counter + 1
         };
      }
         break;
      case 'COUNTER_DOWN': {
         return {
            counter: state.counter - 1
         };
      }
         break;   
      default:
         return state;
         break;   
   }
};