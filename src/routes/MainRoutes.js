import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const TemporaryBooking = Loadable(lazy(() => import('views/booking/TemporaryBooking')));
const Ticket = Loadable(lazy(() => import('views/booking/Ticket')));
const Protector = Loadable(lazy(() => import('views/booking/Protector')));
const Visa = Loadable(lazy(() => import('views/booking/Visa')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// vouchers routing

const BankDepositVoch= Loadable(lazy(() => import('views/accounts/BankDepositVoch')));
const BankPayVoch= Loadable(lazy(() => import('views/accounts/BankPayVoch')));
const CashPayVoch= Loadable(lazy(() => import('views/accounts/CashPayVoch')));
const CashReceiptVoch= Loadable(lazy(() => import('views/accounts/CashReceiptVoch')));
const JournalVoch= Loadable(lazy(() => import('views/accounts/JournalVoch')));
const Refund= Loadable(lazy(() => import('views/accounts/Refund')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },

     // .......................bookings....................   
        {
            path: '/booking/temporary-booking',
            element: <TemporaryBooking />
        },
        {
            path: '/booking/ticket',
            element: <Ticket />
        },
        {
            path: '/booking/protector',
            element: <Protector/>
        },
        {
            path: '/booking/visa',
            element: <Visa />
        },
            // ..........................vouchers........................

        {
            path: '/accounts/bankdeposit',
            element: <BankDepositVoch />
        },
        {
            path: '/accounts/bankpay',
            element: <BankPayVoch />
        },
        {
            path: '/accounts/cashpay',
            element: <CashPayVoch />
        },
        {
            path: '/accounts/cashreciept',
            element: <CashReceiptVoch />
        },
        {
            path: '/accounts/journalvouch',
            element: <JournalVoch />
        },
        {
            path: '/accounts/refund',
            element: <Refund />
        },
            // ........................................................
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },

        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
