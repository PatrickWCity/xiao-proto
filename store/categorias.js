import { db } from '~/plugins/firebase'
import slug from '~/plugins/slug'

export const state = () => ({
  categorias: [],
  readSuccessful: false,
  writeSuccessful: false,
  deleteSuccessful: false,
  updateSuccessful: false
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
    state.readSuccessful = true
  },
  WRITECATEGORIA(state, bool) {
    state.writeSuccessful = bool
  },
  REMOVECATEGORIA(state, bool) {
    state.deleteSuccessful = bool
  },
  UPDATECATEGORIA(state, bool) {
    state.updateSuccessful = bool
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
  },
  createCategoria({ commit }) {
    const ref = db.collection('categorias').doc('test')
    const doc = {
      nombre: 'suv',
      descripcion: 'un auto todo terreno',
      slug: slug('suv')
    }
    ref
      .set(doc)
      .then(() => {
        commit('WRITECATEGORIA', true)
      })
      .catch(() => {
        commit('WRITECATEGORIA', false)
      })
  },
  editCategoria({ commit }) {
    db.collection('categorias')
      .doc('test')
      .update({
        nombre: 'sedan',
        descripcion: 'un auto de 4 puertas',
        slug: slug('sedan')
      })
      .then(() => {
        commit('UPDATECATEGORIA', true)
      })
      .catch(() => {
        commit('UPDATECATEGORIA', false)
      })
  },
  deleteCategoria({ commit }, id) {
    db.collection('categorias')
      .doc(id)
      .delete()
      .then(() => {
        commit('REMOVECATEGORIA', true)
      })
      .catch(() => {
        commit('REMOVECATEGORIA', false)
      })
  }
}
