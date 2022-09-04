class Auto {
    constructor(marca, anio, motor, modelo) {
      this.marca = marca;
      this.anio = anio;
      this.motor = motor;
      this.modelo = modelo;
      this.marchar = () => {
        console.log('Estoy en marcha');
      };
      this.presentar = () => {
        console.log('Soy un auto modelo' + this.modelo + ' año: ' + this.anio);
      };
      this.vender = () => {
        console.log('Fui vendido');
      };
    }
  }

  
  const auto3 = new Auto('Audi', 2022, 3.9, 'TT');
  const auto4 = new Auto('Ford', 1974, 3.9, 'Falcon');
  const auto5 = new Auto('Fiat', 2022, 1.0, '500');
  const auto6 = new Auto('Fiat', 2003, 1.3, 'Siena');
  console.log(auto5);
  console.log('nombre' in auto3);
  console.log('marca' in auto3);
