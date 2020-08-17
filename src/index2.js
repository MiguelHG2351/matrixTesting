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
  // Verifica las peticiones de los input
  verifyColAndRow(cols, rows) {
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
canvas.width = visualViewport.width;
canvas.height = visualViewport.height;

/* Clase número 2 */

class RenderMatrix {
  width = canvas.width;

  height = canvas.height;

  centerHomothecy = Array(this.width, this.height);

  lineWidth = 6;

  constMultp = 10

  render(a, b, ctx) {
    let multp = this.multiply(a, b);
    const lineWidth = 6;

    ctx.beginPath();
    for (let i = 0; i <= multp.length; i++) {
      debugger
      if (multp[i + 1] !== undefined) {
        ctx.strokeStyle = "cyan";
        ctx.lineWidth = lineWidth;
        for (let j = 0; j <= multp[i][i]; j++) {
          if (
            multp[i][j] !== undefined &&
            multp[i + 1][j] !== undefined &&
            multp[i][j + 1] !== undefined &&
            multp[i + 1][j + 1] !== undefined
          ) {
            // ctx.moveTo(
            //   this.centerHomothecy[0] / 2,
            //   this.centerHomothecy[1] / 2
            // );
            ctx.lineTo(multp[i][j] * this.constMultp, multp[i + 1][j] * this.constMultp);
            console.log([i][j] * this.constMultp)
            ctx.lineTo(
              multp[i][j + 1] * this.constMultp,
              multp[i + 1][j + 1] * this.constMultp
            );
          } else {
            alert("Se ha producido un error")
          }
        }
      } else {
        alert("error")
      }
    }
    ctx.closePath(); // Crea un rellleno
    ctx.fill()
    ctx.stroke();
    ctx.beginPath();
  }

  renderHomothecy(a, b, ctx) {
    let multp = this.multiply(a, b);
    const razon = 2;


    for (let i = 0; i <= multp.length; i++) {
      if (multp[i + 1] !== undefined) {
        ctx.beginPath();
        for (let j = 0; j <= multp[i][i]; j++) {
          if (
            multp[i][j] !== undefined &&
            multp[i + 1][j] !== undefined &&
            multp[i][j + 1] !== undefined &&
            multp[i + 1][j + 1] !== undefined
          ) {
            ctx.strokeStyle = "red";
            ctx.lineWidth = this.lineWidth;

            ctx.moveTo(
              this.centerHomothecy[0] / 4,
              this.centerHomothecy[1] / 2
            );
            ctx.lineTo(multp[i][j] * this.constMultp, multp[i + 1][j] * this.constMultp);
            ctx.lineTo(
              multp[i][j + 1] * this.constMultp,
              multp[i + 1][j + 1] * this.constMultp
            );
            ctx.stroke(); // Crea un rellleno
            ctx.beginPath();
          }
        }
      }
    }
  }

  multiply(a, b) {
    // debugger;
    let aNumRows = a.length,
      aNumCols = a[0].length,
      bNumRows = b.length, // errorlens ignore
      bNumCols = b[0].length,
      m = new Array(aNumRows); // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0; // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          try {
            m[r][c] += a[r][i] * b[i][c];
          } catch (e) {
            console.log("Funciona!!!");
          }
        }
      }
    }
    return m;
  }
}

$formLine.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  getData(formData);
});

function renderMatrix() {
  /* Array de pruebas */

  //   const array = [
  //     [5, 3, -4, -2],
  //     [8, -1, 0, -3],
  //   ];

  //   const arrayTwo = [
  //     [1, 4, 0],
  //     [-5, 3, 7],
  //     [0, -9, 5],
  //     [5, 1, 4],
  //   ];

  let a = [
    [5, 3, -4, -2],
    [8, -1, 0, -3],
  ],
    b = [
      [1, 4, 0],
      [-5, 3, 7],
      [0, -9, 5],
      [5, 1, 4],
    ];
  // Verifica que la matriz se puede resolver
  if (new VerifyMatrix().verify(a, b)) {
    const ctx = canvas.getContext("2d");
    new RenderMatrix().render(a, b, ctx);
    // new RenderMatrix().renderHomothecy(a,b, ctx)
  } else {
    alert("No :/");
  }

  // ctx.strokeRect(150, 200, 10, 100)
}
renderMatrix();

window.addEventListener("resize", renderMatrix);
