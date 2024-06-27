import './SelectorVehicleType.css'

function SelectorVehicleType({ setTypeVehicle }) {
  return (
    <div className="type-vehicle">
      <label>Selecione o tipo de veiculo</label>
      <select  onChange={(e) => setTypeVehicle(e.target.value)} >
        <option value="">Selecione</option>
        <option value="carros">Carros</option>
        <option value="motos">Motos</option>
        <option value="caminhoes">Caminhões</option>
      </select >
    </div>
  );
}

export default SelectorVehicleType;