import Telegram from "../assets/telegram-1.webp";

const Reminder = ({ firstOne, secondOne, subOne, subTwo, thirdOne }) => {
    return (
        <div className="bg-white text-[#2B3674] rounded-xl shadow-md p-6 flex flex-col lg:flex-row items-center justify-between gap-8 ">
            {/* Texto */}
            <div className="flex flex-col gap-6 max-w-2xl">
                <h2 className="text-2xl font-semibold">¡Recordatorio!</h2>
                <ul className="list-disc pl-5">
                    <li className="mb-2">{firstOne}</li>
                    <li className="mb-2">
                        {secondOne}
                        <ul className="list-disc pl-5 mt-1">
                            <li>{subOne}</li>
                            <li>{subTwo}</li>
                        </ul>
                    </li>
                    <li className="mb-2">{thirdOne}</li>
                </ul>
            </div>

            {/* Imagen */}
            <div className="w-full max-w-sm">
                <img src={Telegram} alt="Recordatorio" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default Reminder;
