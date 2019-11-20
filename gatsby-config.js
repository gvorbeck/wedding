module.exports = {
    siteMetadata: {
        title: `Krishanti & Garrett`,
        menuLinks: [
            {
                name: 'Our Story',
                link: '/our-story'
            },
            {
                name: 'Schedule',
                link: '/schedule'
            },
            {
                name: 'Travel',
                link: '/travel'
            },
            {
                name: 'Registry',
                link: '/registry'
            },
            {
                name: 'Things to Do',
                link: '/things-to-do'
            },
            // {
            //     name: 'FAQs',
            //     link: '/faq'
            // }
        ],
        description: `We're getting married`,
        author: `@jgvorbeck`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
