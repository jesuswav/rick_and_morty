const Settings = () => {
  return (
    <div className="container mx-auto mt-24 mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-color-fondo-oscuro p-6 rounded-xl shadow-md border-[1px]">
          <h2 className="text-lg font-bold mb-4">Cambiar Contraseña</h2>
          <p className="text-gray-200 mb-4">
            Cambia tu contraseña para garantizar la seguridad de tu cuenta.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Cambiar Contraseña
          </button>
        </div>
        <div className="bg-color-fondo-oscuro p-6 rounded-xl shadow-md border-[1px]">
          <h2 className="text-lg font-bold mb-4">Notificaciones</h2>
          <p className="text-gray-200 mb-4">
            Configura tus preferencias de notificaciones para mantenerte
            informado.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            Configuración de Notificaciones
          </button>
        </div>
        <div className="bg-color-fondo-oscuro p-6 rounded-xl shadow-md border-[1px]">
          <h2 className="text-lg font-bold mb-4">Configuración de Perfil</h2>
          <p className="text-gray-200 mb-4">
            Personaliza la información de tu perfil según tus preferencias.
          </p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300">
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
