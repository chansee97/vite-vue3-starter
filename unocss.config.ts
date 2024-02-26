import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss'

// https://github.com/unocss/unocss
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
  },
  safelist: [],
  transformers: [
    transformerVariantGroup(),
  ],
})
