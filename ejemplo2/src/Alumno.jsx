export const Alumno = ({ dato, funcAgregarNotas }) => {
    return (
        <>
            <div>{dato.nombre}</div>
            <div>{dato.edad}</div>
            <div>{JSON.stringify(dato.notas)}</div>
            <button onClick={() => funcAgregarNotas(dato)}>Agregar notas</button>
        </>
    )
}
