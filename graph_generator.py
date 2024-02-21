import main

class GraphGenerator:
    def __init__(self, main_program):
        self.main_program = main_program

    def generate_graph(self, data):
        # Generate the graph based on the data
        # Implementation details for generating the graph
        graph = self.main_program.process_data(data)
        return graph

if __name__ == "__main__":
    program = main.MainProgram()
    graph_generator = GraphGenerator(program)
    data = []  # Define the data variable
    graph = graph_generator.generate_graph(data)
    print(graph)