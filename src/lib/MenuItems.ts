
export const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/homes.png",
                label: "Home",
                href: "/",
                permission: ["admin", "manager", "operator", "customer"],
            },
            {
                icon: "/manager.png",
                label: "Manager",
                href: "/list/manager",
                permission: ["admin", "manager"],
            },
            {
                icon: "/operator.png",
                label: "Operator",
                href: "/list/operator",
                permission: ["admin", "operator", "manager"],
            },
            {
                icon: "/customer.png",
                label: "Customer",
                href: "/list/customer",
                permission: ["admin", "customer"],
            },

            {
                icon: "/salons.png",
                label: "Salons",
                href: "/list/salons",
                permission: ["admin", "manager"],
            },
            {
                icon: "/salon-services.png",
                label: "Salon Services",
                href: "/list/services",
                permission: ["admin", "manager"],
            },
            //   {
            //     icon: "/lesson.png",
            //     label: "Lessons",
            //     href: "/list/lessons",
            //     permission: ["admin", "teacher"],
            //   },
            //   {
            //     icon: "/exam.png",
            //     label: "Exams",
            //     href: "/list/exams",
            //     permission: ["admin", "teacher", "student", "parent"],
            //   },
            //   {
            //     icon: "/assignment.png",
            //     label: "Assignments",
            //     href: "/list/assignments",
            //     permission: ["admin", "teacher", "student", "parent"],
            //   },
            //   {
            //     icon: "/result.png",
            //     label: "Results",
            //     href: "/list/results",
            //     permission: ["admin", "teacher", "student", "parent"],
            //   },
            {
                icon: "/history.png",
                label: "History",
                href: "/list/history",
                permission: ["admin", "manager", "operator", "customer"],
            },
            {
                icon: "/events.png",
                label: "Events",
                href: "/list/events",
                permission: ["admin", "manager", "operator", "customer"],
            },
            {
                icon: "/messages.png",
                label: "Messages",
                href: "/list/messages",
                permission: ["admin", "manager", "operator", "customer"],
            },
            {
                icon: "/announcements.png",
                label: "Announcement",
                href: "/list/announcement",
                permission: ["admin", "manager", "operator", "customer"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profiles.png",
                label: "Profile",
                href: "/profile",
                permission: ["admin", "manager", "operator", "customer"],
            },
            {
                icon: "/settings.png",
                label: "Settings",
                href: "/settings",
                permission: ["admin", "manager", "operator", "customer"],
            },
            {
                icon: "/logouts.png",
                label: "Logout",
                href: "/logout",
                permission: ["admin", "manager", "operator", "customer"],
            },
        ],
    },
];

export const AuthItems = [
    {
        icon: "/manager.png",
        label: "Manager",
        href: "/Admin",
        permission: ["admin", "manager"],
    },
    {
        icon: "/operator.png",
        label: "Operator",
        href: "/list/operator",
        permission: ["admin", "operator", "manager"],
    },
    {
        icon: "/customer.png",
        label: "Customer",
        href: "/list/customer",
        permission: ["admin", "customer"],
    }
]
