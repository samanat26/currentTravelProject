 
 // assets
import { IconUsers, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconUsers,
    IconDeviceAnalytics
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const contacts = {
    id: 'contacts',
    // title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'contacts',
            title: 'Contacts',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
    ]
};

export default contacts;
