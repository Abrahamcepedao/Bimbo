//Material UI
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';

//Next theme
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';


const DarkMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius:5,
    minWidth: 180,
    color: '#FCFBFC',
    background: '#111D2B',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 10px 15px',
    padding: '5px',
    '& .MuiMenu-list': {
      padding: '0px',
    },
    '& .MuiMenuItem-root': {
        borderRadius: '5px',
        '& .MuiSvgIcon-root': {
            fontSize: 18,
            marginRight: theme.spacing(1.5),
        },
        '&:hover': {
            backgroundColor: '#1A2C3E',
        },
    },
  },
}));

const LightMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius:5,
    minWidth: 180,
    maxHeight: 300,
    color: '#0C1B2A',
    background: '#f1f2f6',
    padding: '5px',
    '& .MuiMenu-list': {
      padding: '0px',
    },
    '& .MuiMenuItem-root': {
        borderRadius: '5px',
        '& .MuiSvgIcon-root': {
            fontSize: 18,
            marginRight: theme.spacing(1.5),
        },
        '&:hover': {
            backgroundColor: '#FCFBFC',
        },
    },
  },
}));

const MenuWrapper = (props: MenuProps) => {
  /* const { theme } = useTheme();
  const pathname = usePathname();
  const MenuComponent = (theme === 'dark' || pathname.includes('landing')) ? DarkMenu : LightMenu; */
  const MenuComponent = LightMenu;

  return <MenuComponent {...props} />;
};

export { MenuWrapper }