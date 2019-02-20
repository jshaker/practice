class Node {
    constructor(data) {
        this.data = data;
        this.adjacentNodes = [];
    }
    
    to(node) {
        this.adjacentNodes.push(node);
    }

}

function getBuildOrder(projects, dependencies) {
    const buildSize = projects.length;
    const buildOrder = [];
    dependencies.forEach(([project, dependentProject]) => {
        project.to(dependentProject);
    });
    while (true) {
        const independentProjects = projects.filter((project) => {
            return !projects.find((p) => {
                return p.adjacentNodes.includes(project);
            });
        });
        if (independentProjects.length === 0) {
            break;
        }
        independentProjects.forEach((project) => {
            project.adjacentNodes = [];
            const index = projects.findIndex((p) => p === project);
            projects.splice(index, 1); 
        });
        buildOrder.push(...independentProjects);
    }
    if (buildOrder.length !== buildSize) {
        throw new Error('There is no proper build order for these projects.');
    } else {
        return buildOrder;
    }
    
}

const p1 = new Node(1);
const p2 = new Node(2);
const p3 = new Node(3);
const p4 = new Node(4);
const p5 = new Node(5);
const p6 = new Node(6);
const p7 = new Node(7);
const projects = [p1,p2,p3,p4,p5,p6,p7];
const dependencies = [[p4,p1],[p4,p2],[p4,p3],[p1,p2],[p1,p3],[p5,p4],[p6,p4],[p7,p6],[p7,p5]];

const buildOrder = getBuildOrder(projects, dependencies);
console.log('result', buildOrder);
