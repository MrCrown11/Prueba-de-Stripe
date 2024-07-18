function previewImages(event, querySelector) {
    // Recuperamos el input que desencadenó la acción
    const input = event.target;

    // Recuperamos el contenedor donde cargaremos las imágenes
    const previewsContainer = document.querySelector(querySelector);

    // Limpiamos el contenedor antes de agregar nuevas previsualizaciones
    previewsContainer.innerHTML = '';

    // Verificamos si hay imágenes seleccionadas
    if (!input.files.length) return;

    // Iteramos sobre los archivos seleccionados
    Array.from(input.files).forEach(file => {
        // Creamos la url
        const objectURL = URL.createObjectURL(file);

        // Creamos una nueva imagen
        const img = document.createElement('img');
        img.src = objectURL;
        img.style.width = '100px'; // Ajusta el tamaño según sea necesario
        img.style.margin = '5px'; // Espaciado entre las imágenes

        // Agregamos la imagen al contenedor
        previewsContainer.appendChild(img);
    });
}

function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$imgPreview = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$imgPreview.src = objectURL;
                
}