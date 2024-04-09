export default function robots() {
    return {
        rules: {
            userAgents: '*',
            allow: '/',
        },
        sitemap: `${process.env.BASE_URL}/sitemap.xml`,
    };
}
