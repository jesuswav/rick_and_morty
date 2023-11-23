const Porfile = () => {
  return (
    <div className="flex flex-col mt-16 items-center justify-evenly h-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl">Porfile</h1>
        <div className="flex flex-col justify-center items-center h-full">
          <img
            className="h-28 w-28"
            src="https://png.pngtree.com/png-clipart/20220213/original/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_7268049.png"
            alt="PorfilePic"
          ></img>
          <span className="flex w-full justify-center">
            <p className="pr-2">Nombre:</p>
            <p>Maria :)</p>
          </span>
          <span className="flex w-full justify-center">
            <p className="pr-2">Correo:</p>
            <p>maria@maria.com</p>
          </span>
          <span className="flex w-full justify-center">
            <p className="pr-2">Contraseña:</p>
            <p>*********</p>
          </span>
        </div>
      </div>
      <div className="h-full">
        <a>Cambiar contraseña</a>
        <a>Eliminar cuenta</a>
      </div>
    </div>
  );
};

export default Porfile;
