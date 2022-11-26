import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, Tab, Tabs } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';


const stylediv = {
    marginTop: '7rem'
}

const Header = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <AppBar sx={{ backgroundColor: '#263238', textColor: 'secondary' }}>
                <Toolbar>
                    <Typography>
                        <ImportContactsTwoToneIcon />
                    </Typography>
                    <Tabs value={value} onChange={(e, val) => setValue(val)} textColor="inherit" indicatorColor="secondary">
                        <Tab LinkComponent={NavLink} to='/books' label="Books" />
                        <Tab LinkComponent={NavLink} to='/addbook' label="AddBook" />
                        <Tab LinkComponent={NavLink} to='/aboutus' label="AboutUs" />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <div style={stylediv}></div>
        </div>
    )
}

export default Header