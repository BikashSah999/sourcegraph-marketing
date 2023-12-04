import rehypePrism from '@mapbox/rehype-prism'
import remarkGfm from 'remark-gfm'

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
    },
})

export default withMDX
