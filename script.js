window.onload = getParameter();

function getParameter(parameter){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameter);
}