
var fulkerson = function (graph) {
    let l = new Array(graph.vertices.length); 
    const tamanio = l.length;

    var x = new Array(tamanio);

    for (var i = 0; i < x.length; i++) {
        x[i] = new Array(tamanio);
    }

    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x.length; j++) {
            if (i === x.length-1 || j === 0) {
                x[i][j] = 0;
            } else if (graph.directedEdges[i].start.value === i+1 && graph.directedEdges[i].end.value === j+1) {
                x[i][j] = graph.directedEdges[i].value;
            } else {
                x[i][j] = 0;
            }
        }
    }

    for (var i = 0; i < x.length; i++) {
        const prueba = [];
        for (var j = 0; j < x.length; j++) {
            prueba.push(x[i][j]);
        }
        alert(prueba + ' Prueba');
    }

    /*let bgraph = [
        [ 0, 16,  13, 0,  0,  0 ],
        [ 0,  0, 10, 12,  0,  0 ],
        [ 0,  4,  0,  0, 14,  0 ],
        [ 0,  0,  9,  0,  0, 20 ],
        [ 0,  0,  0,  7,  0,  4 ],
        [ 0,  0,  0,  0,  0,  0 ]
    ];*/

    alert("El flujo maximo es: " +
        fordFulkerson(x, 0, x.length-1));
};


function bfs(rGraph, s, t, parent) {
	var visited = [];
	var queue = [];
	var V = rGraph.length;
	// Create a visited array and mark all vertices as not visited
	for (var i = 0; i < V; i++) {
		visited[i] = false;
	}
	// Create a queue, enqueue source vertex and mark source vertex as visited
	queue.push(s);
	visited[s] = true;
	parent[s] = -1;

	while (queue.length != 0) {
		var u = queue.shift();
		for (var v = 0; v < V; v++) {
			if (visited[v] == false && rGraph[u][v] > 0) {
				queue.push(v);
				parent[v] = u;
				visited[v] = true;
			}
		}
	}
	//If we reached sink in BFS starting from source, then return true, else false
	return (visited[t] == true);
}

function fordFulkerson(graph, s, t) {
	/* Create a residual graph and fill the residual graph
	 with given capacities in the original graph as
	 residual capacities in residual graph
	 Residual graph where rGraph[i][j] indicates
	 residual capacity of edge from i to j (if there
	 is an edge. If rGraph[i][j] is 0, then there is
	 not)
	*/
  if (s < 0 || t < 0 || s > graph.length-1 || t > graph.length-1){
    throw new Error("Ford-Fulkerson-Maximum-Flow :: invalid sink or source");
  }
  if(graph.length === 0){
    throw new Error("Ford-Fulkerson-Maximum-Flow :: invalid graph");
  }
	var rGraph = [];
	for (var u = 0; u < graph.length; u++) {
		var temp = [];
    if(graph[u].length !== graph.length){
      throw new Error("Ford-Fulkerson-Maximum-Flow :: invalid graph. graph needs to be NxN");
    }
		for (v = 0; v < graph.length; v++) {
			temp.push(graph[u][v]);
		}
		rGraph.push(temp);
	}
	var parent = [];
	var maxFlow = 0;

	while (bfs(rGraph, s, t, parent)) {
		var pathFlow = Number.MAX_VALUE;
		for (var v = t; v != s; v = parent[v]) {
			u = parent[v];
			pathFlow = Math.min(pathFlow, rGraph[u][v]);
		}
		for (v = t; v != s; v = parent[v]) {
			u = parent[v];
			rGraph[u][v] -= pathFlow;
			rGraph[v][u] += pathFlow;
		}


		maxFlow += pathFlow;
	}
	// Return the overall flow
	return maxFlow;
}









(function() {
    /**
     * @private
     */
    var prioritySortLow = function(a, b) {
      return b.priority - a.priority;
    };
  
    /**
     * @private
     */
    var prioritySortHigh = function(a, b) {
      return a.priority - b.priority;
    };
  
    /*global PriorityQueue */
    /**
     * @constructor
     * @class PriorityQueue manages a queue of elements with priorities. Default
     * is highest priority first.
     *
     * @param [options] If low is set to true returns lowest first.
     */
    var PriorityQueue = function(options) {
      var contents = [];
  
      var sorted = false;
      var sortStyle;
  
      if(options && options.low) {
        sortStyle = prioritySortLow;
      } else {
        sortStyle = prioritySortHigh;
      }
  
      /**
       * @private
       */
      var sort = function() {
        contents.sort(sortStyle);
        sorted = true;
      };
  
      var self = {
        /**
         * Removes and returns the next element in the queue.
         * @member PriorityQueue
         * @return The next element in the queue. If the queue is empty returns
         * undefined.
         *
         * @see PrioirtyQueue#top
         */
        pop: function() {
          if(!sorted) {
            sort();
          }
  
          var element = contents.pop();
  
          if(element) {
            return element.object;
          } else {
            return undefined;
          }
        },
  
        /**
         * Returns but does not remove the next element in the queue.
         * @member PriorityQueue
         * @return The next element in the queue. If the queue is empty returns
         * undefined.
         *
         * @see PriorityQueue#pop
         */
        top: function() {
          if(!sorted) {
            sort();
          }
  
          var element = contents[contents.length - 1];
  
          if(element) {
            return element.object;
          } else {
            return undefined;
          }
        },
  
        /**
         * @member PriorityQueue
         * @param object The object to check the queue for.
         * @returns true if the object is in the queue, false otherwise.
         */
        includes: function(object) {
          for(var i = contents.length - 1; i >= 0; i--) {
            if(contents[i].object === object) {
              return true;
            }
          }
  
          return false;
        },
  
        /**
         * @member PriorityQueue
         * @returns the current number of elements in the queue.
         */
        size: function() {
          return contents.length;
        },
  
        /**
         * @member PriorityQueue
         * @returns true if the queue is empty, false otherwise.
         */
        empty: function() {
          return contents.length === 0;
        },
  
        /**
         * @member PriorityQueue
         * @param object The object to be pushed onto the queue.
         * @param priority The priority of the object.
         */
        push: function(object, priority) {
          contents.push({object: object, priority: priority});
          sorted = false;
        }
      };
  
      return self;
    };
  })();