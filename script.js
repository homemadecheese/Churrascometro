function calcularChurrasco() {
      const adultos = parseInt(document.getElementById('adultos').value) || 0;
      const criancas = parseInt(document.getElementById('criancas').value) || 0;
      const adultosBebem = parseInt(document.getElementById('adultosBebem').value) || 0;

      const pessoasEquivalentes = adultos + criancas * 0.5;
      const carne = pessoasEquivalentes * 0.4; // kg
      const cerveja = adultosBebem * 3; // latas de 350ml
      const bebidasNaoAlcoolicas = (adultos + criancas) * 0.5; // litros

      const resultado = `
        <strong>Resultado:</strong><br><br>
        🥩 Carne: <strong>${carne.toFixed(2)} kg</strong><br>
        🍺 Cerveja: <strong>${cerveja} latas</strong><br>
        🧃 Bebidas (suco/refrigerante): <strong>${bebidasNaoAlcoolicas.toFixed(1)} litros</strong><br>
        <br>
        <em>(Baseado em 400g de carne por adulto, 3 latas de cerveja por adulto que bebe e 500ml de bebidas por pessoa)</em>
      `;

      document.getElementById('resultado').innerHTML = resultado;
    }