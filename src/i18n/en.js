export default {
    pos: {
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            order: {
                items: 'by %{user_name}, one item |||| by %{user_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to admin-on-rest demo',
                subtitle: 'This is the admin of an imaginary poster shop. Fell free to explore and modify the data - it\'s local to your computer, and will reset each time you reload.',
                aor_button: 'Admin-on-rest website',
                demo_button: 'Source for this demo',
            },
        },
    },
    resources: {
        employees: {
            name: 'Employee |||| Employees',
            fields: {
                name: 'Name',
            },
            tabs: {
                identity: 'Identity',
                address: 'Address',
            },
            page: {
                delete: 'Delete employee',
            },
        },
        customers: {
            name: 'Customer |||| Customers',
            fields: {
                name: 'Name',
            },
            tabs: {
                identity: 'Identity',
                address: 'Address',
            },
            page: {
                delete: 'Delete customer',
            },
        },
    },
};
