import { db } from '~/plugins/firebase'

export const state = () => ({
  vehiculos: []
})

export const getters = {
  countVehiculos: state => state.vehiculos.length,
  getVehiculosPorListado: state => estado =>
    state.vehiculos.filter(vehiculo => vehiculo.estado === estado),
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
          slug: doc.data().slug,
          cilindros: doc.data().cilindros,
          ciudad: doc.data().ciudad,
          color: doc.data().color,
          combustible: doc.data().combustible,
          consumo: doc.data().consumo,
          estado: doc.data().estado,
          imagen: doc.data().imagen,
          kilometraje: doc.data().kilometraje,
          litros: doc.data().litros,
          pasajeros: doc.data().pasajeros,
          puertas: doc.data().puertas,
          region: doc.data().region,
          tipo: doc.data().tipo,
          transmision: doc.data().transmision
        })
      })
      commit('SETVEHICULOS', data)
    })
  },
  stopListening() {
    const unsub = db.collection('vehiculos').onSnapshot(() => {})
    unsub()
  }
}
