import React from "react";
import img1 from '../assets/menubar.png'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoSearchOutline } from "react-icons/io5";


const navListMenuItems = [
    {
        title: "By Size",

    },
    {
        title: "By Type",

    },
    {
        title: "By Panel",

    },
    {
        title: "Small Bifolds",

    },
    {
        title: "Stock Bifolds",

    },
    {
        title: "2 Panel Bifolds",

    },
    {
        title: "Medium Bifolds",

    },
    {
        title: "Corner Bifolds",

    },
    {
        title: "3 Panel Bifolds",

    },
    {
        title: "Large Bifolds",

    },
    {
        title: " ",

    },
    {
        title: "4 panel Bifolds",

    },
    {
        title: "All Stock Bifolds",

    },
    {
        title: " ",

    },
    {
        title: "5 panel Bifolds",

    },
    {
        title: " ",

    },
    {
        title: " ",

    },
    {
        title: "6 panel Bifolds",

    },
    {
        title: " ",

    },
    {
        title: " ",

    },
    {
        title: "7 panel Bifolds",

    },
    {
        title: " ",

    },

];


function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ title }, key) => (
            <a href="#" key={key}>
                <MenuItem className="menu_list_item flex items-center gap-3 rounded-lg">

                    <div>
                        <Typography
                            variant="h6"
                            color=""
                            className="flex items-center text-black hover:text-red-500 text-sm font-bold"
                        >
                            {title}
                        </Typography>

                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 15 }}
                placement="bottom"
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="menu_list_item flex items-center gap-2 py-2 pr-4 font-medium text-black lg:text-white hover:text-red-500"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <span className="menu_list_item">
                                Resources
                            </span>

                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[1140px] mx-auto ml-[107px] rounded-xl lg:flex justify-between shadow-none border-none">
                    <ul className="grid grid-cols-3 gap-y-2 gap-x-24 outline-none outline-0">
                        {renderItems}
                    </ul>
                    <div className="relative">
                        <img src={img1} alt="" />
                        <div className="absolute top-[50%] left-[10%] text-white">
                            <h1 className="text-3xl my-3">Bespoke Bifolds</h1>
                            <p className="my-2">Our most popular bifold. Perfect for <br /> thermal efficiency.</p>
                            <p>Create your own</p>
                        </div>
                    </div>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color=""
                className="font-medium hover:bg-transparent"
            >
                <ListItem className="flex text-black menu_list_item lg:text-white items-center gap-2 py-2 hover:text-red-500 pr-4">Home</ListItem>
            </Typography>


            <Typography
                as="a"
                href="#"
                variant="small"
                color=""
                className="font-medium"
            >
                <ListItem className="menu_list_item flex items-center text-black lg:text-white hover:text-red-500 gap-2 py-2 pr-4">
                    About
                </ListItem>
            </Typography>

            {/* ........ */}
            <NavListMenu />
            {/* ....... */}
            <Typography
                as="a"
                href="#"
                variant="small"
                color=""
                className="font-medium"
            >
                <ListItem className="menu_list_item flex hover:text-red-500 text-black lg:text-white items-center gap-2 py-2 pr-4">
                    Contact Us
                </ListItem>

            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color=""
                className="font-medium"
            >
                <ListItem className="menu_list_item hover:text-red-500 flex text-black lg:text-white items-center gap-2 py-2 pr-4">
                    Projects
                </ListItem>

            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color=""
                className="font-medium"
            >
                <ListItem className="menu_list_item flex hover:text-red-500 text-black lg:text-white items-center gap-2 py-2 pr-4">
                    Sustainability
                </ListItem>

            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color=""
                className="font-medium"
            >
                <ListItem className="menu_list_item bg-transparent flex hover:text-red-500 text-black lg:text-white items-center gap-2 py-2 pr-4">
                    more
                </ListItem>

            </Typography>
        </List>
    );
}

const Menubar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <div className="mx-auto relative container">
            <div className="mx-auto px-4 py-2 main_menu_bar bg-transparent blur-none bg-opacity-0 shadow-none border-none absolute z-50 mt-3 sm:mt-12 top-[0%] left-[50%] w-full translate-x-[-50%]">
                <div className="flex items-center justify-between text-white">
                    {/* logo */}
                    <div>
                        <Typography
                            as="a"
                            href="#"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-4xl"
                        >
                            LOGO
                        </Typography>
                    </div>
                    {/* menu item */}

                    <div>
                        <div className="hidden lg:block">
                            <NavList />
                        </div>
                    </div>
                    {/* sign in */}

                    <div className="flex items-center gap-4 font-semibold">
                        <IoSearchOutline></IoSearchOutline>
                        <span className="menu_list_item cursor-pointer hover:text-red-500">
                            Sign in
                        </span>
                    </div>

                    <IconButton
                        variant="text"
                        color=""
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav} className="bg-white rounded-lg text-black w-full">
                    <NavList />
                </Collapse>
            </div>
        </div>
    );
};

export default Menubar;