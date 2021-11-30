

        //AQUI INTERACTUAMOS CON EL HTML

        function calcularAreaCuadrado(){
            // para leer el contenido html la etiqueta input cuadrado
            const input = document.getElementById("InputCuadrado");
            // el valor del input cuadrado
            const value = input.value;
            const area = value * value;
            alert("Area cuadrado "+area);
        }
        function calcularPerimetroCuadrado(){
            const input = document.getElementById("InputCuadrado");
            const value = input.value;
            const perimetro = 4 * value;
            alert("Perimetro cuadrado "+perimetro);

        }

        ////////////////////////////////////////////////////////////////////////////////////////////////

        function calcularAreaRectangulo(){
            const inputX = document.getElementById("InputRectanguloX");
            const inputY = document.getElementById("InputRectanguloY");
            const valueX = inputX.value;
            const valueY =  inputY.value;
            const area = valueX * valueY;
            alert("Area Rectangulo " + area);
        }
        function calcularPerimetroRectangulo(){
            const inputX = document.getElementById("InputRectanguloX");
            const inputY = document.getElementById("InputRectanguloY");
            const valueX = inputX.value;
            const valueY = inputY.value;
            
            const perimetro = (2*(valueX))+(2*(valueY));

            alert("Perimetro Rectangulo " + perimetro);
        
        }

        ///////////////////////////////////////////
        function calcularAreaTriangulo(){
            const input = document.getElementById("InputTriangulo");
            const value = input.value;
            
            const area = ((Math.sqrt(3))/4)*(value * value);
            alert("Area Triangulo: " + area );
        }

        function calcularPerimetroTriangulo(){
            const input = document.getElementById("InputTriangulo");
            const value = input.value ;

            const perimetro = value * 3
            alert("Perimetro Triangulo "+  perimetro);
        }
        ///--------------------------------------------------------
        function calcularAreaCirculo(){
            const input = document.getElementById("InputCirculo");
            const value = input.value;
            const area =  Math.PI*(value * value)
            alert("Area Circulo " + area)
        }
        function calcularPerimetroCirculo(){
            const input = document.getElementById("InputCirculo");
            const value = input.value
            const perimetro = 2 * Math.PI * value 
            alert("Perimetro Circulo " + perimetro )
        }
        

     
        