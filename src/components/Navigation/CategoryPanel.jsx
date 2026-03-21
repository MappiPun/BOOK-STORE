import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { GiBookPile, GiCrystalBall, GiGhost, GiSherlockHolmes } from "react-icons/gi";
import { FaChild, FaHistory, FaGraduationCap, FaLightbulb, FaLeaf } from "react-icons/fa";
import { MdOutlineMenuBook, MdClose } from "react-icons/md";
import Logo from "../../assets/images/logo1.png";

const CategoryPanel = ({ isOpenPanel, setIsOpenPanel }) => {

    // Updated Category List to match your new requirements
    const categories = [
        { title: 'Fiction', icon: <GiBookPile />, slug: '/category/Fiction' },
        { title: 'Non-Fiction', icon: <MdOutlineMenuBook />, slug: '/category/Non-Fiction' },
        { title: 'Mystery', icon: <GiSherlockHolmes />, slug: '/category/Mystery' },
        { title: 'Horror', icon: <GiGhost />, slug: '/category/Horror' },
        { title: 'SciFi & Fantasy', icon: <GiCrystalBall />, slug: '/category/SciFi & Fantasy' },
        { title: 'History', icon: <FaHistory />, slug: '/category/History' },
        { title: 'Education', icon: <FaGraduationCap />, slug: '/category/Education' },
        { title: 'Children Book', icon: <FaChild />, slug: '/category/Children Book' },
        { title: 'Lifestyle', icon: <FaLeaf />, slug: '/category/Lifestyle' },
        { title: 'Speciality', icon: <FaLightbulb />, slug: '/category/Speciality' },
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
                    <img src={Logo} alt="Logo" style={{ width: '160px', height: 'auto' }} />
                </Box>
            </Box>
        </Drawer>
    );
};

export default CategoryPanel;