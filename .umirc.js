// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: { webpackChunkName: true },
            title: 'react-admin',
            dll: true,

            routes: {
                exclude: [
                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,
                    /components\//,
                ],
            },
        }],
    ],
    routes: [
        {
            path: '/user',
            routes: [
                {
                    path: '/user/login',
                    component: './user/login'
                }
            ]
        },
        {
            path: '/',
            component: '../layouts/index',
            Routes: ['src/pages/Authorized'],
            routes: [
                {
                    path: '/',
                    redirect: './user/login'
                },
                {
                    path: '/dashboard',
                    name: '概览',
                    icon: 'dot-chart',
                    routes: [
                        {
                            path: '/dashboard/anlysis',
                            name: '数据分析',
                            component: './dashboard/anlysis'
                        }
                    ]
                },
                {
                    path: '/products',
                    name: '商品',
                    icon: 'shop',
                    component: './products/index',
                    routes: [
                        {
                            path: ''
                        }
                    ]
                },
                // {
                //     path: '/orders',
                //     name: '订单',
                //     component: ''
                // },
                // {
                //     path: '/users',
                //     name: '用户',
                //     component: ''
                // },
                // {
                //     path: '/',
                //     name: '运营',
                //     component: ''
                // },
            ]
        }
    ]
}