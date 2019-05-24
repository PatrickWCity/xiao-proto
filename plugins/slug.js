import speakingurl from 'speakingurl'

const options = {
  maintainCase: false,
  separator: '-',
  lang: 'es',
  symbols: true
}

const slug = speakingurl.createSlug(options)

export default slug
