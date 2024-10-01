export const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "manager", "operator", "customer"],
      },
      {
        icon: "/teacher.png",
        label: "Manager Dashboard",
        href: "/list/manager",
        visible: ["admin", "manager"],
      },
      {
        icon: "/student.png",
        label: "Customer",
        href: "/list/customer",
        visible: ["admin", "customer"],
      },
      {
        icon: "/parent.png",
        label: "Operator Dashboard",
        href: "/list/operator",
        visible: ["admin", "operator", "manager"],
      },
      {
        icon: "/subject.png",
        label: "Salons",
        href: "/list/salones",
        visible: ["admin", "manager"],
      },
      {
        icon: "/class.png",
        label: "Salon Services",
        href: "/list/services",
        visible: ["admin", "manager"],
      },
      //   {
      //     icon: "/lesson.png",
      //     label: "Lessons",
      //     href: "/list/lessons",
      //     visible: ["admin", "teacher"],
      //   },
      //   {
      //     icon: "/exam.png",
      //     label: "Exams",
      //     href: "/list/exams",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
      //   {
      //     icon: "/assignment.png",
      //     label: "Assignments",
      //     href: "/list/assignments",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
      //   {
      //     icon: "/result.png",
      //     label: "Results",
      //     href: "/list/results",
      //     visible: ["admin", "teacher", "student", "parent"],
      //   },
      {
        icon: "/attendance.png",
        label: "History",
        href: "/list/history",
        visible: ["admin", "manager", "operator", "customer"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "manager", "operator", "customer"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "manager", "operator", "customer"],
      },
      {
        icon: "/announcement.png",
        label: "Announcement",
        href: "/list/announcement",
        visible: ["admin", "manager", "operator", "customer"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "manager", "operator", "customer"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "manager", "operator", "customer"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "manager", "operator", "customer"],
      },
    ],
  },
];
