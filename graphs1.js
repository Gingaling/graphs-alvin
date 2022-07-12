// Traversing a graph - Depth First Search (graph represented as an object, search utilizes a stack [array - LIFO])

function depthFirstPrintGraph(graph, source) {
    const stack = [ source ];
    while (stack.length > 0) {
        const current  = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d:['f'],
    e:[],
    f: []
}

depthFirstPrintGraph(graph, 'a');

// Same as above except coded recursively

function depthFirstPrintGraph(graph, source) {
	console.log(source);
	for (let neighbor of graph[source]) {
		depthFirstPrintGraph(graph, neighbor);
	}
}

const graph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: []
};

depthFirstPrintGraph(graph, 'a');

// Traversing a graph - Breadth First Search (graph is an object, search utilizes a queue )

function breadthFirstPrint(graph, source) {
    const queue = [ source ];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}

const graph = {
	a: ['c', 'b'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: []
};

breadthFirstPrint(graph, 'a');

// Want to generate true or false, whether there is a path from source to destination
