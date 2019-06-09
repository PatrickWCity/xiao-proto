import { db } from '~/plugins/firebase'

export const state = () => ({
  categorias: []
})

export const getters = {
  countCategorias: state => state.categorias.length,
  getCategoriaById: state => id =>
    state.categorias.find(categoria => categoria.id === id),
  getSomeCategoriaById: state => slug =>
    state.categorias.some(categoria => categoria.slug === slug),
  getCategoriaBySlug: state => slug =>
    state.categorias.find(categoria => categoria.slug === slug)
}

export const mutations = {
  SETCATEGORIAS(state, data) {
    state.categorias = data
  }
}

export const actions = {
  getAllCategorias({ commit }) {
    db.collection('categorias').onSnapshot(snapshot => {
      const data = []
      snapshot.forEach(doc => {
        data.push({
          id: doc.id,
          nombre: doc.data().nombre,
          descripcion: doc.data().descripcion,
          slug: doc.data().slug
        })
      })
      commit('SETCATEGORIAS', data)
    })
  },
  stopListening() {
    const unsub = db.collection('categorias').onSnapshot(() => {})
    unsub()
  }
}
