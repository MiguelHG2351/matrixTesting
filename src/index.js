const canvas = document.getElementById("canvas");
const $formLine = document.getElementById("formLine");
const app = document.getElementById("app");

class VerifyMatrix {
  // Verifica que el número de columnas no se ha diferente
  verifyMatrixLength(firstMatrix, secondaryMatrix) {
    const equalFirstMatrix = firstMatrix[0].length;
    const equalSecondaryMatrix = secondaryMatrix[0].length;
    if (
      firstMatrix.every((e) => e.length === equalFirstMatrix) &&
      secondaryMatrix.every((e) => e.length === equalSecondaryMatrix) &&
      typeof firstMatrix !== "number" &&
      typeof secondaryMatrix !== "number"
    ) {
      return true;
    } else false;
  }
  // Verifica que el número de columnas sea igual al de filas de la segunda matriz
  verifyMath(firstMatrix, secondaryMatrix) {
    if (
      firstMatrix[0].length === secondaryMatrix.length &&
      Array.isArray(firstMatrix) &&
      Array.isArray(secondaryMatrix)
    ) {
      return true;
    } else false;
  }
  verifyColAndRow(cols, rows) {
    console.log(cols[0], rows[1])
    if (cols[0] === rows[1]) return true;
    else return false;
  }
  // Verifica todo
  verify(firstMatrix, secondaryMatrix) {
    const reply = this.verifyMatrixLength(firstMatrix, secondaryMatrix);
    const comparate = this.verifyMath(firstMatrix, secondaryMatrix);
    if (reply && comparate) {
      return true;
    } else {
      document.location =
        "https://media.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif";
    }
  }

  /* Fin de las clase */
}

class RenderMatrix {
  render() {
    return 0;
  }

  multiply(a, b) {
    // debugger;
    var aNumRows = a.length,
      aNumCols = a[0].length,
      bNumRows = b.length,
      bNumCols = b[0].length,
      m = new Array(aNumRows); // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0; // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  }
}

const array = [
  [5, 3, -4, -2],
  [8, -1, 0, -3],
];

const arrayTwo = [
  [1, 4, 0],
  [-5, 3, 7],
  [0, -9, 5],
  [5, 1, 4],
];

const experimento = new VerifyMatrix().verify(array, arrayTwo);
console.log(experimento);

function multiply(a, b) {
  // debugger;
  var aNumRows = a.length,
    aNumCols = a[0].length,
    bNumRows = b.length,
    bNumCols = b[0].length,
    m = new Array(aNumRows); // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0; // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

function display(m) {
  for (var r = 0; r < m.length; ++r) {
    document.write("&nbsp;&nbsp;" + m[r].join(" ") + "<br />");
  }
}

var a = [
    [5, 3, -4, -2],
    [8, -1, 0, -3],
  ],
  b = [
    [1, 4, 0],
    [-5, 3, 7],
    [0, -9, 5],
    [5, 1, 4],
  ];

function renderTemplate(col1, col2, row1, row2) {
  return `
  
  `;
}

function getData(formData) {
  const col1 = Number(formData.get("col1"));
  const col2 = Number(formData.get("col2"));
  const row1 = Number(formData.get("row1"));
  const row2 = Number(formData.get("row2"));
  if (col1 + col2 + col2 + row2 === 0) {
    alert("Lo siento hay una matriz nula");
  } else {
    const matrix = new Array([col1, row1], [col2, row2]);
    validateMatrix = new VerifyMatrix().verifyColAndRow(matrix[0], matrix[1]);
    console.log(validateMatrix)
    if(!validateMatrix) {
      alert("No se puede multiplicar la matriz");
      console.log(matrix);
    } else {
      alert(matrix);
    }
  }
}

$formLine.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  getData(formData);
});

const ctx = canvas.getContext("2d");
const razon = 2;
function renderMatrix() {
  const height = canvas.height;
  const width = canvas.width;
  console.log(canvas.width, canvas.height);
  // ctx.lineTo(20, 150);
  function renderCanvas() {
    const firstMatrix = [
      [45, 45, 12, 5],
      [45, 12, 8, 5],
    ];
    const secondaryMatrix = [
      [45, 45, 12, 5],
      [45, 45, 12, 5],
    ];
    if (firstMatrix.length === secondaryMatrix.length) {
      const newMatrix = [firstMatrix, secondaryMatrix];
    } else {
      alert("No son divisibles");
    }

    const centerHomothecy = Array(width / 5, height / 2)

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 6
    // Se indica el centro de la homotecia
    ctx.lineTo(centerHomothecy[0], centerHomothecy[1]);
    ctx.lineTo(centerHomothecy[0] + 320, 100);
    ctx.stroke();
    // Second path
    ctx.beginPath(); // Cierra la línea anterior
    ctx.lineWidth = 6
    ctx.strokeStyle = 'yellow';
    ctx.lineTo(centerHomothecy[0], centerHomothecy[1]);
    ctx.lineTo(centerHomothecy[0] + 320, 180);
    ctx.stroke();  
    // Tercer path
    ctx.beginPath(); // Cierra la línea anterior
    ctx.lineWidth = 6
    ctx.strokeStyle = 'red';
    ctx.lineTo(centerHomothecy[0], centerHomothecy[1]);
    ctx.lineTo(centerHomothecy[0] + 320, 250);
    ctx.stroke();

    ctx.beginPath(); // Cierra la línea anterior
    ctx.lineWidth = 6
    ctx.strokeStyle = 'orange';
    ctx.lineTo(centerHomothecy[0], centerHomothecy[1]);
    ctx.lineTo(centerHomothecy[0] + 320, 400);
    ctx.stroke();
    
    ctx.beginPath(); // Cierra la línea anterior
    ctx.lineWidth = 6
    ctx.strokeStyle = 'purple';
    ctx.lineTo(centerHomothecy[0] + (320/2), 220);
    ctx.lineTo(centerHomothecy[0] + (320/2), 170);
    ctx.stroke();


  }

  renderCanvas();
  // ctx.strokeRect(150, 200, 10, 100)
}
renderMatrix();
