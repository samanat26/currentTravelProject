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
            type: 'collapse',
            url: '/dashboard/default',
            icon: icons.IconReportMoney,
            // breadcrumbs: false
            children: [
                {
                    id: 'refund',
                    title: 'Void and Refund',
                    type: 'item',
                    url: '/accounts/refund',
                    target: false
                },
                {
                    id: 'journalvouch',
                    title: 'Journal Voucher',
                    type: 'item',
                    url: '/accounts/journalvouch',
                    target: false
                },
                {
                    id: 'cashreciept',
                    title: 'Cash Reciept Voucher',
                    type: 'item',
                    url: '/accounts/cashreciept',
                    target: false
                },
                {
                    id: 'cashpay',
                    title: 'Cash Payment Voucher',
                    type: 'item',
                    url: '/accounts/cashpay',
                    target: false
                },
                {
                    id: 'bankpay',
                    title: 'Bank Payment Voucher',
                    type: 'item',
                    url: '/accounts/bankpay',
                    target: false
                },
                {
                    id: 'bankdeposit',
                    title: 'Bank Deposit Voucher',
                    type: 'item',
                    url: '/accounts/bankdeposit',
                    target: false
                },
            ]

        }
    ]
};

export default accounts;
