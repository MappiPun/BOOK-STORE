import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { GiBookPile, GiCrystalBall, GiGhost, GiSherlockHolmes } from "react-icons/gi";
import { FaChild, FaHistory, FaMicroscope, FaLightbulb } from "react-icons/fa";
import { MdOutlineMenuBook, MdClose } from "react-icons/md";
import Logo from "../../assets/images/logo1.png";

const CategoryPanel = ({ isOpenPanel, setIsOpenPanel }) => {

    const categories = [
        { title: 'Fiction', icon: <GiBookPile />, slug: '/fiction' },
        { title: 'Non-Fiction', icon: <MdOutlineMenuBook />, slug: '/non-fiction' },
        { title: 'Mystery', icon: <GiSherlockHolmes />, slug: '/mystery' },
        { title: 'Horror', icon: <GiGhost />, slug: '/horror' },
        { title: 'Sci-Fi & Fantasy', icon: <GiCrystalBall />, slug: '/sci-fi' },
        { title: 'History', icon: <FaHistory />, slug: '/history' },
        { title: 'Science', icon: <FaMicroscope />, slug: '/science' },
        { title: "Children's Books", icon: <FaChild />, slug: '/children' },
        { title: 'Specialty', icon: <FaLightbulb />, slug: '/specialty' },
    ];

    return (
        <Drawer open={isOpenPanel} onClose={() => setIsOpenPanel(false)}>
            <Box sx={{ width: 350, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }} role="presentation">
                
                <Box className="p-8 bg-shop-dark-green text-white text-center flex flex-col items-center justify-center relative">
                    <IconButton 
                        onClick={() => setIsOpenPanel(false)}
                        className="!absolute top-2 right-2 !text-white hover:!bg-white/20 transition-all"
                    >
                        <MdClose />
                    </IconButton>

                    <Typography variant="h5" className="font-bold tracking-tight w-full !mb-1">
                        Shop by Category
                    </Typography>
                    <Typography variant="body2" className="opacity-80 w-full block">
                        Find your next favorite book
                    </Typography>
                </Box>
                
                <List className="py-4 flex-grow overflow-y-auto">
                    {categories.map((item) => (
                        <ListItem key={item.title} disablePadding className="mb-1">
                            <Link 
                                to={item.slug} 
                                className="w-full no-underline text-inherit"
                                onClick={() => setIsOpenPanel(false)}
                            >
                                <ListItemButton className="hover:bg-shop-light-pink transition-all py-3 px-6">
                                    <ListItemIcon className="text-[26px] text-shop-light-green min-w-[55px]">
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={item.title} 
                                        primaryTypographyProps={{ 
                                            fontSize: '17px', 
                                            fontWeight: '600',
                                            letterSpacing: '0.5px'
                                        }}
                                    />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>

                <Box className="p-10 flex justify-center items-center border-t border-gray-100">
                    <img 
                        src={Logo} 
                        alt="Logo" 
                        style={{ 
                            width: '160px', 
                            height: 'auto', 
                            display: 'block',
                            pointerEvents: 'none',
                            userSelect: 'none'
                        }} 
                    />
                </Box>
            </Box>
        </Drawer>
    );
};

export default CategoryPanel;