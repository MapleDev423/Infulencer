import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
const routes = [
    {
        path:'/dashboard',
        name:'Main',
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
    {
        path:'/test',
        name:'Test',
        icon:<FavoriteBorderIcon></FavoriteBorderIcon>
    },
]
export default routes