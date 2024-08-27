import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import Totalbalancebox from "@/components/Totalbalancebox";
import { getLoggedInUser } from "@/lib/actions/user.actions";


const Home = async () => { 
    const logedIn = await getLoggedInUser();
    return (
        <section className = "home"> 
        <div className="home-content">
            <header className = "home-header"> 
                <HeaderBox 
                    type = "greeting"
                    title = "Welcome"
                    user = {logedIn?.name || 'Guest'}
                    subtext = "Access and manage your account and transaction efficiently."
                />

                <Totalbalancebox 
                    accounts={[]}
                    totalBanks = {1}
                    totalCurrentBalance = {1250.35}
                
                
                />
            </header>
        RECENT TRANSACTION 
        </div>
        <RightSidebar
            user = {logedIn} 
            transactions = {[]}
            banks = {[{currentBalance: 1234.50}]}
        />
        </section>
    )
}

export default Home