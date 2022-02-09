// assets
import { IconFileText } from '@tabler/icons';

// constant
const icons = {
    IconFileText
};

// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const booking = {
    id: 'booking',
    // title: 'Pages',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'booking',
            title: 'Booking',
            type: 'collapse',
            icon: icons.IconFileText,
            children: [
                {
                    id: 'temporarybooking',
                    title: 'Temporary Booking',
                    type: 'item',
                    url: '/booking/temporary-booking',
                    target: false
                },
                {
                    id: 'ticket',
                    title: 'Ticket',
                    type: 'item',
                    url: '/booking/ticket',
                    target: false
                },
                {
                    id: 'protector',
                    title: 'Protector',
                    type: 'item',
                    url: '/booking/protector',
                    target: false
                },
                {
                    id: 'visa',
                    title: 'Visa',
                    type: 'item',
                    url: '/booking/visa',
                    target: false
                }
            ]
        }
    ]
};

export default booking;
