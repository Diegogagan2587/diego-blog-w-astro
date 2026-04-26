// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import remarkWikiLink from '@braindb/remark-wiki-link'
import { brainDbAstro } from '@braindb/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://dvloper-z.com/',
  integrations: [mdx(), sitemap(), react(), brainDbAstro({ remarkWikiLink: false})],
  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          linkTemplate: ({ slug, alias }) => {
            const [slugWithoutAnchor, anchor] = slug.split("#");
            
            // Convert slug to URL - matches Astro's [...slug] routing
            const url = `/${slugWithoutAnchor}${anchor ? `#${anchor}` : ''}`;
            
            return {
              hName: "a",
              hProperties: {
                href: url,
                class: "wiki-link",
              },
              hChildren: [
                {
                  type: "text",
                  value: alias || slugWithoutAnchor,
                },
              ],
            };
          },
        },
      ],
    ]
  },
  vite: {
    plugins: [tailwindcss()],
  },
});


