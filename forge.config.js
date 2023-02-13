module.exports = {
    //...
    makers: [
        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    maintainer: 'The Forgers',
                    homepage: 'https://example.com',
                    // icon: 'path/to/icon.svg'
                }
            }
        }

    ],
    //...
}
