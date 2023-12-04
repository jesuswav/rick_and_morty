const Porfile = () => {
  return (
    <div className="pt-24 w-full mx-40 max-sm:mx-4">
      <header className="p-4 text-center">
        <h1 className="text-2xl">María</h1>
      </header>

      <div id="profile-banner" className="text-center p-8">
        <img
          src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
          alt="Foto de perfil"
          className="rounded-full w-32 h-32 object-cover mx-auto"
        ></img>
      </div>

      <div id="user-info" className="text-center mt-4">
        <h1 className="text-xl font-bold">María Guadalupe</h1>
        <p className="text-gray-200">17 / julio / 2005 | Calvillo | Licenciada</p>
      </div>

      <div id="user-stats" className="flex justify-around p-4">
        <div>
          <p className="font-bold">Publicaciones</p>
          <p className="text-gray-200">123</p>
        </div>
        <div>
          <p className="font-bold">Seguidores</p>
          <p className="text-gray-200">456</p>
        </div>
        <div>
          <p className="font-bold">Siguiendo</p>
          <p className="text-gray-200">789</p>
        </div>
      </div>

      <div className="px-20 py-10 max-sm:px-8">
        <h1 className="font-bold py-2">Biografía:</h1>
        <div>
          Ana García, apasionada de la fotografía y la escritura, encuentra la
          belleza en los detalles cotidianos. Con una cámara siempre a mano,
          captura momentos que cuentan historias. Sus palabras, tejidas con
          sensibilidad, dan vida a sus pensamientos y experiencias. Amante de la
          naturaleza, disfruta de largas caminatas y la luz suave del atardecer.
          Cree en la importancia de compartir la felicidad y la inspiración a
          través de sus obras. Intereses: Fotografía de naturaleza y retratos
          Escritura creativa y poesía Senderismo y exploración Café y libros
          acogedores Arte callejero y cultura local.
        </div>
      </div>

      <footer className="text-center p-4 w-full">
        © 2023 Nombre del Sitio Web. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Porfile;
