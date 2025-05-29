import { Pencil, Trash } from "lucide-react";

const DataGrid = ({ title, columns, rows, deleteRow, updateRow, loading }) => {
    return (
      <div className="flex flex-col gap-6 relative overflow-x-auto sm:rounded-lg">
        <h2 className="p-4 text-xl font-semibold">{title}</h2>
        <div className="w-full shadow-md border border-gray-300 rounded-full"></div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 p-2">
          <thead className="text-xs uppercase text-black">
            <tr>
              {Object.keys(columns).map((columnName) => (
                <th key={columnName} className="px-6 py-3">{columnName}</th>
              ))}
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
  
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={Object.keys(columns).length + 1} className="text-center py-4">
                  Cargando...
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={row._id || index} className="odd:bg-white shadow-sm">
                  {Object.values(columns).map((columnKey, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 text-[#333]">
                      {row[columnKey] || "-"}
                    </td>
                  ))}
                  <td className="px-6 py-4">
                    <div className="flex gap-4 text-[#2600FE]">
                      <Trash
                        onClick={() => deleteRow(row._id)}
                        className="cursor-pointer"
                      />
                      <Pencil
                        onClick={() => updateRow(row)}
                        className="cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  };
  
export default DataGrid;