import Telegram from "../assets/telegram-1.webp"
const Reminder = ({firstOne, secondOne, subOne, subTwo, thirdOne}) => {
    return (
        <div className="bg-[#fff] text-[#2B3674] rounded-xl shadow-md p-4 flex items-center justify-center">
            <div className="flex flex-col gap-8 max-w-2xl">
                <h2 className="text-2xl font-semibold">¡Recordatorio!</h2>
                <ul className="list-disc">
                    <li className="mb-2">
                        {firstOne}
                    </li>
                    <li className="mb-2">
                        {secondOne}
                        <ul>
                            <li>
                                {subOne}
                            </li>
                            <li>
                                {subTwo}
                            </li>
                        </ul>
                    </li>
                    <li className=" mb-2">
                        {thirdOne}
                    </li>
                </ul>
            </div>
            <div>
                <img src={Telegram} alt="" className="w-96" />
            </div>

        </div>
    )
}
export default Reminder;