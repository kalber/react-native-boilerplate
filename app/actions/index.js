exports.changeHomeTexts = (title, description, commandDescription) => {
    return {
        type: 'CHANGE_HOME_TEXT',
        title: title,
        description: description,
        commandDescription: commandDescription
    }
};