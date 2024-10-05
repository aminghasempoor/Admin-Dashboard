
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
                href: "/dashboard/manager",
                permission: ["admin", "manager"],
            },
            {
                icon: "/operator.png",
                label: "Operator",
                href: "/dashboard/operator",
                permission: ["admin", "operator", "manager"],
            },
            {
                icon: "/customer.png",
                label: "Customer",
                href: "/dashboard/customer",
                permission: ["admin", "customer"],
            },

            {
                icon: "/salons.png",
                label: "Salons",
                href: "/dashboard/salons",
                permission: ["admin", "manager"],
            },
            {
                icon: "/salon-services.png",
                label: "Salon Services",
                href: "/dashboard/services",
                permission: ["admin", "manager"],
            },
            //   {
            //     icon: "/lesson.png",
            //     label: "Lessons",
            //     href: "/dashboard/lessons",
            //     permission: ["admin", "teacher"],
            //   },
            //   {
            //     icon: "/exam.png",
            //     label: "Exams",
            //     href: "/dashboard/exams",
            //     permission: ["admin", "teacher", "student", "parent"],
            //   },
            //   {
            //     icon: "/assignment.png",
            //     label: "Assignments",
            //     href: "/dashboard/assignments",
            //     permission: ["admin", "teacher", "student", "parent"],
            //   },
            //   {
            //     icon: "/result.png",
            //     label: "Results",
            //     href: "/dashboard/results",
            //     permission: ["admin", "teacher", "student", "parent"],
            //   },
            {
                icon: "/history.png",
                label: "History",
                href: "/dashboard/history",
                permission: ["admin", "manager", "operator", "customer"],
            },
            {
                icon: "/events.png",
                label: "Events",
                href: "/dashboard/events",
                permission: ["admin", "manager", "operator", "customer"],
            },
            {
                icon: "/messages.png",
                label: "Messages",
                href: "/dashboard/messages",
                permission: ["admin", "manager", "operator", "customer"],
            },
            {
                icon: "/announcements.png",
                label: "Announcement",
                href: "/dashboard/announcement",
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
        icon: "/customer.png",
        label: "admin",
        href: "/dashboard/admin",
        permission: ["admin"],
    },
    {
        icon: "/manager.png",
        label: "manager",
        href: "/dashboard/manager",
        permission: ["admin", "manager"],
    },
    {
        icon: "/operator.png",
        label: "operator",
        href: "/dashboard/operator",
        permission: ["admin", "operator", "manager"],
    },
    {
        icon: "/customer.png",
        label: "customer",
        href: "/dashboard/customer",
        permission: ["admin", "customer"],
    }
]
