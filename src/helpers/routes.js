import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const routes = [
    {
        path:'/dashboard',
        name:'Dashboard',
        icon:<StarBorderIcon></StarBorderIcon>
    },
    {
        path:'/application',
        name:'Application',
        icon:<FavoriteBorderIcon></FavoriteBorderIcon>

    },
    {
        path:'/community',
        name:'Community',
        icon:<StarBorderIcon></StarBorderIcon>

    },
    {
        path:'/affliate',
        name:'Affliate',
        icon:<StarBorderIcon></StarBorderIcon>

    },
    {
        path:'/gift',
        name:'Gift',
        icon:<FavoriteBorderIcon></FavoriteBorderIcon>
    },
    // {
    //     path:'/test',
    //     name:'Test',
    //     icon:<FavoriteBorderIcon></FavoriteBorderIcon>
    // },
    {
        path:'/setting',
        name:'Setting',
        hasborder:true,
        icon:<MoreHorizIcon></MoreHorizIcon>
    },

]
export default routes