import { Pencil, Trash } from "lucide-react"
const TablasDatos = () => {
  return (

<div className="p-6 bg-[#F4F7FE] min-h-dvh flex flex-col gap-8">
    <div class="relative overflow-x-auto sm:rounded-lg p-6">
  <h2 className="p-4">Lista de Usuarios</h2>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs uppercase text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-[#333]">
                    Apple MacBook Pro 17"
                </th>
                <td class="flex gap-4 px-6 py-4 text-[#2600FE]">
                    <Trash/>
                    <Pencil/>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>

  )
};

export default TablasDatos;