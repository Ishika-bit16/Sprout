import "/src/css/Dashboard.css";
import tree from "../assets/Default.svg";
import {
    Wallet,
    ArrowDownLeft,
    ArrowUpRight,
} from "lucide-react";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboardHeader">
                <div className="dashboardHeaderLeft">
                    <h1>Sprout</h1>
                    <p>Spend kindly. Grow slowly</p>
                </div>
                <div className="dashboardHeaderRight">
                    <div className="nav.bar">
                        <Link to="/Dashboard">Board</Link> 
                        <Link to="/Add">+Add</Link> 
                        <Link to="/History">History</Link>
                       
                         
                    </div>
                </div>
            </div>

            {/* LEFT SIDE */}

            <section className="treeCard">

                <div className="treeText">
                    <p>Your spending garden</p>

                    <h1>Your tree is thriving!</h1>

                    <span>
                        Lots of room to grow this month.
                    </span>
                </div>

                <div className="treeContainer">
                    <img src={tree} alt="Sprout Tree" />
                </div>

                <div className="treeFooter">

                    <span>Monthly Budget</span>

                    <span>$850/$950</span>

                </div>

                <div className="progressBar">
                    <div className="progressFill"></div>
                </div>

            </section>



            {/* RIGHT SIDE */}

            <section className="rightCards">

                <div className="balanceCard">

                    <div className="iconCircle">
                        <Wallet size={28} />
                    </div>

                    <div>

                        <p>Balance</p>

                        <h2>$4,250</h2>

                    </div>

                </div>



                <div className="smallCards">

                    <div className="income">

                        <ArrowDownLeft size={30} />

                        <h3>$3,500</h3>

                        <p>Income</p>

                    </div>

                    <div className="expense">

                        <ArrowUpRight size={30} />

                        <h3>$1,250</h3>

                        <p>Expense</p>

                    </div>

                </div>



                <div className="chartCard">

                    <div className="chartHeader">

                        <h3>Monthly Chart</h3>

                    </div>

                    <div className="chart">

                        <div className="circle"></div>

                    </div>

                </div>

            </section>

        </div>
    );
}