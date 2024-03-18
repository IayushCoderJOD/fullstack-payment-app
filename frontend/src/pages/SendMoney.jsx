import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    const [showLoadingCircle, setShowLoadingCircle] = useState(false)

    const handleTransfer = async () => {
        try {
            await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount: amount
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setShowLoadingCircle(true);
            setTimeout(() => {
                navigate("/dashboard");
            }, 3000)

        } catch (error) {
            console.error("Error during transfer:", error);
            // Handle error
        }
    };

    return (
        <>

            {!showLoadingCircle ?
                (
                    <div style={{
                        background:
                            'rgb(10, 0, 89)',
                        backgroundImage:
                            'linear-gradient(90deg, rgba(10, 0, 89, 1) 0%, rgba(111, 172, 190, 1) 96%, rgba(0, 212, 255, 1) 100%)',
                    }} class="flex justify-center h-screen ">
                        <div className="h-full flex flex-col justify-center">
                            <div
                                class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
                            >
                                <div class="flex flex-col space-y-1.5 p-6">
                                    <h2 class="text-3xl font-bold text-center">Send Money</h2>
                                </div>
                                <div class="p-6">
                                    <div class="flex items-center space-x-4">
                                        <div class="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                                            <span class="text-2xl text-white">{name[0].toUpperCase()}</span>
                                        </div>
                                        <h3 class="text-2xl font-semibold">{name}</h3>
                                    </div>
                                    <div class="space-y-4">
                                        <div class="space-y-2">
                                            <label
                                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                for="amount"
                                            >
                                                Amount (in Rs)
                                            </label>
                                            <input
                                                type="number"
                                                onChange={(e) => {
                                                    setAmount(e.target.value)
                                                }}
                                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                id="amount"
                                                placeholder="Enter amount"
                                            />
                                        </div>
                                        <button
                                            onClick={handleTransfer}
                                            class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-blue-900 text-white"
                                        >
                                            Initiate Transfer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{
                        background:
                            'rgb(10, 0, 89)',
                        backgroundImage:
                            'linear-gradient(90deg, rgba(10, 0, 89, 1) 0%, rgba(111, 172, 190, 1) 96%, rgba(0, 212, 255, 1) 100%)',
                    }} class="flex justify-center h-screen align-middle items-center text-center">

                        <div className="flex flex-col justify-center items-center" role="status">
                            <svg aria-hidden="true" class="w-20 h-20 text-gray-200 animate-spin dark:text-gray-200 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <div>
                                <h1 className="text-2xl font-bold pt-3">Loading the transaction.....</h1>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    );
}

export default SendMoney;
