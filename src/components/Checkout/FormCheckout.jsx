const FormCheckout = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
    return (
      <form onSubmit={handleSubmitForm} className="form-checkout">
        <label>Nombre: </label>
        <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />
  
        <label>Telefono</label>
        <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />
  
        <label>Email</label>
        <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput} />
  
        <button type="submit" className="button-form">
          Enviar orden
        </button>
      </form>
    );
  };
  export default FormCheckout;