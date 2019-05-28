import { db } from '~/plugins/firebase'
import slug from '~/plugins/slug'

export const state = () => ({
  vehiculos: [],
  readSuccessful: false,
  writeSuccessful: false,
  deleteSuccessful: false,
  updateSuccessful: false
})

export const getters = {
  countVehiculos: state => state.vehiculos.length,
  getVehiculoById: state => id =>
    state.vehiculos.find(vehiculo => vehiculo.id === id),
  getSomeVehiculoById: state => slug =>
    state.vehiculos.some(vehiculo => vehiculo.slug === slug),
  getVehiculoBySlug: state => slug =>
    state.vehiculos.find(vehiculo => vehiculo.slug === slug)
}

export const mutations = {
  SETVEHICULOS(state, data) {
    state.vehiculos = data
    state.readSuccessful = true
  },
  WRITEVEHICULO(state, bool) {
    state.writeSuccessful = bool
  },
  REMOVEVEHICULO(state, bool) {
    state.deleteSuccessful = bool
  },
  UPDATEVEHICULO(state, bool) {
    state.updateSuccessful = bool
  }
}

export const actions = {
  getAllVehiculos({ commit }) {
    db.collection('vehiculos').onSnapshot(snapshot => {
      const data = []
      snapshot.forEach(doc => {
        data.push({
          id: doc.id,
          marca: doc.data().marca,
          modelo: doc.data().modelo,
          anno: doc.data().anno,
          precio: doc.data().precio,
          slug: doc.data().slug
        })
      })
      commit('SETVEHICULOS', data)
    })
  },
  stopListening() {
    const unsub = db.collection('vehiculos').onSnapshot(() => {})
    unsub()
  },
  createVehiculo({ commit }) {
    const ref = db.collection('vehiculos').doc('test')
    const doc = {
      marca: 'BMW',
      modelo: 'm3',
      anno: 2018,
      precio: 7500000,
      slug: slug('BMW m3 GTR')
    }
    ref
      .set(doc)
      .then(() => {
        commit('WRITEVEHICULO', true)
      })
      .catch(() => {
        commit('WRITEVEHICULO', false)
      })
  },
  editVehiculo({ commit }) {
    db.collection('vehiculos')
      .doc('test')
      .update({
        marca: 'mercedes',
        modelo: 'bens s300',
        anno: 2019,
        precio: 6999999,
        slug: slug('mercedes s300')
      })
      .then(() => {
        commit('UPDATEVEHICULO', true)
      })
      .catch(() => {
        commit('UPDATEVEHICULO', false)
      })
  },
  deleteVehiculo({ commit }, id) {
    db.collection('vehiculos')
      .doc(id)
      .delete()
      .then(() => {
        commit('REMOVEVEHICULO', true)
      })
      .catch(() => {
        commit('REMOVEVEHICULO', false)
      })
  }
}
