// assets
import { IconReportMoney, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconReportMoney,
    IconDeviceAnalytics
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const accounts = {
    id: 'accounts',
    // title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'accounts',
            title: 'Accounts',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconReportMoney,
            breadcrumbs: false
        }
    ]
};

export default accounts;
