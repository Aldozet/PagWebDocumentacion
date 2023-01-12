<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/estilo.css">
        <link rel="stylesheet" href="../css/style.css">
        <title>Learning canvas</title>
    </head>
    <body>
        <div id="main">
            <div id="navigation">
                <h1 id="h1Title">Arbol Minimo</h1>
    
                <div id="divMenu">
                   
                    <ul id="ulMenu">
                        <li class="Menu-Item" id="menuNewGraph">Nuevo Grafico</li>
                        <li class="Menu-Item" id="menuAddVertex">Aniadir Circulo </li>
                        <li class="Menu-Item" id="menuAddDirectedEdge">Aniadir Linea </li>
                    </ul>
                    <br>
                    <h3 id="h3Menu">MST using Kruskal</h3>
                    <select id="selectAlgorithm">
                        <option value="2">MST using Kruskal</option>
                    </select>
    
                    <a href="#" id="executeAlgorithm" class="Run-Item">Execute</a>
                    <a href="#" id="resetGraph" class="Run-Item">Reinitialise</a>                   
                </div>
            </div>
        </div>
    
        <div id="container">
            <div id="mainContainer">
                <canvas id="canvas" width="1100" height="100%" onmousemove="onMouseMove(event)"></canvas>
            </div>
        </div>
        <script src="../Scripts/canva.js"></script>
        <script src="../Scripts/algorithm.js"></script>
        <script src="../Scripts/priorityQueue.js"></script>
    </body>
</html>