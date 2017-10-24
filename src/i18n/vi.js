export default {
    pos: {
        search: 'Tìm kiếm',
        configuration: 'Tùy chỉnh',
        language: 'Ngôn ngữ',
        theme: {
            name: 'Giao diện',
            light: 'Sáng',
            dark: 'Tối',
        },
        dashboard: {
            order: {
                items: 'theo %{user_name}, kết quả |||| theo %{user_name}, %{nb_items} kết quả',
            },
            welcome: {
                title: 'Xin chào!',
                subtitle: 'Một vài mô tả~~.',
                aor_button: 'Admin-on-rest templates',
                demo_button: 'Source for this demo',
            },
        },
    },
    resources: {
        employees: {
            name: 'Thành viên',
            fields: {
                name: 'Tên',
            },
            tabs: {
                identity: 'Thông tin cá nhân',
                address: 'Địa chỉ',
            },
            page: {
                delete: 'Xóa thành viên',
            },
        },
        customers: {
            name: 'Khách hàng',
            fields: {
                name: 'Tên',
            },
            tabs: {
                identity: 'Thông tin cá nhân',
                address: 'Địa chỉ',
            },
            page: {
                delete: 'Xóa khách hàng',
            },
        },
    },
};
