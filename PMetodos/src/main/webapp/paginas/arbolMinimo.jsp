<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/estilo.css">
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="../css/style.css">
        <title>Learning canvas</title>
    </head>
    <body>
        <div id="main">
            <div id="navigation">
                <h1 id="h1Title">Graph  Project</h1>
    
                <div id="divMenu">
                   
                    <ul id="ulMenu">
                        <li class="Menu-Item" id="menuNewGraph">New Graph</li>
                        <li class="Menu-Item" id="menuAddVertex">Add vertex </li>
                        <li class="Menu-Item" id="menuAddDirectedEdge"> Add Directed Edges </li>
                        <li class="Menu-Item" id="menuAddUndirectedEdge">Add Undirected Edges </li>
                        <li class="Menu-Item" id="menuMover"> Move Vertex</li>
                    </ul>
                    <br>
                    <h3 id="h3Menu">Algorithms</h3>
                    <select id="selectAlgorithm">
                        <option value="1">Dijkstra</option>
                        <option value="2">MST using Kruskal</option>
                    </select>
    
                    <a href="#" id="executeAlgorithm" class="Run-Item">Execute</a>
                    <a href="#" id="resetGraph" class="Run-Item">Reinitialise</a>
                    <p class="made">Made in <img src="icons8-javascript.gif" alt="javascript-icon" class="js-icon"> </p>
                    <div id="author"> 
                           by<br>
                    </div>
                    <a href="https://www.linkedin.com/in/jules-clinton-saah-nembot-a48354193/" target="_blank"
                    class="name">  Nembot Jules </a>
                    <p class="copyright"> 2022, All right reserved</p>
    
                   
                </div>
            </div>
        </div>
    
        <div id="container">
            <div id="mainContainer">
                <canvas id="canvas" width="1100" height="100%" onmousemove="onMouseMove(event)"></canvas>
            </div>
           
        </div>
    
        <div id="context_menu">
            <ul>
                <li id="edit">Edit</li>
                <li id="remove">Remove</li>
            </ul>
        </div>
        <script src="../Scripts/canvas.js"></script>
        <script src="../Scripts/algorithm.js"></script>
        <script src="../Scripts/priorityQueue.js"></script>
    </body>
</html>