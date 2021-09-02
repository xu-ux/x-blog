module.exports = [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide/' },
    { text: 'External', link: 'https://google.com' },
    {
        text: 'Languages',
        items: [
            { text: 'Group1', items: [
                    {
                        text: '中文',
                        link: '/guide/zh/'
                    },
                    {
                        text: 'En',
                        link: '/guide/en/'
                    }

                ] },
            { text: 'Group2', items: [/*  */] }
        ]
    }
]