module.exports = (state, action) => {
   switch (action.type) {
      case 'CHANGE_HOME_TEXT': {
         return {
            title: action.title,
            description: action.description,
            commandDescription: action.commandDescription
         };
      }
         break;
      default:
         return state;
         break;   
   }
};