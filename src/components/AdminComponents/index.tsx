import UserCard from "@/components/AdminComponents/UserCard";
import {CountChart} from "@/components/CountChart";
import {AnnouncementChart} from "@/components/AnnouncementChart";
import {VisitorChart} from "@/components/VisitorChart";
import EventCalendar from "@/components/EventCalendar";

const AdminComponent = () => {
    return (
        <div className="p-4 flex gap-2 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-3/4 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-3 w-full justify-between flex-wrap lg:flex-nowrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 h-[400px]">
                        <CountChart />
                    </div>
                    <div className="w-full lg:w-2/3 h-[400px]">
                        <VisitorChart />
                    </div>
                </div>
                <div className="w-full h-[500px]">
                    <AnnouncementChart />
                </div>
            </div>
            <div className="w-full lg:w-1/4 flex flex-col gap-8">
                <EventCalendar />
                {/*<Announcements/>*/}
            </div>
        </div>
    );
};

export default AdminComponent;