//coger elementos del Doom
const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('.elemnts');

// funcion
buttons.forEach(button => {
  button.addEventListener('click', () => { //"escuchar" los clicks sobre los botones númericos
    event.preventDefault(); // evitar que la pagina se actulize al enviar el formulario
    const buttonValue = button.textContent; // esta const se encarga de almazenar el contenido de button
    let newValue; //  almasenamiento de todo

    if (buttonValue === 'CE') {
            // boton de borrar todo
      newValue = '';
    } else if (buttonValue === 'C' || buttonValue === ' ') {
      //boton de borrar digíto por digíto
      newValue = resultInput.value.slice(0, -1);
    } else if (buttonValue === '=') {
      // evaluacion y ejecucion de operaciones
      let expression = resultInput.value;
      expression = expression.replace('x', '*');
      expression = expression.replace('÷', '/');
      expression = expression.replace('RESTO', '%');
      const result = eval(expression); // eval se encarga de evaluar cada expresion y ejecutarla, por esto "=" se define como resultado de manera automatica
      newValue = result; // datos almacenados de expresion
    } else {
      //agrega los datos pero no escribe el valor al input(solo almacena)
      newValue = resultInput.value + buttonValue;
    }

    // Actualizar el valor del campo de entrada(escribe los datos en el input)
    resultInput.value = newValue;
  });
});
