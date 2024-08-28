const FormCheckout = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
    return (
      <form onSubmit={handleSubmitForm} className="formCheckout">
        <label className="formText">Nombre: </label>
        <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />
  
        <label className="formText">Telefono:</label>
        <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />
  
        <label className="formText">Email:</label>
        <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput} />
  
        <button type="submit" className="buttonForm">
          Enviar orden
        </button>
      </form>
    );
  };
  export default FormCheckout;