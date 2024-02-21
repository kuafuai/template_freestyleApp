class GraphGenerator:
    def __init__(self, main_program):
        self.main_program = main_program

    def generate_graph(self, data: Any) -> Graph:
        # Generate the graph based on the data
        graph = Graph()
        # ...
        return graph


if __name__ == "__main__":
    program = MainProgram()
    graph_generator = GraphGenerator(program)
    data = ...
    generated_graph = graph_generator.generate_graph(data)
    # Use the generated graph as needed
