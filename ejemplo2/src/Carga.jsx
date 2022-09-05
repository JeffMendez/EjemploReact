import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { read, utils, writeFile } from "xlsx";

export const Carga = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [cols, setCols] = useState([]);
    const [rows, setRows] = useState([]);
    const [excelData, setExcelData] = useState(null);

    useEffect(() => {
        setExcelData(JSON.parse(localStorage.getItem("datos")));
    }, [])
    

    const carga = async(datos) => {
        const archivo = datos.archivo[0];
        const data = await archivo.arrayBuffer();

        const workbook = read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[1]];

        const excelJSON = utils.sheet_to_json(worksheet, { header: 1, defval: ""});
        excelJSON.map((data, i) => {
            if (i == 0) {
                setCols(data);
            } else {
                setRows(rows => [...rows, data]);
            }
        });

        setExcelData(excelJSON);
        localStorage.setItem("datos", JSON.stringify(excelJSON));
    }

    const exportarExcel = () => {
        const workbook = utils.book_new();
        const worksheet = utils.json_to_sheet(excelData);

        utils.book_append_sheet(workbook, worksheet, "Notas actualizadas");
        writeFile(workbook, "Reporte nuevo.xlsx");
    }



    return (
        <>
            <div>Carga</div>

            <form onSubmit={handleSubmit(carga)}>
                <input type="text" {...register("nombre", { required: true })} />
                { errors.nombre && <span>Nombre requerido</span> }
                <br />
                <input type="file" {...register("archivo")} accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                <br />
                <input type="submit" /> 
            </form>

            <br />

            <table>
                <thead>
                    <tr>
                        {
                            cols.map(col => (<th key={col}>{col}</th>))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(row => (
                            <tr key={row}>
                                {
                                    row.map(val => (<td key={val}>{val}</td>))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {
                (rows.length > 0)
                &&
                <button onClick={exportarExcel}>Exportar</button>
            }
        </>
    )
}
