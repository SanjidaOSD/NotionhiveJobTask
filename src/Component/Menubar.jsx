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
        ({  title }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                  
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold hover:text-red-500"
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
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Resources
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
                    <div>
                        <img src={img1} alt="" />
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
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
            </Typography>


            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
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
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Contact Us
                </ListItem>
               
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Projects
                </ListItem>
               
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                Sustainability
                </ListItem>
               
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
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
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 shadow-none">
            <div className="flex items-center justify-between text-blue-gray-900">
                {/* logo */}
                <div>
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 lg:ml-2"
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
                <div>
                    Sign in
                </div>

                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
};

export default Menubar;