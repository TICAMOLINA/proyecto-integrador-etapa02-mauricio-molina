
const Formulario = () => {
  return (
    <>
        
        <h2>Formulario</h2>

        <form>
            <div>
                <label htmlFor="lbl-nombre">Nombre</label>
                <input type="text" id="lbl-nombre" name="nombre" value=""/>
            </div>
            <div>
                <label htmlFor="lbl-precio">Precio</label>
                <input type="text" id="lbl-precio" name="precio" value=""/>
            </div>
            <div>
                <label htmlFor="lbl-categoria">Categoría</label>
                <input type="text" id="lbl-categoria" name="categoria" value=""/>
            </div>
            <div>
                <label htmlFor="lbl-descripcion">Descripción</label>
                <input type="text" id="lbl-descripcion" name="descripcion" value=""/>
            </div>
            <div>
                <label htmlFor="lbl-stock">Stock</label>
                <input type="text" id="lbl-stock" name="stock" value=""/>
            </div>
            <div>
                <label htmlFor="lbl-foto">Foto</label>
                <input type="text" id="lbl-foto" name="foto" value=""/>
            </div>
            <div>
                <label htmlFor="lbl-envio">Envío</label>
                <input type="checkbox" id="lbl-envio" name="envio" checked=""/>
            </div>

            <button type="submit">Guardar : Editar</button>
            <button type="reset">Limpiar</button>
        </form>
    </>
  )
}

export default Formulario