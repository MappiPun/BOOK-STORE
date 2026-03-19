import React from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const CategoryPanel = (props) => {
  // 1. We removed the internal [open, setOpen] because the parent is controlling this now.

  const DrawerList = (
    // 2. Use an arrow function so it only runs on click: () => props.setIsOpenPanel(false)
    <Box sx={{ width: 250 }} role="presentation" onClick={() => props.setIsOpenPanel(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* 3. Fixed the typo (isOpenPanel) and added the arrow function to onClose */}
      <Drawer open={props.isOpenPanel} onClose={() => props.setIsOpenPanel(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default CategoryPanel;