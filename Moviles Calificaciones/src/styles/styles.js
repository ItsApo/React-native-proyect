import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centerFormulario: {
    flex: 1,
    backgroundColor: '#B480FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloCalificaciones: {
    marginTop: -10,
    fontSize: 40,
    color: 'black',
  },

  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tableCell: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    padding: 5,
  },
  estudianteInfo: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
  },

  grande: {
    fontSize: 34,
    color: 'white',
  },

  observacionGana: {
    color: 'green',
  },

  observacionPierde: {
    color: 'red',
  },

  observacionHabilita: {
    color: 'orange',
  },
});

export default styles;
