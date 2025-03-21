import { useState } from "react"

const Formulario = () => {

    const formInicial = {
        id: null,
        nombre: '',
        precio: '',
        categoria: '',
        descripcion: '',
        stock: '',
        foto: '',
        envio: false
    }

    const [form, setForm] = useState(formInicial)

  return (
    <>
        
        <h2>Agregar : Editar</h2>

        <form>
            <div>
                <label htmlFor="lbl-nombre">Nombre</label>
                <input type="text" id="lbl-nombre" name="nombre" value={form.nombre}/>
            </div>
            <div>
                <label htmlFor="lbl-precio">Precio</label>
                <input type="text" id="lbl-precio" name="precio" value={form.precio}/>
            </div>
            <div>
                <label htmlFor="lbl-categoria">Categoría</label>
                <input type="text" id="lbl-categoria" name="categoria" value={form.categoria}/>
            </div>
            <div>
                <label htmlFor="lbl-descripcion">Descripción</label>
                <input type="text" id="lbl-descripcion" name="descripcion" value={form.descripcion}/>
            </div>
            <div>
                <label htmlFor="lbl-stock">Stock</label>
                <input type="text" id="lbl-stock" name="stock" value={form.stock}/>
            </div>
            <div>
                <label htmlFor="lbl-foto">Foto</label>
                <input type="text" id="lbl-foto" name="foto" value={form.foto}/>
            </div>
            <div>
                <label htmlFor="lbl-envio">Envío</label>
                <input type="checkbox" id="lbl-envio" name="envio" checked={form.envio}/>
            </div>

            <button type="submit">Guardar : Editar</button>
            <button type="reset">Limpiar</button>
        </form>
    </>
  )
}

export default Formulario