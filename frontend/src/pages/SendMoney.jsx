import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

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

            // After successful transfer, navigate back to dashboard
            navigate("/dashboard");

        } catch (error) {
            console.error("Error during transfer:", error);
            // Handle error
        }
    };

    return (
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
    );
}

export default SendMoney;
