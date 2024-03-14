import { useEffect, useState } from "react"
import Appbar from "../components/AppBar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import axios from "axios"

const Dashboard = () => {
    const [value, setValue] = useState(null); // Initialize value as null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setValue(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Appbar />
            <div className="m-8">
                {value !== null && <Balance value={value} />}
                <Users />
            </div>
        </div>
    );
}

export default Dashboard;
