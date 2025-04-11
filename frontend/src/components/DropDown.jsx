import React from "react";

const DropDown = () => {
    return (
        <>
        <div className="flex flex-col justify-between">
            <ul className=" absolute flex-col gap-4 dropDown">
                            <li><a href="">PCs</a></li>
                            <li><a href="">Consola</a></li>
                            <li><a href="">Accesorios</a></li>
                        </ul>
        </div>

        </>
    )
}
export default DropDown