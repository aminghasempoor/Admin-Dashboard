import UserCard from "@/components/AdminComponents/UserCard";
import {CountChart} from "@/components/CountChart";
import {AnnouncementChart} from "@/components/AnnouncementChart";

const AdminComponent = () => {
    return (
        <div className="p-4 flex gap-2 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-3 w-full justify-between flex-wrap lg:flex-nowrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* MIDDLE CHARTS */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AnnouncementChart />
                    </div>
                </div>
                {/* BOTTOM CHART */}
                {/*<div className="w-full h-[500px]">*/}
                {/*    <FinanceChart />*/}
                {/*</div>*/}
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                {/*<EventCalendar />*/}
                {/*<Announcements/>*/}
            </div>
        </div>
    );
};

export default AdminComponent;